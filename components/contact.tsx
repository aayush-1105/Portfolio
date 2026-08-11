import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import {
  GitHubIcon,
  LinkedInIcon,
  LeetCodeIcon,
} from '@/components/icons/leetcode'
import { contact, profile } from '@/content/portfolio'

export function Contact() {
  const socials = [
    { label: 'GitHub', href: contact.socials.github, Icon: GitHubIcon },
    { label: 'LinkedIn', href: contact.socials.linkedin, Icon: LinkedInIcon },
    { label: 'LeetCode', href: contact.socials.leetcode, Icon: LeetCodeIcon },
  ]

  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl px-6 py-24 md:px-8 md:py-32"
    >
      <SectionHeading index="04" label="Say Hello" title="Contact" />

      <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_auto] md:items-end">
        <Reveal>
          <p className="max-w-md text-pretty font-mono text-sm leading-relaxed text-muted-foreground">
            Have a role, a project, or a question? My inbox is always open.
          </p>

          {/* Email */}
          <a
            href={`mailto:${contact.email}`}
            className="group mt-6 inline-flex items-center gap-3 font-serif text-2xl italic text-foreground transition-colors hover:text-accent md:text-4xl"
          >
            <Mail className="h-6 w-6 shrink-0" />
            {contact.email}
            <ArrowUpRight className="h-5 w-5 shrink-0 opacity-0 transition-all duration-300 group-hover:opacity-100" />
          </a>

          {/* Phone & Location */}
          <div className="mt-6 flex flex-wrap items-center gap-6">
            {contact.phone && (
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-accent"
              >
                <Phone className="h-4 w-4 text-accent" />
                {contact.phone}
              </a>
            )}
            <p className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-accent" />
              {contact.location}
            </p>
          </div>
        </Reveal>

        {/* Social icons */}
        <Reveal delay={0.1}>
          <ul className="flex items-center gap-6">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex text-muted-foreground transition-colors duration-300 hover:text-accent"
                >
                  <Icon className="h-6 w-6" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <footer className="mt-24 border-t border-border pt-8">
        <p className="font-mono text-xs tracking-[0.15em] text-muted-foreground">
          © {new Date().getFullYear()} {profile.name} — Designed & built with
          intention.
        </p>
      </footer>
    </section>
  )
}
