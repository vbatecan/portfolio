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
import styles from "./page.module.css"

export default function Portfolio() {
  return (
    <div className="relative overflow-hidden bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <FloatingShapes />
      <ParticleSystem />
      <main className={styles.sections}>
        <IntroSection />
        <ServicesSection />
        <ProjectsSection />
        <SkillsSection />
        <StatsSection />
        <CertificatesSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  )
}
