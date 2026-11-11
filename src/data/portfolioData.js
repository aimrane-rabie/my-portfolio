// src/data/portfolioData.js
// Single source of truth for all portfolio content.
// Replace every [bracketed] value with your real information.
// Rule: never show a number you did not measure. Leave `metrics` empty
// and `caseStudy` fields as null until the project is finished.

export const personal = {
  name: "Aimrane Rabie",
  initials: "AR",
  role: "Full-Stack Developer",
  tagline: "I build fast, accessible web apps that solve real problems.",
  location: "Casablanca, Morocco",
  available: true,
  availableLabel: "Open to internships",
  email: "aimrane.rabie@gmail.com",
  photo: "/me.webp", 
  photoAlt: "Aimrane Rabie, full-stack developer",
  cv: "/cv.pdf", 
  socials: {
    github: "https://github.com/[username]",
    linkedin: "https://linkedin.com/in/[username]",
  },
};

export const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  primaryCta: { label: "View Projects", href: "#projects" },
  secondaryCta: { label: "Contact Me", href: "#contact" },
  // Shown in the code card next to your photo
  codeCard: {
    filename: "developer.ts",
    role: "Full-Stack Developer",
    focus: ["MERN stack", "clean UI"],
    openToWork: true,
  },
};

export const sections = {
  projects: {
    eyebrow: "01 · Selected work",
    title: "Projects that solve real problems",
    subtitle:
      "Three full-stack projects across developer tools, education and commerce.",
  },
  skills: {
    eyebrow: "02 · Skills",
    title: "The tools I reach for",
    subtitle:
      "I pick tools that keep the product fast, simple to maintain and easy to ship.",
  },
  about: {
    eyebrow: "03 · About",
    title: "I start with the user, then the constraint",
  },
  experience: {
    eyebrow: "04 · Experience",
    title: "Where I've worked and learned",
  },
  contact: {
    eyebrow: "05 · Contact",
    title: "Have a project in mind?",
    subtitle: "[One line: what you're open to and how quickly you reply.]",
  },
};

// ---------------------------------------------------------------------------
// Projects
// status: "planned" | "building" | "live"
//   - show a badge from projectStatus on each card
//   - hide the Live Demo / GitHub buttons while the link is null
// mockup: placeholder frame ("dashboard" | "store" | "mobile").
//   Once you have a screenshot, set `image: "/projects/name.webp"`.
// metrics: leave [] until you have real, measured numbers.
// ---------------------------------------------------------------------------
export const projectStatus = {
  planned: "Planned",
  building: "In progress",
  live: "Live",
};

export const projects = [
  {
    id: "snipvault",
    number: "01",
    year: "2026",
    status: "building",
    title: "SnipVault",
    summary:
      "A code snippet manager where developers save, tag, search and share their snippets.",
    problem:
      "Developers lose useful snippets across notes, chats and old repos, and can't find them when needed.",
    role: "Solo build: design, frontend, API and deployment",
    stack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT"],
    features: [
      "Sign up and log in with JWT",
      "Create, edit and delete snippets",
      "Syntax highlighting and one-click copy",
      "Tags, search and filters",
      "Public share links",
      "Dark mode",
    ],
    mockup: "dashboard",
    image: "./SnipVault.jpg",
    imageAlt: "SnipVault dashboard listing saved snippets with tags",
    url: "snipvault.[domain]",
    metrics: [], // e.g. { value: "98", label: "Lighthouse performance" }
    caseStudy: { problem: null, solution: null, result: null },
    links: { demo: null, github: null },
  },
  {
    id: "quizlab",
    number: "02",
    year: "2026",
    status: "planned",
    title: "QuizLab",
    summary:
      "A quiz platform where teachers create tests and students take them and track progress.",
    problem:
      "Small classes and tutors have no simple way to run timed quizzes and see who needs help.",
    role: "Solo build: database design, role-based API, dashboards",
    stack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Chart.js"],
    features: [
      "Teacher and student roles with different permissions",
      "Quiz builder with multiple question types",
      "Timer and automatic grading",
      "Results history per student",
      "Statistics dashboard with charts",
    ],
    mockup: "mobile",
    image: "./QuizLab.jpg",
    imageAlt: "QuizLab results dashboard with score charts",
    url: "quizlab.[domain]",
    metrics: [],
    caseStudy: { problem: null, solution: null, result: null },
    links: { demo: null, github: null },
  },
  {
    id: "shop",
    number: "03",
    year: "2026",
    status: "planned",
    title: "[Shop name]",
    summary:
      "An online store with an admin dashboard, built for a small real shop if possible.",
    problem:
      "Small shops sell through chat apps and lose track of orders, stock and customers.",
    role: "Solo build: storefront, admin dashboard, API and payments",
    stack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Stripe (test mode)"],
    features: [
      "Product catalog with search, filters and pagination",
      "Cart and checkout",
      "Order statuses and history",
      "Admin dashboard for products and orders",
      "Image upload",
      "Test-mode online payment",
    ],
    mockup: "store",
    image: "./shop.jpg",
    imageAlt: "Online store product grid",
    url: "[shop-domain]",
    metrics: [],
    caseStudy: { problem: null, solution: null, result: null },
    links: { demo: null, github: null },
  },
];

