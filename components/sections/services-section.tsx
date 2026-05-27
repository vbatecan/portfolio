"use client"

import { GlobeAltIcon, ServerIcon, CircleStackIcon, BoltIcon, CpuChipIcon, ShieldCheckIcon } from "@heroicons/react/24/outline"
import { Card } from "@/components/ui/card"

const services = [
  {
    icon: GlobeAltIcon,
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
    icon: ServerIcon,
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
    icon: CircleStackIcon,
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
    icon: BoltIcon,
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
    icon: CpuChipIcon,
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
    icon: ShieldCheckIcon,
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

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-4 relative z-10 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="font-mono text-sm text-secondary mb-2 tracking-widest uppercase">
            ~/services
          </p>
          <h2 className="section-title mb-4">My Services</h2>
          <div className="accent-line mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <div key={service.title} className="group">
                <Card className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm rounded-xl overflow-hidden relative">
                  <div className="relative z-10 p-6 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-2.5 border border-gray-200 dark:border-gray-800 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                        {service.subtitle}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                      {service.title}
                    </h3>

                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed flex-1">
                      {service.description}
                    </p>

                    <div className="h-px bg-gray-200 dark:bg-gray-800 mb-4" />

                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-500 dark:text-gray-400 text-sm">Need a custom solution? Let&apos;s talk.</p>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="mt-3 px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Get in touch
          </button>
        </div>
      </div>
    </section>
  )
}