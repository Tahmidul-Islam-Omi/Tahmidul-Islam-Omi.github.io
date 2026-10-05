import CHAMPIONSHIP from "./data/championship.json";

export { CHAMPIONSHIP };

/**
 * Central site configuration.
 *
 * This is the ONE place to edit your personal info / links.
 */
export const SITE = {
  name: "Tahmidul Islam Omi",
  title: "Web, Mobile & AI Developer",
  description:
    `Web, mobile & AI developer and BUET CSE student. ${CHAMPIONSHIP.result} at the ${CHAMPIONSHIP.title} in ${CHAMPIONSHIP.category}. I build AI-powered web and mobile applications.`,
  /** Final deployed URL — used for canonical + Open Graph tags. */
  url: "https://tahmidul-islam-omi.github.io",
  ogImage: "/og.png",
  location: "Dhaka, Bangladesh",
} as const;

/** Social / contact links. Leave a value as "" to hide that link. */
export const SOCIALS = {
  email: "tahmidulislamomi09@gmail.com",
  github: "https://github.com/Tahmidul-Islam-Omi",
  linkedin: "https://www.linkedin.com/in/tahmidul-islam-omi-57a254244/",
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
