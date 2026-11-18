"use client"

import { useRef, useState } from "react"
import { ChevronRightIcon } from "@heroicons/react/24/outline"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import type { Project } from "@/lib/data"
import { ProjectDetailsContent } from "./project-details-content"
import { ProjectPreview } from "./project-preview"

type FeaturedProject = Omit<Project, "icon">

export function FeaturedProjectCards({ projects }: { projects: readonly FeaturedProject[] }) {
  const [selectedProject, setSelectedProject] = useState<FeaturedProject | null>(null)
  const opener = useRef<HTMLButtonElement>(null)

  function openProject(project: FeaturedProject, trigger: HTMLButtonElement) {
    opener.current = trigger
    setSelectedProject(project)
  }

  return (
    <>
      <ul className="grid gap-3 md:grid-cols-3 md:gap-5">
        {projects.map((project) => (
          <li key={project.id}>
            <button
              type="button"
              aria-label={`View project: ${project.title}`}
              className="flex h-full w-full items-center gap-3 rounded-lg border border-border p-2.5 text-left transition-colors hover:bg-muted/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:flex-col md:items-stretch md:p-3"
              onClick={(event) => openProject(project, event.currentTarget)}
            >
              <ProjectPreview project={project} className="w-24 shrink-0 sm:w-32 md:w-full" />
              <span className="flex min-w-0 flex-1 items-center justify-between gap-2 md:px-1 md:pb-1">
                <span>
                  <span className="block font-bold tracking-tight md:text-xl">{project.title}</span>
                  <span className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground md:line-clamp-none md:text-sm">
                    {project.description}
                  </span>
                </span>
                <ChevronRightIcon aria-hidden="true" className="size-4 shrink-0 text-muted-foreground" />
              </span>
            </button>
          </li>
        ))}
      </ul>
      <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent
            key={selectedProject.id}
            data-lenis-prevent-wheel
            className="flex max-h-[90dvh] w-[calc(100%-2rem)] max-w-4xl flex-col gap-0 overflow-hidden rounded-xl p-0 sm:rounded-xl motion-reduce:animate-none"
            onCloseAutoFocus={(event) => {
              event.preventDefault()
              opener.current?.focus({ preventScroll: true })
            }}
          >
            <ProjectDetailsContent project={selectedProject} />
          </DialogContent>
        )}
      </Dialog>
    </>
  )
}
