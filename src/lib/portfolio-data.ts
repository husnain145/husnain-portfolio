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

export const PROJECT_TRACKS = [
  { id: "fullstack" as const, label: "Full Stack (MERN / MEAN)" },
  { id: "aiml" as const, label: "AI/ML & Backend" },
];

export const PROJECTS = [
  {
    track: "fullstack" as const,
    title: "Real-Time Auction System",
    icon: "gavel" as const,
    description:
      "MERN auction platform with live bidding, Easypaisa/JazzCash/PayPal/card checkout, seller accounts and an animated dark-theme UI.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
    accent: "from-[oklch(0.7_0.19_330)] to-[oklch(0.66_0.2_296)]",
  },
  {
    track: "fullstack" as const,
    title: "Instagram Clone (UK Client)",
    icon: "camera" as const,
    description:
      "Full-stack social app replicating photo/video posts, likes, comments and profiles with auth, media uploads and a responsive mobile-first feed.",
    tags: ["MERN", "Auth", "Media Uploads"],
    accent: "from-[oklch(0.82_0.15_195)] to-[oklch(0.6_0.18_260)]",
  },
  {
    track: "fullstack" as const,
    title: "AI Recipe Generator (Web App)",
    icon: "chefHat" as const,
    description:
      "Web app that turns ingredient photos and preferences into personalised recipes, wiring CV and NLP models behind a full-stack frontend/backend.",
    tags: ["React", "Node.js", "Flask", "Computer Vision"],
    accent: "from-[oklch(0.75_0.18_75)] to-[oklch(0.7_0.19_40)]",
  },
  {
    track: "fullstack" as const,
    title: "ASGUS Industry Website (UK Client)",
    icon: "building2" as const,
    description:
      "Corporate site for a UK factory-direct clothing manufacturer, showcasing apparel manufacturing and export services to 500+ brands in 25+ countries.",
    tags: ["React", "Tailwind CSS", "Responsive UI"],
    accent: "from-[oklch(0.72_0.17_150)] to-[oklch(0.78_0.16_190)]",
  },
  {
    track: "fullstack" as const,
    title: "Spicey Foods Ordering Website",
    icon: "utensils" as const,
    description:
      "Food ordering website for a UK restaurant brand — menu browsing and delivery orders for burgers, shawarmas, wings and pizza.",
    tags: ["React", "Node.js", "MongoDB"],
    accent: "from-[oklch(0.75_0.18_75)] to-[oklch(0.7_0.19_330)]",
  },
  {
    track: "fullstack" as const,
    title: "Campus Management System",
    icon: "graduationCap" as const,
    description:
      "MEAN stack platform automating student, faculty and staff administrative workflows at GCU Lahore with role-based dashboards.",
    tags: ["Angular", "Node.js", "Express", "MongoDB"],
    accent: "from-[oklch(0.66_0.2_296)] to-[oklch(0.82_0.15_195)]",
  },
  {
    track: "aiml" as const,
    title: "Image Caption Generator & Tutor for Blind Individuals",
    icon: "eye" as const,
    description:
      "Final year project: fine-tuned BLIP + Vision Transformer captioning with audio output, evaluated on BLEU/ROUGE and deployed to GCP behind Flask with a Flutter client.",
    tags: ["PyTorch", "BLIP", "ViT", "Flask", "Flutter", "GCP"],
    accent: "from-[oklch(0.78_0.16_170)] to-[oklch(0.82_0.15_195)]",
  },
  {
    track: "aiml" as const,
    title: "AI Recipe Generator (CV + NLP)",
    icon: "chefHat" as const,
    description:
      "ResNet50 transfer-learning classifier over 36 fruit/vegetable classes (96% val, 95% test accuracy) plus a TF-IDF + Logistic Regression cuisine classifier.",
    tags: ["ResNet50", "Transfer Learning", "TF-IDF", "scikit-learn"],
    accent: "from-[oklch(0.75_0.18_75)] to-[oklch(0.7_0.19_40)]",
  },
  {
    track: "aiml" as const,
    title: "Automated Financial Fraud Detection",
    icon: "shieldAlert" as const,
    description:
      "Real-time ML system that scores transaction behaviour for fraud, tuned to raise detection accuracy while cutting the false positives of rule-based systems.",
    tags: ["Python", "Ensemble Learning", "Imbalanced Data"],
    accent: "from-[oklch(0.75_0.18_75)] to-[oklch(0.7_0.19_40)]",
  },
  {
    track: "aiml" as const,
    title: "AI-Based Phishing Detection App",
    icon: "fish" as const,
    description:
      "Mobile app trained on Kaggle datasets that analyses message text and URL features to flag phishing links in real time with risk alerts.",
    tags: ["NLP", "Scikit-learn", "Mobile"],
    accent: "from-[oklch(0.66_0.2_296)] to-[oklch(0.7_0.19_330)]",
  },
  {
    track: "aiml" as const,
    title: "AI in Healthcare: Predictive Diagnosis",
    icon: "heartPulse" as const,
    description:
      "Predictive analytics models over patient health data that surface hidden patterns and flag early disease onset to support faster clinical decisions.",
    tags: ["Python", "scikit-learn", "FastAPI"],
    accent: "from-[oklch(0.72_0.17_150)] to-[oklch(0.78_0.16_190)]",
  },
  {
    track: "aiml" as const,
    title: "Heart Disease Risk Factor Analysis",
    icon: "activity" as const,
    description:
      "Two GLMs over a 303-patient dataset; identified max heart rate and ST depression as the strongest predictors and selected the best model by AIC.",
    tags: ["GLM", "R / Python", "Statistics"],
    accent: "from-[oklch(0.7_0.19_330)] to-[oklch(0.66_0.2_296)]",
  },
  {
    track: "aiml" as const,
    title: "Tissue Inflammation Severity Classification",
    icon: "microscope" as const,
    description:
      "Compared Ridge, Logistic Regression and Random Forest on tissue-image measurements with a patient-level split — Random Forest reached ~0.97 AUC.",
    tags: ["Random Forest", "Ridge", "scikit-learn"],
    accent: "from-[oklch(0.78_0.16_170)] to-[oklch(0.82_0.15_195)]",
  },
  {
    track: "aiml" as const,
    title: "Q-Learning GridWorld Agent",
    icon: "grid" as const,
    description:
      "Tabular Q-learning agent with epsilon-greedy and decaying exploration solving grid navigation with obstacles and jump cells across multiple learning rates.",
    tags: ["Reinforcement Learning", "Q-Learning", "Python"],
    accent: "from-[oklch(0.82_0.15_195)] to-[oklch(0.6_0.18_260)]",
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
