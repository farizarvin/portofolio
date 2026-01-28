"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SkillsSection() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Firebase", "GraphQL"],
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "Docker", "AWS", "Vercel", "GitHub", "VS Code"],
    },
    {
      category: "Soft Skills",
      skills: ["Problem Solving", "Team Collaboration", "Communication", "Project Management", "Code Review"],
    },
  ]

  return (
    <section id="skills" className="relative w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-start justify-start space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A comprehensive overview of technologies and skills I've mastered over my development journey.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                <Card className="h-full border border-border/50 hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-xl">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 text-sm rounded-full bg-primary/10 border border-primary/30 text-foreground hover:bg-primary/20 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
