const waveLifetime = 620
const waveInterval = 120
const maxWaves = 3

const vertexSource = `#version 300 es
void main() {
  vec2 corner = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  gl_Position = vec4(corner * 2.0 - 1.0, 0.0, 1.0);
}`

const fragmentSource = `#version 300 es
precision highp float;
uniform sampler2D uImage;
uniform vec2 uResolution;
uniform vec2 uImageSize;
uniform vec3 uWaves[3];
out vec4 color;

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  vec2 point = uv * uImageSize;
  float diagonal = length(uImageSize);
  float bandwidth = max(20.0, diagonal * 0.13);
  vec2 offset = vec2(0.0);
  float reflection = 0.0;

  for (int i = 0; i < 3; i++) {
    vec3 wave = uWaves[i];
    float age = wave.z;
    if (age >= 1.0) continue;

    vec2 ray = point - wave.xy;
    float distanceFromOrigin = length(ray);
    float travel = (distanceFromOrigin - diagonal * age * 1.08) / bandwidth;
    float envelope = exp(-travel * travel) * (1.0 - smoothstep(0.38, 1.0, age));
    float bend = sin(travel * 4.8) * envelope;
    offset += ray / max(distanceFromOrigin, 1.0) * bend * min(16.0, diagonal * 0.026);
    reflection += max(0.0, bend) * 0.085;
  }

  vec2 refracted = clamp(uv + offset / uImageSize, vec2(0.0), vec2(1.0));
  color = texture(uImage, refracted);
  color.rgb = mix(color.rgb, vec3(1.0), min(reflection, 0.14));
}`

function compileShader(gl: WebGL2RenderingContext, type: number, source: string) {
  const shader = gl.createShader(type)
  if (!shader) return null
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) return shader
  gl.deleteShader(shader)
  return null
}

export function createScreenshotRipple() {
  const canvas = document.createElement("canvas")
  const context = canvas.getContext("webgl2", { antialias: false, depth: false, stencil: false })
  if (!context) return null
  const gl = context

  const vertex = compileShader(gl, gl.VERTEX_SHADER, vertexSource)
  const fragment = compileShader(gl, gl.FRAGMENT_SHADER, fragmentSource)
  const program = gl.createProgram()
  const texture = gl.createTexture()
  if (vertex && fragment && program && texture) {
    gl.attachShader(program, vertex)
    gl.attachShader(program, fragment)
    gl.linkProgram(program)
  }
  gl.deleteShader(vertex)
  gl.deleteShader(fragment)
  if (!program || !texture || !gl.getProgramParameter(program, gl.LINK_STATUS)) {
    gl.deleteProgram(program)
    gl.deleteTexture(texture)
    return null
  }

  canvas.setAttribute("aria-hidden", "true")
  canvas.className = "pointer-events-none absolute"
  canvas.hidden = true
  gl.useProgram(program)
  const waveUniform = gl.getUniformLocation(program, "uWaves[0]")
  const resolutionUniform = gl.getUniformLocation(program, "uResolution")
  const sizeUniform = gl.getUniformLocation(program, "uImageSize")
  gl.bindTexture(gl.TEXTURE_2D, texture)
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)

  let activeImage: HTMLImageElement | null = null
  let frame = 0
  let lastWaveAt = -Infinity
  let imageWidth = 0
  let imageHeight = 0
  const waves: { x: number; y: number; startedAt: number }[] = []
  const uniforms = new Float32Array(maxWaves * 3)

  function stop() {
    cancelAnimationFrame(frame)
    frame = 0
    lastWaveAt = -Infinity
    waves.length = 0
    canvas.hidden = true
    canvas.remove()
  }

  function render(now: number) {
    frame = 0
    while (waves.length && now - waves[0].startedAt >= waveLifetime) waves.shift()
    if (!waves.length || !canvas.isConnected || gl.isContextLost()) {
      stop()
      return
    }

    for (let index = 0; index < maxWaves; index += 1) {
      const wave = waves[index]
      uniforms[index * 3] = wave?.x ?? 0
      uniforms[index * 3 + 1] = wave?.y ?? 0
      uniforms[index * 3 + 2] = wave ? Math.max(0, (now - wave.startedAt) / waveLifetime) : 1
    }
    gl.uniform3fv(waveUniform, uniforms)
    gl.drawArrays(gl.TRIANGLES, 0, 3)
    if (canvas.hidden) canvas.hidden = false
    frame = requestAnimationFrame(render)
  }

  function move(container: HTMLElement, image: HTMLImageElement, clientX: number, clientY: number) {
    if (gl.isContextLost() || !image.complete || !image.naturalWidth) return

    const rect = image.getBoundingClientRect()
    const scale = Math.min(rect.width / image.naturalWidth, rect.height / image.naturalHeight)
    const width = image.naturalWidth * scale
    const height = image.naturalHeight * scale
    const left = (rect.width - width) / 2
    const top = (rect.height - height) / 2
    const x = clientX - rect.left - left
    const y = clientY - rect.top - top
    if (x < 0 || x >= width || y < 0 || y >= height) {
      stop()
      return
    }

    const now = performance.now()
    const imageChanged = activeImage !== image
    if (imageChanged || width !== imageWidth || height !== imageHeight) stop()
    if (now - lastWaveAt < waveInterval) return

    if (imageChanged) {
      try {
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image)
      } catch {
        return
      }
      if (gl.getError() !== gl.NO_ERROR) return
      activeImage = image
    }

    if (!canvas.isConnected) {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5)
      canvas.width = Math.max(1, Math.round(width * pixelRatio))
      canvas.height = Math.max(1, Math.round(height * pixelRatio))
      Object.assign(canvas.style, { left: `${left}px`, top: `${top}px`, width: `${width}px`, height: `${height}px` })
      imageWidth = width
      imageHeight = height
      gl.viewport(0, 0, canvas.width, canvas.height)
      gl.uniform2f(resolutionUniform, canvas.width, canvas.height)
      gl.uniform2f(sizeUniform, imageWidth, imageHeight)
      container.appendChild(canvas)
    }
    if (waves.length === maxWaves) waves.shift()
    waves.push({ x, y: height - y, startedAt: now })
    lastWaveAt = now
    if (!frame) frame = requestAnimationFrame(render)
  }

  canvas.addEventListener("webglcontextlost", stop)

  return {
    move,
    stop,
    dispose() {
      stop()
      canvas.removeEventListener("webglcontextlost", stop)
      gl.deleteTexture(texture)
      gl.deleteProgram(program)
      gl.getExtension("WEBGL_lose_context")?.loseContext()
    },
  }
}
