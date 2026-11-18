"use client"

import * as Dialog from "@radix-ui/react-dialog"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { useCallback, useEffect, useRef, useState } from "react"
import type { Project } from "@/lib/data"
import { ProjectDetailsContent } from "./project-details-content"
import { animateProjectCover, canAnimateProjectCover, readProjectCover, type CoverFrame } from "./project-cover-flight"

const detailFlight = { duration: 600, easing: "cubic-bezier(.76,0,.24,1)", fill: "both" } as const
const surfaceOpen = "inset(0% 0% 0% 0%)"
const surfaceClosed = "inset(0% 0% 0% 100%)"

function flyCover(from: CoverFrame, to: CoverFrame, surface: HTMLElement, covers: HTMLElement[], closing: boolean, visible: string) {
  const flight = animateProjectCover(from, to, covers, detailFlight)
  const current = visible === "none" ? surfaceOpen : visible
  const reveal = surface.animate(closing
    ? [{ clipPath: current }, { clipPath: surfaceClosed }]
    : [{ clipPath: surfaceClosed }, { clipPath: surfaceOpen }], detailFlight)

  return {
    ...flight,
    dispose() {
      flight.dispose()
      reveal.cancel()
    },
  }
}

interface Selection {
  trigger: HTMLButtonElement
  cover: HTMLElement
  x: number
  y: number
  start: CoverFrame | null
}

export function useProjectOverlay(reduced: boolean) {
  const [project, setProject] = useState<Project | null>(null)
  const selection = useRef<Selection | null>(null)
  const surface = useRef<HTMLDivElement | null>(null)
  const closeButton = useRef<HTMLButtonElement>(null)
  const flight = useRef<ReturnType<typeof flyCover> | null>(null)
  const closing = useRef(false)

  function openProject(next: Project, trigger: HTMLButtonElement, cover: HTMLElement) {
    if (selection.current) return
    selection.current = {
      trigger,
      cover,
      x: window.scrollX,
      y: window.scrollY,
      start: canAnimateProjectCover() ? readProjectCover(cover) : null,
    }
    setProject(next)
  }

  const settle = useCallback(() => {
    flight.current?.dispose()
    flight.current = null
  }, [])

  useEffect(() => {
    if (!reduced || !flight.current) return
    settle()
    if (closing.current) setProject(null)
  }, [reduced, settle])

  const runFlight = useCallback((from: CoverFrame, to: CoverFrame, node: HTMLElement, cover: HTMLElement, isClosing: boolean, visible = surfaceOpen) => {
    const openerCover = selection.current?.cover
    const animation = flyCover(from, to, node, openerCover ? [cover, openerCover] : [cover], isClosing, visible)
    flight.current = animation
    void animation.finished.then(() => {
      if (flight.current !== animation) return
      if (isClosing) setProject(null)
      else settle()
    }, () => { /* A close request or unmount can cancel a flight. */ })
  }, [settle])

  function closeProject() {
    if (closing.current) return
    closing.current = true
    const node = surface.current
    const cover = node?.querySelector<HTMLElement>("[data-project-detail-cover]")
    const opener = selection.current?.cover
    const interrupted = flight.current ? readProjectCover(flight.current.floating) : null
    const visible = node ? getComputedStyle(node).clipPath : surfaceOpen
    settle()
    if (node && cover && opener?.isConnected && canAnimateProjectCover()) {
      const end = readProjectCover(opener)
      if (!interrupted && !readProjectCover(cover)) cover.scrollIntoView({ block: "nearest", behavior: "instant" })
      const start = interrupted ?? readProjectCover(cover)
      if (start && end) {
        runFlight(start, end, node, cover, true, visible)
        return
      }
    }
    setProject(null)
  }

  // The portal can mount a commit after the dialog is opened. Measure from its mounted ref.
  const attachSurface = useCallback((node: HTMLDivElement | null) => {
    surface.current = node
    if (!node) {
      queueMicrotask(() => { if (!surface.current) settle() })
      return
    }
    const opener = selection.current
    const cover = node.querySelector<HTMLElement>("[data-project-detail-cover]")
    const end = cover ? readProjectCover(cover) : null
    if (opener?.start && cover && end && canAnimateProjectCover()) {
      runFlight(opener.start, end, node, cover, false)
      opener.start = null
    }
  }, [runFlight, settle])

  const dialog = (
    <Dialog.Root open={project !== null} onOpenChange={(open) => { if (!open) closeProject() }}>
      {project && (
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[65]" />
          <Dialog.Content
            ref={attachSurface}
            className="fixed inset-0 z-[70] flex min-w-0 flex-col overflow-hidden bg-background text-foreground outline-none"
            onOpenAutoFocus={(event) => {
              event.preventDefault()
              closeButton.current?.focus({ preventScroll: true })
            }}
            onCloseAutoFocus={(event) => {
              event.preventDefault()
              if (surface.current) return
              const opener = selection.current
              selection.current = null
              closing.current = false
              if (!opener?.trigger.isConnected) return
              if (opener.x !== window.scrollX || opener.y !== window.scrollY) {
                window.scrollTo({ left: opener.x, top: opener.y, behavior: "instant" })
              }
              opener.trigger.focus({ preventScroll: true })
            }}
          >
            <Dialog.Close asChild>
              <button
                ref={closeButton}
                type="button"
                aria-label="Close project"
                className="absolute right-4 top-4 z-10 grid size-11 place-items-center rounded-full border bg-background text-foreground shadow-sm hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:right-6 sm:top-6"
              >
                <XMarkIcon className="size-5" aria-hidden="true" />
              </button>
            </Dialog.Close>
            <ProjectDetailsContent project={project} fullScreen reducedMotion={reduced} />
          </Dialog.Content>
        </Dialog.Portal>
      )}
    </Dialog.Root>
  )

  return { openProject, dialog }
}
