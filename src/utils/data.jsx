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
    category: "Data Analytics & Visualization",
    icon: "M4 6h16M4 12h16m-7 6h7",
    skills: [
      { name: "Tableau", level: 95 },
      { name: "Power BI", level: 80 },
      { name: "Excel", level: 85 },
    ],
  },
  {
    category: "Big Data Technologies",
    icon: "M3 18h18M9 21h6M4 15h16M12 3v12m-6 3a6 6 0 0112 0",
    skills: [
      { name: "Apache Spark", level: 95 },
      { name: "Hadoop", level: 85 },
      { name: "Google BigQuery", level: 90 },
    ],
  },
  {
    category: "Languages",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    skills: [
      { name: "Python", level: 90 },
      { name: "R", level: 95 }
    ],
  },
];

const hiddenSkills = [
  {
    category: "Databases & ETL",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
    skills: [
      { name: "MySQL", level: 95 },
      { name: "MongoDB", level: 85 },
      { name: "AWS Redshift & Snowflake", level: 80 },
      { name: "ETL Pipelines (Airflow, SSIS)", level: 75 },
    ],
  },
  {
    category: "Tools & Others",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 80 },
      { name: "Kubernetes", level: 60 },
      { name: "Jenkins", level: 90 },
      { name: "AWS", level: 85 },
    ],
  },
];

const experiences = [
  {
    title: "Business Analyst Intern",
    company: "DHL Supply Chain",
    date: "January 2025 – Present",
    location: "Tempe, Arizona",
    points: [
      "Analyzed logistics data to streamline out-of-office-hours (OOH) network operations, enhancing emergency delivery efficiency and reducing average response time by 30% during critical periods.",
      "Built dashboards using Power BI and Tableau to monitor shipment performance in real-time.",
      "Implemented geocoding algorithms combined with machine learning techniques to systematically fill in missing dataset values, leading to a 30% improvement in overall data accuracy.",
      "Developed predictive models to enhance warehouse and courier allocation, reducing delays and optimizing logistics operations."
    ],
  },
  {
    title: "Data Research Analyst",
    company: "Morningstar (PitchBook)",
    date: "December 2022 – July 2024",
    location: "Mumbai, India",
    points: [
      "Tracked and analyzed data for over 3,500 early-stage companies, identifying key trends in investment patterns that informed strategy adjustments.",
      "Created 50+ analytical reports for major investment banks such as JP Morgan, BlackRock, Goldman Sachs, and Barclays, providing valuable investment insights.",
      "Conducted thorough analyses of 2000+ venture-backed companies, synthesizing data to produce accurate financial projections for strategic investment decisions.",
      "Defined ETL processes to automate daily reporting workflows using SQL and Power BI, reducing reporting time by 25% and improving data pipeline efficiency."
    ],
  },
  {
    title: "Business Intelligence Analyst",
    company: "FUEL (Friends Union for Energizing Lives)",
    date: "December 2021 – November 2022",
    location: "Pune, India",
    points: [
      "Engineered data pipelines and optimized ETL processes using SQL, reducing data retrieval time by 60% and improving forecasting accuracy.",
      "Automated reporting processes using advanced Excel techniques, reducing report generation time by 30% and enabling faster decision-making.",
      "Collaborated with high-profile clients, including HDFC Bank, Capgemini, Citi, Government of India, DBS, and Standard Chartered, to design and deliver tailored dashboards.",
      "Highlighted the impact of Corporate Social Responsibility (CSR) activities executed by Fuel for Nation, enhancing clients’ strategic decision-making."
    ],
  }
];

export { skills, projects, visibleSkills, hiddenSkills, experiences };
