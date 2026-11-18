import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeftIcon } from "@heroicons/react/24/outline"
import { BrowseCatalogLink, ProjectsExperience } from "@/components/sections/projects-experience"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Projects | Vince Angelo Batecan",
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <header className="mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-x-8 gap-y-4 px-4 py-5 sm:px-8 [@media(max-height:500px)]:py-1">
        <div>
          <Button asChild variant="link" size="sm" className="-ml-3 mb-1">
            <Link href="/#projects">
              <ArrowLeftIcon aria-hidden="true" />
              Back to portfolio
            </Link>
          </Button>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Projects</h1>
        </div>
        <BrowseCatalogLink />
      </header>
      <ProjectsExperience />
    </main>
  )
}
