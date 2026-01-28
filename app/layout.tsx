import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"

import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageTransition } from "@/components/page-transition"

import "@/app/globals.css"
import { Suspense } from "react"

// Use only Google Fonts to avoid any local font references
const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
})

const fontHeading = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700"],
})

export const metadata: Metadata = {
  title: "Portfolio | ML & AI Engineer",
  description: "ML & AI Engineer specializing in building intelligent systems, deep learning models, and computer vision solutions.",
  keywords: ["ML Engineer", "AI Engineer", "Deep Learning", "Computer Vision", "Python", "TensorFlow", "PyTorch"],
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground font-sans antialiased font-light",
          fontSans.variable,
          fontHeading.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="theme">
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <Suspense>
              <PageTransition>
                <div className="flex-1">{children}</div>
              </PageTransition>
            </Suspense>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
