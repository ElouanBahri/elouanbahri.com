"use client";

import { useEffect, useRef } from "react";

const COLORS = ["#ef4444", "#3b82f6", "#a855f7", "#b91c1c", "#7c3aed"];
const PATH_COUNT = 5;
const POINT_COUNT = 220;
const DURATION_MS = 5000;
const VOLATILITY = 0.045;

function randn(): number {
  let u = 0;
  let v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

/** A discretized Wiener process: cumulative Gaussian increments. */
function generateBrownianPath(): number[] {
  const path: number[] = [0];
  for (let i = 1; i < POINT_COUNT; i++) {
    path.push(path[i - 1] + randn() * VOLATILITY);
  }
  return path;
}

/** Normalize all paths against one shared scale, so index 0 (which is 0 for
 * every path) lands on the exact same y position for all of them. */
function normalizeShared(paths: number[][]): number[][] {
  const allValues = paths.flat();
  const min = Math.min(...allValues);
  const max = Math.max(...allValues);
  const range = max - min || 1;
  return paths.map((path) =>
    path.map((v) => 0.12 + ((v - min) / range) * 0.76),
  );
}

export default function MarketChartBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !container || !ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = container!.clientWidth;
      height = container!.clientHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    function drawSmoothPath(points: { x: number; y: number }[]) {
      if (points.length < 2) return;
      ctx!.beginPath();
      ctx!.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length - 1; i++) {
        const midX = (points[i].x + points[i + 1].x) / 2;
        const midY = (points[i].y + points[i + 1].y) / 2;
        ctx!.quadraticCurveTo(points[i].x, points[i].y, midX, midY);
      }
      const last = points[points.length - 1];
      ctx!.lineTo(last.x, last.y);
      ctx!.stroke();
    }

    let paths: number[][] = [];
    let raf = 0;
    let startTime = 0;
    let running = false;

    function render(progress: number) {
      ctx!.clearRect(0, 0, width, height);
      const step = width / (POINT_COUNT - 1);
      const visibleCount = Math.max(2, Math.floor(POINT_COUNT * progress));

      paths.forEach((path, idx) => {
        const points = path.slice(0, visibleCount).map((v, i) => ({
          x: i * step,
          y: height * (1 - v),
        }));
        ctx!.strokeStyle = COLORS[idx % COLORS.length];
        ctx!.lineWidth = 1.6;
        ctx!.globalAlpha = 0.28;
        ctx!.lineJoin = "round";
        ctx!.lineCap = "round";
        drawSmoothPath(points);
      });
      ctx!.globalAlpha = 1;
    }

    function start() {
      paths = normalizeShared(
        Array.from({ length: PATH_COUNT }, () => generateBrownianPath()),
      );
      startTime = performance.now();
      running = true;

      if (reduceMotion) {
        render(1);
        running = false;
        return;
      }

      function tick(now: number) {
        const progress = Math.min(1, (now - startTime) / DURATION_MS);
        render(progress);
        if (progress < 1) {
          raf = requestAnimationFrame(tick);
        } else {
          running = false;
        }
      }
      raf = requestAnimationFrame(tick);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !running) {
          cancelAnimationFrame(raf);
          start();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(container);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0">
      <canvas
        ref={canvasRef}
        aria-hidden
        className="absolute inset-0 h-full w-full"
      />
      <span
        aria-hidden
        className="text-muted-foreground/50 absolute top-4 right-6 font-mono text-[10px] tracking-wide uppercase"
      >
        Brownian Motion
      </span>
    </div>
  );
}