// ---------------------------------------------------------------------------
// Skills: list only what you can really work with.
// level: "daily" | "comfortable" | "learning"  (adjust honestly)
// category must match an id in skillCategories
// project: id of the project where you use it
// icon: Simple Icons slug
// ---------------------------------------------------------------------------
export const skillCategories = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "databases", label: "Databases" },
  { id: "devops", label: "Tools" },
];

export const skillLevels = {
  daily: "Daily use",
  comfortable: "Comfortable",
  learning: "Learning",
};

const note = (name, where) => `[One line: how you used ${name} in ${where}.]`;

export const skills = [
  // Frontend
  { id: "html", name: "HTML", icon: "html5", category: "frontend", level: "daily", usage: "Semantic, accessible page structure.", project: "snipvault", note: note("HTML", "SnipVault"), brand: "#E34F26" },
  { id: "css", name: "CSS", icon: "css3", category: "frontend", level: "daily", usage: "Responsive layouts with Flexbox and Grid.", project: "snipvault", note: note("CSS", "SnipVault"), brand: "#1572B6" },
  { id: "js", name: "JavaScript", icon: "javascript", category: "frontend", level: "daily", usage: "Interactivity, data handling and async logic.", project: "snipvault", note: note("JavaScript", "SnipVault"), brand: "#C99A00" },
  { id: "react", name: "React", icon: "react", category: "frontend", level: "comfortable", usage: "Reusable components, state and hooks.", project: "snipvault", note: note("React", "SnipVault"), brand: "#00A3C4" },
  { id: "tailwind", name: "Tailwind CSS", icon: "tailwindcss", category: "frontend", level: "daily", usage: "Fast, consistent styling with a design-token theme.", project: "snipvault", note: note("Tailwind CSS", "SnipVault"), brand: "#06B6D4" },
 
  // Backend
  { id: "node", name: "Node.js", icon: "nodedotjs", category: "backend", level: "comfortable", usage: "Running the server-side JavaScript runtime.", project: "snipvault", note: note("Node.js", "SnipVault"), brand: "#5FA04E" },
  { id: "express", name: "Express", icon: "express", category: "backend", level: "comfortable", usage: "Routing, middleware and REST endpoints.", project: "quizlab", note: note("Express", "QuizLab"), brand: "currentColor" },
  { id: "php", name: "PHP", icon: "php", category: "backend", level: "comfortable", usage: "Server-side pages and form handling.", project: null, note: "[One line: what you built with PHP.]", brand: "#777BB4" },
  { id: "rest", name: "REST APIs", icon: "postman", category: "backend", level: "comfortable", usage: "Designing and testing clean API endpoints.", project: "quizlab", note: note("REST APIs", "QuizLab"), brand: "#FF6B35" },
  { id: "jwt", name: "JWT Auth", icon: "jsonwebtokens", category: "backend", level: "learning", usage: "Login, protected routes and role checks.", project: "snipvault", note: note("JWT", "SnipVault"), brand: "#D63AFF" },
 
  // Databases
  { id: "mongo", name: "MongoDB", icon: "mongodb", category: "databases", level: "comfortable", usage: "Storing documents, queries and indexes.", project: "snipvault", note: note("MongoDB", "SnipVault"), brand: "#47A248" },
  { id: "mysql", name: "MySQL", icon: "mysql", category: "databases", level: "comfortable", usage: "Relational tables, joins and queries.", project: null, note: "[One line: what you built with MySQL.]", brand: "#4479A1" },
 
  // Tools
  { id: "git", name: "Git & GitHub", icon: "github", category: "devops", level: "daily", usage: "Version control, branches and pull requests.", project: "snipvault", note: note("Git & GitHub", "SnipVault"), brand: "#F05032" },
  { id: "vercel", name: "Vercel", icon: "vercel", category: "devops", level: "learning", usage: "Deploying and previewing the frontend.", project: "snipvault", note: note("Vercel", "SnipVault"), brand: "currentColor" },
  { id: "render", name: "Render", icon: "render", category: "devops", level: "learning", usage: "Hosting the API and environment variables.", project: "snipvault", note: note("Render", "SnipVault"), brand: "currentColor" },
];


