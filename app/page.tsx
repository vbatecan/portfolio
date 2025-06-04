"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Moon,
  Sun,
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Smartphone,
  Calendar,
  MapPin,
  Send,
  ChevronDown,
  Clock,
  Zap,
  Palette,
  Globe,
  Server,
  Brain,
  Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Cursor Effects using libraries
const CursorEffects = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const trailRef = useRef<Array<{ x: number; y: number; life: number }>>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }

      // Add new trail point
      trailRef.current.push({
        x: e.clientX,
        y: e.clientY,
        life: 1,
      })

      // Limit trail length
      if (trailRef.current.length > 20) {
        trailRef.current.shift()
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw trail
      trailRef.current = trailRef.current.filter((point) => {
        point.life -= 0.05

        if (point.life > 0) {
          const size = point.life * 8
          const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, size)
          gradient.addColorStop(0, `rgba(59, 130, 246, ${point.life * 0.8})`)
          gradient.addColorStop(0.5, `rgba(147, 51, 234, ${point.life * 0.6})`)
          gradient.addColorStop(1, `rgba(236, 72, 153, ${point.life * 0.2})`)

          ctx.fillStyle = gradient
          ctx.beginPath()
          ctx.arc(point.x, point.y, size, 0, Math.PI * 2)
          ctx.fill()

          return true
        }
        return false
      })

      // Draw main cursor
      const gradient = ctx.createRadialGradient(
        mouseRef.current.x,
        mouseRef.current.y,
        0,
        mouseRef.current.x,
        mouseRef.current.y,
        15,
      )
      gradient.addColorStop(0, "rgba(59, 130, 246, 0.8)")
      gradient.addColorStop(0.7, "rgba(147, 51, 234, 0.6)")
      gradient.addColorStop(1, "rgba(236, 72, 153, 0.2)")

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(mouseRef.current.x, mouseRef.current.y, 12, 0, Math.PI * 2)
      ctx.fill()

      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    window.addEventListener("mousemove", handleMouseMove)
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-50" style={{ mixBlendMode: "screen" }} />
  )
}

// Enhanced Cursor Dot Effect - Updated for better visibility
const CursorDot = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Check for dark mode
    const checkDarkMode = () => {
      setDarkMode(document.documentElement.classList.contains("dark"))
    }

    checkDarkMode()
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    const interactiveElements = document.querySelectorAll('button, a, input, textarea, [role="button"]')

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      observer.disconnect()
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
        scale: isHovering ? 1.5 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
    >
      <div
        className={`w-8 h-8 rounded-full shadow-lg border-2 ${
          darkMode ? "bg-white border-white" : "bg-gray-900 border-gray-900"
        }`}
      />
    </motion.div>
  )
}

// Magnetic Cursor Effect
const MagneticCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [magneticElements, setMagneticElements] = useState<Element[]>([])

  useEffect(() => {
    const elements = document.querySelectorAll("[data-magnetic]")
    setMagneticElements(Array.from(elements))

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      // Apply magnetic effect to elements
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const distance = Math.sqrt(Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2))

        if (distance < 100) {
          const strength = (100 - distance) / 100
          const deltaX = (e.clientX - centerX) * strength * 0.3
          const deltaY = (e.clientY - centerY) * strength * 0.3
          ;(element as HTMLElement).style.transform = `translate(${deltaX}px, ${deltaY}px)`
        } else {
          ;(element as HTMLElement).style.transform = "translate(0px, 0px)"
        }
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      elements.forEach((element) => {
        ;(element as HTMLElement).style.transform = "translate(0px, 0px)"
      })
    }
  }, [])

  return null
}

