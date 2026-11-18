import { CodeBracketIcon } from "@heroicons/react/24/outline"

// Local WebP renders of Devicon 2.18.0 logos. Attribution is in public/assets/tech.
const iconSlugs = new Map(Object.entries({
  angular: "angular",
  "angular 20": "angular",
  arduino: "arduino",
  aws: "amazonwebservices",
  "aws sdk": "amazonwebservices",
  "c#": "csharp",
  "c++": "cplusplus",
  capacitor: "capacitor",
  "chart.js": "chartjs",
  cloudflare: "cloudflare",
  css: "css3",
  css3: "css3",
  docker: "docker",
  express: "express",
  fastapi: "fastapi",
  flask: "flask",
  gcp: "googlecloud",
  "github actions": "githubactions",
  grafana: "grafana",
  graphql: "graphql",
  html: "html5",
  html5: "html5",
  java: "java",
  javascript: "javascript",
  jwt: "jwt",
  kubernetes: "kubernetes",
  linux: "linux",
  mongodb: "mongodb",
  mysql: "mysql",
  "netlify functions": "netlify",
  "next.js": "nextjs",
  "node.js": "nodejs",
  oauth: "oauth",
  oauth2: "oauth",
  php: "php",
  playwright: "playwright",
  pnpm: "pnpm",
  postgresql: "postgresql",
  primeng: "primeng",
  prometheus: "prometheus",
  python: "python",
  pytorch: "pytorch",
  quarkus: "quarkus",
  "raspberry pi": "raspberrypi",
  react: "react",
  "react 19": "react",
  "react router": "reactrouter",
  redis: "redis",
  "redux toolkit": "redux",
  rust: "rust",
  rxjs: "rxjs",
  "spring boot": "spring",
  sqlite: "sqlite",
  supabase: "supabase",
  "supabase storage": "supabase",
  svelte: "svelte",
  tailwind: "tailwindcss",
  "tailwind css": "tailwindcss",
  tauri: "tauri",
  typescript: "typescript",
  "vb.net": "visualbasic",
  "visual studio": "visualstudio",
  vite: "vite",
  webpack: "webpack",
  win32: "windows11",
}))

const darkInvertedIcons = new Set(["express", "flask", "nextjs", "rust"])

export const TechIcon = ({ name, className = "h-full w-full" }: { name: string; className?: string }) => {
  const slug = iconSlugs.get(name.trim().toLowerCase())

  if (!slug) {
    return <CodeBracketIcon aria-hidden="true" strokeWidth={2.5} className={`${className} text-gray-400 dark:text-gray-500`} />
  }

  return (
    <img
      src={`/assets/tech/${slug}.webp`}
      alt=""
      width={72}
      height={72}
      loading="lazy"
      className={`${className} object-contain${darkInvertedIcons.has(slug) ? " dark:invert" : ""}`}
    />
  )
}
