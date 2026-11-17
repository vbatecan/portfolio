"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { GithubIcon } from "@/components/ui/brand-icons"
import { TechIcon } from "@/components/ui/tech-icon"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { AllProjects, type LiveStatus, type Project } from "@/lib/data"
import { createScreenshotRipple } from "@/lib/screenshot-ripple"
import { ArrowTopRightOnSquareIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import { useEffect, useRef, useState, type PointerEvent } from "react"

const statusGroups = [
  { status: "live", label: "Live" },
  { status: "completed", label: "Completed" },
  { status: "development", label: "WIP" },
  { status: "offline", label: "Offline" },
  { status: "archived", label: "Archived" },
] satisfies { status: LiveStatus; label: string }[]

const categories = [
  { id: "all", name: "All" },
  { id: "web", name: "Web" },
  { id: "desktop", name: "Desktop" },
  { id: "cli", name: "CLI" },
  { id: "hardware", name: "Hardware" },
  { id: "ai", name: "AI/ML" },
  { id: "api", name: "API" },
  { id: "security", name: "Security" },
].map((category) => ({
  ...category,
  count: AllProjects.filter((project) => category.id === "all" || project.category === category.id).length,
}))

const placeholder = "/placeholder.svg"
const rippleMedia = "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)"

function usePreviewRipple() {
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

  function move(event: PointerEvent<HTMLDivElement>) {
    if (!motionAllowed.current || event.pointerType !== "mouse") return
    const container = event.currentTarget
    const image = container.querySelector("img")
    if (!image?.complete || !image.naturalWidth || image.getAttribute("src")?.startsWith(placeholder)) return
    if (ripple.current === undefined) ripple.current = createScreenshotRipple()
    ripple.current?.move(container, image, event.clientX, event.clientY)
  }

  return { move, stop: () => ripple.current?.stop() }
}

function ProjectDetails({ project, returnFocus }: { project: Project; returnFocus: () => void }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const images = project.images?.length ? project.images : [project.image]
  const hasGallery = images.length > 1
  const hasRepoLink = project.github !== "#" && project.repoStatus !== "none"
  const hasLiveLink = project.live !== "#" && project.liveStatus === "live"

  function stepScreenshot(step: number) {
    setActiveIndex((index) => (index + step + images.length) % images.length)
  }

  return (
    <DialogContent
      className="flex max-h-[90dvh] w-[calc(100%-2rem)] max-w-4xl flex-col gap-0 overflow-hidden rounded-xl p-0 sm:rounded-xl motion-reduce:animate-none"
      onCloseAutoFocus={(event) => {
        event.preventDefault()
        returnFocus()
      }}
    >
      <div className="overflow-y-auto overscroll-contain">
        <header className="px-5 pb-4 pt-5 pr-12 sm:px-7 sm:pr-14">
          <DialogTitle className="text-xl font-bold sm:text-2xl">{project.title}</DialogTitle>
          <DialogDescription className="mt-2">{project.details.overview}</DialogDescription>
        </header>
        <div
          className="relative h-[clamp(180px,40dvh,420px)] bg-muted"
          onKeyDown={(event) => {
            if (!hasGallery || (event.key !== "ArrowLeft" && event.key !== "ArrowRight")) return
            event.preventDefault()
            stepScreenshot(event.key === "ArrowLeft" ? -1 : 1)
          }}
        >
          <img
            src={images[activeIndex] || placeholder}
            alt={`${project.title} screenshot ${activeIndex + 1}`}
            className="h-full w-full object-contain"
          />
          {hasGallery && (
            <>
              <Button
                type="button"
                variant="secondary"
                size="icon"
                aria-label="Previous screenshot"
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full sm:left-4"
                onClick={() => stepScreenshot(-1)}
              >
                <ChevronLeftIcon aria-hidden="true" className="size-5" />
              </Button>
              <Button
                type="button"
                variant="secondary"
                size="icon"
                aria-label="Next screenshot"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full sm:right-4"
                onClick={() => stepScreenshot(1)}
              >
                <ChevronRightIcon aria-hidden="true" className="size-5" />
              </Button>
              <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 rounded-full bg-background/95 px-1 shadow-sm">
                {images.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Show screenshot ${index + 1}`}
                    aria-pressed={index === activeIndex}
                    onClick={() => setActiveIndex(index)}
                    className="grid size-8 place-items-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
                  >
                    <span aria-hidden="true" className={`size-2 rounded-full ${index === activeIndex ? "bg-foreground" : "bg-muted-foreground/50"}`} />
                  </button>
                ))}
              </div>
              <div aria-live="polite" className="sr-only">Screenshot {activeIndex + 1} of {images.length}</div>
            </>
          )}
        </div>
        <div className="grid gap-6 p-5 sm:grid-cols-2 sm:p-7">
          <div>
            <h4 className="mb-2 text-sm font-semibold">Key features</h4>
            <ul className="list-disc space-y-2 pl-4 text-sm text-muted-foreground">
              {project.details.keyFeatures.map((feature, index) => <li key={index}>{feature}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="mb-2 text-sm font-semibold">Tech stack</h4>
            <ul className="mb-5 flex flex-wrap gap-2">
              {project.details.skills.map((skill) => (
                <li key={skill} className="tech-tag flex items-center gap-1.5 px-2.5 py-1 text-xs">
                  <span className="size-3.5"><TechIcon name={skill} /></span>
                  {skill}
                </li>
              ))}
            </ul>
            <h4 className="mb-2 text-sm font-semibold">Impact</h4>
            <p className="text-sm leading-relaxed text-muted-foreground">{project.details.impact}</p>
          </div>
        </div>
      </div>
      {(hasRepoLink || hasLiveLink) && (
        <footer className="flex flex-wrap gap-3 border-t px-5 py-4 sm:px-7">
          {hasRepoLink && (
            <Button asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="mr-2 size-4" />
                {project.repoStatus === "private" ? "Request access" : "View code"}
              </a>
            </Button>
          )}
          {hasLiveLink && (
            <Button asChild variant="outline">
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <ArrowTopRightOnSquareIcon aria-hidden="true" className="mr-2 size-4" />
                Live demo
              </a>
            </Button>
          )}
        </footer>
      )}
    </DialogContent>
  )
}

export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const opener = useRef<HTMLButtonElement>(null)
  const ripple = usePreviewRipple()

  const filteredProjects = AllProjects
    .filter((project) => activeFilter === "all" || project.category === activeFilter)
    .sort((a, b) => (b.updatedAt ?? "").localeCompare(a.updatedAt ?? ""))

  return (
    <section id="projects" aria-labelledby="projects-title" className="relative z-10 bg-background px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <h2 id="projects-title" className="section-title mb-6">Featured Work</h2>
        <div role="group" aria-label="Filter projects by category" className="mb-10 flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              type="button"
              size="sm"
              variant={activeFilter === category.id ? "default" : "outline"}
              aria-pressed={activeFilter === category.id}
              className="rounded-full"
              onClick={() => {
                ripple.stop()
                setActiveFilter(category.id)
              }}
            >
              {category.name}
              <span className="ml-1.5 text-xs opacity-70">({category.count})</span>
            </Button>
          ))}
        </div>

        <TooltipProvider>
          {statusGroups.map(({ status, label }) => {
            const group = filteredProjects.filter((project) => project.liveStatus === status)
            if (!group.length) return null

            return (
              <section key={status} aria-labelledby={`projects-${status}`} className="mb-12 last:mb-0">
                <h3 id={`projects-${status}`} className="border-b border-border pb-3 text-base font-semibold tracking-tight">
                  {label}
                </h3>
                <ul>
                  {group.map((project) => (
                    <li
                      key={project.id}
                      className="grid items-center gap-5 border-b border-border py-6 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:gap-10 md:py-8 lg:gap-14"
                    >
                      <div
                        className="relative aspect-[16/10] overflow-hidden rounded-lg bg-muted"
                        onPointerEnter={ripple.move}
                        onPointerMove={ripple.move}
                        onPointerLeave={ripple.stop}
                        onPointerCancel={ripple.stop}
                      >
                        <img
                          src={project.image || placeholder}
                          alt={`${project.title} preview`}
                          loading="lazy"
                          decoding="async"
                          className="absolute inset-0 h-full w-full object-contain"
                          onError={({ currentTarget }) => {
                            if (currentTarget.getAttribute("src") !== placeholder) currentTarget.src = placeholder
                          }}
                        />
                      </div>
                      <div>
                        <p className="mb-2 font-mono text-xs text-muted-foreground">{project.date}</p>
                        <h4 className="mb-2 text-2xl font-bold tracking-tight lg:text-3xl">{project.title}</h4>
                        <p className="max-w-[55ch] text-sm leading-relaxed text-muted-foreground lg:text-base">{project.description}</p>
                        <ul aria-label="Technologies" className="mb-5 mt-4 flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <li key={tech}>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <span role="img" aria-label={tech} className="grid size-7 place-items-center rounded-md bg-muted p-1.5">
                                    <TechIcon name={tech} />
                                  </span>
                                </TooltipTrigger>
                                <TooltipContent>{tech}</TooltipContent>
                              </Tooltip>
                            </li>
                          ))}
                        </ul>
                        <Button
                          variant="outline"
                          type="button"
                          aria-label={`View project: ${project.title}`}
                          onClick={(event) => {
                            opener.current = event.currentTarget
                            ripple.stop()
                            setSelectedProject(project)
                          }}
                        >
                          View project
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            )
          })}
        </TooltipProvider>

        <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
          {selectedProject && (
            <ProjectDetails
              key={selectedProject.id}
              project={selectedProject}
              returnFocus={() => opener.current?.focus({ preventScroll: true })}
            />
          )}
        </Dialog>
      </div>
    </section>
  )
}
