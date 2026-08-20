// TODO: adjust categories/skills to match your actual toolkit.
export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Quant & Finance",
    items: [
      "Derivatives Pricing",
      "Statistics & Probability",
      "Time Series Analysis",
      "Portfolio Theory",
      "Bloomberg Terminal",
    ],
  },
  {
    category: "Software Engineering",
    items: ["Python", "C++", "TypeScript", "React / Next.js", "SQL"],
  },
  {
    category: "Data & ML",
    items: ["NumPy / Pandas", "PyTorch", "Machine Learning", "Data Visualization"],
  },
  {
    category: "Tools",
    items: ["Git", "AWS", "Excel / VBA", "Linux"],
  },
];
