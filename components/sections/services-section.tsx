"use client"

import { motion } from "framer-motion"
import { Globe, Server, Database, Zap, Cpu, Shield } from "lucide-react"
import { Card } from "@/components/ui/card"

const services = [
  {
    icon: Globe,
    title: "Full-Stack Web Development",
    subtitle: "Web, Mobile & SaaS Applications",
    description:
      "Build responsive, scalable web applications with modern frameworks. From landing pages to complex dashboards, I deliver clean code that scales.",
    features: [
      "Next.js, React, Angular, TypeScript",
      "Responsive & accessible UIs",
      "Full-stack SaaS applications",
      "API integrations & third-party services",
      "Progressive Web Apps (PWA)",
    ],
    color: "blue",
  },
  {
    icon: Server,
    title: "Backend APIs & Microservices",
    subtitle: "REST APIs, GraphQL & Server Architecture",
    description:
      "Design and implement robust backend systems that handle high traffic and complex business logic. Focus on security, scalability, and maintainability.",
    features: [
      "Spring Boot, Quarkus, Flask",
      "RESTful & GraphQL APIs",
      "Authentication (JWT, OAuth2)",
      "Microservices architecture",
      "Scalable cloud-native design",
    ],
    color: "purple",
  },
  {
    icon: Database,
    title: "Database Design & Optimization",
    subtitle: "SQL + NoSQL Solutions",
    description:
      "Design efficient database schemas, write complex queries, optimize slow queries, and implement caching strategies for high-performance applications.",
    features: [
      "PostgreSQL schema design",
      "Query optimization & indexing",
      "Database migration strategies",
      "Redis caching layers",
      "Data modeling & ER diagrams",
    ],
    color: "amber",
  },
  {
    icon: Zap,
    title: "Performance & Monitoring",
    subtitle: "Fast & Reliable Systems",
    description:
      "Audit application performance, identify bottlenecks, and implement optimizations. Set up logging, monitoring, and alerting for production systems.",
    features: [
      "Application performance profiling",
      "Lazy loading & code splitting",
      "CDN & asset optimization",
      "Logging with structured outputs",
      "Uptime monitoring & alerts",
    ],
    color: "yellow",
  },
  {
    icon: Cpu,
    title: "IoT & Hardware Integration",
    subtitle: "Embedded Systems & Device Control",
    description:
      "Bring your hardware ideas to life. From ESP32 projects to custom sensors, I create systems that bridge the physical and digital worlds.",
    features: [
      "ESP32 & Arduino development",
      "Sensor integration & calibration",
      "Real-time data processing",
      "Web-based control interfaces",
      "Firmware & embedded C++",
    ],
    color: "green",
  },
  {
    icon: Shield,
    title: "Security & DevOps",
    subtitle: "Secure Deployments & CI/CD",
    description:
      "Implement security best practices and automate deployments. Set up continuous integration pipelines that make releases reliable and stress-free.",
    features: [
      "Security audits & hardening",
      "Docker & Kubernetes",
      "CI/CD pipeline automation",
      "Cloud deployment (AWS, GCP)",
      "SSL/TLS & infrastructure security",
    ],
    color: "red",
  },
]

const colorMap: Record<string, { bg: string; icon: string; ring: string; dot: string; badge: string }> = {
  blue: { bg: "from-blue-500/20 to-blue-600/10", icon: "bg-blue-600", ring: "hover:ring-blue-500/30", dot: "bg-blue-500", badge: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300" },
  purple: { bg: "from-purple-500/20 to-purple-600/10", icon: "bg-purple-600", ring: "hover:ring-purple-500/30", dot: "bg-purple-500", badge: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300" },
  amber: { bg: "from-amber-500/20 to-amber-600/10", icon: "bg-amber-600", ring: "hover:ring-amber-500/30", dot: "bg-amber-500", badge: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300" },
  yellow: { bg: "from-yellow-500/20 to-yellow-600/10", icon: "bg-yellow-600", ring: "hover:ring-yellow-500/30", dot: "bg-yellow-500", badge: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300" },
  green: { bg: "from-green-500/20 to-green-600/10", icon: "bg-green-600", ring: "hover:ring-green-500/30", dot: "bg-green-500", badge: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300" },
  red: { bg: "from-red-500/20 to-red-600/10", icon: "bg-red-600", ring: "hover:ring-red-500/30", dot: "bg-red-500", badge: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300" },
}

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-4 relative z-10 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-secondary mb-2 tracking-widest uppercase">
            ~/services
          </p>
          <h2 className="section-title mb-4">My Services</h2>
          <div className="accent-line mb-6"></div>
          <p className="section-subtitle">
            From frontend to backend, hardware to cloud. I build complete systems that work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const colors = colorMap[service.color]
            const Icon = service.icon

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className={`h-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden hover:ring-2 ${colors.ring} relative`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                  <div className="relative z-10 p-6 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl ${colors.icon} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${colors.badge}`}>
                        {service.subtitle}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed flex-1">
                      {service.description}
                    </p>

                    <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent mb-4" />

                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`}></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm">Need a custom solution? Let&apos;s talk.</p>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="mt-3 px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Get in touch
          </button>
        </motion.div>
      </div>
    </section>
  )
}