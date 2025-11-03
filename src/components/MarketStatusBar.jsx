import { useState, useEffect } from "react";

const MarketStatusBar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulate market data (in production, fetch from API)
  const marketData = [
    { symbol: "S&P 500", value: "5,234.56", change: "+0.52%", positive: true },
    { symbol: "NASDAQ", value: "16,789.23", change: "+0.81%", positive: true },
    { symbol: "DOW", value: "38,456.12", change: "+0.34%", positive: true },
    { symbol: "BTC", value: "$65,432", change: "+2.14%", positive: true },
  ];

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit',
      hour12: true 
    });
  };

  return (
    <div className="bg-gradient-to-r from-[#1e40af] via-[#3b82f6] to-[#1e40af] text-white py-2 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Market Status */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold">Market Open</span>
          </div>
          <span className="text-xs text-blue-100 hidden sm:inline">
            {formatTime(time)} EST
          </span>
        </div>

        {/* Scrolling Market Data */}
        <div className="flex-1 mx-4 overflow-hidden">
          <div className="flex space-x-6 animate-marquee">
            {[...marketData, ...marketData].map((data, index) => (
              <div key={index} className="flex items-center space-x-2 whitespace-nowrap">
                <span className="font-semibold text-sm">{data.symbol}:</span>
                <span className="text-sm">{data.value}</span>
                <span className={`text-xs font-semibold ${data.positive ? 'text-green-300' : 'text-red-300'}`}>
                  {data.change}
                </span>
                {index < marketData.length * 2 - 1 && (
                  <span className="text-blue-300 ml-2">•</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio Badge */}
        <div className="hidden md:flex items-center space-x-2 text-xs bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
          <span className="font-semibold">Portfolio Performance</span>
          <span className="text-green-300">+31.2%</span>
        </div>
      </div>
    </div>
  );
};

export default MarketStatusBar;

