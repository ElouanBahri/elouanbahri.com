"use client";

import { useEffect, useRef } from "react";

const COLORS = ["#ef4444", "#b91c1c", "#fca5a5"];
const SERIES_COUNT = 3;
const POINT_COUNT = 260;
const DURATION_MS = 5000;
const TRUE_MEAN = 3.5; // fair six-sided die: E[X] = (1+2+...+6)/6
const MIN_VAL = 1;
const MAX_VAL = 6;

/** Running average of n fair die rolls, for n = 1..POINT_COUNT. */
function simulateRunningMean(): number[] {
  const means: number[] = [];
  let sum = 0;
  for (let n = 1; n <= POINT_COUNT; n++) {
    const roll = 1 + Math.floor(Math.random() * 6);
    sum += roll;
    means.push(sum / n);
  }
  return means;
}

export default function LawOfLargeNumbers() {
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

    const mutedColor =
      getComputedStyle(document.documentElement)
        .getPropertyValue("--muted-foreground")
        .trim() || "#5c6169";

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

    function valueToY(v: number) {
      const t = (v - MIN_VAL) / (MAX_VAL - MIN_VAL);
      return height * (1 - (0.12 + t * 0.76));
    }

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

    let series: number[][] = [];
    let raf = 0;
    let startTime = 0;
    let running = false;

    function render(progress: number) {
      ctx!.clearRect(0, 0, width, height);

      ctx!.save();
      ctx!.setLineDash([5, 5]);
      ctx!.strokeStyle = mutedColor;
      ctx!.globalAlpha = 0.35;
      ctx!.lineWidth = 1;
      const meanY = valueToY(TRUE_MEAN);
      ctx!.beginPath();
      ctx!.moveTo(0, meanY);
      ctx!.lineTo(width, meanY);
      ctx!.stroke();
      ctx!.restore();

      const step = width / (POINT_COUNT - 1);
      const visibleCount = Math.max(2, Math.floor(POINT_COUNT * progress));

      series.forEach((means, idx) => {
        const points = means.slice(0, visibleCount).map((v, i) => ({
          x: i * step,
          y: valueToY(v),
        }));
        ctx!.strokeStyle = COLORS[idx % COLORS.length];
        ctx!.lineWidth = 1.6;
        ctx!.globalAlpha = 0.32;
        ctx!.lineJoin = "round";
        ctx!.lineCap = "round";
        drawSmoothPath(points);
      });
      ctx!.globalAlpha = 1;
    }

    function start() {
      series = Array.from({ length: SERIES_COUNT }, () =>
        simulateRunningMean(),
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
      <div
        aria-hidden
        className="text-muted-foreground/60 absolute top-6 left-6 max-w-xs font-mono text-[10px] leading-relaxed"
      >
        <p className="font-semibold tracking-wide uppercase">
          Law of Large Numbers
        </p>
        <p className="mt-1">
          M<sub>n</sub> = (1/n) Σ X<sub>i</sub> → μ  as  n → ∞
        </p>
      </div>
    </div>
  );
}
