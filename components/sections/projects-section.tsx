"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Github,
  ExternalLink,
  Fingerprint,
  Wifi,
  Search,
  GraduationCap,
  Server,
  Shield,
  ShoppingCart,
  MessageSquare,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    id: 1,
    title: "Student Attendance Management System",
    description:
      "Web-based interface for biometric attendance tracking with real-time processing and automated reporting",
    category: "web",
    image: "/assets/sams/1.png?height=200&width=300",
    technologies: ["Angular", "Quarkus", "PostgreSQL", "TypeScript", "PrimeNG", "JWT"],
    github: "#",
    live: "#",
    icon: GraduationCap,
    date: "2024",
    details: {
      overview:
        "The web interface of the Trackattend project, integrating fingerprint biometric authentication for real-time student attendance registration.",
      keyFeatures: [
        "SF2 report generation with automated data processing",
        "Section-specific attendance metrics and analytics",
        "SMS notification system for parent communication",
        "Real-time biometric data integration",
        "Teacher and administrator dashboard",
        "Performance analytics and insights",
      ],
      impact:
        "Significantly reduces manual reporting time and effort, allowing educators to focus on instruction rather than administrative tasks.",
      skills: ["Angular", "Quarkus", "PostgreSQL", "TypeScript", "PrimeNG", "JWT", "CSS", "HTML"],
    },
  },
  {
    id: 2,
    title: "Trackattend Hardware System",
    description:
      "Fingerprint-based attendance system with ESP32 microcontroller and AS608 scanner for Punturin Senior High School",
    category: "hardware",
    image: "/assets/Trackattend/1.jpg?height=200&width=300",
    technologies: ["C++", "Arduino", "ESP32", "JavaScript", "HTML", "CSS"],
    github: "#",
    live: "#",
    icon: Fingerprint,
    date: "2024",
    details: {
      overview:
        "A comprehensive Grade 12 research project combining hardware and software to automate student attendance using fingerprint biometric technology.",
      keyFeatures: [
        "AS608 fingerprint scanner integration",
        "ESP32 microcontroller programming",
        "Instant SF2 report generation without manual entry",
        "Real-time tracking for teachers",
        "SMS notifications to parents for absences",
        "Web control interface using ESP Async Web Server",
      ],
      impact:
        "Demonstrated considerable success in enhancing attendance accuracy and operational efficiency at Punturin Senior High School.",
      skills: ["C++", "Arduino", "ESP32", "JavaScript", "HTML", "CSS", "Embedded Systems"],
    },
  },
  {
    id: 3,
    title: "Sticker Guidance System",
    description:
      "AI-powered visual detection tool for streamlining sticker location in Silhouette Studio for Shopee orders",
    category: "ai",
    image: "/assets/Sticker Guidance/1.png?height=200&width=300",
    technologies: ["Python", "PyTorch", "YOLO", "Ultralytics", "Roboflow"],
    github: "#",
    live: "#",
    icon: Search,
    date: "2024",
    details: {
      overview:
        "Machine learning solution designed to help editors quickly locate specific stickers within Silhouette Studio software for Shopee product orders.",
      keyFeatures: [
        "Visual detection using YOLO object detection",
        "PyTorch-based machine learning model",
        "Roboflow dataset management and training",
        "Real-time sticker identification and guidance",
        "Improved accuracy for order fulfillment",
        "Streamlined workflow for large sticker inventories",
      ],
      impact:
        "Significantly improves operational efficiency and accuracy in sticker product order preparation, reducing time spent navigating large sticker collections.",
      skills: ["Python", "PyTorch", "YOLO", "Machine Learning", "Computer Vision", "Ultralytics", "Roboflow"],
    },
  },
  {
    id: 4,
    title: "PISO WiFi Management System",
    description:
      "Python-based pay-per-use WiFi system for Orange Pi One with automated access control and admin interface",
    category: "system",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Python", "Flask", "Docker", "Linux", "REST API"],
    github: "#",
    live: "#",
    icon: Wifi,
    date: "2024",
    details: {
      overview:
        "A comprehensive WiFi management system enabling pay-per-use internet access with automated control and monitoring capabilities.",
      keyFeatures: [
        "Real-time WiFi access control and time-based credits",
        "MAC address device tracking and management",
        "Web-based admin interface for user management",
        "Transaction history and monitoring dashboard",
        "Docker containerization for development",
        "Linux network tools integration (hostapd, dnsmasq)",
      ],
      impact:
        "Production-ready system for Orange Pi One providing versatile WiFi management for various commercial environments.",
      skills: ["Python", "Flask", "Docker", "Linux", "Network Management", "REST API", "Containerization"],
    },
  },
  {
    id: 5,
    title: "Shoes API",
    description:
      "Robust backend solution with dynamic searching capabilities for comprehensive shoe-related data management",
    category: "api",
    image: "/assets/Shoes Search API/1.png?height=200&width=300",
    technologies: ["Spring Boot", "PostgreSQL", "REST API", "Java"],
    github: "#",
    live: "#",
    icon: Server,
    date: "Oct 2024 - Nov 2024",
    details: {
      overview:
        "A robust backend solution crafted to offer manipulable and dynamic searching capabilities for shoe-related data with comprehensive filtering operations.",
      keyFeatures: [
        "Dynamic and flexible query interface",
        "Comprehensive shoe data aggregation (size, name, brand, specifications)",
        "Advanced filtering and search operations",
        "RESTful API design with Spring Boot",
        "PostgreSQL database integration",
        "Scalable backend architecture",
      ],
      impact:
        "Provides a flexible and powerful API for shoe retailers and applications requiring comprehensive product data management and search capabilities.",
      skills: ["Spring Boot", "PostgreSQL", "REST API", "Java", "Database Design"],
    },
  },
  {
    id: 6,
    title: "ESP32 Deauther",
    description:
      "WiFi security testing tool with enhanced browser-based interface for network deauthentication testing",
    category: "security",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["C++", "Arduino", "ESP32", "Hardware"],
    github: "#",
    live: "#",
    icon: Shield,
    date: "Oct 2024",
    details: {
      overview:
        "Contributed to the development of the user interface for the ESP32 Deauther project—a tool designed for WiFi network security testing and educational purposes.",
      keyFeatures: [
        "Browser-based interface for intuitive controls",
        "Network scanning and device discovery",
        "Deauthentication testing capabilities",
        "Device connectivity management",
        "Educational security research tool",
        "ESP32 microcontroller integration",
      ],
      impact:
        "Enhanced accessibility for educational and security research purposes, making WiFi security testing more approachable for learning environments.",
      skills: ["C++", "Arduino", "ESP32", "Hardware", "Network Security", "Web Interface"],
    },
  },
  {
    id: 7,
    title: "Gold Days Clothing",
    description:
      "Refined e-commerce platform for high-quality apparel with secure transaction systems and seamless shopping experience",
    category: "ecommerce",
    image: "/assets/4/1.png?height=200&width=300",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    github: "#",
    live: "#",
    icon: ShoppingCart,
    date: "Aug 2024 - Sep 2024",
    details: {
      overview:
        "A refined e-commerce platform dedicated to the sale of high-quality apparel, leveraging cutting-edge technology for seamless shopping experiences.",
      keyFeatures: [
        "User-friendly shopping interface",
        "Secure transaction processing systems",
        "Product catalog management",
        "Customer account management",
        "Order tracking and management",
        "Responsive design for all devices",
      ],
      impact:
        "Delivered a professional e-commerce solution that provides customers with a secure and intuitive online shopping experience for quality apparel.",
      skills: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "E-commerce", "Database Design"],
    },
  },
  {
    id: 8,
    title: "Forumania",
    description:
      "Dynamic forum platform fostering online communities with real-time communication and structured discussions",
    category: "community",
    image: "/assets/Forumania/1.png?height=200&width=300",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    github: "#",
    live: "#",
    icon: MessageSquare,
    date: "Jul 2024 - Aug 2024",
    details: {
      overview:
        "A forum platform designed to facilitate engaging discussions and foster dynamic online communities with advanced technology and user-centric approach.",
      keyFeatures: [
        "Intuitive interface for seamless interaction",
        "Real-time communication capabilities",
        "Structured discussion environments",
        "User expertise sharing and solution seeking",
        "Community management tools",
        "Responsive design for all devices",
      ],
      impact:
        "Created a valuable tool for cultivating informed and connected communities, enabling users to engage in thoughtful conversations and knowledge exchange.",
      skills: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "Community Platform", "Real-time Communication"],
    },
  },
  {
    id: 9,
    title: "Soapify",
    description:
      "Professional static website for soap and disinfectant products with responsive design and brand presentation",
    category: "web",
    image: "/assets/Soapify/1.png?height=200&width=300",
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "#",
    live: "#",
    icon: Sparkles,
    date: "Mar 2024",
    details: {
      overview:
        "A static website developed as a commission for a client to present and promote soap and disinfectant products, serving as a digital brand introduction.",
      keyFeatures: [
        "Responsive and visually coherent design",
        "Professional brand presentation",
        "Product showcase and information",
        "Client-provided content integration",
        "Cross-device compatibility",
        "Optimized loading performance",
      ],
      impact:
        "Successfully delivered a professional web presence that effectively reflects the client's vision and branding objectives, encouraging product interest and customer engagement.",
      skills: ["JavaScript", "HTML", "CSS", "Responsive Design", "Client Communication", "Brand Implementation"],
    },
  },
  {
    id: 10,
    title: "Enrollment System C# Desktop Application",
    description:
      "Comprehensive desktop application for streamlining student enrollment processes and record-keeping in educational institutions",
    category: "desktop",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["C#", "Visual Studio", "SQLite", "MySQL", "LocalDB"],
    github: "#",
    live: "#",
    icon: GraduationCap,
    date: "Sep 2023 - Oct 2023",
    details: {
      overview:
        "A comprehensive desktop application designed to streamline student enrollment processes and enhance record-keeping in educational institutions, built with C# and equipped with LocalDB.",
      keyFeatures: [
        "User-friendly interface for student registration",
        "Efficient student record management",
        "LocalDB integration for data persistence",
        "Comprehensive enrollment workflow",
        "Educational institution record-keeping",
        "Desktop application with native performance",
      ],
      impact:
        "Streamlines enrollment processes in educational institutions, reducing administrative overhead and improving data accuracy for student management.",
      skills: ["C#", "Visual Studio", "SQLite", "MySQL", "LocalDB", "Desktop Development", "Database Design"],
    },
  },
  {
    id: 11,
    title: "Fast Food Management System",
    description:
      "Comprehensive solution for streamlining fast food operations including inventory, sales, staffing, and customer service management",
    category: "desktop",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["VB.NET", "Visual Studio", "MySQL", "Desktop Application"],
    github: "#",
    live: "#",
    icon: ShoppingCart,
    date: "Apr 2022 - Jun 2022",
    details: {
      overview:
        "A comprehensive solution designed to streamline operations and enhance efficiency in the fast food industry, managing inventory, sales, staffing, and customer service.",
      keyFeatures: [
        "Inventory management and tracking",
        "Sales processing and reporting",
        "Staff management and scheduling",
        "Customer service optimization",
        "Standardized operational processes",
        "Real-time business analytics",
      ],
      impact:
        "Optimizes day-to-day operations in fast food businesses, improving profitability and ensuring consistent, high-quality customer experiences.",
      skills: ["VB.NET", "Visual Studio", "MySQL", "Desktop Application Development", "Business Process Management"],
    },
  },
  {
    id: 12,
    title: "To Do List Spring Boot REST API",
    description:
      "RESTful API for task management applications with full CRUD operations for creating, updating, deleting, and managing tasks",
    category: "api",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Spring Boot", "Java", "REST API", "Database"],
    github: "#",
    live: "#",
    icon: Server,
    date: "Jan 2022",
    details: {
      overview:
        "A RESTful API designed to assist Todo list applications in managing task information, providing comprehensive CRUD operations for task management.",
      keyFeatures: [
        "Complete CRUD operations for tasks",
        "RESTful API design principles",
        "Task creation and management",
        "Data retrieval and updating",
        "Database integration for persistence",
        "API documentation and endpoints",
      ],
      impact:
        "Simplifies Todo list app development by providing a robust backend API, eliminating the need for developers to build data management from scratch.",
      skills: ["Spring Boot", "Java", "REST API", "Database Design", "API Development", "Backend Development"],
    },
  },
]

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
                className={`rounded-full px-4 py-2 text-sm ${
                  activeFilter === category.id ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white" : ""
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
            {filteredProjects.map((project, index) => (
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
                      <Button size="sm" variant="outline" className="rounded-full flex-1 text-xs">
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </Button>
                      <Button size="sm" variant="outline" className="rounded-full flex-1 text-xs">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{selectedProject.title}</h3>
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-600 dark:text-gray-300">
                          {selectedProject.date}
                        </span>
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

                  <div className="flex gap-4 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </Button>
                    <Button variant="outline">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
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
