import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeftIcon } from "@heroicons/react/24/outline"
import { ProjectsCatalog } from "@/components/sections/projects-section"
import { CursorLens } from "@/components/cursor-lens"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Projects | Vince Angelo Batecan",
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-7xl motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-2 motion-safe:duration-300 motion-safe:ease-out">
        <Button asChild variant="outline" size="sm" className="mb-6">
          <Link href="/#projects">
            <ArrowLeftIcon aria-hidden="true" />
            Back to portfolio
          </Link>
        </Button>
        <h1 className="section-title mb-6">Projects</h1>
        <ProjectsCatalog />
      </div>
      <CursorLens />
    </main>
  )
}
