"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Server, Shield, Cloud, Zap, Database, Globe, Lock } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Full-Stack Web Development",
    tagline: "Java Spring Boot + Angular",
    description:
      "End-to-end web application development with enterprise-grade Spring Boot backends and responsive Angular frontends. Clean architecture, dependency injection, and production-ready code.",
    features: [
      "REST API design & implementation",
      "JWT / OAuth2 authentication",
      "WebSocket real-time features",
      "PostgreSQL / MySQL database design",
      "CI/CD pipeline setup",
    ],
    color: "blue",
  },
  {
    icon: Server,
    title: "API Development & Integration",
    tagline: "Secure & Scalable Services",
    description:
      "Design and build robust RESTful and GraphQL APIs with proper versioning, documentation, and rate limiting. Integrate third-party services and payment gateways.",
    features: [
      "Spring Security & CORS hardening",
      "API versioning strategies",
      "Rate limiting & request throttling",
      "Third-party API integrations",
      "Automated API documentation (OpenAPI)",
    ],
    color: "green",
  },
  {
    icon: Shield,
    title: "Security Audits & Hardening",
    tagline: "Pentesting & Code Review",
    description:
      "Identify vulnerabilities in web applications and APIs through penetration testing and code review. Specializing in OWASP Top 10, authentication flaws, and injection attacks.",
    features: [
      "OWASP Top 10 vulnerability assessment",
      "Authentication & authorization review",
      "SQL Injection & XSS testing",
      "JWT token security analysis",
      "Security hardening for Spring Boot apps",
    ],
    color: "red",
  },
  {
    icon: Cloud,
    title: "DevOps & Containerization",
    tagline: "Docker + Cloud Deployment",
    description:
      "Containerize applications with Docker, set up CI/CD pipelines, and deploy to cloud platforms. Automation scripts, environment configuration, and monitoring.",
    features: [
      "Docker image optimization",
      "Docker Compose multi-service setups",
      "GitHub Actions CI/CD workflows",
      "Cloud deployment (VPS, Fly.io, Render)",
      "Environment & secrets management",
    ],
    color: "purple",
  },
  {
    icon: Database,
    title: "Database Design & Optimization",
    tagline: "SQL + NoSQL Solutions",
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
    tagline: "Fast & Reliable Systems",
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
]

const colorMap: Record<string, { bg: string; ring: string; badge: string; icon: string; gradient: string }> = {
  blue: {
    bg: "bg-blue-500/10 hover:bg-blue-500/20",
    ring: "hover:ring-blue-500/30",
    badge: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
    icon: "bg-blue-600",
    gradient: "from-blue-500/20 to-transparent",
  },
  green: {
    bg: "bg-green-500/10 hover:bg-green-500/20",
    ring: "hover:ring-green-500/30",
    badge: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
    icon: "bg-green-600",
    gradient: "from-green-500/20 to-transparent",
  },
  red: {
    bg: "bg-red-500/10 hover:bg-red-500/20",
    ring: "hover:ring-red-500/30",
    badge: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300",
    icon: "bg-red-600",
    gradient: "from-red-500/20 to-transparent",
  },
  purple: {
    bg: "bg-purple-500/10 hover:bg-purple-500/20",
    ring: "hover:ring-purple-500/30",
    badge: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
    icon: "bg-purple-600",
    gradient: "from-purple-500/20 to-transparent",
  },
  amber: {
    bg: "bg-amber-500/10 hover:bg-amber-500/20",
    ring: "hover:ring-amber-500/30",
    badge: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300",
    icon: "bg-amber-600",
    gradient: "from-amber-500/20 to-transparent",
  },
  yellow: {
    bg: "bg-yellow-500/10 hover:bg-yellow-500/20",
    ring: "hover:ring-yellow-500/30",
    badge: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300",
    icon: "bg-yellow-600",
    gradient: "from-yellow-500/20 to-transparent",
  },
}

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl md:text-6xl font-bold mb-6 text-primary"
            data-magnetic
          >
            My Services
          </h2>
          <div className="w-32 h-1 bg-primary mx-auto mb-8 rounded-full" />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional development services — from full-stack web apps to security audits and DevOps.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colors = colorMap[service.color]
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 80 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                <Card
                  className={`h-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden hover:ring-2 ${colors.ring} group relative`}
                >
                  {/* Color accent bar */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                  <CardContent className="relative z-10 p-6 flex flex-col h-full">
                    {/* Icon + Badge */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl ${colors.icon} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${colors.badge}`}>
                        {service.tagline}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed flex-1">
                      {service.description}
                    </p>

                    {/* Divider */}
                    <div className={`h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent mb-4`} />

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className={`w-1.5 h-1.5 rounded-full ${colors.icon.replace('bg-', 'bg-').replace('-600', '-500')}`} />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Need a custom solution? Let's talk.
          </p>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="mt-3 px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
            data-magnetic
          >
            Get in touch
          </button>
        </motion.div>
      </div>
    </section>
  )
}