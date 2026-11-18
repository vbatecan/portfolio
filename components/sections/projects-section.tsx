import { projectChapters } from "@/lib/project-chapters"
import { InlineProjectsExperience } from "./inline-projects-experience"

export function ProjectsSection() {
  return <InlineProjectsExperience chapters={projectChapters} />
}
