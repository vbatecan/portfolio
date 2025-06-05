"use client"

import { motion } from "framer-motion"
import { ChevronDown, Zap } from "lucide-react"
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
          {/* Animated background text */}
          <motion.div
            className="absolute inset-0 text-8xl md:text-9xl font-black text-gray-100 dark:text-gray-800 opacity-20 select-none"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
          >
            DEVELOPER
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 relative z-10">
            <motion.span
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              Vince Angelo
            </motion.span>
            <br />
            <motion.span
              className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              Batecan
            </motion.span>
          </h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Crafting the future with{" "}
            <motion.span
              className="text-blue-600 dark:text-blue-400 font-semibold"
              animate={{ color: ["#2563eb", "#7c3aed", "#db2777", "#2563eb"] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              code
            </motion.span>
            ,{" "}
            <motion.span
              className="text-purple-600 dark:text-purple-400 font-semibold"
              animate={{ color: ["#7c3aed", "#db2777", "#2563eb", "#7c3aed"] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
            >
              creativity
            </motion.span>
            , and{" "}
            <motion.span
              className="text-pink-600 dark:text-pink-400 font-semibold"
              animate={{ color: ["#db2777", "#2563eb", "#7c3aed", "#db2777"] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
            >
              innovation
            </motion.span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Zap className="mr-2 h-5 w-5" />
                Explore Work
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 text-lg border-2 rounded-full hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-800 dark:hover:to-gray-700 transition-all duration-300"
              >
                Let's Connect
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
