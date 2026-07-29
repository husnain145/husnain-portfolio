export const PROFILE = {
  name: "Husnain",
  title: "Software Engineer | Full Stack Developer (MERN/MEAN) | AI/ML Enthusiast",
  tagline:
    "Building scalable web applications and AI-powered solutions from concept to deployment.",
  location: "Sheikhupura, Punjab, Pakistan",
  email: "husnainbscs@gmail.com",
  phones: ["+92 349 6220668", "+92 320 9455377"],
  linkedin: "https://www.linkedin.com/in/husnain-ali-430557236",
  github: "https://github.com/husnain145",
  roles: ["Full Stack Developer", "MERN/MEAN Specialist", "AI/ML Developer"],
};

export const EXPERIENCE = [
  {
    company: "Freelance Developer",
    role: "AI/ML & Full Stack Engineer",
    period: "2024 — Present",
    icon: "brain" as const,
    points: [
      "Full-time freelancing on AI/ML products: healthcare prediction, fraud detection and NLP-based phishing detection.",
      "Ship end-to-end: data pipelines, model training in PyTorch, FastAPI/Flask serving and React front ends.",
    ],
  },
  {
    company: "Programmers Force",
    role: "Associate Software Engineer (Backend Developer)",
    period: "Sep 2024 — Dec 2024",
    icon: "server" as const,
    points: [
      "Built and maintained backend systems in Laravel and Node.js.",
      "Designed REST APIs, optimized database queries and improved service reliability.",
    ],
  },
  {
    company: "Sabasoft",
    role: "Unity Game Developer",
    period: "Earlier",
    icon: "gamepad" as const,
    points: [
      "Developed interactive 3D gameplay systems in Unity3D with C#.",
      "Worked with Blender assets, physics and performance tuning for mobile builds.",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Campus Management System",
    icon: "graduationCap" as const,
    description:
      "Full campus operations platform: student records, attendance, courses and role-based dashboards.",
    tags: ["Angular", "Node.js", "Express", "MongoDB"],
    accent: "from-[oklch(0.66_0.2_296)] to-[oklch(0.82_0.15_195)]",
  },
  {
    title: "MERN TV Show Info App",
    icon: "tv" as const,
    description:
      "Discovery app for TV shows with search, watchlists and rich metadata from a third-party API.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    accent: "from-[oklch(0.82_0.15_195)] to-[oklch(0.6_0.18_260)]",
  },
  {
    title: "Real-Time Auction System",
    icon: "gavel" as const,
    description:
      "Live bidding platform with websocket auction rooms, bid history and multi-payment gateway checkout.",
    tags: ["MERN", "Socket.IO", "Payments"],
    accent: "from-[oklch(0.7_0.19_330)] to-[oklch(0.66_0.2_296)]",
  },
  {
    title: "Image Caption Generator & Tutor for Blind Individuals",
    icon: "eye" as const,
    description:
      "Final year project: BLIP + ViT captioning pipeline with audio tutoring, served to a mobile app.",
    tags: ["PyTorch", "BLIP", "ViT", "Flask", "Flutter", "GCP"],
    accent: "from-[oklch(0.78_0.16_170)] to-[oklch(0.82_0.15_195)]",
  },
  {
    title: "AI Healthcare Prediction System",
    icon: "heartPulse" as const,
    description:
      "Clinical risk prediction models with an explainable dashboard for early diagnosis support.",
    tags: ["Python", "scikit-learn", "FastAPI"],
    accent: "from-[oklch(0.72_0.17_150)] to-[oklch(0.78_0.16_190)]",
  },
  {
    title: "Credit Card Fraud Detection",
    icon: "shieldAlert" as const,
    description:
      "Imbalanced-data classification pipeline with feature engineering and real-time scoring API.",
    tags: ["Python", "XGBoost", "Pandas"],
    accent: "from-[oklch(0.75_0.18_75)] to-[oklch(0.7_0.19_40)]",
  },
  {
    title: "Phishing Detection System (NLP)",
    icon: "fish" as const,
    description:
      "Transformer-based text classifier that flags phishing emails and URLs with confidence scoring.",
    tags: ["NLP", "Transformers", "Python"],
    accent: "from-[oklch(0.66_0.2_296)] to-[oklch(0.7_0.19_330)]",
  },
];

export const SKILLS = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", level: 92 },
      { name: "TypeScript", level: 85 },
      { name: "Python", level: 88 },
      { name: "C / C++ / C#", level: 75 },
    ],
  },
  {
    category: "Frameworks",
    items: [
      { name: "React / Next.js", level: 92 },
      { name: "Angular", level: 80 },
      { name: "Node.js / Express", level: 90 },
      { name: "Laravel / FastAPI", level: 82 },
    ],
  },
  {
    category: "AI / ML",
    items: [
      { name: "PyTorch", level: 84 },
      { name: "Computer Vision (BLIP/ViT)", level: 80 },
      { name: "NLP & Transformers", level: 78 },
      { name: "Model Deployment", level: 82 },
    ],
  },
  {
    category: "Tools & Data",
    items: [
      { name: "MongoDB", level: 88 },
      { name: "MySQL", level: 82 },
      { name: "Git / Docker", level: 80 },
      { name: "Unity3D / Blender", level: 72 },
    ],
  },
];

export const SOFT_SKILLS = [
  "Problem solving",
  "Clear communication",
  "Ownership",
  "Team collaboration",
  "Fast learner",
  "Client management",
];

export const TECH_BADGES = [
  { name: "React", icon: "atom" as const },
  { name: "Next.js", icon: "triangle" as const },
  { name: "Angular", icon: "shield" as const },
  { name: "Node.js", icon: "hexagon" as const },
  { name: "Express", icon: "route" as const },
  { name: "Laravel", icon: "flame" as const },
  { name: "FastAPI", icon: "zap" as const },
  { name: "MongoDB", icon: "leaf" as const },
  { name: "MySQL", icon: "database" as const },
  { name: "Python", icon: "code2" as const },
  { name: "PyTorch", icon: "brainCircuit" as const },
  { name: "TypeScript", icon: "fileCode" as const },
  { name: "Tailwind CSS", icon: "wind" as const },
  { name: "Unity3D", icon: "box" as const },
];


export const RESUME = {
  url: "/__l5e/assets-v1/93771046-e66c-4cef-a251-2ade92e8c064/Husnain-Resume.pdf",
  fileName: "Husnain-Resume.pdf",
};
