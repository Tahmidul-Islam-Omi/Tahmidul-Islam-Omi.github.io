/**
 * Projects.
 *
 * ⚠️ TODO (this is what I need from you):
 *   - `repo`  : the GitHub repo URL for each project (currently placeholders).
 *   - `demo`  : the live demo URL if deployed; leave "" to hide the button.
 *   - `image` : drop a screenshot in /public/projects/ and put its path here,
 *               e.g. "/projects/disasterlens.png". Leave "" for a styled
 *               placeholder. Screenshots matter most for the `featured` ones.
 *
 * `featured: true` → big detailed card. `featured: false` → compact grid card.
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

const GH = "https://github.com/Tahmidul-Islam-Omi"; // placeholder base — replace per-project

export const PROJECTS: Project[] = [
  {
    name: "DisasterLens",
    description:
      "An AI-powered disaster-management platform for Bangladesh: real-time disaster monitoring, volunteer coordination, emergency alerts, AI impact analysis, geospatial risk mapping, and bilingual support for authorities and communities.",
    stack: ["React", "FastAPI", "MongoDB", "AI"],
    repo: GH, // TODO: real repo URL
    demo: "", // TODO: live demo URL if deployed
    image: "", // TODO: /projects/disasterlens.png
    featured: true,
  },
  {
    name: "Weather AI Agent",
    description:
      "A voice + text weather assistant handling natural-language queries via LangChain, OpenWeatherMap, and ElevenLabs. Intent recognition with Gemini, current/historical/forecast retrieval, sentiment-aware voice responses, and context-aware follow-up chat backed by Supabase.",
    stack: ["React", "FastAPI", "LangChain", "Supabase"],
    repo: GH, // TODO
    demo: "", // TODO
    image: "", // TODO
    featured: true,
  },
  {
    name: "Web Analytics & Dynamic Dashboard",
    description:
      "A web-analytics platform tracking user activity, session metrics, and a lead-scoring system. Features an LLM-powered dynamic dashboard alongside a static one, letting owners query any metric and get interactive visualizations on demand.",
    stack: ["React", "FastAPI", "Supabase", "Gemini LLM"],
    repo: GH, // TODO
    demo: "", // TODO
    image: "", // TODO
    featured: true,
  },
  {
    name: "EcoMealHub",
    description:
      "A full-stack app aligned with SDG-2 & SDG-12 to track food inventory, monitor expirations, plan meals, and reduce waste. Includes auth, OCR-based receipt scanning, rule-based tracking, dashboards, and data insights.",
    stack: ["React", "Express", "Supabase", "OCR"],
    repo: GH, // TODO
    demo: "", // TODO
    image: "", // TODO
    featured: true,
  },
  {
    name: "C Compiler",
    description:
      "A C compiler built from scratch in four stages — symbol table, lexical analysis, parsing (ANTLR4), and intermediate code generation with peephole optimization — emitting 8086 assembly. Supports type casting, scopes, control flow, loops, and recursive functions.",
    stack: ["C++", "ANTLR4", "Lex"],
    repo: GH, // TODO
    demo: "",
    image: "", // TODO
    featured: true,
  },

  // ---- Listed (compact) ----
  {
    name: "Chain Reaction Game",
    description:
      "A Chain Reaction game AI using minimax with alpha-beta pruning on a 9×6 board, with five heuristics and a two-player UI. Includes experiments on heuristic and search-depth performance.",
    stack: ["React", "FastAPI", "Minimax"],
    repo: GH, // TODO
    demo: "",
    image: "",
    featured: false,
  },
  {
    name: "Online Food Ordering",
    description:
      "A JavaFX food-ordering app with threaded networking for real-time communication — menu browsing, order placement, and delivery tracking.",
    stack: ["Java", "JavaFX", "Networking"],
    repo: GH, // TODO
    demo: "",
    image: "",
    featured: false,
  },
  {
    name: "BUET CSE Assignments",
    description:
      "A collection of academic work from BUET CSE covering OOP, DSA, design patterns, OS, AI, compilers, and signals & linear systems.",
    stack: ["Java", "C++", "Python"],
    repo: GH, // TODO
    demo: "",
    image: "",
    featured: false,
  },
];
