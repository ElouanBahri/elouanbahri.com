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
];
