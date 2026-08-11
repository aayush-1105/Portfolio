# ⚡ Personal Engineering Portfolio & Journal

A modern, high-performance, and fully responsive personal portfolio website built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

---

## ✨ Features

- **Single Source of Truth (`content/portfolio.ts`)**: Update everything on the entire website — profile info, currently block, work experience, projects, skills, and social links — from a single TypeScript file.
- **Ambient Dark Theme**: Custom matte black canvas with warm amber ambient glowing atmosphere and film grain overlay.
- **Interactive Timelines**: Vertical rails with animated "breathing" halos on active/current roles and projects.
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

## 📝 Customization

All portfolio content is located in **`content/portfolio.ts`**:
- **`profile`**: Name, role, avatar photo, about paragraphs, and avatar visibility toggle (`showAvatar`).
- **`currently`**: Quick snapshot items (focus, education, current project, availability).
- **`experience`**: Work experience and internships timeline.
- **`projects`**: Selected projects with problem/solution breakdowns, technologies, and GitHub links.
- **`skills`**: Technical toolkit categorized by Languages, Frameworks, Libraries & Tools, and Developer Tools.
- **`contact`**: Email, phone, location, and social profile links (GitHub, LinkedIn, LeetCode).

---

## 📄 License

Designed & built by **Aayush Jha** with intention. Free to use as a template with attribution.
