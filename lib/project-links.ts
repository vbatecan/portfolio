import type { Project } from "./data"

export function getProjectViewingLinks({ live, liveStatus, demo }: Pick<Project, "live" | "liveStatus" | "demo">) {
  return {
    live: liveStatus === "live" && live && live !== "#" ? live : null,
    demo: demo && demo !== "#" ? demo : null,
  }
}
