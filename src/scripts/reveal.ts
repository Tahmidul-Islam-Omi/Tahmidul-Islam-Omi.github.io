/**
 * Scroll-reveal: fades + slides elements in as they enter the viewport.
 * Add `data-reveal` to any element. Optional `data-reveal-delay="120"` (ms)
 * staggers a group. Falls back to instantly visible if IO is unsupported.
 */
function initReveal() {
  const els = Array.from(
    document.querySelectorAll<HTMLElement>("[data-reveal]"),
  );
  if (els.length === 0) return;

  if (
    typeof window.IntersectionObserver !== "function" ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        const delay = Number(el.dataset.revealDelay ?? 0);
        window.setTimeout(() => {
          el.classList.remove("reveal-pending");
          el.classList.add("is-visible");
        }, delay);
        obs.unobserve(el); // reveal once, then stop watching
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
  );

  els.forEach((el) => {
    // Keep content already on screen visible when the script starts.
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.classList.add("is-visible");
      return;
    }
    observer.observe(el);
    el.classList.add("reveal-pending");
  });
}

// Run now if the DOM is ready, otherwise wait.
if (document.readyState !== "loading") {
  initReveal();
} else {
  document.addEventListener("DOMContentLoaded", initReveal);
}
