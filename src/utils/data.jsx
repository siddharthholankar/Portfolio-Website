const skills = [
  { name: "Python", icon: "/images/python-logo-generic.svg" },
  { name: "AWS", icon: "/images/aws-2.svg" },
  { name: "Azure", icon: "/images/Microsoft_Azure_Logo.svg" },
  { name: "Apache Spark", icon: "/images/Apache_Spark_logo.svg" },
  { name: "Excel", icon: "/images/Microsoft_Office_Excel_(2019–present).svg" },
  { name: "Minitab", icon: "/images/minitab-corp-logo.svg" },
  { name: "SQL", icon: "/images/MySQL_textlogo.svg" },
  { name: "PowerBI", icon: "/images/New_Power_BI_Logo.svg" },
  { name: "R", icon: "/images/R_logo.svg" },
  { name: "Scikit Learn", icon: "/images/Scikit_learn_logo_small.svg" },
  { name: "Tableau", icon: "/images/Tableau.svg" },
  { name: "NumPy", icon: "/images/numpy.png" },
];
const projects = [
  {
    id: 1,
    title: "Financial Risk Profiling & Credit Analysis Dashboard",
    description:
      "Built an interactive Power BI dashboard analyzing lending trends and borrower risk behavior across 50,000+ customer segments, identifying default patterns and optimizing credit scoring models.",
    techStack: "Power BI, SQL, Python, Excel, Risk Analytics",
    thumbnail: "/images/project11.png",
    liveLink: "",
    githubLink: "",
    impact: "Reduced risk assessment time by 40%",
    category: "Dashboard"
  },
  {
    id: 2,
    title: "Revenue & Cost Optimization Model",
    description:
      "Developed comprehensive financial models analyzing revenue streams and cost structures for digital banking products, identifying $2M+ in cost-saving opportunities through variance analysis.",
    techStack: "Excel VBA, Python, SQL, Financial Modeling",
    thumbnail: "images/project2.webp",
    liveLink: "",
    githubLink: "",
    impact: "Improved gross margins by 15%",
    category: "Finance"
  },
  {
    id: 3,
    title: "Sales Pipeline Forecasting System",
    description:
      "Created ML-based scoring models to predict deal closures and optimize regional sales strategies, improving forecast accuracy by 35% using Salesforce data and Python analytics.",
    techStack: "Python, Salesforce, Tableau, Machine Learning, SQL",
    thumbnail: "images/project3.jpg",
    liveLink: "",
    githubLink: "",
    impact: "Increased forecast accuracy by 35%",
    category: "ML"
  },
  {
    id: 4,
    title: "Automated Financial Reporting System",
    description: "Engineered automated reporting workflows integrating SAP FICO and Power BI, reducing manual errors by 60% and enabling real-time MIS tracking for executive decision-making.",
    techStack: "Power BI, SAP FICO, Excel VBA, Python, SQL",
    thumbnail: "images/Project4.webp",
    liveLink: "https://colab.research.google.com/drive/1GsTKjBwPdbmzRGQMU8diSBTkXX3vE8jI?usp=sharing",
    githubLink: "",
    impact: "Reduced reporting time by 70%",
    category: "Dashboard"
  }
];
const visibleSkills = [
  {
    category: "Financial Analysis & Modeling",
    icon: "M4 6h16M4 12h16m-7 6h7",
    skills: [
      { name: "Financial Modeling (DCF, CCA)", level: 95 },
      { name: "Budgeting & Forecasting", level: 90 },
      { name: "Variance Analysis", level: 90 },
    ],
  },
  {
    category: "Business Intelligence & Dashboards",
    icon: "M3 18h18M9 21h6M4 15h16M12 3v12m-6 3a6 6 0 0112 0",
    skills: [
      { name: "Power BI", level: 95 },
      { name: "Tableau", level: 90 },
      { name: "Excel (VBA, Macros)", level: 95 },
    ],
  },
  {
    category: "Data Analytics & Programming",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    skills: [
      { name: "Python (Pandas, NumPy)", level: 90 },
      { name: "SQL", level: 95 },
      { name: "R", level: 85 }
    ],
  },
];

const hiddenSkills = [
  {
    category: "Accounting & ERP Systems",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
    skills: [
      { name: "SAP FICO", level: 85 },
      { name: "Oracle Financials", level: 80 },
      { name: "QuickBooks & NetSuite", level: 85 },
      { name: "GAAP & IFRS Standards", level: 90 },
    ],
  },
  {
    category: "Database & Cloud Platforms",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    skills: [
      { name: "Snowflake & BigQuery", level: 85 },
      { name: "AWS", level: 80 },
      { name: "Azure", level: 75 },
      { name: "Salesforce CRM", level: 85 },
    ],
  },
];

