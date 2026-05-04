"use client"

import { motion } from "framer-motion"
import { Calendar, Award, ScrollText } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const certificates = [
  {
    title: "Computer Hardware Basics",
    issuer: "Cisco",
    date: "May 2025",
    credentialId: "58a30888-d92d-4cc3-87b3-4daa1f550789",
    credentialUrl: "https://www.credly.com/badges/58a30888-d92d-4cc3-87b3-4daa1f550789/linked_in_profile",
    image: "/assets/others/cisco.jpg?height=100&width=100",
    description: "Hardware components, assembly, and troubleshooting fundamentals",
    skills: ["Hardware", "Assembly", "Troubleshooting"],
  },
  {
    title: "Operating Systems Basics",
    issuer: "Cisco",
    date: "May 2025",
    credentialId: "32f6a9c2-a38f-4973-9567-ace1ccb8f1b1",
    credentialUrl: "https://www.credly.com/badges/32f6a9c2-a38f-4973-9567-ace1ccb8f1b1/linked_in_profile",
    image: "/assets/others/cisco.jpg?height=100&width=100",
    description: "OS concepts: Windows, Linux, system administration, and command line",
    skills: ["Linux", "Windows", "SysAdmin", "CLI"],
  },
  {
    title: "Ethical Hacking Fundamentals",
    issuer: "EC-Council",
    date: "2025",
    image: "/certificates/fundamentals_of_ethical_hacking.jpg",
    description: "Ethical hacking methodologies, tools, and security fundamentals",
    skills: ["PenTesting", "Cybersecurity", "Security"],
    clickable: true,
  },
  {
    title: "ACSS Code Start",
    issuer: "UE Caloocan",
    date: "October 2025",
    image: "/certificates/ecert_acss.jpg",
    description: "Python, Java OOP, and computational concepts workshop",
    skills: ["Python", "Java", "OOP"],
    clickable: true,
  },
  {
    title: "Library Science",
    issuer: "UE Caloocan",
    date: "2025",
    image: "/certificates/library.jpg",
    description: "Library science and information management",
    skills: ["Research", "Info Management"],
    clickable: true,
  },
]

export const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-20 px-4 relative z-10 bg-gray-50/50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-secondary mb-2 tracking-widest uppercase">
            <ScrollText className="inline h-4 w-4 mr-2" />
            ls -la ./certificates/
          </p>
          <h2 className="section-title mb-4">Certifications</h2>
          <div className="accent-line mb-6"></div>
          <p className="section-subtitle">
            Continuing education and skill verification.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl h-full flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  {cert.clickable ? (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="cursor-pointer relative shrink-0"
                      onClick={() => window.open(cert.image, "_blank")}
                    >
                      <img
                        src={cert.image || "/placeholder.svg"}
                        alt={cert.title}
                        className="w-24 h-auto rounded-xl shadow-md"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-white text-xs font-mono">View</span>
                      </div>
                    </motion.div>
                  ) : (
                    <img
                      src={cert.image || "/placeholder.svg"}
                      alt={cert.title}
                      className="w-16 h-auto rounded-lg shadow-md shrink-0"
                    />
                  )}
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-sm mb-1 text-foreground line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-secondary font-mono">{cert.issuer}</p>
                  </div>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-1">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="tech-tag text-xs">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 font-mono">
                      <Calendar className="h-3 w-3" />
                      {cert.date}
                    </div>

                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-primary hover:underline font-mono"
                      >
                        <Award className="h-3 w-3" />
                        Verify
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}