const tickers = [
  { symbol: "AAPL", price: "316.83", change: "+1.24%" },
  { symbol: "NVDA", price: "217.56", change: "+2.87%" },
  { symbol: "TSM", price: "412.09", change: "-0.62%" },
  { symbol: "LMT", price: "589.15", change: "+0.41%" },
  { symbol: "KO", price: "90.35", change: "+0.18%" },
  { symbol: "TM", price: "188.78", change: "-0.29%" },
  { symbol: "CMG", price: "34.66", change: "+3.05%" },
  { symbol: "AAL", price: "13.86", change: "-1.13%" },
  { symbol: "SPY", price: "612.40", change: "+0.34%" },
  { symbol: "^GSPC", price: "6,812.55", change: "+0.34%" },
];

// Duplicated once so the CSS translateX(-50%) loop is seamless.
const items = [...tickers, ...tickers];

export default function TickerTape() {
  return (
    <div
      aria-hidden
      className="overflow-hidden border-b border-border/60 bg-surface/80"
    >
      <div className="animate-ticker flex w-max items-center gap-8 py-1.5">
        {items.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-1.5 px-2 font-mono text-xs whitespace-nowrap"
          >
            <span className="font-semibold text-foreground">{t.symbol}</span>
            <span className="text-muted-foreground">{t.price}</span>
            <span
              className={
                t.change.startsWith("-")
                  ? "text-red-500 dark:text-red-400"
                  : "text-emerald-600 dark:text-emerald-400"
              }
            >
              {t.change}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
