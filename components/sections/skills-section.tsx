import { Card, CardContent } from "@/components/ui/card"
import { TechIcon } from "@/components/ui/tech-icon"
import { SkillsData, CoreSpecializations, CurrentlyLearning } from "@/lib/data"

const categoryTools: Record<string, string[]> = {
  "Frontend Development": ["Angular"],
  "Backend Development": ["Java", "Spring Boot"],
  "Security & Authentication": ["JWT", "OAuth2"],
  "Database Management": ["PostgreSQL"],
}

export const SkillsSection = () => {
  return (
    <section className="py-20 px-4 relative z-10 bg-gray-50/50 dark:bg-gray-800/50 lg:py-6">
      <div className="max-w-7xl h-full mx-auto">
        <div className="mb-10 lg:mb-5">
          <p className="font-mono text-sm text-secondary mb-2 tracking-widest uppercase">
            ~/skills
          </p>
          <h2 className="section-title mb-4">The Tools Behind the Work</h2>
          <div className="accent-line mb-6 lg:mb-4"></div>
        </div>

        <div id="all-tools" role="region" aria-label="All tools">
          <div className="mb-12 lg:mb-6">
            <h3 className="font-mono text-sm text-secondary mb-6 uppercase tracking-wide lg:mb-3">
              Core Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {CoreSpecializations.map((spec) => (
                <div
                  key={spec}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg shadow-md font-mono text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <span className="size-5 rounded-sm bg-white p-0.5"><TechIcon name={spec} /></span>
                  {spec}
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid - Bento style */}
          <div className="grid grid-cols-2 gap-4 mb-16 md:grid-cols-3 lg:grid-cols-4 lg:mb-6 [@media(min-width:80rem)_and_(max-height:54rem)]:grid-cols-6">
            {SkillsData.map((skill) => {
              const tools = categoryTools[skill.name]

              return (
                <div key={skill.name} className="group">
                  <Card className={`relative h-full min-h-[180px] overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-md hover:shadow-xl transition-all duration-300 rounded-xl lg:min-h-40 ${
                    skill.isSpecialty ? "ring-2 ring-primary/30" : ""
                  }`}>
                    <CardContent className="p-4 h-full flex flex-col">
                      <div className="flex items-start justify-between mb-3">
                        <div className="p-2">
                          {tools ? (
                            <span aria-hidden="true" className="flex items-center gap-1">
                              {tools.map(name => <TechIcon key={name} name={name} className="size-5" />)}
                            </span>
                          ) : (
                            <skill.icon className="h-5 w-5 text-primary icon-monochrome" />
                          )}
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
                          <span key={item} className="tech-tag inline-flex max-w-full items-center gap-1.5 text-xs">
                            <TechIcon name={item} className="size-3.5 shrink-0" />
                            <span className="min-w-0 break-words">{item}</span>
                          </span>
                        ))}
                      </div>

                      {/* Hover details */}
                      <div className="h-full absolute inset-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col">
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
                </div>
              )
            })}
          </div>

          {/* Currently Learning */}
          <div className="text-center">
            <h3 className="font-mono text-sm text-secondary mb-6 uppercase tracking-wide lg:mb-3">
              // also learning
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {CurrentlyLearning.map((tech) => (
                <div
                  key={tech}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-lg border border-secondary/20 font-mono text-sm"
                >
                  <TechIcon name={tech.replace(/^Advanced /, "")} className="size-4" />
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
