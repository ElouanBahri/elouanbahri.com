export interface Project {
  title: string;
  tag: string;
  description: string;
  tech: string[];
  href: string;
}

export const projects: Project[] = [
  {
    title: "Revoscope",
    tag: "Data / Web App",
    description:
      "An interactive dashboard for a Revolut investing portfolio — P&L, allocation, dividends, and live prices from a CSV export.",
    tech: ["Python", "Streamlit", "Plotly"],
    href: "https://revoscope.streamlit.app/",
  },
  {
    title: "Spinoff Index Arbitrage",
    tag: "Quantitative Finance",
    description:
      "A beta-hedged, market-neutral long strategy on post-spinoff parent stocks (0.69 Sharpe), refined with leakage-free decision tree and logistic regression models estimating index-inclusion probabilities — raising Sharpe to 1.29 via probability-weighted position sizing.",
    tech: ["Python", "scikit-learn", "Pandas"],
    href: "https://github.com/ElouanBahri/index-spinoff-arbitrage",
  },
  {
    title: "Crypto Price Prediction",
    tag: "Machine Learning",
    description:
      "A modular framework comparing classical time series models (ARIMA, GARCH) against ML models (LSTM/GRU, XGBoost, LLMs) for cryptocurrency forecasting, with a live-traded strategy yielding a 25% net return over 3 months.",
    tech: ["Python", "PyTorch", "XGBoost"],
    href: "https://github.com/ElouanBahri/Predicting_crypto_prices",
  },
];
