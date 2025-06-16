"use client"

import { useRef, useEffect } from "react"

export const ParticleSystem = () => {
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
  const lastTimeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Initialize particles with better performance
    const initParticles = () => {
      particlesRef.current = []
      const particleCount = Math.min(50, Math.floor(window.innerWidth / 40))
      // const particleCount = 50;

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 10 + 1,
          opacity: Math.random() * 0.5 + 0.1,
          hue: Math.random() * 60 + 200,
        })
      }
    }

    const animate = (currentTime: number) => {
      // Throttle to 30fps for particles
      if (currentTime - lastTimeRef.current < 33.33) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }
      lastTimeRef.current = currentTime

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

    const handleResize = () => {
      resizeCanvas()
      initParticles()
    }

    window.addEventListener("resize", handleResize)
    animationRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
}
