"use client"

import type React from "react"

import { Suspense } from "react"
import { useIntersectionObserver } from "./intersection-observer"
import { SectionLoader } from "@/components/loading/section-loader"
import { ErrorBoundary } from "@/components/error/error-boundary"

interface LazySectionProps {
  sectionName: string
  component: React.ComponentType<any>
  priority?: "critical" | "high" | "medium" | "low"
  preloadOffset?: string
  [key: string]: any
}

export const LazySection = ({
  sectionName,
  component: Component,
  priority = "medium",
  preloadOffset = "300px",
  ...props
}: LazySectionProps) => {
  const { targetRef, hasIntersected } = useIntersectionObserver({
    rootMargin: preloadOffset,
    triggerOnce: true,
  })

  return (
    <div ref={targetRef} data-section={sectionName} id={sectionName}>
      <ErrorBoundary>
        {hasIntersected ? (
          <Suspense fallback={<SectionLoader />}>
            <Component {...props} />
          </Suspense>
        ) : (
          <div className="h-20" /> // Placeholder to maintain layout
        )}
      </ErrorBoundary>
    </div>
  )
}
