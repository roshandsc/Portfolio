// =============================================
// ROSHAN SHETTY — PORTFOLIO DATA
// =============================================

export const personalInfo = {
  name: "Roshan Shetty",
  title: "Full Stack Engineer",
  roles: ["Full Stack Engineer", "AI/ML Engineer", "Data Scientist", "Researcher"],
  tagline: "Building AI Products",
  rotatingSubtitles: [
    "Building AI Products",
    "Designing Scalable Systems",
    "Solving Real Problems",
    "Shipping Production Software",
    "Turning Ideas Into Impact",
  ],
  bio: "I'm a Full Stack Developer and AI/ML Engineer with a passion for building intelligent systems that solve real problems. IEEE author, hackathon winner, and educator who has trained 800+ students in AI & Data Science.",
  location: "Karkala, Udupi, India",
  email: "roshan.csds@gmail.com",
  cgpa: "8.53",
  university: "Alva's Institute of engineering and technology",
  degree: "B.E. in Computer Science & Engineering(DATA SCIENCE)",
  avatar: "/roshan.png",
  social: {
    github: "https://github.com/roshandsc",
    linkedin: "https://www.linkedin.com/in/roshan-shetty-/",
  },
};

export const stats = [
  { label: "IEEE Publications", value: 2, suffix: "", icon: "📄" },
  { label: "Students Trained", value: 800, suffix: "+", icon: "🎓" },
  { label: "GenAI Participants", value: 150, suffix: "+", icon: "🤖" },
  { label: "Hackathon Wins", value: 2, suffix: "", icon: "🏆" },
  { label: "CGPA", value: 8.53, suffix: "", icon: "⭐", decimals: 2 },
  { label: "Production Projects", value: 4, suffix: "+", icon: "🚀" },
];

export const skills = {
  categories: [
    {
      id: "ai-ml",
      label: "AI / ML",
      color: "#a855f7",
      items: [
        { name: "TensorFlow", level: 85 },
        { name: "Scikit-Learn", level: 92 },
        { name: "XGBoost", level: 90 },
        { name: "LightGBM", level: 88 },
        { name: "Pandas", level: 95 },
        { name: "NumPy", level: 95 },
        { name: "SMOTE", level: 82 },
        { name: "PCA", level: 85 },
      ],
    },
    {
      id: "full-stack",
      label: "Full Stack",
      color: "#3b82f6",
      items: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 88 },
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "TypeScript", level: 82 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Framer Motion", level: 80 },
      ],
    },
    {
      id: "data-science",
      label: "Data Science",
      color: "#10b981",
      items: [
        { name: "Feature Engineering", level: 90 },
        { name: "Analytics", level: 88 },
        { name: "Model Development", level: 87 },
        { name: "Visualization", level: 85 },
        { name: "Statistical Analysis", level: 83 },
        { name: "Data Wrangling", level: 92 },
      ],
    },
    {
      id: "dev-tools",
      label: "Dev Tools",
      color: "#f59e0b",
      items: [
        { name: "Docker", level: 78 },
        { name: "Git", level: 92 },
        { name: "FastAPI", level: 82 },
        { name: "Postman", level: 88 },
        { name: "Vercel", level: 85 },
        { name: "Firebase", level: 80 },
      ],
    },
  ],
};

