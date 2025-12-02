export const hero = {
  name: 'Salman Mohammed',
  title: 'AI Engineer · RAG & Agents · End-to-End Builder',
  focus: 'LLMs · RAG · Agents · Cloud AI',
  summary:
    'I integrate modern LLM tools into production apps and own the full stack—from data and prompts to APIs, UI, and deployment.',
  primaryCta: '#projects',
  secondaryCta: 'https://github.com/salmanmd18',
}

export const story = [
  'I’m an AI Engineer who specializes in integrating LLMs into real products—RAG systems, role-aware assistants, and voice-based companions.',
  'I’ve built AI solutions across fintech, healthcare, travel, and airport automation, working on everything from document intelligence and chatbots to airport CV systems and mobile travel companions.',
  'I enjoy small, fast teams where I can own the full flow: understanding the use case, designing the workflow, wiring up APIs, stitching in LLMs, and getting a polished feature into users’ hands.',
]

export const stats = [
  { label: 'LLM/RAG builds', value: '8+' },
  { label: 'Cloud deployments', value: 'AWS / GCP' },
  { label: 'Prod scope', value: 'Airport & Fintech' },
]

export const skills = [
  {
    title: 'Languages & Core',
    items: ['Python', 'SQL', 'JavaScript', 'Git'],
  },
  {
    title: 'ML & Deep Learning',
    items: [
      'PyTorch',
      'TensorFlow',
      'Keras',
      'JAX',
      'Computer Vision',
      'Transformer Models',
      'Reinforcement Learning',
      'Knowledge Distillation',
      'Model Compression',
    ],
  },
  {
    title: 'LLMs · RAG · Agents',
    items: [
      'LLMs',
      'RAG Pipelines',
      'LoRA / QLoRA',
      'LangChain',
      'LlamaIndex',
      'Vector DBs (Pinecone, FAISS, Chroma, Supabase)',
      'Multi-Agent Systems',
      'Prompt Orchestration',
    ],
  },
  {
    title: 'Backend',
    items: ['FastAPI', 'Flask', 'Node.js/Express', 'REST APIs', 'WebSockets'],
  },
  {
    title: 'Data & Analytics',
    items: ['Pandas', 'NumPy', 'Scikit-learn', 'EDA', 'Feature Engineering', 'Matplotlib', 'Seaborn', 'Plotly', 'Power BI'],
  },
  {
    title: 'Deployment & Infra (Optional)',
    items: ['Docker', 'Kubernetes', 'AWS (Lambda, API Gateway, EKS, ECS)', 'GCP', 'Supabase', 'Stripe', 'RabbitMQ / Amazon MQ'],
  },
]

export const experiences = [
  {
    role: 'AI/ML Intern',
    company: 'Smartrip (AI Travel Platform)',
    period: 'Mar 2025 – Aug 2025',
    bullets: [
      'Acted as a full-stack AI engineer: wiring LLMs, voice, data, and payments into a single user-facing travel experience.',
      'Built a mobile-first travel assistant powered by voice agents, LLMs, and personalized itinerary generation.',
      'Developed voice-based AI companion using ElevenLabs TTS and conversational UX; preferences extracted via Vertex AI on GCP.',
      'Managed real-time flight/hotel recommendations and stored trip preferences in Supabase for dynamic itineraries.',
      'Connected bookings and trip tracking to a multi-agent system with fallback logic and alerting.',
      'Enabled secure API communication with FastAPI and tracked behavior with PostHog telemetry.',
      'Stack: FastAPI · ElevenLabs · Gemini/Vertex AI · Supabase · PostHog · Docker · Google Cloud',
    ],
  },
  {
    role: 'Machine Learning Engineer',
    company: 'Data Evolve Solutions · Digi Yatra',
    period: 'Sep 2022 – Jun 2023',
    bullets: [
      'Worked as the glue between CV models, backend APIs, and AWS infra—owning features from prototyping to live traffic.',
      'Built computer vision infrastructure and cloud-deployed AI for airport-scale throughput.',
      'Developed facial recognition and YOLOv7-based boarding-pass scanning with PyTorch and ensemble tuning.',
      'Deployed containerized inference to AWS EKS via KServe using Docker & ECR; CI/CD with Lambda + API Gateway for stable rollouts.',
      'Authored CloudFormation/YAML to spin up EKS clusters, EC2s, and managed Linux/Unix apps; designed 3-tier VPCs with NAT/Internet gateways.',
      'Used Kafka for telemetry and edge logging; EventBridge + Lambda lifecycle rules to optimize uptime and cost.',
      'Stack: PyTorch · YOLOv7 · AWS (EKS, Lambda, API Gateway, EC2, ECR) · Docker · KServe · Kafka · CloudFormation',
    ],
  },
  {
    role: 'Data Science Intern',
    company: 'Ineuron',
    period: 'Nov 2021 – Aug 2022',
    bullets: [
      'Combined modeling, data analysis, and deployment to turn classical ML models into usable, demo-ready products.',
      'Random Forest regression for rental bike sharing with ~80% accuracy uplift; deployed on Heroku.',
      'Logistic Regression and SVM for Algerian Forest-Fire classification (~85% accuracy) with feature selection.',
      'Validated with MAE, RMSE, Precision, Recall, F1-Score; visualized metrics via Matplotlib/Seaborn/Plotly.',
    ],
  },
]

