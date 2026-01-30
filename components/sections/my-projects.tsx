"use client"

import React from "react"

import { TabsContent } from "@/components/ui/tabs"
import { TabsTrigger } from "@/components/ui/tabs"
import { TabsList } from "@/components/ui/tabs"
import { Tabs } from "@/components/ui/tabs"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ExternalLink, Github, Globe } from "lucide-react"

export function MyProjects() {
  const projects = [
    {
      title: "SavorBite",
      description: "Platform untuk menjual makanan yang hampir kadaluarsa dengan harga diskon. Fitur utama: AI prediction untuk memprediksi makanan akan terjual atau basi, dan recipe generator dari bahan makanan yang tersedia.",
      tech: ["Next.js", "Golang", "Ollama", "PostgreSQL", "Tailwind CSS", "Groq"],
      image: "🍽️",
      link: "https://savorbite.doscom.org/",
      github: "https://github.com/IKOPOO/ecoBite",
    },
    {
      title: "Kampus Bot AI",
      description: "AI chatbot kampus dengan Groq Llama 3.3 70B untuk respons natural Bahasa Indonesia. Fitur: K-NN Intent Classification, Sentiment Analysis real-time, keyword extraction, dan RAG Context dari dokumen ter-cluster.",
      tech: ["Python", "Django", "Groq", "RAG", "Ollama"],
      image: "🤖",
      link: "#MyProjects",
      github: "https://github.com/farizarvin/MiniRAG-Chat",
    },
    {
      title: "Methanol Prediction",
      description: "Web application untuk prediksi methanol menggunakan machine learning. Model dibangun dengan Scikit-learn, backend FastAPI, dan di-deploy ke AWS dengan PM2 sebagai process manager.",
      tech: ["Next.js", "Tailwind CSS", "FastAPI", "Scikit-learn", "AWS", "PM2"],
      image: "🧪",
      link: "https://methalyst.vercel.app",
      github: "https://github.com/farizarvin/methalyst",
    },
    {
      title: "Portfolio Generator",
      description: "Automated tool that converts GitHub profiles into beautiful, customizable portfolios. Includes theme selection, domain management, and one-click deployment to Vercel.",
      tech: ["Next.js", "GitHub API", "Vercel", "Tailwind CSS", "TypeScript", "React"],
      image: "🎨",
      link: "#",
      github: "#",
    },
    {
      title: "Content Management System",
      description: "Headless CMS with rich text editor, media library, scheduled publishing, and SEO optimization. Built with GraphQL backend for flexible content queries and asset management.",
      tech: ["Next.js", "GraphQL", "PostgreSQL", "TypeScript", "Node.js", "Strapi"],
      image: "📝",
      link: "#",
      github: "#",
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time data visualization platform for tracking user metrics, revenue, and engagement. Features interactive charts, custom reports, and automated email alerts.",
      tech: ["React", "Chart.js", "Redux", "Node.js", "MongoDB", "Express"],
      image: "📊",
      link: "#",
      github: "#",
    },
  ]

  const [activeTab, setActiveTab] = React.useState("cards")

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <ScrollReveal>
          <div className="flex flex-col items-start justify-start space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight">My Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A selection of projects showcasing my expertise in full-stack development, from concept to deployment.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg overflow-hidden group">
                  <div className="h-32 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center border-b border-border/50">
                    <span className="text-6xl opacity-60 group-hover:opacity-100 transition-opacity">{project.image}</span>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-sm leading-relaxed text-foreground/70">
                      {project.description}
                    </CardDescription>

                    <div className="space-y-3 pt-2">
                      <p className="text-xs font-semibold text-foreground/60 tracking-wide">TECHNOLOGIES</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <motion.span
                            key={tech}
                            className="px-2.5 py-1 text-xs rounded-full bg-primary/10 border border-primary/20 text-foreground/80 hover:border-primary/50 transition-colors cursor-default"
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4 border-t border-border/30">
                      <Link
                        href={project.link}
                        className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-primary transition-colors flex-1"
                      >
                        <Globe className="w-3.5 h-3.5" />
                        View
                      </Link>
                      <Link
                        href={project.github}
                        className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-primary transition-colors flex-1"
                      >
                        <Github className="w-3.5 h-3.5" />
                        Code
                      </Link>
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
