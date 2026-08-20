export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <p>© {year} Elouan Bahri. All rights reserved.</p>
        <p>Built with Next.js & Tailwind CSS.</p>
      </div>
    </footer>
  );
}