// ---------------------------------------------------------------------------
// About
// ---------------------------------------------------------------------------
export const about = {
  paragraphs: [
    "[Two or three sentences on your background: where you started, what you build now, and the kind of problems you enjoy. Keep it specific, no generic \"hardworking and passionate\" lines.]",
    "[One sentence on how you think: how you break a problem down, and what you care about when you ship.]",
  ],
  facts: [
    { label: "Based in", value: "[City, Country]" },
    { label: "Focus", value: "MERN stack, PHP and MySQL" },
    { label: "Looking for", value: "Internship, then long-term work" },
    { label: "Languages", value: "[Arabic, English, ...]" },
  ],
};

// ---------------------------------------------------------------------------
// Experience
// type: "Work" | "Freelance" | "Internship" | "Open source" | "Certification" | "Education"
// Keep only entries you really have; delete the rest.
// ---------------------------------------------------------------------------
export const experience = [
  {
    id: "exp-1",
    type: "Education",
    when: "[Year] — [Year]",
    title: "[Degree or training program] · [Institution]",
    description: "[What you studied and what you built there.]",
  },
  {
    id: "exp-2",
    type: "Certification",
    when: "[Year]",
    title: "[Certification name] · [Issuer]",
    description: "[One line on what it covered.]",
  },
];

// ---------------------------------------------------------------------------
// Contact
// ---------------------------------------------------------------------------
export const contact = {
  links: [
    { label: "Email", value: "[you@domain.dev]", href: "mailto:[you@domain.dev]" },
    { label: "LinkedIn", value: "[linkedin.com/in/username]", href: personal.socials.linkedin },
    { label: "GitHub", value: "[github.com/username]", href: personal.socials.github },
  ],
  form: {
    submitLabel: "Send message",
    successMessage: "Message sent. I'll reply within [X] days.",
    errors: {
      name: "Please enter your name.",
      email: "Enter a valid email address.",
      message: "Write at least 10 characters.",
    },
  },
};

export const footer = {
  text: `© ${new Date().getFullYear()} ${personal.name}. Built with React and Tailwind CSS.`,
  backToTop: { label: "Back to top", href: "#top" },
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
export const getSkillsByCategory = (categoryId) =>
  categoryId === "all"
    ? skills
    : skills.filter((s) => s.category === categoryId);

export const getProjectById = (id) => projects.find((p) => p.id === id);

// Render a metric block only when real numbers exist
export const hasMetrics = (project) => project.metrics.length > 0;

// Render case-study rows only for filled fields
export const getCaseStudyRows = (project) =>
  [
    ["Problem", project.caseStudy.problem],
    ["Solution", project.caseStudy.solution],
    ["Result", project.caseStudy.result],
  ].filter(([, text]) => text);
