const paths = [
  "M0,30 L10,22 L20,26 L30,10 L40,18 L50,6 L60,14 L70,4 L80,12",
  "M0,10 L10,18 L20,8 L30,20 L40,14 L50,24 L60,16 L70,28 L80,20",
  "M0,20 L10,14 L20,22 L30,8 L40,16 L50,4 L60,12 L70,6 L80,16",
  "M0,6 L10,16 L20,10 L30,22 L40,12 L50,26 L60,18 L70,24 L80,14",
  "M0,26 L10,20 L20,28 L30,16 L40,22 L50,12 L60,20 L70,8 L80,18",
];

const tickers = [
  "AAPL",
  "NVDA",
  "TSM",
  "SPY",
  "KO",
  "LMT",
  "TM",
  "CMG",
  "AAL",
  "QQQ",
  "MSFT",
  "GOOG",
];

export default function SparklineGrid() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="grid h-full grid-cols-3 gap-8 p-8 opacity-[0.08] sm:grid-cols-4 lg:grid-cols-6">
        {tickers.map((symbol, i) => {
          const path = paths[i % paths.length];
          const isUp = i % 3 !== 0;
          return (
            <div key={symbol} className="flex flex-col gap-1">
              <span className="font-mono text-[10px] text-muted-foreground">
                {symbol}
              </span>
              <svg viewBox="0 0 80 32" className="h-8 w-20" fill="none">
                <path
                  d={path}
                  stroke={isUp ? "#22c55e" : "#ef4444"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          );
        })}
      </div>
    </div>
  );
}
