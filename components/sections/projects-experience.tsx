"use client"

import { ArrowDownIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline"
import { AnimatePresence, motion, useIsPresent, useScroll, useTransform } from "framer-motion"
import { forwardRef, useCallback, useEffect, useId, useMemo, useRef, useState } from "react"
import { flushSync } from "react-dom"
import { Button } from "@/components/ui/button"
import { AllProjects, type LiveStatus, type Project } from "@/lib/data"
import { projectChapters } from "@/lib/project-chapters"
import { getProjectViewingLinks } from "@/lib/project-links"
import { ProjectCatalogHandoff } from "./project-catalog-handoff"
import { animateProjectCover, canAnimateProjectCover, readProjectCover, useProjectReducedMotion } from "./project-cover-flight"
import { ProjectOverlay, type ProjectOverlayHandle } from "./project-overlay"
import { ProjectPreview, usePreviewRipple } from "./project-preview"
import { chapterScrollEnd, ProjectStory } from "./project-story"
import styles from "./projects-experience.module.css"

type StatusFilter = LiveStatus | "all"
type OpenProject = (project: Project, trigger: HTMLButtonElement, cover: HTMLElement) => void

const categoryNames: Record<string, string> = {
  ai: "AI/ML",
  api: "API",
  cli: "CLI",
  community: "Community",
  desktop: "Desktop",
  ecommerce: "E-commerce",
  hardware: "Hardware",
  mobile: "Mobile",
  security: "Security",
  system: "System",
  web: "Web",
}
const categoryLabel = (category: string) => categoryNames[category] ?? category
const categories = [...new Set(AllProjects.map(({ category }) => category))]
  .sort((a, b) => categoryLabel(a).localeCompare(categoryLabel(b)))
const statuses = [
  { status: "all", label: "All statuses" },
  ...projectChapters.map(({ status, label }) => ({ status, label })),
] satisfies { status: StatusFilter; label: string }[]

const chapterOrder = new Map(projectChapters.map(({ project }, index) => [project.id, index]))
const catalogOrder = [...AllProjects].sort((a, b) =>
  (chapterOrder.get(a.id) ?? chapterOrder.size) - (chapterOrder.get(b.id) ?? chapterOrder.size)
    || (b.updatedAt ?? "").localeCompare(a.updatedAt ?? ""),
)

const cardEase = [0.2, 0.72, 0.25, 1] as const

function landAtCatalog(catalog: HTMLElement) {
  catalog.scrollIntoView({ behavior: "instant", block: "start" })
  catalog.focus({ preventScroll: true })
}

export function BrowseCatalogLink() {
  return (
    <Button asChild variant="outline" size="sm">
      <a href="#catalog" onClick={(event) => {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return
        const catalog = document.getElementById("catalog")
        if (!catalog) return
        event.preventDefault()
        if (location.hash !== "#catalog") history.pushState(null, "", "#catalog")
        landAtCatalog(catalog)
      }}>
        Browse catalog <ArrowDownIcon aria-hidden="true" />
      </a>
    </Button>
  )
}

const ProjectCard = forwardRef<HTMLLIElement, {
  project: Project
  index: number
  animate: boolean
  onOpen: OpenProject
  ripple: ReturnType<typeof usePreviewRipple>
}>(function ProjectCard({ project, index, animate, onOpen, ripple }, ref) {
  const present = useIsPresent()
  const { live, demo } = getProjectViewingLinks(project)
  const availabilityId = useId()
  return (
    <motion.li
      ref={ref}
      className={styles.tile}
      data-project-card={project.id}
      data-art-status={project.liveStatus}
      data-wide={index < 3}
      inert={!present}
      layout={animate ? "position" : false}
      initial={animate ? { opacity: 0, y: 14 } : false}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: animate ? 0.26 : 0, delay: animate ? Math.min(index * 0.022, 0.18) : 0, ease: cardEase },
      }}
      exit={animate ? { opacity: 0, y: -7, transition: { duration: 0.17 } } : undefined}
      transition={{ layout: { duration: 0.33, ease: cardEase } }}
    >
      <button type="button" className={styles.card} aria-label={`View project: ${project.title}`}
        aria-describedby={live || demo ? availabilityId : undefined}
        onClick={(event) => {
          const trigger = event.currentTarget
          const cover = trigger.querySelector<HTMLElement>("[data-project-cover]")
          if (cover) onOpen(project, trigger, cover)
        }}>
        <ProjectPreview project={project} ripple={ripple} className={styles.cover} />
        <span className={styles.caption}>
          <span>
            <span className={styles.title}>{project.title}</span>
            <span className={styles.meta}>
              <span className={styles.type}>{categoryLabel(project.category)}</span>
              {(live || demo) && (
                <span id={availabilityId} className={styles.availability}>
                  {live && <span className={styles.badge}>Live</span>}
                  {demo && <span className={styles.badge}>Demo</span>}
                </span>
              )}
            </span>
          </span>
          <ArrowUpRightIcon aria-hidden="true" />
        </span>
      </button>
    </motion.li>
  )
})

