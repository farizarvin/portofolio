"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Zap,
  Lightbulb,
  ArrowRight,
  Sparkles,
  Rocket,
  Star,
  Heart
} from "lucide-react"

import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedBackground } from "@/components/ui/animated-background"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

export function HeroSection() {
  const floatingIcons = [
    { Icon: Code2, delay: 0, duration: 4, x: -100, y: -50 },
    { Icon: Zap, delay: 0.5, duration: 5, x: 100, y: 100 },
    { Icon: Lightbulb, delay: 1, duration: 4.5, x: -80, y: 150 },
    { Icon: Sparkles, delay: 1.5, duration: 5.5, x: 120, y: -80 },
  ]

  const orbs = [
    { color: "from-blue-500/20 to-transparent", delay: 0, size: 300 },
    { color: "from-purple-500/10 to-transparent", delay: 0.3, size: 250 },
    { color: "from-indigo-500/10 to-transparent", delay: 0.6, size: 350 },
  ]

  return (
    <section id="about" className="relative w-full h-[100dvh] pt-16 md:pt-0 overflow-hidden flex items-center justify-center">
      <AnimatedBackground variant="gradient" color="rgba(59, 130, 246, 0.08)" secondaryColor="rgba(99, 102, 241, 0.05)" />

      {/* Animated orbs background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {orbs.map((orb, index) => (
          <motion.div
            key={index}
            className={`absolute rounded-full bg-gradient-to-r ${orb.color} blur-3xl`}
            style={{
              width: orb.size,
              height: orb.size,
            }}
            animate={{
              x: [0, 30, -30, 0],
              y: [0, -30, 30, 0],
            }}
            transition={{
              duration: 8 + index,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: orb.delay,
            }}
            initial={{
              top: `${20 + index * 20}%`,
              left: `${10 + index * 25}%`,
              opacity: 0.5
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10 w-full max-w-7xl h-full flex flex-col justify-center">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center w-full">
          <ScrollReveal>
            <motion.div
              className="flex flex-col justify-center space-y-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="space-y-6" variants={itemVariants}>
                <motion.div
                  className="flex items-center gap-3 mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 20, -20, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4 }}
                  >
                    <Sparkles className="w-5 h-5 text-primary" />
                  </motion.div>
                  <span className="text-xs md:text-sm font-semibold text-primary tracking-widest uppercase">ML & AI Engineer</span>
                </motion.div>

                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-4xl md:text-7xl font-heading font-bold tracking-tight leading-tight">
                    Hi, I'm{" "}
                    <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                      Fariz Hasim Arvianto
                    </span>
                  </h1>
                </div>

                <motion.p
                  className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-light"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  I build intelligent systems that solve complex problems. Specializing in Deep Learning, Computer Vision, and scalable AI solutions.
                </motion.p>
              </motion.div>

              <motion.div className="space-y-6" variants={itemVariants}>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-4 tracking-wide">TECH STACK</p>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "TensorFlow", "PyTorch", "Scikit-Learn", "MLflow", "Kubeflow", "Docker", "Kubernetes"].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-muted border border-border/50 text-foreground hover:border-primary transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div className="flex flex-wrap gap-4 pt-8" variants={itemVariants}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/70 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
                  <Link
                    href="mailto:farizarvin@gmail.com"
                    className="relative inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:shadow-2xl transition-all duration-300"
                  >
                    <motion.span animate={{ rotate: [0, -10, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
                      <Rocket className="w-4 h-4" />
                    </motion.span>
                    Let's work together
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-border rounded-xl font-semibold text-foreground hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 backdrop-blur-sm"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-border rounded-xl font-semibold text-foreground hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 backdrop-blur-sm"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <motion.div variants={itemVariants} className="lg:pt-8 relative">
              {/* Floating icons background */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {floatingIcons.map(({ Icon, delay, duration, x, y }, index) => (
                  <motion.div
                    key={index}
                    className="absolute text-primary/15 dark:text-primary/20 hidden md:block"
                    animate={{
                      y: [y, y - 40, y],
                      x: [x, x + 30, x],
                      rotate: [0, 360],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration,
                      delay,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <Icon className="w-16 h-16 filter blur-sm" />
                  </motion.div>
                ))}
              </div>

              <div className="space-y-6 relative">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I am passionate about leveraging Artificial Intelligence to drive innovation. With expertise in machine learning architectures and data science, I turn data into actionable insights.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open source, or sharing knowledge with the developer community.
                </p>
                <div className="pt-4">
                  <motion.div whileHover={{ x: 6 }}>
                    <Link
                      href="#projects"
                      className="inline-flex items-center gap-2 text-foreground font-medium group"
                    >
                      Explore my work
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.span>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
