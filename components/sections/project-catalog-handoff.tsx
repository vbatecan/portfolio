"use client"

import { useMotionValueEvent, type MotionValue } from "framer-motion"
import { useLayoutEffect, useRef, type RefObject } from "react"
import { projectChapters } from "@/lib/project-chapters"
import { projectReducedMotionQuery } from "./project-cover-flight"
import styles from "./projects-experience.module.css"

const clamp = (value: number) => Math.max(0, Math.min(1, value))
const mix = (start: number, end: number, progress: number) => start + (end - start) * progress
const ease = (progress: number) => progress * progress * (3 - 2 * progress)

interface HandoffProps {
  story: RefObject<HTMLElement | null>
  catalog: RefObject<HTMLElement | null>
  progress: MotionValue<number>
  visibleProjects: readonly number[]
}

export function ProjectCatalogHandoff({ story, catalog, progress, visibleProjects }: HandoffProps) {
  const layer = useRef<HTMLDivElement>(null)
  const requestDraw = useRef<() => void>(() => {})
  useMotionValueEvent(progress, "change", () => requestDraw.current())

  useLayoutEffect(() => {
    const film = layer.current
    const source = story.current
    const destination = catalog.current
    if (!film || !source || !destination) return

    const preference = window.matchMedia(projectReducedMotionQuery)
    let frame = 0
    let hiddenCovers = new Set<HTMLElement>()
    const proxies = Array.from(film.children) as HTMLElement[]
    const storyCovers = projectChapters.map(({ project }) =>
      source.querySelector<HTMLElement>(`[data-story-cover="${project.id}"]`),
    )

    const revealCovers = () => {
      if (film.hidden) return
      film.hidden = true
      destination.removeAttribute("data-handoff")
      destination.style.removeProperty("--handoff-progress")
      hiddenCovers.forEach((cover) => cover.removeAttribute("data-cover-travelling"))
      hiddenCovers.clear()
    }

    const draw = () => {
      frame = 0
      const amount = progress.get()
      if (preference.matches || amount <= 0 || amount >= 1) {
        revealCovers()
        return
      }

      const catalogTop = destination.getBoundingClientRect().top
      const frames = projectChapters.map(({ project }, index) => {
        const from = storyCovers[index]
        const to = destination.querySelector<HTMLElement>(`[data-project-card="${project.id}"]:not([inert]) [data-project-cover]`)
        return { from, to, start: from?.getBoundingClientRect(), end: to?.getBoundingClientRect() }
      })

      if (film.hidden) {
        film.hidden = false
        destination.setAttribute("data-handoff", "")
      }
      destination.style.setProperty("--handoff-progress", String(amount))
      const nextHidden = new Set<HTMLElement>()
      frames.forEach(({ from, to, start, end }, index) => {
        const proxy = proxies[index]
        if (!from || !start?.width || !start.height) {
          if (!proxy.hidden) proxy.hidden = true
          return
        }
        if (proxy.hidden) proxy.hidden = false

        const delay = index * 0.022
        const fraction = ease(clamp((amount - delay) / (1 - delay)))
        // The real grid scrolls in underneath the pinned stage. Aim at its position
        // when the stage releases so the covers and their cards coincide at the seam.
        const x = mix(start.left, end?.left ?? start.left, fraction)
        const y = mix(start.top, end ? end.top - catalogTop : start.top - 48, fraction)
        Object.assign(proxy.style, {
          transform: `translate3d(${x}px, ${y}px, 0)`,
          width: `${mix(start.width, end?.width ?? start.width, fraction)}px`,
          height: `${mix(start.height, end?.height ?? start.height, fraction)}px`,
          opacity: end ? "1" : String(1 - clamp(amount / 0.52)),
        })
        nextHidden.add(from)
        if (to) nextHidden.add(to)
      })
      hiddenCovers.forEach((cover) => {
        if (!nextHidden.has(cover)) cover.removeAttribute("data-cover-travelling")
      })
      nextHidden.forEach((cover) => {
        if (!hiddenCovers.has(cover)) cover.setAttribute("data-cover-travelling", "")
      })
      hiddenCovers = nextHidden
    }

    function scheduleDraw() {
      if (!frame) frame = requestAnimationFrame(draw)
    }

    requestDraw.current = scheduleDraw
    const observer = new ResizeObserver(scheduleDraw)
    observer.observe(source)
    observer.observe(destination)
    preference.addEventListener("change", scheduleDraw)
    scheduleDraw()

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      preference.removeEventListener("change", scheduleDraw)
      revealCovers()
      requestDraw.current = () => {}
    }
  }, [story, catalog, progress, visibleProjects])

  return (
    <div className={styles.handoffLayer} ref={layer} hidden aria-hidden="true" inert data-gallery-handoff>
      {projectChapters.map(({ project, status }) => (
        <div key={project.id} className={styles.handoffCover} data-art-status={status}>
          <img src={project.image || "/placeholder.svg"} alt="" decoding="async"
            onError={({ currentTarget }) => {
              if (currentTarget.getAttribute("src") !== "/placeholder.svg") currentTarget.src = "/placeholder.svg"
            }} />
        </div>
      ))}
    </div>
  )
}
