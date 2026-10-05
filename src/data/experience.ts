import { CHAMPIONSHIP } from "../config";

/** Work experience — most recent first. */
export const EXPERIENCE = [
  {
    role: "Software Developer",
    org: "Stealth EdTech Startup",
    period: "Apr 2026 – July 2026",
    points: [
      "Developed an AI-powered Socratic learning platform that helps students learn through interactive questioning, adaptive assessments, and personalized feedback.",
    ],
  },
  {
    role: "Software Developer Intern",
    org: "Edulytics",
    period: "Nov 2025 – Jan 2026",
    points: [
      "Built the speaking module of an AI-based IELTS platform, integrating the Gemini Live API for real-time speech-to-speech conversation practice.",
      "Built and maintained frontend features for an AI-powered academic management platform using Next.js, Tailwind CSS, and TypeScript.",
      "Developed backend services with Express.js, MongoDB, and TypeScript.",
    ],
  },
  {
    role: "AI Intern",
    org: "SocioFi Technology",
    period: "Apr 2025 – Oct 2025",
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
    period: "Nov 2022 – Expected June 2027",
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
    title: CHAMPIONSHIP.title,
    detail: `${CHAMPIONSHIP.result} in ${CHAMPIONSHIP.category}.`,
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
] as const;
