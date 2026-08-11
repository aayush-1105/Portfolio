import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { Experience } from '@/components/experience'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { Contact } from '@/components/contact'

export default function Page() {
  return (
    <div className="grain relative min-h-screen overflow-x-hidden">
      {/* Faint warm amber ambient atmosphere */}
      <div
        aria-hidden="true"
        className="ambient-glow pointer-events-none fixed inset-0 z-0"
      />

      <div className="relative z-10">
        <Navigation />
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </div>
  )
}
