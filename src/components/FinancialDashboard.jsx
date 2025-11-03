import { useState, useEffect, useRef } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const FinancialDashboard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("revenue");
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

  // Sample Financial Data
  const revenueData = [
    { month: "Jan", actual: 4200, forecast: 4000, previousYear: 3800 },
    { month: "Feb", actual: 4500, forecast: 4300, previousYear: 4100 },
    { month: "Mar", actual: 4800, forecast: 4500, previousYear: 4300 },
    { month: "Apr", actual: 5200, forecast: 4800, previousYear: 4600 },
    { month: "May", actual: 5500, forecast: 5200, previousYear: 4900 },
    { month: "Jun", actual: 5800, forecast: 5500, previousYear: 5200 },
    { month: "Jul", actual: 6200, forecast: 5800, previousYear: 5500 },
    { month: "Aug", actual: 6500, forecast: 6200, previousYear: 5800 },
  ];

  const costAnalysis = [
    { category: "Operations", amount: 2400, budget: 2600, variance: -200 },
    { category: "Marketing", amount: 1800, budget: 2000, variance: -200 },
    { category: "Technology", amount: 3200, budget: 3000, variance: 200 },
    { category: "Personnel", amount: 4500, budget: 4800, variance: -300 },
    { category: "Infrastructure", amount: 1900, budget: 2100, variance: -200 },
  ];

  const profitabilityData = [
    { quarter: "Q1", grossMargin: 45, operatingMargin: 28, netMargin: 18 },
    { quarter: "Q2", grossMargin: 47, operatingMargin: 30, netMargin: 20 },
    { quarter: "Q3", grossMargin: 49, operatingMargin: 32, netMargin: 22 },
    { quarter: "Q4", grossMargin: 52, operatingMargin: 35, netMargin: 25 },
  ];

  const portfolioAllocation = [
    { name: "Equity Analysis", value: 35, color: "#06b6d4" },
    { name: "Risk Assessment", value: 25, color: "#3b82f6" },
    { name: "Financial Modeling", value: 20, color: "#8b5cf6" },
    { name: "Forecasting", value: 15, color: "#ec4899" },
    { name: "Reporting", value: 5, color: "#f59e0b" },
  ];

  const kpiMetrics = [
    {
      label: "ROI",
      value: "24.5%",
      change: "+3.2%",
      trend: "up",
      icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    },
    {
      label: "Cost Savings",
      value: "$2.1M",
      change: "+18%",
      trend: "up",
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1",
    },
    {
      label: "Forecast Accuracy",
      value: "94.8%",
      change: "+6.3%",
      trend: "up",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    },
    {
      label: "Process Efficiency",
      value: "87%",
      change: "+12%",
      trend: "up",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
    },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-neutral-800 border border-cyan-500/30 p-4 rounded-lg shadow-lg">
          <p className="text-white font-semibold mb-2">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: ${entry.value?.toLocaleString() || entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div
      id="dashboard"
      className="bg-gradient-to-b from-neutral-900 to-neutral-800 py-20"
      ref={componentRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate__animated animate__fadeIn" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Financial Analytics Dashboard
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Sample dashboard showcasing my financial analysis capabilities - built using React & Recharts to demonstrate the type of interactive dashboards I create with Power BI, Tableau, and Excel in my professional work
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {kpiMetrics.map((kpi, index) => (
            <div
              key={index}
              className={`bg-neutral-900 border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 ${
                isVisible ? "animate-slide-in-left" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <svg
                  className="w-10 h-10 text-cyan-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={kpi.icon}
                  />
                </svg>
                <span className="text-green-400 text-sm font-semibold flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                  {kpi.change}
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-2">{kpi.label}</p>
              <p className="text-3xl font-bold text-white">{kpi.value}</p>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[
            { id: "revenue", label: "Revenue Analysis" },
            { id: "costs", label: "Cost Management" },
            { id: "profitability", label: "Profitability Trends" },
            { id: "allocation", label: "Work Allocation" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/50"
                  : "bg-neutral-900 text-gray-400 border border-cyan-500/30 hover:border-cyan-500 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Charts Container */}
        <div className="bg-neutral-900 border border-cyan-500/30 rounded-2xl p-6 md:p-8">
          {/* Revenue Analysis */}
          {activeTab === "revenue" && (
            <div className={isVisible ? "animate-fade-in" : "opacity-0"}>
              <h3 className="text-2xl font-bold text-white mb-6">
                Revenue Performance Analysis
              </h3>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.1} />
                    </linearGradient>
                    <linearGradient id="colorForecast" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="actual"
                    stroke="#06b6d4"
                    fillOpacity={1}
                    fill="url(#colorActual)"
                    name="Actual Revenue"
                  />
                  <Area
                    type="monotone"
                    dataKey="forecast"
                    stroke="#3b82f6"
                    fillOpacity={1}
                    fill="url(#colorForecast)"
                    name="Forecasted"
                  />
                  <Line
                    type="monotone"
                    dataKey="previousYear"
                    stroke="#8b5cf6"
                    strokeWidth={2}
                    name="Previous Year"
                    dot={{ fill: "#8b5cf6" }}
                  />
                </AreaChart>
              </ResponsiveContainer>
              <p className="text-gray-400 text-sm mt-4 text-center">
                Actual revenue consistently exceeds forecast, showing strong business performance
              </p>
            </div>
          )}

          {/* Cost Analysis */}
          {activeTab === "costs" && (
            <div className={isVisible ? "animate-fade-in" : "opacity-0"}>
              <h3 className="text-2xl font-bold text-white mb-6">
                Cost Management & Budget Variance
              </h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={costAnalysis}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="category" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar dataKey="amount" fill="#06b6d4" name="Actual Spend" />
                  <Bar dataKey="budget" fill="#3b82f6" name="Budget" />
                </BarChart>
              </ResponsiveContainer>
              <p className="text-gray-400 text-sm mt-4 text-center">
                Most categories under budget - achieved $2M+ in cost savings through optimization
              </p>
            </div>
          )}

          {/* Profitability Trends */}
          {activeTab === "profitability" && (
            <div className={isVisible ? "animate-fade-in" : "opacity-0"}>
              <h3 className="text-2xl font-bold text-white mb-6">
                Profitability Margin Trends
              </h3>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={profitabilityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="quarter" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" unit="%" />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="grossMargin"
                    stroke="#06b6d4"
                    strokeWidth={3}
                    name="Gross Margin %"
                    dot={{ fill: "#06b6d4", r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="operatingMargin"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    name="Operating Margin %"
                    dot={{ fill: "#3b82f6", r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="netMargin"
                    stroke="#8b5cf6"
                    strokeWidth={3}
                    name="Net Margin %"
                    dot={{ fill: "#8b5cf6", r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
              <p className="text-gray-400 text-sm mt-4 text-center">
                Consistent margin improvement across all metrics - up 7% YoY in net margin
              </p>
            </div>
          )}

          {/* Work Allocation */}
          {activeTab === "allocation" && (
            <div className={isVisible ? "animate-fade-in" : "opacity-0"}>
              <h3 className="text-2xl font-bold text-white mb-6">
                Financial Analysis Work Distribution
              </h3>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <ResponsiveContainer width="100%" height={400}>
                  <PieChart>
                    <Pie
                      data={portfolioAllocation}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) =>
                        `${name}: ${(percent * 100).toFixed(0)}%`
                      }
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {portfolioAllocation.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
                {portfolioAllocation.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 bg-neutral-800 p-3 rounded-lg"
                  >
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-sm text-gray-300">{item.name}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-sm mt-4 text-center">
                Balanced portfolio of financial analysis activities across key business functions
              </p>
            </div>
          )}
        </div>

        {/* Bottom Notes */}
        <div className="mt-8 space-y-4">
          <div className="bg-neutral-900 border border-cyan-500/30 rounded-lg p-6">
            <div className="flex items-start space-x-3">
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
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h4 className="text-white font-semibold mb-2">About This Dashboard</h4>
                <p className="text-gray-400 text-sm">
                  This is a demonstration dashboard I built to showcase my technical skills in creating interactive financial visualizations. 
                  The charts and metrics represent the <strong className="text-cyan-400">type of analysis I perform professionally</strong> - including 
                  revenue forecasting, cost optimization, profitability tracking, and KPI monitoring. While the specific data shown here is 
                  illustrative, the analysis methods, dashboard design, and metrics align with my actual work at <strong className="text-cyan-400">Citi Group</strong> and 
                  <strong className="text-cyan-400"> Streebo Inc</strong>, where I built similar dashboards using Power BI, Tableau, and Excel that helped 
                  identify $2M+ in cost savings and improve forecast accuracy by 35%.
                </p>
              </div>
            </div>
          </div>
          <p className="text-gray-400 text-sm text-center">
            💡 All charts are interactive - hover over data points for detailed information
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinancialDashboard;

