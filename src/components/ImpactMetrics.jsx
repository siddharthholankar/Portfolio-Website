import { useState, useEffect, useRef } from "react";

const ImpactMetrics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({});
  const componentRef = useRef(null);

  const metrics = [
    {
      id: "portfolio",
      target: 50,
      suffix: "M+",
      label: "Portfolio Analyzed",
      icon: "💼",
      description: "Total portfolio value managed & analyzed",
      color: "from-blue-600 to-blue-400"
    },
    {
      id: "projects",
      target: 100,
      suffix: "+",
      label: "Projects Completed",
      icon: "📊",
      description: "Financial analysis & modeling projects",
      color: "from-green-600 to-green-400"
    },
    {
      id: "experience",
      target: 4,
      suffix: "+",
      label: "Years Experience",
      icon: "⏱️",
      description: "Professional financial analysis experience",
      color: "from-purple-600 to-purple-400"
    },
    {
      id: "accuracy",
      target: 85,
      suffix: "%",
      label: "Forecast Accuracy",
      icon: "🎯",
      description: "Average prediction accuracy rate",
      color: "from-orange-600 to-orange-400"
    },
    {
      id: "tools",
      target: 15,
      suffix: "+",
      label: "Tools Mastered",
      icon: "🛠️",
      description: "Financial & analytical tools expertise",
      color: "from-cyan-600 to-cyan-400"
    },
    {
      id: "gpa",
      target: 4.0,
      suffix: "",
      label: "Perfect GPA",
      icon: "🎓",
      description: "Master's in Business Analytics",
      color: "from-pink-600 to-pink-400"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      metrics.forEach((metric) => {
        let start = 0;
        const end = metric.target;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }
          setCounts(prev => ({
            ...prev,
            [metric.id]: start
          }));
        }, 16);
      });
    }
  }, [isVisible]);

  const formatNumber = (num, suffix) => {
    if (suffix === "" && num) {
      return num.toFixed(1);
    }
    return Math.floor(num);
  };

  return (
    <div className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] py-20" ref={componentRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate__animated animate__fadeIn" : "opacity-0"
          }`}
        >
          <div className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
            💎 MY IMPACT IN NUMBERS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Driving Results Through{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
              Data-Driven Insights
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Proven track record of delivering measurable business impact through financial analysis and strategic insights
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <div
              key={metric.id}
              className={`group relative ${
                isVisible ? "animate-slide-in-left" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card */}
              <div className="relative bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-2 overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {metric.icon}
                </div>

                {/* Number with Counter Effect */}
                <div className="mb-2">
                  <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                    {formatNumber(counts[metric.id] || 0, metric.suffix)}
                    {metric.suffix}
                  </span>
                </div>

                {/* Label */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {metric.label}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm">
                  {metric.description}
                </p>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full transform translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-tr-full transform -translate-x-12 translate-y-12"></div>
              </div>

              {/* Glow Effect on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${metric.color} opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition-opacity duration-300 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Bottom Stats Bar */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${isVisible ? "animate__animated animate__fadeIn" : "opacity-0"}`} style={{ animationDelay: "0.8s" }}>
          <div className="text-center p-4 bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-green-500/30 rounded-xl">
            <p className="text-3xl font-bold text-green-400">$2M+</p>
            <p className="text-gray-400 text-sm mt-1">Cost Savings Identified</p>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-blue-500/30 rounded-xl">
            <p className="text-3xl font-bold text-blue-400">GAAP</p>
            <p className="text-gray-400 text-sm mt-1">Compliant</p>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-purple-500/30 rounded-xl">
            <p className="text-3xl font-bold text-purple-400">SOX</p>
            <p className="text-gray-400 text-sm mt-1">Certified</p>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-orange-500/30 rounded-xl">
            <p className="text-3xl font-bold text-orange-400">Fortune 500</p>
            <p className="text-gray-400 text-sm mt-1">Clients Served</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactMetrics;

