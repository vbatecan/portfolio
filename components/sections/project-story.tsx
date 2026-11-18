"use client"

import { ArrowDownIcon, ArrowRightIcon, ArrowUpRightIcon, Squares2X2Icon } from "@heroicons/react/24/outline"
import { motion, useMotionValueEvent, useTransform, type MotionValue } from "framer-motion"
import { useLayoutEffect, useRef, useState, type RefObject } from "react"
import type { LiveStatus, Project } from "@/lib/data"
import { projectChapters } from "@/lib/project-chapters"
import styles from "./project-story.module.css"

type Chapter = (typeof projectChapters)[number]
type StageSize = { width: number; height: number; entrance: number }
type ChapterView = { current: number; phase: "chapters" | "pullback" | "overview"; compact: boolean }
type HandoffPhase = "handoff" | "catalog" | undefined

interface StoryActions {
  onOpen: (project: Project, trigger: HTMLButtonElement, cover: HTMLElement) => void
  onBrowseGroup: (status: LiveStatus, cover: HTMLElement | null) => void
}

const chapterTravel = 265
const handoffTravel = 70
export const chapterScrollEnd = chapterTravel / (chapterTravel + handoffTravel)

interface StoryScroll {
  track: RefObject<HTMLElement | null>
  scrollProgress: MotionValue<number>
  handoffProgress: MotionValue<number>
  onHandoffFocus: () => void
}

const slideEnd = 0.75
const overviewEnd = 0.97
const lastChapter = projectChapters.length - 1
const clamp = (value: number) => Math.max(0, Math.min(1, value))
const mix = (start: number, end: number, progress: number) => start + (end - start) * progress
const currentChapter = (progress: number) => Math.round(clamp(progress / slideEnd) * lastChapter)

function frameAt(index: number, progress: number, size: StageSize) {
  const { width, height, entrance } = size
  const landscape = height < 440 && width >= 480
  const columns = width >= 760 || landscape ? 5 : 2
  const rows = Math.ceil(projectChapters.length / columns)
  const edge = Math.min(52, width * 0.07)
  const gap = Math.min(18, width * 0.035)
  const panelWidth = Math.min(width - edge * 2, width * 0.84, 1040)
  const preferredHeight = landscape ? 360 : panelWidth * (width < 560 ? 0.72 : 0.51) + 146
  const entryHeight = Math.max(height - entrance - 16, Math.min(landscape ? 132 : 195, height - 16))
  const chapterHeight = Math.min(height - 16, preferredHeight)
  const arrival = clamp(progress / 0.14)
  const panelHeight = mix(Math.min(entryHeight, chapterHeight), chapterHeight, arrival)
  const position = clamp(progress / slideEnd) * lastChapter
  const zoom = clamp((progress - slideEnd) / (overviewEnd - slideEnd))
  const easedZoom = zoom * zoom * (3 - 2 * zoom)
  const tileWidth = (width - edge * 2 - gap * (columns - 1)) / columns
  const tileHeight = Math.min(tileWidth * 0.66 + 57, (height - 16 - gap * (rows - 1)) / rows)
  const deckTop = columns === 5
    ? height - tileHeight - 18
    : (height - (tileHeight * rows + gap * (rows - 1))) / 2

  return {
    x: mix(
      (width - panelWidth) / 2 + (index - position) * (panelWidth + gap),
      edge + index % columns * (tileWidth + gap),
      easedZoom,
    ),
    y: mix(
      mix(8, (height - panelHeight) / 2, arrival),
      deckTop + Math.floor(index / columns) * (tileHeight + gap),
      easedZoom,
    ),
    width: mix(panelWidth, tileWidth, easedZoom),
    height: mix(panelHeight, tileHeight, easedZoom),
    parallax: Math.max(-34, Math.min(34, (position - index) * 44)) * (1 - easedZoom),
  }
}

