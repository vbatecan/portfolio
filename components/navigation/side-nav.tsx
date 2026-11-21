"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState, type MouseEvent } from "react"
import { useTheme } from "next-themes"
import { AcademicCapIcon, Bars3Icon, BriefcaseIcon, ChartBarIcon, CodeBracketIcon, EnvelopeIcon, FolderIcon, HomeIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline"

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
  const menu = useRef<HTMLDetailsElement>(null)
  const menuTrigger = useRef<HTMLElement>(null)
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

  function closeMenu(focusTarget = menuTrigger.current) {
    if (menu.current) menu.current.open = false
    focusTarget?.focus({ preventScroll: true })
  }

  function followMenuLink(event: MouseEvent<HTMLAnchorElement>, id: string) {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    closeMenu(path === "/" ? document.getElementById(id) ?? menuTrigger.current : menuTrigger.current)
  }

  function renderLinks(mobile: boolean) {
    return sections.map(({ id, name, icon: Icon }) => {
      const active = path === "/" ? section === id : path === "/projects" && id === "projects"
      const label = mobile ? name : undefined
      const linkClass = mobile
        ? "flex min-h-11 items-center gap-3 rounded-lg px-3 text-sm font-semibold hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring"
        : control
      return (
        <Link key={id} href={`/#${id}`} aria-label={mobile ? undefined : name} title={mobile ? undefined : name}
          aria-current={active ? "location" : undefined}
          onClick={mobile ? (event) => followMenuLink(event, id) : undefined}
          className={`${linkClass} ${active ? "bg-foreground text-background hover:bg-foreground" : "text-muted-foreground"}`}>
          <Icon aria-hidden="true" className="size-5 shrink-0" />
          {label}
        </Link>
      )
    })
  }

  const themeToggle = (
    <button type="button" className={control} aria-label={themeLabel} title={themeLabel}
      onClick={() => setTheme(dark ? "light" : "dark")}>
      {dark ? <SunIcon aria-hidden="true" className="size-5" /> : <MoonIcon aria-hidden="true" className="size-5" />}
    </button>
  )

  return (
    <>
      <header className="relative z-40 flex items-center justify-between border-b border-border bg-background px-4 py-1 text-foreground lg:hidden"
        onKeyDown={(event) => {
          if (event.key !== "Escape" || !menu.current?.open) return
          event.preventDefault()
          closeMenu()
        }}>
        <details ref={menu}>
          <summary ref={menuTrigger} className="flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-lg px-2 text-sm font-semibold hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring [&::-webkit-details-marker]:hidden">
            <Bars3Icon aria-hidden="true" className="size-5" /> Menu
          </summary>
          <nav aria-label="Portfolio" className="absolute inset-x-0 top-full grid max-h-[calc(100dvh-3.5rem)] gap-1 overflow-y-auto border-b border-border bg-background p-3 shadow-lg sm:grid-cols-2">
            {renderLinks(true)}
          </nav>
        </details>
        {themeToggle}
      </header>
      <nav aria-label="Portfolio" data-lenis-prevent-wheel className="fixed inset-y-0 left-0 z-40 hidden w-16 flex-col items-center overflow-y-auto border-r border-border bg-background py-2 text-foreground lg:flex">
        <div className="my-auto flex flex-col items-center gap-1">
          {renderLinks(false)}
          <div className="mt-1 border-t border-border pt-2">{themeToggle}</div>
        </div>
      </nav>
    </>
  )
}
