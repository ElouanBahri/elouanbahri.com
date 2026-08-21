"use client";

import { useEffect, useRef } from "react";

export default function MarketChartBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !parent || !ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = parent!.clientWidth;
      height = parent!.clientHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    const pointCount = 90;
    const points: number[] = [];
    let last = 0.5;
    for (let i = 0; i < pointCount; i++) {
      last += (Math.random() - 0.5) * 0.06;
      last = Math.max(0.15, Math.min(0.85, last));
      points.push(last);
    }

    const rootStyle = getComputedStyle(document.documentElement);
    const accent = rootStyle.getPropertyValue("--accent").trim() || "#2f6feb";

    function draw() {
      ctx!.clearRect(0, 0, width, height);
      const step = width / (pointCount - 1);

      ctx!.beginPath();
      points.forEach((p, i) => {
        const x = i * step;
        const y = height * (1 - p);
        if (i === 0) ctx!.moveTo(x, y);
        else ctx!.lineTo(x, y);
      });

      ctx!.save();
      ctx!.strokeStyle = accent;
      ctx!.lineWidth = 2;
      ctx!.globalAlpha = 0.45;
      ctx!.lineJoin = "round";
      ctx!.stroke();
      ctx!.restore();

      ctx!.lineTo(width, height);
      ctx!.lineTo(0, height);
      ctx!.closePath();
      const gradient = ctx!.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, `${accent}40`);
      gradient.addColorStop(1, `${accent}00`);
      ctx!.fillStyle = gradient;
      ctx!.fill();
    }

    draw();
    if (reduceMotion) {
      return () => window.removeEventListener("resize", resize);
    }

    let raf = 0;
    let frame = 0;
    function tick() {
      frame++;
      if (frame % 45 === 0) {
        points.shift();
        let next = points[points.length - 1] + (Math.random() - 0.5) * 0.08;
        next = Math.max(0.1, Math.min(0.9, next));
        points.push(next);
        draw();
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
    />
  );
}
