export interface TimelineEntry {
  org: string;
  role: string;
  location: string;
  period: string;
  bullets?: string[];
}

export const education: TimelineEntry[] = [
  {
    org: "University of California, Berkeley — Haas School of Business",
    role: "Master of Financial Engineering",
    location: "Berkeley, CA, USA",
    period: "Expected March 2027",
  },
  {
    org: "ENSAE Paris — Polytechnic Institute of Paris",
    role: "Master of Science in Statistics, Finance and Data Science",
    location: "Paris, France",
    period: "Expected upon completion of the MFE",
  },
  {
    org: "ENSAE Paris — Polytechnic Institute of Paris",
    role: "Bachelor of Science in Economics and Applied Mathematics",
    location: "Paris, France",
    period: "November 2024",
    bullets: ["GPA: 4.0/4.0"],
  },
];

export const experience: TimelineEntry[] = [
  {
    org: "UBS Investment Bank",
    role: "Incoming Off-Cycle Intern — Global Markets, Derivatives & Solutions",
    location: "New York, NY, USA",
    period: "Oct 2026 – Jan 2027",
    bullets: [
      "Joining the New York office to actively contribute to derivative structuring and trading operations.",
    ],
  },
  {
    org: "Barclays Investment Bank",
    role: "Rates Strat Intern",
    location: "Paris, France",
    period: "Jun 2025 – Dec 2025",
    bullets: [
      "Researched and backtested SSA bond pair trades using OLS residuals, optimizing entries with Z-spread, duration, convexity, and repo rates — yielding a 1.52 Sharpe Ratio on the SSA desk.",
      "Engineered an LSTM model to predict RFQ hit probability (0.72 AUC), generating a live probability matrix by DV01 and client industry to optimize skew and capture alpha.",
      "Built a modular Python backtesting framework computing Sharpe Ratio, PnL/trade, carry, and holding time.",
      "Developed real-time risk engines (AG Grid/Charts) giving EM, SSA, and inflation desks instant DV01 exposure and RFQ analytics.",
    ],
  },
  {
    org: "Galileo Global Education",
    role: "Data Analyst Intern",
    location: "Paris, France",
    period: "Jun 2024 – Sep 2024",
    bullets: [
      "Developed Streamlit web apps with automated data cleaning (Pandas) and PDF extraction pipelines (PDFplumber, Tesseract OCR), cutting manual processing time from 3 days to 20 minutes.",
      "Built a neural network–based NLP model for sentiment analysis on alumni feedback to evaluate program effectiveness.",
    ],
  },
];
