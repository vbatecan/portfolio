"use client"

import { motion } from "framer-motion"
import { MapPin, Mail, Github, Linkedin, Globe, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            data-magnetic
          >
            About Me
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
            data-magnetic
          >
            <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 overflow-hidden">
              <motion.div
                className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full opacity-20"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Profile"
                className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl relative z-10"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl border border-blue-200 dark:border-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Core Specialization</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm a software developer specializing in <strong>Java and relational databases</strong>, with a focus on
                building secure, scalable RESTful APIs using <strong>Spring Boot and Quarkus</strong>. I have experience
                implementing authentication systems, including <strong>JWT-based security and OAuth2</strong>, to
                protect application data.
              </p>
            </motion.div>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Beyond backend development, I create dynamic, responsive user interfaces with <strong>Angular</strong>,
              seamlessly integrating frontends with API backends for complete full-stack solutions. My work emphasizes{" "}
              <strong>clean architecture, maintainable code, and security best practices</strong> — delivering projects
              that are both reliable and maintainable.
            </motion.p>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              When I'm not architecting secure APIs or crafting intuitive interfaces, you'll find me exploring the
              frontiers of AI/ML, contributing to open-source projects, or mentoring the next generation of developers.
              I believe in code that not only works but inspires.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-6 pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <span>Philippines</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg">
                    <Mail className="h-4 w-4 text-white" />
                  </div>
                  <span>vince@example.com</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                    <Globe className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">Languages</div>
                    <div className="text-sm">English (Professional)</div>
                    <div className="text-sm">Filipino (Native)</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-4 pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} data-magnetic>
                <Button variant="outline" size="sm" className="rounded-full">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} data-magnetic>
                <Button variant="outline" size="sm" className="rounded-full">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
