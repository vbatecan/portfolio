"use client"

import { Card } from "@/components/ui/card"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards, Navigation, Pagination } from "swiper/modules"
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-cards"
import "swiper/css/navigation"
import "swiper/css/pagination"

// Helper component to render beautiful high-fidelity SVG logos of technologies
const TechIcon = ({ name }: { name: string }) => {
  switch (name) {
    case "Next.js":
      return (
        <svg viewBox="0 0 180 180" fill="none" className="w-full h-full">
          <circle cx="90" cy="90" r="90" fill="currentColor" className="text-gray-900 dark:text-white" />
          <path d="M149.5 157.5L69.1 54H54v72h14.4V69.8l67.2 87.7zM126 108V54h-14.4v54z" fill="currentColor" className="text-white dark:text-black" />
        </svg>
      )
    case "React":
      return (
        <svg viewBox="-11.5 -10.2 23 20.4" className="w-full h-full">
          <circle cx="0" cy="0" r="2" fill="#61dafb" />
          <g stroke="#61dafb" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      )
    case "Angular":
      return (
        <svg viewBox="0 0 250 250" fill="none" className="w-full h-full">
          <polygon points="125,30 31.9,63.2 46.1,186.3 125,230 203.9,186.3 218.1,63.2" fill="#DD0031" />
          <polygon points="125,30 125,230 203.9,186.3 218.1,63.2" fill="#C3002F" />
          <path d="M125,52.1 L66.8,182.6 L90.4,182.6 L102.3,153.2 L147.7,153.2 L159.6,182.6 L183.2,182.6 L125,52.1 Z M125,98.3 L139.7,134.6 L110.3,134.6 L125,98.3 Z" fill="#FFFFFF" />
        </svg>
      )
    case "TypeScript":
      return (
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <rect width="100" height="100" fill="#3178C6" rx="16" />
          <path d="M25 30h30v8H43v32h-8V38H25v-8z M62 48c0-5 3-7 8-7s8 2 8 7v4H70v-4c0-2-1-3-3-3s-3 1-3 3v4c0 3 2 5 5 6l6 2c4 1 6 4 6 8v4c0 5-3 7-8 7s-8-2-8-7v-4h8v4c0 2 1 3 3 3s3-1 3-3v-4c0-3-2-5-5-6l-6-2c-4-1-6-4-6-8v-4z" fill="white" />
        </svg>
      )
    case "HTML5":
      return (
        <svg viewBox="0 0 512 512" className="w-full h-full">
          <path fill="#E34F26" d="M71,460 L37,0 475,0 441,460 256,512z" />
          <path fill="#EF652A" d="M256,472 L407,430 433,73 256,73z" />
          <path fill="#EBEBEB" d="M256,268 L202,268 198,224 256,224 256,177 150,177 160,285 161,299 162,315 256,315z M256,397 L256,347 212,335 163,308 171,390z" />
          <path fill="#FFFFFF" d="M256,268 L256,315 304,315 299,368 256,380 256,430 338,407 348,299 350,268z M256,177 L256,224 355,224 359,177z" />
        </svg>
      )
    case "Tailwind CSS":
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path d="M12 4.8C8.8 4.8 6.8 6.4 6 9.6c1.2-1.6 2.6-2.2 4.2-1.8 1 .25 1.64.9 2.4 1.67 1.22 1.24 2.63 2.67 5.6 2.67 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.93-.24-1.6-.9-2.35-1.67-.93-.94-2.1-2.13-5.65-2.13zM6 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8 1 .25 1.64.9 2.4 1.67 1.22 1.24 2.63 2.67 5.6 2.67 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.93-.24-1.6-.9-2.35-1.67-.93-.94-2.1-2.13-5.65-2.13z" fill="#06B6D4" />
        </svg>
      )
    case "Spring Boot":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <rect width="24" height="24" rx="6" fill="#6DB33F" />
          <path d="M12 5c-3.8 0-7 3.2-7 7s3.2 7 7 7 7-3.2 7-7-3.2-7-7-7zm-1 9.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5.2-.5.5-.5.5.2.5.5zm.3-2.6c-.1.1-.3.2-.5.2-.4 0-.7-.3-.7-.7 0-.2.1-.4.2-.5l1.9-1.9c.1-.1.3-.2.5-.2.4 0 .7.3.7.7 0 .2-.1.4-.2.5l-1.9 1.9z" fill="white" />
        </svg>
      )
    case "Quarkus":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <rect width="24" height="24" rx="6" fill="#4695EB" />
          <circle cx="12" cy="12" r="3" fill="white" />
          <path d="M12 6a6 6 0 016 6M12 18a6 6 0 01-6-6" stroke="white" strokeWidth="2" />
        </svg>
      )
    case "Flask":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-full h-full text-green-600 dark:text-green-400">
          <path d="M6 3h12M12 3v6M8.5 9h7M9 3v6M15 3v6M12 9l-6 10a2 2 0 002 3h8a2 2 0 002-3L12 9z" />
        </svg>
      )
    case "Java":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <path d="M2 15c0 3.87 3.13 7 7 7h5c3.87 0 7-3.13 7-7v-3H2v3z" fill="#007398" />
          <path d="M19 12h2v-2h-2v2z" fill="#007398" />
          <path d="M9 10c0-3 3-5 3-7s-1-3-1-3m4 10c0-3 2-4 2-6s-1-3-1-3" stroke="#ea2d2e" strokeWidth="1.8" />
        </svg>
      )
    case "Python":
      return (
        <svg viewBox="0 0 110 110" className="w-full h-full">
          <path fill="#3776AB" d="M52.3 2.1c-13.5 0-25.1.8-25.1 4.7v10.5h25.7v3.6H27.2S11.4 22 11.4 39.8c0 17.8 14 19 14 19h8.4v-11.7c0-8.9 7.7-16.3 16.6-16.3h25.7s12.5-.2 12.5-12.7c0-12.5-12.6-16-23.7-16-12.6 0-12.6 0-12.6 0zm-8.8 6c2.4 0 4.4 2 4.4 4.3 0 2.4-2 4.4-4.4 4.4s-4.3-2-4.3-4.4c0-2.3 1.9-4.3 4.3-4.3z" />
          <path fill="#FFD343" d="M57.7 107.9c13.5 0 25.1-.8 25.1-4.7V92.7H57.1v-3.6h25.7s15.8-1.1 15.8-18.9c0-17.8-14-19-14-19h-8.4V63c0 8.9-7.7 16.3-16.6 16.3H33.9S21.4 79.5 21.4 92c0 12.5 12.6 16 23.7 16 12.6 0 12.6 0 12.6 0zm8.8-6c-2.4 0-4.4-2-4.4-4.3 0-2.4 2-4.4 4.4-4.4s4.3 2 4.3 4.4c0 2.3-1.9 4.3-4.3 4.3z" />
        </svg>
      )
    case "GraphQL":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path fill="#E10098" d="M50 2.5L7.2 27.2v49.4L50 97.5l42.8-24.9V27.2L50 2.5zm0 10.3l33.8 19.5v39.1L50 91.5 16.2 71.9V32.3L50 12.8z" />
          <circle cx="50" cy="50" r="10" fill="#E10098" />
          <circle cx="50" cy="8.5" r="6" fill="#E10098" />
          <circle cx="85.9" cy="29.2" r="6" fill="#E10098" />
          <circle cx="85.9" cy="70.8" r="6" fill="#E10098" />
          <circle cx="50" cy="91.5" r="6" fill="#E10098" />
          <circle cx="14.1" cy="70.8" r="6" fill="#E10098" />
          <circle cx="14.1" cy="29.2" r="6" fill="#E10098" />
          <path stroke="#E10098" strokeWidth="3" d="M50 8.5L85.9 70.8M85.9 70.8L14.1 70.8M14.1 70.8L50 8.5M85.9 29.2L50 91.5M50 91.5L14.1 29.2M14.1 29.2L85.9 29.2" />
        </svg>
      )
    case "PostgreSQL":
      return (
        <svg viewBox="0 0 250 250" fill="none" className="w-full h-full">
          <path d="M123.6 86.8c3.2-1.7 6.6-3 10-4.1-1.6 3.1-2.9 6.4-3.7 9.8l.2-.1c4-1.6 8.3-2.9 12.6-3.8-1.5 2.2-2.9 4.6-4 7.1h.1c4.5-1.4 9.1-2.5 13.8-3.3-1.6 2-3.1 4.1-4.4 6.3h.1c8.1-2 16.4-3.2 24.8-3.4.1.8.2 1.6.3 2.5 2 13-1.4 26-9.1 36.6h.1c3.5 1 6.8 2.5 9.8 4.6l-3.3 1.9c1 1.7 1.8 3.5 2.5 5.4h-.1c-1.3-.2-2.7-.4-4-.5h-.1c2.1 3.5 3.5 7.4 4.1 11.4h-.1c-3.1-2.6-6.8-4.5-10.7-5.5h-.1c.3 4.3-.2 8.7-1.4 12.8h-.1c-1.9-5-4.8-9.4-8.7-13h-.2c-3.6 7.4-8.8 13.7-15.3 18.5 7-.9 13.9-3.4 19.8-7.3 2.7-1.8 5.2-3.8 7.4-6.1h.1c-1 3.9-2.7 7.5-5.1 10.7-3.9 5.3-9.1 9.4-15.1 12.2h.1c6.5.6 13-.6 18.7-3.6 2.2-1.2 4.3-2.6 6.1-4.3h.1c-2.4 4.5-5.8 8.3-9.9 11.1-6.1 4.1-13.3 6.4-20.7 6.7h.1c5.2.9 10.5.8 15.6-.4l-5.6 4.7c6.1.4 12.1-1.3 17.2-4.7-6.2 5.5-14.2 8.7-22.5 9.1 5 .2 10.1-.4 14.8-1.9l-6.3 4.1c6.3.3 12.5-1.7 17.6-5.6l-10.6 6.7c7 .7 14-1.5 19.6-6.1h-.2c-15 15.3-37.1 23-58.8 20.4H124c-2 0-3.9.1-5.9.3H118c-12 1.3-24.1 1.4-36.1.1l5.5-2.2c-5.8.5-11.7.3-17.5-.5h-.1c7.2-2.1 13.8-5.9 19.3-11.1l-6.9 2c8.1-3.9 14.9-10.1 19.8-17.7 2.1-3.2 3.8-6.7 5.1-10.3h-.1c-6.1.1-12.1-.9-17.8-2.9 4-3.1 8.8-5.1 13.9-5.7 3.5-.5 7.1-.4 10.6.1h-.1c-7-.6-13.9-2.7-19.8-6.1 4.3-1.6 9-2.3 13.6-2l-14.6-3.8c7.4-1.2 14.9-1.1 22.3.4l-18.7-6c8.5-.7 16.9.7 24.6 4.1 2.3-4.5 4.1-9.2 5.4-14.2h-.1c-13.2 2-26.6 1.4-39.5-1.7l16 1.4c-9.1-.5-18-2.6-26.3-6.2l14.9.4c-9.9-1.9-19.3-5.9-27.7-11.8l16.1 1.5c-9.1-3.2-17.4-8.2-24.3-14.7H66c-5.1-4.8-9.4-10.5-12.7-16.7h.1c2 5.4 5.3 10.2 9.5 14l-6.2-7.5c1.4 3.7 3.5 7.1 6.1 10.1h-.1C56.6 122.9 52 113.8 49 104c-.3-.9-.5-1.9-.7-2.9l4.5 5.5c-1.3-3.7-2.1-7.5-2.4-11.4h.1c-1.9 10.7-1 21.6 2.7 31.8.8-5.2 2.3-10.3 4.5-15.1.7 5 2.1 9.9 4.2 14.5l1.6-9.5c.3 4.5 1.3 9 2.9 13.3H74c-4-9-5.6-18.8-4.6-28.7 1.8 4.7 4.5 9.1 7.9 12.8 1.1-4.7 3-9.1 5.6-13.1 1 3.5 2.6 6.8 4.7 9.8l1.4-8.5c2 4 4.7 7.7 8 10.8l-.4-8c4 3.8 8.7 6.9 13.8 9.2-.9-4.8-.8-9.8.3-14.5h-.1c5 5.4 11.2 9.7 18.1 12.5h.1c-4.4-8-5.5-17.2-3.3-25.9h-.1c11.5 5.6 24.6 7.4 37.2 5.2h-.1c-12.6-9.8-19.7-24.7-19.6-40.4l.2.3z" fill="#336791" />
        </svg>
      )
    case "Redis":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path fill="#D82C20" d="M50 5L10 25v16l40 20 40-20V25L50 5z" />
          <path fill="#A31F17" d="M10 25l40 20v16L10 45V25z" />
          <path fill="#EC564B" d="M50 45l40-20-40-20-40 20 40 20z" />
          <g transform="translate(0, 24)">
            <path fill="#D82C20" d="M50 5L10 25v16l40 20 40-20V25L50 5z" />
            <path fill="#A31F17" d="M10 25l40 20v16L10 45V25z" />
            <path fill="#EC564B" d="M50 45l40-20-40-20-40 20 40 20z" />
          </g>
          <g transform="translate(0, 48)">
            <path fill="#D82C20" d="M50 5L10 25v16l40 20 40-20V25L50 5z" />
            <path fill="#A31F17" d="M10 25l40 20v16L10 45V25z" />
            <path fill="#EC564B" d="M50 45l40-20-40-20-40 20 40 20z" />
          </g>
        </svg>
      )
    case "MongoDB":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <path d="M12 2C9.5 5 7 9.5 7 13.5c0 3 2 5.5 5 6.5V22h1v-2c3-1 5-3.5 5-6.5C18 9.5 15.5 5 12 2zm0 16c-2 0-3.5-1.5-3.5-3.5 0-2.5 1.5-5.5 3.5-7.5V18z" fill="#47A248" />
          <path d="M12 7c2 2 3.5 5 3.5 7.5 0 2-1.5 3.5-3.5 3.5V7z" fill="#3F3F3F" />
        </svg>
      )
    case "MySQL":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <path d="M12.1 2c-3.1 0-6.1 1.7-7.7 4.5-1 1.7-1.3 3.7-1.1 5.6C3.5 13.9 5 16 7 17.5c2.3 1.7 5.1 2.5 8 2.5 3.8 0 7.4-1.9 9-5.1.7-1.5.8-3.1.6-4.7-.5-3.5-3.5-6.2-7.1-7.2-1.7-.5-3.6-.7-5.4-.5z" fill="#00758F" />
          <path d="M11 6c-1.5 1.5-2 3.5-1.5 5.5s2 3.5 4 4.5" stroke="#F29111" strokeWidth="2.2" />
        </svg>
      )
    case "SQLite":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <rect width="24" height="24" rx="6" fill="#003B57" />
          <path d="M7 14l2-4 4-2 4 2 2 4-2 4-4 2-4-2z" fill="white" opacity="0.3" />
          <path d="M7 14l6-6M9 16l6-6M11 18l6-6" stroke="white" strokeWidth="1.8" />
        </svg>
      )
    case "Lighthouse":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <path d="M12 2L9 8h6l-3-6z" fill="#F44336" />
          <path d="M9 8h6v12H9V8z" fill="#ECEFF1" />
          <path d="M10 8h4v12h-4V8z" fill="#CFD8DC" />
          <path d="M12 20v2M8 22h8" stroke="currentColor" strokeWidth="1.5" />
          <path d="M5 6L2 5m0 0l3-1M2 5h4M19 6l3-1m0 0l-3-1m3 1h-4" stroke="#FFEB3B" strokeWidth="1.5" />
        </svg>
      )
    case "Vite":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <path d="M12 2L3 11h8l-2 11 11-11h-8l2-9z" fill="#BD34FE" />
        </svg>
      )
    case "Webpack":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" stroke="#8ED6FB" strokeWidth="2" />
          <path d="M12 22V12M3 7l9 5 9-5" stroke="#1D78C1" strokeWidth="1.5" />
          <path d="M12 12l9 5M12 12L3 17" stroke="#1D78C1" strokeWidth="1.5" />
        </svg>
      )
    case "Grafana":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <rect width="24" height="24" rx="6" fill="#F47A20" />
          <path d="M6 14h2v4H6v-4zm4-6h2v10h-2V8zm4 4h2v6h-2v-6z" fill="white" />
        </svg>
      )
    case "Prometheus":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <rect width="24" height="24" rx="6" fill="#E6522C" />
          <circle cx="12" cy="12" r="5" fill="white" />
          <circle cx="12" cy="12" r="3" fill="#E6522C" />
        </svg>
      )
    case "ESP32":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#E7352C" strokeWidth="2" className="w-full h-full">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
        </svg>
      )
    case "Arduino":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <path d="M7 8a4 4 0 00-4 4 4 4 0 004 4c2.5 0 3.5-2 5-4 1.5-2 2.5-4 5-4a4 4 0 004 4 4 4 0 00-4 4c-2.5 0-3.5-2-5-4-1.5-2-2.5-4-5-4z" stroke="#00979D" strokeWidth="2.5" />
          <path d="M6 12h2M7 11v2M16 12h2" stroke="#00979D" strokeWidth="1.8" />
        </svg>
      )
    case "Raspberry Pi":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <path d="M12 6a3 3 0 00-3-3 1 1 0 00-1 1v2h8V4a1 1 0 00-1-1 3 3 0 00-3 3z" fill="#46A040" />
          <path d="M12 9a4 4 0 100 8 4 4 0 000-8z" fill="#C51A4A" />
          <circle cx="8" cy="11" r="2.5" fill="#C51A4A" />
          <circle cx="16" cy="11" r="2.5" fill="#C51A4A" />
          <circle cx="10" cy="15" r="2.5" fill="#C51A4A" />
          <circle cx="14" cy="15" r="2.5" fill="#C51A4A" />
        </svg>
      )
    case "C++":
      return (
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="#00599C" />
          <path d="M50 35H38v30h12v8H30V27h20v8z M57 44h8v4h-8v8h-4v-8h-8v-4h8v-8h4v8z M75 44h8v4h-8v8h-4v-8h-8v-4h8v-8h4v8z" fill="white" />
        </svg>
      )
    case "MQTT":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#660066" strokeWidth="2.2" className="w-full h-full">
          <circle cx="12" cy="5" r="3" />
          <circle cx="5" cy="19" r="3" />
          <circle cx="19" cy="19" r="3" />
          <path d="M12 8v8M5 16l5-5M19 16l-5-5" />
        </svg>
      )
    case "Docker":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <path d="M13.8 6h2.2v2.2h-2.2V6zm-3.2 0H12.8v2.2H10.6V6zm-3.2 0H9.6v2.2H7.4V6zm-3.2 0H6.4v2.2H4.2V6zM13.8 2.8h2.2v2.2h-2.2V2.8zm-3.2 0H12.8v2.2H10.6V2.8zm-3.2 0H9.6v2.2H7.4V2.8zm6.4 6.4h2.2v2.2h-2.2V9.2zm-3.2 0H12.8v2.2H10.6V9.2zm-3.2 0H9.6v2.2H7.4V9.2zm-3.2 0H6.4v2.2H4.2V9.2zm18 3.2s-.8-.8-2-.8H1.4C.6 11.6 0 12.2 0 13c0 .8.6 1.4 1.4 1.4h19.2c1.2 0 2-.8 2-2zm-3.8.4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm-2.4 2.2c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" fill="#2496ED" />
        </svg>
      )
    case "Kubernetes":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <path d="M12 2L3 6.5v11L12 22l9-4.5v-11L12 2z" stroke="#326CE5" strokeWidth="2.5" />
          <circle cx="12" cy="12" r="3" stroke="#326CE5" strokeWidth="2" />
          <path d="M12 2v7M3 6.5l6 3.5M21 6.5l-6 3.5M3 17.5l6-3.5M21 17.5l-6-3.5M12 22v-7" stroke="#326CE5" strokeWidth="1.8" />
        </svg>
      )
    case "AWS":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10-10-4.48-10-10S6.48 2 12 2zm1 14.5c2.5-1 4.5-3 5-5.5.5-2.5 0-4.5-1-6.5C16 6 14 7 12.5 8.5" stroke="#FF9900" strokeWidth="2" />
          <path d="M6 15c2 2 5 2.5 8 1.5 2-.7 3.5-2 4.5-3.5" stroke="#FF9900" strokeWidth="2" />
          <path d="M18 13l2 2-2 2" stroke="#FF9900" strokeWidth="2" />
        </svg>
      )
    case "GCP":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" fill="#4285F4" opacity="0.2" />
          <path d="M12 2L4 7l8 5 8-5-8-5z" fill="#EA4335" />
          <path d="M4 7v10l8 5v-10L4 7z" fill="#34A853" />
          <path d="M20 7v10l-8 5v-10l8-5z" fill="#4285F4" />
        </svg>
      )
    case "GitHub Actions":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-full h-full text-gray-800 dark:text-white">
          <rect width="20" height="20" x="2" y="2" rx="5" />
          <path d="M9 17V7l7 5-7 5z" fill="currentColor" />
        </svg>
      )
    default:
      return null
  }
}

