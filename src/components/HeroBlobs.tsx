"use client";

import { useEffect, useRef } from "react";

const blobs = [
  { color: "var(--blob-1)", size: 460, top: "-14%", left: "4%", depth: 22, duration: "19s" },
  { color: "var(--blob-2)", size: 380, top: "4%", left: "58%", depth: 34, duration: "24s" },
  { color: "var(--blob-3)", size: 340, top: "42%", left: "28%", depth: 14, duration: "28s" },
];

export default function HeroBlobs() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    function handleMove(e: MouseEvent) {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const relX = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const relY = (e.clientY - rect.top - rect.height / 2) / rect.height;
      el.querySelectorAll<HTMLElement>("[data-depth]").forEach((node) => {
        const depth = Number(node.dataset.depth);
        node.style.transform = `translate(${relX * depth}px, ${relY * depth}px)`;
      });
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {blobs.map((blob, i) => (
        <div
          key={i}
          className="animate-blob-drift absolute"
          style={{ top: blob.top, left: blob.left, animationDuration: blob.duration }}
        >
          <div
            data-depth={blob.depth}
            className="rounded-full opacity-40 blur-[110px] transition-transform duration-300 ease-out"
            style={{ width: blob.size, height: blob.size, background: blob.color }}
          />
        </div>
      ))}
    </div>
  );
}
