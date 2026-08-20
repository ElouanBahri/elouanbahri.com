export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Quantitative Finance",
    items: [
      "Derivatives Pricing",
      "Portfolio Theory",
      "Relative Value Strategies",
      "Bloomberg Terminal",
    ],
  },
  {
    category: "Mathematics & Statistics",
    items: [
      "Probability Theory",
      "Statistics & Econometrics",
      "Time-Series Analysis",
      "Stochastic Calculus",
    ],
  },
  {
    category: "Machine Learning",
    items: ["TensorFlow", "PyTorch", "scikit-learn", "Deep Learning (LSTM/GRU)"],
  },
  {
    category: "Trading & Tools",
    items: ["Algorithmic Trading", "Backtesting", "Python", "SQL"],
  },
];
