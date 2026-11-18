"use client"

import { Card } from "@/components/ui/card"
import { TechIcon } from "@/components/ui/tech-icon"
import { getHomeChapterProgress, goToChapterProgress, type HomeChapterProgress } from "@/lib/home-chapter"
import {
  ArrowLeftIcon, ArrowRightIcon, BoltIcon, CircleStackIcon, CodeBracketSquareIcon,
  CpuChipIcon, ServerStackIcon, ShieldCheckIcon,
} from "@heroicons/react/24/outline"
import { useEffect, useRef, useState, type CSSProperties } from "react"
import styles from "./services-section.module.css"

const services = [
  {
    title: "Full-Stack Web Development",
    icon: CodeBracketSquareIcon,
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
    icon: ServerStackIcon,
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
    icon: CircleStackIcon,
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
    icon: BoltIcon,
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
    icon: CpuChipIcon,
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
    icon: ShieldCheckIcon,
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

const spreadEnd = 0.14
const lastStop = 0.94
const lastIndex = services.length - 1
const fan = [
  [0, 0, 0, 1],
  [27, -22, -6, 0.95],
  [53, 22, 8, 0.9],
  [78, -38, -10, 0.85],
  [108, 34, 12, 0.8],
  [144, -44, -13, 0.75],
] as const

const clamp = (value: number) => Math.max(0, Math.min(1, value))
const mix = (from: number, to: number, progress: number) => from + (to - from) * progress

export function ServicesSection() {
  const viewportRef = useRef<HTMLDivElement>(null)
  const railRef = useRef<HTMLOListElement>(null)
  const selectService = useRef<(index: number) => void>(() => {})
  const [active, setActive] = useState(0)
  const [enhanced, setEnhanced] = useState(false)
  const [pinned, setPinned] = useState(false)

  useEffect(() => {
    const viewport = viewportRef.current
    const rail = railRef.current
    const chapter = viewport?.closest<HTMLElement>("#services")
    if (!viewport || !rail || !chapter) return

    const cards = Array.from(rail.children) as HTMLElement[]
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    let chapterProgress = 0
    let isPinned = chapter.hasAttribute("data-story-pinned")
    let isVisible = false
    let spacing = 0
    let selected = 0
    let drawnProgress = -1

    const updateActive = (index: number) => {
      if (index === selected) return
      selected = index
      setActive(index)
    }

    const draw = () => {
      if (!isPinned || !isVisible || !spacing || chapterProgress === drawnProgress) return
      drawnProgress = chapterProgress
      const spread = clamp(chapterProgress / spreadEnd)
      const spreadEase = spread * spread * (3 - 2 * spread)
      const position = clamp((chapterProgress - spreadEnd) / (lastStop - spreadEnd)) * lastIndex
      rail.style.transform = `translate3d(${-position * spacing}px, 0, 0)`
      cards.forEach((card, index) => {
        const [fanX, fanY, fanTilt, fanScale] = fan[index]
        const offset = index - position
        const distance = Math.min(1, Math.abs(offset))
        const x = mix(fanX - index * spacing, 0, spreadEase)
        const y = mix(fanY, distance * 16, spreadEase)
        const tilt = mix(fanTilt, Math.sign(offset) * distance * 5, spreadEase)
        const scale = mix(fanScale, 1 - distance * 0.06, spreadEase)
        card.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${tilt}deg) scale(${scale})`
      })
      updateActive(Math.round(position))
    }

    const syncNativeScroll = () => {
      if (isPinned || !spacing) return
      updateActive(Math.min(lastIndex, Math.round(viewport.scrollLeft / spacing)))
    }

    const syncChapter = ({ progress, pinned, visible }: HomeChapterProgress) => {
      chapterProgress = progress
      isVisible = visible

      if (pinned !== isPinned) {
        isPinned = pinned
        setPinned(pinned)
        if (pinned) {
          viewport.scrollLeft = 0
          drawnProgress = -1
        } else {
          rail.style.removeProperty("transform")
          cards.forEach((card) => card.style.removeProperty("transform"))
          viewport.scrollLeft = selected * spacing
        }
      }
      draw()
    }

    const onChapterProgress = (event: Event) => {
      syncChapter((event as CustomEvent<HomeChapterProgress>).detail)
    }

    const measure = () => {
      spacing = cards[1].offsetLeft - cards[0].offsetLeft
      drawnProgress = -1
      if (isPinned) draw()
      else syncNativeScroll()
    }

    selectService.current = (index) => {
      if (index < 0 || index > lastIndex) return
      if (isPinned) {
        goToChapterProgress(chapter, mix(spreadEnd, lastStop, index / lastIndex))
      } else {
        viewport.scrollTo({ left: index * spacing, behavior: reducedMotion.matches ? "instant" : "smooth" })
      }
    }

    const resize = typeof ResizeObserver === "function" ? new ResizeObserver(measure) : undefined
    if (resize) resize.observe(viewport)
    else window.addEventListener("resize", measure)
    chapter.addEventListener("homechapterprogress", onChapterProgress)
    viewport.addEventListener("scroll", syncNativeScroll, { passive: true })
    setEnhanced(true)
    setPinned(isPinned)
    const initialProgress = getHomeChapterProgress(chapter)
    if (initialProgress) syncChapter(initialProgress)
    measure()

    return () => {
      resize?.disconnect()
      window.removeEventListener("resize", measure)
      chapter.removeEventListener("homechapterprogress", onChapterProgress)
      viewport.removeEventListener("scroll", syncNativeScroll)
    }
  }, [])

  return (
    <section className={`${styles.section} relative z-10 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800`} aria-labelledby="services-title">
      <div className={`${styles.layout} mx-auto max-w-7xl`}>
        <div className={styles.editorial}>
          <h2 className="section-title" id="services-title">From Apps to Hardware</h2>
          <div className="accent-line" />
          <div className={styles.narration}>
            <p className={styles.intro}>
              I build web applications, APIs, and secure systems that connect software to hardware.
            </p>
            {services.map((service, index) => (
              <div key={service.title} className={styles.narrationStep} data-active={index === active}>
                <p className="text-xl font-bold text-foreground">{service.title}</p>
                <p className="mt-2 leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
          <div className={styles.controls} data-enhanced={enhanced}>
            <button type="button" className={styles.arrow} disabled={active === 0} onClick={() => selectService.current(active - 1)} aria-label="Previous service">
              <ArrowLeftIcon aria-hidden="true" className="size-5" />
            </button>
            <button type="button" className={styles.arrow} disabled={active === lastIndex} onClick={() => selectService.current(active + 1)} aria-label="Next service">
              <ArrowRightIcon aria-hidden="true" className="size-5" />
            </button>
            <span aria-label={`Service ${active + 1} of ${services.length}`} className="ml-2 font-mono text-sm text-muted-foreground">
              {active + 1} / {services.length}
            </span>
          </div>
          <a href="#contact" className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90">
            Get in touch <ArrowRightIcon aria-hidden="true" className="size-4" />
          </a>
        </div>
        <div ref={viewportRef} className={styles.viewport} role="region" tabIndex={pinned ? -1 : 0} aria-label="Service cards">
          <ol ref={railRef} className={styles.rail}>
            {services.map(({ icon: Icon, ...service }, index) => (
              <li
                key={service.title}
                className={styles.slide}
                style={{ "--stack-order": services.length - index } as CSSProperties}
                aria-current={index === active ? "true" : undefined}
                data-service-card
              >
                <Card className={styles.card}>
                  <div>
                    <Icon aria-hidden="true" className="mb-5 size-9 text-muted-foreground" />
                    <p className="mb-2 font-mono text-xs text-muted-foreground">{service.subtitle}</p>
                    <h3 className="text-2xl font-black leading-tight tracking-tight">{service.title}</h3>
                    <p className={`${styles.cardDescription} mt-3 text-sm leading-relaxed text-muted-foreground`}>{service.description}</p>
                  </div>
                  <ul className={styles.techList} aria-label="Technologies">
                    {service.technologies.map((tech) => (
                      <li key={tech.name} className={styles.tech}>
                        <TechIcon name={tech.name} className="size-5 shrink-0" />
                        <span>{tech.name}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
