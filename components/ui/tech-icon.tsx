import * as React from "react"

export const TechIcon = ({ name, className = "w-full h-full" }: { name: string; className?: string }) => {
  // Normalize name for matching
  const normName = name.toLowerCase().trim()

  switch (normName) {
    case "next.js":
    case "nextjs":
      return (
        <svg viewBox="0 0 180 180" fill="none" className={className}>
          <circle cx="90" cy="90" r="90" fill="currentColor" className="text-gray-900 dark:text-white" />
          <path d="M149.5 157.5L69.1 54H54v72h14.4V69.8l67.2 87.7zM126 108V54h-14.4v54z" fill="currentColor" className="text-white dark:text-black" />
        </svg>
      )
    case "react":
      return (
        <svg viewBox="-11.5 -10.2 23 20.4" className={className}>
          <circle cx="0" cy="0" r="2" fill="#61dafb" />
          <g stroke="#61dafb" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      )
    case "angular":
    case "angular 20":
      return (
        <svg viewBox="0 0 250 250" fill="none" className={className}>
          <polygon points="125,30 31.9,63.2 46.1,186.3 125,230 203.9,186.3 218.1,63.2" fill="#DD0031" />
          <polygon points="125,30 125,230 203.9,186.3 218.1,63.2" fill="#C3002F" />
          <path d="M125,52.1 L66.8,182.6 L90.4,182.6 L102.3,153.2 L147.7,153.2 L159.6,182.6 L183.2,182.6 L125,52.1 Z M125,98.3 L139.7,134.6 L110.3,134.6 L125,98.3 Z" fill="#FFFFFF" />
        </svg>
      )
    case "typescript":
      return (
        <svg viewBox="0 0 100 100" fill="none" className={className}>
          <rect width="100" height="100" fill="#3178C6" rx="16" />
          <path d="M25 30h30v8H43v32h-8V38H25v-8z M62 48c0-5 3-7 8-7s8 2 8 7v4H70v-4c0-2-1-3-3-3s-3 1-3 3v4c0 3 2 5 5 6l6 2c4 1 6 4 6 8v4c0 5-3 7-8 7s-8-2-8-7v-4h8v4c0 2 1 3 3 3s3-1 3-3v-4c0-3-2-5-5-6l-6-2c-4-1-6-4-6-8v-4z" fill="white" />
        </svg>
      )
    case "javascript":
      return (
        <svg viewBox="0 0 100 100" fill="none" className={className}>
          <rect width="100" height="100" fill="#F7DF1E" rx="16" />
          <path d="M40 70c0 4-2 6-6 6s-6-2-6-6v-4h6v4c0 1 .5 1.5 1.5 1.5s1.5-.5 1.5-1.5v-20h6v20z M60 62c0 5-3 7-8 7s-8-2-8-7v-4h6v4c0 2 1 2.5 2.5 2.5s2.5-.5 2.5-2.5v-4c0-3-2-5-5-6l-6-2c-4-1-6-4-6-8v-4c0-5 3-7 8-7s8 2 8 7v4h-6v-4c0-2-1-2.5-2.5-2.5s-2.5.5-2.5 2.5v4c0 3 2 5 5 6l6 2c4 1 6 4 6 8v4z" fill="black" />
        </svg>
      )
    case "html5":
    case "html":
      return (
        <svg viewBox="0 0 512 512" className={className}>
          <path fill="#E34F26" d="M71,460 L37,0 475,0 441,460 256,512z" />
          <path fill="#EF652A" d="M256,472 L407,430 433,73 256,73z" />
          <path fill="#EBEBEB" d="M256,268 L202,268 198,224 256,224 256,177 150,177 160,285 161,299 162,315 256,315z M256,397 L256,347 212,335 163,308 171,390z" />
          <path fill="#FFFFFF" d="M256,268 L256,315 304,315 299,368 256,380 256,430 338,407 348,299 350,268z M256,177 L256,224 355,224 359,177z" />
        </svg>
      )
    case "css3":
    case "css":
      return (
        <svg viewBox="0 0 512 512" className={className}>
          <path fill="#264DE4" d="M71,460 L37,0 475,0 441,460 256,512z" />
          <path fill="#2965F1" d="M256,472 L407,430 433,73 256,73z" />
          <path fill="#EBEBEB" d="M256,268 L202,268 198,224 256,224 256,177 150,177 160,285 161,299 162,315 256,315z M256,397 L256,347 212,335 163,308 171,390z" />
          <path fill="#FFFFFF" d="M256,268 L256,315 304,315 299,368 256,380 256,430 338,407 348,299 350,268z M256,177 L256,224 355,224 359,177z" />
        </svg>
      )
    case "tailwind css":
    case "tailwind":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M12 4.8C8.8 4.8 6.8 6.4 6 9.6c1.2-1.6 2.6-2.2 4.2-1.8 1 .25 1.64.9 2.4 1.67 1.22 1.24 2.63 2.67 5.6 2.67 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.93-.24-1.6-.9-2.35-1.67-.93-.94-2.1-2.13-5.65-2.13zM6 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8 1 .25 1.64.9 2.4 1.67 1.22 1.24 2.63 2.67 5.6 2.67 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.93-.24-1.6-.9-2.35-1.67-.93-.94-2.1-2.13-5.65-2.13z" fill="#06B6D4" />
        </svg>
      )
    case "spring boot":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="6" fill="#6DB33F" />
          <path d="M12 5c-3.8 0-7 3.2-7 7s3.2 7 7 7 7-3.2 7-7-3.2-7-7-7zm-1 9.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5.2-.5.5-.5.5.2.5.5zm.3-2.6c-.1.1-.3.2-.5.2-.4 0-.7-.3-.7-.7 0-.2.1-.4.2-.5l1.9-1.9c.1-.1.3-.2.5-.2.4 0 .7.3.7.7 0 .2-.1.4-.2.5l-1.9 1.9z" fill="white" />
        </svg>
      )
    case "quarkus":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="6" fill="#4695EB" />
          <circle cx="12" cy="12" r="3" fill="white" />
          <path d="M12 6a6 6 0 016 6M12 18a6 6 0 01-6-6" stroke="white" strokeWidth="2" />
        </svg>
      )
    case "flask":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`${className} text-green-600 dark:text-green-400`}>
          <path d="M6 3h12M12 3v6M8.5 9h7M9 3v6M15 3v6M12 9l-6 10a2 2 0 002 3h8a2 2 0 002-3L12 9z" />
        </svg>
      )
    case "java":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M2 15c0 3.87 3.13 7 7 7h5c3.87 0 7-3.13 7-7v-3H2v3z" fill="#007398" />
          <path d="M19 12h2v-2h-2v2z" fill="#007398" />
          <path d="M9 10c0-3 3-5 3-7s-1-3-1-3m4 10c0-3 2-4 2-6s-1-3-1-3" stroke="#ea2d2e" strokeWidth="1.8" />
        </svg>
      )
    case "python":
      return (
        <svg viewBox="0 0 110 110" className={className}>
          <path fill="#3776AB" d="M52.3 2.1c-13.5 0-25.1.8-25.1 4.7v10.5h25.7v3.6H27.2S11.4 22 11.4 39.8c0 17.8 14 19 14 19h8.4v-11.7c0-8.9 7.7-16.3 16.6-16.3h25.7s12.5-.2 12.5-12.7c0-12.5-12.6-16-23.7-16-12.6 0-12.6 0-12.6 0zm-8.8 6c2.4 0 4.4 2 4.4 4.3 0 2.4-2 4.4-4.4 4.4s-4.3-2-4.3-4.4c0-2.3 1.9-4.3 4.3-4.3z" />
          <path fill="#FFD343" d="M57.7 107.9c13.5 0 25.1-.8 25.1-4.7V92.7H57.1v-3.6h25.7s15.8-1.1 15.8-18.9c0-17.8-14-19-14-19h-8.4V63c0 8.9-7.7 16.3-16.6 16.3H33.9S21.4 79.5 21.4 92c0 12.5 12.6 16 23.7 16 12.6 0 12.6 0 12.6 0zm8.8-6c-2.4 0-4.4-2-4.4-4.3 0-2.4 2-4.4 4.4-4.4s4.3 2 4.3 4.4c0 2.3-1.9 4.3-4.3 4.3z" />
        </svg>
      )
    case "graphql":
      return (
        <svg viewBox="0 0 100 100" className={className}>
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
    case "postgresql":
    case "postgres":
      return (
        <svg viewBox="0 0 250 250" fill="none" className={className}>
          <path d="M123.6 86.8c3.2-1.7 6.6-3 10-4.1-1.6 3.1-2.9 6.4-3.7 9.8l.2-.1c4-1.6 8.3-2.9 12.6-3.8-1.5 2.2-2.9 4.6-4 7.1{truncated}c-15 15.3-37.1 23-58.8 20.4H124c-2 0-3.9.1-5.9.3H118c-12 1.3-24.1 1.4-36.1.1l5.5-2.2c-5.8.5-11.7.3-17.5-.5h-.1c7.2-2.1 13.8-5.9 19.3-11.1l-6.9 2c8.1-3.9 14.9-10.1 19.8-17.7 2.1-3.2 3.8-6.7 5.1-10.3h-.1c-6.1.1-12.1-.9-17.8-2.9 4-3.1 8.8-5.1 13.9-5.7 3.5-.5 7.1-.4 10.6.1h-.1c-7-.6-13.9-2.7-19.8-6.1 4.3-1.6 9-2.3 13.6-2l-14.6-3.8c7.4-1.2 14.9-1.1 22.3.4l-18.7-6c8.5-.7 16.9.7 24.6 4.1 2.3-4.5 4.1-9.2 5.4-14.2h-.1c-13.2 2-26.6 1.4-39.5-1.7l16 1.4c-9.1-.5-18-2.6-26.3-6.2l14.9.4c-9.9-1.9-19.3-5.9-27.7-11.8l16.1 1.5c-9.1-3.2-17.4-8.2-24.3-14.7H66c-5.1-4.8-9.4-10.5-12.7-16.7h.1c2 5.4 5.3 10.2 9.5 14l-6.2-7.5c1.4 3.7 3.5 7.1 6.1 10.1h-.1C56.6 122.9 52 113.8 49 104c-.3-.9-.5-1.9-.7-2.9l4.5 5.5c-1.3-3.7-2.1-7.5-2.4-11.4h.1c-1.9 10.7-1 21.6 2.7 31.8.8-5.2 2.3-10.3 4.5-15.1.7 5 2.1 9.9 4.2 14.5l1.6-9.5c.3 4.5 1.3 9 2.9 13.3H74c-4-9-5.6-18.8-4.6-28.7 1.8 4.7 4.5 9.1 7.9 12.8 1.1-4.7 3-9.1 5.6-13.1 1 3.5 2.6 6.8 4.7 9.8l1.4-8.5c2 4 4.7 7.7 8 10.8l-.4-8c4 3.8 8.7 6.9 13.8 9.2-.9-4.8-.8-9.8.3-14.5h-.1c5 5.4 11.2 9.7 18.1 12.5h.1c-4.4-8-5.5-17.2-3.3-25.9h-.1c11.5 5.6 24.6 7.4 37.2 5.2h-.1c-12.6-9.8-19.7-24.7-19.6-40.4l.2.3z" fill="#336791" />
        </svg>
      )
    case "redis":
      return (
        <svg viewBox="0 0 100 100" className={className}>
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
    case "mongodb":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 2C9.5 5 7 9.5 7 13.5c0 3 2 5.5 5 6.5V22h1v-2c3-1 5-3.5 5-6.5C18 9.5 15.5 5 12 2zm0 16c-2 0-3.5-1.5-3.5-3.5 0-2.5 1.5-5.5 3.5-7.5V18z" fill="#47A248" />
          <path d="M12 7c2 2 3.5 5 3.5 7.5 0 2-1.5 3.5-3.5 3.5V7z" fill="#3F3F3F" />
        </svg>
      )
    case "mysql":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12.1 2c-3.1 0-6.1 1.7-7.7 4.5-1 1.7-1.3 3.7-1.1 5.6C3.5 13.9 5 16 7 17.5c2.3 1.7 5.1 2.5 8 2.5 3.8 0 7.4-1.9 9-5.1.7-1.5.8-3.1.6-4.7-.5-3.5-3.5-6.2-7.1-7.2-1.7-.5-3.6-.7-5.4-.5z" fill="#00758F" />
          <path d="M11 6c-1.5 1.5-2 3.5-1.5 5.5s2 3.5 4 4.5" stroke="#F29111" strokeWidth="2.2" />
        </svg>
      )
    case "sqlite":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="6" fill="#003B57" />
          <path d="M7 14l2-4 4-2 4 2 2 4-2 4-4 2-4-2z" fill="white" opacity="0.3" />
          <path d="M7 14l6-6M9 16l6-6M11 18l6-6" stroke="white" strokeWidth="1.8" />
        </svg>
      )
    case "lighthouse":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 2L9 8h6l-3-6z" fill="#F44336" />
          <path d="M9 8h6v12H9V8z" fill="#ECEFF1" />
          <path d="M10 8h4v12h-4V8z" fill="#CFD8DC" />
          <path d="M12 20v2M8 22h8" stroke="currentColor" strokeWidth="1.5" />
          <path d="M5 6L2 5m0 0l3-1M2 5h4M19 6l3-1m0 0l-3-1m3 1h-4" stroke="#FFEB3B" strokeWidth="1.5" />
        </svg>
      )
    case "vite":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 2L3 11h8l-2 11 11-11h-8l2-9z" fill="#BD34FE" />
        </svg>
      )
    case "webpack":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" stroke="#8ED6FB" strokeWidth="2" />
          <path d="M12 22V12M3 7l9 5 9-5" stroke="#1D78C1" strokeWidth="1.5" />
          <path d="M12 12l9 5M12 12L3 17" stroke="#1D78C1" strokeWidth="1.5" />
        </svg>
      )
    case "grafana":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="6" fill="#F47A20" />
          <path d="M6 14h2v4H6v-4zm4-6h2v10h-2V8zm4 4h2v6h-2v-6z" fill="white" />
        </svg>
      )
    case "prometheus":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="6" fill="#E6522C" />
          <circle cx="12" cy="12" r="5" fill="white" />
          <circle cx="12" cy="12" r="3" fill="#E6522C" />
        </svg>
      )
    case "esp32":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#E7352C" strokeWidth="2" className={className}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
        </svg>
      )
    case "arduino":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M7 8a4 4 0 00-4 4 4 4 0 004 4c2.5 0 3.5-2 5-4 1.5-2 2.5-4 5-4a4 4 0 004 4 4 4 0 00-4 4c-2.5 0-3.5-2-5-4-1.5-2-2.5-4-5-4z" stroke="#00979D" strokeWidth="2.5" />
          <path d="M6 12h2M7 11v2M16 12h2" stroke="#00979D" strokeWidth="1.8" />
        </svg>
      )
    case "raspberry pi":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 6a3 3 0 00-3-3 1 1 0 00-1 1v2h8V4a1 1 0 00-1-1 3 3 0 00-3 3z" fill="#46A040" />
          <path d="M12 9a4 4 0 100 8 4 4 0 000-8z" fill="#C51A4A" />
          <circle cx="8" cy="11" r="2.5" fill="#C51A4A" />
          <circle cx="16" cy="11" r="2.5" fill="#C51A4A" />
          <circle cx="10" cy="15" r="2.5" fill="#C51A4A" />
          <circle cx="14" cy="15" r="2.5" fill="#C51A4A" />
        </svg>
      )
    case "c++":
      return (
        <svg viewBox="0 0 100 100" fill="none" className={className}>
          <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="#00599C" />
          <path d="M50 35H38v30h12v8H30V27h20v8z M57 44h8v4h-8v8h-4v-8h-8v-4h8v-8h4v8z M75 44h8v4h-8v8h-4v-8h-8v-4h8v-8h4v8z" fill="white" />
        </svg>
      )
    case "mqtt":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#660066" strokeWidth="2.2" className={className}>
          <circle cx="12" cy="5" r="3" />
          <circle cx="5" cy="19" r="3" />
          <circle cx="19" cy="19" r="3" />
          <path d="M12 8v8M5 16l5-5M19 16l-5-5" />
        </svg>
      )
    case "docker":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M13.8 6h2.2v2.2h-2.2V6zm-3.2 0H12.8v2.2H10.6V6zm-3.2 0H9.6v2.2H7.4V6zm-3.2 0H6.4v2.2H4.2V6zM13.8 2.8h2.2v2.2h-2.2V2.8zm-3.2 0H12.8v2.2H10.6V2.8zm-3.2 0H9.6v2.2H7.4V2.8zm6.4 6.4h2.2v2.2h-2.2V9.2zm-3.2 0H12.8v2.2H10.6V9.2zm-3.2 0H9.6v2.2H7.4V9.2zm-3.2 0H6.4v2.2H4.2V9.2zm18 3.2s-.8-.8-2-.8H1.4C.6 11.6 0 12.2 0 13c0 .8.6 1.4 1.4 1.4h19.2c1.2 0 2-.8 2-2zm-3.8.4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm-2.4 2.2c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" fill="#2496ED" />
        </svg>
      )
    case "kubernetes":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 2L3 6.5v11L12 22l9-4.5v-11L12 2z" stroke="#326CE5" strokeWidth="2.5" />
          <circle cx="12" cy="12" r="3" stroke="#326CE5" strokeWidth="2" />
          <path d="M12 2v7M3 6.5l6 3.5M21 6.5l-6 3.5M3 17.5l6-3.5M21 17.5l-6-3.5M12 22v-7" stroke="#326CE5" strokeWidth="1.8" />
        </svg>
      )
    case "aws":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10-10-4.48-10-10S6.48 2 12 2zm1 14.5c2.5-1 4.5-3 5-5.5.5-2.5 0-4.5-1-6.5C16 6 14 7 12.5 8.5" stroke="#FF9900" strokeWidth="2" />
          <path d="M6 15c2 2 5 2.5 8 1.5 2-.7 3.5-2 4.5-3.5" stroke="#FF9900" strokeWidth="2" />
          <path d="M18 13l2 2-2 2" stroke="#FF9900" strokeWidth="2" />
        </svg>
      )
    case "gcp":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" fill="#4285F4" opacity="0.2" />
          <path d="M12 2L4 7l8 5 8-5-8-5z" fill="#EA4335" />
          <path d="M4 7v10l8 5v-10L4 7z" fill="#34A853" />
          <path d="M20 7v10l-8 5v-10l8-5z" fill="#4285F4" />
        </svg>
      )
    case "github actions":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`${className} text-gray-800 dark:text-white`}>
          <rect width="20" height="20" x="2" y="2" rx="5" />
          <path d="M9 17V7l7 5-7 5z" fill="currentColor" />
        </svg>
      )
    case "supabase":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M21.4 11.6L12.5 2.5c-.3-.3-.8-.3-1.1 0L2.6 11.6c-.4.4-.1 1.1.5 1.1h5.8l-1.9 7.8c-.2.7.7 1.2 1.2.6l8.8-9.1c.4-.4.1-1.1-.5-1.1h-5.8" fill="#3ECF8E" />
        </svg>
      )
    case "php":
      return (
        <svg viewBox="0 0 100 100" fill="none" className={className}>
          <ellipse cx="50" cy="50" rx="45" ry="30" fill="#4F5D95" />
          <path d="M30 40h6v8h-6v-8zm14 0h6v20h-6v-20zm14 0h6v8h-6v-8zm0 12h6v8h-6v-8z" fill="white" />
        </svg>
      )
    case "c#":
      return (
        <svg viewBox="0 0 100 100" fill="none" className={className}>
          <rect width="100" height="100" fill="#178600" rx="16" />
          <path d="M45 35h-10v30h10v-8h-6v-14h6v-8z M65 44h8v4h-8v8h-4v-8h-8v-4h8v-8h4v8z" fill="white" />
        </svg>
      )
    case "linux":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
          <rect x="2" y="3" width="20" height="18" rx="2" />
          <path d="M6 8l4 4-4 4M12 16h6" />
        </svg>
      )
    case "websocket":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#00bcd4" strokeWidth="2.5" className={className}>
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      )
    case "pytorch":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 14.5c0 .8-.7 1.5-1.5 1.5S10 17.3 10 16.5V11h3v5.5z" fill="#EE4C2C" />
        </svg>
      )
    case "machine learning":
    case "computer vision":
    case "ai question generation":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#9c27b0" strokeWidth="2" className={className}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v3M12 20v3M1 12h3M20 12h3" />
        </svg>
      )
    case "gemini ai":
    case "gemini":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 2C12 7.5 9.5 12 4 12C9.5 12 12 16.5 12 22C12 16.5 14.5 12 20 12C14.5 12 12 7.5 12 2Z" fill="#38BDF8" />
          <path d="M19 4C19 5.5 18 6.5 16.5 6.5C18 6.5 19 7.5 19 9C19 7.5 20 6.5 21.5 6.5C20 6.5 19 5.5 19 4Z" fill="#EC4899" />
        </svg>
      )
    case "rest api":
    case "restful apis":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#607d8b" strokeWidth="2" className={className}>
          <rect x="2" y="5" width="20" height="6" rx="2" />
          <rect x="2" y="13" width="20" height="6" rx="2" />
          <circle cx="6" cy="8" r="1" fill="currentColor" />
          <circle cx="6" cy="16" r="1" fill="currentColor" />
        </svg>
      )
    case "embedded systems":
    case "hardware":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#ff5722" strokeWidth="2" className={className}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 9h6v6H9z" />
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
        </svg>
      )
    case "shadcn/ui":
    case "shadcn":
      return (
        <svg viewBox="0 0 256 256" fill="none" className={className}>
          <path d="M128 0L256 128L128 256L0 128L128 0Z" fill="currentColor" className="text-gray-900 dark:text-white" />
          <path d="M128 64L192 128L128 192L64 128L128 64Z" fill="currentColor" className="text-white dark:text-black" />
        </svg>
      )
    case "primeng":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="6" fill="#D32F2F" />
          <path d="M12 4L4 7v5c0 4.5 3.5 8.5 8 10 4.5-1.5 8-5.5 8-10V7l-8-3zm0 4a4 4 0 014 4c0 3-4 6-4 6s-4-3-4-6a4 4 0 014-4z" fill="white" />
        </svg>
      )
    case "react router":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#CA4245" strokeWidth="2.5" className={className}>
          <path d="M4 19v-6a4 4 0 014-4h8a4 4 0 014 4v6M12 9V3" />
          <circle cx="12" cy="3" r="1.5" fill="currentColor" />
          <circle cx="4" cy="19" r="1.5" fill="currentColor" />
          <circle cx="20" cy="19" r="1.5" fill="currentColor" />
        </svg>
      )
    case "tanstack query":
    case "react query":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="12" r="10" fill="#FF4154" />
          <path d="M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 9c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" fill="white" />
        </svg>
      )
    case "react hook form":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#EC5990" strokeWidth="2.5" className={className}>
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          <path d="M7 8h10M9 12h6" stroke="white" strokeWidth="1.5" />
        </svg>
      )
    case "zod":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="6" fill="#3E3E3E" />
          <path d="M6 7h12v3l-6 5h6v2H6v-3l6-5H6V7z" fill="#F4E04D" />
        </svg>
      )
    case "pnpm":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <rect x="2" y="2" width="8" height="8" rx="1.5" fill="#F9AD19" />
          <rect x="14" y="2" width="8" height="8" rx="1.5" fill="#F9AD19" />
          <rect x="2" y="14" width="8" height="8" rx="1.5" fill="#F9AD19" />
          <rect x="14" y="14" width="8" height="8" rx="1.5" fill="#F9AD19" />
          <rect x="8" y="8" width="8" height="8" rx="1.5" fill="#F9AD19" fillOpacity="0.8" />
        </svg>
      )
    case "playwright":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" fill="#2EAD33" opacity="0.2" />
          <path d="M8 7h5a3 3 0 013 3v0a3 3 0 01-3 3H8V7z" stroke="#2EAD33" strokeWidth="2.5" />
          <path d="M8 12v5" stroke="#45BAE1" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )
    case "chart.js":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#FF6384" strokeWidth="2" className={className}>
          <rect x="3" y="13" width="4" height="8" rx="1" fill="#FF6384" fillOpacity="0.3" />
          <rect x="10" y="8" width="4" height="13" rx="1" fill="#36A2EB" fillOpacity="0.3" />
          <rect x="17" y="3" width="4" height="18" rx="1" fill="#4BC0C0" fillOpacity="0.3" />
          <path d="M3 21h18M3 13l7-5 7-5" strokeLinecap="round" />
        </svg>
      )
    case "fullcalendar":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#3788D8" strokeWidth="2" className={className}>
          <rect x="3" y="4" width="18" height="17" rx="2" />
          <path d="M3 9h18M9 2v4M15 2v4M7 13h2M11 13h2M15 13h2M7 17h2M11 17h2" strokeLinecap="round" />
        </svg>
      )
    case "rxjs":
      return (
        <svg viewBox="0 0 100 100" fill="none" className={className}>
          <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="#E10079" />
          <path d="M35 35l30 30M65 35l-30 30" stroke="white" strokeWidth="10" strokeLinecap="round" />
        </svg>
      )
    case "demucs":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2" className={className}>
          <path d="M3 10v4M6 6v12M9 3v18M12 7v10M15 5v14M18 8v8M21 11v2" strokeLinecap="round" />
        </svg>
      )
    case "whisper":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#009688" strokeWidth="2" className={className}>
          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
          <path d="M8 12h8" strokeLinecap="round" />
        </svg>
      )
    case "pgvector":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#336791" strokeWidth="2" className={className}>
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
          <path d="M12 5v15M8 15l4 4 4-4" stroke="#FF9800" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case "jwt":
    case "json web token":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="6" fill="#D63AFF" />
          <path d="M5 8h4v2H7v6H5V8zm5 0h2l1 5 1-5h2l-2 8h-2l-2-8zm7 0h6v2h-2v6h-2v-6h-2V8z" fill="white" />
        </svg>
      )
    case "rbac":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#FF5722" strokeWidth="2" className={className}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <circle cx="12" cy="11" r="2" fill="#FF5722" />
          <path d="M12 13v3" strokeLinecap="round" />
        </svg>
      )
    case "pillow":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#3F51B5" strokeWidth="2" className={className}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" fill="#3F51B5" />
          <path d="M21 15l-5-5L5 21" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case "yolo":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#E91E63" strokeWidth="2.5" className={className}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 12h6M12 9v6" strokeLinecap="round" />
          <circle cx="12" cy="12" r="1" fill="#E91E63" />
        </svg>
      )
    case "roboflow":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#FF007A" strokeWidth="2" className={className}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="2" fill="#FF007A" />
        </svg>
      )
    case "ultralytics":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#2196F3" strokeWidth="2" className={className}>
          <path d="M4 12a8 8 0 0116 0M8 12a4 4 0 018 0" />
          <circle cx="12" cy="12" r="1" fill="#2196F3" />
        </svg>
      )
    case "git":
      return (
        <svg viewBox="0 0 100 100" fill="none" className={className}>
          <path d="M92.1 43.9L56.1 7.9c-3.1-3.1-8.2-3.1-11.3 0L33 19.7l12.8 12.8c2.9-1 6.4-.3 8.7 2 2.3 2.3 3 5.7 2.1 8.7l12.8 12.8c3-.9 6.4-.2 8.7 2.1 3.2 3.2 3.2 8.3 0 11.5-3.2 3.2-8.3 3.2-11.5 0-2.3-2.3-3-5.7-2.1-8.7L48.8 48.2c-.9.9-2.1 1.4-3.4 1.4s-2.5-.5-3.4-1.4c-2.3-2.3-3-5.7-2.1-8.7L27.1 26.7 7.9 45.9c-3.1 3.1-3.1 8.2 0 11.3l36 36c3.1 3.1 8.2 3.1 11.3 0l36.9-36.9c3.1-3.2 3.1-8.3 0-11.4z" fill="#F05032" />
        </svg>
      )
    case "github":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-gray-900 dark:text-white`}>
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.24 6.839 9.565.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.236 22 16.417 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      )
    case "vs code":
    case "vscode":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M1.5 6.5v11L6 21l16.5-7.5V10.5L6 3 1.5 6.5z" fill="#007ACC" opacity="0.2" />
          <path d="M18.5 4.5l-14 10.5-3-2.5v-1L15.5 1z" fill="#007ACC" />
          <path d="M18.5 19.5l-14-10.5-3 2.5v1l14 11z" fill="#007ACC" />
          <path d="M18.5 4.5l3.5 3.5v8l-3.5 3.5-12.5-9.5 12.5-5.5z" fill="#1F9CF0" />
        </svg>
      )
    case "intellij":
    case "intellij idea":
      return (
        <svg viewBox="0 0 100 100" fill="none" className={className}>
          <rect width="100" height="100" fill="#000000" rx="16" />
          <path d="M15 15h70v70H15z" fill="#080808" />
          <path d="M15 50L50 85H15V50z" fill="#FE2857" opacity="0.6" />
          <path d="M50 15l35 35V15H50z" fill="#3B00B9" opacity="0.6" />
          <path d="M85 50L50 85h35V50z" fill="#00CDFF" opacity="0.6" />
          <path d="M25 30h12v6H31v28h-6V30zm10 28c0 3 2 6 6 6s6-3 6-6V30h6v28c0 6-4 10-12 10s-12-4-12-10v-4h6v4z" fill="white" />
        </svg>
      )
    case "pycharm":
      return (
        <svg viewBox="0 0 100 100" fill="none" className={className}>
          <rect width="100" height="100" fill="#000000" rx="16" />
          <path d="M15 15h70v70H15z" fill="#080808" />
          <path d="M15 50L50 85H15V50z" fill="#21D07A" opacity="0.6" />
          <path d="M50 15l35 35V15H50z" fill="#B3DF12" opacity="0.6" />
          <path d="M30 35h16c4 0 7 2.5 7 6.5s-3 6.5-7 6.5H37v13h-7V35zm7 7h9c1.5 0 2.5-1 2.5-2.5s-1-2.5-2.5-2.5h-9V42zM58 35h14v6H65v14h7v6H58V35z" fill="white" />
        </svg>
      )
    case "webstorm":
      return (
        <svg viewBox="0 0 100 100" fill="none" className={className}>
          <rect width="100" height="100" fill="#000000" rx="16" />
          <path d="M15 15h70v70H15z" fill="#080808" />
          <path d="M15 50L50 85H15V50z" fill="#00CDFF" opacity="0.6" />
          <path d="M50 15l35 35V15H50z" fill="#8000FF" opacity="0.6" />
          <path d="M25 35l6 18 6-18 6 18 6-18h7l-10 28h-6l-6-18-6 18h-6L18 35h7zm30 13c0-3 3-5 8-5s8 1.5 8 5v3h-6v-3c0-1-.5-1.5-2-1.5s-2 .5-2 1.5v3c0 2 2 3.5 5 4l6 2c3.5 1 5 3.5 5 6.5v2c0 5-3.5 7-8 7s-8-2-8-7v-3h6v3c0 1 .5 1.5 2 1.5s2-.5 2-1.5v-3c0-2-2-3.5-5-4l-6-2c-3.5-1-5-3.5-5-6.5v-2z" fill="white" />
        </svg>
      )
    case "postman":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="12" r="10" fill="#FF6C37" />
          <path d="M12 5c-3.5 0-6.5 2.5-7 6h14c-.5-3.5-3.5-6-7-6z" fill="white" />
          <path d="M12 11c-2 0-3.5 1.5-3.5 3.5v3c0 .8.7 1.5 1.5 1.5h4c.8 0 1.5-.7 1.5-1.5v-3c0-2-1.5-3.5-3.5-3.5z" fill="white" />
          <circle cx="12" cy="8.5" r="1.5" fill="#FF6C37" />
        </svg>
      )
    case "vercel":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-black dark:text-white`}>
          <polygon points="12,2 22,20 2,20" />
        </svg>
      )
    case "ci/cd":
    case "cicd":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#00C853" strokeWidth="2.5" className={className}>
          <path d="M7 16c-2.2 0-4-1.8-4-4s1.8-4 4-4c1.8 0 3 1.2 5 4 2 2.8 3.2 4 5 4 2.2 0 4-1.8 4-4s-1.8-4-4-4c-1.8 0-3 1.2-5 4-2 2.8-3.2 4-5 4z" strokeLinecap="round" />
        </svg>
      )
    case "ubuntu":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="12" r="10" fill="#E95420" />
          <circle cx="12" cy="12" r="6" stroke="white" strokeWidth="2" />
          <path d="M12 4c.8 0 1.5.7 1.5 1.5S12.8 7 12 7s-1.5-.7-1.5-1.5S11.2 4 12 4zm-6.9 8c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5zm13.8 0c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5z" fill="white" />
        </svg>
      )
    case "arch":
    case "arch linux":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 2.5L2.5 19.5h3.8l5.7-10.2 5.7 10.2h3.8L12 2.5z" fill="#1793D1" />
          <path d="M12 6.5l-3.8 6.8c1.5-.5 3-.5 4.5.3 1-.8 2-.8 3-.3L12 6.5z" fill="#ffffff" opacity="0.8" />
        </svg>
      )
    case "windows":
    case "windows systems":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M2.5 5.5L10.5 4v7.5H2.5V5.5zm0 13l8 1.5V12.5H2.5v6zm9-14.5l10-1.5v9h-10v-7.5zm0 21l10 1.5V12.5h-10v9z" fill="#0078D7" />
        </svg>
      )
    case "debian":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 14c-1.5 0-3-1-3.5-2.5s.2-3 1.7-3.7 3.2.2 3.8 1.7.2 3-1.3 3.8c-.2.2-.5.5-.7.7z" stroke="#D70A53" strokeWidth="2.5" />
          <path d="M12 8c1.5-.5 3 0 3.5 1.5s-.2 3-1.7 3.5" stroke="#D70A53" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case "kali":
    case "kali linux":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="12" r="10" fill="#557C94" opacity="0.2" />
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#557C94" strokeWidth="2.2" />
          <path d="M7 12l4-4 4 4" stroke="#557C94" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 8v8" stroke="#557C94" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case "vb.net":
    case "vbnet":
      return (
        <svg viewBox="0 0 100 100" fill="none" className={className}>
          <rect width="100" height="100" fill="#5C2D91" rx="16" />
          <path d="M22 30h10l8 24 8-24h10L45 70H35L22 30z M60 30h15c5 0 9 3 9 7.5s-3 6.5-7 7.5c4 1 7 3 7 7.5s-4 7.5-9 7.5H60V30zm6 8v10h8c2 0 3.5-1.5 3.5-3.5V41.5c0-2-1.5-3.5-3.5-3.5h-8zm0 16v10h9c2 0 3.5-1.5 3.5-3.5v-3c0-2-1.5-3.5-3.5-3.5h-9z" fill="white" />
        </svg>
      )
    case "visual studio":
    case "visualstudio":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M17 2l-13 11-2.5-2L1 12l3.5 1.5L17 22l5.5-2.5V4.5L17 2z" fill="#5C2D91" opacity="0.2" />
          <path d="M17 2L4 13l-3-2.5 6-3.5L17 2z" fill="#7B3AB3" />
          <path d="M17 22l-13-11-3 2.5 6 3.5 10 5z" fill="#5C2D91" />
          <path d="M17 2l5.5 2.5v15L17 22 7 12 17 2z" fill="#9C52E0" />
        </svg>
      )
    case "localdb":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#795548" strokeWidth="2.2" className={className}>
          <ellipse cx="12" cy="5" rx="7" ry="2.5" fill="#795548" fillOpacity="0.2" />
          <path d="M5 5v5c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5V5M5 10v5c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5v-5" />
          <rect x="13" y="13" width="7" height="7" rx="1.5" fill="white" stroke="#FF9800" strokeWidth="1.5" />
          <circle cx="16.5" cy="16.5" r="1.5" fill="#FF9800" />
        </svg>
      )
    case "tensorflow":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 2L3 7.2v10.4l9 5.2 9-5.2V7.2L12 2z" fill="#FF6F00" opacity="0.2" />
          <path d="M12 2v20M3 7.2l9 5.2 9-5.2" stroke="#FF6F00" strokeWidth="2" strokeLinecap="round" />
          <path d="M7.5 9.8v5.2m9-5.2v5.2" stroke="#FF6F00" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )
    case "oauth2":
    case "oauth":
    case "oauth 2.0":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#2196F3" strokeWidth="2.5" className={className}>
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" fill="#2196F3" fillOpacity="0.2" />
          <path d="M12 2v6M12 16v6M2 12h6M16 12h6" strokeLinecap="round" />
        </svg>
      )
    case "nestjs":
    case "nest.js":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="6" fill="#E0234E" />
          <path d="M12 5l6 3.5v7L12 19l-6-3.5v-7L12 5zm-4 5.2l4 2.3 4-2.3m-8 2.3l4 2.3 4-2.3" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case "express":
    case "express.js":
    case "expressjs":
      return (
        <svg viewBox="0 0 100 100" fill="none" className={className}>
          <rect width="100" height="100" fill="currentColor" className="text-gray-900 dark:text-white" rx="16" />
          <path d="M25 35h30v8H37v6h15v8H37v8h18v8H25V35zm35 0h8l7 14 7-14h8L79 54l11 19h-8l-8-14-8 14h-8l11-19-11-19z" fill="currentColor" className="text-white dark:text-black" />
        </svg>
      )
    case "prisma":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 2L2 20h20L12 2z" fill="#0C344B" />
          <path d="M12 2L2 20h10V2z" fill="#1A365D" />
          <path d="M12 11l-5 9h10l-5-9z" fill="#319795" />
        </svg>
      )
    case "drizzle":
    case "drizzle orm":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="12" r="10" fill="#C5F82A" />
          <path d="M12 7c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5S14.5 7 12 7zm-1.5 4.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5z" fill="black" />
          <path d="M6 6l2 2m10-2l-2 2m-8 8l2 2m6-2l-2 2" stroke="black" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )
    case "redux":
    case "redux toolkit":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" fill="#764ABC" opacity="0.2" />
          <path d="M12 6a6 6 0 100 12 6 6 0 000-12zm-3.5 6a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z" fill="#764ABC" />
          <path d="M7 7l4 4-4 4m10-8l-4 4 4 4" stroke="#764ABC" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case "zustand":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#4E342E" strokeWidth="2.2" className={className}>
          <path d="M12 3a4 4 0 00-4 4v2H7a3 3 0 00-3 3v5a3 3 0 003 3h10a3 3 0 003-3v-5a3 3 0 00-3-3h-1V7a4 4 0 00-4-4zm-2 4a2 2 0 014 0v2h-4V7z" />
          <circle cx="12" cy="14" r="1.5" fill="#4E342E" />
        </svg>
      )
    case "astro":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 2L2 19h5l2.5-4.5h5L17 19h5L12 2zm0 5l3.5 6.5h-7L12 7z" fill="#FF5D01" />
          <path d="M12 2l2 6h-4l2-6z" fill="#FF8F00" />
        </svg>
      )
    case "svelte":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M19 6.5c0-2.5-2-4.5-4.5-4.5-1.5 0-3 1-3.5 2L7 11c-1 1.5-1 3.5 0 5s2.5 2 4 2l4-4.5c1-1.5 1-3.5 0-5l4-2z" stroke="#FF3E00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 17.5c0 2.5 2 4.5 4.5 4.5 1.5 0 3-1 3.5-2l4-7c1-1.5 1-3.5 0-5s-2.5-2-4-2l-4 4.5c-1 1.5-1 3.5 0 5l-4 2z" stroke="#FF3E00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case "vue":
    case "vue.js":
    case "vuejs":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 18.5L20.5 4h-4L12 11 7.5 4h-4L12 18.5z" fill="#41B883" />
          <path d="M12 18.5L16.5 4H12.5L12 11 11.5 4H7.5L12 18.5z" fill="#35495E" />
        </svg>
      )
    case "nuxt":
    case "nuxt.js":
    case "nuxtjs":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 4l-9 15h18L12 4z" fill="#00C58E" opacity="0.3" />
          <path d="M8 9l-6 10h12L8 9z" fill="#00C58E" />
          <path d="M16 11l-5 8h10l-5-8z" fill="#10B981" />
        </svg>
      )
    case "fastapi":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="6" fill="#009688" />
          <path d="M12 4L5 13h6l-2 7 7-9h-6l2-7z" fill="white" />
        </svg>
      )
    case "django":
      return (
        <svg viewBox="0 0 100 100" fill="none" className={className}>
          <rect width="100" height="100" fill="#092E20" rx="16" />
          <path d="M30 35h15c8 0 12 4 12 10v10c0 6-4 10-12 10H30V35zm8 8v16h7c3 0 4-1 4-4V47c0-3-1-4-4-4h-7zm22-8h8v24c0 4-2 6-6 6s-6-2-6-6v-2h6v2c0 1 .5 1.5 1.5 1.5s1.5-.5 1.5-1.5V35z" fill="white" />
        </svg>
      )
    case "framer motion":
    case "framer-motion":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M0 0h12l6 6H6L0 0zm0 12h12l6-6H6l-6 6zm6 6h12l6-6H12l-6 6z" fill="#F035B4" />
        </svg>
      )
    default:
      // High-quality code bracket fallback icon
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`${className} text-gray-400 dark:text-gray-500`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      )
  }
}
