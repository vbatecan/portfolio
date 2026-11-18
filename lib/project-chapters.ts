import { AllProjects, type LiveStatus, type Project } from "@/lib/data"

export interface ProjectChapter {
  status: LiveStatus
  label: string
  project: Omit<Project, "icon">
  count: number
  story: string
}

const chapters = [
  { status: "live", label: "Live", coverId: 22, story: "Pikash makes it possible to track expenses and manage money without an internet connection." },
  { status: "completed", label: "Completed", coverId: 30, story: "Mycast puts app launching, file search, and quick calculations a keystroke away on Windows." },
  { status: "development", label: "WIP", coverId: 26, story: "Still Island brings media controls, notifications, and timers into a small Windows overlay." },
  { status: "offline", label: "Offline", coverId: 2, story: "Trackattend connects a fingerprint scanner and an ESP32 to school attendance records." },
  { status: "archived", label: "Archived", coverId: 14, story: "Image Tiler splits oversize images into smaller pieces to help models detect small objects." },
] satisfies { status: LiveStatus; label: string; coverId: number; story: string }[]

export const projectChapters: ProjectChapter[] = chapters.flatMap(({ status, label, coverId, story }) => {
  const projects = AllProjects.filter((project) => project.liveStatus === status)
  const cover = projects.find((project) => project.id === coverId)
  const project = cover ?? projects[0]
  if (!project) return []
  const { icon, ...details } = project
  return [{ status, label, project: details, count: projects.length, story: cover ? story : project.description }]
})
