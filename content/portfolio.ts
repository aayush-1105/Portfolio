/**
 * ─────────────────────────────────────────────────────────────
 *  CENTRALIZED EDITABLE CONTENT
 *  Edit everything about the portfolio from this single file.
 *  All values below are PLACEHOLDERS — replace with real content.
 * ─────────────────────────────────────────────────────────────
 */

/* {/* EDITABLE: PROFILE / HERO / ABOUT */
export const profile = {
  name: 'Aayush Jha',
  role: 'Computer Science Student',
  avatar: '/avatar.png',
  showAvatar: true, // EDITABLE: Set to false to hide the photo entirely
  about: [
    'I am a CS Senior at PES University with a passion for software development, artificial intelligence and building practical systems that solve real world problems. My experience spans full-stack development, automated testing and a strong foundation in Python',
  ],
}

/* EDITABLE: CURRENTLY BLOCK */
export const currently = [
  { label: 'Current Focus', value: 'Software Engineering & AI Systems' },
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
    description: 'Contributed to native Android application testing, document privacy tooling, and conversational AI integration.',
    achievements: [
      'Gained hands-on experience in native Android app testing using Appium.',
      'Developed an Aadhaar censoring tool to automatically detect and mask Aadhaar numbers in documents.',
      'Created home screen widgets and app shortcuts to enhance functionality of the company’s Android app.',
      'Built an AI-powered help chatbot for the company’s website using a guided flow and conversational AI.',
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
    name: 'AI Powered CI/CD Failure Predictor',
    badge: 'Work in progress',
    showBadge: true, // EDITABLE: Set to false to switch off work in progress badge for this project
    problem: 'Unstructured CI/CD build logs make it difficult to quickly isolate root causes of pipeline failures.',
    solution: 'Engineered a data pipeline using Python and Regex to automatically extract, parse, and tokenize unstructured build logs into structured datasets. Trained a machine learning classification model using pandas and scikit-learn.',
    technologies: ['Python', 'Pandas', 'Scikit-Learn', 'Regex', 'Machine Learning'],
    impact: 'Automated root-cause error isolation and predicted pipeline failures based on log patterns.',
    active: true,
  },
  {
    name: 'Personal Portfolio Website',
    problem: 'Need for a professional, highly polished, and lightning-fast developer portfolio to showcase engineering projects, work experience, and technical toolkit.',
    solution: 'Engineered a modern personal portfolio website using Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS v4. Features centralized content management, motion-driven reveal animations, custom dark theme aesthetics with warm amber ambient glow, and fully responsive design.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Motion'],
    impact: 'Delivered a production-ready, performant engineering portfolio optimized for recruiters and internship applications.',
    github: 'https://github.com/aayush-1105/Portfolio',
    active: true,
  },
  {
    name: 'Bill Split',
    problem: 'Splitting expenses among groups often involves manual calculation errors and tedious tracking.',
    solution: 'Developed a MERN Stack application for seamless bill splitting among users, featuring real-time expense tracking, user authentication, and automated settlement calculations.',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JavaScript'],
    impact: 'Streamlined group expense management with automated calculations and secure user auth.',
    active: false,
  },
  {
    name: 'Weather Monitoring System',
    problem: 'Need for reliable local weather tracking and real-time environmental condition alerts.',
    solution: 'Built an Arduino-based weather tracking system using moisture, rain, and temperature sensors to monitor conditions and display real-time alerts on an LCD screen.',
    technologies: ['Arduino', 'C++', 'Hardware Sensors', 'LCD Display'],
    impact: 'Provided accurate real-time environmental monitoring and immediate visual alerts.',
    active: false,
  },
]

/* EDITABLE: SKILLS (no bars, no ratings) */
export type SkillCategory = {
  category: string
  items: string[]
}

export const skills: SkillCategory[] = [
  { category: 'Languages', items: ['Python', 'Java', 'C', 'SQL (OpenSQL)', 'JavaScript', 'HTML/CSS'] },
  { category: 'Frameworks', items: ['React', 'Node.js'] },
  { category: 'Libraries & Tools', items: ['pandas', 'NumPy', 'Matplotlib', 'Appium', 'Selenium', 'PyTesseract'] },
  { category: 'Developer Tools', items: ['Git', 'Visual Studio', 'IntelliJ'] },
]

/* EDITABLE: CONTACT */
export const contact = {
  email: 'aayushjha1105@gmail.com', // EDITABLE: EMAIL
  phone: '9380519750', // EDITABLE: PHONE
  location: 'Bangalore, India', // EDITABLE: LOCATION
  socials: {
    github: 'https://github.com/aayush-1105', // EDITABLE: GITHUB
    linkedin: 'https://linkedin.com/in/aayushjha1105', // EDITABLE: LINKEDIN
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

export const resumeUrl = 'https://drive.google.com/file/d/1KhA6fZ8biyMSJGY8se52tgY9Z6wxOUVp/view?usp=sharing' // EDITABLE: RÉSUMÉ FILE
