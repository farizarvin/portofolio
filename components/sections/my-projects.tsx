"use client"

import React from "react"

import { TabsContent } from "@/components/ui/tabs"
import { TabsTrigger } from "@/components/ui/tabs"
import { TabsList } from "@/components/ui/tabs"
import { Tabs } from "@/components/ui/tabs"
import Link from "next/link"
import Image from "next/image"
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
      image: "/projects/savorbite.png",
      link: "https://savorbite.doscom.org/",
      github: "https://github.com/IKOPOO/ecoBite",
    },
    {
      title: "Kampus Bot AI",
      description: "AI chatbot kampus dengan Groq Llama 3.3 70B untuk respons natural Bahasa Indonesia. Fitur: K-NN Intent Classification, Sentiment Analysis real-time, keyword extraction, dan RAG Context dari dokumen ter-cluster.",
      tech: ["Python", "Django", "Groq", "RAG", "Ollama"],
      image: "/projects/kampusbot.png",
      link: "#MyProjects",
      github: "https://github.com/farizarvin/MiniRAG-Chat",
    },
    {
      title: "Methalyst",
      description: "Web application untuk prediksi methanol menggunakan machine learning. Model dibangun dengan Scikit-learn, backend FastAPI, dan di-deploy ke AWS dengan PM2 sebagai process manager.",
      tech: ["Next.js", "Tailwind CSS", "FastAPI", "Scikit-learn", "AWS", "PM2"],
      image: "/projects/methalyst.png",
      link: "https://methalyst.vercel.app",
      github: "https://github.com/farizarvin/methalyst",
    },
    {
      title: "SafePay.AI",
      description: "Sistem deteksi penipuan online menggunakan machine learning. Model klasifikasi dibangun dengan Scikit-learn untuk mengidentifikasi transaksi mencurigakan secara real-time.",
      tech: ["Next.js", "Tailwind CSS", "FastAPI", "Scikit-learn", "AWS", "PM2"],
      image: "/projects/safepay.png",
      link: "https://safepay-theta.vercel.app",
      github: "https://github.com/farizarvin/safepay.ai",
      badge: "🏆 1st Place",
    },
    {
      title: "StuntSense",
      description: "Website untuk prediksi stunting pada anak menggunakan machine learning dan AI. Dilengkapi dengan chatbot AI berbasis Groq dan Ollama untuk konsultasi gizi.",
      tech: ["Laravel", "Blade", "JWT", "MySQL", "Groq", "Tailwind CSS"],
      image: "/projects/stuntsense.png",
      link: "#",
      github: "https://github.com/farizarvin/StuntSense",
      badge: "🏆 Best Paper",
    },
    {
      title: "Dailyku",
      description: "Sistem akademik dan absensi untuk siswa SMA dengan fitur utama monitoring tingkat depresi. Menggunakan BERT untuk analisis teks, YOLO untuk face detection, dan integrasi AI untuk kesehatan mental.",
      tech: ["Laravel", "Livewire", "BERT", "YOLO", "FastAPI", "JWT"],
      image: "�",
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
                  <div className="h-40 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center border-b border-border/50 overflow-hidden">
                    {project.image.startsWith('/') ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={160}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <span className="text-6xl opacity-60 group-hover:opacity-100 transition-opacity">{project.image}</span>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors flex items-center gap-2 flex-wrap">
                      {project.title}
                      {project.badge && (
                        <span className="px-2.5 py-1 text-xs rounded-full bg-yellow-500/20 border border-yellow-500/50 text-yellow-600 dark:text-yellow-400 font-medium">
                          {project.badge}
                        </span>
                      )}
                    </CardTitle>
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
