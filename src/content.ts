import type { Content } from './components/Sections';

export const content: Content = {
  name: 'Meera Krishnan',
  role: 'Data Scientist',
  tagline: 'Turning raw data into decisions',
  photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  email: 'meera@datascholar.io',
  phone: '+91 98470 22456',
  location: 'Bengaluru, India',
  languages: ['English', 'Hindi', 'Tamil'],
  socials: [
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'Kaggle', href: 'https://kaggle.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
  ],
  about: [
    'I am a data scientist with 5+ years of experience building analytical solutions that turn messy, real-world data into clear, actionable insight. From forecasting demand to detecting fraud, I ship models and dashboards that people actually use.',
    'I believe the best analytics tell a story. I work across the full pipeline — SQL and Python for exploration, statistical modeling for inference, and Tableau for synthesis — always tying the numbers back to the business outcome.',
  ],
  services: [
    { title: 'Predictive Analytics', desc: 'Forecasting demand, revenue and risk with time-series and regression models that hold up in production.', icon: '📈' },
    { title: 'Machine Learning', desc: 'Building, tuning and deploying classification and segmentation models that solve real business problems.', icon: '🧠' },
    { title: 'Fraud & Anomaly Detection', desc: 'Real-time detection engines that flag suspicious behaviour without drowning analysts in false positives.', icon: '🛡️' },
    { title: 'Data Dashboards', desc: 'Interactive Tableau and Power BI dashboards that make insight legible to executives and ops teams alike.', icon: '📊' },
    { title: 'Experimentation', desc: 'A/B testing and causal inference design that gives product and marketing teams confidence in their bets.', icon: '🧪' },
    { title: 'Statistical Consulting', desc: 'Explaining the method behind the model — and the uncertainty in it — to stakeholders who need to decide.', icon: '📖' },
  ],
  skills: [
    { name: 'SQL', level: 95, note: 'Complex queries, optimization' },
    { name: 'Python', level: 92, note: 'Pandas, NumPy, SciPy' },
    { name: 'R', level: 80, note: 'Statistical computing' },
    { name: 'Scikit-learn', level: 86, note: 'Modeling & ML' },
    { name: 'Pandas', level: 93, note: 'Data wrangling' },
    { name: 'Tableau', level: 88, note: 'Dashboards & storytelling' },
  ],
  skillsIcons: [
    { name: 'BigQuery', note: 'TB-scale pipelines', icon: '☁️' },
    { name: 'Storytelling', note: 'Tableau & Power BI', icon: '🎨' },
    { name: 'Experimentation', note: 'A/B & causal inference', icon: '🧪' },
    { name: 'MLOps', note: 'Versioning & monitoring', icon: '🔄' },
  ],
  stats: [
    { label: 'Models deployed', value: 50, suffix: '+' },
    { label: 'Rows processed', value: 10, suffix: 'M+', prefix: '' },
    { label: 'Dashboards shipped', value: 120, suffix: '+' },
    { label: 'Prediction accuracy', value: 94, suffix: '%' },
  ],
  experience: [
    {
      role: 'Senior Data Scientist',
      company: 'Insightful Analytics',
      period: '2021 — Present',
      desc: 'Lead end-to-end data science for a retail client. Built demand forecasting and customer segmentation models that lifted forecast accuracy 20%.',
    },
    {
      role: 'Data Scientist',
      company: 'FinMetrics',
      period: '2019 — 2021',
      desc: 'Developed credit-risk and fraud-detection models for a fintech, reducing false positives by 35% while keeping detection high.',
    },
    {
      role: 'Data Analyst',
      company: 'BlueWave Consulting',
      period: '2018 — 2019',
      desc: 'Provided SQL and dashboarding services for healthcare clients, surfacing operational bottlenecks and cost drivers.',
    },
  ],
  education: [
    {
      degree: 'M.Sc. Econometrics & Statistics',
      school: 'Delhi School of Economics',
      period: '2015 — 2017',
      desc: 'Advanced econometrics, time-series modeling and statistical inference, with a research thesis on demand forecasting.',
    },
    {
      degree: 'B.Sc. Statistics',
      school: 'Madras Christian College',
      period: '2012 — 2015',
      desc: 'Foundations in probability, regression and data analysis with a minor in economics.',
    },
  ],
  certificates: [
    'Google Data Analytics Professional',
    'IBM Data Science Professional',
    'Tableau Desktop Specialist',
    'Microsoft Certified: PL-300 Power BI',
  ],
  awards: [
    { title: 'Kaggle Competition Master', detail: 'Ranked in the top 1% globally across featured tabular competitions for model quality and clean validation.', year: '2023' },
    { title: 'Best Analytics Delivery', detail: 'Company award for the demand forecasting system that delivered the highest measurable client impact of the year.', year: '2022' },
    { title: 'Hackathon Winner', detail: 'First place for a fraud-detection prototype, built in 36 hours and later carried into production.', year: '2021' },
  ],
  cards: [
    {
      title: 'Retail Demand Forecasting',
      desc: 'Time-series pipeline using SARIMA and XGBoost across 2,000 SKUs. Reduced stockouts 22% and overstock 18%.',
      stack: 'Python, Prophet, BigQuery',
      metric: '-22% stockouts',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    },
    {
      title: 'Customer Churn Analysis',
      desc: 'Churn propensity model with explainable SHAP outputs, guiding retention campaigns that cut churn 16%.',
      stack: 'Scikit-learn, SQL, Tableau',
      metric: '-16% churn',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=400&fit=crop',
    },
    {
      title: 'Fraud Detection Engine',
      desc: 'Real-time anomaly detection on transaction streams, flagging suspicious activity with 99% precision in under 50ms.',
      stack: 'Python, Spark, Kafka',
      metric: '99% precision',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop',
    },
  ],
  projects: [
    {
      title: 'Demand Forecast Engine',
      desc: 'A production forecasting service covering 2,000 SKUs, with drift monitoring and retraining built in from day one.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      tags: ['Forecasting', 'Time Series'],
    },
    {
      title: 'ML in Production',
      desc: 'Standardised the model lifecycle — versioning, evaluation and rollback — so every model ships with a safety net.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop',
      tags: ['MLOps', 'Python'],
    },
    {
      title: 'Customer 360 Segmentation',
      desc: 'A behaviour-based segmentation model that now drives personalised outreach across marketing and product.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop',
      tags: ['Segmentation', 'SQL'],
    },
  ],
  hobbies: [
    { name: 'Running', note: 'Training for half marathons', icon: '🏃‍♀️' },
    { name: 'Chess', note: 'Club-level player', icon: '♟️' },
    { name: 'Baking', note: 'Sourdough experiments', icon: '👩‍🍳' },
    { name: 'Sci-fi', note: 'Asimov to Sanderson', icon: '📚' },
  ],
  testimonials: [
    {
      quote:
        'Meera has a rare gift for making complex data feel simple. Her dashboards are the ones our leadership actually opens.',
      author: 'Rahul Nair',
      role: 'VP of Analytics, Insightful Analytics',
    },
    {
      quote:
        'She delivers models that hold up in production and explains them in plain language. A true asset to any data team.',
      author: 'Sofia Costa',
      role: 'Data Lead, FinMetrics',
    },
  ],
  footnote: '© Meera Krishnan · React, TypeScript & Framer Motion',
  ticker: ['ML Models', 'Forecasting', 'Dashboards', 'A/B Testing', 'BigQuery', 'Storytelling'],

  blogPosts: [
    { title: 'Advanced Feature Engineering Techniques', excerpt: 'Transforming raw data into powerful predictive features using statistical methods and domain knowledge.', date: '2024-01-12', tags: ['Feature Engineering', 'Statistics'], readTime: '10 min' },
    { title: 'Building End-to-End Data Pipelines', excerpt: 'Best practices for creating robust, scalable data workflows from ingestion to model serving.', date: '2024-01-05', tags: ['Data Engineering', 'Pandas'], readTime: '8 min' },
  ],

  faqItems: [
    { question: 'What tools do you use for data analysis?', answer: 'I use Python with pandas, NumPy, and scipy for analysis, along with SQL for database queries and Jupyter notebooks for exploration.' },
    { question: 'How do you handle missing data?', answer: 'I analyze the pattern of missingness first, then apply appropriate techniques like imputation, deletion, or model-based approaches depending on the context.' },
    { question: 'What visualization tools do you prefer?', answer: 'I use matplotlib, seaborn, and plotly for static and interactive visualizations, and Tableau for business-facing dashboards.' },
    { question: 'How do you validate your models?', answer: 'I use cross-validation, holdout testing, and statistical significance tests to ensure model robustness and generalization.' },
  ],

  skillsDetailed: [
    { category: 'Analysis', items: [
      { name: 'Python/Pandas', level: 95 },
      { name: 'SQL', level: 92 },
      { name: 'R', level: 78 },
      { name: 'Statistical Modeling', level: 88 },
    ]},
    { category: 'Visualization', items: [
      { name: 'Matplotlib/Seaborn', level: 90 },
      { name: 'Plotly', level: 85 },
      { name: 'Tableau', level: 75 },
    ]},
  ],

  contactMethods: [
    { type: 'Email', value: 'data.scientist@email.com', icon: '📧', href: 'mailto:data.scientist@email.com' },
    { type: 'Kaggle', value: 'kaggle.com/datascientist', icon: '🏆', href: 'https://kaggle.com' },
  ],
};