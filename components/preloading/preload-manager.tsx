"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface PreloadManagerProps {
  children: React.ReactNode
}

// Preload strategies
const preloadStrategies = {
  // Critical sections that should load immediately
  critical: ["hero", "navbar"],
  // High priority sections that should load after critical
  high: ["about", "projects"],
  // Medium priority sections
  medium: ["skills", "stats"],
  // Low priority sections that can load last
  low: ["certificates", "contact", "footer"],
}

export const PreloadManager = ({ children }: PreloadManagerProps) => {
  const [loadedSections, setLoadedSections] = useState<Set<string>>(new Set(preloadStrategies.critical))
  const [currentPriority, setCurrentPriority] = useState<"critical" | "high" | "medium" | "low">("critical")

  useEffect(() => {
    // Progressive loading strategy
    const loadNextPriority = () => {
      switch (currentPriority) {
        case "critical":
          // Load high priority after a short delay
          setTimeout(() => {
            setLoadedSections((prev) => new Set([...prev, ...preloadStrategies.high]))
            setCurrentPriority("high")
          }, 100)
          break
        case "high":
          // Load medium priority after user interaction or timeout
          const loadMedium = () => {
            setLoadedSections((prev) => new Set([...prev, ...preloadStrategies.medium]))
            setCurrentPriority("medium")
          }

          // Load on user interaction or after 2 seconds
          const interactionEvents = ["scroll", "mousemove", "touchstart", "keydown"]
          const handleInteraction = () => {
            loadMedium()
            interactionEvents.forEach((event) => {
              window.removeEventListener(event, handleInteraction)
            })
          }

          interactionEvents.forEach((event) => {
            window.addEventListener(event, handleInteraction, { once: true, passive: true })
          })

          // Fallback timeout
          setTimeout(loadMedium, 2000)
          break
        case "medium":
          // Load low priority sections after another delay
          setTimeout(() => {
            setLoadedSections((prev) => new Set([...prev, ...preloadStrategies.low]))
            setCurrentPriority("low")
          }, 1000)
          break
      }
    }

    loadNextPriority()
  }, [currentPriority])

  // Preload images and assets
  useEffect(() => {
    const preloadAssets = () => {
      // Preload critical images
      const criticalImages = [
        "/placeholder.svg?height=400&width=400", // Profile image
        "https://github-readme-stats.vercel.app/api?username=vbatecan&show_icons=true&theme=radical&hide_border=true&bg_color=0D1117&title_color=F85D7F&icon_color=F85D7F&text_color=FFFFFF",
      ]

      criticalImages.forEach((src) => {
        const img = new Image()
        img.src = src
      })

      // Preload fonts if needed
      if ("fonts" in document) {
        document.fonts.ready.then(() => {
          console.log("Fonts loaded")
        })
      }
    }

    preloadAssets()
  }, [])

  return <div data-preload-manager>{children}</div>
}
