import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section-anchor px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Selected projects
            </h2>
            <p className="mt-2 text-muted-foreground">
              A few things I&apos;ve built recently.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target={project.href.startsWith("http") ? "_blank" : undefined}
              rel={
                project.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
            >
              <span className="text-xs font-medium text-accent">
                {project.tag}
              </span>
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
