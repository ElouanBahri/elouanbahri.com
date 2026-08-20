"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";
import Reveal from "./Reveal";

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section id="skills" className="section-anchor bg-surface px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight">Skills</h2>
          <p className="mt-2 text-muted-foreground">
            Tools and areas I work with regularly.
          </p>
        </Reveal>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.category}
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="rounded-2xl border border-border bg-background p-6 transition-colors hover:border-accent/40"
            >
              <h3 className="text-sm font-semibold">{group.category}</h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
