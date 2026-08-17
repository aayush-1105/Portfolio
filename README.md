# ⚡ Personal Engineering Portfolio & Journal


A modern, high-performance, and fully responsive personal engineering portfolio website built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

👉 **Explore Live Site**: [https://aayushspace.vercel.app/](https://aayushspace.vercel.app/)

---

## ✨ Key Features

- **Single Source of Truth (`content/portfolio.ts`)**: Update everything on the entire website — profile info, currently block, work experience, projects, skills, and social links — from a single TypeScript file without touching component code.
- **Ambient Dark Theme**: Custom matte black canvas (`oklch`) with warm amber ambient glowing atmosphere and subtle film grain overlay.
- **Interactive Timelines**: Vertical rails with animated "breathing" halos on active/current roles and projects.
- **Brand Social Integration**: Direct access to GitHub, LinkedIn, and LeetCode with signature brand color highlights and smooth hover animations.
- **Smooth Animations**: Powered by `motion` (Framer Motion) with restrained scroll-reveal transitions.
- **Optimized Assets**: Next.js image optimization and vector SVG icons.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Server Components)
- **UI Library**: [React](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Motion](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/) & Custom SVGs
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Hosting & Analytics**: [Vercel](https://vercel.com/)

---

## 📁 Project Architecture & Directory Structure

```
Portfolio/
├── app/
│   ├── globals.css          # Tailwind v4 setup, color theme (oklch), ambient glow & film grain
│   ├── layout.tsx           # Root layout: Playfair Display + JetBrains Mono fonts, metadata, Vercel Analytics
│   └── page.tsx             # Single-page layout assembling all portfolio sections
├── components/
│   ├── ui/                  # Reusable UI primitives (Base UI + CVA button)
│   ├── icons/               # Custom vector brand icons (GitHub, LinkedIn, LeetCode)
│   ├── contact.tsx          # Contact section with email, phone, location, & socials
│   ├── experience.tsx       # Work experience & internship timeline
│   ├── hero.tsx             # Hero/About section with portrait avatar and "Currently" status cards
│   ├── navigation.tsx       # Sticky navbar with blur on scroll & animated mobile drawer
│   ├── projects.tsx         # Projects showcase with problem/solution/impact breakdown & tech stack tags
│   ├── reveal.tsx           # Motion scroll-reveal animation wrapper
│   ├── section-heading.tsx  # Numbered section header component (e.g., 01 / Work / Experience)
│   ├── timeline.tsx         # Vertical rail container for timeline items
│   └── timeline-item.tsx    # Timeline item node with animated breathing halo for active items
├── content/
│   └── portfolio.ts         # 🌟 Centralized Single Source of Truth for all portfolio content
├── public/                  # Static assets (avatar, icons, resume.pdf, placeholders)
├── next.config.mjs          # Next.js configuration
├── package.json             # Dependencies and project scripts
└── tsconfig.json            # TypeScript path aliases (@/*) and configuration
```

---

## 🚀 Getting Started Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/aayush-1105/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000).

---

## 📝 Customization Guide

All portfolio content and data are managed inside **`content/portfolio.ts`**:
- **`profile`**: Name, role, avatar photo path, avatar visibility toggle (`showAvatar`), and bio paragraphs.
- **`currently`**: Quick status key-value pairs (*Current Focus, Education, Current Project, Availability*).
- **`experience`**: Work experience and internship history.
- **`projects`**: Selected projects with problem/solution/impact breakdowns, technologies, and GitHub links.
- **`skills`**: Technical toolkit categorized by Languages, Frameworks, Libraries & Tools, and Developer Tools.
- **`contact`**: Email, phone, location, and social profile links (GitHub, LinkedIn, LeetCode).
- **`resumeUrl`**: Direct link to your resume PDF.

---

## 📄 License & Attribution

Designed & built by **Aayush Jha** with intention. Free to use as a template with attribution.
