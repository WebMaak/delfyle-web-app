"use client";

import { useEffect, useMemo, useState } from "react";

type Props = {
  /** total balls to render; bump for longer pages */
  count?: number;
  /** blur strength in px */
  blurPx?: number;
  /** deterministic seed so positions don't jump on re-renders */
  seed?: number;
};

export default function BackgroundBalls({ count = 60, blurPx = 80, seed = 1337 }: Props) {
  const [docH, setDocH] = useState(0);

  // Keep measuring the full document height so balls span the entire page.
  useEffect(() => {
    const root = document.documentElement;

    const measure = () => {
      // Use the largest scrollHeight we can get
      const h = Math.max(
        root.scrollHeight,
        document.body.scrollHeight,
        root.offsetHeight,
        document.body.offsetHeight
      );
      setDocH(h);
    };

    measure();

    // Update when layout changes
    let ro: ResizeObserver | null = null;
    try {
      ro = new ResizeObserver(measure);
      ro.observe(document.body);
      ro.observe(root);
    } catch {
      /* older browsers: ignore */
    }
    window.addEventListener("resize", measure);

    return () => {
      window.removeEventListener("resize", measure);
      ro?.disconnect();
    };
  }, []);

  // Deterministic PRNG so things don't reshuffle on every render
  const rand = useMemo(() => mulberry32(seed), [seed]);

  // Precompute ball data once we know the document height
  const balls = useMemo(() => {
    if (!docH) return [];
    const arr: {
      top: number;
      leftVw: number;
      size: number;
      color: string;
      delay: number;
    }[] = [];

    for (let i = 0; i < count; i++) {
      const size = 180 + rand() * 320; // 180–500px
      const top = rand() * Math.max(0, docH - size); // anywhere in full doc height
      const leftVw = rand() * 100; // 0–100vw
      const color = i % 2 === 0 ? "var(--primary-color)" : "var(--secondary-color)";
      const delay = rand() * 10;

      arr.push({ top, leftVw, size, color, delay });
    }
    return arr;
  }, [docH, count, rand]);

  return (
    <div
      className="pointer-events-none absolute left-0 top-0 -z-10 w-full"
      style={{
        height: docH ? `${docH}px` : undefined, // cover entire page height
        isolation: "isolate", // keep blend predictable
      }}
    >
      {balls.map((b, i) => (
        <span
          key={i}
          className="absolute rounded-full opacity-60 animate-blob will-change-transform"
          style={{
            width: b.size,
            height: b.size,
            top: b.top,
            left: `${b.leftVw}vw`,
            // soft glowing orb with a brighter core
            background: `radial-gradient(circle at 30% 30%, ${b.color} 0%, transparent 60%)`,
            filter: `blur(${blurPx}px)`,
            mixBlendMode: "screen", // works well on light backgrounds
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

/** tiny deterministic PRNG */
function mulberry32(a: number) {
  return function () {
    let t = (a += 0x6D2B79F5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
