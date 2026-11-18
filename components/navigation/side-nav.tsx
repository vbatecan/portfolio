"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { AcademicCapIcon, BriefcaseIcon, ChartBarIcon, CodeBracketIcon, EnvelopeIcon, FolderIcon, HomeIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline"

const sections = [
  { id: "home", name: "Introduction", icon: HomeIcon },
  { id: "services", name: "Services", icon: BriefcaseIcon },
  { id: "projects", name: "Projects", icon: FolderIcon },
  { id: "skills", name: "Skills", icon: CodeBracketIcon },
  { id: "stats", name: "Activity", icon: ChartBarIcon },
  { id: "certificates", name: "Certifications", icon: AcademicCapIcon },
  { id: "contact", name: "Contact", icon: EnvelopeIcon },
]

const control = "grid size-11 shrink-0 place-items-center rounded-lg hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring"

export function SideNav() {
  const path = usePathname()
  const [section, setSection] = useState("home")
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const dark = mounted && resolvedTheme === "dark"
  const themeLabel = dark ? "Switch to light mode" : "Switch to dark mode"
  useEffect(() => setMounted(true), [])
  useEffect(() => {
    if (path !== "/") return
    const targets = sections
      .map(({ id }) => document.getElementById(id))
      .filter((target) => target !== null)
    let sectionTops: number[] = []
    let active: string | undefined

    function update() {
      const scrollTop = window.scrollY
      const threshold = window.innerHeight * 0.35
      let current = "home"
      for (let index = targets.length - 1; index >= 0; index--) {
        if (sectionTops[index] - scrollTop <= threshold) {
          current = targets[index].id
          break
        }
      }
      if (current !== active) {
        active = current
        setSection(current)
      }
    }

    function measure() {
      const scrollTop = window.scrollY
      sectionTops = targets.map((target) => target.getBoundingClientRect().top + scrollTop)
      update()
    }

    // Section size changes, including late images and font swaps, can move the sections below them.
    const observer = new ResizeObserver(measure)
    for (const target of targets) observer.observe(target, { box: "border-box" })
    measure()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", measure)
    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", measure)
    }
  }, [path])

  return (
    <nav aria-label="Portfolio" data-lenis-prevent-wheel className="fixed inset-y-0 left-0 z-40 flex w-12 flex-col items-center overflow-y-auto border-r border-border bg-background py-2 text-foreground sm:w-16">
      <div className="my-auto flex flex-col items-center gap-1">
        {sections.map(({ id, name, icon: Icon }) => {
          const active = path === "/" ? section === id : path === "/projects" && id === "projects"
          return (
            <Link key={id} href={`/#${id}`} aria-label={name} title={name} aria-current={active ? "location" : undefined}
              className={`${control} ${active ? "bg-foreground text-background hover:bg-foreground" : "text-muted-foreground"}`}>
              <Icon aria-hidden="true" className="size-5" />
            </Link>
          )
        })}
        <div className="mt-1 border-t border-border pt-2">
          <button type="button" className={control} aria-label={themeLabel} title={themeLabel}
            onClick={() => setTheme(dark ? "light" : "dark")}>
            {dark ? <SunIcon className="size-5" /> : <MoonIcon className="size-5" />}
          </button>
        </div>
      </div>
    </nav>
  )
}
