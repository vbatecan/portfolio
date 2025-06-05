"use client"

import { motion } from "framer-motion"

export const StatsSection = () => {
  return (
    <section id="stats" className="py-20 px-4 bg-gray-50/50 dark:bg-gray-800/50 relative z-10">
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
            GitHub & Coding Stats
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real-time insights into my coding journey and contributions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* GitHub Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              data-magnetic
            >
              <h3 className="text-xl font-bold mb-4 text-center bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                GitHub Statistics
              </h3>
              <img
                src="https://github-readme-stats.vercel.app/api?username=vbatecan&show_icons=true&theme=radical&hide_border=true&bg_color=0D1117&title_color=F85D7F&icon_color=F85D7F&text_color=FFFFFF"
                alt="GitHub Stats"
                className="w-full rounded-lg"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              data-magnetic
            >
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=vbatecan&theme=radical&hide_border=true&background=0D1117&stroke=F85D7F&ring=F85D7F&fire=F85D7F&currStreakLabel=F85D7F"
                alt="GitHub Streak"
                className="w-full rounded-lg"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          {/* WakaTime & Language Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              data-magnetic
            >
              <h3 className="text-xl font-bold mb-4 text-center bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Most Used Languages
              </h3>
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=vbatecan&layout=compact&theme=radical&hide_border=true&bg_color=0D1117&title_color=F85D7F&text_color=FFFFFF"
                alt="Top Languages"
                className="w-full rounded-lg"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              data-magnetic
            >
              <h3 className="text-xl font-bold mb-4 text-center bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                WakaTime Stats
              </h3>
              <img
                src="https://github-readme-stats.vercel.app/api/wakatime?username=vbatecan&theme=radical&hide_border=true&bg_color=0D1117&title_color=F85D7F&text_color=FFFFFF"
                alt="WakaTime Stats"
                className="w-full rounded-lg"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
