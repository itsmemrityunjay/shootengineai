"use client";

import { useState } from "react";
import { Shot } from "./art";

export function CompareSlider({ className = "" }: { className?: string }) {
  const [pos, setPos] = useState(50);

  return (
    <div className={`relative select-none overflow-hidden rounded-[22px] has-[input:focus-visible]:ring-4 has-[input:focus-visible]:ring-pink/60 ${className}`}>
      <div className="absolute inset-0">
        <Shot kind="studio" className="h-full w-full" />
      </div>
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Shot kind="raw" className="h-full w-full" />
      </div>

      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 font-mono text-[10.5px] font-medium uppercase tracking-wider text-plum backdrop-blur">
        Before
      </span>
      <span className="absolute right-4 top-4 rounded-full bg-plum px-3 py-1 font-mono text-[10.5px] font-medium uppercase tracking-wider text-white">
        After
      </span>

      <div className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_12px_rgba(0,0,0,.25)]" style={{ left: `${pos}%` }}>
        <span className="pulse-ring absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-plum shadow-lift">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
            <path d="M7 5L2 10l5 5M13 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Drag to compare the raw photo with the finished studio image"
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
