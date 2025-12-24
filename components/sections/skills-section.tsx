"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { SkillsData, CoreSpecializations, CurrentlyLearning } from "@/lib/data"

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 relative z-10">
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
            Skills & Expertise
          </h2>
          <div className="w-32 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Specializing in Java backend development, Angular frontend, and secure full-stack solutions with clean
            architecture and maintainable code
          </p>
        </motion.div>

        {/* Core Specializations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-foreground">
            Core Specializations
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {CoreSpecializations.map((spec, index) => (
              <motion.div
                key={spec}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-6 py-4 bg-primary text-primary-foreground rounded-full shadow-lg transition-all duration-300 font-semibold transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl"
                data-magnetic
              >
                {spec}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {SkillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50, rotateY: -90 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.05,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              className="group perspective-1000 relative"
              data-magnetic
            >
              <Card
                className={`relative h-64 overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg transition-all duration-500 rounded-2xl transform-gpu group-hover:shadow-2xl group-hover:scale-[1.05] group-hover:rotate-y-10 group-hover:z-50 ${skill.isSpecialty ? "ring-2 ring-blue-500/50" : ""
                  }`}
              >
                {skill.isSpecialty && (
                  <div className="absolute top-2 right-2 z-20">
                    <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full font-medium">Specialty</span>
                  </div>
                )}

                <CardContent className="relative z-10 p-4 h-full flex flex-col items-center justify-center text-center">
                  <div
                    className={`p-3 bg-primary rounded-2xl mb-3 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}
                  >
                    <skill.icon className="h-6 w-6 text-white" />
                  </div>

                  <h3 className="font-bold text-sm mb-2 text-foreground">
                    {skill.name}
                  </h3>

                  <div className="flex flex-wrap gap-1 justify-center">
                    {skill.items.slice(0, 2).map((item, itemIndex) => (
                      <motion.span
                        key={item}
                        className="text-xs px-2 py-1 bg-white/50 dark:bg-gray-700/50 rounded-full text-gray-700 dark:text-gray-300"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 + itemIndex * 0.02 }}
                        viewport={{ once: true }}
                      >
                        {item}
                      </motion.span>
                    ))}
                    {skill.items.length > 2 && (
                      <motion.span
                        className="text-xs px-2 py-1 bg-white/50 dark:bg-gray-700/50 rounded-full text-gray-700 dark:text-gray-300"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 + 0.04 }}
                        viewport={{ once: true }}
                      >
                        +{skill.items.length - 2}
                      </motion.span>
                    )}
                  </div>
                </CardContent>

                {/* Enhanced Hover Details Tooltip */}
                <div className="absolute inset-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out z-20 overflow-hidden">
                  <div className="h-full flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`p-2 bg-primary rounded-lg`}>
                        <skill.icon className="h-4 w-4 text-white" />
                      </div>
                      <h4 className="font-bold text-sm text-gray-900 dark:text-white">{skill.name}</h4>
                      {skill.isSpecialty && (
                        <span className="px-1 py-0.5 bg-blue-600 text-white text-xs rounded">★</span>
                      )}
                    </div>

                    <p className="text-xs text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">{skill.description}</p>

                    <div className="flex-1 overflow-y-auto mb-2">
                      <ul className="space-y-1">
                        {skill.details.slice(0, 3).map((detail, detailIndex) => (
                          <li
                            key={detailIndex}
                            className="text-xs text-gray-700 dark:text-gray-300 flex items-start gap-1"
                          >
                            <span className="text-blue-500 mt-1">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                        {skill.details.length > 3 && (
                          <li className="text-xs text-gray-500 dark:text-gray-400 italic">
                            +{skill.details.length - 3} more areas
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Related Projects */}
                    <div className="border-t border-gray-200 dark:border-gray-600 pt-2">
                      <p className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Used in:</p>
                      <div className="flex flex-wrap gap-1">
                        {skill.relatedProjects.slice(0, 2).map((project, projIndex) => (
                          <span
                            key={projIndex}
                            className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                          >
                            {project.length > 15 ? project.substring(0, 15) + "..." : project}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Current Learning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-6 text-foreground">
            Currently Learning
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {CurrentlyLearning.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-6 py-3 bg-secondary/10 text-secondary rounded-full border border-secondary/20 shadow-md transform hover:scale-105 transition-transform duration-300"
                data-magnetic
              >
                <span className="font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
