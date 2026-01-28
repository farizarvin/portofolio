"use client"
import { motion } from "framer-motion"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Card, CardContent } from "@/components/ui/card"

export function FeaturesSection() {
  const techStack = [
    {
      category: "Frontend",
      icon: "⚛️",
      technologies: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Framer Motion", level: 80 },
        { name: "ShadcN/UI", level: 90 },
      ],
    },
    {
      category: "Backend",
      icon: "🔧",
      technologies: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "MongoDB", level: 80 },
        { name: "Firebase", level: 85 },
        { name: "Supabase", level: 80 },
      ],
    },
    {
      category: "Tools & Services",
      icon: "🛠️",
      technologies: [
        { name: "Git", level: 95 },
        { name: "GitHub", level: 90 },
        { name: "Vercel", level: 90 },
        { name: "Docker", level: 70 },
        { name: "REST APIs", level: 90 },
        { name: "GraphQL", level: 75 },
      ],
    },
    {
      category: "Design & UX",
      icon: "🎨",
      technologies: [
        { name: "Figma", level: 80 },
        { name: "UI/UX Design", level: 85 },
        { name: "Responsive Design", level: 95 },
        { name: "Web Animation", level: 85 },
        { name: "Accessibility", level: 80 },
        { name: "Performance", level: 85 },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  }

  return (
    <section id="tech-stack" className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-start justify-start space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight">Tech Stack</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Technologies and tools I frequently use to build modern web applications.
            </p>
          </div>
        </ScrollReveal>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {techStack.map((stack, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div variants={itemVariants}>
                <Card className="h-full border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg overflow-hidden group">
                  <CardContent className="p-6 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{stack.icon}</div>
                      <h3 className="text-xl font-semibold text-foreground">{stack.category}</h3>
                    </div>

                    <div className="space-y-3">
                      {stack.technologies.map((tech) => (
                        <motion.div
                          key={tech.name}
                          className="space-y-1"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-foreground">{tech.name}</span>
                            <span className="text-xs text-muted-foreground">{tech.level}%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${tech.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
