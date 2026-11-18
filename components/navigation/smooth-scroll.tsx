"use client"

import { useEffect } from "react"
import type Lenis from "lenis"

export function SmoothScroll() {
  useEffect(() => {
    const preference = window.matchMedia("(any-pointer: fine) and (prefers-reduced-motion: no-preference)")
    const listeners = new AbortController()
    let scroller: Lenis | undefined
    let frame: number | undefined

    function tick(time: number) {
      frame = undefined
      scroller?.raf(time)
      if (scroller?.isScrolling === "smooth") frame = requestAnimationFrame(tick)
    }

    function cancelMomentum() {
      if (frame !== undefined) {
        cancelAnimationFrame(frame)
        frame = undefined
      }
      if (scroller?.isScrolling === "smooth") {
        scroller.stop()
        scroller.start()
      }
    }

    async function updatePreference() {
      if (!preference.matches) {
        cancelMomentum()
        scroller?.destroy()
        scroller = undefined
        return
      }

      const { default: Lenis } = await import("lenis")
      if (listeners.signal.aborted || !preference.matches || scroller) return

      scroller = new Lenis({
        virtualScroll: ({ event, deltaX, deltaY }) => {
          if (event.type !== "wheel" || event.defaultPrevented || event.ctrlKey || event.shiftKey
            || Math.abs(deltaX) >= Math.abs(deltaY)) return false

          // Keep the frame loop idle until new wheel input arrives.
          if (frame === undefined) {
            scroller?.raf(performance.now())
            frame = requestAnimationFrame(tick)
          }
          return true
        },
      })
    }

    // Stop wheel momentum before native navigation or a control changes scroll position.
    const options = { capture: true, signal: listeners.signal }
    window.addEventListener("pointerdown", cancelMomentum, options)
    window.addEventListener("keydown", cancelMomentum, options)
    window.addEventListener("click", cancelMomentum, options)
    window.addEventListener("popstate", cancelMomentum, options)
    preference.addEventListener("change", updatePreference, { signal: listeners.signal })
    void updatePreference()

    return () => {
      listeners.abort()
      cancelMomentum()
      scroller?.destroy()
    }
  }, [])

  return null
}
