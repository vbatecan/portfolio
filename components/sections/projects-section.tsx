"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { TechIcon } from "@/components/ui/tech-icon"
import { AnimatePresence, motion } from "framer-motion"
import {
  ExclamationCircleIcon,
  CheckCircleIcon,
  ArrowTopRightOnSquareIcon,
  LockClosedIcon,
  LockOpenIcon,
  CodeBracketIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline"
import { GithubIcon } from "@/components/ui/brand-icons"
import { useState } from "react"
import { createPortal } from "react-dom"
import { AllProjects, RepoStatus, LiveStatus } from "@/lib/data"

const projects = AllProjects

const categories = [
  { id: "all", name: "All", count: projects.length },
  { id: "web", name: "Web", count: projects.filter((p) => p.category === "web").length },
  { id: "desktop", name: "Desktop", count: projects.filter((p) => p.category === "desktop").length },
  { id: "hardware", name: "Hardware", count: projects.filter((p) => p.category === "hardware").length },
  { id: "ai", name: "AI/ML", count: projects.filter((p) => p.category === "ai").length },
  { id: "api", name: "API", count: projects.filter((p) => p.category === "api").length },
  { id: "security", name: "Security", count: projects.filter((p) => p.category === "security").length },
]

// Helper function to get status information
const getStatusInfo = (status: LiveStatus | RepoStatus) => {
  switch (status) {
    case "live":
      return { icon: CheckCircleIcon, color: "bg-green-500", text: "Live" }
    case "offline":
      return { icon: ExclamationCircleIcon, color: "bg-gray-500", text: "Offline" }
    case "development":
      return { icon: ExclamationCircleIcon, color: "bg-yellow-500", text: "WIP" }
    case "completed":
      return { icon: CheckCircleIcon, color: "bg-blue-500", text: "Done" }
    case "archived":
      return { icon: ExclamationCircleIcon, color: "bg-gray-600", text: "Archived" }
    case "public":
      return { icon: LockOpenIcon, color: "bg-blue-500", text: "Public" }
    case "private":
      return { icon: LockClosedIcon, color: "bg-secondary", text: "Private" }
    case "none":
      return { icon: ExclamationCircleIcon, color: "bg-gray-400", text: "No Repo" }
    default:
      return { icon: ExclamationCircleIcon, color: "bg-gray-500", text: "?" }
  }
}

// ─── Modal Carousel ────────────────────────────────────────────────────────────

function ModalCarousel({
  project,
  onClose,
}: {
  project: (typeof projects)[0]
  onClose: () => void
}) {
  const [activeIdx, setActiveIdx] = useState(0)

  const allImages = project.images && project.images.length > 0
    ? project.images
    : [project.image]

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation()
    setActiveIdx((i) => (i - 1 + allImages.length) % allImages.length)
  }

  const next = (e: React.MouseEvent) => {
    e.stopPropagation()
    setActiveIdx((i) => (i + 1) % allImages.length)
  }

  const isMulti = allImages.length > 1

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white dark:bg-gray-900 rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Image Carousel ── */}
        <div className="relative flex-shrink-0 overflow-hidden" style={{ height: "220px" }}>
          <AnimatePresence mode="wait">
            <motion.img
              key={activeIdx}
              src={allImages[activeIdx] || "/placeholder.svg"}
              alt={`${project.title} screenshot ${activeIdx + 1}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }}
            />
          </AnimatePresence>

          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 rounded-full z-10"
            onClick={onClose}
          >
            ×
          </Button>

          {/* Prev / Next arrows */}
          {isMulti && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors z-10"
              >
                <ChevronLeftIcon className="h-4 w-4" />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors z-10"
              >
                <ChevronRightIcon className="h-4 w-4" />
              </button>

              {/* Dot indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {allImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setActiveIdx(i) }}
                    className={`rounded-full transition-all ${i === activeIdx ? "w-4 h-2 bg-white" : "w-2 h-2 bg-white/50 hover:bg-white/80"}`}
                  />
                ))}
              </div>

              {/* Image counter */}
              <div className="absolute top-3 left-3 bg-black/50 text-white text-xs font-mono px-2 py-1 rounded z-10">
                {activeIdx + 1} / {allImages.length}
              </div>
            </>
          )}
        </div>

        {/* ── Content ── */}
        <div className="p-6 overflow-y-auto flex-1 min-h-0">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{project.details.overview}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-mono text-sm text-secondary mb-4 uppercase tracking-wide">Key Features</h4>
              <ul className="space-y-2">
                {project.details.keyFeatures.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-3 text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-sm text-secondary mb-4 uppercase tracking-wide">Tech Stack</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.details.skills.map((skill) => (
                  <span key={skill} className="tech-tag flex items-center gap-1.5 px-2.5 py-1 text-xs">
                    <div className="w-3.5 h-3.5 flex items-center justify-center">
                      <TechIcon name={skill} />
                    </div>
                    <span>{skill}</span>
                  </span>
                ))}
              </div>

              <h4 className="font-mono text-sm text-secondary mb-3 uppercase tracking-wide">Impact</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.details.impact}
              </p>
            </div>
          </div>
        </div>

        {/* ── Footer ── */}
        <div className="flex-shrink-0 flex gap-4 p-6 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          <Button
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono"
            disabled={project.repoStatus === "none"}
            onClick={(e) => {
              e.stopPropagation()
              if (project.github !== "#") {
                window.open(project.github, '_blank')
              }
            }}
          >
            <GithubIcon className="h-4 w-4 mr-2" />
            {project.repoStatus === "private" ? "Request Access" : "View Code"}
          </Button>
          <Button
            variant="outline"
            className="font-mono"
            disabled={project.liveStatus !== "live"}
            onClick={(e) => {
              e.stopPropagation()
              if (project.live !== "#") {
                window.open(project.live, "_blank", "noreferrer")
              }
            }}
          >
            <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-2" />
            {project.liveStatus === "live" ? "Live Demo" : "—"}
          </Button>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  )
}

export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  let filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter);
  
  // Sort by importance
  filteredProjects = filteredProjects.sort((a, b) => {
    const statusOrder = { "live": 0, "completed": 1, "development": 2, "archived": 3, "offline": 4 }
    return statusOrder[a.liveStatus] - statusOrder[b.liveStatus]
  })

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50/50 dark:bg-gray-800/50 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-sm text-secondary mb-2 tracking-widest uppercase">
            <CodeBracketIcon className="inline h-4 w-4 mr-2" />
            portfolio
          </p>
          <h2 className="section-title mb-4">Featured Work</h2>
          <div className="accent-line mb-6"></div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <div key={category.id} className="transition-transform duration-200 hover:scale-105 active:scale-95">
              <Button
                variant={activeFilter === category.id ? "default" : "outline"}
                onClick={() => setActiveFilter(category.id)}
                className={`rounded-full px-4 py-1.5 text-sm font-mono ${
                  activeFilter === category.id ? "bg-primary text-primary-foreground" : ""
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-60">({category.count})</span>
              </Button>
            </div>
          ))}
        </div>

        {/* Uniform Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((project, index) => {
            const liveStatusInfo = getStatusInfo(project.liveStatus)
            const repoStatusInfo = getStatusInfo(project.repoStatus)
            const LiveIcon = liveStatusInfo.icon
            const RepoIcon = repoStatusInfo.icon

            return (
              <div
                key={project.id}
                className="group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01]"
                onClick={() => setSelectedProject(project)}
              >
                <Card className="h-full overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full object-cover h-40 transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Status + Date badges */}
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="font-mono text-xs px-2 py-1 bg-black/70 text-white rounded flex items-center gap-1">
                        {liveStatusInfo.text}
                      </span>
                      <span className="font-mono text-xs px-2 py-1 bg-black/70 text-white rounded flex items-center gap-1">
                        <RepoIcon className="h-3 w-3" />
                        {project.repoStatus === "none" ? "—" : project.repoStatus}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className="font-mono text-xs px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded text-gray-700 dark:text-gray-300">
                        {project.date}
                      </span>
                    </div>
                  </div>

                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-bold text-foreground flex items-center gap-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    {/* Tech stack - visual icons with tooltips */}
                    <div className="flex items-center flex-wrap gap-2 mb-3">
                      <TooltipProvider>
                        {project.technologies.map((tech) => (
                          <Tooltip key={tech}>
                            <TooltipTrigger asChild>
                              <div className="w-7 h-7 p-1.5 rounded-lg bg-gray-50/80 dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700/60 hover:border-primary/30 dark:hover:border-primary/40 hover:bg-white dark:hover:bg-gray-800 hover:scale-110 transition-all flex items-center justify-center cursor-help">
                                <TechIcon name={tech} />
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="font-mono text-xs">{tech}</p>
                            </TooltipContent>
                          </Tooltip>
                        ))}
                      </TooltipProvider>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ModalCarousel
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}