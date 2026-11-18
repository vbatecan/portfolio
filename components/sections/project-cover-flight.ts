import { useSyncExternalStore } from "react"

export const projectReducedMotionQuery = "(prefers-reduced-motion: reduce)"

function prefersReducedMotion() {
  return window.matchMedia(projectReducedMotionQuery).matches
}

function subscribeToMotionPreference(listener: () => void) {
  const preference = window.matchMedia(projectReducedMotionQuery)
  preference.addEventListener("change", listener)
  return () => preference.removeEventListener("change", listener)
}

export function useProjectReducedMotion() {
  return useSyncExternalStore(subscribeToMotionPreference, prefersReducedMotion, () => false)
}

export interface CoverFrame {
  source: string
  frame: Keyframe
  image: Keyframe
}

export function readProjectCover(element: HTMLElement): CoverFrame | null {
  const image = element.querySelector<HTMLImageElement>('img[data-project-slide="current"]:not([data-slide-pending])')
    ?? element.querySelector("img")
  const bounds = element.getBoundingClientRect()
  if (!image || !bounds.width || !bounds.height) return null

  // A moving story cover or scrolled catalog row can be partially clipped.
  let left = Math.max(bounds.left, 0)
  let right = Math.min(bounds.right, document.documentElement.clientWidth)
  let top = Math.max(bounds.top, 0)
  let bottom = Math.min(bounds.bottom, window.innerHeight)
  for (let parent = element.parentElement; parent && parent !== document.body; parent = parent.parentElement) {
    const { overflowX, overflowY } = getComputedStyle(parent)
    if (overflowX === "visible" && overflowY === "visible") continue
    const clip = parent.getBoundingClientRect()
    if (overflowX !== "visible") {
      left = Math.max(left, clip.left)
      right = Math.min(right, clip.right)
    }
    if (overflowY !== "visible") {
      top = Math.max(top, clip.top)
      bottom = Math.min(bottom, clip.bottom)
    }
  }
  if (left >= right || top >= bottom) return null

  const coverStyle = getComputedStyle(element)
  const imageStyle = getComputedStyle(image)
  return {
    source: image.currentSrc || image.src,
    frame: {
      left: `${bounds.left}px`,
      top: `${bounds.top}px`,
      width: `${bounds.width}px`,
      height: `${bounds.height}px`,
      clipPath: `inset(${top - bounds.top}px ${bounds.right - right}px ${bounds.bottom - bottom}px ${left - bounds.left}px)`,
      borderRadius: coverStyle.borderRadius,
      backgroundColor: coverStyle.backgroundColor,
    },
    image: {
      objectFit: imageStyle.objectFit,
      objectPosition: imageStyle.objectPosition,
      padding: imageStyle.padding,
      transform: imageStyle.transform,
    },
  }
}

export function animateProjectCover(from: CoverFrame, to: CoverFrame, covers: HTMLElement[], options: KeyframeAnimationOptions) {
  const floating = document.createElement("div")
  floating.setAttribute("aria-hidden", "true")
  floating.setAttribute("data-project-cover-flight", "")
  floating.style.cssText = "position:fixed;z-index:100;overflow:hidden;pointer-events:none"
  const addImage = (source: string) => {
    const image = document.createElement("img")
    image.style.cssText = "position:absolute;inset:0;display:block;width:100%;height:100%;box-sizing:border-box"
    image.alt = ""
    image.src = source
    floating.append(image)
    return image
  }
  const image = addImage(from.source)
  const destination = from.source !== to.source ? addImage(to.source) : null
  document.body.append(floating)

  const visibility = covers.map((cover) => cover.style.visibility)
  covers.forEach((cover) => { cover.style.visibility = "hidden" })
  const travel = floating.animate([from.frame, to.frame], options)
  const artwork = image.animate([from.image, to.image], options)
  const blend = destination?.animate([
    { ...from.image, opacity: 0 },
    { ...to.image, opacity: 0, offset: 0.5 },
    { ...to.image, opacity: 1 },
  ], options)

  function dispose() {
    floating.remove()
    travel.cancel()
    artwork.cancel()
    blend?.cancel()
    covers.forEach((cover, index) => { cover.style.visibility = visibility[index] })
  }

  return { floating, finished: travel.finished, dispose }
}

export function canAnimateProjectCover() {
  return typeof HTMLElement.prototype.animate === "function" && !prefersReducedMotion()
}
