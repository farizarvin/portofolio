"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Snowflake } from "lucide-react"
import { useTheme } from "next-themes"

interface SnowflakeProps {
    id: number
    initialX: number
    size: number
    duration: number
    delay: number
    opacity: number
}

function FallingSnowflake({ initialX, size, duration, delay, opacity }: SnowflakeProps) {
    const [pageHeight, setPageHeight] = useState(200)
    const { resolvedTheme } = useTheme()

    useEffect(() => {
        const updateHeight = () => {
            setPageHeight(document.documentElement.scrollHeight)
        }
        updateHeight()
        window.addEventListener('resize', updateHeight)

        const interval = setInterval(updateHeight, 100)

        return () => {
            window.removeEventListener('resize', updateHeight)
            clearInterval(interval)
        }
    }, [])

    // Use inline color based on theme
    const snowColor = resolvedTheme === 'dark' ? 'rgba(255, 255, 255, 0.6)' : '#1a1a1a'

    return (
        <motion.div
            className="absolute pointer-events-none"
            style={{ left: initialX }}
            initial={{
                y: -50,
                rotate: 0,
                opacity: 0
            }}
            animate={{
                y: pageHeight + 50,
                x: [0, 30, -20, 15, 0],
                rotate: 360,
                opacity: [0, opacity, opacity, opacity, opacity, 0]
            }}
            transition={{
                duration: duration,
                delay: delay,
                repeat: Infinity,
                ease: "linear",
            }}
        >
            <Snowflake
                color={snowColor}
                size={size}
                strokeWidth={3}
            />
        </motion.div>
    )
}

export function Snowfall({ count = 30 }: { count?: number }) {
    const [snowflakes, setSnowflakes] = useState<SnowflakeProps[]>([])
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const flakes: SnowflakeProps[] = []

        for (let i = 0; i < count; i++) {
            flakes.push({
                id: i,
                initialX: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                size: Math.random() * 18 + 12, // 12-30px (bigger)
                duration: Math.random() * 25 + 20, // 20-45s (much slower)
                delay: Math.random() * 20, // 0-20s delay
                opacity: Math.random() * 0.2 + 0.2, // 0.2-0.4 opacity (more subtle)
            })
        }

        setSnowflakes(flakes)
    }, [count])

    if (!mounted) return null

    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-0">
            {snowflakes.map((flake) => (
                <FallingSnowflake key={flake.id} {...flake} />
            ))}
        </div>
    )
}
