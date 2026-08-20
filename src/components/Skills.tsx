import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section-anchor bg-surface px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-semibold tracking-tight">Skills</h2>
        <p className="mt-2 text-muted-foreground">
          Tools and areas I work with regularly.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-border bg-background p-6"
            >
              <h3 className="text-sm font-semibold">{group.category}</h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
