import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Fira_Code } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CursorLens } from "@/components/cursor-lens"
import { SideNav } from "@/components/navigation/side-nav"
import { SmoothScroll } from "@/components/navigation/smooth-scroll"

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"] })
const firaCode = Fira_Code({ 
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Vince Angelo Batecan",
  description: "Full-Stack Developer & AI Enthusiast crafting digital experiences that matter",
  keywords: "developer, portfolio, full-stack, react, node.js, web development, vince angelo batecan",
  authors: [{ name: "Vince Angelo Batecan" }],
  openGraph: {
    title: "Vince Angelo Batecan",
    description: "Full-Stack Developer & AI Enthusiast crafting digital experiences that matter",
    type: "website",
  },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakarta.className} ${firaCode.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <SideNav />
          <SmoothScroll />
          <div className="lg:pl-16">{children}</div>
          <CursorLens />
        </ThemeProvider>
      </body>
    </html>
  )
}
