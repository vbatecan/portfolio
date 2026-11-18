"use client"

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"
import { Button } from "@/components/ui/button"
import { DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { GithubIcon } from "@/components/ui/brand-icons"
import { TechIcon } from "@/components/ui/tech-icon"
import type { Project } from "@/lib/data"
import { ProjectScreenshotGallery } from "./project-screenshot-gallery"
import styles from "./project-details.module.css"

export function ProjectDetailsContent({ project, fullScreen = false, reducedMotion = false }: {
  project: Project
  fullScreen?: boolean
  reducedMotion?: boolean
}) {
  const hasRepoLink = project.github !== "#" && project.repoStatus !== "none"
  const hasLiveLink = project.live !== "#" && project.liveStatus === "live"
  const stack = (
    <div>
      <h3 className={fullScreen ? styles.label : "mb-2 text-sm font-semibold"}>Tech stack</h3>
      <ul className={fullScreen ? "flex flex-wrap gap-2" : "mb-5 flex flex-wrap gap-2"}>
        {project.details.skills.map((skill) => (
          <li key={skill} className="tech-tag flex items-center gap-1.5 px-2.5 py-1 text-xs">
            <span className="size-3.5"><TechIcon name={skill} /></span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
  const links = (hasRepoLink || hasLiveLink) && (
    <>
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
    </>
  )

  return (
    <>
      <div className="min-h-0 overflow-y-auto overscroll-contain">
        <article className={fullScreen ? styles.detail : undefined}>
          <header className={fullScreen ? styles.brief : "px-5 pb-4 pt-5 pr-12 sm:px-7 sm:pr-14"}>
            <DialogTitle className={fullScreen ? undefined : "text-xl font-bold sm:text-2xl"}>{project.title}</DialogTitle>
            <DialogDescription className={fullScreen ? styles.briefText : "mt-2"}>{project.details.overview}</DialogDescription>
            {fullScreen && stack}
            {fullScreen && links && <div className={styles.links}>{links}</div>}
          </header>
          <ProjectScreenshotGallery project={project} fullScreen={fullScreen} reducedMotion={reducedMotion} />
          <div className={fullScreen ? styles.notes : "grid gap-6 p-5 sm:grid-cols-2 sm:p-7"}>
            <div>
              <h3 className={fullScreen ? styles.label : "mb-2 text-sm font-semibold"}>Key features</h3>
              <ul className="list-disc space-y-2 pl-4 text-sm text-muted-foreground">
                {project.details.keyFeatures.map((feature, index) => <li key={index}>{feature}</li>)}
              </ul>
            </div>
            <div>
              {!fullScreen && stack}
              <h3 className={fullScreen ? styles.label : "mb-2 text-sm font-semibold"}>Impact</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{project.details.impact}</p>
            </div>
          </div>
        </article>
      </div>
      {!fullScreen && links && <footer className="flex flex-wrap gap-3 border-t px-5 py-4 sm:px-7">{links}</footer>}
    </>
  )
}
