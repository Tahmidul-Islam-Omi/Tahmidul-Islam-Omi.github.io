/**
 * Generates the social-share Open Graph image at public/og.png (1200x630).
 * Run with:  node scripts/generate-og.mjs
 *
 * Uses system fonts (Liberation Sans / DejaVu Sans Mono) so it renders the
 * same everywhere without bundling font files. Edit the SVG below to tweak.
 */
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, "..", "public", "og.png");

const W = 1200;
const H = 630;
const sans = "Liberation Sans, DejaVu Sans, sans-serif";
const mono = "DejaVu Sans Mono, monospace";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <radialGradient id="glow" cx="78%" cy="18%" r="55%">
      <stop offset="0%" stop-color="#7c3aed" stop-opacity="0.45" />
      <stop offset="100%" stop-color="#7c3aed" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="accentLine" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#a78bfa" />
      <stop offset="100%" stop-color="#6d28d9" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="#0a0a0b" />
  <rect width="${W}" height="${H}" fill="url(#glow)" />

  <!-- Left accent bar -->
  <rect x="0" y="0" width="12" height="${H}" fill="url(#accentLine)" />

  <!-- Top label (mono) -->
  <text x="80" y="96" font-family="${mono}" font-size="24" fill="#6b6b74">
    <tspan fill="#8b5cf6">&gt;</tspan> tahmidul-islam-omi.github.io
  </text>

  <!-- WorldSkills pill -->
  <g>
    <rect x="78" y="150" width="560" height="52" rx="26"
      fill="#8b5cf6" fill-opacity="0.12" stroke="#8b5cf6" stroke-opacity="0.5" stroke-width="1.5" />
    <circle cx="108" cy="176" r="5" fill="#8b5cf6" />
    <text x="128" y="184" font-family="${sans}" font-size="22" font-weight="600" fill="#c4b5fd">
      WORLDSKILLS 2026 · REPRESENTING BANGLADESH
    </text>
  </g>

  <!-- Name -->
  <text x="78" y="340" font-family="${sans}" font-size="92" font-weight="700" fill="#f4f4f5" letter-spacing="-2">
    Tahmidul Islam Omi
  </text>

  <!-- Tagline -->
  <text x="80" y="420" font-family="${sans}" font-size="48" font-weight="600" letter-spacing="-1">
    <tspan fill="#a78bfa">Full-Stack &amp; AI</tspan><tspan fill="#a1a1aa" dx="18">Developer</tspan>
  </text>

  <!-- Skills line -->
  <text x="80" y="528" font-family="${mono}" font-size="26" fill="#6b6b74">
    React · Node · FastAPI · LangChain · Docker
  </text>

  <!-- BUET note bottom-right -->
  <text x="${W - 80}" y="528" text-anchor="end" font-family="${sans}" font-size="26" font-weight="600" fill="#a1a1aa">
    BUET · CSE
  </text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log("✓ Wrote", out);
