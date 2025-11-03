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
    title: "Optimizing Employee Scheduling",
    description:
      "Developed a dynamic employee scheduling model for a fast-casual restaurant using Python and Excel Solver to optimize shift allocation and reduce labor costs.",
    techStack: "Python, Excel Solver, Linear Programming, Data Analysis",
    thumbnail: "/images/project11.png",
    liveLink: "",
    githubLink: "",
  },
  {
    id: 2,
    title: "Analyzing Unstructured Data",
    description:
      "Extracted and processed unstructured data on the highest-grossing movies in France, identifying revenue trends and key market insights.",
    techStack: "Python, Pandas, Data Cleaning, Data Visualization",
    thumbnail: "images/project2.webp",
    liveLink: "",
    githubLink: "",
  },
  {
    id: 3,
    title: "DHL Logistics Optimization",
    description:
      "Optimized logistics networks for DHL’s Global Service Logistics division, improving delivery efficiency and predictive modeling for courier allocation.",
    techStack: "Power BI, Tableau, SQL, Machine Learning",
    thumbnail: "images/project3.jpg",
    liveLink: "",
    githubLink: "",
  },
  {
    "id": 4,
    "title": "Sentiment Analysis of Restaurant Reviews",
    "description": "Analyzed 10,000 restaurant reviews using NLP and machine learning to classify customer sentiment and identify key factors influencing satisfaction.",
    "techStack": "Python, Scikit-learn, NLP, Data Visualization",
    "thumbnail": "images/Project4.webp",
    "liveLink": "https://colab.research.google.com/drive/1GsTKjBwPdbmzRGQMU8diSBTkXX3vE8jI?usp=sharing",
    "githubLink": ""
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
    location: "USA",
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
    location: "India",
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

export { skills, projects, visibleSkills, hiddenSkills, experiences, education, certifications };
