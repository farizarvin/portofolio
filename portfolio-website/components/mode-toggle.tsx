"use client"
import { useTheme } from "next-themes"
import { Moon, Sun, Laptop } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Determine current effective theme
  const currentTheme = mounted ? (theme === "system" ? systemTheme : theme) : "light"

  const isLight = currentTheme === "light"
  const isDark = currentTheme === "dark"

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

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Button 
            variant="outline" 
            size="sm" 
            className="h-10 w-10 px-0 rounded-xl border-2 border-border/50 hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 bg-transparent"
          >
            {isLight ? (
              <motion.div
                key="sun"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                <Sun className="h-5 w-5" />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.3 }}
              >
                <Moon className="h-5 w-5" />
              </motion.div>
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </motion.div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="glassmorphic-dropdown border-2 border-border/50 w-48">
        <DropdownMenuItem 
          onClick={() => setTheme("light")}
          className="flex items-center gap-2 cursor-pointer py-2.5"
        >
          <motion.div
            animate={{ rotate: theme === "light" ? 0 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Sun className="h-4 w-4" />
          </motion.div>
          <span className="flex-1">Light Mode</span>
          {theme === "light" && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
              className="h-2 w-2 rounded-full bg-primary"
            />
          )}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("dark")}
          className="flex items-center gap-2 cursor-pointer py-2.5"
        >
          <motion.div
            animate={{ rotate: theme === "dark" ? 0 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Moon className="h-4 w-4" />
          </motion.div>
          <span className="flex-1">Dark Mode</span>
          {theme === "dark" && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
              className="h-2 w-2 rounded-full bg-primary"
            />
          )}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("system")}
          className="flex items-center gap-2 cursor-pointer py-2.5"
        >
          <motion.div
            animate={{ rotate: theme === "system" ? 0 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Laptop className="h-4 w-4" />
          </motion.div>
          <span className="flex-1">System</span>
          {theme === "system" && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
              className="h-2 w-2 rounded-full bg-primary"
            />
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
