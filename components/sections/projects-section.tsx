"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { AnimatePresence, motion } from "framer-motion"
import {
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  Github,
  Lock,
  LockOpen,
  Code2,
} from "lucide-react"
import { useState } from "react"
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
      return { icon: CheckCircle2, color: "bg-green-500", text: "Live" }
    case "offline":
      return { icon: AlertCircle, color: "bg-gray-500", text: "Offline" }
    case "development":
      return { icon: AlertCircle, color: "bg-yellow-500", text: "WIP" }
    case "completed":
      return { icon: CheckCircle2, color: "bg-blue-500", text: "Done" }
    case "archived":
      return { icon: AlertCircle, color: "bg-gray-600", text: "Archived" }
    case "public":
      return { icon: LockOpen, color: "bg-blue-500", text: "Public" }
    case "private":
      return { icon: Lock, color: "bg-secondary", text: "Private" }
    case "none":
      return { icon: AlertCircle, color: "bg-gray-400", text: "No Repo" }
    default:
      return { icon: AlertCircle, color: "bg-gray-500", text: "?" }
  }
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-secondary mb-2 tracking-widest uppercase">
            <Code2 className="inline h-4 w-4 mr-2" />
            portfolio
          </p>
          <h2 className="section-title mb-4">Featured Work</h2>
          <div className="accent-line mb-6"></div>
          <p className="section-subtitle">
            Real applications — not tutorials. Hardware projects, production APIs, and tools I actually built for real use cases.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          className="flex flex-wrap gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.div key={category.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
            </motion.div>
          ))}
        </motion.div>

        {/* Uniform Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const liveStatusInfo = getStatusInfo(project.liveStatus)
              const repoStatusInfo = getStatusInfo(project.repoStatus)
              const LiveIcon = liveStatusInfo.icon
              const RepoIcon = repoStatusInfo.icon

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -50 }}
                  transition={{ duration: 0.5, delay: index * 0.03 }}
                  whileHover={{ y: -5, scale: 1.01 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <Card className="h-full overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl">
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full object-cover h-40"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Status + Date badges */}
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="font-mono text-xs px-2 py-1 bg-black/70 text-white rounded flex items-center gap-1">
                          <span className={`status-dot ${project.liveStatus}`}></span>
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
                        <span className="text-secondary font-mono text-sm">#{project.id.toString().padStart(2, '0')}</span>
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="pt-0">
                      {/* Tech stack - mono styled */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="tech-tag text-gray-400">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-gray-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    className="w-full h-48 object-cover"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 rounded-full"
                    onClick={() => setSelectedProject(null)}
                  >
                    ×
                  </Button>
                </div>

                <div className="p-6 overflow-y-auto" style={{ maxHeight: "calc(90vh - 192px)" }}>
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <p className="font-mono text-sm text-secondary mb-1">
                        #{selectedProject.id.toString().padStart(2, '0')} · {selectedProject.date}
                      </p>
                      <h3 className="text-2xl font-bold text-foreground">{selectedProject.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-2">{selectedProject.details.overview}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-mono text-sm text-secondary mb-4 uppercase tracking-wide">Key Features</h4>
                      <ul className="space-y-2">
                        {selectedProject.details.keyFeatures.map((feature, idx) => (
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
                        {selectedProject.details.skills.map((skill) => (
                          <span key={skill} className="tech-tag">{skill}</span>
                        ))}
                      </div>

                      <h4 className="font-mono text-sm text-secondary mb-3 uppercase tracking-wide">Impact</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        {selectedProject.details.impact}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <Button
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono"
                      disabled={selectedProject.repoStatus === "none"}
                      onClick={(e) => {
                        e.stopPropagation()
                        if (selectedProject.github !== "#") {
                          window.open(selectedProject.github, '_blank')
                        }
                      }}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      {selectedProject.repoStatus === "private" ? "Request Access" : "View Code"}
                    </Button>
                    <Button
                      variant="outline"
                      className="font-mono"
                      disabled={selectedProject.liveStatus !== "live"}
                      onClick={(e) => {
                        e.stopPropagation()
                        if (selectedProject.live !== "#") {
                          window.open(selectedProject.live, "_blank", "noreferrer")
                        }
                      }}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {selectedProject.liveStatus === "live" ? "Live Demo" : "—"}
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}