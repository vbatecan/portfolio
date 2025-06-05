"use client"

import { motion } from "framer-motion"
import {
  Code,
  Database,
  Smartphone,
  Globe,
  Server,
  Brain,
  Shield,
  Monitor,
  GitBranch,
  Wrench,
  Terminal,
  Cloud,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const skills = [
  {
    name: "Backend Development",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    items: ["Java", "Spring Boot", "Quarkus", "RESTful APIs", "JWT", "OAuth2"],
    description: "Specializing in secure, scalable backend systems with Java frameworks and authentication",
    details: [
      "Enterprise Java with Spring Boot ecosystem",
      "Cloud-native applications with Quarkus",
      "RESTful API design and implementation",
      "JWT-based authentication systems",
      "OAuth2 security implementation",
      "Microservices architecture patterns",
    ],
    relatedProjects: ["Student Attendance Management System", "Shoes API", "To Do List Spring Boot REST API"],
    isSpecialty: true,
  },
  {
    name: "Frontend Development",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    items: ["Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
    description: "Creating dynamic, responsive user interfaces with Angular and modern web technologies",
    details: [
      "Angular framework expertise",
      "TypeScript for type-safe development",
      "Component-based architecture",
      "Responsive design and CSS Grid/Flexbox",
      "Frontend-backend integration",
      "Performance optimization and accessibility",
    ],
    relatedProjects: ["Student Attendance Management System", "Soapify"],
    isSpecialty: true,
  },
  {
    name: "Database Management",
    icon: Database,
    color: "from-orange-500 to-red-500",
    items: ["PostgreSQL", "MySQL", "MariaDB", "Redis", "SQLite", "Database Design"],
    description: "Relational database expertise with focus on design, optimization, and data integrity",
    details: [
      "Relational database design and normalization",
      "Query optimization and indexing strategies",
      "In-memory caching with Redis",
      "Database migration and backup strategies",
      "ACID compliance and transaction management",
      "Data modeling and schema design",
    ],
    relatedProjects: ["Student Attendance Management System", "Shoes API", "PISO WiFi Management System"],
    isSpecialty: true,
  },
  {
    name: "Security & Authentication",
    icon: Shield,
    color: "from-red-500 to-pink-500",
    items: ["JWT", "OAuth2", "API Security", "Secure Development", "Data Protection"],
    description: "Implementing robust authentication systems and security best practices",
    details: [
      "JWT-based authentication implementation",
      "OAuth2 authorization flows",
      "API security and rate limiting",
      "Secure coding practices and OWASP guidelines",
      "Data encryption and protection",
      "Security monitoring and compliance",
    ],
    relatedProjects: ["Student Attendance Management System", "Shoes API"],
    isSpecialty: true,
  },
  {
    name: "Mobile & Desktop",
    icon: Smartphone,
    color: "from-purple-500 to-pink-500",
    items: ["Kotlin", "Android Studio", "C#", "VB.NET", "Desktop Apps"],
    description: "Native and cross-platform application development",
    details: [
      "Native Android development with Kotlin",
      "C# desktop application development",
      "VB.NET business applications",
      "Cross-platform development strategies",
      "Mobile UI/UX best practices",
      "Desktop application architecture",
    ],
    relatedProjects: ["Trackattend Hardware System", "Enrollment System", "Fast Food Management System"],
  },
  {
    name: "AI/ML & Data",
    icon: Brain,
    color: "from-indigo-500 to-purple-500",
    items: ["Python", "TensorFlow", "PyTorch", "Data Analysis", "Machine Learning"],
    description: "Machine learning models, data analysis, and AI-powered applications",
    details: [
      "Deep learning with TensorFlow and PyTorch",
      "Data preprocessing and feature engineering",
      "Statistical analysis and visualization",
      "Neural network architecture design",
      "Model training, validation, and deployment",
      "Computer vision and NLP applications",
    ],
    relatedProjects: ["Sticker Guidance System"],
  },
  {
    name: "Cloud & DevOps",
    icon: Cloud,
    color: "from-teal-500 to-blue-500",
    items: ["Vercel", "Docker", "CI/CD", "AWS", "Linux Systems"],
    description: "Cloud infrastructure, containerization, and automated deployment",
    details: [
      "Serverless deployment with Vercel",
      "Containerization with Docker",
      "Automated CI/CD pipeline setup",
      "AWS cloud services and architecture",
      "Linux system administration",
      "Infrastructure as Code (IaC) practices",
    ],
    relatedProjects: ["PISO WiFi Management System"],
  },
  {
    name: "Development Tools",
    icon: Wrench,
    color: "from-yellow-500 to-orange-500",
    items: ["IntelliJ IDEA", "VS Code", "PyCharm", "WebStorm", "Postman"],
    description: "Professional development environment and productivity tools",
    details: [
      "IntelliJ IDEA for Java development",
      "IDE customization and plugin development",
      "Code debugging and profiling techniques",
      "API testing and documentation with Postman",
      "Code quality analysis and refactoring",
      "Integrated development workflows",
    ],
    relatedProjects: ["All Projects"],
  },
  {
    name: "Operating Systems",
    icon: Terminal,
    color: "from-gray-500 to-slate-500",
    items: ["Linux", "Ubuntu", "Arch", "Windows", "Kali", "Debian"],
    description: "Multi-platform system administration and command-line proficiency",
    details: [
      "Linux system administration and scripting",
      "Package management across distributions",
      "System security and hardening",
      "Network configuration and troubleshooting",
      "Shell scripting and automation",
      "Virtualization and dual-boot setups",
    ],
    relatedProjects: ["PISO WiFi Management System", "Trackattend Hardware System"],
  },
  {
    name: "Version Control",
    icon: GitBranch,
    color: "from-violet-500 to-purple-500",
    items: ["Git", "GitHub", "Agile", "Collaboration", "Code Review"],
    description: "Advanced version control workflows and collaborative development",
    details: [
      "Git branching strategies and workflows",
      "Code review processes and best practices",
      "Agile development methodologies",
      "Team collaboration and project management",
      "Merge conflict resolution",
      "Release management and tagging",
    ],
    relatedProjects: ["All Projects"],
  },
  {
    name: "Hardware & IoT",
    icon: Monitor,
    color: "from-emerald-500 to-teal-500",
    items: ["Arduino", "ESP32", "Embedded Systems", "Hardware Programming"],
    description: "Embedded systems programming and IoT device development",
    details: [
      "Arduino programming and circuit design",
      "ESP32 WiFi and Bluetooth integration",
      "Sensor interfacing and data collection",
      "Real-time embedded system development",
      "Hardware-software integration",
      "IoT protocol implementation (MQTT, HTTP)",
    ],
    relatedProjects: ["Trackattend Hardware System", "ESP32 Deauther"],
  },
  {
    name: "Web Technologies",
    icon: Globe,
    color: "from-pink-500 to-rose-500",
    items: ["PHP", "REST APIs", "GraphQL", "Web Security", "Performance"],
    description: "Modern web development with focus on security and performance",
    details: [
      "RESTful API design and implementation",
      "GraphQL schema design and optimization",
      "Web application security best practices",
      "Performance optimization techniques",
      "Caching strategies and CDN integration",
      "Progressive Web App (PWA) development",
    ],
    relatedProjects: ["Gold Days Clothing", "Forumania", "PISO WiFi Management System"],
  },
]

const coreSpecializations = ["Java", "Spring Boot", "Quarkus", "Angular", "PostgreSQL", "JWT", "OAuth2", "RESTful APIs"]

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 relative z-10">
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
            Skills & Expertise
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Specializing in Java backend development, Angular frontend, and secure full-stack solutions with clean
            architecture and maintainable code
          </p>
        </motion.div>

        {/* Core Specializations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Core Specializations
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {coreSpecializations.map((spec, index) => (
              <motion.div
                key={spec}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg transition-all duration-300 font-semibold transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl"
                data-magnetic
              >
                {spec}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50, rotateY: -90 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.05,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              className="group perspective-1000 relative"
              data-magnetic
            >
              <Card
                className={`relative h-48 overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg transition-all duration-500 rounded-2xl transform-gpu group-hover:shadow-2xl group-hover:scale-[1.05] group-hover:rotate-y-10 group-hover:z-50 ${
                  skill.isSpecialty ? "ring-2 ring-blue-500/50" : ""
                }`}
              >
                {skill.isSpecialty && (
                  <div className="absolute top-2 right-2 z-20">
                    <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full font-medium">Specialty</span>
                  </div>
                )}

                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                  animate={{
                    background: [
                      `linear-gradient(45deg, ${skill.color.split(" ")[1]}, ${skill.color.split(" ")[3]})`,
                      `linear-gradient(135deg, ${skill.color.split(" ")[3]}, ${skill.color.split(" ")[1]})`,
                      `linear-gradient(45deg, ${skill.color.split(" ")[1]}, ${skill.color.split(" ")[3]})`,
                    ],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />

                {/* Floating particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 bg-gradient-to-r ${skill.color} rounded-full opacity-40`}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [-10, 10, -10],
                        opacity: [0.2, 0.8, 0.2],
                      }}
                      transition={{
                        duration: 2 + i * 0.5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>

                <CardContent className="relative z-10 p-4 h-full flex flex-col items-center justify-center text-center">
                  <div
                    className={`p-3 bg-gradient-to-br ${skill.color} rounded-2xl mb-3 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-10deg] group-hover:rotate-[10deg] group-hover:rotate-[0deg]`}
                  >
                    <skill.icon className="h-6 w-6 text-white" />
                  </div>

                  <h3 className="font-bold text-sm mb-2 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    {skill.name}
                  </h3>

                  <div className="flex flex-wrap gap-1 justify-center">
                    {skill.items.slice(0, 2).map((item, itemIndex) => (
                      <motion.span
                        key={item}
                        className="text-xs px-2 py-1 bg-white/50 dark:bg-gray-700/50 rounded-full text-gray-700 dark:text-gray-300"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 + itemIndex * 0.02 }}
                        viewport={{ once: true }}
                      >
                        {item}
                      </motion.span>
                    ))}
                    {skill.items.length > 2 && (
                      <motion.span
                        className="text-xs px-2 py-1 bg-white/50 dark:bg-gray-700/50 rounded-full text-gray-700 dark:text-gray-300"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 + 0.04 }}
                        viewport={{ once: true }}
                      >
                        +{skill.items.length - 2}
                      </motion.span>
                    )}
                  </div>
                </CardContent>

                {/* Enhanced Hover Details Tooltip */}
                <div className="absolute inset-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out z-20 overflow-hidden">
                  <div className="h-full flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`p-2 bg-gradient-to-br ${skill.color} rounded-lg`}>
                        <skill.icon className="h-4 w-4 text-white" />
                      </div>
                      <h4 className="font-bold text-sm text-gray-900 dark:text-white">{skill.name}</h4>
                      {skill.isSpecialty && (
                        <span className="px-1 py-0.5 bg-blue-600 text-white text-xs rounded">★</span>
                      )}
                    </div>

                    <p className="text-xs text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">{skill.description}</p>

                    <div className="flex-1 overflow-y-auto mb-2">
                      <ul className="space-y-1">
                        {skill.details.slice(0, 3).map((detail, detailIndex) => (
                          <li
                            key={detailIndex}
                            className="text-xs text-gray-700 dark:text-gray-300 flex items-start gap-1"
                          >
                            <span className="text-blue-500 mt-1">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                        {skill.details.length > 3 && (
                          <li className="text-xs text-gray-500 dark:text-gray-400 italic">
                            +{skill.details.length - 3} more areas
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Related Projects */}
                    <div className="border-t border-gray-200 dark:border-gray-600 pt-2">
                      <p className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Used in:</p>
                      <div className="flex flex-wrap gap-1">
                        {skill.relatedProjects.slice(0, 2).map((project, projIndex) => (
                          <span
                            key={projIndex}
                            className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                          >
                            {project.length > 15 ? project.substring(0, 15) + "..." : project}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Current Learning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Currently Learning
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Advanced Angular",
              "GraphQL",
              "Advanced Spring Boot",
              "Cloud Architecture",
              "Advanced Cybersecurity",
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 rounded-full border border-blue-200 dark:border-blue-700 shadow-md transform hover:scale-105 transition-transform duration-300"
                data-magnetic
              >
                <span className="font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
