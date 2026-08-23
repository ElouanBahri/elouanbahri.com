"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import HeroBlobs from "./HeroBlobs";

const stats = [
  { label: "Graduating", value: "Feb 2027" },
  { label: "Based in", value: "the USA" },
  { label: "Focus", value: "Portfolio Management & Quant Finance" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="about"
      className="section-anchor relative overflow-hidden px-6 pt-40 pb-24"
    >
      <HeroBlobs />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative mx-auto max-w-5xl"
      >
        <div className="flex flex-col-reverse items-start gap-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1">
            <motion.p
              variants={item}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-muted-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              ENSAE Paris × UC Berkeley MFE
            </motion.p>

            <motion.h1
              variants={item}
              className="text-5xl font-semibold tracking-tight text-balance sm:text-6xl"
            >
              Welcome to my website
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-4 max-w-2xl text-xl text-muted-foreground text-balance"
            >
              Engineering student with a deep passion for portfolio
              management and quantitative investing, working toward becoming
              a successful portfolio manager.
            </motion.p>
          </div>

          <motion.div
            variants={item}
            whileHover={{ scale: 1.04, rotate: -1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Image
              src="/images/elouan-bahri.jpg"
              alt="Elouan Bahri"
              width={192}
              height={192}
              priority
              className="h-32 w-32 shrink-0 rounded-2xl border border-border object-cover sm:h-48 sm:w-48"
            />
          </motion.div>
        </div>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl leading-relaxed text-muted-foreground"
        >
          My name is Elouan Bahri. I&apos;m an ENSAE Paris engineering student
          and Master in Financial Engineering (MFE) candidate at UC Berkeley,
          graduating in February 2027. Portfolio management and quantitative
          investing are what drive me, and my long-term goal is to build a
          career as a successful portfolio manager — bringing strong
          determination, energy, and a fast-learning mindset to every step
          along the way. I also built this website using Claude — a small
          demonstration of my ability to create new things with AI.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-all hover:-translate-y-0.5 hover:opacity-90 active:scale-95"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-all hover:-translate-y-0.5 hover:bg-surface active:scale-95"
          >
            Get in touch
          </a>
          <a
            href="/resume/Elouan-Bahri-Resume.pdf"
            download
            className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-all hover:-translate-y-0.5 hover:bg-surface active:scale-95"
          >
            Download resume
          </a>
        </motion.div>

        <motion.dl
          variants={item}
          className="mt-16 grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-3"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                {stat.label}
              </dt>
              <dd className="mt-1.5 text-lg font-medium">{stat.value}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
}