const services = [
  {
    title: "Full-Stack Web Development",
    subtitle: "Web, Mobile & SaaS Applications",
    description:
      "Build responsive, scalable web applications with modern frameworks. From landing pages to complex dashboards, I deliver clean code that scales.",
    technologies: [
      { name: "Next.js" },
      { name: "React" },
      { name: "Angular" },
      { name: "TypeScript" },
      { name: "HTML5" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend APIs & Microservices",
    subtitle: "REST APIs, GraphQL & Server Architecture",
    description:
      "Design and implement robust backend systems that handle high traffic and complex business logic. Focus on security, scalability, and maintainability.",
    technologies: [
      { name: "Spring Boot" },
      { name: "Quarkus" },
      { name: "Flask" },
      { name: "Java" },
      { name: "Python" },
      { name: "GraphQL" },
    ],
  },
  {
    title: "Database Design & Optimization",
    subtitle: "SQL + NoSQL Solutions",
    description:
      "Design efficient database schemas, write complex queries, optimize slow queries, and implement caching strategies for high-performance applications.",
    technologies: [
      { name: "PostgreSQL" },
      { name: "Redis" },
      { name: "MongoDB" },
      { name: "MySQL" },
      { name: "SQLite" },
    ],
  },
  {
    title: "Performance & Monitoring",
    subtitle: "Fast & Reliable Systems",
    description:
      "Audit application performance, identify bottlenecks, and implement optimizations. Set up logging, monitoring, and alerting for production systems.",
    technologies: [
      { name: "Lighthouse" },
      { name: "Vite" },
      { name: "Webpack" },
      { name: "Grafana" },
      { name: "Prometheus" },
    ],
  },
  {
    title: "IoT & Hardware Integration",
    subtitle: "Embedded Systems & Device Control",
    description:
      "Bring your hardware ideas to life. From ESP32 projects to custom sensors, I create systems that bridge the physical and digital worlds.",
    technologies: [
      { name: "ESP32" },
      { name: "Arduino" },
      { name: "Raspberry Pi" },
      { name: "C++" },
      { name: "MQTT" },
    ],
  },
  {
    title: "Security & DevOps",
    subtitle: "Secure Deployments & CI/CD",
    description:
      "Implement security best practices and automate deployments. Set up continuous integration pipelines that make releases reliable and stress-free.",
    technologies: [
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "AWS" },
      { name: "GCP" },
      { name: "GitHub Actions" },
    ],
  },
]

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-4 relative z-10 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading, description, and navigation */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="font-mono text-sm text-secondary mb-2 tracking-widest uppercase text-primary/70">
                ~/services
              </p>
              <h2 className="section-title mb-4">My Services</h2>
              <div className="accent-line mb-6"></div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base md:text-lg">
              I build complete, secure, and highly optimized digital systems. Drag or swipe the cards to explore my capabilities across full-stack development, embedded hardware IoT, database engineering, and microservices.
            </p>

            {/* Custom Navigation & Pagination */}
            <div className="flex items-center gap-4 pt-4">
              <button 
                className="swiper-button-prev-custom p-3 rounded-full border border-gray-200 dark:border-gray-800 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all text-gray-800 dark:text-gray-200 shadow-sm active:scale-95 disabled:opacity-40 disabled:pointer-events-none"
                aria-label="Previous service"
              >
                <ArrowLeftIcon className="h-5 w-5" />
              </button>
              <button 
                className="swiper-button-next-custom p-3 rounded-full border border-gray-200 dark:border-gray-800 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all text-gray-800 dark:text-gray-200 shadow-sm active:scale-95 disabled:opacity-40 disabled:pointer-events-none"
                aria-label="Next service"
              >
                <ArrowRightIcon className="h-5 w-5" />
              </button>
              <div className="swiper-pagination-custom font-mono text-sm text-secondary font-medium ml-2"></div>
            </div>

            {/* CTA Option */}
            <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
              <p className="text-gray-500 dark:text-gray-400 text-sm">Need a custom end-to-end integration?</p>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="mt-3 px-6 py-2.5 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity text-sm font-mono shadow-md hover:shadow-lg"
              >
                contact.init()
              </button>
            </div>
          </div>

          {/* Right Column: Stacked Cards Deck */}
          <div className="lg:col-span-7 flex justify-center w-full overflow-hidden py-8 px-4">
            <div className="w-full max-w-[450px]">
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards, Navigation, Pagination]}
                navigation={{
                  nextEl: ".swiper-button-next-custom",
                  prevEl: ".swiper-button-prev-custom",
                }}
                pagination={{
                  el: ".swiper-pagination-custom",
                  type: "fraction",
                }}
                cardsEffect={{
                  slideShadows: false,
                  rotate: true,
                  perSlideRotate: 3,
                  perSlideOffset: 10,
                }}
                className="services-swiper"
              >
                {services.map((service, index) => (
                  <SwiperSlide key={service.title} className="h-full">
                    <Card className="h-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border border-gray-200 dark:border-gray-800 shadow-2xl rounded-3xl p-8 flex flex-col justify-between min-h-[480px] transition-all duration-300">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 tracking-wide uppercase">
                            {service.subtitle}
                          </span>
                          <span className="font-mono text-xs text-secondary/60">
                            [0{index + 1} / 0{services.length}]
                          </span>
                        </div>

                        <h3 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight leading-none pt-2">
                          {service.title}
                        </h3>

                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed pt-2">
                          {service.description}
                        </p>
                      </div>

                      <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-800">
                        <p className="text-[10px] font-mono font-bold tracking-widest text-secondary/50 uppercase mb-3">
                          // Tech Stack
                        </p>
                        <div className="grid grid-cols-3 gap-3">
                          {service.technologies.map((tech) => (
                            <div
                              key={tech.name}
                              className="group/tech flex flex-col items-center justify-center p-2.5 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/40 hover:bg-white dark:hover:bg-gray-800 hover:border-primary/20 dark:hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                            >
                              <div className="w-6 h-6 mb-1.5 transition-transform duration-300 group-hover/tech:scale-110">
                                <TechIcon name={tech.name} />
                              </div>
                              <span className="text-[10px] font-mono font-semibold text-gray-500 dark:text-gray-400 group-hover/tech:text-primary transition-colors text-center leading-tight truncate w-full px-0.5">
                                {tech.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}