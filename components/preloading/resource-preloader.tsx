"use client"

import { useEffect } from "react"

interface ResourcePreloaderProps {
  images?: string[]
  scripts?: string[]
  stylesheets?: string[]
  priority?: "high" | "low"
}

export const ResourcePreloader = ({
  images = [],
  scripts = [],
  stylesheets = [],
  priority = "low",
}: ResourcePreloaderProps) => {
  useEffect(() => {
    const preloadResources = () => {
      // Preload images
      images.forEach((src) => {
        const link = document.createElement("link")
        link.rel = "preload"
        link.as = "image"
        link.href = src
        if (priority === "high") {
          link.setAttribute("fetchpriority", "high")
        }
        document.head.appendChild(link)
      })

      // Preload scripts
      scripts.forEach((src) => {
        const link = document.createElement("link")
        link.rel = "preload"
        link.as = "script"
        link.href = src
        document.head.appendChild(link)
      })

      // Preload stylesheets
      stylesheets.forEach((href) => {
        const link = document.createElement("link")
        link.rel = "preload"
        link.as = "style"
        link.href = href
        document.head.appendChild(link)
      })
    }

    // Use requestIdleCallback if available, otherwise setTimeout
    if ("requestIdleCallback" in window) {
      requestIdleCallback(preloadResources)
    } else {
      setTimeout(preloadResources, 100)
    }
  }, [images, scripts, stylesheets, priority])

  return null
}