export const projects = [
  {
    id: "fraud-detection",
    title: "Fraud Detection Pipeline",
    subtitle: "IEEE-Published Research Project",
    description:
      "An end-to-end machine learning pipeline for credit card fraud detection achieving 97% ROC-AUC on the IEEE-CIS dataset with 140K+ transactions and 430+ engineered features.",
    longDescription:
      "Built a comprehensive fraud detection system using ensemble methods. Implemented advanced feature engineering, class imbalance handling with SMOTE, and dimensionality reduction with PCA. Published as an IEEE research paper.",
    tags: ["XGBoost", "LightGBM", "SMOTE", "PCA", "Python", "Scikit-Learn"],
    metrics: [
      { label: "ROC-AUC Score", value: "97%" },
      { label: "Transactions", value: "140K+" },
      { label: "Features", value: "430+" },
      { label: "Dataset", value: "IEEE-CIS" },
    ],
    gradient: "from-purple-600/20 to-blue-600/20",
    accentColor: "#a855f7",
    github: "https://github.com/roshandsc/Fraud_detection_pipeline",
    live: "",
    category: "AI/ML Research",
    featured: true,
    icon: "🔬",
    architecture: "Ensemble ML Pipeline → Feature Engineering → SMOTE Balancing → XGBoost + LightGBM → Stacking Meta-Learner",
  },
  {
    id: "la-capella",
    title: "LA Capella Studios",
    subtitle: "Premium Studio Website",
    description:
      "A stunning, high-performance studio website built with Next.js, featuring Framer Motion animations and a polished UI that captures the brand's premium aesthetic.",
    longDescription:
      "Designed and developed a premium studio website with smooth page transitions, scroll animations, responsive design, and an elegant user experience that converts visitors into clients.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    metrics: [
      { label: "Performance", value: "98+" },
      { label: "Accessibility", value: "100" },
      { label: "SEO Score", value: "100" },
      { label: "Framework", value: "Next.js 14" },
    ],
    gradient: "from-amber-600/20 to-rose-600/20",
    accentColor: "#f59e0b",
    github: "https://github.com/roshandsc/la_capella",
    live: "https://www.lacapellastudios.com/",
    category: "Full Stack",
    featured: true,
    icon: "🎵",
    architecture: "Next.js 14 → Tailwind CSS → Framer Motion → Vercel CDN",
  },
  {
    id: "ten-seconds",
    title: "Ten Seconds",
    subtitle: "High-Performance Web App",
    description:
      "A fully responsive web application focused on exceptional UI/UX design with attention to performance, accessibility, and modern web standards.",
    longDescription:
      "Built with a mobile-first approach, leveraging modern CSS techniques and performance optimization strategies to deliver a sub-second loading experience.",
    tags: ["React", "CSS", "Responsive Design", "Performance"],
    metrics: [
      { label: "Load Time", value: "<1s" },
      { label: "Mobile Score", value: "95+" },
      { label: "Design", value: "Mobile-First" },
      { label: "Animations", value: "60fps" },
    ],
    gradient: "from-emerald-600/20 to-cyan-600/20",
    accentColor: "#10b981",
    github: "https://github.com/roshandsc/ten_s",
    live: "https://www.10seconds.co.in/",
    category: "Full Stack",
    featured: false,
    icon: "⚡",
    architecture: "React SPA → Custom CSS → Optimized Assets → CDN",
  },
  {
    id: "tessa-learn",
    title: "Tessa Learn Platform",
    subtitle: "Full Stack Learning Platform",
    description:
      "A comprehensive learning management platform with workflow automation, built during my internship at Tessa Cloud. Features real-time collaboration and intelligent content delivery.",
    longDescription:
      "Engineered a full-stack learning platform with role-based access control, automated workflows, content management, and analytics dashboard. Built during Engineering & Growth Internship.",
    tags: ["Full Stack", "Node.js", "React", "Workflow Automation", "Database"],
    metrics: [
      { label: "Type", value: "LMS" },
      { label: "Stack", value: "Full Stack" },
      { label: "Automation", value: "Workflows" },
      { label: "Built At", value: "Tessa Cloud" },
    ],
    gradient: "from-blue-600/20 to-indigo-600/20",
    accentColor: "#3b82f6",
    github: "https://github.com/roshandsc/Tessa_learn",
    live: "https://learn.tessacloud.com/",
    category: "Full Stack",
    featured: false,
    icon: "📚",
    architecture: "React Frontend → Node.js API → Database → Automated Workflows",
  },
];

export const publications = [
  {
    id: "fraud-pipeline",
    title: "End-to-End Fraud Detection Pipeline: Leveraging Supervised, Ensemble and Unsupervised Learning for Large-Scale Financial Security",
    journal: "IEEE International Conference",
    year: "2024",
    abstract:
      "A comprehensive study on credit card fraud detection using ensemble machine learning methods including XGBoost and LightGBM on the IEEE-CIS Fraud Detection dataset. Achieved 97% ROC-AUC through advanced feature engineering and SMOTE-based class imbalance handling.",
    tags: ["Machine Learning", "Fraud Detection", "XGBoost", "LightGBM", "SMOTE"],
    doi: "https://ieeexplore.ieee.org/document/11394031",
    accentColor: "#a855f7",
    icon: "🔬",
  },
  {
    id: "visual-perception",
    title: "Human Visual Perception and Emotion: Leveraging AI and Color Psychology for User Experience Optimization",
    journal: "IEEE International Conference",
    year: "2024",
    abstract:
      "An investigation into the intersection of human visual perception principles and deep learning-based emotion recognition systems, with applications in human-computer interaction and affective computing.",
    tags: ["Computer Vision", "Deep Learning", "Emotion Recognition", "HCI"],
    doi: "https://ieeexplore.ieee.org/document/11394008",
    accentColor: "#3b82f6",
    icon: "👁️",
  },
];

