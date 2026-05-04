"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { SkillsData, CoreSpecializations, CurrentlyLearning } from "@/lib/data"

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 relative z-10 bg-gray-50/50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-secondary mb-2 tracking-widest uppercase">
            ~/skills
          </p>
          <h2 className="section-title mb-4">What I Work With</h2>
          <div className="accent-line mb-6"></div>
          <p className="section-subtitle">
            Backend-focused. I live in Java Spring Boot, but I can ship full-stack when needed.
          </p>
        </motion.div>

        {/* Core Specializations - horizontal scroll on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-mono text-sm text-secondary mb-6 uppercase tracking-wide">
            Core Stack
          </h3>
          <div className="flex flex-wrap gap-3">
            {CoreSpecializations.map((spec, index) => (
              <motion.div
                key={spec}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg shadow-md font-mono text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                {spec}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid - Bento style */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {SkillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className={`h-full overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-md hover:shadow-xl transition-all duration-300 rounded-xl ${
                skill.isSpecialty ? "ring-2 ring-primary/30" : ""
              }`}>
                <CardContent className="p-4 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <skill.icon className="h-5 w-5 text-primary icon-monochrome" />
                    </div>
                    {skill.isSpecialty && (
                      <span className="font-mono text-xs px-2 py-0.5 bg-primary text-primary-foreground rounded">
                        ★ Main
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-sm mb-2 text-foreground">
                    {skill.name}
                  </h3>

                  {/* Mono-styled tech tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {skill.items.slice(0, 3).map((item) => (
                      <span key={item} className="tech-tag text-xs">
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Hover details */}
                  <div className="absolute inset-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col">
                    <h4 className="font-bold text-sm mb-2">{skill.name}</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-300 mb-3 flex-1">{skill.description}</p>
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-2">
                      <p className="font-mono text-xs text-secondary mb-1">Used in:</p>
                      <div className="flex flex-wrap gap-1">
                        {skill.relatedProjects.slice(0, 2).map((project) => (
                          <span key={project} className="font-mono text-xs px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-300">
                            {project.split(' ')[0]}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Currently Learning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="font-mono text-sm text-secondary mb-6 uppercase tracking-wide">
            // also learning
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {CurrentlyLearning.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-secondary/10 text-secondary rounded-lg border border-secondary/20 font-mono text-sm"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}