"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import {
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiKeras,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiTypescript,
  SiMongodb,
  SiDocker,
  SiAmazon,
  SiPython,
  SiPandas,
  SiNumpy,
  SiGit,
  SiPostgresql,
  SiLinux,
  SiNginx,
  SiPm2,
  SiOllama,
  SiGo,
  SiDjango
} from "react-icons/si"

export function SkillsSection() {
  const techStackRow1 = [
    { name: "TensorFlow", icon: <SiTensorflow className="w-8 h-8 text-orange-500" /> },
    { name: "PyTorch", icon: <SiPytorch className="w-8 h-8 text-red-500" /> },
    { name: "Scikit-Learn", icon: <SiScikitlearn className="w-8 h-8 text-blue-500" /> },
    { name: "Keras", icon: <SiKeras className="w-8 h-8 text-red-600" /> },
    { name: "Python", icon: <SiPython className="w-8 h-8 text-yellow-500" /> },
    { name: "Pandas", icon: <SiPandas className="w-8 h-8 text-blue-600" /> },
    { name: "NumPy", icon: <SiNumpy className="w-8 h-8 text-blue-400" /> },
  ]

  const techStackRow2 = [
    { name: "React", icon: <SiReact className="w-8 h-8 text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8 text-foreground" /> },
    { name: "Node.js", icon: <SiNodedotjs className="w-8 h-8 text-green-500" /> },
    { name: "Express", icon: <SiExpress className="w-8 h-8 text-foreground" /> },
    { name: "TypeScript", icon: <SiTypescript className="w-8 h-8 text-blue-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="w-8 h-8 text-green-600" /> },
    { name: "Golang", icon: <SiGo className="w-8 h-8 text-cyan-500" /> },
    { name: "Django", icon: <SiDjango className="w-8 h-8 text-green-700" /> },
  ]

  const techStackRow3 = [
    { name: "Docker", icon: <SiDocker className="w-8 h-8 text-blue-500" /> },
    { name: "AWS", icon: <SiAmazon className="w-8 h-8 text-orange-400" /> },
    { name: "Git", icon: <SiGit className="w-8 h-8 text-orange-600" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="w-8 h-8 text-blue-400" /> },
    { name: "Linux", icon: <SiLinux className="w-8 h-8 text-yellow-500" /> },
    { name: "Nginx", icon: <SiNginx className="w-8 h-8 text-green-500" /> },
    { name: "PM2", icon: <SiPm2 className="w-8 h-8 text-purple-500" /> },
    { name: "Ollama", icon: <SiOllama className="w-8 h-8 text-foreground" /> },
  ]

  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight">
              Skills
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Technologies and tools I use to build amazing products
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-8">
          <ScrollReveal delay={0.1}>
            <div className="space-y-2">
              <InfiniteMovingCards
                items={techStackRow1}
                direction="left"
                speed="slow"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-2">
              <InfiniteMovingCards
                items={techStackRow2}
                direction="right"
                speed="slow"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="space-y-2">
              <InfiniteMovingCards
                items={techStackRow3}
                direction="left"
                speed="slow"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
