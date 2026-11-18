"use client"

import { useEffect } from "react"
import { publishHomeChapterProgress, setHomeChapterRange } from "@/lib/home-chapter"

const layerSelector = "[data-story-motion]"
const arrival = 400
const handoff = 600
const duration = 1000
const clamp = (value: number) => Math.max(0, Math.min(1, value))

// Positions are relative to the resting layout. The timeline is scrubbed by scroll.
type Pose = [x: number, y: number, scale?: number, rotation?: number, opacity?: number]
type Choreography = [approach: Pose, hold: Pose, departure: Pose]

const choreography: Record<string, Choreography> = {
  headline: [[-64, 40, 0.96, 0, 0.8], [-19, -24], [-42, -116, 0.96, 0, 0.64]],
  portrait: [[74, 54, 0.88, 4, 0.82], [-42, -20, 1.12, -2], [-75, -112, 1, -5, 0.68]],
  copy: [[-38, 58, 1, 0, 0.76], [16, -8], [20, -84, 1, 0, 0.64]],
  form: [[24, 100, 0.87, 0, 0.76], [-10, -22, 1.02], [0, -80, 0.94, 0, 0.72]],
}

function framesFor(kind: string, step: number, strength: number): Keyframe[] {
  const direction = step % 2 === 0 ? -1 : 1
  const cards: Choreography = [[direction * 94, 50, 0.92, 0, 0.76], [direction * 8, -12, 1.02], [direction * 28, -86, 0.94, 0, 0.64]]
  const [approach, hold, departure] = choreography[kind] ?? cards

  function frame([x, y, scale = 1, rotation = 0, opacity = 1]: Pose, offset: number): Keyframe {
    return {
      offset,
      transform: `translate3d(${x * strength}px, ${y * strength}px, 0) rotate(${rotation * strength}deg) scale(${1 + (scale - 1) * strength})`,
      opacity: 1 - (1 - opacity) * strength,
      easing: "ease-in-out",
    }
  }

  const rest: Pose = [0, 0]
  const entryDelay = kind === "chart" ? Math.min(step * 0.025, 0.16) : 0
  return [frame(approach, 0), frame(approach, entryDelay), frame(rest, arrival / duration),
    frame(hold, handoff / duration), frame(departure, 1)]
}

interface Layer {
  element: HTMLElement
  kind: string
  step: number
  top: number
  height: number
  animation?: Animation
}

interface Chapter {
  track: HTMLElement
  scene: HTMLElement
  layers: Layer[]
  top: number
  height: number
  hold: number
  pinned: boolean
  hasNext: boolean
  independent: boolean
  sequence: boolean
}

function reset(layer: Layer) {
  layer.animation?.cancel()
  layer.animation = undefined
}

function scrub(layer: Layer, time: number, strength: number) {
  if (!layer.animation) {
    layer.animation = layer.element.animate(framesFor(layer.kind, layer.step, strength), { duration, fill: "both" })
    layer.animation.pause()
  }
  if (layer.animation.currentTime !== time) layer.animation.currentTime = time
}

