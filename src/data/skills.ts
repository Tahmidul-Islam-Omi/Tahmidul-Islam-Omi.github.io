/** Skill groups shown in the Skills section. Edit freely. */
export const SKILL_GROUPS = [
  {
    label: "Languages",
    items: ["Java", "Python", "C", "C++", "JavaScript", "TypeScript", "Dart"],
  },
  {
    label: "Frameworks & Libraries",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "FastAPI",
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
    ],
  },
  {
    label: "AI & ML",
    items: [
      "RAG",
      "LangChain",
      "Agentic AI",
      "PyTorch",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
    ],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MongoDB", "Oracle", "Supabase", "Qdrant"],
  },
  {
    label: "DevOps & Cloud",
    items: ["Docker", "AWS", "CI/CD", "GitHub Actions"],
  },
  {
    label: "Tools & Utilities",
    items: [
      "Git",
      "Prisma",
      "Zod",
      "Puppeteer",
      "Apache JMeter",
      "Resend",
    ],
  },
] as const;