function ChapterContent({ chapter, actions, compact, artX, captionX, captionStyle }: {
  chapter: Chapter
  actions: StoryActions
  compact?: boolean
  artX?: MotionValue<number>
  captionX?: MotionValue<number>
  captionStyle?: { maxHeight: MotionValue<number>; opacity: MotionValue<number> }
}) {
  const cover = useRef<HTMLSpanElement>(null)
  const { project, label, count, status, story } = chapter

  return (
    <>
      <button
        type="button"
        className={styles.projectButton}
        aria-label={`Open ${project.title}`}
        onClick={(event) => {
          if (cover.current) actions.onOpen(project, event.currentTarget, cover.current)
        }}
      >
        <span className={styles.cover} ref={cover} data-story-cover={project.id}>
          <motion.img
            src={project.image || "/placeholder.svg"}
            alt=""
            decoding="async"
            className={styles.image}
            style={artX ? { x: artX } : undefined}
            draggable={false}
            onError={({ currentTarget }) => {
              if (currentTarget.getAttribute("src") !== "/placeholder.svg") currentTarget.src = "/placeholder.svg"
            }}
          />
        </span>
        {!compact && (
          <motion.span className={styles.captionClip} style={captionStyle}>
            <motion.span className={styles.projectName} style={captionX ? { x: captionX } : undefined}>
              {project.title}
              <ArrowUpRightIcon aria-hidden="true" />
            </motion.span>
          </motion.span>
        )}
      </button>
      {!compact && (
        <motion.div className={styles.captionClip} style={captionStyle}>
          <motion.p className={styles.caption} style={captionX ? { x: captionX } : undefined}>{story}</motion.p>
        </motion.div>
      )}
      <button
        type="button"
        className={styles.groupButton}
        onClick={() => actions.onBrowseGroup(status, cover.current)}
        aria-label={`Browse ${label.toLowerCase()} projects`}
      >
        <span>{label}<small>{count} projects</small></span>
        <ArrowRightIcon aria-hidden="true" />
      </button>
    </>
  )
}

function StoryPanel({ chapter, index, size, progress, fade, active, overview, compact, actions }: {
  chapter: Chapter
  index: number
  size: StageSize
  progress: MotionValue<number>
  fade: MotionValue<number>
  active: boolean
  overview: boolean
  compact: boolean
  actions: StoryActions
}) {
  const frame = useTransform(() => frameAt(index, progress.get(), size))
  const x = useTransform(frame, (next) => next.x)
  const y = useTransform(frame, (next) => next.y)
  const width = useTransform(frame, (next) => next.width)
  const height = useTransform(frame, (next) => next.height)
  const artX = useTransform(frame, (next) => next.parallax)
  const captionX = useTransform(artX, (offset) => -0.17 * offset)
  const captionHeight = useTransform(progress, [0.78, 0.9], [155, 0])
  const captionOpacity = useTransform(progress, [0.77, 0.84], [1, 0])

  return (
    <motion.article
      className={styles.panel}
      data-story-panel={chapter.status}
      data-compact={compact}
      aria-label={chapter.label}
      style={size.width ? { x, y, width, height, opacity: fade } : { left: `${8 + index * 88}%` }}
      inert={!active && !overview}
    >
      <ChapterContent
        chapter={chapter}
        actions={actions}
        compact={compact}
        artX={artX}
        captionX={captionX}
        captionStyle={{ maxHeight: captionHeight, opacity: captionOpacity }}
      />
    </motion.article>
  )
}

