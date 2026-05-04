"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart3 } from "lucide-react"

export const StatsSection = () => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [cacheBust, setCacheBust] = useState('')

  useEffect(() => {
    setMounted(true)
    setCacheBust(Date.now().toString())
  }, [])

  const isDark = mounted ? theme === "dark" : false

  const getImageUrl = (baseUrl: string) => {
    return `${baseUrl}&cache=${cacheBust}`
  }

  const statsConfig = {
    github: {
      light: "https://github-readme-stats.vercel.app/api?username=vbatecan&show_icons=true&hide_border=true&bg_color=FFFFFF&title_color=2563eb&icon_color=2563eb&text_color=1e293b",
      dark: "https://github-readme-stats.vercel.app/api?username=vbatecan&show_icons=true&hide_border=true&bg_color=0f172a&title_color=3b82f6&icon_color=3b82f6&text_color=f8fafc"
    },
    streak: {
      light: "https://github-readme-streak-stats.herokuapp.com/?user=vbatecan&hide_border=true&background=FFFFFF&stroke=2563eb&ring=2563eb&fire=2563eb&currStreakLabel=2563eb&sideNums=1e293b&sideLabels=1e293b&dates=1e293b",
      dark: "https://github-readme-streak-stats.herokuapp.com/?user=vbatecan&hide_border=true&background=0f172a&stroke=3b82f6&ring=3b82f6&fire=3b82f6&currStreakLabel=3b82f6&sideNums=f8fafc&sideLabels=f8fafc&dates=f8fafc"
    },
    languages: {
      light: "https://github-readme-stats.vercel.app/api/top-langs/?username=vbatecan&layout=compact&hide_border=true&bg_color=FFFFFF&title_color=2563eb&text_color=1e293b",
      dark: "https://github-readme-stats.vercel.app/api/top-langs/?username=vbatecan&layout=compact&hide_border=true&bg_color=0f172a&title_color=3b82f6&text_color=f8fafc"
    },
    wakatime: {
      light: "https://github-readme-stats.vercel.app/api/wakatime?username=vbatecan&hide_border=true&bg_color=FFFFFF&title_color=2563eb&text_color=1e293b",
      dark: "https://github-readme-stats.vercel.app/api/wakatime?username=vbatecan&hide_border=true&bg_color=0f172a&title_color=3b82f6&text_color=f8fafc"
    }
  }

  return (
    <section id="stats" className="py-20 px-4 relative z-10 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-secondary mb-2 tracking-widest uppercase">
            <BarChart3 className="inline h-4 w-4 mr-2" />
            git log --stat
          </p>
          <h2 className="section-title mb-4">Activity Stats</h2>
          <div className="accent-line mb-6"></div>
          <p className="section-subtitle">
            Contributions, streak, and time spent across languages.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* GitHub Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden border-0 shadow-lg rounded-2xl bg-gray-50 dark:bg-gray-800">
              <CardContent className="p-4">
                <img
                  src={getImageUrl(isDark ? statsConfig.github.dark : statsConfig.github.light)}
                  alt="GitHub Stats"
                  className="w-full rounded-lg"
                  loading="lazy"
                />
              </CardContent>
            </Card>
          </motion.div>

          {/* GitHub Streak */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden border-0 shadow-lg rounded-2xl bg-gray-50 dark:bg-gray-800">
              <CardContent className="p-4">
                <img
                  src={getImageUrl(isDark ? statsConfig.streak.dark : statsConfig.streak.light)}
                  alt="GitHub Streak"
                  className="w-full rounded-lg"
                  loading="lazy"
                />
              </CardContent>
            </Card>
          </motion.div>

          {/* Top Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden border-0 shadow-lg rounded-2xl bg-gray-50 dark:bg-gray-800">
              <CardContent className="p-4">
                <img
                  src={getImageUrl(isDark ? statsConfig.languages.dark : statsConfig.languages.light)}
                  alt="Top Languages"
                  className="w-full rounded-lg"
                  loading="lazy"
                />
              </CardContent>
            </Card>
          </motion.div>

          {/* WakaTime */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden border-0 shadow-lg rounded-2xl bg-gray-50 dark:bg-gray-800">
              <CardContent className="p-4 h-[280px] overflow-y-auto">
                <img
                  src={getImageUrl(isDark ? statsConfig.wakatime.dark : statsConfig.wakatime.light)}
                  alt="WakaTime Stats"
                  className="w-full rounded-lg"
                  loading="lazy"
                />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}