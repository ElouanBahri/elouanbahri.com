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
    org: "J.P. Morgan",
    role: "Quantitative Risk Trading Strategy — Spinoff Index Inclusion/Deletion Arbitrage",
    location: "Berkeley, CA, USA",
    period: "June 2026 – Aug 2026",
    bullets: [
      "Designed a beta-hedged, market-neutral long strategy on post-spinoff parent stocks, achieving a 0.69 Sharpe Ratio.",
      "Built leakage-free decision tree and logistic regression models to estimate index-inclusion probabilities and return terciles, increasing Sharpe from 0.69 to 1.29 via probability-weighted position sizing (nested LOO-CV).",
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
    org: "b-cube.ai",
    role: "Cryptocurrency Price Prediction & Trading Strategies (research)",
    location: "Paris, France",
    period: "Dec 2024 – Jun 2025",
    bullets: [
      "Built a modular framework comparing classical time series models (ARIMA, GARCH) with ML models (LSTM/GRU, XGBoost, LLMs); ML models achieved 56% accuracy on 15-minute return forecasting for 2024.",
      "Designed an object-oriented pipeline for multi-asset data ingestion (Binance API), feature engineering, training, and backtesting, with automated real-time predictions via cron jobs.",
      "Deployed personal capital live, yielding a 25% net return over 3 months in 2025 after fees and slippage.",
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
