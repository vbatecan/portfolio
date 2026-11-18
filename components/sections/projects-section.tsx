import Link from "next/link"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import { Button } from "@/components/ui/button"
import { AllProjects } from "@/lib/data"
import { FeaturedProjectCards } from "./featured-project-cards"

const featuredProjects = [
  22, // Pikash
  26, // Still Island
  28, // LoopLab
].flatMap((id) => AllProjects.filter((project) => project.id === id))
  .map(({ icon, ...project }) => project)

export function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="relative z-10 bg-background px-4 py-12 sm:px-6 md:py-16">
      <div className="mx-auto max-w-7xl">
        <h2 id="projects-title" className="section-title mb-6">Featured Work</h2>
        <FeaturedProjectCards projects={featuredProjects} />
        <Button asChild variant="outline" className="mt-5">
          <Link href="/projects">
            View all {AllProjects.length} projects
            <ArrowRightIcon aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
