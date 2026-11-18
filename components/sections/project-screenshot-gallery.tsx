"use client"

import { useEffect, useRef, useState, type KeyboardEvent } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import { Button } from "@/components/ui/button"
import type { Project } from "@/lib/data"
import styles from "./project-details.module.css"

const placeholder = "/placeholder.svg"

type GalleryProject = Pick<Project, "image" | "images" | "title">

function galleryImages(project: GalleryProject, fullScreen: boolean) {
  if (!fullScreen) return project.images?.length ? project.images : [project.image || placeholder]

  const sources = [project.image || placeholder, ...(project.images ?? [])]
  const seen = new Set<string>()
  return sources.filter((source) => {
    if (!source) return false
    // Some catalog covers have size hints on the same static file used by the gallery.
    const key = source.startsWith("/") && !source.startsWith("//") ? source.split(/[?#]/, 1)[0] : source
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

interface Selection {
  index: number
  previous: number | null
  loaded: boolean
  forward: boolean
}

export function ProjectScreenshotGallery({ project, fullScreen, reducedMotion }: {
  project: GalleryProject
  fullScreen: boolean
  reducedMotion: boolean
}) {
  const images = galleryImages(project, fullScreen)
  const hasGallery = images.length > 1
  const thumbnails = useRef<HTMLDivElement>(null)
  const [selection, setSelection] = useState<Selection>({ index: 0, previous: null, loaded: false, forward: true })
  const { index, previous, loaded, forward } = selection

  function select(next: number, forward = next > index) {
    setSelection((current) => {
      if (next === current.index) return current
      const visible = current.loaded ? current.index : current.previous
      const loaded = next === current.previous
      return {
        index: next,
        previous: fullScreen && visible !== next && !(reducedMotion && loaded) ? visible : null,
        loaded,
        forward,
      }
    })
  }

  function markLoaded(loadedIndex: number) {
    setSelection((current) => {
      if (current.index !== loadedIndex || current.loaded) return current
      return { ...current, loaded: true, previous: reducedMotion ? null : current.previous }
    })
  }

  function offsetIndex(step: number) {
    return (index + step + images.length) % images.length
  }

  function onGalleryKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (!hasGallery || (event.key !== "ArrowLeft" && event.key !== "ArrowRight")) return
    event.preventDefault()
    const forward = event.key === "ArrowRight"
    const next = offsetIndex(forward ? 1 : -1)
    select(next, forward)
    event.currentTarget.querySelector<HTMLButtonElement>(`[data-thumbnail="${next}"]`)?.focus({ preventScroll: true })
  }

  useEffect(() => {
    if (!reducedMotion) return
    setSelection((current) => current.loaded && current.previous !== null ? { ...current, previous: null } : current)
  }, [reducedMotion])

  useEffect(() => {
    const rail = thumbnails.current
    const selected = rail?.querySelector('[aria-pressed="true"]')
    if (!rail || !selected) return
    const outer = rail.getBoundingClientRect()
    const inner = selected.getBoundingClientRect()
    const left = inner.left < outer.left ? inner.left - outer.left : Math.max(0, inner.right - outer.right)
    const top = inner.top < outer.top ? inner.top - outer.top : Math.max(0, inner.bottom - outer.bottom)
    if (left || top) rail.scrollBy({ left, top, behavior: "instant" })
  }, [index])

  const previousButton = (
    <Button type="button" variant={fullScreen ? "ghost" : "secondary"} size="icon" aria-label="Previous screenshot"
      className={fullScreen ? "rounded-full" : "absolute left-2 top-1/2 -translate-y-1/2 rounded-full sm:left-4"}
      onClick={() => select(offsetIndex(-1), false)}>
      <ChevronLeftIcon aria-hidden="true" className="size-5" />
    </Button>
  )
  const nextButton = (
    <Button type="button" variant={fullScreen ? "ghost" : "secondary"} size="icon" aria-label="Next screenshot"
      className={fullScreen ? "rounded-full" : "absolute right-2 top-1/2 -translate-y-1/2 rounded-full sm:right-4"}
      onClick={() => select(offsetIndex(1), true)}>
      <ChevronRightIcon aria-hidden="true" className="size-5" />
    </Button>
  )

  return (
    <>
      <section aria-label="Project gallery" className={fullScreen ? styles.gallery : undefined} onKeyDown={onGalleryKeyDown}>
        <div
          className={`${styles.media} ${fullScreen ? styles.featureMedia : styles.compactMedia}`}
          data-project-detail-cover={fullScreen ? "" : undefined}
        >
          {(previous !== null ? [previous, index] : [index]).map((frame) => {
            const current = frame === index
            return (
              <img key={frame} src={images[frame] || placeholder}
                alt={current ? `${project.title} screenshot ${frame + 1}` : ""}
                aria-hidden={current ? undefined : true}
                className={styles.slide}
                data-project-slide={current ? "current" : "previous"}
                data-slide-pending={current && previous !== null && !loaded ? "" : undefined}
                data-slide-wipe={current && previous !== null && loaded && !reducedMotion ? (forward ? "forward" : "back") : undefined}
                onLoad={() => markLoaded(frame)}
                onAnimationEnd={() => {
                  setSelection((state) => state.index === frame ? { ...state, previous: null } : state)
                }}
                onError={({ currentTarget }) => {
                  if (currentTarget.getAttribute("src") !== placeholder) currentTarget.src = placeholder
                  else markLoaded(frame)
                }}
              />
            )
          })}
          {!fullScreen && hasGallery && (
            <>
              {previousButton}
              {nextButton}
              <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 rounded-full bg-background/95 px-1 shadow-sm">
                {images.map((_, frame) => (
                  <button key={frame} type="button" aria-label={`Show screenshot ${frame + 1}`}
                    aria-pressed={frame === index} onClick={() => select(frame)}
                    className="grid size-8 place-items-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring">
                    <span aria-hidden="true" className={`size-2 rounded-full ${frame === index ? "bg-foreground" : "bg-muted-foreground/50"}`} />
                  </button>
                ))}
              </div>
              <span aria-live="polite" className="sr-only">Screenshot {index + 1} of {images.length}</span>
            </>
          )}
        </div>
        {fullScreen && hasGallery && (
          <div className={styles.galleryBar}>
            <span aria-live="polite">Screenshot {index + 1} of {images.length}</span>
            <div className="flex gap-1">{previousButton}{nextButton}</div>
          </div>
        )}
      </section>
      {fullScreen && hasGallery && (
        <aside aria-label="Screenshot index" className={styles.screenshotIndex} onKeyDown={onGalleryKeyDown}>
          <h3 className={styles.label}>Screenshots</h3>
          <div className={styles.thumbnails} ref={thumbnails}>
            {images.map((source, frame) => (
              <button key={source} type="button" aria-label={`Show screenshot ${frame + 1}`}
                aria-pressed={frame === index} onClick={() => select(frame)}
                className={styles.thumbnail} data-thumbnail={frame}>
                <img src={source} alt="" loading="lazy" decoding="async"
                  onError={({ currentTarget }) => {
                    if (currentTarget.getAttribute("src") !== placeholder) currentTarget.src = placeholder
                  }}
                />
              </button>
            ))}
          </div>
        </aside>
      )}
    </>
  )
}
