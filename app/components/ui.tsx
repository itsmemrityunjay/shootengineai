import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <p
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10.5px] font-medium uppercase tracking-[0.1em] sm:tracking-[0.14em] ${
        dark
          ? "border-white/15 bg-white/5 text-pink"
          : "border-plum/10 bg-white/80 text-plum/75 shadow-[0_1px_2px_rgba(75,22,76,.06)]"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-pink" aria-hidden />
      {children}
    </p>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  dark = false,
  center = false,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <div data-reveal className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-4 text-[clamp(2rem,4.6vw,3.5rem)] font-semibold leading-[1.04] tracking-[-0.035em] text-balance ${
          dark ? "text-white" : "text-plum"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-5 text-[17px] leading-relaxed sm:text-lg ${
            dark ? "text-white/70" : "text-muted"
          }`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}

const base =
  "inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 text-[15px] font-medium transition-colors duration-200";

export function PrimaryButton({
  href,
  children,
  onDark = false,
  glow = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  onDark?: boolean;
  glow?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`${base} shine ${
        glow
          ? "bg-pink font-semibold text-plum shadow-[0_0_0_1px_rgba(255,255,255,.25)_inset,0_12px_40px_-8px_rgba(222,136,207,.85)] hover:bg-[#e79ada]"
          : onDark
            ? "bg-white text-plum hover:bg-blush"
            : "bg-plum text-white shadow-[0_10px_30px_-10px_rgba(75,22,76,.6)] hover:bg-plum-soft"
      } ${className}`}
    >
      {children}
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
        <path
          d="M2 7h10m0 0L8 3m4 4L8 11"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}

export function SecondaryButton({
  href,
  children,
  onDark = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`${base} border ${
        onDark
          ? "border-white/25 text-white hover:bg-white/10"
          : "border-plum/20 bg-white text-plum hover:border-plum/40 hover:bg-blush/60"
      } ${className}`}
    >
      {children}
    </a>
  );
}

export function Check({ className = "" }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className={`shrink-0 ${className}`}
      aria-hidden
    >
      <circle cx="9" cy="9" r="9" fill="currentColor" opacity="0.14" />
      <path
        d="M5.5 9.2l2.3 2.3 4.7-5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Cross({ className = "" }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className={`shrink-0 ${className}`}
      aria-hidden
    >
      <circle cx="9" cy="9" r="9" fill="currentColor" opacity="0.14" />
      <path
        d="M6.3 6.3l5.4 5.4m0-5.4l-5.4 5.4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <rect width="28" height="28" rx="8" fill={dark ? "#fff" : "#4B164C"} />
        <path
          d="M8 9.5h7.5M8 14h12M8 18.5h7.5"
          stroke={dark ? "#4B164C" : "#fff"}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="20" cy="9.5" r="2" fill="#DE88CF" />
      </svg>
      <span
        className={`text-[17px] font-semibold tracking-[-0.03em] ${
          dark ? "text-white" : "text-plum"
        }`}
      >
        ShootEngine<span className="text-pink"> AI</span>
      </span>
    </span>
  );
}