export function ProjectsExperience() {
  const [view, setView] = useState({ status: "all" as StatusFilter, category: "all", revision: 0 })
  const reduced = useProjectReducedMotion()
  const overlay = useRef<ProjectOverlayHandle>(null)
  const openProject = useCallback<OpenProject>((project, trigger, cover) => {
    overlay.current?.openProject(project, trigger, cover)
  }, [])
  const ripple = usePreviewRipple()
  const story = useRef<HTMLElement>(null)
  const catalog = useRef<HTMLElement>(null)
  const shortcut = useRef<{ flight: ReturnType<typeof animateProjectCover>; scrollAt: number } | null>(null)
  const { scrollYProgress } = useScroll({ target: story, offset: ["start start", "end end"] })
  const handoff = useTransform(scrollYProgress, [chapterScrollEnd, 1], [0, 1])

  const matching = useMemo(() => catalogOrder.filter((project) =>
    (view.status === "all" || project.liveStatus === view.status)
    && (view.category === "all" || project.category === view.category),
  ), [view.status, view.category])
  const visibleIds = useMemo(() => matching.map(({ id }) => id), [matching])

  const finishShortcut = useCallback(() => {
    shortcut.current?.flight.dispose()
    shortcut.current = null
  }, [])

  useEffect(() => {
    const cancelWhenMoved = () => {
      if (shortcut.current && Math.abs(shortcut.current.scrollAt - window.scrollY) > 1) finishShortcut()
    }
    window.addEventListener("scroll", cancelWhenMoved, { passive: true })
    window.addEventListener("resize", finishShortcut)
    return () => {
      window.removeEventListener("scroll", cancelWhenMoved)
      window.removeEventListener("resize", finishShortcut)
      finishShortcut()
    }
  }, [finishShortcut])

  useEffect(() => {
    if (reduced) finishShortcut()
  }, [reduced, finishShortcut])

  function changeFilters(status: StatusFilter, category: string) {
    if (status === view.status && category === view.category) return
    finishShortcut()
    ripple.stop()
    if (catalog.current && catalog.current.getBoundingClientRect().top < -1) {
      catalog.current.scrollIntoView({ behavior: "instant", block: "start" })
    }
    setView((current) => ({ ...current, status, category }))
  }

  function browseGroup(status: LiveStatus, source: HTMLElement | null) {
    const destination = catalog.current
    if (!destination) return
    finishShortcut()
    ripple.stop()
    const origin = source && canAnimateProjectCover() ? readProjectCover(source) : null
    flushSync(() => setView(({ revision }) => ({ status, category: "all", revision: revision + 1 })))
    landAtCatalog(destination)
    const cover = destination.querySelector<HTMLElement>("[data-project-card] [data-project-cover]")
    const target = origin && cover ? readProjectCover(cover) : null
    if (!origin || !target || !cover) return
    const flight = animateProjectCover(origin, target, [cover], {
      duration: 490, easing: "cubic-bezier(.76,0,.24,1)", fill: "both",
    })
    shortcut.current = { flight, scrollAt: window.scrollY }
    void flight.finished.then(() => {
      if (shortcut.current?.flight === flight) finishShortcut()
    }, () => { /* Another interaction interrupted the transfer. */ })
  }

  const openFromCatalog: OpenProject = (project, trigger, cover) => {
    finishShortcut()
    ripple.stop()
    openProject(project, trigger, cover)
  }

  return (
    <div className={styles.experience}>
      <ProjectStory track={story} scrollProgress={scrollYProgress} handoffProgress={handoff}
        onHandoffFocus={() => catalog.current?.focus({ preventScroll: true })}
        onOpen={openProject} onBrowseGroup={browseGroup} />
      <section id="catalog" ref={catalog} tabIndex={-1} aria-labelledby="catalog-title" className={styles.catalog}>
        <div className={`${styles.layout} ${styles.header}`}>
          <h2 id="catalog-title">Project catalog</h2>
        </div>
        <div className={styles.toolbar}>
          <div className={`${styles.layout} ${styles.toolbarContent}`}>
            <div className={styles.statusFilters} role="group" aria-label="Filter projects by status">
              {statuses.map(({ status, label }) => (
                <button key={status} type="button" className={styles.statusButton} aria-pressed={view.status === status}
                  data-catalog-status={status} onClick={() => changeFilters(status, view.category)}>
                  {label}
                </button>
              ))}
            </div>
            <label className={styles.category}>
              Category
              <select value={view.category} onChange={(event) => changeFilters(view.status, event.currentTarget.value)}>
                <option value="all">All categories</option>
                {categories.map((category) => <option key={category} value={category}>{categoryLabel(category)}</option>)}
              </select>
            </label>
          </div>
        </div>
        <div className={`${styles.layout} ${styles.results}`}>
          <p className={styles.count} role="status">
            {matching.length} {matching.length === 1 ? "project" : "projects"}
          </p>
          <ul className={styles.grid} aria-label="Projects">
            <AnimatePresence initial={false} mode={reduced ? "sync" : "popLayout"} key={view.revision}>
              {matching.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} animate={!reduced} onOpen={openFromCatalog} ripple={ripple} />
              ))}
            </AnimatePresence>
          </ul>
          {!matching.length && (
            <div className={styles.empty}>
              <p>No projects match these filters.</p>
              <Button variant="outline" size="sm" onClick={() => {
                catalog.current?.querySelector<HTMLButtonElement>('[data-catalog-status="all"]')?.focus({ preventScroll: true })
                changeFilters("all", "all")
              }}>
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </section>
      <ProjectCatalogHandoff story={story} catalog={catalog} progress={handoff} visibleProjects={visibleIds} />
      <ProjectOverlay ref={overlay} reduced={reduced} />
    </div>
  )
}
