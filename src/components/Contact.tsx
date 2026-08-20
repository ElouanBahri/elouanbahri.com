const EMAIL = "elouan.bahri1@berkeley.edu";
const socials = [
  { label: "GitHub", href: "https://github.com/ElouanBahri" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/elouanbahri/" },
];

export default function Contact() {
  return (
    <section id="contact" className="section-anchor px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl border border-border bg-surface px-8 py-16 text-center sm:px-16">
          <h2 className="text-3xl font-semibold tracking-tight">
            Let&apos;s talk
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Open to conversations about quantitative finance, software
            engineering, and opportunities. Reach out any time.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              {EMAIL}
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-6 text-sm text-muted-foreground">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
