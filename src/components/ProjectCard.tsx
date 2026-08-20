"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent } from "react";
import type { Project } from "@/data/projects";

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjectCard({ project }: { project: Project }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), {
    stiffness: 300,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), {
    stiffness: 300,
    damping: 25,
  });

  function handleMouseMove(e: MouseEvent<HTMLAnchorElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const isExternal = project.href.startsWith("http");

  return (
    <motion.a
      href={project.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10"
    >
      <span className="text-xs font-medium text-accent">{project.tag}</span>
      <h3 className="mt-3 text-lg font-semibold tracking-tight">
        {project.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-background px-2.5 py-1 text-xs text-muted-foreground ring-1 ring-border"
          >
            {tech}
          </span>
        ))}
      </div>

      <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground">
        View project
        <span className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </span>
    </motion.a>
  );
}
