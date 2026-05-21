"use client"

import { motion } from "framer-motion"
import { Home, User, FolderGit2, Code2, MessageSquare, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MobileNavProps {
  darkMode: boolean
  toggleDarkMode: () => void
  scrollToSection: (sectionId: string) => void
}

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "services", label: "Services", icon: FolderGit2 },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "contact", label: "Contact", icon: MessageSquare },
]

export const MobileNav = ({ darkMode, toggleDarkMode, scrollToSection }: MobileNavProps) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 safe-area-bottom">
      <div className="flex items-center justify-around py-2 px-2">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="flex flex-col items-center gap-0.5 p-2 min-w-[60px]"
              whileTap={{ scale: 0.9 }}
            >
              <Icon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              <span className="text-[10px] font-medium text-gray-600 dark:text-gray-400">
                {item.label}
              </span>
            </motion.button>
          )
        })}
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleDarkMode}
          className="flex flex-col items-center gap-0.5 p-2 min-w-[60px] h-auto"
        >
          {darkMode ? (
            <>
              <Sun className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              <span className="text-[10px] font-medium text-gray-600 dark:text-gray-400">Light</span>
            </>
          ) : (
            <>
              <Moon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              <span className="text-[10px] font-medium text-gray-600 dark:text-gray-400">Dark</span>
            </>
          )}
        </Button>
      </div>
    </div>
  )
}