import type { ReactNode } from "react";
import { Check } from "./ui";

/*
 * Illustrative product art. No real product photos exist in this project yet,
 * so every "photo" on the page is drawn here with one sample product
 * (an amber serum bottle). Swap <Shot> for <Image> once real before/after
 * assets are available.
 */

type Variant = "original" | "distorted" | "preserved";

export function BottleShape({ variant = "original" }: { variant?: Variant }) {
  const bad = variant === "distorted";
  const label = bad
    ? { brand: "LUMEE", l1: "Vitmin C", l2: "SERAM", l3: "30 mi . 1 f oz" }
    : { brand: "LUMÉ", l1: "Vitamin C", l2: "SERUM", l3: "30 ml · 1 fl oz" };

  const body = bad
    ? "M52 98 Q46 92 58 86 L142 88 Q156 96 150 120 L154 196 Q150 232 140 252 Q100 266 58 254 Q44 230 50 190 Z"
    : "M72 84 H128 Q150 84 150 106 V238 Q150 260 128 260 H72 Q50 260 50 238 V106 Q50 84 72 84 Z";

  return (
    <g filter={bad ? "url(#warp-body)" : undefined}>
      <defs>
        <linearGradient id={`glass-${variant}`} x1="0" x2="1">
          <stop offset="0" stopColor="#b9742a" />
          <stop offset=".45" stopColor="#d9973f" />
          <stop offset="1" stopColor="#9a5a1c" />
        </linearGradient>
        <filter id="warp-body" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="4" />
          <feDisplacementMap in="SourceGraphic" scale="7" />
        </filter>
        <filter id="warp-label" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.07" numOctaves="2" seed="9" />
          <feDisplacementMap in="SourceGraphic" scale="5" />
        </filter>
      </defs>
      {/* dropper */}
      <rect
        x={bad ? 80 : 84}
        y={bad ? 16 : 12}
        width={bad ? 38 : 32}
        height="44"
        rx="14"
        fill="#2b0d2c"
        transform={bad ? "rotate(6 100 40)" : undefined}
      />
      <rect x="76" y="54" width="48" height="22" rx="4" fill="#3b1a3c" />
      <rect x="82" y="74" width="36" height="14" fill="#c38a3c" />
      {/* body */}
      <path d={body} fill={`url(#glass-${variant})`} />
      <rect x="58" y="96" width="9" height="150" rx="4.5" fill="#fff" opacity=".22" />
      {bad && (
        <path
          d="M52 98 L60 104 L54 112 L62 120"
          stroke="#fff"
          strokeWidth="2"
          fill="none"
          opacity=".7"
        />
      )}
      {/* label */}
      <g
        filter={bad ? "url(#warp-label)" : undefined}
        transform={bad ? "rotate(-5 100 170) skewX(-7)" : undefined}
      >
        <rect x="62" y="120" width="76" height="106" rx="6" fill="#fbf6ee" />
        <text
          x="100"
          y="150"
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontSize="17"
          fontWeight="700"
          letterSpacing={bad ? "0.5" : "3"}
          fill="#3b1a3c"
        >
          {label.brand}
        </text>
        <rect x="84" y="160" width="32" height="1.5" fill="#de88cf" />
        <text
          x="100"
          y="180"
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
          fontSize={bad ? "10" : "10.5"}
          fill="#3b1a3c"
        >
          {label.l1}
        </text>
        <text
          x="100"
          y="195"
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
          fontSize="9"
          letterSpacing="2"
          fill="#6a2a6b"
        >
          {label.l2}
        </text>
        <text
          x="100"
          y="214"
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
          fontSize="6.8"
          fill="#6f5a70"
        >
          {label.l3}
        </text>
      </g>
    </g>
  );
}

export function Bottle({
  variant = "original",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 280"
      className={className}
      role="img"
      aria-label="Amber serum bottle labelled LUMÉ Vitamin C Serum"
    >
      <BottleShape variant={variant} />
    </svg>
  );
}

