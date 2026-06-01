/**
 * Projects.
 *
 * To finish a card later:
 *   - `demo`  : add a live demo URL to show a "Live Demo" button ("" hides it).
 *   - `image` : drop a screenshot in /public/projects/ and set its path here,
 *               e.g. "/projects/disasterlens.webp". Featured projects without
 *               an image render as a clean full-width text entry (no placeholder).
 *
 * `featured: true` → large entry in the main list (image + text if an image is
 *   set, otherwise text-only). `featured: false` → compact "More projects" card.
 */
export interface Project {
  name: string;
  description: string;
  stack: string[];
  repo: string;
  demo: string;
  image: string;
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    name: "DisasterLens",
    description:
      "An AI-powered disaster-management platform for Bangladesh: real-time disaster monitoring, volunteer coordination, emergency alerts, AI impact analysis, geospatial risk mapping, and bilingual support for authorities and communities.",
    stack: ["React", "FastAPI", "MongoDB", "AI"],
    repo: "https://github.com/Tahmidul-Islam-Omi/DisasterLens",
    demo: "",
    image: "/projects/disasterlens.webp",
    featured: true,
  },
  {
    name: "EcoMealHub",
    description:
      "A full-stack app aligned with SDG-2 & SDG-12 to track food inventory, monitor expirations, plan meals, and reduce waste. Includes auth, OCR-based receipt scanning, rule-based tracking, dashboards, and data insights.",
    stack: ["React", "Express", "Supabase", "OCR"],
    repo: "https://github.com/Tahmidul-Islam-Omi/EcoMealHub",
    demo: "",
    image: "/projects/ecomealhub.webp",
    featured: true,
  },
  {
    name: "C Compiler",
    description:
      "A C compiler built from scratch in four stages — symbol table, lexical analysis, parsing (ANTLR4), and intermediate code generation with peephole optimization — emitting 8086 assembly. Supports type casting, scopes, control flow, loops, and recursive functions.",
    stack: ["C++", "ANTLR4", "Lex"],
    repo: "https://github.com/Tahmidul-Islam-Omi/C-Compiler",
    demo: "",
    image: "",
    featured: true,
  },
  {
    name: "BUET CSE Assignments",
    description:
      "A collection of academic work from BUET CSE covering OOP, DSA, design patterns, OS, AI, compilers, and signals & linear systems.",
    stack: ["Java", "C++", "Python"],
    repo: "https://github.com/Tahmidul-Islam-Omi/BUET-CSE-Academic-Assignments",
    demo: "",
    image: "",
    featured: true,
  },

  // ---- More projects (compact grid) ----
  {
    name: "Weather AI Agent",
    description:
      "A voice + text weather assistant handling natural-language queries via LangChain, OpenWeatherMap, and ElevenLabs. Intent recognition with Gemini, current/historical/forecast retrieval, sentiment-aware voice responses, and context-aware follow-up chat backed by Supabase.",
    stack: ["React", "FastAPI", "LangChain", "Supabase"],
    repo: "https://github.com/Tahmidul-Islam-Omi/Weather-AI-Agent",
    demo: "",
    image: "",
    featured: false,
  },
  {
    name: "Web Analytics & Dynamic Dashboard",
    description:
      "A web-analytics platform tracking user activity, session metrics, and a lead-scoring system. Features an LLM-powered dynamic dashboard alongside a static one, letting owners query any metric and get interactive visualizations on demand.",
    stack: ["React", "FastAPI", "Supabase", "Gemini LLM"],
    repo: "https://github.com/Tahmidul-Islam-Omi/Web_Analytics_Dynamic_Dashboard_Lead_Scoring_Agent",
    demo: "",
    image: "",
    featured: false,
  },
  {
    name: "Online Food Ordering",
    description:
      "A JavaFX food-ordering app with threaded networking for real-time communication — menu browsing, order placement, and delivery tracking.",
    stack: ["Java", "JavaFX", "Networking"],
    repo: "https://github.com/Tahmidul-Islam-Omi/Goriber-Food-Panda",
    demo: "",
    image: "",
    featured: false,
  },
];
