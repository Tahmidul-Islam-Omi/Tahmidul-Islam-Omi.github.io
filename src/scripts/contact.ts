function initContact() {
  const form = document.querySelector<HTMLFormElement>("#contact-form");
  const status = document.querySelector<HTMLElement>("#form-status");
  const button = form?.querySelector<HTMLButtonElement>("button[type='submit']");
  if (!form || !status || !button) return;

  const buttonLabel = button.textContent;
  let sending = false;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (sending) return;

    sending = true;
    button.disabled = true;
    button.textContent = "Sending…";
    form.setAttribute("aria-busy", "true");
    status.textContent = "Sending…";
    status.style.color = "var(--text-muted)";

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15_000);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
        signal: controller.signal,
      });
      const result: unknown = await response.json();
      if (
        !response.ok ||
        typeof result !== "object" ||
        result === null ||
        !("success" in result) ||
        result.success !== true
      ) {
        throw new Error("Submission failed");
      }

      status.textContent = "Thanks! Your message has been sent.";
      status.style.color = "var(--status-success)";
      form.reset();
    } catch {
      status.textContent = controller.signal.aborted
        ? "The request timed out. Please try again or email me directly."
        : "Something went wrong. Please email me directly instead.";
      status.style.color = "var(--status-error)";
    } finally {
      window.clearTimeout(timeout);
      sending = false;
      button.disabled = false;
      button.textContent = buttonLabel;
      form.removeAttribute("aria-busy");
    }
  });
}

if (document.readyState !== "loading") {
  initContact();
} else {
  document.addEventListener("DOMContentLoaded", initContact, { once: true });
}
