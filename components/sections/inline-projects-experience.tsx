"use client"

import { ArrowDownIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline"
import { useScroll } from "framer-motion"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react"
import type { ProjectChapter } from "@/lib/project-chapters"
import { useProjectReducedMotion } from "./project-cover-flight"
import { ProjectOverlay, type ProjectOverlayHandle } from "./project-overlay"
import { ProjectStory, StaticProjectChapters } from "./project-story"
import styles from "./project-story.module.css"
import experienceStyles from "./projects-experience.module.css"

const storyQuery = "(min-width: 64rem) and (min-height: 38rem) and (prefers-reduced-motion: no-preference)"
const isAnimated = () => window.matchMedia(storyQuery).matches && typeof ResizeObserver !== "undefined"
const staticSnapshot = () => false

function subscribeToStoryMode(listener: () => void) {
  const query = window.matchMedia(storyQuery)
  query.addEventListener("change", listener)
  return () => query.removeEventListener("change", listener)
}

interface ChapterProps {
  chapters: readonly ProjectChapter[]
  onOpen: ProjectOverlayHandle["openProject"]
  loadCovers: boolean
}

function AnimatedChapters({ chapters, onOpen, loadCovers, footer }: ChapterProps & { footer: ReactNode }) {
  const track = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: track, offset: ["start start", "end end"] })
  return <ProjectStory chapters={chapters} track={track} scrollProgress={scrollYProgress} onOpen={onOpen} loadCovers={loadCovers} footer={footer} />
}

export function InlineProjectsExperience({ chapters }: { chapters: readonly ProjectChapter[] }) {
  const animated = useSyncExternalStore(subscribeToStoryMode, isAnimated, staticSnapshot)
  const reduced = useProjectReducedMotion()
  const [loadCovers, setLoadCovers] = useState(false)
  const overlay = useRef<ProjectOverlayHandle>(null)
  const section = useRef<HTMLElement>(null)
  const open: ProjectOverlayHandle["openProject"] = useCallback((project, trigger, cover) => {
    overlay.current?.openProject(project, trigger, cover)
  }, [])

  useEffect(() => {
    const element = section.current
    if (!element) return
    if (window.location.hash === "#projects" || typeof IntersectionObserver === "undefined") {
      setLoadCovers(true)
      return
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      setLoadCovers(true)
      observer.disconnect()
    }, { rootMargin: "350px 0px" })
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const footer = (
    <div className={styles.inlineFooter}>
      <Link href="/projects#catalog" prefetch={false}>
        Browse full catalog <ArrowUpRightIcon aria-hidden="true" />
      </Link>
      <a href="#skills">Continue to Tools <ArrowDownIcon aria-hidden="true" /></a>
    </div>
  )

  return (
    <section ref={section} className={`${experienceStyles.experience} ${styles.inlineExperience}`} aria-labelledby="projects-title">
      {animated ? (
        <AnimatedChapters chapters={chapters} onOpen={open} loadCovers={loadCovers} footer={footer} />
      ) : (
        <>
          <h2 id="projects-title" className={styles.inlineHeading}>Projects in Practice</h2>
          <StaticProjectChapters chapters={chapters} onOpen={open} loadCovers={loadCovers} inline />
          {footer}
        </>
      )}
      <ProjectOverlay
        ref={overlay}
        reduced={reduced}
        findTrigger={(projectId) => {
          const trigger = section.current?.querySelector<HTMLButtonElement>(`[data-project-open="${projectId}"]`)
          return trigger && !trigger.closest("[inert]")
            ? trigger
            : section.current?.querySelector<HTMLButtonElement>('button[aria-current="step"]')
        }}
      />
    </section>
  )
}
