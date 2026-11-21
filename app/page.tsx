import { FloatingShapes } from "@/components/background/floating-shapes"
import { ParticleSystem } from "@/components/background/particle-system"
import { IntroSection } from "@/components/sections/intro-section"
import { ServicesSection } from "@/components/sections/services-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { StatsSection } from "@/components/sections/stats-section"
import { CertificatesSection } from "@/components/sections/certificates-section"
import { ContactSection } from "@/components/sections/contact-section"
import { FooterSection } from "@/components/sections/footer-section"
import { HomeStory } from "@/components/sections/home-story"
import styles from "./page.module.css"

const chapters = [
  { id: "home", Section: IntroSection, independent: true },
  { id: "services", Section: ServicesSection, sequence: true },
  { id: "projects", Section: ProjectsSection, independent: true },
  { id: "skills", Section: SkillsSection, independent: true },
  { id: "stats", Section: StatsSection, independent: true },
  { id: "certificates", Section: CertificatesSection, sequence: true },
  { id: "contact", Section: ContactSection },
]

export default function Portfolio() {
  return (
    <div className="relative overflow-clip bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <FloatingShapes />
      <ParticleSystem />
      <main className={styles.sections} data-portfolio-story>
        <HomeStory />
        {chapters.map(({ id, Section, sequence, independent }) => (
          <div key={id} id={id} tabIndex={-1} className={styles.chapter} data-story-chapter={id}
            data-story-sequence={sequence ? "" : undefined} data-story-independent={independent ? "" : undefined}>
            <Section />
          </div>
        ))}
      </main>
      <FooterSection />
    </div>
  )
}
