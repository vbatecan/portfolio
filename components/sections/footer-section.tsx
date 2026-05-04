"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, Heart, Terminal } from "lucide-react"

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
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <Terminal className="h-5 w-5 text-primary" />
            <span className="font-mono text-sm">
              vbatecan<span className="text-primary">.dev</span>
            </span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-3"
          >
            <a
              href="https://github.com/vbatecan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/vince-batecan/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:vbatecan@gmail.com"
              className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 font-mono text-xs text-gray-400"
          >
            <span>{currentYear}</span>
            <span>·</span>
            <span>Built with</span>
            <Heart className="h-3 w-3 text-red-500" />
            <span>and Java</span>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}