"use client";

import { useEffect, useRef } from "react";

export default function MouseSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    function handleMove(e: MouseEvent) {
      ref.current?.style.setProperty("--x", `${e.clientX}px`);
      ref.current?.style.setProperty("--y", `${e.clientY}px`);
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-40"
      style={{
        background:
          "radial-gradient(560px circle at var(--x, 50%) var(--y, -100px), var(--accent-soft), transparent 70%)",
        opacity: 0.7,
      }}
    />
  );
}
