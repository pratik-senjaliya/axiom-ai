import { createClient } from 'next-sanity';
import path from 'path';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config({ path: path.join(__dirname, '../.env.local') });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-03-25',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN || process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

function markdownToPortableText(markdown: string) {
  if (!markdown) return [];
  const blocks: any[] = [];
  const lines = markdown.split('\n');
  let currentParagraph: string[] = [];
  
  const pushParagraph = () => {
    if (currentParagraph.length > 0) {
        let text = currentParagraph.join('\n').replace(/__/g, '').replace(/\\-/g, '-');
        blocks.push({
            _key: Math.random().toString(36).substring(7),
            _type: 'block',
            style: 'normal',
            children: [{ _key: Math.random().toString(36).substring(7), _type: 'span', marks: [], text: text }]
        });
        currentParagraph = [];
    }
  };

  for (let line of lines) {
    if (line.trim() === '') {
      pushParagraph();
    } else if (line.startsWith('- ') || line.startsWith('• ')) {
      pushParagraph();
      blocks.push({
        _key: Math.random().toString(36).substring(7),
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        level: 1,
        children: [{ _key: Math.random().toString(36).substring(7), _type: 'span', marks: [], text: line.substring(2).replace(/__/g, '').replace(/\\-/g, '-') }]
      });
    } else {
      currentParagraph.push(line);
    }
  }
  pushParagraph();
  return blocks;
}

function addKeys(arr: any[]) {
  if (!arr || !Array.isArray(arr)) return arr;
  return arr.map(item => ({
    ...item,
    _key: Math.random().toString(36).substring(7)
  }));
}

