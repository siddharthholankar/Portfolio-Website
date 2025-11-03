import { useState, useEffect, useRef } from "react";

const CaseStudy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
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

  const steps = [
    {
      title: "The Challenge",
      icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
      content: [
        "Streebo Inc faced rising operational costs across digital banking deployments",
        "Cloud infrastructure (AWS) costs increasing by 25% annually",
        "Manual reporting processes causing delays and errors",
        "Limited visibility into cost drivers and ROI by product",
        "Need to optimize spending without impacting service delivery"
      ],
      metrics: [
        { label: "Annual Cost Growth", value: "25%" },
        { label: "Manual Processes", value: "60%" },
        { label: "Reporting Time", value: "40hrs/week" }
      ]
    },
    {
      title: "My Approach",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
      content: [
        "Conducted comprehensive cost analysis using Excel, SQL, and Power BI",
        "Built financial models to analyze revenue vs. cost across all digital banking products",
        "Performed variance analysis comparing budgets vs. actual spend",
        "Collaborated with DevOps team to identify AWS optimization opportunities",
        "Developed automated reporting workflows using Excel VBA and Python"
      ],
      metrics: [
        { label: "Data Points Analyzed", value: "50K+" },
        { label: "Cost Categories", value: "15" },
        { label: "Stakeholders Engaged", value: "12" }
      ]
    },
    {
      title: "The Solution",
      icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
      content: [
        "Created interactive Power BI dashboards for real-time cost monitoring",
        "Identified unused AWS resources and right-sized EC2 instances",
        "Consolidated redundant software licenses and subscriptions",
        "Streamlined operational workflows eliminating manual processes",
        "Implemented automated alerting for budget threshold breaches"
      ],
      metrics: [
        { label: "Dashboards Built", value: "8" },
        { label: "Processes Automated", value: "12" },
        { label: "Tools Used", value: "6+" }
      ]
    },
    {
      title: "The Results",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      content: [
        "Identified $2.1M+ in annual cost savings opportunities",
        "Reduced AWS infrastructure costs by 35% through optimization",
        "Improved gross margins by 15% across digital banking products",
        "Decreased manual reporting time by 70% via automation",
        "Enhanced forecast accuracy from 82% to 94.8%"
      ],
      metrics: [
        { label: "Cost Savings", value: "$2.1M+" },
        { label: "Margin Improvement", value: "+15%" },
        { label: "Time Saved", value: "70%" }
      ]
    }
  ];

  const tools = [
    { name: "Excel & VBA", icon: "📊" },
    { name: "SQL", icon: "🗄️" },
    { name: "Power BI", icon: "📈" },
    { name: "Python", icon: "🐍" },
    { name: "AWS", icon: "☁️" },
    { name: "Salesforce", icon: "⚡" }
  ];

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
            Featured Case Study
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How I Identified $2M+ in Cost Savings
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive financial analysis and optimization project at Streebo Inc
          </p>
        </div>

        {/* Step Navigation */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-4">
          <div className="flex space-x-4">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`flex flex-col items-center min-w-[120px] px-4 py-3 rounded-lg transition-all duration-300 ${
                  activeStep === index
                    ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/50"
                    : "bg-neutral-800 text-gray-400 hover:bg-neutral-700"
                }`}
              >
                <span className="text-2xl mb-2">{index + 1}</span>
                <span className="text-xs font-medium text-center">{step.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <div className="md:col-span-2">
            <div
              className={`bg-gradient-to-br from-neutral-800 to-neutral-900 border border-cyan-500/30 rounded-2xl p-8 ${
                isVisible ? "animate-slide-in-left" : "opacity-0"
              }`}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-cyan-500/20 p-4 rounded-lg">
                  <svg
                    className="w-8 h-8 text-cyan-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={steps[activeStep].icon}
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {steps[activeStep].title}
                </h3>
              </div>

              <ul className="space-y-4">
                {steps[activeStep].content.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <svg
                      className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-300 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Metrics Sidebar */}
          <div className="space-y-4">
            {steps[activeStep].metrics.map((metric, index) => (
              <div
                key={index}
                className={`bg-neutral-800 border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300 ${
                  isVisible ? "animate-slide-in-right" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-gray-400 text-sm mb-2">{metric.label}</p>
                <p className="text-3xl font-bold text-cyan-400">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Used */}
        <div
          className={`bg-neutral-800 border border-cyan-500/30 rounded-2xl p-8 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <h4 className="text-xl font-bold text-white mb-6 text-center">
            Tools & Technologies Used
          </h4>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-neutral-900 border border-cyan-500/30 rounded-lg px-6 py-4 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 flex items-center space-x-3"
              >
                <span className="text-3xl">{tool.icon}</span>
                <span className="text-white font-medium">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Summary */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl px-8 py-6">
            <p className="text-gray-300 text-lg mb-2">
              <span className="text-cyan-400 font-bold">Key Takeaway:</span> Through systematic 
              financial analysis and cross-functional collaboration, I delivered measurable business 
              impact while improving operational efficiency and forecast accuracy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;

