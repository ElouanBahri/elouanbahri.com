"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import MarketChartBackground from "./MarketChartBackground";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-anchor relative overflow-hidden px-6 py-24"
    >
      <MarketChartBackground />

      <div className="relative mx-auto max-w-5xl">
        <Reveal className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Selected projects
            </h2>
            <p className="mt-2 text-muted-foreground">
              A few things I&apos;ve built recently.
            </p>
          </div>
        </Reveal>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>

        <Reveal delay={0.15} className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            Bonus: if you want to train mental math and sequences,{" "}
            <a
              href="/trader-math-drill.html"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent underline underline-offset-4 hover:text-foreground"
            >
              click here
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
