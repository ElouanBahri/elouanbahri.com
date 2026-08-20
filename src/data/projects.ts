// TODO: replace with your real projects — titles, descriptions, tech, and links.
export interface Project {
  title: string;
  tag: string;
  description: string;
  tech: string[];
  href: string;
}

export const projects: Project[] = [
  {
    title: "Options Pricing Engine",
    tag: "Quantitative Finance",
    description:
      "A Monte Carlo and Black-Scholes pricing engine for European and American options, benchmarked against live market data.",
    tech: ["Python", "NumPy", "C++"],
    href: "#",
  },
  {
    title: "Portfolio Risk Dashboard",
    tag: "Data / Web App",
    description:
      "An interactive dashboard visualizing portfolio VaR, drawdowns, and factor exposures in real time.",
    tech: ["Next.js", "TypeScript", "Python API"],
    href: "#",
  },
  {
    title: "Market Sentiment Model",
    tag: "Machine Learning",
    description:
      "An NLP model classifying financial news sentiment to generate systematic trading signals.",
    tech: ["PyTorch", "Transformers", "Pandas"],
    href: "#",
  },
];