function ModelSvg({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 250"
      className={className}
      role="img"
      aria-label="Illustration of a model holding the serum bottle"
      preserveAspectRatio="xMidYMax slice"
    >
      <rect width="200" height="250" fill="#f3dfe9" />
      <circle cx="150" cy="60" r="70" fill="#f8e7f7" />
      {/* torso */}
      <path d="M20 250 Q24 178 76 168 H124 Q176 178 180 250 Z" fill="#fdfaf6" />
      <path d="M86 168 Q100 190 114 168" fill="#e7b896" />
      {/* neck + head */}
      <rect x="88" y="126" width="24" height="44" rx="10" fill="#e7b896" />
      <ellipse cx="100" cy="98" rx="27" ry="33" fill="#efc3a1" />
      <path
        d="M71 98 Q66 58 100 56 Q136 56 130 100 Q128 76 112 72 Q92 80 78 70 Q74 82 71 98Z"
        fill="#3a1e24"
      />
      {/* arm */}
      <path d="M150 250 Q160 200 140 168 L150 160 Q176 196 172 250Z" fill="#fdfaf6" />
      <g transform="translate(118 106) scale(.3) rotate(8 100 140)">
        <BottleShape variant="preserved" />
      </g>
      <ellipse cx="128" cy="150" rx="11" ry="9" fill="#efc3a1" />
    </svg>
  );
}

type ShotKind = "raw" | "white" | "studio" | "model";

export function Shot({
  kind,
  variant = "original",
  className = "",
}: {
  kind: ShotKind;
  variant?: Variant;
  className?: string;
}) {
  if (kind === "model") {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <ModelSvg className="absolute inset-0 h-full w-full" />
      </div>
    );
  }

  const bg = {
    raw: "linear-gradient(170deg,#cdbfae 0%,#b8a892 55%,#9d8d78 100%)",
    white: "#ffffff",
    studio: "radial-gradient(120% 90% at 50% 18%,#fdeefb 0%,#f4c9ec 60%,#e9a9dc 100%)",
  }[kind];

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: bg }}>
      {kind === "raw" && (
        <>
          {/* cluttered desk: cable, shadow, uneven light */}
          <div className="absolute inset-x-0 bottom-0 h-[38%] bg-[#8a7b68]/50" />
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
            <path d="M-5 78 C25 70 40 92 70 84 S105 80 110 86" stroke="#3a3128" strokeWidth="1.6" fill="none" opacity=".55" />
            <ellipse cx="20" cy="22" rx="22" ry="12" fill="#fff" opacity=".13" />
          </svg>
          <div className="absolute left-[20%] right-[8%] bottom-[7%] h-[7%] rounded-[50%] bg-black/30 blur-md" />
        </>
      )}
      {kind === "studio" && (
        <>
          <div className="absolute bottom-[9%] left-1/2 h-[14%] w-[62%] -translate-x-1/2 rounded-[50%] bg-white/70 shadow-[0_16px_28px_-10px_rgba(75,22,76,.45)]" />
          <div className="absolute bottom-[14%] left-1/2 h-[6%] w-[40%] -translate-x-1/2 rounded-[50%] bg-plum/15 blur-md" />
        </>
      )}
      {kind === "white" && (
        <div className="absolute bottom-[9%] left-1/2 h-[5%] w-[44%] -translate-x-1/2 rounded-[50%] bg-plum/12 blur-md" />
      )}
      <Bottle
        variant={variant}
        className={`absolute left-1/2 bottom-[10%] h-[76%] -translate-x-1/2 ${
          kind === "raw" ? "rotate-[-4deg] brightness-[.92] saturate-[.85]" : ""
        }`}
      />
    </div>
  );
}

export function SeoCard({
  compact = false,
  className = "",
}: {
  compact?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-line bg-white p-4 text-left shadow-card ${className}`}
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-plum/60">
          Listing · draft
        </span>
        <span className="rounded-full bg-blush px-2 py-0.5 text-[10px] font-medium text-plum">
          Ready
        </span>
      </div>
      <p className="mt-2 text-[13px] font-semibold leading-snug text-plum">
        LUMÉ Vitamin C Face Serum, 30 ml — Brightening &amp; Hydrating for Daily Use
      </p>
      {!compact && (
        <ul className="mt-2.5 space-y-1.5 text-[11.5px] leading-snug text-muted">
          {[
            "Brightens the look of dull, uneven skin",
            "Lightweight dropper formula absorbs fast",
            "Suits daily AM and PM routines",
          ].map((b) => (
            <li key={b} className="flex gap-1.5">
              <Check className="mt-px h-3.5 w-3.5 text-pink" />
              {b}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {["vitamin c serum", "face serum", "skincare"].map((t) => (
          <span key={t} className="rounded-full bg-mist px-2 py-0.5 text-[10px] text-plum/80">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Illustrative({ children }: { children?: ReactNode }) {
  return (
    <p className="font-mono text-[11px] leading-relaxed text-muted/80">
      {children ?? "Illustrative sample. Replace with a real product example before launch."}
    </p>
  );
}
