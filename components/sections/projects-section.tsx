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
  LockOpen
} from "lucide-react"
import { useState } from "react"
import { AllProjects } from "../projects"

// Define project status types
type RepoStatus = "public" | "private" | "none"
type LiveStatus = "live" | "offline" | "development" | "archived"

const projects = AllProjects

const categories = [
  { id: "all", name: "All Projects", count: projects.length },
  { id: "web", name: "Web Development", count: projects.filter((p) => p.category === "web").length },
  { id: "desktop", name: "Desktop Applications", count: projects.filter((p) => p.category === "desktop").length },
  { id: "hardware", name: "Hardware & IoT", count: projects.filter((p) => p.category === "hardware").length },
  { id: "ai", name: "AI & Machine Learning", count: projects.filter((p) => p.category === "ai").length },
  { id: "system", name: "System Development", count: projects.filter((p) => p.category === "system").length },
  { id: "api", name: "API Development", count: projects.filter((p) => p.category === "api").length },
  { id: "security", name: "Security & Testing", count: projects.filter((p) => p.category === "security").length },
  { id: "ecommerce", name: "E-commerce", count: projects.filter((p) => p.category === "ecommerce").length },
  { id: "community", name: "Community Platforms", count: projects.filter((p) => p.category === "community").length },
]

// Helper function to get status information
const getStatusInfo = (status: LiveStatus | RepoStatus) => {
  switch (status) {
    case "live":
      return { icon: CheckCircle2, color: "bg-green-500", text: "Live" }
    case "offline":
      return { icon: AlertCircle, color: "bg-red-500", text: "Offline" }
    case "development":
      return { icon: AlertCircle, color: "bg-yellow-500", text: "In Development" }
    case "archived":
      return { icon: AlertCircle, color: "bg-gray-500", text: "Archived" }
    case "public":
      return { icon: LockOpen, color: "bg-blue-500", text: "Public Repository" }
    case "private":
      return { icon: Lock, color: "bg-purple-500", text: "Private Repository" }
    case "none":
      return { icon: AlertCircle, color: "bg-gray-500", text: "No Repository" }
    default:
      return { icon: AlertCircle, color: "bg-gray-500", text: "Unknown" }
  }
}

export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50/50 dark:bg-gray-800/50 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            data-magnetic
          >
            Featured Projects
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real-world applications showcasing technical expertise across web development, hardware integration, AI/ML,
            system architecture, and client solutions
          </p>
        </motion.div>

        {/* Project Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.div key={category.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} data-magnetic>
              <Button
                variant={activeFilter === category.id ? "default" : "outline"}
                onClick={() => setActiveFilter(category.id)}
                className={`rounded-full px-4 py-2 text-sm ${activeFilter === category.id ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white" : ""
                  }`}
              >
                {category.name} ({category.count})
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
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
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group cursor-pointer"
                  data-magnetic
                  onClick={() => setSelectedProject(project)}
                >
                  <Card className="h-full overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl">
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <motion.div
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full"
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          <project.icon className="h-6 w-6 text-white" />
                        </motion.div>
                      </motion.div>

                      {/* Status indicators */}
                      <div className="absolute top-4 left-4 flex gap-2">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div
                                className={`flex items-center gap-1 px-2 py-1 rounded-full ${liveStatusInfo.color} text-white text-xs font-medium`}
                              >
                                <LiveIcon className="h-3 w-3" />
                                <span className="hidden sm:inline">{liveStatusInfo.text}</span>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Status: {liveStatusInfo.text}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div
                                className={`flex items-center gap-1 px-2 py-1 rounded-full ${repoStatusInfo.color} text-white text-xs font-medium`}
                              >
                                <RepoIcon className="h-3 w-3" />
                                <span className="hidden sm:inline">
                                  {project.repoStatus !== "none" ? project.repoStatus : "No Repo"}
                                </span>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Repository: {repoStatusInfo.text}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>

                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 dark:text-gray-300">
                          {project.date}
                        </span>
                      </div>
                    </div>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-400 text-sm">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 border-0 rounded-full text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge
                            variant="secondary"
                            className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 border-0 rounded-full text-xs"
                          >
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="rounded-full flex-1 text-xs"
                          disabled={project.repoStatus === "none"}
                          onClick={(e) => {
                            e.stopPropagation();
                            if (project.github !== "#") {
                              window.open(project.github, '_blank');
                            }
                          }}
                        >
                          <Github className="h-3 w-3 mr-1" />
                          Code
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="rounded-full flex-1 text-xs"
                          disabled={project.liveStatus !== "live"}
                        >
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Demo
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl">
                      <selectedProject.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{selectedProject.title}</h3>
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-600 dark:text-gray-300">
                          {selectedProject.date}
                        </span>

                        {/* Status badges in modal */}
                        <div className="flex gap-2 mt-1 sm:mt-0">
                          {(() => {
                            const liveInfo = getStatusInfo(selectedProject.liveStatus)
                            const LiveModalIcon = liveInfo.icon
                            return (
                              <div
                                className={`flex items-center gap-1 px-2 py-1 rounded-full ${liveInfo.color} text-white text-xs font-medium`}
                              >
                                <LiveModalIcon className="h-3 w-3 mr-1" />
                                {liveInfo.text}
                              </div>
                            )
                          })()}

                          {selectedProject.repoStatus !== "none" &&
                            (() => {
                              const repoInfo = getStatusInfo(selectedProject.repoStatus)
                              const RepoModalIcon = repoInfo.icon
                              return (
                                <div
                                  className={`flex items-center gap-1 px-2 py-1 rounded-full ${repoInfo.color} text-white text-xs font-medium`}
                                >
                                  <RepoModalIcon className="h-3 w-3 mr-1" />
                                  {selectedProject.repoStatus} Repository
                                </div>
                              )
                            })()}
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-lg">{selectedProject.details.overview}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Key Features</h4>
                      <ul className="space-y-3">
                        {selectedProject.details.keyFeatures.map((feature, index) => (
                          <motion.li
                            key={index}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {selectedProject.details.skills.map((skill) => (
                          <Badge
                            key={skill}
                            className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 border-0 rounded-full"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Impact</h4>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {selectedProject.details.impact}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <Button
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      disabled={selectedProject.repoStatus === "none"}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (selectedProject.github !== "#") {
                          window.open(selectedProject.github, '_blank');
                        }
                      }}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      {selectedProject.repoStatus === "private" ? "Request Access" : "View Code"}
                    </Button>
                    <Button variant="outline" disabled={selectedProject.liveStatus !== "live"}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {selectedProject.liveStatus === "live" ? "Live Demo" : "Not Available"}
                    </Button>
                    <Button variant="ghost" onClick={() => setSelectedProject(null)} className="ml-auto">
                      Close
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
