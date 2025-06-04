import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "John Developer - Portfolio",
  description: "Full-Stack Developer & AI Enthusiast crafting digital experiences that matter",
  keywords: "developer, portfolio, full-stack, react, node.js, web development",
  authors: [{ name: "John Developer" }],
  openGraph: {
    title: "John Developer - Portfolio",
    description: "Full-Stack Developer & AI Enthusiast crafting digital experiences that matter",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
