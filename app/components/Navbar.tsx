"use client";

import { useEffect, useState } from "react";
import { CTA_HREF, NAV_LINKS } from "./site";
import { Logo } from "./ui";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5">
      <nav
        aria-label="Primary"
        className={`mx-auto flex h-14 w-full max-w-[1120px] items-center justify-between rounded-full border pl-4 pr-2 transition-all duration-300 sm:pl-5 ${
          scrolled || open
            ? "border-plum/10 bg-white/80 shadow-[0_8px_30px_-12px_rgba(75,22,76,.25)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <a href="#top" aria-label="ShootEngine AI home">
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3.5 py-2 text-[14px] font-medium text-plum/75 transition-colors hover:bg-blush hover:text-plum"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={CTA_HREF}
            className="inline-flex h-10 items-center rounded-full bg-plum px-5 text-[14.5px] font-medium text-white transition-colors hover:bg-plum-soft"
          >
            Try Free
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-plum lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
              {open ? (
                <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              ) : (
                <path d="M3 6h12M3 12h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="mx-auto mt-2 max-w-[1120px] rounded-3xl border border-plum/10 bg-white/95 px-5 pb-3 pt-1 shadow-lift backdrop-blur-xl lg:hidden"
        >
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.href} className="[&:last-child>a]:border-0">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex h-12 items-center border-b border-line text-[16px] font-medium text-plum"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
