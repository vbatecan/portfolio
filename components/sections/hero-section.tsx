"use client"

import { motion } from "framer-motion"
import { ChevronDown, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
}

export const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Terminal-style decoration */}
          <motion.div
            className="absolute -left-4 md:-left-16 top-1/4 text-left hidden md:block"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 0.6, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="font-mono text-xs text-gray-400 dark:text-gray-600">
              <div>{'{ '}</div>
              <div className="pl-4">"role": "full-stack dev",</div>
              <div className="pl-4">"stack": ["Java", "Angular", "ESP32"],</div>
              <div className="pl-4">"focus": "backend & IoT"</div>
              <div>{' }'}</div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -right-4 md:-right-16 top-1/3 text-right hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 0.6, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <div className="font-mono text-xs text-gray-400 dark:text-gray-600">
              <div>{'// UE IT Student'}</div>
              <div>{'// TryHackMe: Top 2%'}</div>
              <div>{'// Building real tools'}</div>
            </div>
          </motion.div>

          <motion.p
            className="text-sm font-mono text-primary mb-4 tracking-widest uppercase"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary">$</span> whoami
          </motion.p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 relative z-10">
            <motion.span
              className="text-foreground dark:text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Vince Angelo
            </motion.span>
            <br />
            <motion.span
              className="text-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Batecan
            </motion.span>
          </h1>

          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-4 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Full-stack Developer building scalable Java backends and hardware-integrated systems
          </motion.p>

          <motion.div
            className="font-mono text-sm text-gray-500 dark:text-gray-500 mb-8 flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">Java Spring Boot</span>
            <span className="text-secondary">|</span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">Angular</span>
            <span className="text-secondary">|</span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">ESP32/Arduino</span>
            <span className="text-secondary">|</span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">AI/ML</span>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Terminal className="mr-2 h-5 w-5" />
                View Projects
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 text-lg border-2 rounded-full hover:bg-muted transition-all duration-300"
              >
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20"
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
            <ChevronDown className="h-8 w-8 mx-auto text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}