"use client"

import { useState, useEffect } from "react"
import { EnvelopeIcon, HeartIcon, CommandLineIcon } from "@heroicons/react/24/outline"
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons"

interface FooterSectionProps {
  scrollToSection?: (sectionId: string) => void
}

export const FooterSection = ({ scrollToSection }: FooterSectionProps) => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="py-12 px-4 bg-gray-900 text-white relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo / Name */}
          <div className="flex items-center gap-2">
            <CommandLineIcon className="h-5 w-5 text-primary" />
            <span className="font-mono text-sm">
              vbatecan<span className="text-primary">.dev</span>
            </span>
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
            <a
              href="https://github.com/vbatecan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/vince-batecan/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href="mailto:vbatecan@gmail.com"
              className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              aria-label="Email"
            >
              <EnvelopeIcon className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 font-mono text-xs text-gray-400">
            <span>All rights reserved.</span>
            <span>© </span>
            <span>{currentYear}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}