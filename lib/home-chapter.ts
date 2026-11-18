export interface HomeChapterProgress {
  progress: number
  pinned: boolean
  visible: boolean
}

const progressByTrack = new WeakMap<HTMLElement, HomeChapterProgress>()
const rangeByTrack = new WeakMap<HTMLElement, { top: number; travel: number }>()

export function getHomeChapterProgress(track: HTMLElement) {
  return progressByTrack.get(track)
}

export function publishHomeChapterProgress(track: HTMLElement, next: HomeChapterProgress) {
  const current = progressByTrack.get(track)
  if (current?.progress === next.progress && current.pinned === next.pinned && current.visible === next.visible) return
  progressByTrack.set(track, next)
  track.dispatchEvent(new CustomEvent<HomeChapterProgress>("homechapterprogress", { detail: next }))
}

export function setHomeChapterRange(track: HTMLElement, top: number, travel: number) {
  rangeByTrack.set(track, { top, travel })
}

export function goToChapterProgress(track: HTMLElement, progress: number, behavior: ScrollBehavior = "smooth") {
  const range = rangeByTrack.get(track)
  if (range && progressByTrack.get(track)?.pinned) {
    window.scrollTo({ top: range.top + range.travel * Math.max(0, Math.min(1, progress)), behavior })
  } else {
    track.scrollIntoView({ behavior })
  }
}
