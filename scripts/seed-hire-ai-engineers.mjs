/**
 * Seeds the "Hire AI Engineers" page into Sanity (skipped if it already exists).
 * Run: npm run seed:hire
 */
import { createClient } from "@sanity/client";

function pt(...paragraphs) {
  return paragraphs.map((text, i) => ({
    _type: "block",
    _key: `p${i}_${Math.random().toString(36).slice(2, 8)}`,
    style: "normal",
    markDefs: [],
    children: [{ _type: "span", _key: `s${i}`, text, marks: [] }],
  }));
}

const key = () => Math.random().toString(36).slice(2, 10);

function titledItem(title, description, extra = {}) {
  return { _key: key(), title, description: pt(description), ...extra };
}

const hireAiEngineersPage = {
  _id: "hirePage-ai-engineers",
  _type: "hirePage",
  title: "AI Engineers",
  slug: { _type: "slug", current: "hire-ai-engineers" },
  showInNavigation: true,
  navTags: ["GenAI", "LLM", "RAG", "AI Agents", "MLOps"],
  hero: {
    badge: "Hire AI Engineers",
    title: "Hire Vetted AI Engineers for",
    titleHighlight: "Enterprise Projects",
    description: pt(
      "Scale your AI initiatives with pre-vetted AI engineers who build, integrate, and run production-grade AI — from generative AI and LLM applications to machine learning models and MLOps."
    ),
    primaryCta: { text: "Hire AI Engineers", link: "/contact", variant: "primary" },
    secondaryCta: { text: "Explore Hiring Models", link: "#hiring-models", variant: "secondary" },
  },

  expertiseHeadline: "AI Engineering Expertise We Offer",
  expertise: [
    titledItem("Artificial Intelligence Engineers", "Design and deliver end-to-end AI solutions that fit your enterprise systems and data."),
    titledItem("Generative AI Engineers", "Build content, code, and knowledge assistants on top of leading foundation models."),
    titledItem("Large Language Model (LLM) Developers", "Fine-tune, prompt-engineer, and evaluate LLMs for accurate, reliable business use."),
    titledItem("Retrieval-Augmented Generation (RAG) Engineers", "Ground AI answers in your own documents and data with secure retrieval pipelines."),
    titledItem("AI Agent Developers", "Create autonomous agents that plan, call tools, and complete multi-step workflows."),
    titledItem("Machine Learning Engineers", "Train, validate, and deploy predictive models on structured and unstructured data."),
    titledItem("MLOps Engineers", "Automate model deployment, monitoring, and retraining so AI stays reliable in production."),
  ],

  buildHeadline: "What You Can Build with AI Engineers",
  buildItems: [
    titledItem("Enterprise AI Applications", "Secure, scalable AI applications integrated with your ERP, CRM, and data platforms."),
    titledItem("Generative AI Solutions", "Content generation, summarisation, and knowledge tools tailored to your teams."),
    titledItem("LLM-Powered Applications & Chatbots", "Conversational assistants for customers and employees, grounded in your business context."),
    titledItem("Retrieval-Augmented Generation Systems", "Search and Q&A over internal knowledge with source-backed, governed answers."),
    titledItem("AI Agents & Workflow Automation", "Agents that automate repetitive, multi-step processes across your systems."),
    titledItem("Predictive Analytics & Machine Learning Models", "Forecasting, scoring, and anomaly detection models that drive better decisions."),
  ],

  modelsHeadline: "Flexible AI Engineer Hiring Models",
  modelsDescription: pt("Choose the engagement that fits your roadmap, budget, and pace — and change it as your needs grow."),
  models: [
    titledItem("Dedicated AI Engineers", "Full-time AI engineers who work as an extension of your in-house team.", {
      bestFor: "Long-term AI product development",
      features: ["Full-time commitment to your project", "Works in your tools and time zone", "Direct communication with your team"],
    }),
    titledItem("Part-Time / Hourly Engagement", "Flexible AI expertise for specific tasks, reviews, or ongoing enhancements.", {
      bestFor: "Short tasks and evolving requirements",
      features: ["Pay only for hours used", "Scale effort up or down", "Quick start on focused tasks"],
    }),
    titledItem("Managed AI Team", "A complete AI team with delivery management, handling outcomes end to end.", {
      bestFor: "End-to-end AI initiatives",
      features: ["Cross-functional AI team", "Delivery managed by SyncOrigins", "Outcome-focused milestones"],
    }),
  ],
  modelsCta: { text: "Hire AI Engineers", link: "/contact" },

  techHeadline: "AI Engineer Tech Stack",
  techStack: [
    { _key: key(), category: "Languages", tools: ["Python", "TypeScript", "SQL", "Java"] },
    { _key: key(), category: "LLMs & Generative AI", tools: ["OpenAI GPT", "Anthropic Claude", "Google Gemini", "Llama", "Mistral", "Azure OpenAI"] },
    { _key: key(), category: "AI Frameworks", tools: ["LangChain", "LlamaIndex", "Hugging Face", "Semantic Kernel"] },
    { _key: key(), category: "Machine Learning", tools: ["PyTorch", "TensorFlow", "scikit-learn", "XGBoost"] },
    { _key: key(), category: "Vector Databases", tools: ["Pinecone", "Weaviate", "Qdrant", "pgvector"] },
    { _key: key(), category: "MLOps & Cloud", tools: ["Azure ML", "AWS SageMaker", "Google Vertex AI", "MLflow", "Docker", "Kubernetes"] },
  ],

  whyHeadline: "Why Hire AI Engineers from SyncOrigins",
  whyItems: [
    titledItem("Pre-Vetted AI Engineering Specialists", "Engineers are screened for hands-on AI, ML, and LLM delivery experience."),
    titledItem("Enterprise AI & Integration Expertise", "Experience connecting AI with ERP, data platforms, and enterprise security requirements."),
    titledItem("Flexible Team Scaling", "Add or reduce engineers as your project moves from pilot to production."),
    titledItem("Rapid Talent Matching", "Get matched with engineers who fit your use case, stack, and team."),
    titledItem("Managed Delivery Support", "Optional delivery oversight to keep timelines, quality, and outcomes on track."),
  ],

  processHeadline: "Our AI Engineer Hiring Process",
  process: [
    titledItem("Define Your AI Requirements", "Share your goals, use cases, tech stack, and team needs."),
    titledItem("Match with Suitable AI Engineers", "We shortlist engineers whose skills fit your project."),
    titledItem("Interview and Select", "Interview candidates and choose the right fit."),
    titledItem("Onboard Your AI Engineers", "Engineers join your tools, processes, and team rituals."),
    titledItem("Scale Your AI Team", "Grow or adjust the team as your AI roadmap evolves."),
  ],

  industriesHeadline: "Industries We Support",
  industries: [
    { _key: key(), title: "Banking & Financial Services", icon: "Landmark" },
    { _key: key(), title: "Healthcare", icon: "HeartPulse" },
    { _key: key(), title: "Retail & E-commerce", icon: "ShoppingCart" },
    { _key: key(), title: "Manufacturing", icon: "Factory" },
    { _key: key(), title: "Technology & SaaS", icon: "Server" },
    { _key: key(), title: "Other Enterprise Industries", icon: "Building2" },
  ],

  testimonialsHeadline: "What Our Clients Say",
  testimonials: [],

  moreHeadline: "Explore More Developers to Hire",
  moreLinks: [
    { _key: key(), title: "Hire Data Engineers", description: "Build reliable data pipelines and platforms.", link: "/contact" },
    { _key: key(), title: "Hire Generative AI Developers", description: "Create generative AI products and assistants.", link: "/contact" },
    { _key: key(), title: "Hire LLM Developers", description: "Develop and fine-tune LLM-powered applications.", link: "/contact" },
    { _key: key(), title: "Hire Machine Learning Engineers", description: "Build and deploy predictive ML models.", link: "/contact" },
  ],

  faqs: [
    { _key: key(), question: "What skills do your AI engineers have?", answer: pt("Our AI engineers work across generative AI, LLMs, RAG, AI agents, machine learning, and MLOps, using Python and leading AI frameworks and cloud platforms.") },
    { _key: key(), question: "Can I interview the AI engineers before hiring?", answer: pt("Yes. You interview shortlisted engineers and choose who joins your team.") },
    { _key: key(), question: "Which hiring models are available?", answer: pt("You can hire dedicated full-time engineers, engage engineers part-time or hourly, or work with a managed AI team.") },
    { _key: key(), question: "Can I scale the team up or down?", answer: pt("Yes. You can add or reduce engineers as your project moves from pilot to production.") },
    { _key: key(), question: "Will the engineers work with our existing systems?", answer: pt("Yes. Our engineers have experience integrating AI with ERP, CRM, data platforms, and enterprise security requirements.") },
  ],

  finalCta: {
    badgeText: "Hire AI Engineers",
    title: "Build Your AI Engineering Team with SyncOrigins",
    description: pt("Tell us about your AI goals and we will match you with engineers who fit your project."),
    buttonText: "Discuss Your AI Hiring Requirements",
    buttonLink: "/contact",
  },

  seo: {
    metaTitle: "Hire AI Engineers | Vetted AI Developers for Enterprise | SyncOrigins",
    metaDescription:
      "Hire pre-vetted AI engineers for generative AI, LLM, RAG, AI agent, machine learning, and MLOps projects. Flexible hiring models for enterprise teams.",
  },
};

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const created = await client.createIfNotExists(hireAiEngineersPage);
console.log(`Hire page ready: ${created._id} → /${created.slug.current}`);
