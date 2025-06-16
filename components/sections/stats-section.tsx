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
      light: "https://github-readme-stats.vercel.app/api?username=vbatecan&show_icons=true&theme=default&hide_border=true&bg_color=FFFFFF&title_color=0366d6&icon_color=0366d6&text_color=24292e",
      dark: "https://github-readme-stats.vercel.app/api?username=vbatecan&show_icons=true&theme=radical&hide_border=true&bg_color=0D1117&title_color=F85D7F&icon_color=F85D7F&text_color=FFFFFF"
    },
    streak: {
      light: "https://github-readme-streak-stats.herokuapp.com/?user=vbatecan&theme=default&hide_border=true&background=FFFFFF&stroke=0366d6&ring=0366d6&fire=0366d6&currStreakLabel=0366d6",
      dark: "https://github-readme-streak-stats.herokuapp.com/?user=vbatecan&theme=radical&hide_border=true&background=0D1117&stroke=F85D7F&ring=F85D7F&fire=F85D7F&currStreakLabel=F85D7F"
    },
    languages: {
      light: "https://github-readme-stats.vercel.app/api/top-langs/?username=vbatecan&layout=compact&theme=default&hide_border=true&bg_color=FFFFFF&title_color=0366d6&text_color=24292e",
      dark: "https://github-readme-stats.vercel.app/api/top-langs/?username=vbatecan&layout=compact&theme=radical&hide_border=true&bg_color=0D1117&title_color=F85D7F&text_color=FFFFFF"
    },
    wakatime: {
      light: "https://github-readme-stats.vercel.app/api/wakatime?username=vbatecan&theme=default&hide_border=true&bg_color=FFFFFF&title_color=0366d6&text_color=24292e",
      dark: "https://github-readme-stats.vercel.app/api/wakatime?username=vbatecan&theme=radical&hide_border=true&bg_color=0D1117&title_color=F85D7F&text_color=FFFFFF"
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
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            data-magnetic
          >
            GitHub Stats
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
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

