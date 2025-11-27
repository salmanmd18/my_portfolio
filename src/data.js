export const hero = {
  name: 'Salman Mohammed',
  title: 'Machine Learning Engineer · LLMs · RAG · Agents',
  focus: 'LLMs · RAG · Agents · Cloud AI',
  summary:
    'I build production-grade AI systems: retrieval pipelines, domain agents, and intelligent assistants that are grounded, modular, and ready for real-world scale.',
  primaryCta: '#projects',
  secondaryCta: 'https://github.com/salmanmd18',
}

export const story = [
  'I’m a Machine Learning Engineer focused on building applied LLM systems including RAG pipelines, role-aware assistants, voice agents, and retrieval workflows that perform reliably in production.',
  'I’ve delivered AI systems across fintech, healthcare, travel, and airport automation, spanning document intelligence, conversational agents, and operational decision-support tools. My work centers on clarity, grounded responses, and user-focused design.',
  'I like working at the intersection of AI, engineering, and product, turning complex ideas into fast, dependable systems that teams can ship with confidence.',
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
    period: 'Jan 2023 – Aug 2024',
    bullets: [
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
    summary: 'RAG pipeline for finance Q&A over SEC filings and market news. Retrieves context and answers with grounded citations.',
    stack: ['Python', 'LangChain', 'LlamaIndex', 'OpenAI', 'Vector DB', 'Docker'],
    link: 'https://github.com/salmanmd18/equity_research--rag',
    status: 'Open source',
  },
  {
    name: 'Coder Buddy · AI Coding Assistant',
    summary: 'Multi-agent assistant that breaks down dev prompts into plans, generates code, and offers inline explanations with memory.',
    stack: ['LangChain', 'OpenAI', 'Python', 'Node/React UI', 'Docker'],
    link: 'https://github.com/salmanmd18/code-agent',
    featured: true,
    status: 'Open source',
  },
  {
    name: 'FinSolve RBAC Chatbot',
    summary: 'Enterprise RAG+SQL assistant with strict role-based filtering, classifier-based routing, fallback logic, and usage analytics.',
    stack: ['FastAPI', 'ChromaDB', 'DuckDB', 'OpenAI', 'RBAC', 'Python'],
    link: 'https://github.com/salmanmd18/rbac-agent',
    featured: true,
    status: 'Enterprise',
  },
  {
    name: 'Dobbs Agent (DB Agent)',
    summary: 'Vector-RAG over custom databases. Embeds docs, performs semantic search, and answers using LLM+schema-mapped responses.',
    stack: ['LangChain', 'FastAPI', 'Vector DB', 'Docker', 'OpenAI'],
    link: 'https://github.com/salmanmd18/db_agent',
    featured: true,
    status: 'Open source',
  },
  {
    name: 'Healthcare RAG Q&A',
    summary: 'Medical RAG system that retrieves guidance from clinical files, retrieves semantically similar chunks, and answers with citation.',
    stack: ['Transformers', 'LangChain', 'Medical Embeddings', 'FastAPI', 'Docker'],
    link: 'https://github.com/salmanmd18/rag_llma',
    status: 'Open source',
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
  { school: 'Saint Louis University', degree: 'Master of Science, Analytics', period: 'May 2025' },
  { school: 'Jawaharlal Nehru Technological University', degree: 'Bachelor of Technology', period: 'May 2021' },
]
