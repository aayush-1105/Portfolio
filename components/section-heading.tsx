import { Reveal } from '@/components/reveal'

type SectionHeadingProps = {
  index: string
  label: string
  title: string
}

export function SectionHeading({ index, label, title }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="flex items-baseline gap-4 text-accent">
        <span className="font-mono text-xs tracking-[0.3em]">{index}</span>
        <span className="h-px flex-1 bg-border" />
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {label}
        </span>
      </div>
      <h2 className="mt-6 text-balance font-serif text-3xl italic text-foreground md:text-5xl">
        {title}
      </h2>
    </Reveal>
  )
}