export function HomeStory() {
  useEffect(() => {
    const story = document.querySelector<HTMLElement>("[data-portfolio-story]")
    if (!story || typeof Element.prototype.animate !== "function" || !("ResizeObserver" in window)) return

    const reduced = matchMedia("(prefers-reduced-motion: reduce)")
    const wide = matchMedia("(min-width: 64rem) and (min-height: 38rem)")
    const tracks = [...story.querySelectorAll<HTMLElement>("[data-story-chapter]")]
    const chapters = tracks.map((track, index): Chapter => ({
      track,
      scene: track.firstElementChild as HTMLElement,
      layers: [...track.querySelectorAll<HTMLElement>(layerSelector)].map(element => ({
        element,
        kind: element.dataset.storyMotion!,
        step: Number(element.dataset.storyStep ?? 0),
        top: 0,
        height: 0,
      })),
      top: 0,
      height: 0,
      hold: 0,
      pinned: false,
      hasNext: index < tracks.length - 1,
      independent: track.hasAttribute("data-story-independent"),
      sequence: track.hasAttribute("data-story-sequence"),
    }))
    let viewport = window.innerHeight
    let frame: number | undefined
    let alignFrame: number | undefined
    let activeChapter: Chapter | undefined
    let reducedMode = reduced.matches
    let wideMode = wide.matches

    function draw() {
      frame = undefined
      const scroll = window.scrollY
      const focus = document.activeElement

      for (const chapter of chapters) {
        const distance = scroll - chapter.top
        const overlap = chapter.pinned && chapter.hasNext ? viewport : 0
        const inView = distance > -viewport && distance < chapter.height - overlap
        if (chapter.sequence) {
          publishHomeChapterProgress(chapter.track, {
            progress: chapter.pinned ? clamp(distance / chapter.hold) : 0,
            pinned: chapter.pinned,
            visible: inView,
          })
          continue
        }
        if (reduced.matches || chapter.independent) continue
        for (const layer of chapter.layers) {
          if (!inView || !layer.height || layer.element.contains(focus)) {
            reset(layer)
            continue
          }

          if (chapter.pinned) {
            const time = distance < 0
              ? arrival * clamp(1 + distance / viewport)
              : distance < chapter.hold
                ? arrival + (handoff - arrival) * distance / chapter.hold
                : handoff + (duration - handoff) * clamp((distance - chapter.hold) / viewport)
            scrub(layer, time, 1)
          } else if (scroll + viewport > layer.top && scroll < layer.top + layer.height) {
            const approach = clamp((scroll + viewport - layer.top) / (viewport * 0.4))
            const leave = clamp((scroll - layer.top + viewport * 0.18) / (layer.height + viewport * 0.18))
            scrub(layer, arrival * approach + (duration - arrival) * leave, 0.5)
          } else {
            reset(layer)
          }
        }
      }
    }

    function requestDraw() {
      if (frame === undefined) frame = requestAnimationFrame(draw)
    }

    function recordChapter() {
      const scroll = window.scrollY + 1
      activeChapter = chapters.findLast(chapter => chapter.top <= scroll)
    }

    function handleScroll() {
      if (reducedMode === reduced.matches && wideMode === wide.matches) recordChapter()
      if (!reduced.matches) requestDraw()
    }

    function measure(align?: Chapter) {
      viewport = window.innerHeight
      for (const chapter of chapters) {
        for (const layer of chapter.layers) reset(layer)
        chapter.track.toggleAttribute("data-story-pinned", !reduced.matches && wide.matches && !chapter.independent)
      }
      // Measure the enhanced layout, where the storyboard and final grid share one stage.
      for (const chapter of chapters) {
        chapter.pinned = chapter.track.hasAttribute("data-story-pinned") && chapter.scene.offsetHeight <= viewport + 1
        chapter.track.toggleAttribute("data-story-pinned", chapter.pinned)
      }
      story?.toggleAttribute("data-pinned-story", chapters.some(chapter => chapter.pinned))

      const scroll = window.scrollY
      chapters.forEach(chapter => {
        chapter.top = chapter.track.getBoundingClientRect().top + scroll
        chapter.height = chapter.track.offsetHeight
        chapter.hold = chapter.height - chapter.scene.offsetHeight - (chapter.hasNext ? viewport : 0)
        if (chapter.sequence) setHomeChapterRange(chapter.track, chapter.top, chapter.hold)
        for (const layer of chapter.layers) {
          const bounds = layer.element.getBoundingClientRect()
          layer.top = bounds.top + scroll
          layer.height = bounds.height
        }
      })
      if (align) {
        align.track.scrollIntoView({ behavior: "instant" })
        // Settle the fragment after the browser has applied the new track layout.
        if (alignFrame !== undefined) cancelAnimationFrame(alignFrame)
        alignFrame = requestAnimationFrame(() => {
          alignFrame = undefined
          if (Math.abs(align.track.getBoundingClientRect().top) > 1) {
            align.track.scrollIntoView({ behavior: "instant" })
          }
          recordChapter()
          requestDraw()
        })
      }
      recordChapter()
      requestDraw()
    }

    function updatePreference() {
      if (reducedMode === reduced.matches && wideMode === wide.matches) return
      reducedMode = reduced.matches
      wideMode = wide.matches
      measure(activeChapter)
    }

    function handleResize() {
      if (reducedMode === reduced.matches && wideMode === wide.matches) measure()
    }

    function handleFocus(event: FocusEvent) {
      if (!(event.target instanceof HTMLElement)) return
      const focused = event.target
      const chapter = chapters.find(chapter => chapter.track.contains(focused))
      if (chapter?.pinned && chapter.hasNext && focused.matches(":focus-visible")
        && window.scrollY + focused.getBoundingClientRect().bottom > chapter.top + chapter.hold + viewport) {
        window.scrollTo({ top: chapter.top + chapter.hold, behavior: "instant" })
      }
      requestDraw()
    }

    // Native fragment scrolling may have started before the pinned tracks take up space.
    const initialAnchor = wideMode && !reducedMode
      ? chapters.find(chapter => location.hash === `#${chapter.track.id}`)
      : undefined
    const resize = new ResizeObserver(handleResize)
    for (const chapter of chapters) resize.observe(chapter.scene)
    measure(initialAnchor)
    reduced.addEventListener("change", updatePreference)
    wide.addEventListener("change", updatePreference)
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleResize)
    story.addEventListener("focusin", handleFocus)
    story.addEventListener("focusout", requestDraw)

    return () => {
      if (frame !== undefined) cancelAnimationFrame(frame)
      if (alignFrame !== undefined) cancelAnimationFrame(alignFrame)
      resize.disconnect()
      reduced.removeEventListener("change", updatePreference)
      wide.removeEventListener("change", updatePreference)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
      story.removeEventListener("focusin", handleFocus)
      story.removeEventListener("focusout", requestDraw)
      for (const chapter of chapters) {
        chapter.track.removeAttribute("data-story-pinned")
        chapter.layers.forEach(reset)
      }
      story.removeAttribute("data-pinned-story")
    }
  }, [])

  return null
}
