"use client"

import { Card } from "@/components/ui/card"
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
    features: [
      "Next.js, React, Angular, TypeScript",
      "Responsive & accessible UIs",
      "Full-stack SaaS applications",
      "API integrations & third-party services",
      "Progressive Web Apps (PWA)",
    ],
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
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
                    <Card className="h-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border border-gray-200 dark:border-gray-800 shadow-2xl rounded-3xl p-8 flex flex-col justify-between min-h-[430px] transition-all duration-300">
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

                      <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
                        <ul className="grid grid-cols-1 gap-2.5">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary/40 dark:bg-primary/60 flex-shrink-0" />
                              <span className="leading-snug">{feature}</span>
                            </li>
                          ))}
                        </ul>
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