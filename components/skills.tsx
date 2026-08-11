import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { skills } from '@/content/portfolio'

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24 md:px-8 md:py-32">
      <SectionHeading index="03" label="Toolkit" title="Skills" />

      <div className="divide-y divide-border border-y border-border">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.06}>
            <div className="grid grid-cols-1 gap-4 py-6 md:grid-cols-[220px_1fr] md:gap-8 md:py-8">
              <h3 className="font-serif text-xl italic text-foreground">
                {group.category}
              </h3>
              <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="font-mono text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
