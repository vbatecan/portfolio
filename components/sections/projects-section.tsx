"use client"

import Link from "next/link"
import { useRef, useState } from "react"
import { ArrowRightIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { AllProjects, type Project } from "@/lib/data"
import { ProjectDetailsContent } from "./project-details-content"
import { ProjectPreview } from "./project-preview"

const featuredProjects = [
  22, // Pikash
  26, // Still Island
  28, // LoopLab
].flatMap((id) => AllProjects.filter((project) => project.id === id))

function ProjectDetails({ project, returnFocus }: { project: Project; returnFocus: () => void }) {
  return (
    <DialogContent
      className="flex max-h-[90dvh] w-[calc(100%-2rem)] max-w-4xl flex-col gap-0 overflow-hidden rounded-xl p-0 sm:rounded-xl motion-reduce:animate-none"
      onCloseAutoFocus={(event) => {
        event.preventDefault()
        returnFocus()
      }}
    >
      <ProjectDetailsContent project={project} />
    </DialogContent>
  )
}

function useProjectDetails() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const opener = useRef<HTMLButtonElement>(null)

  function openProject(project: Project, trigger: HTMLButtonElement) {
    opener.current = trigger
    setSelectedProject(project)
  }

  const dialog = (
    <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
      {selectedProject && (
        <ProjectDetails
          key={selectedProject.id}
          project={selectedProject}
          returnFocus={() => opener.current?.focus({ preventScroll: true })}
        />
      )}
    </Dialog>
  )

  return { openProject, dialog }
}

export function ProjectsSection() {
  const { openProject, dialog } = useProjectDetails()

  return (
    <section id="projects" aria-labelledby="projects-title" className="relative z-10 bg-background px-4 py-12 sm:px-6 md:py-16">
      <div className="mx-auto max-w-7xl">
        <h2 id="projects-title" className="section-title mb-6">Featured Work</h2>
        <ul className="grid gap-3 md:grid-cols-3 md:gap-5">
          {featuredProjects.map((project) => (
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
        <Button asChild variant="outline" className="mt-5">
          <Link href="/projects">
            View all {AllProjects.length} projects
            <ArrowRightIcon aria-hidden="true" />
          </Link>
        </Button>
        {dialog}
      </div>
    </section>
  )
}
