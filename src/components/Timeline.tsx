import { education, experience, type TimelineEntry } from "@/data/timeline";

function TimelineList({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="space-y-6 border-l border-border pl-6">
      {entries.map((entry) => (
        <li key={`${entry.org}-${entry.period}`} className="relative">
          <span className="absolute top-1.5 -left-[1.6rem] h-2.5 w-2.5 rounded-full border-2 border-background bg-accent" />

          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-sm font-semibold">{entry.org}</h3>
            <span className="text-xs font-medium text-muted-foreground">
              {entry.period}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            {entry.role} · {entry.location}
          </p>

          {entry.bullets && (
            <ul className="mt-2 space-y-1.5">
              {entry.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="text-sm leading-relaxed text-muted-foreground"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}

export default function Timeline() {
  return (
    <section id="experience" className="section-anchor bg-surface px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-semibold tracking-tight">
          Education & Experience
        </h2>
        <p className="mt-2 text-muted-foreground">
          Where I&apos;ve studied and worked.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Education
            </h3>
            <TimelineList entries={education} />
          </div>

          <div>
            <h3 className="mb-6 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Experience
            </h3>
            <TimelineList entries={experience} />
          </div>
        </div>
      </div>
    </section>
  );
}
