import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { GitHubIcon } from '@/components/icons/leetcode'
import { SectionHeading } from '@/components/section-heading'
import { Timeline } from '@/components/timeline'
import { TimelineItem } from '@/components/timeline-item'
import { projects } from '@/content/portfolio'

function Field({ label, children }: { label: string; children: string }) {
  return (
    <div className="border-t border-border/60 pt-3">
      <p className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-1.5 text-pretty font-mono text-sm leading-relaxed text-foreground/85">
        {children}
      </p>
    </div>
  )
}

export function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl px-6 py-24 md:px-8 md:py-32"
    >
      <SectionHeading index="02" label="Selected" title="Projects" />

      <Timeline>
        {projects.map((project, i) => (
          <TimelineItem
            key={project.name}
            eyebrow={`Project ${String(i + 1).padStart(2, '0')}`}
            last={i === projects.length - 1}
            active={project.active}
          >
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <h3 className="font-serif text-3xl italic text-foreground md:text-4xl">
                {project.name}
              </h3>
              <div className="flex items-center gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-accent"
                    aria-label={`${project.name} on GitHub`}
                  >
                    <GitHubIcon className="h-4 w-4" />
                    Code
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-accent"
                    aria-label={`Visit ${project.name}`}
                  >
                    Live
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                )}
              </div>
            </div>

            {/* Optional thumbnail */}
            {project.thumbnail ? (
              <div className="relative mt-6 aspect-[16/9] w-full max-w-2xl overflow-hidden rounded-sm border border-border">
                <Image
                  src={project.thumbnail || '/placeholder.svg'}
                  alt={`${project.name} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 672px"
                  className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
                />
              </div>
            ) : null}

            <div className="mt-6 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Problem">{project.problem}</Field>
              <Field label="Solution">{project.solution}</Field>
              <Field label="Impact">{project.impact}</Field>
              <div className="border-t border-border/60 pt-3">
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-muted-foreground">
                  Technologies
                </p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-sm border border-border px-2 py-0.5 font-mono text-xs text-foreground/80"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  )
}