function ScrollStory({ track, scrollProgress, handoffProgress, onHandoffFocus, actions }: StoryScroll & { actions: StoryActions }) {
  const canvas = useRef<HTMLDivElement>(null)
  const chapterControls = useRef<(HTMLButtonElement | null)[]>([])
  const [size, setSize] = useState<StageSize>({ width: 0, height: 0, entrance: 0 })
  const [chapterView, setChapterView] = useState<ChapterView>({ current: 0, phase: "chapters", compact: false })
  const lastChapterView = useRef(chapterView)
  const { current, phase, compact } = chapterView
  const [handoffPhase, setHandoffPhase] = useState<HandoffPhase>()
  const lastHandoffPhase = useRef<HandoffPhase>(undefined)
  const chapterProgress = useTransform(scrollProgress, [0, chapterScrollEnd], [0, 1])
  const chromeFade = useTransform(handoffProgress, [0, 0.28], [1, 0])
  const backdropFade = useTransform(handoffProgress, [0.02, 0.84], [1, 0])
  const catalogTitleOpacity = useTransform(chapterProgress, [0.89, 0.97], [0, 1])

  useLayoutEffect(() => {
    const element = canvas.current
    const section = track.current
    if (!element || !section) return
    let measured: StageSize | undefined
    const measure = () => {
      const width = element.clientWidth
      const height = element.clientHeight
      const entrance = Math.max(0, window.scrollY + section.getBoundingClientRect().top)
      if (measured?.width === width && measured.height === height && measured.entrance === entrance) return
      measured = { width, height, entrance }
      setSize(measured)
    }
    const observer = new ResizeObserver(measure)
    measure()
    observer.observe(element)
    if (section.previousElementSibling) observer.observe(section.previousElementSibling)
    return () => observer.disconnect()
  }, [track])

  useMotionValueEvent(chapterProgress, "change", (progress) => {
    const nextChapter = currentChapter(progress)
    if (progress < overviewEnd) {
      const focusedPanel = document.activeElement?.closest<HTMLElement>("[data-story-panel]")
      if (canvas.current?.contains(focusedPanel ?? null)
        && focusedPanel?.dataset.storyPanel !== projectChapters[nextChapter]?.status) {
        chapterControls.current[nextChapter]?.focus({ preventScroll: true })
      }
    }

    const nextPhase = progress >= overviewEnd ? "overview" : progress > slideEnd ? "pullback" : "chapters"
    const nextCompact = progress > 0.9
    const previous = lastChapterView.current
    if (previous.current === nextChapter && previous.phase === nextPhase && previous.compact === nextCompact) return

    lastChapterView.current = { current: nextChapter, phase: nextPhase, compact: nextCompact }
    setChapterView(lastChapterView.current)
  })

  useMotionValueEvent(handoffProgress, "change", (progress) => {
    if (progress > 0 && track.current?.contains(document.activeElement)) onHandoffFocus()
    const nextPhase = progress === 0 ? undefined : progress === 1 ? "catalog" : "handoff"
    if (nextPhase === lastHandoffPhase.current) return

    lastHandoffPhase.current = nextPhase
    setHandoffPhase(nextPhase)
  })

  function seek(progress: number) {
    const element = track.current
    if (!element) return
    const stageHeight = element.firstElementChild?.getBoundingClientRect().height ?? window.innerHeight
    const travel = (element.offsetHeight - stageHeight) * chapterScrollEnd
    const top = window.scrollY + element.getBoundingClientRect().top
    window.scrollTo({ top: top + travel * progress, behavior: "smooth" })
  }

  return (
    <section ref={track} className={styles.track} style={{ height: `${100 + chapterTravel + handoffTravel}dvh` }}
      data-project-story aria-label="Project story">
      <div className={styles.stage} data-story-stage data-story-phase={handoffPhase ?? phase} inert={!!handoffPhase}>
        <motion.div className={styles.backdrop} style={{ opacity: backdropFade }} aria-hidden="true" />
        <motion.div className={styles.controls} style={{ opacity: chromeFade }}>
          <nav aria-label="Project chapters" className={styles.chapterControls}>
            {projectChapters.map((chapter, index) => (
              <button
                key={chapter.status}
                ref={(element) => { chapterControls.current[index] = element }}
                type="button"
                className={styles.chapterButton}
                aria-label={`Go to chapter ${index + 1}, ${chapter.label}`}
                aria-current={phase === "chapters" && current === index ? "step" : undefined}
                title={chapter.label}
                onClick={() => seek(slideEnd * index / lastChapter)}
              >
                {String(index + 1).padStart(2, "0")}
              </button>
            ))}
          </nav>
          <button
            type="button"
            className={styles.overviewButton}
            aria-label="Show chapter overview"
            aria-pressed={phase === "overview"}
            onClick={() => seek(0.99)}
          >
            <Squares2X2Icon aria-hidden="true" />
            <span>Overview</span>
          </button>
        </motion.div>
        <div className={styles.canvas} ref={canvas}>
          <motion.div className={styles.overviewTitle} style={{ opacity: catalogTitleOpacity }} aria-hidden="true">
            <motion.span style={{ opacity: chromeFade }}>Project catalog</motion.span>
          </motion.div>
          {projectChapters.map((chapter, index) => (
            <StoryPanel
              key={chapter.status}
              chapter={chapter}
              index={index}
              size={size}
              progress={chapterProgress}
              fade={chromeFade}
              active={current === index}
              overview={phase === "overview"}
              compact={compact}
              actions={actions}
            />
          ))}
        </div>
        <motion.p className={styles.scrollPrompt} style={{ opacity: chromeFade }} aria-hidden="true">
          <ArrowDownIcon /> {phase === "overview" ? "Continue to the catalog" : "Scroll through the chapters"}
        </motion.p>
      </div>
    </section>
  )
}

export function ProjectStory({ track, scrollProgress, handoffProgress, onHandoffFocus, ...actions }: StoryScroll & StoryActions) {
  return (
    <>
      <ScrollStory track={track} scrollProgress={scrollProgress} handoffProgress={handoffProgress}
        onHandoffFocus={onHandoffFocus} actions={actions} />
      <section className={styles.staticIndex} aria-label="Project chapters">
        {projectChapters.map((chapter) => (
          <article key={chapter.status} className={styles.staticPanel} data-story-panel={chapter.status} aria-label={chapter.label}>
            <ChapterContent chapter={chapter} actions={actions} />
          </article>
        ))}
      </section>
    </>
  )
}