const experiences = [
  {
    title: "Financial Analyst",
    company: "Citi Group",
    date: "Feb 2025 – Present",
    duration: "Present",
    location: "USA",
    logo: "🏦", // Can be replaced with actual logo URL
    type: "Full-time",
    techStack: ["Excel", "SQL", "Python", "Power BI", "Tableau", "SAP FICO"],
    keyMetrics: [
      { label: "Risk Models", value: "50K+ segments" },
      { label: "Dashboards", value: "10+ built" },
      { label: "Reports", value: "Bi-weekly + Quarterly" }
    ],
    points: [
      "Analyzed key lending trends, borrower risk behavior, and capital market impacts on interest rate spreads using Excel, SQL, and Python to identify repayment delay patterns and default risks across customer segments.",
      "Built Power BI and Tableau dashboards to highlight regional credit performance, market yield curve movements, and loan-to-value shifts, supporting strategic updates to risk scoring and profitability models.",
      "Collaborated with product, risk, and capital markets teams to perform financial modeling, forecasting disbursement volume, NIM, delinquency metrics, and interest rate exposure while applying budgeting and scenario analysis principles.",
      "Delivered bi-weekly performance insights and quarterly executive summaries, aligning results with GAAP standards and SOX compliance frameworks using tools like SAP FICO and Oracle Financials.",
      "Supported regression-based risk profiling by automating data pipelines and dashboards, enabling faster lending decisions and optimizing credit policies in real time using Python and advanced Excel."
    ],
  },
  {
    title: "Financial Analyst",
    company: "Streebo Inc",
    date: "Dec 2020 – July 2024",
    duration: "3.5 years",
    location: "India",
    logo: "💼", // Can be replaced with actual logo URL
    type: "Full-time",
    techStack: ["Excel", "SQL", "Power BI", "Python", "Tableau", "Salesforce"],
    keyMetrics: [
      { label: "Cost Savings", value: "$2M+" },
      { label: "Forecast Accuracy", value: "+35%" },
      { label: "Reporting Time", value: "-70%" }
    ],
    points: [
      "Evaluated revenue and cost structures across digital banking deployments using advanced Excel, SQL, and Power BI to identify cost-saving opportunities and maximize gross margins.",
      "Built financial models and ROI reports that supported pricing decisions for chatbot and mobile app features, integrating forecasting tools with Google Sheets for collaborative planning.",
      "Analyzed project budgets versus actual spend using variance analysis and advised DevOps on AWS cost control strategies to streamline cloud usage without disrupting service delivery.",
      "Designed interactive dashboards in Power BI to monitor module-level profitability and licensing performance across client segments, enabling better KPI-based leadership decisions.",
      "Pulled sales pipeline data from Salesforce using SQL and created scoring models to predict deal closures, improving forecast accuracy and helping marketing teams prioritize regions.",
      "Conducted sensitivity analysis and identified pricing gaps across regions using Tableau and Python, offering actionable insights to reshape product strategy for retail and mid-size clients.",
      "Collaborated with finance and product teams to automate reporting workflows, enabling real-time MIS tracking and reducing manual data errors with integrated Excel VBA macros."
    ],
  }
];

const education = [
  {
    degree: "Master's in Business Analytics",
    institution: "Arizona State University",
    date: "Aug 2024 — May 2025",
    location: "Arizona, USA",
    gpa: "4.0/4.0",
  },
  {
    degree: "Bachelor's in International Business",
    institution: "MIT World Peace University",
    date: "Jun 2019 — Apr 2022",
    location: "Pune, India",
    gpa: "9.1/10",
  }
];

const certifications = [
  {
    name: "Lean Six Sigma Green Belt",
    issuer: "Arizona State University",
    date: "2024",
  }
];

const achievements = [
  {
    number: "4+",
    label: "Years Experience",
    description: "Driving financial strategies across banking, fintech, and consulting sectors with expertise in risk analysis, forecasting, and P&L optimization",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
  },
  {
    number: "$2M+",
    label: "Cost Savings Identified",
    description: "Analyzed digital banking deployments using advanced Excel, SQL, and Power BI to identify cost-saving opportunities by optimizing cloud infrastructure (AWS), streamlining operational workflows, and eliminating redundant processes through variance analysis",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
  },
  {
    number: "50+",
    label: "Financial Reports",
    description: "Created analytical reports for JP Morgan, BlackRock, Goldman Sachs, and Barclays providing investment insights, financial projections, and strategic recommendations for venture-backed companies",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  },
  {
    number: "70%",
    label: "Time Reduction",
    description: "Automated financial reporting workflows using Excel VBA macros, Python scripts, and Power BI integrations, reducing manual data entry errors and enabling real-time MIS tracking for faster executive decisions",
    icon: "M13 10V3L4 14h7v7l9-11h-7z"
  },
  {
    number: "100%",
    label: "Compliance Record",
    description: "Maintained full compliance with GAAP accounting standards and SOX regulatory frameworks while delivering bi-weekly performance insights and quarterly executive summaries using SAP FICO and Oracle Financials",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  },
  {
    number: "4.0",
    label: "Perfect GPA",
    description: "Master's in Business Analytics from Arizona State University (Aug 2024 - May 2025), specializing in financial modeling, predictive analytics, and data-driven decision making",
    icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
  }
];

const testimonials = [
  {
    name: "Senior Manager, Citi Group",
    role: "Direct Supervisor",
    text: "Siddharth's financial modeling and analytical skills are exceptional. His ability to translate complex data into actionable insights has been invaluable to our risk assessment strategies.",
    image: ""
  },
  {
    name: "Finance Director, Streebo Inc",
    role: "Former Manager",
    text: "One of the most detail-oriented analysts I've worked with. His automated reporting systems saved countless hours and improved our decision-making process significantly.",
    image: ""
  },
  {
    name: "Project Lead, DHL",
    role: "Consulting Client",
    text: "Siddharth delivered outstanding work on our logistics optimization project. His dashboards and predictive models exceeded our expectations and continue to drive value.",
    image: ""
  }
];

export { skills, projects, visibleSkills, hiddenSkills, experiences, education, certifications, achievements, testimonials };
