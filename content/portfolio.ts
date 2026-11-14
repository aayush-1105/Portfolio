/**
 * ─────────────────────────────────────────────────────────────
 *  CENTRALIZED EDITABLE CONTENT
 *  Edit everything about the portfolio from this single file.
 *  Updated with verified details from resume.
 * ─────────────────────────────────────────────────────────────
 */

/* EDITABLE: PROFILE / HERO / ABOUT */
export const profile = {
  name: 'Aayush Jha',
  role: 'Computer Science Student',
  avatar: '/avatar.png',
  showAvatar: true, // EDITABLE: Set to false to hide the photo entirely
  about: [
    'I am a Computer Science undergraduate at PES University (2023 — 2027) with a focus on distributed systems, containerized LLM architectures, and machine learning infrastructure. My experience spans building high-throughput data pipelines, microservices, automated testing, and systems programming across Python, C, and TypeScript.',
  ],
}

/* EDITABLE: CURRENTLY BLOCK */
export const currently = [
  { label: 'Current Focus', value: 'Distributed Systems & LLM Infrastructure' },
  { label: 'Education', value: 'B.Tech Computer Science, PES University (2023 — 2027)' },
  { label: 'Current Project', value: 'AI Powered CI/CD Failure Predictor' },
  { label: 'Availability', value: 'Open to Internships & Opportunities' },
]

/* EDITABLE: WORK EXPERIENCE TIMELINE */
export type ExperienceEntry = {
  company: string
  role: string
  duration: string
  description: string
  achievements: string[]
  link?: string
  /*
   * Marks this as the role you currently hold → renders a slightly larger
   * timeline dot. If omitted, it is auto-derived from a duration ending in
   * "Present" (e.g. "2025 — Present"). Set explicitly to override.
   */
  current?: boolean
}

/* True when a duration reads as ongoing, e.g. "2025 — Present". */
function isOngoing(duration: string): boolean {
  return /present|current|now/i.test(duration)
}

/* Resolve whether an experience entry should render the larger "current" dot. */
export function isCurrentExperience(entry: ExperienceEntry): boolean {
  return entry.current ?? isOngoing(entry.duration)
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Transaction Analysts',
    role: 'Summer Intern',
    duration: 'June 2025 — July 2025',
    description: 'Contributed to native Android application test automation, document privacy tooling, and conversational AI integration.',
    achievements: [
      'Developed and executed Android application test automation scripts using Appium.',
      'Worked on an Aadhaar number masking solution for detecting and redacting sensitive information in documents.',
      'Developed Android home-screen widgets and application shortcuts to improve accessibility.',
      'Integrated an AI-powered chatbot using Ollama and Mistral into the company website for conversational assistance.',
    ],
  },
]

/* EDITABLE: PROJECTS TIMELINE (the largest section) */
export type ProjectEntry = {
  name: string
  problem: string
  solution: string
  technologies: string[]
  impact: string
  github?: string
  link?: string
  thumbnail?: string // optional — e.g. '/projects/name.png'
  /*
   * Marks a project as actively maintained/in-progress → renders a slightly
   * larger timeline dot. Manually controlled: set active: true / false.
   * Omitted or false → normal dot.
   */
  active?: boolean
  badge?: string // optional badge e.g. 'Work in progress'
  showBadge?: boolean // EDITABLE: Set to false to hide badge for this specific project (defaults to true if omitted)
}

export const showProjectBadges = true // EDITABLE: Set to false to hide badges on all projects

