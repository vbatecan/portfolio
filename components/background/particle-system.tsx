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
    }>
  >([])
  const animationRef = useRef<number | undefined>(undefined)
  const lastTimeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      ctx.fillStyle = "hsl(0, 0%, 50%)"
    }

    const initParticles = () => {
      particlesRef.current = []
      const { width, height } = canvas
      const particleCount = Math.min(50, Math.floor(width / 40))

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 1.25,
          vy: (Math.random() - 0.5) * 1.25,
          size: Math.random() * 10 + 1.25,
          opacity: Math.random() * 0.6 + 0.1,
        })
      }
    }

    const animate = (currentTime: number) => {
      if (currentTime - lastTimeRef.current < 10) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }
      lastTimeRef.current = currentTime

      const { width, height } = canvas
      ctx.clearRect(0, 0, width, height)

      for (const particle of particlesRef.current) {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off edges
        if (particle.x < 0 || particle.x > width) particle.vx *= -1
        if (particle.y < 0 || particle.y > height) particle.vy *= -1

        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(width, particle.x))
        particle.y = Math.max(0, Math.min(height, particle.y))

        // Draw particle
        ctx.globalAlpha = particle.opacity
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    initParticles()

    const handleResize = () => {
      if (canvas.width === window.innerWidth && canvas.height === window.innerHeight) return
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