export const achievements = [
  {
    title: "IEEE Author",
    description: "Published 2 international research papers in IEEE conferences",
    icon: "📄",
    color: "#a855f7",
    badge: "Research",
  },
  {
    title: "2× Hackathon Winner",
    description: "Won 2 competitive hackathons, demonstrating rapid problem-solving and execution",
    icon: "🏆",
    color: "#f59e0b",
    badge: "Competition",
  },
  {
    title: "GDG DevFest Floor Host",
    description: "Hosted technical floor at DevFest GDG Cloud Mangalore",
    icon: "🎤",
    color: "#10b981",
    badge: "Community",
  },
  {
    title: "800+ Students Trained",
    description: "Conducted AI & Data Science workshops reaching 800+ students",
    icon: "🎓",
    color: "#3b82f6",
    badge: "Education",
  },
  {
    title: "150+ GenAI Participants",
    description: "Delivered GenAI talks and sessions to 150+ participants",
    icon: "🤖",
    color: "#ec4899",
    badge: "AI Education",
  },
  {
    title: "8.53 CGPA",
    description: "Maintained excellent academic performance throughout B.E.",
    icon: "⭐",
    color: "#06b6d4",
    badge: "Academic",
  },
];

export const experience = [
  {
    id: "tessa-cloud",
    role: "Engineering & Growth Intern",
    company: "Tessa Cloud",
    period: "Jan 2026 – May 2026",
    type: "Internship",
    description:
      "Worked on full-stack development of the Tessa Learn platform. Implemented workflow automation, built features for the learning management system, and contributed to growth engineering initiatives.",
    achievements: [
      "Built Tessa Learn LMS platform features",
      "Implemented automated workflow systems",
      "Contributed to growth engineering",
      "Full-stack development with modern tech stack",
    ],
    color: "#3b82f6",
    icon: "☁️",
  },
  {
    id: "supra-studios",
    role: "Full Stack Data & Software Intern",
    company: "Supra Studios",
    period: "Oct 2025 – Apr 2026",
    type: "Internship",
    description:
      "Contributed to full-stack development and data engineering projects. Worked across the software stack while applying data science techniques to real business problems.",
    achievements: [
      "Full-stack web development",
      "Data engineering & analytics",
      "Software architecture design",
      "Production deployment experience",
    ],
    color: "#a855f7",
    icon: "🎬",
  },
  {
    id: "i-exceed",
    role: "Industrial Experience Intern",
    company: "I-exceed",
    period: "6 Months",
    type: "Industrial Experience",
    description:
      "Industrial experience at I-exceed company, building a robust fraud detection pipeline project.",
    achievements: [
      "Designed and developed a machine learning fraud detection pipeline",
      "Engineered automated feature selection and ingestion systems",
      "Evaluated model performance using precision/recall metrics",
      "Contributed to data cleaning, ETL, and classification pipelines",
    ],
    color: "#ec4899",
    icon: "🔒",
  },
];

export const philosophy = [
  {
    title: "Engineer First",
    description:
      "I approach every problem with engineering rigor — decomposing complexity, understanding constraints, and designing solutions that scale. Code is a tool; engineering is the discipline.",
    icon: "⚙️",
    color: "#3b82f6",
  },
  {
    title: "AI as a Multiplier",
    description:
      "I believe AI doesn't replace human intelligence — it multiplies it. My work focuses on building AI systems that augment human capabilities and solve problems at scale.",
    icon: "🧠",
    color: "#a855f7",
  },
  {
    title: "Research-Driven",
    description:
      "Every product decision should be grounded in research. Whether it's a machine learning model or a UI component, I apply scientific thinking to validate ideas before shipping.",
    icon: "🔬",
    color: "#10b981",
  },
  {
    title: "Ship to Learn",
    description:
      "Theory is a starting point, not an endpoint. I believe in shipping fast, measuring impact, and iterating. Real-world feedback is the most valuable dataset.",
    icon: "🚀",
    color: "#f59e0b",
  },
];