export const projects = [
  {
    name: 'LLM Fine-tuning',
    summary: 'Adapted open-weight LLMs with LoRA/QLoRA for domain-specific tasks, evaluation, and serving APIs.',
    stack: ['Python', 'Hugging Face', 'LoRA/QLoRA', 'FastAPI', 'Docker'],
    link: 'https://github.com/salmanmd18/llm_fine',
    status: 'Open source',
  },
  {
    name: 'Equity RAG Tool',
    summary: 'Built a production-style RAG pipeline that plugs into financial research workflows, using LLMs on top of vector search for reports and news.',
    stack: ['Python', 'LangChain', 'LlamaIndex', 'OpenAI', 'Vector DB', 'Docker'],
    link: 'https://github.com/salmanmd18/equity_research--rag',
    status: 'Open source',
  },
  {
    name: 'Coder Buddy · AI Coding Assistant',
    summary: 'Built a multi-agent coding assistant that turns natural language dev requests into real code projects, using existing LLM APIs and file tooling.',
    stack: ['LangChain', 'OpenAI', 'Python', 'Node/React UI', 'Docker'],
    link: 'https://github.com/salmanmd18/code-agent',
    featured: true,
    status: 'Open source',
  },
  {
    name: 'FinSolve RBAC Chatbot',
    summary: 'Designed a role-aware RAG + SQL assistant that integrates into an internal tool stack, enforcing permissions while answering department-specific questions.',
    stack: ['FastAPI', 'ChromaDB', 'DuckDB', 'OpenAI', 'RBAC', 'Python'],
    link: 'https://github.com/salmanmd18/rbac-agent',
    featured: true,
    status: 'Enterprise',
  },
  {
    name: 'Dobbs Agent (DB Agent)',
    summary: 'Vector-RAG over custom databases, embedding docs and answering via LLM + schema-mapped responses for business data.',
    stack: ['LangChain', 'FastAPI', 'Vector DB', 'Docker', 'OpenAI'],
    link: 'https://github.com/salmanmd18/db_agent',
    featured: true,
    status: 'Open source',
  },
  {
    name: 'Healthcare RAG Q&A',
    summary: 'Integrated medical knowledge sources with an LLM-based QA layer to answer healthcare questions with grounded, citation-backed responses.',
    stack: ['Transformers', 'LangChain', 'Medical Embeddings', 'FastAPI', 'Docker'],
    link: 'https://github.com/salmanmd18/rag_llma',
    status: 'Open source',
  },
  {
    name: 'SmartRip AI (Internship)',
    summary: 'Helped build a mobile-first AI travel companion combining voice (ElevenLabs), Vertex AI, and backend services to personalize trips end-to-end.',
    stack: ['FastAPI', 'Gemini LLM', 'Supabase', 'Stripe', 'Docker', 'GCP'],
    link: '',
    status: 'Internship · Private',
  },
  {
    name: 'Health Risk Assessment Portal',
    summary:
      'Predicts diabetes, heart disease, and kidney disease risk using Random Forest models and a FastAPI/React interface.',
    stack: ['Python', 'Scikit-learn', 'FastAPI', 'Docker', 'Vercel'],
    link: 'https://github.com/achyuth098/Disease-risk-Asssesment',
    status: 'Capstone',
  },
]

export const education = [
  { school: 'Saint Louis University', degree: 'Master of Science, Analytics', period: 'Aug 2023 – May 2025' },
  { school: 'Jawaharlal Nehru Technological University', degree: 'Bachelor of Technology', period: 'Aug 2017 – Aug 2021' },
]
