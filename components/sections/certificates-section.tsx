"use client"

import { motion } from "framer-motion"
import { Calendar, Award } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const certificates = [
  {
    title: "Computer Hardware Basics",
    issuer: "Cisco",
    date: "May 2025",
    credentialId: "58a30888-d92d-4cc3-87b3-4daa1f550789",
    credentialUrl: "https://www.credly.com/badges/58a30888-d92d-4cc3-87b3-4daa1f550789/linked_in_profile",
    image: "/placeholder.svg?height=100&width=100",
    description: "Fundamental knowledge of computer hardware components, assembly, and troubleshooting",
    skills: ["Hardware Components", "Computer Assembly", "Troubleshooting", "System Architecture"],
  },
  {
    title: "Operating Systems Basics",
    issuer: "Cisco",
    date: "May 2025",
    credentialId: "32f6a9c2-a38f-4973-9567-ace1ccb8f1b1",
    credentialUrl: "https://www.credly.com/badges/32f6a9c2-a38f-4973-9567-ace1ccb8f1b1/linked_in_profile",
    image: "/placeholder.svg?height=100&width=100",
    description: "Core concepts of operating systems, including Windows, Linux, and system administration",
    skills: ["Operating Systems", "System Administration", "Linux", "Windows", "Command Line"],
  }
]

export const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-20 px-4 relative z-10">
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
            Certifications
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional certifications demonstrating expertise across hardware, operating systems, cloud platforms, and
            development frameworks
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50, rotateX: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, rotateX: 5, scale: 1.02 }}
              className="group"
              data-magnetic
            >
              <Card className="text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl relative overflow-hidden h-full">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500"
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))",
                      "linear-gradient(135deg, rgba(147, 51, 234, 0.05), rgba(59, 130, 246, 0.05))",
                      "linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))",
                    ],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                />

                <div className="relative z-10 flex flex-col h-full">
                  <motion.img
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    className="w-20 h-20 mx-auto mb-4 rounded-2xl shadow-lg"
                    whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />

                  <h3 className="font-bold text-lg mb-2 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    {cert.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-3 font-medium">{cert.issuer}</p>

                  {cert.description && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-grow">{cert.description}</p>
                  )}

                  {cert.skills && (
                    <div className="flex flex-wrap gap-1 mb-4 justify-center">
                      {cert.skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
                          +{cert.skills.length - 3}
                        </span>
                      )}
                    </div>
                  )}

                  <div className="mt-auto space-y-3">
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>{cert.date}</span>
                    </div>

                    {cert.credentialUrl && (
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full rounded-full"
                          onClick={() => window.open(cert.credentialUrl, "_blank")}
                        >
                          <Award className="h-4 w-4 mr-2" />
                          View Credential
                        </Button>
                      </motion.div>
                    )}

                    {cert.credentialId && (
                      <p className="text-xs text-gray-400 dark:text-gray-500 break-all">ID: {cert.credentialId}</p>
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
