"use client"

import { motion } from "framer-motion"
import { MapPin, Mail, Clock, Github, Linkedin } from "lucide-react"

interface FooterSectionProps {
  scrollToSection: (sectionId: string) => void
}

export const FooterSection = ({ scrollToSection }: FooterSectionProps) => {
  return (
    <footer className="bg-slate-800 dark:bg-slate-900 text-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Vince Angelo Batecan</h3>
                <p className="text-slate-400 text-sm">Full-Stack Developer</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Empowering digital transformation through innovative technology and dedicated excellence. Building the
              future, one project at a time.
            </p>
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Vince Angelo Batecan. All rights reserved.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-3">
              {["About", "Projects", "Skills", "Certificates", "Contact"].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block text-slate-300 hover:text-blue-400 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  data-magnetic
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-300">Philippines</p>
                  <p className="text-slate-400 text-sm">Available for remote work</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:vince@example.com"
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                  data-magnetic
                >
                  vince@example.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <p className="text-slate-300">Mon-Fri: 9AM-6PM (PHT)</p>
              </div>
            </div>

            {/* Google Maps Integration */}
            <motion.div className="mt-6" whileHover={{ scale: 1.02 }} data-magnetic>
              <div className="bg-slate-700 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.2!2d121.0!3d14.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDM2JzAwLjAiTiAxMjHCsDAwJzAwLjAiRQ!5e0!3m2!1sen!2sph!4v1234567890"
                  width="100%"
                  height="150"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p className="text-slate-400 text-sm text-center md:text-left">
              Designed with <span className="text-red-400">❤️</span> for modern web experiences
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/vbatecan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                data-magnetic
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/vbatecan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                data-magnetic
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
