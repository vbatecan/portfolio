"use client"

import { useEffect, useRef } from "react"

const diameter = 128
const radius = diameter / 2

// Red and green encode horizontal and vertical sampling offsets.
function createLensMap() {
  const canvas = document.createElement("canvas")
  canvas.width = canvas.height = diameter
  const context = canvas.getContext("2d")
  if (!context) return
  const pixels = context.createImageData(diameter, diameter)
  for (let y = 0; y < diameter; y++) {
    for (let x = 0; x < diameter; x++) {
      const dx = (x + 0.5 - radius) / radius
      const dy = (y + 0.5 - radius) / radius
      const strength = Math.max(0, 1 - dx * dx - dy * dy) ** 2
      const offset = (y * diameter + x) * 4
      pixels.data[offset] = 128 - 255 * dx * strength
      pixels.data[offset + 1] = 128 - 255 * dy * strength
      pixels.data[offset + 3] = 255
    }
  }
  context.putImageData(pixels, 0, 0)
  return canvas.toDataURL()
}

export function CursorLens() {
  const lens = useRef<HTMLDivElement>(null)
  const map = useRef<SVGFEImageElement>(null)

  useEffect(() => {
    const surface = lens.current
    const image = map.current
    if (!surface || !image || !CSS.supports("backdrop-filter", "url(#project-lens)")) return
    const preference = matchMedia("(any-hover: hover) and (any-pointer: fine) and (prefers-reduced-motion: no-preference)")

    function hide() {
      surface!.hidden = true
    }

    function move(event: PointerEvent) {
      if (!preference.matches || event.pointerType !== "mouse") return hide()
      if (!image!.hasAttribute("href")) {
        const data = createLensMap()
        if (!data) return
        image!.setAttribute("href", data)
      }
      surface!.style.transform = `translate3d(${event.clientX - radius}px, ${event.clientY - radius}px, 0)`
      surface!.hidden = false
    }

    window.addEventListener("pointermove", move, { passive: true })
    document.documentElement.addEventListener("pointerleave", hide)
    window.addEventListener("blur", hide)
    window.addEventListener("keydown", hide)
    preference.addEventListener("change", hide)
    return () => {
      window.removeEventListener("pointermove", move)
      document.documentElement.removeEventListener("pointerleave", hide)
      window.removeEventListener("blur", hide)
      window.removeEventListener("keydown", hide)
      preference.removeEventListener("change", hide)
    }
  }, [])

  return (
    <>
      <svg aria-hidden="true" width="0" height="0" className="pointer-events-none absolute">
        <defs>
          <filter id="project-lens" x="0" y="0" width={diameter} height={diameter} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feImage ref={map} x="0" y="0" width={diameter} height={diameter} result="offsets" />
            <feDisplacementMap in="SourceGraphic" in2="offsets" scale="36" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>
      <div
        ref={lens}
        hidden
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[60] rounded-full"
        style={{
          width: diameter,
          height: diameter,
          backdropFilter: "url(#project-lens)",
          boxShadow: "inset 0 0 0 1px rgb(128 128 128 / 30%), inset 0 2px 3px rgb(255 255 255 / 18%)",
        }}
      />
    </>
  )
}
