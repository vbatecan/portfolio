"use client"

import { useEffect, useRef, type PointerEvent } from "react"
import type { Project } from "@/lib/data"
import { createScreenshotRipple } from "@/lib/screenshot-ripple"
import { cn } from "@/lib/utils"

const placeholder = "/placeholder.svg"
const rippleMedia = "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)"

export function usePreviewRipple() {
  const ripple = useRef<ReturnType<typeof createScreenshotRipple> | undefined>(undefined)
  const motionAllowed = useRef(false)

  useEffect(() => {
    const media = window.matchMedia(rippleMedia)
    function updatePreference() {
      motionAllowed.current = media.matches
      if (!media.matches) ripple.current?.stop()
    }
    updatePreference()
    media.addEventListener("change", updatePreference)
    return () => {
      media.removeEventListener("change", updatePreference)
      ripple.current?.dispose()
      ripple.current = undefined
    }
  }, [])

  function move(event: PointerEvent<HTMLSpanElement>) {
    if (!motionAllowed.current || event.pointerType !== "mouse") return
    const container = event.currentTarget
    const image = container.querySelector("img")
    if (!image?.complete || !image.naturalWidth || image.getAttribute("src")?.startsWith(placeholder)) return
    if (ripple.current === undefined) ripple.current = createScreenshotRipple()
    ripple.current?.move(container, image, event.clientX, event.clientY)
  }

  return { move, stop: () => ripple.current?.stop() }
}

export function ProjectPreview({ project, alt = "", className, ripple }: {
  project: Project
  alt?: string
  className?: string
  ripple?: ReturnType<typeof usePreviewRipple>
}) {
  return (
    <span
      data-project-cover
      className={cn("relative block aspect-[16/10] overflow-hidden rounded-lg bg-muted", className)}
      onPointerEnter={ripple?.move}
      onPointerMove={ripple?.move}
      onPointerLeave={ripple?.stop}
      onPointerCancel={ripple?.stop}
    >
      <img
        src={project.image || placeholder}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-contain"
        onError={({ currentTarget }) => {
          if (currentTarget.getAttribute("src") !== placeholder) currentTarget.src = placeholder
        }}
      />
    </span>
  )
}
