"use client"

import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export const StatsSection = () => {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const getImageUrl = (baseUrl: string) => {
    return `${baseUrl}&cache=${Date.now()}`
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
    <section id="stats" className="py-20 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl md:text-6xl font-bold mb-6 text-primary"
            data-magnetic
          >
            GitHub Stats
          </h2>
          <div className="w-32 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My coding activity and contributions across various projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden border-0 shadow-lg">
              <CardContent className="p-0">
                <img
                  src={getImageUrl(isDark ? statsConfig.github.dark : statsConfig.github.light)}
                  alt="GitHub Stats"
                  className="w-full rounded-lg"
                  loading="lazy"
                />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden border-0 shadow-lg">
              <CardContent className="p-0">
                <img
                  src={getImageUrl(isDark ? statsConfig.streak.dark : statsConfig.streak.light)}
                  alt="GitHub Streak"
                  className="w-full rounded-lg"
                  loading="lazy"
                />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden border-0 shadow-lg">
              <CardContent className="p-0">
                <img
                  src={getImageUrl(isDark ? statsConfig.languages.dark : statsConfig.languages.light)}
                  alt="Top Languages"
                  className="w-full rounded-lg"
                  loading="lazy"
                />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="h-[350px] overflow-y-auto">
                  <img
                    src={getImageUrl(isDark ? statsConfig.wakatime.dark : statsConfig.wakatime.light)}
                    alt="WakaTime Stats"
                    className="w-full rounded-lg"
                    loading="lazy"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

