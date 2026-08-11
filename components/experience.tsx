import { ArrowUpRight, Dot } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Timeline } from '@/components/timeline'
import { TimelineItem } from '@/components/timeline-item'
import { experience, isCurrentExperience } from '@/content/portfolio'

export function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-5xl px-6 py-24 md:px-8 md:py-32"
    >
      <SectionHeading index="01" label="Work" title="Experience" />

      <Timeline>
        {experience.map((entry, i) => (
          <TimelineItem
            key={entry.company}
            eyebrow={entry.duration}
            last={i === experience.length - 1}
            active={isCurrentExperience(entry)}
          >
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-serif text-2xl text-foreground md:text-3xl">
                {entry.role}
              </h3>
              {entry.link ? (
                <a
                  href={entry.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 font-mono text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  @ {entry.company}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ) : (
                <span className="font-mono text-sm text-muted-foreground">
                  @ {entry.company}
                </span>
              )}
            </div>

            <p className="mt-4 max-w-2xl text-pretty font-mono text-sm leading-relaxed text-muted-foreground">
              {entry.description}
            </p>

            <ul className="mt-5 space-y-2">
              {entry.achievements.map((achievement, j) => (
                <li
                  key={j}
                  className="flex items-start gap-1.5 font-mono text-sm leading-relaxed text-foreground/85"
                >
                  <Dot className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  )
}
