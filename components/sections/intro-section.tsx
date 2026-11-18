import { ArrowDownIcon, ArrowDownRightIcon, MapPinIcon } from "@heroicons/react/24/outline"
import { Button } from "@/components/ui/button"

export function IntroSection() {
  return (
    <section aria-labelledby="intro-name" className="relative z-10 px-5 py-12 sm:px-10 md:py-24 lg:py-32">
      <div id="about" className="mx-auto grid max-w-6xl items-center gap-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] md:gap-x-12">
        <img src="/bg_me.webp" width="460" height="460" alt="Vince Angelo Batecan" fetchPriority="high"
          className="size-24 rounded-xl object-cover sm:size-32 md:col-start-2 md:row-start-1 md:row-span-2 md:size-auto md:w-full md:rounded-2xl" />
        <header className="md:col-start-1 md:row-start-1 md:self-end">
          <p className="mb-3 flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <MapPinIcon aria-hidden="true" className="size-4" /> Valenzuela, Philippines
          </p>
          <h1 id="intro-name" className="text-[clamp(2.5rem,6vw,6rem)] leading-[0.98] font-black tracking-tight">
            Vince Angelo<br />Batecan
          </h1>
        </header>
        <div className="max-w-xl space-y-5 md:col-start-1 md:row-start-2 md:self-start">
          <p className="text-lg leading-snug font-medium sm:text-2xl">I build Java backends, web apps, and tools that connect software to hardware.</p>
          <p className="leading-relaxed text-muted-foreground">I study IT at the University of the East Caloocan and freelance on the side. My projects range from Angular apps and ESP32 devices to experiments with machine learning.</p>
          <div className="flex flex-wrap gap-2">
            <Button asChild><a href="#projects">View projects <ArrowDownRightIcon aria-hidden="true" /></a></Button>
            <Button asChild variant="outline"><a href="#contact">Get in touch</a></Button>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground [&_a:hover]:underline">
            <a href="https://github.com/vbatecan">GitHub</a>
            <a href="https://www.linkedin.com/in/vince-batecan/">LinkedIn</a>
            <a href="mailto:vbatecan@gmail.com">vbatecan@gmail.com</a>
          </div>
        </div>
      </div>
      <p data-story-scroll-cue aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-6 items-center justify-center gap-2 font-mono text-xs text-muted-foreground">
        <ArrowDownIcon className="size-3.5" /> Scroll to explore
      </p>
    </section>
  )
}
