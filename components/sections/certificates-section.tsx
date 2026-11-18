import { Fragment } from "react"
import { ArrowsPointingOutIcon, CalendarIcon, DocumentTextIcon, TrophyIcon } from "@heroicons/react/24/outline"
import { Card } from "@/components/ui/card"
import { CertificateTimeline } from "./certificate-timeline"

const ciscoImage = { src: "/assets/others/cisco.jpg?height=100&width=100", width: 1024, height: 1024 }

const certificates = [
  {
    title: "Computer Hardware Basics",
    issuer: "Cisco",
    date: "May 2025",
    credentialId: "58a30888-d92d-4cc3-87b3-4daa1f550789",
    credentialUrl: "https://www.credly.com/badges/58a30888-d92d-4cc3-87b3-4daa1f550789/linked_in_profile",
    image: ciscoImage,
    description: "Hardware components, assembly, and troubleshooting fundamentals",
    skills: ["Hardware", "Assembly", "Troubleshooting"],
  },
  {
    title: "Operating Systems Basics",
    issuer: "Cisco",
    date: "May 2025",
    credentialId: "32f6a9c2-a38f-4973-9567-ace1ccb8f1b1",
    credentialUrl: "https://www.credly.com/badges/32f6a9c2-a38f-4973-9567-ace1ccb8f1b1/linked_in_profile",
    image: ciscoImage,
    description: "OS concepts: Windows, Linux, system administration, and command line",
    skills: ["Linux", "Windows", "SysAdmin", "CLI"],
  },
  {
    title: "Ethical Hacking Fundamentals",
    issuer: "EC-Council",
    date: "2025",
    image: { src: "/certificates/fundamentals_of_ethical_hacking.jpg", width: 1755, height: 1240 },
    description: "Ethical hacking methodologies, tools, and security fundamentals",
    skills: ["PenTesting", "Cybersecurity", "Security"],
    clickable: true,
  },
  {
    title: "ACSS Code Start",
    issuer: "UE Caloocan",
    date: "October 2025",
    image: { src: "/certificates/ecert_acss.jpg", width: 1755, height: 1242 },
    description: "Python, Java OOP, and computational concepts workshop",
    skills: ["Python", "Java", "OOP"],
    clickable: true,
  },
  {
    title: "Library Science",
    issuer: "UE Caloocan",
    date: "2025",
    image: { src: "/certificates/library.jpg", width: 1500, height: 844 },
    description: "Library science and information management",
    skills: ["Research", "Info Management"],
    clickable: true,
  },
  {
    title: "AI Labs CX Grand Prize Winner",
    issuer: "AI Labs CX",
    date: "2026",
    image: { src: "/certificates/hackthefuture_grandprize.png", width: 2048, height: 1085 },
    description: "Grand prize winner for Hack the Future 2026 — awarded with 1 year free AI Labs Chat access.",
    skills: ["AI", "Hackathon", "Innovation", "Problem Solving"],
    clickable: true,
  }
]

export const CertificatesSection = () => {
  const credentials = certificates.map(({ title, issuer, image, date }) => ({
    title, issuer, image, year: date.slice(-4),
  }))

  return (
    <section className="py-20 px-4 relative z-10 bg-gray-50/50 dark:bg-gray-800/50 lg:py-6">
      <div className="max-w-6xl mx-auto">
        <CertificateTimeline credentials={credentials} heading={<div className="mb-10 lg:mb-8">
          <p className="font-mono text-sm text-secondary mb-2 tracking-widest uppercase">
            <DocumentTextIcon className="inline h-4 w-4 mr-2" />
            ls -la ./certificates/
          </p>
          <h2 className="section-title mb-4">What I’ve Earned Along the Way</h2>
          <div className="accent-line mb-6"></div>
        </div>}>
          {certificates.map((cert, index) => {
            const preview = (
              <img
                {...cert.image}
                alt=""
                loading="lazy"
                decoding="async"
                className="max-h-64 w-full rounded-xl object-contain md:max-h-20"
              />
            )

            return (
              <Fragment key={cert.title}>
                {(index === 0 || credentials[index].year !== credentials[index - 1].year) && (
                  <h3 className="font-mono text-sm font-semibold text-muted-foreground">{credentials[index].year}</h3>
                )}
                <article>
                  <Card className="flex h-full flex-col rounded-2xl border-0 bg-white/80 p-4 shadow-lg backdrop-blur-sm transition-shadow duration-300 hover:shadow-xl dark:bg-gray-800/80">
                    <div className="mb-3 flex flex-col gap-3 md:flex-row md:items-start">
                      <div className="w-full shrink-0 md:w-28">
                        {cert.clickable ? (
                          <a
                            href={cert.image.src}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open ${cert.title} at full size`}
                            className="group/preview relative block rounded-xl bg-muted/50 outline-offset-4 focus-visible:outline-2 focus-visible:outline-ring"
                          >
                            {preview}
                            <span className="absolute right-2 bottom-2 rounded-full bg-background/90 p-1.5 text-foreground shadow-sm transition-colors group-hover/preview:bg-background">
                              <ArrowsPointingOutIcon aria-hidden="true" className="size-3.5" />
                            </span>
                          </a>
                        ) : preview}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="mb-1 text-sm font-bold text-foreground">{cert.title}</h3>
                        <p className="font-mono text-xs text-secondary">{cert.issuer}</p>
                      </div>
                    </div>

                    <p className="mb-3 flex-1 text-sm text-gray-600 dark:text-gray-400">{cert.description}</p>

                    <div className="mb-3 flex flex-wrap gap-1.5">
                      {cert.skills.map((skill) => (
                        <span key={skill} className="tech-tag text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex items-center justify-between border-t border-gray-200 pt-3 dark:border-gray-700">
                      <div className="flex items-center gap-1.5 font-mono text-xs text-gray-500">
                        <CalendarIcon aria-hidden="true" className="h-3 w-3" />
                        {cert.date}
                      </div>
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 font-mono text-xs text-primary hover:underline"
                        >
                          <TrophyIcon aria-hidden="true" className="h-3 w-3" />
                          Verify
                        </a>
                      )}
                    </div>
                  </Card>
                </article>
              </Fragment>
            )
          })}
        </CertificateTimeline>
      </div>
    </section>
  )
}
