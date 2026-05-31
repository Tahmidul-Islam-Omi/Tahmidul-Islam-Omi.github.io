/** Work experience — most recent first. */
export const EXPERIENCE = [
  {
    role: "Software Developer",
    org: "EdTech Startup",
    period: "Apr 2026 – Present",
    points: [
      "Building an AI-powered Socratic learning platform that helps students learn through interactive questioning, adaptive assessments, and personalized feedback.",
    ],
  },
  {
    role: "Software Developer Intern",
    org: "Edulytics",
    period: "Nov 2025 – Jan 2026",
    points: [
      "Built and maintained frontend features for an AI-powered academic management platform using Next.js, Tailwind CSS, and TypeScript.",
      "Developed backend services with Express.js, MongoDB, and TypeScript.",
    ],
  },
  {
    role: "AI Intern",
    org: "SocioFi Technology",
    period: "",
    points: [
      "Developed AI agent projects leveraging RAG, LangChain, and LLM integration to demonstrate applied AI skills.",
    ],
  },
] as const;

/** Education — most recent first. */
export const EDUCATION = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    org: "Bangladesh University of Engineering & Technology (BUET)",
    period: "Nov 2022 – Present",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    org: "Rajshahi College",
    period: "Jul 2019 – Dec 2021",
  },
] as const;

/** Achievements / highlights — the stand-out credentials. */
export const ACHIEVEMENTS = [
  {
    title: "WorldSkills 2026 — Shanghai",
    detail:
      "Champion at the National Skill Competition 2025 (Web Technologies); representing Bangladesh at WorldSkills 2026.",
    highlight: true,
  },
  {
    title: "Mapathon 2026 Finalist",
    detail: "Reached the finals as part of a finalist team.",
    highlight: false,
  },
  {
    title: "InnovateX Hackathon — Top 10",
    detail: "Ranked in the top 10 out of 170 teams.",
    highlight: false,
  },
  {
    title: "120+ DSA Problems Solved",
    detail:
      "Solved 120+ problems on LeetCode & NeetCode across DP, graphs, greedy, trees, shortest paths, heaps, and more.",
    highlight: false,
  },
] as const;
