"use client";

import { useEffect } from "react";

// Page-wide progressive enhancements: scroll reveal + card spotlight.
// Content stays fully visible if this never runs.
export function Enhancements() {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest?.(".spotlight") as HTMLElement | null;
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    document.addEventListener("pointermove", onMove, { passive: true });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return () => document.removeEventListener("pointermove", onMove);
    }

    const root = document.documentElement;
    root.classList.add("reveal-ready");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));

    return () => {
      document.removeEventListener("pointermove", onMove);
      io.disconnect();
      root.classList.remove("reveal-ready");
    };
  }, []);

  return null;
}
