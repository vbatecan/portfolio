"use client"

import { motion } from "framer-motion"
import { MapPin, Mail, Clock, Github, Linkedin, Facebook, Phone } from "lucide-react"

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
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <img src="/assets/2.jpg" alt="Profile" className="w-full h-full rounded-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Vince Angelo Batecan</h3>
                <p className="text-slate-400 text-sm">Full-Stack Developer</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed">
              1st year college student studying Bachelor of Science in Information Technology.
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
                  href="mailto:vbatecan@gmail.com"
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                  data-magnetic
                >
                  vbatecan@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a
                  href="tel:+639998216556"
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                  data-magnetic
                >
                  +63 999 821 6556
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15433.561591101725!2d120.98479536195548!3d14.747021923058652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b18f6401438d%3A0x30e71aa2fddf0c66!2sBignay%2C%20Valenzuela%2C%20Metro%20Manila%2C%20Philippines!5e0!3m2!1sen!2sus!4v1774692607501!5m2!1sen!2sus"
                  width="100%"
                  height="150"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Location Map"
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
                href="https://www.linkedin.com/in/vince-batecan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                data-magnetic
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/Nytriii"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                data-magnetic
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
