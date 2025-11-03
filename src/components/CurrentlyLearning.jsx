import { useState, useEffect, useRef } from "react";

const CurrentlyLearning = () => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const currentlyWorking = [
    {
      title: "CFA Level 1 Preparation",
      category: "Certification",
      description: "Studying for Chartered Financial Analyst Level 1 exam focusing on ethics, quantitative methods, and financial reporting",
      progress: 45,
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
      status: "In Progress",
      color: "cyan"
    },
    {
      title: "Machine Learning for Finance",
      category: "Technical Skill",
      description: "Learning advanced ML techniques for financial forecasting, risk modeling, and algorithmic trading using Python and TensorFlow",
      progress: 60,
      icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
      status: "Active",
      color: "blue"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      category: "Cloud Certification",
      description: "Pursuing AWS certification to deepen cloud infrastructure and cost optimization expertise",
      progress: 30,
      icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
      status: "Starting",
      color: "green"
    },
    {
      title: "Personal Finance Dashboard",
      category: "Side Project",
      description: "Building a full-stack financial dashboard with React, Node.js, and PostgreSQL for personal portfolio tracking and expense analytics",
      progress: 70,
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      status: "Near Completion",
      color: "purple"
    }
  ];

  const interests = [
    {
      title: "Quantitative Finance",
      icon: "📊",
      description: "Algorithmic trading and financial modeling"
    },
    {
      title: "FinTech Innovation",
      icon: "💳",
      description: "Digital banking and payment systems"
    },
    {
      title: "ESG Analytics",
      icon: "🌱",
      description: "Environmental, Social, Governance metrics"
    },
    {
      title: "Risk Management",
      icon: "🛡️",
      description: "Credit risk and market risk analysis"
    }
  ];

  const getColorClass = (color) => {
    const colors = {
      cyan: { bg: "bg-cyan-500", text: "text-cyan-400", border: "border-cyan-500" },
      blue: { bg: "bg-blue-500", text: "text-blue-400", border: "border-blue-500" },
      purple: { bg: "bg-purple-500", text: "text-purple-400", border: "border-purple-500" },
      green: { bg: "bg-green-500", text: "text-green-400", border: "border-green-500" }
    };
    return colors[color] || colors.cyan;
  };

  return (
    <div className="bg-neutral-900 py-20" ref={componentRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate__animated animate__fadeIn" : "opacity-0"
          }`}
        >
          <div className="inline-block bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Growth & Development
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Currently Learning & Building
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Continuously expanding my skillset and working on exciting projects
          </p>
        </div>

        {/* Current Projects/Learning */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {currentlyWorking.map((item, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-neutral-800 to-neutral-900 border border-cyan-500/30 rounded-2xl p-6 hover:border-${item.color}-500 hover:shadow-lg hover:shadow-${item.color}-500/20 transition-all duration-300 ${
                isVisible ? "animate-slide-in-left" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`${getColorClass(item.color).bg} bg-opacity-20 p-3 rounded-lg`}>
                    <svg
                      className={`w-6 h-6 ${getColorClass(item.color).text}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={item.icon}
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <span className="text-sm text-gray-400">{item.category}</span>
                  </div>
                </div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getColorClass(item.color).bg} bg-opacity-20 ${getColorClass(item.color).text}`}>
                  {item.status}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-4 leading-relaxed">{item.description}</p>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Progress</span>
                  <span className={`text-sm font-bold ${getColorClass(item.color).text}`}>
                    {item.progress}%
                  </span>
                </div>
                <div className="relative w-full h-2 bg-neutral-700 rounded-full overflow-hidden">
                  <div
                    className={`absolute top-0 left-0 h-full ${getColorClass(item.color).bg} rounded-full transition-all duration-1000 ease-out`}
                    style={{
                      width: isVisible ? `${item.progress}%` : "0%",
                      transitionDelay: `${index * 0.2}s`
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/30"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Areas of Interest */}
        <div
          className={`${isVisible ? "animate-fade-in" : "opacity-0"}`}
          style={{ animationDelay: "0.6s" }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Areas of Interest & Continuous Learning
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="bg-neutral-800 border border-cyan-500/30 rounded-xl p-6 text-center hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-4xl mb-3">{interest.icon}</div>
                <h4 className="text-lg font-bold text-white mb-2">{interest.title}</h4>
                <p className="text-sm text-gray-400">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl px-8 py-6">
            <p className="text-gray-300 text-lg mb-4">
              <span className="text-cyan-400 font-bold">Always Growing:</span> I believe in continuous 
              learning and staying ahead of industry trends in financial analysis and technology.
            </p>
            <p className="text-gray-400 text-sm">
              💡 Open to discussing new technologies, methodologies, and opportunities in finance and analytics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentlyLearning;

