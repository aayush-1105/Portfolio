'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { profile, currently, contact } from '@/content/portfolio'
import { GitHubIcon, LinkedInIcon, LeetCodeIcon } from '@/components/icons/leetcode'

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
  const socials = [
    {
      label: 'GitHub',
      href: contact.socials.github,
      Icon: GitHubIcon,
      iconColor: 'text-white',
      hoverStyle: 'hover:border-white/30 hover:bg-white/[0.07] hover:shadow-[0_4px_20px_rgba(255,255,255,0.1)]',
    },
    {
      label: 'LinkedIn',
      href: contact.socials.linkedin,
      Icon: LinkedInIcon,
      iconColor: 'text-[#0a66c2]',
      hoverStyle: 'hover:border-[#0a66c2]/40 hover:bg-[#0a66c2]/15 hover:shadow-[0_4px_20px_rgba(10,102,194,0.2)]',
    },
    {
      label: 'LeetCode',
      href: contact.socials.leetcode,
      Icon: LeetCodeIcon,
      iconColor: 'text-[#ffa116]',
      hoverStyle: 'hover:border-[#ffa116]/40 hover:bg-[#ffa116]/15 hover:shadow-[0_4px_20px_rgba(255,161,22,0.2)]',
    },
  ]

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
            className="mt-8 max-w-xl space-y-4 text-pretty font-mono text-sm leading-relaxed text-zinc-300"
          >
            {profile.about.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </motion.div>

          {/* Social Links with Original Brand Colors & Glow */}
          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            {socials.map(({ label, href, Icon, iconColor, hoverStyle }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group/pill inline-flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-zinc-300 transition-all duration-300 hover:-translate-y-0.5 hover:text-white ${hoverStyle}`}
              >
                <Icon className={`h-4 w-4 ${iconColor} transition-transform duration-300 group-hover/pill:scale-110`} />
                <span>{label}</span>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Photo / avatar */}
        {profile.showAvatar && (
          <motion.div variants={item} className="order-first md:order-last">
            <div className="relative aspect-[4/5] w-48 overflow-hidden rounded-xl border border-white/10 bg-card/40 md:w-56 shadow-2xl">
              <Image
                src={profile.avatar || '/placeholder.svg'}
                alt={`Portrait of ${profile.name}`}
                fill
                sizes="(max-width: 768px) 192px, 224px"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl" />
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
        className="mt-20 border-t border-border pt-10"
      >
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground">
          Currently
        </p>
        <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {currently.map((entry) => (
            <div
              key={entry.label}
              className="group relative flex items-start gap-3.5 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-accent/30 hover:bg-white/[0.05]"
            >
              <div className="rounded-lg bg-accent/10 p-2 text-accent transition-transform duration-300 group-hover:scale-110">
                <ArrowRight className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <dt className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                  {entry.label}
                </dt>
                <dd className="mt-1 font-mono text-sm text-zinc-200 leading-snug">
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
