"use client"

import { Mail, Linkedin, Github, Instagram, Send, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedBackground } from "@/components/ui/animated-background"

export function ContactSection() {
  const contacts = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "farizarvin@gmail.com",
      href: "mailto:farizarvin@gmail.com",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "@farizarvin",
      href: "https://github.com/farizarvin",
      color: "from-slate-600 to-slate-800",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Fariz Hasim Arvianto",
      href: "https://linkedin.com/in/fariz-hasim-arvianto/",
      color: "from-blue-600 to-blue-800",
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      label: "Instagram",
      value: "@farizhasimarvianto",
      href: "https://instagram.com/farizhasimarvianto",
      color: "from-pink-500 to-purple-600",
    },
  ]

  return (
    <section id="contact" className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
      <AnimatedBackground variant="gradient" color="rgba(59, 130, 246, 0.08)" secondaryColor="rgba(99, 102, 241, 0.05)" />

      <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center text-center space-y-8 mb-20">
            <motion.div
              className="flex items-center gap-2 justify-center"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary tracking-widest uppercase">Get In Touch</span>
            </motion.div>

            <div className="space-y-4 text-center">
              <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tight text-center">
                Ready to Build Something
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                I'm always excited to discuss new ideas, collaborate on projects, or simply chat about tech. Whether you have a specific project in mind or just want to connect, I'd love to hear from you.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contacts.map((contact, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Link href={contact.href} target="_blank" rel="noreferrer">
                  <Card className="h-full border-2 border-border/50 hover:border-primary/60 transition-all duration-300 cursor-pointer group overflow-hidden bg-gradient-to-br from-background to-muted/20 backdrop-blur-sm">
                    <CardHeader className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-r ${contact.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                      <div className="relative w-fit p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 mb-2 group-hover:from-primary/30 group-hover:to-primary/20 transition-colors duration-300">
                        <div className="text-primary">{contact.icon}</div>
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">{contact.label}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-medium">{contact.value}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="flex flex-col items-center justify-center gap-6">
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/70 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              <Button
                size="lg"
                asChild
                className="relative px-10 py-6 text-lg font-semibold rounded-2xl group-hover:shadow-2xl transition-all duration-300"
              >
                <Link href="mailto:farizarvin@gmail.com" className="flex items-center gap-2">
                  <motion.span
                    animate={{ rotate: [0, -15, 15, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                  >
                    <Send className="w-5 h-5" />
                  </motion.span>
                  Start a Conversation
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </Link>
              </Button>
            </motion.div>

            <p className="text-muted-foreground text-sm">
              Or reach out on any platform above. I typically respond within 24 hours.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
