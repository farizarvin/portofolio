"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Cpu, Settings, Database } from "lucide-react"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Card, CardContent } from "@/components/ui/card"

export function FeaturesSection() {
  const techStack = [
    {
      category: "Machine Learning",
      icon: <Cpu className="w-7 h-7 text-blue-500" />,
      technologies: [
        { name: "TensorFlow", level: 90 },
        { name: "PyTorch", level: 85 },
        { name: "Scikit-Learn", level: 95 },
        { name: "Keras", level: 90 },
        { name: "XGBoost", level: 85 },
        { name: "LightGBM", level: 80 },
      ],
    },
    {
      category: "Deep Learning",
      icon: <Brain className="w-7 h-7 text-purple-500" />,
      technologies: [
        { name: "CNN", level: 90 },
        { name: "RNN/LSTM", level: 85 },
        { name: "Transformers", level: 85 },
        { name: "GANs", level: 75 },
        { name: "Computer Vision", level: 90 },
        { name: "NLP", level: 85 },
      ],
    },
    {
      category: "MLOps",
      icon: <Settings className="w-7 h-7 text-cyan-500" />,
      technologies: [
        { name: "MLflow", level: 90 },
        { name: "Kubeflow", level: 80 },
        { name: "Docker", level: 85 },
        { name: "Kubernetes", level: 75 },
        { name: "CI/CD", level: 85 },
        { name: "AWS SageMaker", level: 80 },
      ],
    },
    {
      category: "Data & Tools",
      icon: <Database className="w-7 h-7 text-green-500" />,
      technologies: [
        { name: "Python", level: 95 },
        { name: "SQL", level: 90 },
        { name: "Pandas", level: 95 },
        { name: "NumPy", level: 95 },
        { name: "Apache Spark", level: 75 },
        { name: "Git", level: 90 },
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

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <section ref={sectionRef} id="tech-stack" className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <ScrollReveal>
          <div className="flex flex-col items-start justify-start space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight">Tech Stack</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Technologies and tools I frequently use to build modern AI/ML applications.
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
                      <div className="p-2 rounded-lg bg-muted/50">{stack.icon}</div>
                      <h3 className="text-xl font-semibold text-foreground">{stack.category}</h3>
                    </div>

                    <div className="space-y-4">
                      {stack.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech.name}
                          className="space-y-1.5"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ duration: 0.4, delay: techIndex * 0.1 }}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-foreground">{tech.name}</span>
                            <span className="text-xs text-muted-foreground font-medium">{tech.level}%</span>
                          </div>
                          <div className="h-2.5 bg-muted/60 rounded-full overflow-hidden border border-border/30">
                            <motion.div
                              className="h-full bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 rounded-full"
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${tech.level}%` } : { width: 0 }}
                              transition={{ duration: 1, ease: "easeOut", delay: 0.3 + techIndex * 0.1 }}
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
