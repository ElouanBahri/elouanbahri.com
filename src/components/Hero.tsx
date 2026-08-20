const stats = [
  { label: "Graduating", value: "Feb 2027" },
  { label: "Based between", value: "Paris & Berkeley" },
  { label: "Focus", value: "Quant Finance × CS" },
];

export default function Hero() {
  return (
    <section
      id="about"
      className="section-anchor relative overflow-hidden px-6 pt-40 pb-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]"
      />

      <div className="relative mx-auto max-w-5xl">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          ENSAE Paris × UC Berkeley MFE
        </p>

        <h1 className="text-5xl font-semibold tracking-tight text-balance sm:text-6xl">
          Elouan Bahri
        </h1>

        <p className="mt-4 max-w-2xl text-xl text-muted-foreground text-balance">
          Engineering student and quantitative finance enthusiast, building at
          the intersection of markets and software.
        </p>

        <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
          I&apos;m an ENSAE Paris engineering student and Master in Financial
          Engineering (MFE) candidate at UC Berkeley, graduating in February
          2027. Passionate about quantitative finance and computer science, I
          bring strong determination, energy, and a fast-learning mindset to
          every project I take on.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-surface"
          >
            Get in touch
          </a>
        </div>

        <dl className="mt-16 grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                {stat.label}
              </dt>
              <dd className="mt-1.5 text-lg font-medium">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
