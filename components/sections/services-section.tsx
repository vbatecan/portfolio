"use client"

import { Card } from "@/components/ui/card"
import { TechIcon } from "@/components/ui/tech-icon"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards, Navigation, Pagination } from "swiper/modules"
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-cards"
import "swiper/css/navigation"
import "swiper/css/pagination"

const services = [
  {
    title: "Full-Stack Web Development",
    subtitle: "Web, Mobile & SaaS Applications",
    description:
      "Build responsive, scalable web applications with modern frameworks. From landing pages to complex dashboards, I deliver clean code that scales.",
    technologies: [
      { name: "Next.js" },
      { name: "React" },
      { name: "Angular" },
      { name: "TypeScript" },
      { name: "HTML5" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend APIs & Microservices",
    subtitle: "REST APIs, GraphQL & Server Architecture",
    description:
      "Design and implement robust backend systems that handle high traffic and complex business logic. Focus on security, scalability, and maintainability.",
    technologies: [
      { name: "Spring Boot" },
      { name: "Quarkus" },
      { name: "Flask" },
      { name: "Java" },
      { name: "Python" },
      { name: "GraphQL" },
    ],
  },
  {
    title: "Database Design & Optimization",
    subtitle: "SQL + NoSQL Solutions",
    description:
      "Design efficient database schemas, write complex queries, optimize slow queries, and implement caching strategies for high-performance applications.",
    technologies: [
      { name: "PostgreSQL" },
      { name: "Redis" },
      { name: "MongoDB" },
      { name: "MySQL" },
      { name: "SQLite" },
    ],
  },
  {
    title: "Performance & Monitoring",
    subtitle: "Fast & Reliable Systems",
    description:
      "Audit application performance, identify bottlenecks, and implement optimizations. Set up logging, monitoring, and alerting for production systems.",
    technologies: [
      { name: "Lighthouse" },
      { name: "Vite" },
      { name: "Webpack" },
      { name: "Grafana" },
      { name: "Prometheus" },
    ],
  },
  {
    title: "IoT & Hardware Integration",
    subtitle: "Embedded Systems & Device Control",
    description:
      "Bring your hardware ideas to life. From ESP32 projects to custom sensors, I create systems that bridge the physical and digital worlds.",
    technologies: [
      { name: "ESP32" },
      { name: "Arduino" },
      { name: "Raspberry Pi" },
      { name: "C++" },
      { name: "MQTT" },
    ],
  },
  {
    title: "Security & DevOps",
    subtitle: "Secure Deployments & CI/CD",
    description:
      "Implement security best practices and automate deployments. Set up continuous integration pipelines that make releases reliable and stress-free.",
    technologies: [
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "AWS" },
      { name: "GCP" },
      { name: "GitHub Actions" },
    ],
  },
]

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-4 relative z-10 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading, description, and navigation */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="font-mono text-sm text-secondary mb-2 tracking-widest uppercase text-primary/70">
                ~/services
              </p>
              <h2 className="section-title mb-4">My Services</h2>
              <div className="accent-line mb-6"></div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base md:text-lg">
              I build complete, secure, and highly optimized digital systems. Drag or swipe the cards to explore my capabilities across full-stack development, embedded hardware IoT, database engineering, and microservices.
            </p>

            {/* Custom Navigation & Pagination */}
            <div className="flex items-center gap-4 pt-4">
              <button 
                className="swiper-button-prev-custom p-3 rounded-full border border-gray-200 dark:border-gray-800 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all text-gray-800 dark:text-gray-200 shadow-sm active:scale-95 disabled:opacity-40 disabled:pointer-events-none"
                aria-label="Previous service"
              >
                <ArrowLeftIcon className="h-5 w-5" />
              </button>
              <button 
                className="swiper-button-next-custom p-3 rounded-full border border-gray-200 dark:border-gray-800 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all text-gray-800 dark:text-gray-200 shadow-sm active:scale-95 disabled:opacity-40 disabled:pointer-events-none"
                aria-label="Next service"
              >
                <ArrowRightIcon className="h-5 w-5" />
              </button>
              <div className="swiper-pagination-custom font-mono text-sm text-secondary font-medium ml-2"></div>
            </div>

            {/* CTA Option */}
            <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
              <p className="text-gray-500 dark:text-gray-400 text-sm">Need a custom end-to-end integration?</p>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView()}
                className="mt-3 px-6 py-2.5 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity text-sm font-mono shadow-md hover:shadow-lg"
              >
                contact.init()
              </button>
            </div>
          </div>

          {/* Right Column: Stacked Cards Deck */}
          <div className="lg:col-span-7 flex justify-center w-full overflow-hidden py-8 px-4">
            <div className="w-full max-w-[450px]">
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards, Navigation, Pagination]}
                navigation={{
                  nextEl: ".swiper-button-next-custom",
                  prevEl: ".swiper-button-prev-custom",
                }}
                pagination={{
                  el: ".swiper-pagination-custom",
                  type: "fraction",
                }}
                cardsEffect={{
                  slideShadows: false,
                  rotate: true,
                  perSlideRotate: 3,
                  perSlideOffset: 10,
                }}
                className="services-swiper"
              >
                {services.map((service, index) => (
                  <SwiperSlide key={service.title} className="h-full">
                    <Card className="h-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border border-gray-200 dark:border-gray-800 shadow-2xl rounded-3xl p-8 flex flex-col justify-between min-h-[480px] transition-all duration-300">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 tracking-wide uppercase">
                            {service.subtitle}
                          </span>
                          <span className="font-mono text-xs text-secondary/60">
                            [0{index + 1} / 0{services.length}]
                          </span>
                        </div>

                        <h3 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight leading-none pt-2">
                          {service.title}
                        </h3>

                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed pt-2">
                          {service.description}
                        </p>
                      </div>

                      <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-800">
                        <p className="text-[10px] font-mono font-bold tracking-widest text-secondary/50 uppercase mb-3">
                          // Tech Stack
                        </p>
                        <div className="grid grid-cols-3 gap-3">
                          {service.technologies.map((tech) => (
                            <div
                              key={tech.name}
                              className="group/tech flex flex-col items-center justify-center p-2.5 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/40 hover:bg-white dark:hover:bg-gray-800 hover:border-primary/20 dark:hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                            >
                              <div className="w-6 h-6 mb-1.5 transition-transform duration-300 group-hover/tech:scale-110">
                                <TechIcon name={tech.name} />
                              </div>
                              <span className="text-[10px] font-mono font-semibold text-gray-500 dark:text-gray-400 group-hover/tech:text-primary transition-colors text-center leading-tight truncate w-full px-0.5">
                                {tech.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
