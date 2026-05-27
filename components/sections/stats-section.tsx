"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ChartBarIcon } from "@heroicons/react/24/outline"

const wakatimeEmbeds = [
  "https://wakatime.com/share/@vbatecan/1b322618-a234-4abf-a40f-3db31b9a14aa.svg",
  "https://wakatime.com/share/@vbatecan/b9e9abf5-62db-4354-b8ea-d91f087731ec.svg",
  "https://wakatime.com/share/@vbatecan/131fd901-afbc-4ce4-b70f-2307ffcfaa5b.svg",
  "https://wakatime.com/share/@vbatecan/e3035f8a-dc68-43af-bc30-b6e89337980c.svg",
]

export const StatsSection = () => {
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
            <ChartBarIcon className="inline h-4 w-4 mr-2" />
            git log --stat
          </p>
          <h2 className="section-title mb-4">Activity Stats</h2>
          <div className="accent-line mb-6"></div>
          <p className="section-subtitle">
            Contributions, streak, and time spent across languages.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {wakatimeEmbeds.map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-0 shadow-lg rounded-2xl bg-gray-50 dark:bg-gray-800">
                <CardContent className="p-4">
                  <figure className="m-0">
                    <img
                      src={src}
                      alt="WakaTime stats"
                      className="w-full rounded-lg"
                      loading="lazy"
                    />
                  </figure>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
