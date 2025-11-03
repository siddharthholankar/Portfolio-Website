import { useState, useEffect, useRef } from "react";

const TechStack = () => {
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

  const techCategories = [
    {
      category: "Financial Systems & ERP",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      tools: [
        { name: "SAP FICO", level: 85, experience: "3 years", color: "cyan" },
        { name: "Oracle Financials", level: 80, experience: "2 years", color: "cyan" },
        { name: "QuickBooks", level: 85, experience: "3 years", color: "cyan" },
        { name: "NetSuite", level: 75, experience: "2 years", color: "cyan" }
      ]
    },
    {
      category: "Business Intelligence & Visualization",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      tools: [
        { name: "Power BI", level: 95, experience: "4 years", color: "blue" },
        { name: "Tableau", level: 90, experience: "3 years", color: "blue" },
        { name: "Excel (Advanced)", level: 95, experience: "4+ years", color: "blue" },
        { name: "Google Data Studio", level: 80, experience: "2 years", color: "blue" }
      ]
    },
    {
      category: "Programming & Scripting",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      tools: [
        { name: "Python (Pandas, NumPy)", level: 90, experience: "3 years", color: "purple" },
        { name: "SQL (MySQL, PostgreSQL)", level: 95, experience: "4 years", color: "purple" },
        { name: "R Programming", level: 85, experience: "2 years", color: "purple" },
        { name: "VBA & Macros", level: 90, experience: "4 years", color: "purple" }
      ]
    },
    {
      category: "Cloud Platforms & Databases",
      icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
      tools: [
        { name: "AWS (EC2, S3, Redshift)", level: 80, experience: "2 years", color: "green" },
        { name: "Microsoft Azure", level: 75, experience: "2 years", color: "green" },
        { name: "Snowflake", level: 80, experience: "1 year", color: "green" },
        { name: "Google BigQuery", level: 85, experience: "2 years", color: "green" }
      ]
    },
    {
      category: "Finance & Compliance",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      tools: [
        { name: "GAAP Standards", level: 90, experience: "4 years", color: "orange" },
        { name: "IFRS Compliance", level: 85, experience: "3 years", color: "orange" },
        { name: "SOX Compliance", level: 90, experience: "3 years", color: "orange" },
        { name: "Financial Modeling", level: 95, experience: "4+ years", color: "orange" }
      ]
    },
    {
      category: "Collaboration & CRM",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      tools: [
        { name: "Salesforce CRM", level: 85, experience: "3 years", color: "pink" },
        { name: "Microsoft Office Suite", level: 95, experience: "4+ years", color: "pink" },
        { name: "Jira & Confluence", level: 80, experience: "2 years", color: "pink" },
        { name: "Slack & MS Teams", level: 90, experience: "4 years", color: "pink" }
      ]
    }
  ];

  const getColorClass = (color, type = "bg") => {
    const colors = {
      cyan: type === "bg" ? "bg-cyan-500" : "text-cyan-400",
      blue: type === "bg" ? "bg-blue-500" : "text-blue-400",
      purple: type === "bg" ? "bg-purple-500" : "text-purple-400",
      green: type === "bg" ? "bg-green-500" : "text-green-400",
      orange: type === "bg" ? "bg-orange-500" : "text-orange-400",
      pink: type === "bg" ? "bg-pink-500" : "text-pink-400"
    };
    return colors[color] || colors.cyan;
  };

  return (
    <div className="bg-gradient-to-b from-neutral-800 to-neutral-900 py-20" ref={componentRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate__animated animate__fadeIn" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tools & Technologies
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive financial tech stack with expertise across systems, analytics, and compliance
          </p>
        </div>

        {/* Tech Categories */}
        <div className="space-y-12">
          {techCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className={`${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
              style={{ animationDelay: `${catIndex * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-neutral-900 border border-cyan-500/30 p-3 rounded-lg">
                  <svg
                    className="w-6 h-6 text-cyan-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={category.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">{category.category}</h3>
              </div>

              {/* Tools Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {category.tools.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="bg-neutral-900 border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1">{tool.name}</h4>
                        <span className={`text-sm ${getColorClass(tool.color, "text")}`}>
                          {tool.experience}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className={`text-2xl font-bold ${getColorClass(tool.color, "text")}`}>
                          {tool.level}%
                        </span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative w-full h-3 bg-neutral-800 rounded-full overflow-hidden">
                      <div
                        className={`absolute top-0 left-0 h-full ${getColorClass(tool.color, "bg")} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: isVisible ? `${tool.level}%` : "0%",
                          transitionDelay: `${(catIndex * 0.1 + toolIndex * 0.05)}s`
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-neutral-900 border border-cyan-500/30 rounded-xl p-6 text-center hover:border-cyan-500 transition-all duration-300">
            <p className="text-3xl font-bold text-cyan-400 mb-2">20+</p>
            <p className="text-gray-400 text-sm">Tools Mastered</p>
          </div>
          <div className="bg-neutral-900 border border-cyan-500/30 rounded-xl p-6 text-center hover:border-cyan-500 transition-all duration-300">
            <p className="text-3xl font-bold text-blue-400 mb-2">6</p>
            <p className="text-gray-400 text-sm">Technology Categories</p>
          </div>
          <div className="bg-neutral-900 border border-cyan-500/30 rounded-xl p-6 text-center hover:border-cyan-500 transition-all duration-300">
            <p className="text-3xl font-bold text-purple-400 mb-2">4+</p>
            <p className="text-gray-400 text-sm">Years Experience</p>
          </div>
          <div className="bg-neutral-900 border border-cyan-500/30 rounded-xl p-6 text-center hover:border-cyan-500 transition-all duration-300">
            <p className="text-3xl font-bold text-green-400 mb-2">90%+</p>
            <p className="text-gray-400 text-sm">Avg Proficiency</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;

