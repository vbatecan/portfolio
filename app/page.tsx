"use client"

import { useState, useEffect } from "react"

import { FloatingShapes } from "@/components/background/floating-shapes"
import { ParticleSystem } from "@/components/background/particle-system"

import { Navbar } from "@/components/navigation/navbar"
import { MobileNav } from "@/components/navigation/mobile-nav"

import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { StatsSection } from "@/components/sections/stats-section"
import { CertificatesSection } from "@/components/sections/certificates-section"
import { ContactSection } from "@/components/sections/contact-section"
import { FooterSection } from "@/components/sections/footer-section"
import { ChatInterface } from "@/components/chat/chat-interface"

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
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white relative overflow-hidden">
        {/* Background Effects */}
        <FloatingShapes />
        <ParticleSystem />

        {/* Navigation */}
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} scrollToSection={scrollToSection} />

        {/* Chat Interface */}
        <ChatInterface />

        {/* All Sections */}
        <HeroSection scrollToSection={scrollToSection} />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <StatsSection />
        <CertificatesSection />
        <ContactSection />
        <FooterSection scrollToSection={scrollToSection} />

        {/* Mobile Bottom Navigation */}
        <MobileNav darkMode={darkMode} toggleDarkMode={toggleDarkMode} scrollToSection={scrollToSection} />
      </div>
    </div>
  )
}