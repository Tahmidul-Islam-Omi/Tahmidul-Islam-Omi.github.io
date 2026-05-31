/**
 * Central site configuration.
 *
 * This is the ONE place to edit your personal info. Every component reads
 * from here, so you don't have to hunt through files. Replace the
 * placeholders below with your real details in Phase 2.
 */
export const SITE = {
  /** Your full name — used in the nav logo, footer, and page titles. */
  name: "Your Name",
  /** One-line role/value proposition shown in the hero. */
  title: "Full-Stack Developer & CSE Student",
  /** Short description for SEO + social link previews (~150 chars). */
  description:
    "Full-stack developer building fast, reliable web apps. CSE student passionate about clean code and great user experiences.",
  /**
   * Final deployed URL. Set this in Phase 5 when we configure GitHub Pages,
   * e.g. "https://<username>.github.io". Used for canonical + Open Graph URLs.
   */
  url: "https://example.github.io",
  /** Path to a social-share preview image in /public (1200x630 recommended). */
  ogImage: "/og.png",
  /** Author location (optional — leave "" to hide). */
  location: "",
} as const;

/** Social / contact links. Leave a value as "" to hide that link. */
export const SOCIALS = {
  email: "tahmidulislamomi01@gmail.com",
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-handle",
  /** Optional: link to your resume PDF placed in /public (e.g. "/resume.pdf"). */
  resume: "",
} as const;

/** Nav links — each `href` is an on-page anchor to a section id. */
export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;