export const projects: ProjectEntry[] = [
  {
    name: 'CI/CD Failure Predictor',
    badge: 'Work in progress',
    showBadge: true,
    problem: 'Unstructured CI execution logs and lengthy feedback loops make it difficult to catch build failures early and isolate root causes prior to complete pipeline execution.',
    solution: 'Built a multi-modal ML pipeline combining TravisTorrent build metadata and raw CI execution logs. Trained a LightGBM metadata classifier alongside a Bidirectional LSTM (BiLSTM) log sequence model to classify breakages across 8 distinct failure classes.',
    technologies: ['Python', 'PyTorch', 'LightGBM', 'BiLSTM', 'SHAP'],
    impact: 'Engineered an automated root-cause analysis (RCA) module using SHAP feature attribution to isolate failing log patterns and high-risk commit metadata, predicting pipeline failures prior to full completion.',
    active: true,
  },
  {
    name: 'VanguardAI',
    badge: 'Active',
    showBadge: true,
    problem: 'Need for a unified LLM gateway resilient to vendor failures, high inference costs, uncurated RAG matches, and unauthorized PII leakage into external model APIs.',
    solution: 'Built a containerized LLM gateway in FastAPI and Docker with dynamic provider/model routing, live model discovery, 3-state circuit breakers, and prompt guardrails. Implemented hybrid RAG combining Qdrant dense search, BM25, Reciprocal Rank Fusion, and cross-encoder reranking alongside semantic caching.',
    technologies: ['Python', 'Docker', 'Redis', 'Qdrant', 'FastAPI'],
    impact: 'Engineered Redis-backed PII masking (300s TTL) that scrubs prompts and retrieved RAG chunks before external inference and rehydrates tags mid-stream over SSE, ensuring privacy-safe and resilient AI inference.',
    github: 'https://github.com/aayush-1105/VanguardAI',
    active: true,
  },
  {
    name: 'Distributed Image Processing Pipeline',
    problem: 'High computational latency and sequential processing bottlenecks when applying heavy computer vision transformations to large 4K high-resolution images.',
    solution: 'Engineered a fault-tolerant producer–broker–consumer pipeline using Apache Kafka consumer groups and Flask to distribute tile-partitioned 4K image workloads across concurrent worker nodes.',
    technologies: ['Python', 'Apache Kafka', 'OpenCV', 'Flask', 'Distributed Computing'],
    impact: 'Parallelized OpenCV image transformations with lossless final image reconstruction, tuning Kafka partition and batch sizes to eliminate bottlenecks and multiply throughput.',
    active: false,
  },
  {
    name: 'Mini-UnionFS — Union File System in Userspace',
    problem: 'Need for a virtual file system that transparently merges distinct directory branches while preserving underlying read-only assets and providing isolated write layers.',
    solution: 'Implemented a user-space Union File System in C using FUSE by merging read-only and read-write directory layers with full POSIX operation support.',
    technologies: ['C', 'Linux', 'FUSE', 'POSIX APIs'],
    impact: 'Developed Copy-on-Write (CoW) semantics and whiteout-based deletion handling, replicating key architectural concepts of Docker’s layered filesystem.',
    active: false,
  },
  {
    name: 'Personal Portfolio Website',
    problem: 'Need for a professional, performant, and easily maintainable developer portfolio showcasing production systems, engineering projects, and technical toolkit.',
    solution: 'Built and deployed a responsive developer portfolio using Next.js App Router and TypeScript with modular component architecture, centralized content management, SEO optimization, and motion-driven UI interactions.',
    technologies: ['TypeScript', 'Next.js', 'React', 'Tailwind CSS', 'Motion'],
    impact: 'Configured automated GitHub-to-Vercel continuous deployment pipelines, server-rendered metadata routes, and strict TypeScript type checking for zero-downtime releases.',
    github: 'https://github.com/aayush-1105/Portfolio',
    link: 'https://aayushspace.vercel.app/',
    active: false,
  },
]

/* EDITABLE: SKILLS (Categorized toolkit) */
export type SkillCategory = {
  category: string
  items: string[]
}

export const skills: SkillCategory[] = [
  { category: 'Languages', items: ['Python', 'C', 'JavaScript', 'TypeScript', 'SQL', 'HTML/CSS'] },
  { category: 'AI Tooling', items: ['Claude Code', 'Antigravity', 'Ollama (Mistral)', 'Cline'] },
  { category: 'Frameworks', items: ['FastAPI', 'React', 'Next.js', 'Node.js', 'Streamlit'] },
  { category: 'Libraries & Tools', items: ['Docker', 'Redis', 'Qdrant', 'Apache Kafka', 'Pytest', 'Locust', 'Pandas', 'NumPy', 'Appium'] },
  { category: 'Developer Tools', items: ['Git', 'Linux', 'VS Code', 'IntelliJ IDEA'] },
]

/* EDITABLE: CONTACT */
export const contact = {
  email: 'aayushjha1105@gmail.com', // EDITABLE: EMAIL
  phone: '9380519750', // EDITABLE: PHONE
  location: 'Bangalore, KA', // EDITABLE: LOCATION
  socials: {
    github: 'https://github.com/aayush-1105', // EDITABLE: GITHUB
    linkedin: 'https://in.linkedin.com/in/aayush-jha-252a38217', // EDITABLE: LINKEDIN
    leetcode: 'https://leetcode.com/u/abcdev081/', // EDITABLE: LEETCODE
  },
}

/* EDITABLE: NAVIGATION */
export const navLinks = [
  { label: 'ABOUT', href: '#about' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'CONTACT', href: '#contact' },
]

export const resumeUrl = '/resume.pdf' // EDITABLE: RÉSUMÉ FILE