export const aiResponses: Record<string, string> = {
  default:
    "Hi! I'm an AI assistant built on Roshan's portfolio data. Ask me anything about his skills, projects, research, or why you should hire him! 🚀",
  who: `Roshan Shetty is a Full Stack Developer, AI/ML Engineer, Data Scientist, and IEEE Author based in Karkala, Udupi, India. He's currently pursuing B.E. in Computer Science & Engineering(DATA SCIENCE) at Alva's Institute of engineering and technology with a 8.53 CGPA.

He's worked at **Tessa Cloud** (Engineering & Growth Intern), **Supra Studios** (Full Stack Data & Software Intern), and has Industrial Experience from **I-exceed** (6 Months). He's published **2 IEEE research papers**, won **2 hackathons**, and trained **800+ students** in AI & Data Science.`,

  projects: `Roshan has built 4 notable projects:

🔬 **Fraud Detection Pipeline** — IEEE-published ML system achieving 97% ROC-AUC on 140K+ transactions using XGBoost, LightGBM, SMOTE, and PCA.

🎵 **LA Capella Studios** — Premium studio website built with Next.js, Tailwind CSS, and Framer Motion.

⚡ **Ten Seconds** — High-performance responsive web app with sub-second load times and 60fps animations.

📚 **Tessa Learn Platform** — Full-stack LMS with workflow automation, built during his internship at Tessa Cloud.`,

  ai: `Roshan's AI/ML expertise includes:

• **Frameworks**: TensorFlow, Scikit-Learn, XGBoost, LightGBM
• **Data Tools**: Pandas, NumPy, Feature Engineering, SMOTE, PCA
• **Research**: 2 IEEE publications in ML and Computer Vision
• **Applications**: Fraud detection, emotion recognition, ensemble methods
• **Proficiency**: 90%+ competency in core ML workflows

He's also trained 800+ students in AI & Data Science and delivered GenAI talks to 150+ participants.`,

  hire: `Why hire Roshan? Here are the key reasons:

✅ **IEEE-Published Researcher** — Real academic credibility, not just project work
✅ **Production-Proven** — Ships real products (LMS, studio sites, ML pipelines)
✅ **Full Stack + AI** — Rare combination of frontend, backend, AND ML expertise
✅ **Educator** — Trained 800+ students, shows communication & leadership
✅ **Fast Learner** — Hackathon winner, adapts quickly under pressure
✅ **8.53 CGPA** — Academic excellence alongside practical achievements

He thinks like a founder, builds like an engineer, and researches like a scientist.`,

  research: `Roshan has 2 IEEE International Publications:

📄 **End-to-End Fraud Detection Pipeline**
• IEEE International Conference (2024)
• 97% ROC-AUC on IEEE-CIS dataset
• 140K+ transactions, 430+ features
• XGBoost, LightGBM, SMOTE, PCA

👁️ **Human Visual Perception and Emotion Recognition**
• IEEE International Conference (2024)
• Deep learning for emotion recognition
• Human-Computer Interaction applications
• Computer Vision research`,

  tech: `Roshan's technology stack:

**AI/ML**: TensorFlow, Scikit-Learn, XGBoost, LightGBM, Pandas, NumPy, SMOTE, PCA
**Frontend**: React, Next.js, TypeScript, Tailwind CSS, Framer Motion
**Backend**: Node.js, Express.js, FastAPI, Firebase
**DevOps**: Docker, Git, Vercel, Postman
**Data Science**: Feature Engineering, Analytics, Model Development, Visualization`,

  achievements: `Roshan's key achievements:

🏆 2× Hackathon Winner
📄 2 IEEE International Publications
🎓 800+ Students Trained in AI & Data Science
🤖 150+ GenAI Talk Participants
🎤 DevFest GDG Cloud Mangalore Floor Host
⭐ 8.53 CGPA
💼 3 Professional Experiences (Tessa Cloud, Supra Studios, I-exceed)
🚀 4+ Production Projects Shipped`,
};
