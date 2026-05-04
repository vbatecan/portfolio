"use client"

import { motion } from "framer-motion"
import { MapPin, Mail, Github, Linkedin, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 relative z-10 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-secondary mb-2 tracking-widest uppercase">
            <Terminal className="inline h-4 w-4 mr-2" />
            cat about.md
          </p>
          <h2 className="section-title mb-4">The Short Version</h2>
          <div className="accent-line"></div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Image - takes 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl overflow-hidden">
                <img
                  src="/assets/2.jpg?height=500&width=500"
                  alt="Vince Angelo Batecan"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating terminal decoration */}
              <motion.div
                className="absolute -bottom-4 -right-4 bg-gray-900 text-gray-300 rounded-xl p-4 font-mono text-xs shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-green-400">$ whoami</div>
                <div>vince-batecan</div>
                <div className="text-gray-500 mt-1">// UE IT Student</div>
                <div className="text-gray-500">// Full-Stack Dev</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content - takes 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <span className="text-primary font-semibold">Java backend developer</span> at heart. 
                I build REST APIs with Spring Boot, integrate hardware with ESP32, and occasionally 
                whip up an Angular frontend when needed.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Currently studying IT at UE Caloocan while working on side projects. 
                Started coding around 11, got serious about cybersecurity at 15 (TryHackMe top 2%), 
                and shifted toward building products that actually ship.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I care about <span className="font-semibold">clean code, security-first design, 
                and systems that work in the real world</span> — not just tutorials.
              </p>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MapPin className="h-4 w-4 text-primary icon-monochrome" />
                </div>
                <div>
                  <div className="font-mono text-xs text-secondary">Location</div>
                  <div className="text-sm font-medium">Valenzuela, PH</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Mail className="h-4 w-4 text-primary icon-monochrome" />
                </div>
                <div>
                  <div className="font-mono text-xs text-secondary">Email</div>
                  <div className="text-sm font-medium">vbatecan@gmail.com</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3 pt-4">
              <Button
                variant="outline"
                size="sm"
                className="font-mono rounded-lg"
                onClick={() => window.open("https://github.com/vbatecan", "_blank")}
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="font-mono rounded-lg"
                onClick={() => window.open("https://www.linkedin.com/in/vince-batecan/", "_blank")}
              >
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}