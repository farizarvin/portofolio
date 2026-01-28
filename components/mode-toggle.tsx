"use client"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Determine current effective theme
  const currentTheme = mounted ? (theme === "system" ? systemTheme : theme) : "light"

  const isLight = currentTheme === "light"

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="sm"
        className="h-10 w-10 px-0 rounded-xl border-2 border-border/50 bg-transparent"
        disabled
      >
        <Sun className="h-5 w-5" />
      </Button>
    )
  }

  const toggleTheme = () => {
    setTheme(isLight ? "dark" : "light")
  }

  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <Button
        variant="outline"
        size="sm"
        onClick={toggleTheme}
        className="h-10 w-10 px-0 rounded-xl border-2 border-border/50 hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 bg-transparent overflow-hidden relative"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isLight ? (
            <motion.div
              key="sun"
              initial={{ y: -30, opacity: 0, rotate: -90 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: 30, opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <Sun className="h-5 w-5" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ y: -30, opacity: 0, rotate: 90 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: 30, opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              <Moon className="h-5 w-5" />
            </motion.div>
          )}
        </AnimatePresence>
        <span className="sr-only">Toggle theme</span>
      </Button>
    </motion.div>
  )
}
