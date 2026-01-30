import { HeroSection } from "@/components/sections/hero-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { MyProjects } from "@/components/sections/my-projects"
import { ContactSection } from "@/components/sections/contact-section"
import { MouseGlow } from "@/components/ui-library/effects/mouse-glow"
import { Snowfall } from "@/components/ui/snowfall"

export default function HomePage() {
  return (
    <main className="flex flex-col items-center relative">
      {/* Snowfall effect */}
      <Snowfall count={200} />

      {/* Enhanced global cursor effect with subtle accent glow */}
      <MouseGlow
        color="rgba(59, 130, 246, 0.08)"
        size={400}
        blur={120}
        opacity={0.8}
        followSpeed={0.05}
        pulseEffect={true}
        pulseSpeed={4}
        pulseScale={1.05}
      />

      <HeroSection />
      <SkillsSection />
      <MyProjects />
      <ContactSection />
    </main>
  )
}
