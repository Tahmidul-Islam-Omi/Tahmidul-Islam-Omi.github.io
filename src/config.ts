/**
 * Central site configuration.
 *
 * This is the ONE place to edit your personal info / links. Items marked
 * TODO need a real URL from you — see the notes I left.
 */
export const SITE = {
  name: "Tahmidul Islam Omi",
  title: "Full-Stack & AI Developer",
  description:
    "Full-stack & AI developer and BUET CSE student. National Web Technologies champion representing Bangladesh at WorldSkills 2026. I build AI-powered, full-stack web applications.",
  /**
   * Final deployed URL. Set in Phase 5 for GitHub Pages.
   * Likely "https://tahmidul-islam-omi.github.io" — confirm your exact username.
   */
  url: "https://tahmidul-islam-omi.github.io",
  ogImage: "/og.png",
  location: "Dhaka, Bangladesh",
} as const;

/** Social / contact links. Leave a value as "" to hide that link. */
export const SOCIALS = {
  email: "tahmidulislamomi09@gmail.com",
  // TODO: confirm your GitHub profile URL (guessed from your resume handle).
  github: "https://github.com/Tahmidul-Islam-Omi",
  // TODO: replace with your real LinkedIn URL.
  linkedin: "https://linkedin.com/in/tahmidul-islam-omi",
  resume: "/resume.pdf",
} as const;

/** Nav links — each `href` is an on-page anchor to a section id. */
export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;