async function reseed() {
  console.log('🚀 Starting Comprehensive Rebuild Seed from Docs...');

  const singletonIds = [
    'homePageSingleton',
    'useCasesPageSingleton',
    'aiImplementationPageSingleton',
    'erpTransformationPageSingleton',
    'dataAnalyticsPageSingleton',
    'managedDeliveryPageSingleton',
    'sustainabilityPageSingleton',
    'aboutPageSingleton',
    'servicesPageSingleton'
  ];

  for (const id of singletonIds) {
    await client.delete(id).catch(() => {}); 
  }

  // ============== HOME PAGE ==============
  console.log('🏠 Seeding Home Page...');
  await client.createOrReplace({
    _id: 'homePageSingleton',
    _type: 'homePage',
    hero: {
      badge: 'Architecture & Strategy',
      title: 'Architecting the Intelligent Enterprise',
      titleHighlight: '',
      description: 'We bridge the gap between AI strategy and production-ready execution. Scalable GenAI, Data, and ERP transformations with governance, clarity, and measurable ROI.',
      primaryCta: { text: 'Start Your AI Pilot', link: '/contact' },
      secondaryCta: { text: 'Explore Solutions', link: '/services' }
    },
    pitfallsHeadline: 'Escape the "Pilot Purgatory"',
    pitfalls: addKeys([
      { stat: '85%', title: 'GenAI Pilots That Never Scale.', description: 'Most experiments die in the "chat" phase because they lack enterprise-grade RAG and governance.' },
      { stat: '75%', title: 'ERP Projects Over Budget.', description: 'Disconnects between business intent and technical delivery lead to costly scope creep.' },
      { stat: '70%', title: 'Data Silos Block AI.', description: 'Without a unified data lakehouse, even the best AI models provide unreliable insights.' }
    ]),
    solutionsHeadline: 'Enterprise-grade AI Solutions (What We Do)',
    solutions: addKeys([
      { title: 'GenAI & Agentic AI.', description: 'Beyond chatbots. We build autonomous agents and RAG systems that integrate directly into your core business workflows.' },
      { title: 'Data & Analytics.', description: 'From fragmented data to a "Single Source of Truth." Modern data warehousing and predictive intelligence for real-time decisioning.' },
      { title: 'ERP & Tech Modernization.', description: 'Aligning your core systems (SAP, Oracle, Microsoft Dynamics) with modern AI capabilities to eliminate manual overhead.' }
    ]),
    roadmapHeadline: 'The 3 Phases Path to Production',
    roadmap: addKeys([
      { step: '01', title: 'Strategic Discovery.', description: 'We identify high-impact use cases and assess your data maturity in a 2-week diagnostic.' },
      { step: '02', title: 'The Pilot Blueprint.', description: 'A 6–8 week proof-of-concept focused on a single, measurable KPI to prove value fast.' },
      { step: '03', title: 'Enterprise Scale.', description: 'Seamless integration of the proven pilot into your global operations with full governance and monitoring.' }
    ]),
    personasHeadline: 'Built for Enterprise Leaders',
    personas: addKeys([
      { role: 'For CXOs & Board:', description: 'Protect your investment. We provide independent oversight to ensure AI and ERP spend translates to the bottom line.' },
      { role: 'For CIOs & CTOs:', description: 'Scale without the friction. We provide the senior talent and architectural framework to accelerate your roadmap.' },
      { role: 'For Enterprise Architects:', description: 'Build for the future. We help you design composable, AI-ready architectures that don\'t add to your technical debt.' },
      { role: 'Data Leaders:', description: 'Data strategy alignment with AI ambitions.' }
    ]),
    finalCta: {
      title: 'Stop Guessing. Start Scaling.',
      description: 'Schedule a 45-minute Strategy Audit. No sales pitch—just actionable insights on your GenAI, ERP, or data roadmap.',
      primaryCta: { text: 'Book My Strategy Audit', link: '/contact' }
    }
  });

  // ============== AI IMPLEMENTATION PAGE ==============
  console.log('🤖 Seeding AI Implementation...');
  await client.createOrReplace({
    _id: 'aiImplementationPageSingleton',
    _type: 'aiImplementationPage',
    hero: {
      badge: '',
      title: 'Turn AI into a Measurable Business Asset',
      titleHighlight: '',
      description: 'Beyond the hype. We build production-grade AI platforms that integrate with your ERP and core data systems to drive operational ROI.',
      primaryCta: { text: 'Start 6-Week AI Pilot', link: '/contact' },
      secondaryCta: { text: 'View AI Roadmap Services', link: '/services' }
    },
    tags: ['Generative AI & RAG', 'Agentic AI', 'Autonomous AI Systems'],
    pitfallsHeadline: 'Why AI Initiatives Stall',
    pitfalls: addKeys([
      { title: 'The "Chat" Trap.', description: 'LLM experiments that lack a production roadmap or business logic.' },
      { title: 'Disconnected RAG.', description: 'Knowledge systems that lack access to live enterprise data silos.' },
      { title: 'The Integration Gap.', description: 'AI models operating in isolation without ERP or CRM connectivity.' },
      { title: 'Governance Blind Spots.', description: 'Lack of monitoring, security protocols, and audit trails.' },
      { title: 'ROI Uncertainty.', description: 'Massive investment with no clear path to measurable value.' }
    ]),
    layersHeadline: 'Our Enterprise AI Stack (The 4 Layers)',
    layers: addKeys([
      { layer: 'Layer 1', title: 'Generative AI & RAG.', outcome: 'Knowledge Velocity.', description: 'Convert unstructured PDFs and emails into an instantly searchable intelligence base.' },
      { layer: 'Layer 2', title: 'Agentic AI.', outcome: 'Operational Speed.', description: 'Deploy task-driven agents that manage multi-step workflows across your business apps.' },
      { layer: 'Layer 3', title: 'Autonomous AI Systems.', outcome: 'Predictive Certainty.', description: 'Self-optimizing engines that forecast demand, schedule production, and flag risk automatically.' },
      { layer: 'Layer 4', title: 'Governance & Observability.', outcome: 'Total Compliance.', description: 'Full visibility into model performance, costs, and data security.' }
    ]),
    useCasesHeadline: 'Industry Use Cases with POC Model',
    useCases: addKeys([
      { industry: 'Manufacturing', title: 'Autonomous Shop Floor Scheduling.', description: 'Reduce planning cycles by 40% with AI-driven material allocation.' },
      { industry: 'Financial Services', title: 'Compliance & Regulatory Knowledge Base.', description: 'Automate audit preparation and high-precision document review.' },
      { industry: 'Retail', title: 'Hyper-Local Demand Forecasting.', description: 'Eliminate stock imbalances using live market signals and ERP inventory data.' },
      { industry: 'Supply Chain', title: 'Multi-Agent Vendor Risk Monitoring.', description: 'Real-time disruption alerts through global news and logistical signal tracking.' }
    ]),
    roadmapHeadline: 'From Pilot to Platform (The 5-Step Path)',
    roadmap: addKeys([
      { step: 'Step 1', title: 'The 6-Week Sprint.', description: 'Rapid prototyping of a high-impact use case.' },
      { step: 'Step 2', title: 'KPI Verification.', description: 'Measuring the pilot against pre-defined ROI targets.' },
      { step: 'Step 3', title: 'Integration Engineering.', description: 'Mapping the AI to your existing ERP and Data stacks.' },
      { step: 'Step 4', title: 'Secure Rollout.', description: 'Deploying with enterprise-grade security and user training.' },
      { step: 'Step 5', title: 'Managed Evolution.', description: 'Continuous monitoring and model fine-tuning for long-term value.' }
    ]),
    modelsHeadline: 'Deployment Models',
    models: addKeys([
      { model: 'Model 1', title: 'Strategic Advisory.', description: 'Designing your 12-month AI roadmap.' },
      { model: 'Model 2', title: 'Rapid POC.', description: 'Delivering a functional pilot in 6 weeks.' },
      { model: 'Model 3', title: 'Full-Scale Implementation.', description: 'End-to-end platform deployment.' },
      { model: 'Model 4', title: 'Managed AI Service.', description: 'Ongoing performance tuning and governance.' }
    ]),
    finalCta: {
      _type: 'hero',
      title: 'Stop Experimenting. Start Implementing.',
      description: 'Book a strategy session to see how we can turn your data into an autonomous competitive advantage.',
      primaryCta: { text: 'Schedule Executive Discussion', link: '/contact' }
    },
    faqs: addKeys([
      { question: '1. How long does a typical AI implementation take?', answer: markdownToPortableText('We prioritize speed to value. Our 6–8 week Proof of Concept (POC) is designed to move a specific use case from ideation to a functional pilot. Full enterprise-wide deployment typically follows in 3–6 months, depending on the complexity of your data architecture.') },
      { question: '2. How do you handle data security and privacy with LLMs?', answer: markdownToPortableText('Security is our first priority. We build Private AI Environments using enterprise-grade cloud providers (Azure OpenAI, AWS Bedrock). Your proprietary data is never used to train public models, and all data remains within your existing security perimeter with full encryption and SOC2 compliance.') },
      { question: '3. Can your AI agents integrate with my existing ERP (SAP, Oracle, Dynamics)?', answer: markdownToPortableText('Yes. Unlike "standalone" chatbots, our Agentic AI is built to bridge the gap between LLMs and transactional systems. We use secure API layers and middleware to ensure the AI can read from and write to your ERP, making it a functional part of your operations.') },
      { question: '4. What is the difference between Generative AI and Agentic AI?', answer: markdownToPortableText('Generative AI focuses on content and knowledge retrieval (like answering questions from a PDF). Agentic AI goes a step further—it can execute tasks. For example, an Agentic system doesn\'t just tell you that inventory is low; it can draft a purchase order in your ERP for your approval.') },
      { question: '5. How do we measure the ROI of an AI project?', answer: markdownToPortableText('Before writing a single line of code, we define Success Metrics. Common KPIs include reduction in manual processing hours, improvement in forecast accuracy, or faster first-response times in customer service. We monitor these via a real-time ROI dashboard throughout the pilot.') },
      { question: '6. Do we need a massive data cleanup before starting with AI?', answer: markdownToPortableText('While "clean data" is ideal, our RAG (Retrieval-Augmented Generation) approach allows us to extract value from unstructured data (PDFs, emails, manuals) immediately. We help you build a "Data Foundation" in parallel with your AI pilot so you don\'t have to wait months to see results.') }
    ])
  });

  // ============== ERP TRANSFORMATION PAGE ==============
  console.log('💼 Seeding ERP Transformation...');
  await client.createOrReplace({
    _id: 'erpTransformationPageSingleton',
    _type: 'erpTransformationPage',
    hero: {
      badge: 'Systems Modernization',
      title: 'ERP Transformation: From Legacy Systems to Intelligent Operations',
      titleHighlight: '',
      description: 'We design and deploy high-performance ERP ecosystems across Microsoft Dynamics 365, SAP S/4HANA, and Oracle NetSuite/Cloud. We don\'t just go live; we ensure your core systems are AI-ready and business-aligned.',
      primaryCta: { text: 'Get ERP Maturity Assessment', link: '/contact' },
      secondaryCta: { text: 'Talk to an ERP Architect', link: '/services' }
    },
    tags: ['Microsoft Dynamics 365', 'SAP S/4HANA Strategy', 'Oracle Cloud & NetSuite'],
    pitfallsHeadline: 'Why ERP Transformations Fail',
    pitfalls: addKeys([
      { title: 'Uncontrolled Customizations', description: 'Refusing to adapt business logic to the ERP results in unmaintainable legacy code.' },
      { title: 'Data Migration Errors', description: 'Transferring dirty data into a new system leads to immediate mistrust from end users.' },
      { title: 'Poor Change Management', description: 'Treating an ERP implementation purely as a technology project instead of a human one.' }
    ]),
    layersHeadline: 'Multi-Platform Service Cards',
    layers: addKeys([
      { title: 'Microsoft Dynamics 365 (BC & F&O):', description: 'End-to-end implementation and optimization for agile mid-market and global enterprises.', tasks: ['Seamless integration with the Microsoft Power Platform and AI Copilots.'] },
      { title: 'SAP S/4HANA Strategy:', description: 'Guiding complex migrations from ECC to S/4HANA. We focus on "Clean Core" principles to reduce technical debt.', tasks: ['Standardized global processes with robust, scalable reporting.'] },
      { title: 'Oracle Cloud & NetSuite:', description: 'Rapid deployment and customization of Oracle’s cloud suites for finance-led organizations and high-growth companies.', tasks: ['Real-time financial visibility and automated global consolidation.'] },
      { title: 'Cross-Platform ERP Migration:', description: 'Zero-disruption transition from legacy on-premise systems to modern Cloud ERP environments.', tasks: ['40% reduction in infrastructure costs and 100% data integrity.'] },
      { title: 'Process Re-engineering & Advisory:', description: 'Optimizing your "Business Logic" before the software is installed. We align your workflows with industry best practices.', tasks: ['Maximum ROI by avoiding the "paving the cow path" mistake.'] }
    ]),
    roadmapHeadline: 'The "AxiomAI Advantage" (Methodology)',
    roadmap: addKeys([
      { step: '01', title: 'Platform Agnostic:', description: 'We aren\'t here to sell you a specific software license. We help you choose the platform that fits your 5-year roadmap.' },
      { step: '02', title: 'AI-First Architecture:', description: 'We ensure your ERP data is structured correctly to feed into modern LLMs and Agentic AI workflows.' },
      { step: '03', title: 'Fixed-Outcome Delivery:', description: 'We focus on measurable business KPIs (e.g., "Days Sales Outstanding" or "Order Cycle Time") rather than just "Technical Go-Live."' }
    ]),
    faqs: addKeys([
      { question: '1. Which ERP platform is right for my business: Microsoft, SAP, or Oracle?', answer: markdownToPortableText('There is no one-size-fits-all. SAP is often the choice for global conglomerates with complex manufacturing; Microsoft Dynamics is ideal for those heavily invested in the Microsoft ecosystem; Oracle/NetSuite is highly favored by finance-heavy and high-growth tech firms. Our Maturity Assessment helps you evaluate cost, fit, and scalability before you commit.') },
      { question: '2. How do you ensure our ERP data is "AI-Ready"?', answer: markdownToPortableText('Most legacy ERP data is siloed or messy. We implement a "Modern Data Layer" during the transformation, ensuring your master data is clean, indexed, and accessible for RAG (Retrieval-Augmented Generation) and predictive AI models from day one.') },
      { question: '3. What is a "Clean Core" strategy, and why does it matter for SAP/Microsoft?', answer: markdownToPortableText('A "Clean Core" means keeping your standard ERP software as close to the original code as possible, using external APIs and low-code platforms for customizations. This ensures that future software updates are easy and your system doesn\'t become a "black box" of technical debt.') },
      { question: '4. How do you handle the risks of data loss during an ERP migration?', answer: markdownToPortableText('We use a validated migration framework that includes automated data mapping, multi-stage testing, and "Mock Go-Lives." We ensure 100% reconciliation between your legacy system and the new platform before the switch is flipped.') },
      { question: '5. Can you help us optimize an ERP that is already live?', answer: markdownToPortableText('Absolutely. Many of our clients have already "gone live" but aren\'t seeing the expected ROI. We perform Post-Implementation Audits to identify process bottlenecks, underutilized features, and integration gaps that are slowing your team down.') },
      { question: '6. How long does a typical ERP transformation take?', answer: markdownToPortableText('While a full global rollout can take 12–18 months, we advocate for a Phased Modular Approach. We aim to get your "Core Finance" or "Critical Operations" live in 4–6 months, delivering immediate value while we migrate secondary business units in subsequent waves.') }
    ]),
    finalCta: {
      _type: 'hero',
      title: 'Stop Leaving ERP Value on the Table',
      description: 'Book a free strategy call. Get clarity on your Dynamics 365, SAP, or Oracle modernization path.',
      primaryCta: { text: 'Book Free Strategy Call', link: '/contact' }
    }
  });

  // ============== USE CASES PAGE ==============
  console.log('📊 Seeding Use Cases...');
  await client.createOrReplace({
    _id: 'useCasesPageSingleton',
    _type: 'useCasesPage',
    hero: {
      badge: 'Case Studies',
      title: 'Proven Impact: Enterprise AI & Data in Production',
      titleHighlight: '',
      description: 'Real-world results from the intersection of GenAI, ERP, and Predictive Analytics. See how we turn complex data into operational advantages.'
    },
    tabs: ['Cost Optimization', 'Growth & Revenue', 'Operational Excellence'],
    cases: addKeys([
      { caseNumber: 'Case 01', title: 'Demand Forecasting Engine', problem: 'High inventory carrying costs and stockouts due to fragmented regional data.', tools: ['Azure ML', 'Power BI', 'Dynamics 365 Supply Chain'], approach: 'Developed region-level predictive models that pull real-time signals from ERP and external market data.', impact: '25% improvement in forecast accuracy and a 12% reduction in overstock within 6 months.' },
      { caseNumber: 'Case 02', title: 'Executive Decision Dashboards (Data Modernization)', problem: 'Leadership was making decisions based on "month-old" PDF reports and siloed spreadsheets.', tools: ['Power BI Premium', 'Azure Synapse', 'DAX'], approach: 'Centralized 14 disparate data sources into a single Azure Lakehouse with automated KPI refreshes every 4 hours.', impact: '90% elimination of manual reporting hours and real-time visibility into global margin leakage.' },
      { caseNumber: 'Case 03', title: 'Customer Analytics & Segmentation', problem: 'Generic marketing spend with low ROI due to an inability to identify high-value "at-risk" customers.', tools: ['Azure AI', 'Dynamics 365 Customer Insights', 'Python'], approach: 'ML-driven segmentation using RFM (Recency, Frequency, Monetary) modeling and predictive Lifetime Value (LTV) scoring.', impact: '15% increase in customer retention and highly targeted personalization at scale.' },
      { caseNumber: 'Case 04', title: 'Supply Chain Optimization (The "Agentic" Angle)', problem: 'Procurement teams were reactive, only discovering vendor delays after they impacted production.', tools: ['Azure Databricks', 'AI Agents', 'Dynamics 365 SCM'], approach: 'An "Agentic" monitoring system that scans global risk signals and vendor history to predict bottlenecks before they occur.', impact: '18% reduction in inventory holding costs and a 22% improvement in on-time delivery.' },
      { caseNumber: 'Case 05', title: 'Enterprise Knowledge Assistant (GenAI + RAG)', problem: 'Support and Sales teams were spending 2+ hours a day searching through thousands of internal PDFs, Sharepoint folders, and technical manuals to answer client queries.', tools: ['Azure OpenAI', 'Pinecone', 'LangChain'], approach: 'Built a Retrieval-Augmented Generation (RAG) "Knowledge Engine" that indexes all unstructured company data with enterprise-grade security and citation tracking.', impact: '80% reduction in document search time and a 30% improvement in first-call resolution for technical support teams.' },
      { caseNumber: 'Case 06', title: 'Automated Financial Reconciliation', problem: 'Finance teams were manually matching bank statements to ERP invoices across 12 international entities, leading to month-end closing delays and human error.', tools: ['Python', 'Power Automate', 'Dynamics 365 Finance'], approach: 'An Intelligent Automation layer that uses fuzzy matching and ML to reconcile 95% of transactions automatically, flagging only high-risk anomalies for human review.', impact: 'Month-end close shortened by 4 days and 100% audit-readiness with automated transaction logging.' }
    ]),
    midPageCta: {
      _type: 'hero',
      title: 'Have a Similar Challenge?',
      description: 'These aren\'t just one-off projects; they are blueprints for your transformation. We can adapt any of these models to your specific ERP and data landscape in 6–8 weeks.',
      primaryCta: { text: 'Discuss a Use Case', link: '/contact' }
    },
    pocOffer: {
      title: 'The 6-8 Week Pilot Guarantee',
      description: 'Don\'t commit to a year-long roadmap. Pick one high-impact use case above, and we will build a working POC in your environment in 6 weeks to prove the ROI.'
    }
  });

  // ============== SUSTAINABILITY PAGE ==============
  console.log('🌱 Seeding Sustainability Page...');
  await client.createOrReplace({
    _id: 'sustainabilityPageSingleton',
    _type: 'sustainabilityPage',
    hero: {
      badge: 'ESG & Efficiency',
      title: 'Make Sustainability Operational and Measurable',
      titleHighlight: '',
      description: 'Leverage AI and enterprise data to transform carbon tracking, ESG reporting, and sustainability initiatives into measurable, business-driven outcomes. Move beyond compliance—build operational efficiency and real ROI.',
      primaryCta: { text: 'Start Sustainability Pilot', link: '/contact' },
      secondaryCta: { text: 'Talk to a Sustainability Expert', link: '/services' }
    },
    tags: ['Sustainable AI Modules & Capabilities', 'Carbon Tracker', 'ESG Engine'],
    pitfallsHeadline: 'Why Sustainability Efforts Struggle',
    pitfalls: addKeys([
      { title: 'Manual ESG & Carbon Reporting:', description: 'Heavy reliance on spreadsheets and disconnected workflows leads to errors, delays, and audit risks. Business Impact: High operational overhead with low data reliability.' },
      { title: 'Fragmented Emissions Data:', description: 'Carbon data is scattered across ERP systems, vendors, utilities, and manual inputs. Business Impact: No single source of truth for decision-making.' },
      { title: 'Limited Operational Visibility:', description: 'Lack of real-time tracking makes it difficult to act on emissions, inefficiencies, or waste. Business Impact: Missed optimization opportunities and delayed action.' },
      { title: 'No Measurable ROI Tracking:', description: 'Sustainability is often treated as a compliance cost rather than a performance driver. Business Impact: Leadership struggles to justify investments.' }
    ]),
    layersHeadline: 'Sustainable AI Modules',
    layers: addKeys([
      { title: 'Carbon Visibility Dashboard:', description: 'Real-time tracking of emissions across Scope 1, 2, and 3 with direct ERP and data system integrations.', tasks: ['Complete transparency with accurate, audit-ready reporting.'] },
      { title: 'ESG Reporting Automation:', description: 'Automated, AI-driven ESG reporting aligned with global standards (BRSR, CSRD, SEC).', tasks: ['Reduced reporting effort and improved compliance accuracy.'] },
      { title: 'Emission Forecasting:', description: 'AI/ML models simulate the impact of operational decisions on future carbon footprint.', tasks: ['Data-driven sustainability planning and smarter investments.'] },
      { title: 'Green Supply Chain Insights:', description: 'Identify high-emission suppliers and optimize procurement decisions for sustainability.', tasks: ['Reduced supply chain emissions and stronger vendor accountability.'] }
    ]),
    roadmapHeadline: 'The "Sync Origins Advantage"',
    roadmap: addKeys([
      { step: '01', title: 'AI + Data-First Approach:', description: 'We combine deep data engineering with AI models to move sustainability from reporting to real-time optimization.' },
      { step: '02', title: 'ERP & Enterprise Integration:', description: 'Seamless integration with systems like SAP, Microsoft, and Oracle to extract accurate operational data.' },
      { step: '03', title: 'Outcome-Driven Sustainability:', description: 'We focus on measurable KPIs like emission reduction, cost savings, and reporting efficiency—not just dashboards.' },
      { step: '04', title: 'Pilot-to-Scale Model:', description: 'Start small, prove ROI, and scale confidently across the enterprise.' },
      { step: '05', title: 'Regulatory-Ready Frameworks:', description: 'Built to align with evolving global ESG standards and compliance requirements.' }
    ]),
    faqs: addKeys([
      { question: '1. How is AI used in sustainability and carbon tracking?', answer: markdownToPortableText('AI helps automate data collection, identify emission patterns, and simulate future scenarios. It transforms sustainability from static reporting into predictive and actionable intelligence.') },
      { question: '2. What are Scope 1, 2, and 3 emissions?', answer: markdownToPortableText('Scope 1 covers direct emissions, Scope 2 includes purchased energy, and Scope 3 involves supply chain and indirect emissions. Most organizations struggle primarily with Scope 3 visibility.') },
      { question: '3. How do you integrate sustainability with existing ERP systems?', answer: markdownToPortableText('We connect directly to ERP, finance, and operational systems to extract real-time data, ensuring accurate and automated carbon tracking without manual effort.') },
      { question: '4. Can sustainability initiatives actually deliver ROI?', answer: markdownToPortableText('Yes. By identifying inefficiencies in energy, operations, and supply chains, sustainability initiatives can reduce costs while improving compliance and brand value.') },
      { question: '5. How long does it take to implement a sustainability solution?', answer: markdownToPortableText('Initial pilots can be deployed within 4–8 weeks, focusing on a specific use case to demonstrate measurable impact before scaling.') },
      { question: '6. Do you support ESG compliance frameworks?', answer: markdownToPortableText('Yes. We align reporting with frameworks like BRSR (India), CSRD (Europe), and SEC climate disclosures (US).') }
    ]),
    finalCta: {
      _type: 'hero',
      title: 'Turn Sustainability Into a Business Advantage',
      description: 'Start with a focused pilot. Measure real impact. Scale sustainability across your enterprise with confidence.',
      primaryCta: { text: 'Schedule Sustainability Discussion', link: '/contact' }
    }
  });

  // ============== MANAGED DELIVERY PAGE ==============
  console.log('🚀 Seeding Managed Delivery Page...');
  await client.createOrReplace({
    _id: 'managedDeliveryPageSingleton',
    _type: 'managedDeliveryPage',
    hero: {
        badge: 'Managed Delivery',
        title: 'Managed Delivery: From Hiring Chaos to Outcome-Driven Execution',
        titleHighlight: '',
        description: 'We build, manage, and scale high-performance teams across AI, ERP, and Data. From individual specialists to fully managed delivery pods, we ensure execution speed, quality, and alignment with your business goals.',
        primaryCta: { text: 'Build Your Team', link: '/contact' },
        secondaryCta: { text: 'Talk to a Delivery Expert', link: '/services' }
    },
    tags: ['Specialist Talent Augmentation', 'Managed Project Teams', 'Offshore Delivery Centers'],
    pitfallsHeadline: 'Why Insourcing Alone Can Lead to Backlogs',
    pitfalls: addKeys([
      { title: 'Hiring Bottlenecks', description: 'Taking 3+ months to recruit and onboard senior engineers causes massive project delays.' },
      { title: 'Lack of Domain Breadth', description: 'Modern technology requires multifaceted knowledge that in-house teams often lack.' },
      { title: 'Knowledge Silos', description: 'Heavy dependency on a few key developers risks catastrophic operational fallout.' }
    ]),
    layersHeadline: 'Managed Delivery Service Models',
    layers: addKeys([
      { title: 'Specialist Talent Augmentation:', description: 'On-demand access to senior AI engineers, ERP consultants, and data specialists to fill critical capability gaps instantly.', tasks: ['Reduce hiring time from months to days while maintaining top-tier quality.'] },
      { title: 'Managed Project Teams:', description: 'Dedicated cross-functional teams (PM, developers, QA, DevOps) fully accountable for delivery outcomes.', tasks: ['Faster execution with 40–60% lower internal management overhead.'] },
      { title: 'Offshore Delivery Centers:', description: 'Custom-built engineering hubs aligned with your tech stack, processes, and culture.', tasks: ['Significant cost optimization with consistent, scalable output.'] },
      { title: 'End-to-End Delivery Ownership:', description: 'From planning to deployment and post-launch support, we take complete ownership of execution.', tasks: ['Predictable delivery timelines and measurable business outcomes.'] },
      { title: 'Agile Transformation & Delivery Advisory:', description: 'We redesign your delivery processes for speed, transparency, and scalability.', tasks: ['Improved velocity, better sprint predictability, and stronger team performance.'] }
    ]),
    roadmapHeadline: 'The "Sync Origins Advantage"',
    roadmap: addKeys([
      { step: '01', title: 'Pre-Vetted Talent Network:', description: 'We don’t source—we deliver ready-to-perform experts who are technically and culturally aligned.' },
      { step: '02', title: 'Outcome-First Engagement:', description: 'We align delivery with business KPIs, not just resource allocation or timelines.' },
      { step: '03', title: 'AI, ERP & Data Expertise:', description: 'Deep specialization across high-impact domains—not generic IT staffing.' },
      { step: '04', title: 'Rapid Deployment Engine:', description: 'Get interview-ready candidates within 48–72 hours and fully functional teams within weeks.' },
      { step: '05', title: 'Flexible Scaling Models:', description: 'Scale teams up or down based on project needs without operational friction.' }
    ]),
    faqs: addKeys([
      { question: '1. What is the difference between staff augmentation and managed delivery?', answer: markdownToPortableText('Staff augmentation provides individual resources, while managed delivery includes full ownership of outcomes, timelines, and execution. Sync Origin focuses on outcome-driven delivery rather than just filling roles.') },
      { question: '2. How quickly can you deploy a team?', answer: markdownToPortableText('We typically provide shortlisted, pre-vetted candidates within 48–72 hours. Full teams can be deployed within 1–3 weeks depending on project complexity.') },
      { question: '3. How do you ensure quality and accountability in managed teams?', answer: markdownToPortableText('We assign delivery managers, define clear KPIs, and implement structured reporting, sprint tracking, and performance monitoring frameworks to ensure consistent quality.') },
      { question: '4. Can you work with our existing in-house teams?', answer: markdownToPortableText('Yes. Our teams are designed to integrate seamlessly with your internal teams, tools, and workflows, acting as an extension rather than a replacement.') },
      { question: '5. What industries and technologies do you specialize in?', answer: markdownToPortableText('We specialize in AI, ERP (Microsoft, SAP, Oracle), and Data Engineering across industries like manufacturing, finance, and technology.') },
      { question: '6. How do you handle communication and timezone challenges?', answer: markdownToPortableText('We ensure strong timezone overlap, structured communication cadences, and cultural alignment to enable smooth collaboration across geographies.') }
    ]),
    finalCta: {
      _type: 'hero',
      title: 'Need the Right Team, Without the Hiring Delays?',
      description: 'Tell us your requirements and get matched with pre-vetted specialists or fully managed teams within 48 hours.',
      primaryCta: { text: 'Book Free Consultation', link: '/contact' }
    }
  });

  console.log('✅ Seeding Complete!');
}

reseed().catch(err => {
  console.error('❌ Seeding Failed:', err);
  process.exit(1);
});
