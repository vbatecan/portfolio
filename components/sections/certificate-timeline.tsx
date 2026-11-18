"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { ArrowDownIcon, TrophyIcon } from "@heroicons/react/24/outline"
import { Button } from "@/components/ui/button"
import { getHomeChapterProgress, goToChapterProgress, type HomeChapterProgress } from "@/lib/home-chapter"
import styles from "./certificate-timeline.module.css"

interface Credential {
  title: string
  issuer: string
  year: string
  image: { src: string; width: number; height: number }
}

const clamp = (value: number) => Math.max(0, Math.min(1, value))
const mix = (start: number, end: number, progress: number) => start + (end - start) * progress
const ease = (value: number) => {
  const x = clamp(value)
  return x * x * (3 - 2 * x)
}

export function CertificateTimeline({ heading, credentials, children }: {
  heading: ReactNode
  credentials: Credential[]
  children: ReactNode
}) {
  const root = useRef<HTMLDivElement>(null)
  const canvas = useRef<HTMLDivElement>(null)
  const grid = useRef<HTMLDivElement>(null)
  const skip = useRef<HTMLButtonElement>(null)
  const focusGrid = useRef(false)

  useEffect(() => {
    const element = root.current
    const stage = canvas.current
    const archive = grid.current
    const track = element?.closest<HTMLElement>("[data-story-chapter]")
    if (!element || !stage || !archive || !track || !("ResizeObserver" in window)) return

    const previews = [...stage.querySelectorAll<HTMLElement>("[data-credential-preview]")]
    const thumbnails = [...archive.querySelectorAll("article img")]
    const yearLine = stage.querySelector<HTMLElement>("[data-year-line]")
    let current = getHomeChapterProgress(track)
    let width = 0
    let height = 0
    let targets: { x: number; y: number }[] = []

    function measure() {
      const bounds = stage!.getBoundingClientRect()
      width = bounds.width
      height = bounds.height
      targets = thumbnails.map(thumbnail => {
        const image = thumbnail.getBoundingClientRect()
        return { x: image.left + image.width / 2 - bounds.left - width / 2,
          y: image.top + image.height / 2 - bounds.top - height / 2 }
      })
    }

    function draw() {
      const active = current?.pinned === true
      const progress = current?.progress ?? 0
      const settled = !active || progress >= 0.96
      const phase = settled ? "archive" : progress < 0.44 ? "2025" : "2026"
      if (element!.dataset.certificatePhase !== phase) element!.dataset.certificatePhase = phase

      if (!settled && !archive!.inert && archive!.contains(document.activeElement)) skip.current?.focus({ preventScroll: true })
      if (archive!.inert === settled) archive!.inert = !settled
      if (settled && focusGrid.current) {
        focusGrid.current = false
        archive!.focus({ preventScroll: true })
      }
      if (!active || !current?.visible) return
      if (!width) measure()

      const open = ease((progress - 0.03) / 0.30)
      const feature = ease((progress - 0.38) / 0.22)
      const gather = ease((progress - 0.68) / 0.28)
      const archiveIn = ease((progress - 0.76) / 0.20)
      archive!.style.opacity = String(archiveIn)
      yearLine?.style.setProperty("--year-progress", String(feature))

      previews.forEach((preview, index) => {
        const offset = index - 2
        const award = preview.dataset.credentialPreview === "2026"
        const target = targets[index]
        const fanX = offset * Math.min(196, width * 0.177)
        const fanY = 22 + Math.abs(offset) * 15
        const x = award ? mix(width * 0.30, width * 0.13, feature)
          : mix(mix(offset * 17, fanX, open), -width * 0.29 + offset * 21, feature)
        const y = award ? mix(height * 0.38, 11, feature)
          : mix(mix(24 - offset * 4, fanY, open), -24 + Math.abs(offset) * 15, feature)
        const scale = award ? mix(0.7, 1.55, feature) : mix(0.96, 0.67, feature)
        const angle = award ? mix(12, -3, feature) : mix(mix(offset * 8, offset * 3, open), offset * 7, feature)
        preview.style.transform = `translate3d(${mix(x, target?.x ?? 0, gather)}px, ${mix(y, target?.y ?? 0, gather)}px, 0) rotate(${angle * (1 - gather)}deg) scale(${mix(scale, 0.42, gather)})`
        preview.style.opacity = String((award ? feature : 1) * (1 - archiveIn))
      })
    }

    function onProgress(event: Event) {
      const next = (event as CustomEvent<HomeChapterProgress>).detail
      if (next.pinned !== current?.pinned || (next.visible && !current.visible)) measure()
      current = next
      if (!next.pinned) archive!.style.removeProperty("opacity")
      draw()
    }

    const resize = new ResizeObserver(() => {
      if (!current?.pinned || !current.visible) return
      measure()
      draw()
    })
    resize.observe(stage)
    resize.observe(archive)
    track.addEventListener("homechapterprogress", onProgress)
    draw()
    return () => {
      resize.disconnect()
      track.removeEventListener("homechapterprogress", onProgress)
      archive.inert = false
      archive.style.removeProperty("opacity")
    }
  }, [])

  return (
    <div ref={root} className={styles.timeline} data-certificate-phase="archive">
      <header className={styles.header}>
        {heading}
        <Button ref={skip} type="button" variant="outline" size="sm" className={styles.skip} onClick={() => {
          const track = root.current?.closest<HTMLElement>("[data-story-chapter]")
          if (!track) return
          if (grid.current && !grid.current.inert) grid.current.focus({ preventScroll: true })
          else {
            focusGrid.current = true
            goToChapterProgress(track, 1, "instant")
          }
        }}>
          View all certificates <ArrowDownIcon aria-hidden="true" />
        </Button>
      </header>
      <div className={styles.stage}>
        <div ref={canvas} className={styles.film} aria-hidden="true">
          <div className={styles.years}>
            <span data-year="2025">2025</span>
            <span className={styles.line} data-year-line />
            <span data-year="2026">2026</span>
          </div>
          <p className={styles.caption} data-caption="2025">Foundations in hardware, security, and programming</p>
          <p className={styles.caption} data-caption="2026">Grand Prize · Hack the Future</p>
          {credentials.map((credential, index) => (
            <div key={credential.title} className={styles.position} style={{ zIndex: index + 1 }}>
              <div className={styles.preview} data-credential-preview={credential.year}>
                {credential.year === "2026" && <TrophyIcon className={styles.trophy} />}
                <img {...credential.image} alt="" loading="lazy" decoding="async" />
                <span>{credential.issuer}</span>
                <strong>{credential.title}</strong>
              </div>
            </div>
          ))}
        </div>
        <div ref={grid} id="certificate-grid" className={styles.grid} tabIndex={-1} aria-label="All certificates">
          {children}
        </div>
      </div>
    </div>
  )
}
