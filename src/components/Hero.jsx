
import { useEffect, useState } from "react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [particleKey, setParticleKey] = useState(0);
  const fullText = "Data-Driven Decision Maker";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    // Refresh particles periodically
    const particleTimer = setInterval(() => {
      setParticleKey(prev => prev + 1);
    }, 10000);
    return () => clearInterval(particleTimer);
  }, []);

  const handleScroll = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Financial symbols for particle effect
  const financialSymbols = ['$', '€', '¥', '£', '%', '↑', '↓', '₿', '📈', '📊', '💼', '💰'];

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Financial Chart Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,300 L100,280 L200,220 L300,240 L400,180 L500,150 L600,170 L700,120 L800,140 L900,100 L1000,80 L1000,400 L0,400 Z"
            fill="url(#chartGradient)"
            className="animate-pulse"
          />
          <path
            d="M0,300 L100,280 L200,220 L300,240 L400,180 L500,150 L600,170 L700,120 L800,140 L900,100 L1000,80"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Floating Financial Particles */}
      <div key={particleKey} className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            {financialSymbols[Math.floor(Math.random() * financialSymbols.length)]}
          </div>
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 -right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 -left-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left space-y-6">
            {/* Badge */}
            <div className="inline-block animate-fade-in">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                💼 Financial Analyst | 4+ Years Experience
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2 animate-slide-in-left">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent bg-clip-text animate-gradient">
                  Siddharth<br/>Holankar
                </span>
              </h1>
            </div>

            {/* Typing Effect Subtitle */}
            <div className="text-2xl md:text-3xl font-semibold text-gray-300 h-10">
              <span className="text-cyan-400">|</span> {typedText}
              <span className="animate-pulse text-cyan-400">|</span>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-lg max-w-xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Transforming complex financial data into actionable insights. 
              Specialized in <span className="text-cyan-400 font-semibold">credit risk analysis</span>, 
              <span className="text-cyan-400 font-semibold"> forecasting</span>, and 
              <span className="text-cyan-400 font-semibold"> portfolio optimization</span>.
            </p>

            {/* Key Stats Badges */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="bg-gradient-to-r from-green-600/20 to-green-600/10 border border-green-500/30 text-green-400 px-4 py-2 rounded-lg text-sm font-semibold backdrop-blur-sm">
                📈 $50M+ Portfolio
              </div>
              <div className="bg-gradient-to-r from-blue-600/20 to-blue-600/10 border border-blue-500/30 text-blue-400 px-4 py-2 rounded-lg text-sm font-semibold backdrop-blur-sm">
                🎯 85% Accuracy
              </div>
              <div className="bg-gradient-to-r from-purple-600/20 to-purple-600/10 border border-purple-500/30 text-purple-400 px-4 py-2 rounded-lg text-sm font-semibold backdrop-blur-sm">
                🏆 4.0 GPA
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4 animate-scale-in" style={{ animationDelay: '0.7s' }}>
              <button
                onClick={() => handleScroll("contact")}
                className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Let's Connect
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              
              <a
                href="https://drive.google.com/file/d/1hRssQrhvvfjdmq6efz7YwgYIxj-qPmcH/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Resume
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6 justify-center md:justify-start text-sm text-gray-500 pt-4 animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 border-2 border-[#0f172a]"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 border-2 border-[#0f172a]"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-600 to-blue-600 border-2 border-[#0f172a]"></div>
                </div>
                <span className="text-gray-400">Trusted by Fortune 500 companies</span>
              </div>
            </div>
          </div>

          {/* Right Side - Professional Image with Premium Frame */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 rounded-full blur-2xl opacity-50 group-hover:opacity-75 animate-pulse"></div>
              
              {/* Image Container */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 rounded-full animate-gradient"></div>
                <div className="relative m-1 rounded-full overflow-hidden border-4 border-[#0f172a]">
                  <img
                    src="/images/profile.jpeg"
                    alt="Siddharth Holankar - Financial Analyst"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -right-4 top-1/4 bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-green-500/30 rounded-xl p-4 shadow-2xl backdrop-blur-sm animate-float">
                <div className="text-2xl font-bold text-green-400">+31.2%</div>
                <div className="text-xs text-gray-400">Portfolio Returns</div>
              </div>

              <div className="absolute -left-4 bottom-1/4 bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-blue-500/30 rounded-xl p-4 shadow-2xl backdrop-blur-sm animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-2xl font-bold text-blue-400">94.8%</div>
                <div className="text-xs text-gray-400">Forecast Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-cyan-400 transition-colors">
          <span className="text-xs mb-2">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
