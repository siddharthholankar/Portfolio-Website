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
    category: "Dashboard",
    profiles: ["financial-analyst", "business-analyst"]
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
    category: "Finance",
    profiles: ["financial-analyst", "business-analyst"]
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
    category: "ML",
    profiles: ["business-analyst", "product-manager"]
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
    category: "Dashboard",
    profiles: ["financial-analyst", "business-analyst"]
  },
  {
    id: 5,
    title: "AI-Powered Personalized Cold Email Automation",
    description: "Built an intelligent n8n workflow that automates personalized cold email outreach for job applications. The system uses AI (Google Gemini) to analyze job postings, score relevance against resume, generate personalized cover letters, extract company domains, find email addresses via Hunter.io, and send targeted outreach emails.",
    techStack: "n8n, Google Gemini AI, Hunter.io API, PDF Processing, Email Automation",
    thumbnail: "images/n8n-cold-email-workflow.png",
    liveLink: "",
    githubLink: "",
    impact: "Automated personalized outreach with 90%+ relevance scoring",
    category: "Automation",
    profiles: ["business-analyst", "product-manager"]
  },
  {
    id: 6,
    title: "Automated ATS Job Finder & Reporting System",
    description: "Developed an automated n8n workflow that searches for job postings daily using Google Custom Search Engine API, processes and filters results based on ATS (Applicant Tracking System) criteria, saves findings to Google Sheets with metadata (date, title, company, link, snippet, search type, score), and sends formatted email reports. Includes optional Slack notifications for real-time updates.",
    techStack: "n8n, Google Custom Search Engine API, Google Sheets API, Email Automation, Slack API",
    thumbnail: "images/n8n-ats-job-finder-workflow.png",
    liveLink: "",
    githubLink: "",
    impact: "Automated daily job discovery with structured reporting",
    category: "Automation",
    profiles: ["business-analyst", "product-manager"]
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

// Blog Posts / Financial Analysis
const blogPosts = [
  {
    title: "Building Predictive Credit Risk Models: A Python & SQL Approach for Modern Financial Analysts",
    slug: "predictive-credit-risk-models-python-sql",
    excerpt: "Learn how to build production-ready credit risk models using Python, SQL, and machine learning. A step-by-step guide from data extraction to business insights with real-world examples from Citi Group analysis.",
    content: `
      <h2>Introduction</h2>
      <p>For years, credit risk assessment relied on manual spreadsheets, gut instinct, and historical trends. Today's financial institutions can't afford that luxury.</p>
      <p>At Citi Group, I recently analyzed lending trends across thousands of borrowers to identify repayment delay patterns and default risks. What struck me wasn't just the volume of data—it was how quickly insights could surface when you combine Python, SQL, and strategic thinking.</p>
      <p>If you're a financial analyst still working primarily in Excel, this post is for you. I'm walking you through exactly how to build a predictive credit risk model that transforms raw transaction data into actionable lending decisions.</p>

      <h2>Why Python for Credit Risk?</h2>
      <p>Let's be honest: Excel is great. But when you're analyzing millions of loan records, tracking behavioral patterns, and running scenario analysis, Excel becomes a bottleneck.</p>
      <p>Here's what Python brought to my Citi analysis:</p>
      <ul>
        <li><strong>Speed</strong>: Processing 50,000+ borrower records in seconds instead of minutes</li>
        <li><strong>Scalability</strong>: Automating data pipelines that would require hours of manual work</li>
        <li><strong>Accuracy</strong>: Eliminating formula errors through reproducible code</li>
        <li><strong>Storytelling</strong>: Creating visualizations that executives actually understand</li>
      </ul>
      <p>Python isn't replacing your financial skills—it's amplifying them.</p>

      <h2>The Architecture: Data to Decision</h2>
      <p>Here's the workflow I use:</p>
      <ol>
        <li><strong>Extract data from SQL</strong> (borrower financials, payment history)</li>
        <li><strong>Transform with Python</strong> (Pandas for data cleaning, feature engineering)</li>
        <li><strong>Model with Python</strong> (scikit-learn for predictive models)</li>
        <li><strong>Visualize with Power BI</strong> (dashboards for stakeholders)</li>
        <li><strong>Action</strong> (updated risk scoring, policy adjustments)</li>
      </ol>

      <h2>Step 1: Pulling Data from SQL</h2>
      <p>You need clean, complete data. Here's how I structure the SQL query:</p>
      <pre><code>SELECT
    borrower_id,
    loan_amount,
    interest_rate,
    loan_term_months,
    monthly_payment,
    total_payments_made,
    days_past_due,
    employment_tenure_years,
    annual_income,
    credit_score,
    number_of_active_loans,
    payment_history_30_days,
    payment_history_60_days,
    payment_history_90_days,
    default_flag,
    created_date
FROM loans
WHERE created_date >= DATE_SUB(CURDATE(), INTERVAL 24 MONTH)
    AND loan_status IN ('ACTIVE', 'CLOSED', 'DEFAULT')
ORDER BY borrower_id;</code></pre>
      <p><strong>Why this matters</strong>: The features you select determine model accuracy. I included employment tenure and payment history because they're strong predictors of default risk—not just because they're available.</p>

      <h2>Step 2: Data Transformation with Pandas</h2>
      <p>Once you have the data, Python cleans it:</p>
      <pre><code>import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler

# Load data
df = pd.read_csv('loan_data.csv')

# Handle missing values
df['employment_tenure_years'].fillna(df['employment_tenure_years'].median(), inplace=True)
df['credit_score'].fillna(df['credit_score'].mean(), inplace=True)

# Create new features
df['payment_ratio'] = df['total_payments_made'] / df['loan_amount']
df['delinquency_rate'] = (df['payment_history_30_days'] +
                          df['payment_history_60_days'] +
                          df['payment_history_90_days']) / df['loan_term_months']
df['loan_to_income'] = df['loan_amount'] / df['annual_income']
df['debt_service_ratio'] = (df['monthly_payment'] * 12) / df['annual_income']</code></pre>
      <p><strong>Feature engineering</strong> is where financial expertise meets data science. That <code>debt_service_ratio</code>? That's real finance. It tells you how much of a borrower's annual income goes to debt payments—a critical default predictor.</p>

      <h2>Step 3: Building the Predictive Model</h2>
      <p>Now for the modeling. I use logistic regression for interpretability and random forests for accuracy:</p>
      <pre><code>from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import roc_auc_score, classification_report

# Prepare features
features = ['loan_amount', 'interest_rate', 'employment_tenure_years',
            'annual_income', 'credit_score', 'payment_ratio',
            'delinquency_rate', 'loan_to_income', 'debt_service_ratio']

X = df[features]
y = df['default_flag']

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3)

# Train models
log_model = LogisticRegression(max_iter=1000)
log_model.fit(X_train, y_train)

rf_model = RandomForestClassifier(n_estimators=100)
rf_model.fit(X_train, y_train)

# Evaluate
print(f"ROC-AUC Score: {roc_auc_score(y_test, rf_model.predict_proba(X_test)[:, 1]):.4f}")</code></pre>

      <h2>Step 4: Applying Insights to Business</h2>
      <p>Here's the bridge between data science and finance:</p>
      <h3>Risk Segmentation</h3>
      <pre><code>df['risk_tier'] = pd.cut(y_pred_proba,
                          bins=[0, 0.2, 0.5, 0.8, 1.0],
                          labels=['Low', 'Medium', 'High', 'Critical'])</code></pre>

      <h3>Dynamic Pricing</h3>
      <pre><code># Higher risk = higher interest rate
df['recommended_rate'] = 0.05 + (y_pred_proba * 0.10)  # 5% to 15% range</code></pre>

      <h2>Real-World Impact</h2>
      <p>When I implemented this at Citi, here's what happened:</p>
      <ul>
        <li><strong>Improved accuracy</strong>: Reduced false negatives (rejecting good borrowers) by 15%</li>
        <li><strong>Faster decisions</strong>: Automated pre-screening cut manual review time by 60%</li>
        <li><strong>Better profitability</strong>: Risk-adjusted pricing optimized NIM (net interest margin) by 2.3%</li>
        <li><strong>Compliance</strong>: Every decision was now auditable and explainable to regulators</li>
      </ul>

      <h2>Common Pitfalls to Avoid</h2>
      <ol>
        <li><strong>Overfitting</strong>: Your model performs great on training data but fails on new borrowers. Use cross-validation.</li>
        <li><strong>Ignoring class imbalance</strong>: If only 5% of borrowers default, your model might predict "no default" for everything. Use SMOTE or adjust class weights.</li>
        <li><strong>Forgetting business context</strong>: A model that's 99% accurate but denies all loans isn't useful. Balance accuracy with business objectives.</li>
        <li><strong>Not monitoring drift</strong>: Borrower behavior changes over time. Retrain your model quarterly.</li>
      </ol>

      <h2>Tools You'll Need</h2>
      <ul>
        <li><strong>Python</strong>: Pandas, NumPy, scikit-learn, Matplotlib</li>
        <li><strong>SQL</strong>: To pull and aggregate data</li>
        <li><strong>Jupyter Notebooks</strong>: To document your analysis</li>
        <li><strong>Power BI/Tableau</strong>: To visualize for stakeholders</li>
        <li><strong>Git</strong>: To version control your code</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Credit risk modeling isn't just for data scientists. As a financial analyst, you already understand lending, defaults, and portfolio dynamics. Python gives you the tools to scale that expertise.</p>
      <p>The analysts who combine financial acumen with technical skills will lead the next generation of finance. You don't need a PhD in machine learning—you need curiosity, rigor, and a willingness to experiment.</p>
      <p>Start small. Build something. Learn from it. That's how you become indispensable.</p>
    `,
    category: "Case Studies",
    date: "Jan 18, 2025",
    readTime: 15,
    image: "/images/project11.png",
    tags: ["python", "machine-learning", "credit-risk", "sql", "data-science"],
    insights: [
      "Python reduces credit risk assessment time by 60% vs manual Excel analysis",
      "Feature engineering (debt service ratio, payment ratio) is critical for model accuracy",
      "Random Forest models achieve 85%+ ROC-AUC scores for default prediction",
      "Risk-based pricing improved net interest margin by 2.3% at Citi",
      "Quarterly model retraining prevents performance drift as borrower behavior changes"
    ]
  }
];

const profiles = [
  {
    id: "business-analyst",
    name: "Business Analyst / Data Analyst",
    icon: "📊",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    description: "Data-driven insights and business intelligence",
    tags: ["business-analyst", "data-analyst"]
  },
  {
    id: "financial-analyst",
    name: "Financial Analyst",
    icon: "💰",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    description: "Financial modeling and risk analysis",
    tags: ["financial-analyst"]
  },
  {
    id: "product-manager",
    name: "Product Manager",
    icon: "🚀",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    description: "Product strategy and execution",
    tags: ["product-manager"]
  }
];

export { skills, projects, visibleSkills, hiddenSkills, experiences, education, certifications, achievements, testimonials, blogPosts, profiles };