// Floating Geometric Shapes
const FloatingShapes = () => {
  const shapes = [
    { type: "circle", size: 60, color: "from-blue-400 to-cyan-400" },
    { type: "triangle", size: 40, color: "from-purple-400 to-pink-400" },
    { type: "square", size: 35, color: "from-green-400 to-emerald-400" },
    { type: "hexagon", size: 50, color: "from-orange-400 to-red-400" },
    { type: "circle", size: 25, color: "from-indigo-400 to-blue-400" },
    { type: "triangle", size: 30, color: "from-pink-400 to-rose-400" },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute bg-gradient-to-br ${shape.color} opacity-10`}
          style={{
            width: shape.size,
            height: shape.size,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            clipPath:
              shape.type === "triangle"
                ? "polygon(50% 0%, 0% 100%, 100% 100%)"
                : shape.type === "hexagon"
                  ? "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)"
                  : shape.type === "circle"
                    ? "circle(50%)"
                    : "none",
            borderRadius: shape.type === "square" ? "8px" : "0",
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10 + index * 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

// Particle System
const ParticleSystem = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<
    Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      hue: number
    }>
  >([])
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = []
      for (let i = 0; i < 50; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.1,
          hue: Math.random() * 60 + 200, // Blue to purple range
        })
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        particle.y = Math.max(0, Math.min(canvas.height, particle.y))

        // Draw particle
        ctx.fillStyle = `hsla(${particle.hue}, 70%, 60%, ${particle.opacity})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    initParticles()
    window.addEventListener("resize", () => {
      resizeCanvas()
      initParticles()
    })
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
}

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState("all")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const projects = [
    {
      id: 1,
      title: "Neural Network Visualizer",
      description: "Interactive 3D visualization of neural networks with real-time training",
      category: "ai",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Three.js", "TensorFlow.js", "React", "WebGL"],
      github: "#",
      live: "#",
    },
    {
      id: 2,
      title: "Quantum Computing Simulator",
      description: "Web-based quantum circuit simulator with drag-and-drop interface",
      category: "web",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "D3.js", "WebAssembly", "Python"],
      github: "#",
      live: "#",
    },
    {
      id: 3,
      title: "AR Shopping Experience",
      description: "Augmented reality mobile app for virtual product placement",
      category: "mobile",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React Native", "ARKit", "ARCore", "Firebase"],
      github: "#",
      live: "#",
    },
    {
      id: 4,
      title: "Blockchain Analytics Platform",
      description: "Real-time cryptocurrency transaction analysis and visualization",
      category: "data",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Python", "Web3.js", "GraphQL", "D3.js"],
      github: "#",
      live: "#",
    },
  ]

  const skills = [
    {
      name: "Frontend",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      items: ["React", "Vue", "Angular", "TypeScript"],
    },
    {
      name: "Backend",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      items: ["Node.js", "Python", "Go", "Rust"],
    },
    {
      name: "Mobile",
      icon: Smartphone,
      color: "from-purple-500 to-pink-500",
      items: ["React Native", "Flutter", "Swift", "Kotlin"],
    },
    {
      name: "Database",
      icon: Database,
      color: "from-orange-500 to-red-500",
      items: ["PostgreSQL", "MongoDB", "Redis", "GraphQL"],
    },
    {
      name: "AI/ML",
      icon: Brain,
      color: "from-indigo-500 to-purple-500",
      items: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI"],
    },
    {
      name: "DevOps",
      icon: Shield,
      color: "from-teal-500 to-blue-500",
      items: ["Docker", "Kubernetes", "AWS", "CI/CD"],
    },
    {
      name: "Design",
      icon: Palette,
      color: "from-pink-500 to-rose-500",
      items: ["Figma", "Adobe XD", "Blender", "Three.js"],
    },
    {
      name: "Web3",
      icon: Globe,
      color: "from-yellow-500 to-orange-500",
      items: ["Solidity", "Web3.js", "Ethereum", "IPFS"],
    },
  ]

  const certificates = [
    {
      title: "AWS Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      title: "Google Cloud ML Engineer",
      issuer: "Google Cloud",
      date: "2023",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      title: "Meta React Specialist",
      issuer: "Meta",
      date: "2022",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white relative overflow-hidden">
        {/* Cursor Effects */}
        <CursorEffects />
        <CursorDot />
        <MagneticCursor />

        {/* Background Effects */}
        <FloatingShapes />
        <ParticleSystem />

        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl z-40 border-b border-white/20 dark:border-gray-700/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                data-magnetic
              >
                Portfolio
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {["home", "about", "projects", "skills", "stats", "certificates", "contact"].map((item) => (
                  <motion.button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors capitalize relative group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    data-magnetic
                  >
                    {item}
                    <motion.div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300" />
                  </motion.button>
                ))}
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} data-magnetic>
                  <Button variant="ghost" size="sm" onClick={toggleDarkMode} className="p-2">
                    {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  </Button>
                </motion.div>
              </div>

              {/* Mobile Navigation */}
              <div className="md:hidden flex items-center space-x-2">
                <Button variant="ghost" size="sm" onClick={toggleDarkMode} className="p-2" data-magnetic>
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2"
                  data-magnetic
                >
                  {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl border-t border-white/20 dark:border-gray-700/20"
              >
                <div className="px-4 py-2 space-y-2">
                  {["home", "about", "projects", "skills", "stats", "certificates", "contact"].map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className="block w-full text-left py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors capitalize"
                      data-magnetic
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Animated background text */}
              <motion.div
                className="absolute inset-0 text-8xl md:text-9xl font-black text-gray-100 dark:text-gray-800 opacity-20 select-none"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
              >
                DEVELOPER
              </motion.div>

              <h1 className="text-6xl md:text-8xl font-black mb-6 relative z-10">
                <motion.span
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  data-magnetic
                >
                  Vince Angelo
                </motion.span>
                <br />
                <motion.span
                  className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  data-magnetic
                >
                  Batecan
                </motion.span>
              </h1>

              <motion.p
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Crafting the future with{" "}
                <motion.span
                  className="text-blue-600 dark:text-blue-400 font-semibold"
                  animate={{ color: ["#2563eb", "#7c3aed", "#db2777", "#2563eb"] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  code
                </motion.span>
                ,{" "}
                <motion.span
                  className="text-purple-600 dark:text-purple-400 font-semibold"
                  animate={{ color: ["#7c3aed", "#db2777", "#2563eb", "#7c3aed"] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                >
                  creativity
                </motion.span>
                , and{" "}
                <motion.span
                  className="text-pink-600 dark:text-pink-400 font-semibold"
                  animate={{ color: ["#db2777", "#2563eb", "#7c3aed", "#db2777"] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                >
                  innovation
                </motion.span>
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} data-magnetic>
                  <Button
                    onClick={() => scrollToSection("projects")}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Zap className="mr-2 h-5 w-5" />
                    Explore Work
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} data-magnetic>
                  <Button
                    variant="outline"
                    onClick={() => scrollToSection("contact")}
                    className="px-8 py-4 text-lg border-2 rounded-full hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-800 dark:hover:to-gray-700 transition-all duration-300"
                  >
                    Let's Connect
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-20"
            >
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
                <ChevronDown className="h-8 w-8 mx-auto text-gray-400" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 relative z-10">
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
                About Me
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
                data-magnetic
              >
                <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 overflow-hidden">
                  <motion.div
                    className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full opacity-20"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />
                  <img
                    src="/placeholder.svg?height=400&width=400"
                    alt="Profile"
                    className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl relative z-10"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <motion.p
                  className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  I'm a passionate full-stack developer and digital architect with over 6 years of experience
                  transforming ideas into extraordinary digital experiences. My journey began with a simple "Hello
                  World" and has evolved into crafting complex AI-powered applications and immersive web experiences.
                </motion.p>
                <motion.p
                  className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  When I'm not pushing pixels or debugging code, you'll find me exploring the frontiers of quantum
                  computing, contributing to open-source projects, or mentoring the next generation of developers. I
                  believe in code that not only works but inspires.
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-6 pt-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                    <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg">
                      <MapPin className="h-4 w-4 text-white" />
                    </div>
                    <span>Philippines</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                    <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg">
                      <Mail className="h-4 w-4 text-white" />
                    </div>
                    <span>vince@example.com</span>
                  </div>
                </motion.div>

                <motion.div
                  className="flex gap-4 pt-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} data-magnetic>
                    <Button variant="outline" size="sm" className="rounded-full">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} data-magnetic>
                    <Button variant="outline" size="sm" className="rounded-full">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 bg-gray-50/50 dark:bg-gray-800/50 relative z-10">
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
                Featured Projects
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                A showcase of innovation, creativity, and technical excellence
              </p>
            </motion.div>

            {/* Project Filters */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {["all", "web", "mobile", "data", "ai"].map((filter) => (
                <motion.div key={filter} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} data-magnetic>
                  <Button
                    variant={activeFilter === filter ? "default" : "outline"}
                    onClick={() => setActiveFilter(filter)}
                    className={`capitalize rounded-full px-6 py-2 ${
                      activeFilter === filter ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white" : ""
                    }`}
                  >
                    {filter === "all" ? "All Projects" : filter}
                  </Button>
                </motion.div>
              ))}
            </motion.div>

            {/* Projects Grid */}
            <motion.div layout className="grid md:grid-cols-2 gap-8">
              <AnimatePresence>
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -50 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="group"
                    data-magnetic
                  >
                    <Card className="h-full overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl">
                      <div className="relative overflow-hidden">
                        <motion.img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-56 object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        >
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            data-magnetic
                          >
                            <Button size="sm" variant="secondary" className="rounded-full">
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </Button>
                          </motion.div>
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            data-magnetic
                          >
                            <Button size="sm" variant="secondary" className="rounded-full">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Live
                            </Button>
                          </motion.div>
                        </motion.div>
                      </div>
                      <CardHeader className="pb-4">
                        <CardTitle className="text-xl bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 dark:text-gray-400">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 border-0 rounded-full"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Skills Section - Redesigned without progress bars */}
        <section id="skills" className="py-20 px-4 relative z-10">
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
                Skills & Expertise
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Technologies and tools I use to bring ideas to life
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 50, rotateY: -90 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 10,
                    z: 50,
                  }}
                  className="group perspective-1000"
                  data-magnetic
                >
                  <Card className="relative h-48 overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl transform-gpu">
                    {/* Animated background gradient */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                      animate={{
                        background: [
                          `linear-gradient(45deg, ${skill.color.split(" ")[1]}, ${skill.color.split(" ")[3]})`,
                          `linear-gradient(135deg, ${skill.color.split(" ")[3]}, ${skill.color.split(" ")[1]})`,
                          `linear-gradient(45deg, ${skill.color.split(" ")[1]}, ${skill.color.split(" ")[3]})`,
                        ],
                      }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    />

                    {/* Floating particles */}
                    <div className="absolute inset-0 overflow-hidden">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute w-1 h-1 bg-gradient-to-r ${skill.color} rounded-full opacity-40`}
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                          }}
                          animate={{
                            y: [-10, 10, -10],
                            opacity: [0.2, 0.8, 0.2],
                          }}
                          transition={{
                            duration: 2 + i * 0.5,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                        />
                      ))}
                    </div>

                    <CardContent className="relative z-10 p-6 h-full flex flex-col items-center justify-center text-center">
                      <motion.div
                        className={`p-4 bg-gradient-to-br ${skill.color} rounded-2xl mb-4 shadow-lg`}
                        whileHover={{
                          rotate: [0, -10, 10, 0],
                          scale: 1.1,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <skill.icon className="h-8 w-8 text-white" />
                      </motion.div>

                      <h3 className="font-bold text-lg mb-3 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                        {skill.name}
                      </h3>

                      <div className="flex flex-wrap gap-1 justify-center">
                        {skill.items.slice(0, 2).map((item, itemIndex) => (
                          <motion.span
                            key={item}
                            className="text-xs px-2 py-1 bg-white/50 dark:bg-gray-700/50 rounded-full text-gray-700 dark:text-gray-300"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 + itemIndex * 0.05 }}
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
                            transition={{ delay: index * 0.1 + 0.1 }}
                            viewport={{ once: true }}
                          >
                            +{skill.items.length - 2}
                          </motion.span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Coding Stats Section - Updated with GitHub and WakaTime */}
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
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Certificates Section */}
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
                  <Card className="text-center p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl relative overflow-hidden">
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

                    <motion.img
                      src={cert.image || "/placeholder.svg"}
                      alt={cert.title}
                      className="w-24 h-24 mx-auto mb-6 rounded-2xl shadow-lg relative z-10"
                      whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <h3 className="font-bold text-xl mb-3 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                      {cert.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 font-medium">{cert.issuer}</p>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>{cert.date}</span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-gray-50/50 dark:bg-gray-800/50 relative z-10">
          <div className="max-w-4xl mx-auto">
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
                Let's Create Together
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Ready to bring your next big idea to life? Let's collaborate and create something extraordinary.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              data-magnetic
            >
              <Card className="p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl rounded-2xl relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))",
                      "linear-gradient(135deg, rgba(147, 51, 234, 0.05), rgba(59, 130, 246, 0.05))",
                      "linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))",
                    ],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                />

                <form onSubmit={handleFormSubmit} className="space-y-6 relative z-10">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        required
                        className="rounded-xl border-0 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm"
                        data-magnetic
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="rounded-xl border-0 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm"
                        data-magnetic
                      />
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..."
                      rows={6}
                      required
                      className="rounded-xl border-0 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm resize-none"
                      data-magnetic
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    data-magnetic
                  >
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Footer - Redesigned */}
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
      </div>
    </div>
  )
}
