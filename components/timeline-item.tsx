'use client'

import type { ReactNode } from 'react'
import { motion } from 'motion/react'

type TimelineItemProps = {
  /* Small monospace marker shown above the entry (e.g. duration or index). */
  eyebrow?: string
  children: ReactNode
  last?: boolean
  /* When true, a subtle breathing halo is rendered around the dot to signal a current item. */
  active?: boolean
}

export function TimelineItem({
  eyebrow,
  children,
  last,
  active,
}: TimelineItemProps) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`relative ${last ? '' : 'pb-16 md:pb-20'}`}
    >
      {/*
        Node marker on the rail. Every dot is the same size; an active item adds
        a soft, slowly breathing halo behind it (see .timeline-halo) rather than
        changing the dot itself.
      */}
      <span className="absolute -left-[2.35rem] top-1.5 flex h-3 w-3 items-center justify-center md:-left-[3.35rem]">
        {active && (
          <span
            aria-hidden="true"
            className="timeline-halo pointer-events-none absolute h-7 w-7 rounded-full"
          />
        )}
        <span className="relative h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background" />
      </span>

      {eyebrow && (
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">
          {eyebrow}
        </p>
      )}

      {children}
    </motion.li>
  )
}
