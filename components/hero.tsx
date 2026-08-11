'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { profile, currently } from '@/content/portfolio'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function Hero() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-5xl px-6 pb-24 pt-36 md:px-8 md:pb-32 md:pt-44"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className={`grid grid-cols-1 gap-12 ${
          profile.showAvatar
            ? 'md:grid-cols-[1fr_auto] md:items-stretch md:gap-16'
            : 'md:grid-cols-1'
        }`}
      >
        <div>
          <motion.p
            variants={item}
            className="font-mono text-xs uppercase tracking-[0.35em] text-accent"
          >
            {/* EDITABLE: ROLE */}
            {profile.role}
          </motion.p>

          {/* EDITABLE: NAME */}
          <motion.h1
            variants={item}
            className="mt-6 text-balance font-serif text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl"
          >
            {profile.name}
          </motion.h1>

          {/* EDITABLE: ABOUT ME */}
          <motion.div
            variants={item}
            className="mt-8 max-w-xl space-y-4 text-pretty font-mono text-sm leading-relaxed text-muted-foreground"
          >
            {profile.about.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </motion.div>
        </div>

        {/* Photo / avatar */}
        {profile.showAvatar && (
          <motion.div variants={item} className="order-first md:order-last">
            <div className="relative w-48 overflow-hidden rounded-sm border border-border md:w-56">
              <Image
                src={profile.avatar || '/placeholder.svg'}
                alt={`Portrait of ${profile.name}`}
                width={1000}
                height={1250}
                className="h-auto w-full rounded-sm object-cover transition-all duration-700 transform-gpu"
                style={{ imageRendering: 'auto' }}
                priority
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* CURRENTLY block */}
      <motion.div
        variants={item}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.5 }}
        className="mt-20 border-t border-border pt-8"
      >
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground">
          Currently
        </p>
        <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
          {currently.map((entry) => (
            <div
              key={entry.label}
              className="group flex items-start gap-3 border-b border-border/60 pb-4"
            >
              <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-1" />
              <div>
                <dt className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                  {entry.label}
                </dt>
                <dd className="mt-1 font-mono text-sm text-foreground">
                  {entry.value}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </motion.div>
    </section>
  )
}
