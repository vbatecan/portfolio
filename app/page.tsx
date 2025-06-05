"use client"

import { useState, useEffect, lazy } from "react"

// Background Components (lightweight, always loaded)
import { FloatingShapes } from "@/components/background/floating-shapes"
import { ParticleSystem } from "@/components/background/particle-system"

// Navigation (critical, always loaded)
import { Navbar } from "@/components/navigation/navbar"

// Preloading Components
import { PreloadManager } from "@/components/preloading/preload-manager"
import { LazySection } from "@/components/preloading/lazy-section"
import { ResourcePreloader } from "@/components/preloading/resource-preloader"

// Critical components (loaded immediately)
import { HeroSection } from "@/components/sections/hero-section"
import { ChatInterface } from "@/components/chat/chat-interface"

// Lazy load components
const AboutSection = lazy(() =>
  import("@/components/sections/about-section").then((mod) => ({ default: mod.AboutSection })),
)
const ProjectsSection = lazy(() =>
  import("@/components/sections/projects-section").then((mod) => ({ default: mod.ProjectsSection })),
)
const SkillsSection = lazy(() =>
  import("@/components/sections/skills-section").then((mod) => ({ default: mod.SkillsSection })),
)
const StatsSection = lazy(() =>
  import("@/components/sections/stats-section").then((mod) => ({ default: mod.StatsSection })),
)
const CertificatesSection = lazy(() =>
  import("@/components/sections/certificates-section").then((mod) => ({ default: mod.CertificatesSection })),
)
const ContactSection = lazy(() =>
  import("@/components/sections/contact-section").then((mod) => ({ default: mod.ContactSection })),
)
const FooterSection = lazy(() =>
  import("@/components/sections/footer-section").then((mod) => ({ default: mod.FooterSection })),
)

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <PreloadManager>
      <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white relative overflow-hidden">
          {/* Resource Preloader */}
          <ResourcePreloader
            images={[
              "/placeholder.svg?height=400&width=400",
              "/placeholder.svg?height=200&width=300",
              "/placeholder.svg?height=100&width=100",
            ]}
            priority="high"
          />

          {/* Background Effects (lightweight) */}
          <FloatingShapes />
          <ParticleSystem />

          {/* Navigation - Critical, always loaded */}
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} scrollToSection={scrollToSection} />

          {/* Chat Interface */}
          <ChatInterface />

          {/* Hero Section - Critical, loaded immediately */}
          <HeroSection scrollToSection={scrollToSection} />

          {/* About Section - High priority */}
          <LazySection sectionName="about" component={AboutSection} priority="high" preloadOffset="400px" />

          {/* Projects Section - High priority */}
          <LazySection sectionName="projects" component={ProjectsSection} priority="high" preloadOffset="400px" />

          {/* Skills Section - Medium priority */}
          <LazySection sectionName="skills" component={SkillsSection} priority="medium" preloadOffset="300px" />

          {/* Stats Section - Medium priority */}
          <LazySection sectionName="stats" component={StatsSection} priority="medium" preloadOffset="300px" />

          {/* Certificates Section - Low priority */}
          <LazySection
            sectionName="certificates"
            component={CertificatesSection}
            priority="low"
            preloadOffset="200px"
          />

          {/* Contact Section - Low priority */}
          <LazySection sectionName="contact" component={ContactSection} priority="low" preloadOffset="200px" />

          {/* Footer Section - Low priority */}
          <LazySection
            sectionName="footer"
            component={FooterSection}
            priority="low"
            preloadOffset="100px"
            scrollToSection={scrollToSection}
          />
        </div>
      </div>
    </PreloadManager>
  )
}
