import { createClient } from 'next-sanity';
import fs from 'fs';
import path from 'path';

require('dotenv').config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN || process.env.SANITY_API_TOKEN, // Ensure this has write permissions
});

function markdownToPortableText(markdown: string) {
  const blocks: any[] = [];
  const lines = markdown.split('\n');
  let currentParagraph: string[] = [];
  
  const pushParagraph = () => {
    if (currentParagraph.length > 0) {
        let text = currentParagraph.join('\n').replace(/__/g, '').replace(/\\-/g, '-');
        
        let style = 'normal';
        if (text.startsWith('1. ') || text.startsWith('2. ') || text.startsWith('3. ') || text.match(/^\d\.\d/)) {
            style = 'h3';
            text = text.replace(/^\d\.\d?\s?/, '');
        }

        blocks.push({
            _key: Math.random().toString(36).substring(7),
            _type: 'block',
            style: style,
            children: [{ _key: Math.random().toString(36).substring(7), _type: 'span', marks: [], text: text }]
        });
        currentParagraph = [];
    }
  };

  for (let line of lines) {
    if (line.trim() === '') {
      pushParagraph();
    } else if (line.startsWith('- ')) {
      pushParagraph();
      blocks.push({
        _key: Math.random().toString(36).substring(7),
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        level: 1,
        children: [{ _key: Math.random().toString(36).substring(7), _type: 'span', marks: [], text: line.replace('- ', '').replace(/__/g, '').replace(/\\-/g, '-') }]
      });
    } else {
      currentParagraph.push(line);
    }
  }
  pushParagraph();
  return blocks;
}

// Helper to add unique _key to items in an array
function addKeys(arr: any[]) {
  if (!arr || !Array.isArray(arr)) return arr;
  return arr.map(item => {
    const newItem = { ...item, _key: Math.random().toString(36).substring(7) };
    // Recursively add keys to known nested arrays
    if (newItem.sections && Array.isArray(newItem.sections)) {
      newItem.sections = newItem.sections.map((sec: any) => ({
        ...sec,
        _key: Math.random().toString(36).substring(7),
        tasks: sec.tasks && Array.isArray(sec.tasks) ? sec.tasks.map((t: any) => t) : []
      }));
    }
    return newItem;
  });
}


async function seed() {
  if (!process.env.NEXT_PUBLIC_SANITY_TOKEN && !process.env.SANITY_API_TOKEN) {
    console.error("Missing NEXT_PUBLIC_SANITY_TOKEN. Please set it in .env.local");
    process.exit(1);
  }

  console.log("Seeding Privacy Policy and Terms of Usage...");
  const privacyText = fs.readFileSync(path.join(process.cwd(), 'privacy_policy.md'), 'utf8');
  const termsText = fs.readFileSync(path.join(process.cwd(), 'terms_of_usage.md'), 'utf8');

  await client.createOrReplace({
    _id: 'privacyPolicySingleton',
    _type: 'privacyPolicy',
    title: 'Privacy Policy',
    lastUpdated: new Date().toISOString().split('T')[0],
    content: markdownToPortableText(privacyText)
  });

  await client.createOrReplace({
    _id: 'termsOfUsageSingleton',
    _type: 'termsOfUsage',
    title: 'Terms of Usage',
    lastUpdated: new Date().toISOString().split('T')[0],
    content: markdownToPortableText(termsText)
  });

  console.log("Seeding Structured Pages...");

  await client.createOrReplace({
    _id: 'homePageSingleton',
    _type: 'homePage',
    heroTitle: 'Architecting the Intelligent Enterprise',
    heroTitleHighlight: '',
    heroDescription: 'We bridge the gap between AI strategy and production-ready execution. Scalable GenAI, Data, and ERP transformations with governance, clarity, and measurable ROI.',
    introductionCta: { text: 'Start Your AI Pilot', link: '/contact' },
    featuresTitle: 'Escape the "Pilot Purgatory"',
    featuresDescription: 'We resolve why digital transformations fail.',
    features: addKeys([
        { title: 'GenAI Pilots That Never Scale', description: markdownToPortableText('Most experiments die in the "chat" phase because they lack enterprise-grade RAG and governance.') },
        { title: 'ERP Projects Over Budget', description: markdownToPortableText('Disconnects between business intent and technical delivery lead to costly scope creep.') },
        { title: 'Data Silos Block AI', description: markdownToPortableText('Without a unified data lakehouse, even the best AI models provide unreliable insights.') }
    ]),
    trustTitle: 'Enterprise-grade AI Solutions (What We Do)',
    trustDescription: 'We build autonomous agents and RAG systems that integrate directly into your core business workflows.',
    trustCards: addKeys([
        {
          title: 'GenAI & Agentic AI',
          description: 'Beyond chatbots. We build autonomous agents and RAG systems that integrate directly into your core business workflows.',
          link: '/ai-implementation',
          tags: ['Generative AI & RAG', 'Agentic AI', 'Autonomous AI Systems']
        },
        {
          title: 'Data & Analytics',
          description: 'From fragmented data to a "Single Source of Truth." Modern data warehousing and predictive intelligence for real-time decisioning.',
          link: '/data-analytics',
          tags: ['Enterprise Data Lakehouse & Warehousing', 'Predictive & Advanced Analytics', 'Data Governance & Quality']
        },
        {
          title: 'ERP & Tech Modernization',
          description: 'Aligning your core systems (SAP, Oracle, Microsoft Dynamics) with modern AI capabilities to eliminate manual overhead.',
          link: '/erp-transformation',
          tags: ['Microsoft Dynamics 365 (BC & F&O)', 'SAP S/4HANA Strategy', 'Oracle Cloud & NetSuite']
        }
    ]),
    processTitle: 'The 3 Phases Path to Production',
    processDescription: 'A structured methodology for GenAI, ERP, and Data initiatives.',
    process: addKeys([
        { step: '01', title: 'Strategic Discovery', description: 'We identify high-impact use cases and assess your data maturity in a 2-week diagnostic.' },
        { step: '02', title: 'The Pilot Blueprint', description: 'A 6–8 week proof-of-concept focused on a single, measurable KPI to prove value fast.' },
        { step: '03', title: 'Enterprise Scale', description: 'Seamless integration of the proven pilot into your global operations with full governance and monitoring.' }
    ]),
    personasTitle: 'Built for Enterprise Leaders',
    personasDescription: '',
    personas: addKeys([
        { title: 'For CXOs & Board', description: markdownToPortableText('Protect your investment. We provide independent oversight to ensure AI and ERP spend translates to the bottom line.') },
        { title: 'For CIOs & CTOs', description: markdownToPortableText('Scale without the friction. We provide the senior talent and architectural framework to accelerate your roadmap.') },
        { title: 'For Enterprise Architects', description: markdownToPortableText('Build for the future. We help you design composable, AI-ready architectures that don\'t add to your technical debt.') },
        { title: 'Data Leaders', description: markdownToPortableText('Data strategy alignment with AI ambitions.') }
    ]),
    faqTitle: 'Built for Enterprise Leaders',
    faqs: addKeys([
        { question: 'CXOs & Board', answer: markdownToPortableText('Protect your investment. We provide independent oversight to ensure AI and ERP spend translates to the bottom line.') },
        { question: 'CIOs & CTOs', answer: markdownToPortableText('Scale without the friction. We provide the senior talent and architectural framework to accelerate your roadmap.') },
        { question: 'Enterprise Architects', answer: markdownToPortableText("Build for the future. We help you design composable, AI-ready architectures that don't add to your technical debt.") },
        { question: 'Data Leaders', answer: markdownToPortableText('Data strategy alignment with AI ambitions.') }
    ]),
    finalCTA: {
        title: 'Stop Guessing. Start Scaling.',
        description: 'Schedule a 45-minute Strategy Audit. No sales pitch—just actionable insights on your GenAI, ERP, or data roadmap.',
        cta: { text: 'Book My Strategy Audit', link: '/contact' }
    }
  });

  await client.createOrReplace({
    _id: 'servicesPageSingleton',
    _type: 'servicesPage',
    title: 'AI, Data & ERP',
    titleHighlight: 'Done Right',
    badgeText: 'Services',
    description: 'Advisory-led. Outcome-driven. Enterprise-grade.',
    finalCTA: {
      title: 'Not sure where to start?',
      description: "Book a free strategy call. We'll identify the highest-impact opportunities.",
      cta: { text: 'Book Free Strategy Call', link: '/contact' }
    }
  });

  await client.createOrReplace({
    _id: 'aiImplementationPageSingleton',
    _type: 'aiImplementationPage',
    badgeText: 'Enterprise AI Platform',
    title: 'Turn AI into a Measurable Business Asset',
    description: 'Beyond the hype. We build production-grade AI platforms that integrate with your ERP and core data systems to drive operational ROI.',
    heroCTA: { text: 'Start 6-Week AI Pilot', link: '/contact' },
    secondaryCTA: { text: 'View AI Roadmap Services', link: '/services' },
    introTitle: 'Why AI Initiatives Stall',
    introSubtitle: 'Recognise the pattern. Then break it.',
    serviceAreasTitle: 'Our Enterprise AI Stack',
    serviceAreasDescription: 'Four integrated layers - from generative intelligence to autonomous decision-making.',
    whyChooseSectionTitle: 'Industry Use Cases with POC Model',
    processSectionTitle: 'From Pilot to Platform',
    processSectionDescription: 'A structured path from proof-of-concept to enterprise-wide deployment.',
    engagementSectionTitle: 'Deployment Models',
    faqSectionTitle: 'Frequently Asked Questions',
    whyChooseUs: addKeys([
        { title: 'The "Chat" Trap', description: 'LLM experiments that lack a production roadmap or business logic.' },
        { title: 'Disconnected RAG', description: 'Knowledge systems that lack access to live enterprise data silos.' },
        { title: 'The Integration Gap', description: 'AI models operating in isolation without ERP or CRM connectivity.' },
        { title: 'Governance Blind Spots', description: 'Lack of monitoring, security protocols, and audit trails.' },
        { title: 'ROI Uncertainty', description: 'Massive investment with no clear path to measurable value.' }
    ]),
    serviceAreas: addKeys([
        { name: 'Generative AI & RAG', focus: 'Knowledge Velocity. Convert unstructured PDFs and emails into an instantly searchable intelligence base.', sections: [] },
        { name: 'Agentic AI', focus: 'Operational Speed. Deploy task-driven agents that manage multi-step workflows across your business apps.', sections: [] },
        { name: 'Autonomous AI Systems', focus: 'Predictive Certainty. Self-optimizing engines that forecast demand, schedule production, and flag risk automatically.', sections: [] },
        { name: 'Governance & Observability', focus: 'Total Compliance. Full visibility into model performance, costs, and data security.', sections: [] }
    ]),
    industryUseCases: addKeys([
        { title: 'Manufacturing', description: 'Autonomous Shop Floor Scheduling. Reduce planning cycles by 40% with AI-driven material allocation.' },
        { title: 'Financial Services', description: 'Compliance & Regulatory Knowledge Base. Automate audit preparation and high-precision document review.' },
        { title: 'Retail', description: 'Hyper-Local Demand Forecasting. Eliminate stock imbalances using live market signals and ERP inventory data.' },
        { title: 'Supply Chain', description: 'Multi-Agent Vendor Risk Monitoring. Real-time disruption alerts through global news and logistical signal tracking.' }
    ]),
    process: addKeys([
        { title: 'The 6-Week Sprint', description: 'Rapid prototyping of a high-impact use case.' },
        { title: 'KPI Verification', description: 'Measuring the pilot against pre-defined ROI targets.' },
        { title: 'Integration Engineering', description: 'Mapping the AI to your existing ERP and Data stacks.' },
        { title: 'Secure Rollout', description: 'Deploying with enterprise-grade security and user training.' },
        { title: 'Managed Evolution', description: 'Continuous monitoring and model fine-tuning for long-term value.' }
    ]),
    deploymentModels: addKeys([
        { title: 'Strategic Advisory', description: 'Designing your 12-month AI roadmap.' },
        { title: 'Rapid POC', description: 'Delivering a functional pilot in 6 weeks.' },
        { title: 'Full-Scale Implementation', description: 'End-to-end platform deployment.' },
        { title: 'Managed AI Service', description: 'Ongoing performance tuning and governance.' }
    ]),
    finalCTA: {
        title: 'Stop Experimenting. Start Implementing.',
        description: 'Book a strategy session to see how we can turn your data into an autonomous competitive advantage.',
        cta: { text: 'Schedule Executive Discussion', link: '/contact' }
    },
    faqs: addKeys([
        { question: 'How long does a typical AI implementation take?', answer: markdownToPortableText('We prioritize speed to value. Our 6–8 week Proof of Concept (POC) is designed to move a specific use case from ideation to a functional pilot. Full enterprise-wide deployment typically follows in 3–6 months, depending on the complexity of your data architecture.') },
        { question: 'How do you handle data security and privacy with LLMs?', answer: markdownToPortableText('Security is our first priority. We build Private AI Environments using enterprise-grade cloud providers (Azure OpenAI, AWS Bedrock). Your proprietary data is never used to train public models, and all data remains within your existing security perimeter with full encryption and SOC2 compliance.') },
        { question: 'Can your AI agents integrate with my existing ERP (SAP, Oracle, Dynamics)?', answer: markdownToPortableText('Yes. Unlike "standalone" chatbots, our Agentic AI is built to bridge the gap between LLMs and transactional systems. We use secure API layers and middleware to ensure the AI can read from and write to your ERP, making it a functional part of your operations.') },
        { question: 'What is the difference between Generative AI and Agentic AI?', answer: markdownToPortableText('Generative AI focuses on content and knowledge retrieval (like answering questions from a PDF). Agentic AI goes a step further—it can execute tasks. For example, an Agentic system doesn\'t just tell you that inventory is low; it can draft a purchase order in your ERP for your approval.') },
        { question: 'How do we measure the ROI of an AI project?', answer: markdownToPortableText('Before writing a single line of code, we define Success Metrics. Common KPIs include reduction in manual processing hours, improvement in forecast accuracy, or faster first-response times in customer service. We monitor these via a real-time ROI dashboard throughout the pilot.') },
        { question: 'Do we need a massive data cleanup before starting with AI?', answer: markdownToPortableText('While "clean data" is ideal, our RAG (Retrieval-Augmented Generation) approach allows us to extract value from unstructured data (PDFs, emails, manuals) immediately. We help you build a "Data Foundation" in parallel with your AI pilot so you don\'t have to wait months to see results.') }
    ])
  });

  await client.createOrReplace({
    _id: 'erpTransformationPageSingleton',
    _type: 'erpTransformationPage',
    badgeText: 'ERP Transformation',
    title: 'ERP Transformation',
    description: 'We design and deploy high-performance ERP ecosystems across Microsoft Dynamics 365, SAP S/4HANA, and Oracle NetSuite/Cloud. We don\'t just go live; we ensure your core systems are AI-ready and business-aligned.',
    introTitle: 'ERP Transformation: From Legacy Systems to Intelligent Operations',
    heroCTA: { text: 'Get ERP Maturity Assessment', link: '/contact' },
    secondaryCTA: { text: 'Talk to an ERP Architect', link: '/services' },
    whyChooseSectionTitle: 'The AxiomAI Advantage',
    faqSectionTitle: 'Frequently Asked Questions',
    serviceAreas: addKeys([
        { name: 'Microsoft Dynamics 365 (BC & F&O)', focus: 'End-to-end implementation and optimization for agile mid-market and global enterprises.', sections: [{title: 'Business Impact', tasks: ['Seamless integration with the Microsoft Power Platform and AI Copilots.']}] },
        { name: 'SAP S/4HANA Strategy', focus: 'Guiding complex migrations from ECC to S/4HANA. We focus on "Clean Core" principles to reduce technical debt.', sections: [{title: 'Business Impact', tasks: ['Standardized global processes with robust, scalable reporting.']}] },
        { name: 'Oracle Cloud & NetSuite', focus: 'Rapid deployment and customization of Oracle’s cloud suites for finance-led organizations and high-growth companies.', sections: [{title: 'Business Impact', tasks: ['Real-time financial visibility and automated global consolidation.']}] },
        { name: 'Cross-Platform ERP Migration', focus: 'Zero-disruption transition from legacy on-premise systems to modern Cloud ERP environments.', sections: [{title: 'Business Impact', tasks: ['40% reduction in infrastructure costs and 100% data integrity.']}] },
        { name: 'Process Re-engineering & Advisory', focus: 'Optimizing your "Business Logic" before the software is installed. We align your workflows with industry best practices.', sections: [{title: 'Business Impact', tasks: ['Maximum ROI by avoiding the "paving the cow path" mistake.']}] }
    ]),
    whyChooseUs: addKeys([
        { title: 'Platform Agnostic', description: 'We aren\'t here to sell you a specific software license. We help you choose the platform that fits your 5-year roadmap.' },
        { title: 'AI-First Architecture', description: 'We ensure your ERP data is structured correctly to feed into modern LLMs and Agentic AI workflows.' },
        { title: 'Fixed-Outcome Delivery', description: 'We focus on measurable business KPIs (e.g., "Days Sales Outstanding" or "Order Cycle Time") rather than just "Technical Go-Live."' }
    ]),
    faqs: addKeys([
        { question: 'Which ERP platform is right for my business: Microsoft, SAP, or Oracle?', answer: markdownToPortableText('There is no one-size-fits-all. SAP is often the choice for global conglomerates with complex manufacturing; Microsoft Dynamics is ideal for those heavily invested in the Microsoft ecosystem; Oracle/NetSuite is highly favored by finance-heavy and high-growth tech firms. Our Maturity Assessment helps you evaluate cost, fit, and scalability before you commit.') },
        { question: 'How do you ensure our ERP data is "AI-Ready"?', answer: markdownToPortableText('Most legacy ERP data is siloed or messy. We implement a "Modern Data Layer" during the transformation, ensuring your master data is clean, indexed, and accessible for RAG (Retrieval-Augmented Generation) and predictive AI models from day one.') },
        { question: 'What is a "Clean Core" strategy, and why does it matter for SAP/Microsoft?', answer: markdownToPortableText('A "Clean Core" means keeping your standard ERP software as close to the original code as possible, using external APIs and low-code platforms for customizations. This ensures that future software updates are easy and your system doesn\'t become a "black box" of technical debt.') },
        { question: 'How do you handle the risks of data loss during an ERP migration?', answer: markdownToPortableText('We use a validated migration framework that includes automated data mapping, multi-stage testing, and "Mock Go-Lives." We ensure 100% reconciliation between your legacy system and the new platform before the switch is flipped.') },
        { question: 'Can you help us optimize an ERP that is already live?', answer: markdownToPortableText('Absolutely. Many of our clients have already "gone live" but aren\'t seeing the expected ROI. We perform Post-Implementation Audits to identify process bottlenecks, underutilized features, and integration gaps that are slowing your team down.') },
        { question: 'How long does a typical ERP transformation take?', answer: markdownToPortableText('While a full global rollout can take 12–18 months, we advocate for a Phased Modular Approach. We aim to get your "Core Finance" or "Critical Operations" live in 4–6 months, delivering immediate value while we migrate secondary business units in subsequent waves.') },
        { question: 'Is modern Cloud ERP really more secure than our On-Premise servers?', answer: markdownToPortableText('Statistically, yes. Cloud providers like Microsoft, SAP, and Oracle spend billions annually on cybersecurity that no individual enterprise can match. We ensure your cloud ERP is configured with Zero Trust Architecture, multi-factor authentication, and automated audit logs to exceed global compliance standards.') }
    ]),
    finalCTA: {
        title: 'Stop Leaving ERP Value on the Table',
        description: 'Book a free strategy call. Get clarity on your Dynamics 365, SAP, or Oracle modernization path.',
        cta: { text: 'Book Free Strategy Call', link: '/contact' }
    }
  });

  await client.createOrReplace({
    _id: 'managedDeliveryPageSingleton',
    _type: 'managedDeliveryPage',
    badgeText: 'Managed Delivery',
    title: 'Managed Delivery',
    description: 'We build, manage, and scale high-performance teams across AI, ERP, and Data. From individual specialists to fully managed delivery pods, we ensure execution speed, quality, and alignment with your business goals.',
    introTitle: 'Managed Delivery: From Hiring Chaos to Outcome-Driven Execution',
    heroCTA: { text: 'Build Your Team', link: '/contact' },
    secondaryCTA: { text: 'Talk to a Delivery Expert', link: '/services' },
    whyChooseSectionTitle: 'The AxiomAI Advantage',
    faqSectionTitle: 'Frequently Asked Questions',
    serviceAreas: addKeys([
        { name: 'Specialist Talent Augmentation', focus: 'On-demand access to senior AI engineers, ERP consultants, and data specialists to fill critical capability gaps instantly.', sections: [{title: 'Business Impact', tasks: ['Reduce hiring time from months to days while maintaining top-tier quality.']}] },
        { name: 'Managed Project Teams', focus: 'Dedicated cross-functional teams (PM, developers, QA, DevOps) fully accountable for delivery outcomes.', sections: [{title: 'Business Impact', tasks: ['Faster execution with 40–60% lower internal management overhead.']}] },
        { name: 'Offshore Delivery Centers', focus: 'Custom-built engineering hubs aligned with your tech stack, processes, and culture.', sections: [{title: 'Business Impact', tasks: ['Significant cost optimization with consistent, scalable output.']}] },
        { name: 'End-to-End Delivery Ownership', focus: 'From planning to deployment and post-launch support, we take complete ownership of execution.', sections: [{title: 'Business Impact', tasks: ['Predictable delivery timelines and measurable business outcomes.']}] },
        { name: 'Agile Transformation & Delivery Advisory', focus: 'We redesign your delivery processes for speed, transparency, and scalability.', sections: [{title: 'Business Impact', tasks: ['Improved velocity, better sprint predictability, and stronger team performance.']}] }
    ]),
    whyChooseUs: addKeys([
        { title: 'Pre-Vetted Talent Network', description: 'We don’t source—we deliver ready-to-perform experts who are technically and culturally aligned.' },
        { title: 'Outcome-First Engagement', description: 'We align delivery with business KPIs, not just resource allocation or timelines.' },
        { title: 'AI, ERP & Data Expertise', description: 'Deep specialization across high-impact domains—not generic IT staffing.' },
        { title: 'Rapid Deployment Engine', description: 'Get interview-ready candidates within 48–72 hours and fully functional teams within weeks.' },
        { title: 'Flexible Scaling Models', description: 'Scale teams up or down based on project needs without operational friction.' }
    ]),
    faqs: addKeys([
        { question: 'What is the difference between staff augmentation and managed delivery?', answer: markdownToPortableText('Staff augmentation provides individual resources, while managed delivery includes full ownership of outcomes, timelines, and execution. Sync Origin focuses on outcome-driven delivery rather than just filling roles.') },
        { question: 'How quickly can you deploy a team?', answer: markdownToPortableText('We typically provide shortlisted, pre-vetted candidates within 48–72 hours. Full teams can be deployed within 1–3 weeks depending on project complexity.') },
        { question: 'How do you ensure quality and accountability in managed teams?', answer: markdownToPortableText('We assign delivery managers, define clear KPIs, and implement structured reporting, sprint tracking, and performance monitoring frameworks to ensure consistent quality.') },
        { question: 'Can you work with our existing in-house teams?', answer: markdownToPortableText('Yes. Our teams are designed to integrate seamlessly with your internal teams, tools, and workflows, acting as an extension rather than a replacement.') },
        { question: 'What industries and technologies do you specialize in?', answer: markdownToPortableText('We specialize in AI, ERP (Microsoft, SAP, Oracle), and Data Engineering across industries like manufacturing, finance, and technology.') },
        { question: 'How do you handle communication and timezone challenges?', answer: markdownToPortableText('We ensure strong timezone overlap, structured communication cadences, and cultural alignment to enable smooth collaboration across geographies.') }
    ]),
    finalCTA: {
        title: 'Need the Right Team, Without the Hiring Delays?',
        description: 'Tell us your requirements and get matched with pre-vetted specialists or fully managed teams within 48 hours.',
        cta: { text: 'Book Free Consultation', link: '/contact' }
    }
  });

  console.log("Seeding Data Analytics...");
  await client.createOrReplace({
    _id: 'dataAnalyticsPageSingleton',
    _type: 'dataAnalyticsPage',
    badgeText: 'Data & Analytics',
    title: 'Data & Analytics',
    description: 'Transform raw data into a strategic asset. We build robust data warehousing, governance, and analytics platforms that empower decision-makers and fuel AI.',
    introTitle: 'Data Engineering: The Foundation of Intelligence',
    heroCTA: { text: 'Audit Your Data Stack', link: '/contact' },
    secondaryCTA: { text: 'Explore Analytics Solutions', link: '/services' },
    processSectionTitle: 'From Audit to Intelligence',
    processSectionDescription: 'Our structured 4-phase rollout ensures safe and measurable value at every stage.',
    serviceAreas: addKeys([
      { name: 'Enterprise Data Lakehouse & Warehousing', focus: 'Centralizing siloed data into high-performance cloud architectures (Databricks, Snowflake, Azure Synapse).', sections: [{ title: 'Business Impact', tasks: ['Eliminate disjointed reporting and establish a single source of truth.'] }] },
      { name: 'Predictive & Advanced Analytics', focus: 'Going beyond historical reporting with ML models that forecast demand, churn, and operational bottlenecks.', sections: [{ title: 'Business Impact', tasks: ['Shift from reactive reporting to proactive decision-making.'] }] },
      { name: 'Data Governance & Quality', focus: 'Implementing master data management (MDM) and quality controls to ensure data is trustworthy, secure, and compliant.', sections: [{ title: 'Business Impact', tasks: ['Reduce regulatory risk and increase leadership confidence in metrics.'] }] },
      { name: 'Dashboarding & Business Intelligence', focus: 'Designing intuitive Power BI and Tableau dashboards tailored for executive, operational, and financial teams.', sections: [{ title: 'Business Impact', tasks: ['Increase data literacy and accelerate executive reporting.'] }] }
    ]),
    process: addKeys([
      { title: 'The Data Audit', description: 'Assessing your current architecture, data silos, and quality gaps.' },
      { title: 'Foundation & Pipeline Design', description: 'Building scalable ELT pipelines and cloud storage solutions.' },
      { title: 'Analytics & BI Rollout', description: 'Delivering the first high-impact dashboard within 4 weeks.' },
      { title: 'Data Governance Enforcement', description: 'Securing data access and establishing long-term quality standards.' }
    ]),
    finalCTA: {
      title: 'Stop Reporting on the Past',
      description: 'Book a Data Architecture review to see how we can modernize your stack and accelerate your time-to-insight.',
      cta: { text: 'Schedule a Review', link: '/contact' }
    }
  });

  await client.createOrReplace({
    _id: 'sustainabilityPageSingleton',
    _type: 'sustainabilityPage',
    badgeText: 'AI for Sustainable Operations',
    title: 'Make Sustainability Operational for Business Impact',
    description: 'Leverage AI and enterprise data to transform carbon tracking, ESG reporting, and sustainability initiatives into measurable, business-driven outcomes. Move beyond compliance—build operational efficiency and real ROI.',
    introTitle: 'Make Sustainability Operational and Measurable',
    introSubtitle: 'Traditional reporting can\'t keep up with the demands of modern enterprise green targets.',
    heroCTA: { text: 'Start Sustainability Pilot', link: '/contact' },
    secondaryCTA: { text: 'Talk to a Sustainability Expert', link: '/services' },
    serviceAreasTitle: 'Sustainable AI Modules',
    serviceAreasDescription: 'Combining deep data engineering with specialized AI agents to accelerate your journey to Net Zero.',
    processSectionTitle: 'Core Sustainability Pillars',
    processSectionDescription: 'Our comprehensive framework for integrating AI and data strategy to achieve measurable ESG outcomes.',
    engagementSectionTitle: 'Deployment Approach',
    faqSectionTitle: 'Frequently Asked Questions',
    whyChooseUs: addKeys([
        { title: 'Manual ESG & Carbon Reporting', description: 'Heavy reliance on spreadsheets and disconnected workflows leads to errors, delays, and audit risks. Business Impact: High operational overhead with low data reliability.' },
        { title: 'Fragmented Emissions Data', description: 'Carbon data is scattered across ERP systems, vendors, utilities, and manual inputs. Business Impact: No single source of truth for decision-making.' },
        { title: 'Limited Operational Visibility', description: 'Lack of real-time tracking makes it difficult to act on emissions, inefficiencies, or waste. Business Impact: Missed optimization opportunities and delayed action.' },
        { title: 'No Measurable ROI Tracking', description: 'Sustainability is often treated as a compliance cost rather than a performance driver. Business Impact: Leadership struggles to justify investments.' }
    ]),
    serviceAreas: addKeys([
        { name: 'Carbon Visibility Dashboard', focus: 'Real-time tracking of emissions across Scope 1, 2, and 3 with direct ERP and data system integrations.', sections: [{title: 'Business Impact', tasks: ['Complete transparency with accurate, audit-ready reporting.']}] },
        { name: 'ESG Reporting Automation', focus: 'Automated, AI-driven ESG reporting aligned with global standards (BRSR, CSRD, SEC).', sections: [{title: 'Business Impact', tasks: ['Reduced reporting effort and improved compliance accuracy.']}] },
        { name: 'Emission Forecasting', focus: 'AI/ML models simulate the impact of operational decisions on future carbon footprint.', sections: [{title: 'Business Impact', tasks: ['Data-driven sustainability planning and smarter investments.']}] },
        { name: 'Green Supply Chain Insights', focus: 'Identify high-emission suppliers and optimize procurement decisions for sustainability.', sections: [{title: 'Business Impact', tasks: ['Reduced supply chain emissions and stronger vendor accountability.']}] }
    ]),
    process: addKeys([
        { title: 'AI + Data-First Approach', description: 'We combine deep data engineering with AI models to move sustainability from reporting to real-time optimization.' },
        { title: 'ERP & Enterprise Integration', description: 'Seamless integration with systems like SAP, Microsoft, and Oracle to extract accurate operational data.' },
        { title: 'Outcome-Driven Sustainability', description: 'We focus on measurable KPIs like emission reduction, cost savings, and reporting efficiency—not just dashboards.' },
        { title: 'Pilot-to-Scale Model', description: 'Start small, prove ROI, and scale confidently across the enterprise.' },
        { title: 'Regulatory-Ready Frameworks', description: 'Built to align with evolving global ESG standards and compliance requirements.' }
    ]),
    faqs: addKeys([
        { question: 'How is AI used in sustainability and carbon tracking?', answer: markdownToPortableText('AI helps automate data collection, identify emission patterns, and simulate future scenarios. It transforms sustainability from static reporting into predictive and actionable intelligence.') },
        { question: 'What are Scope 1, 2, and 3 emissions?', answer: markdownToPortableText('Scope 1 covers direct emissions, Scope 2 includes purchased energy, and Scope 3 involves supply chain and indirect emissions. Most organizations struggle primarily with Scope 3 visibility.') },
        { question: 'How do you integrate sustainability with existing ERP systems?', answer: markdownToPortableText('We connect directly to ERP, finance, and operational systems to extract real-time data, ensuring accurate and automated carbon tracking without manual effort.') },
        { question: 'Can sustainability initiatives actually deliver ROI?', answer: markdownToPortableText('Yes. By identifying inefficiencies in energy, operations, and supply chains, sustainability initiatives can reduce costs while improving compliance and brand value.') },
        { question: 'How long does it take to implement a sustainability solution?', answer: markdownToPortableText('Initial pilots can be deployed within 4–8 weeks, focusing on a specific use case to demonstrate measurable impact before scaling.') },
        { question: 'Do you support ESG compliance frameworks?', answer: markdownToPortableText('Yes. We align reporting with frameworks like BRSR (India), CSRD (Europe), and SEC climate disclosures (US).') }
    ]),
    finalCTA: {
        title: 'Turn Sustainability Into a Business Advantage',
        description: 'Start with a focused pilot. Measure real impact. Scale sustainability across your enterprise with confidence.',
        cta: { text: 'Schedule Sustainability Discussion', link: '/contact' }
    }
  });

  await client.createOrReplace({
    _id: 'useCasesPageSingleton',
    _type: 'useCasesPage',
    badgeText: 'Use Cases',
    title: 'Proven Impact: Enterprise AI & Data in Production',
    titleHighlight: 'Frontier of AI',
    description: 'Real-world results from the intersection of GenAI, ERP, and Predictive Analytics. See how we turn complex data into operational advantages.',
    tabs: ['Cost Optimization', 'Growth & Revenue', 'Operational Excellence'],
    useCases: addKeys([
        { title: 'Demand Forecasting Engine', problem: 'High inventory carrying costs and stockouts due to fragmented regional data.', tools: 'Azure ML, Power BI, Dynamics 365 Supply Chain.', approach: 'Developed region-level predictive models that pull real-time signals from ERP and external market data.', impact: '25% improvement in forecast accuracy and a 12% reduction in overstock within 6 months.' },
        { title: 'Executive Decision Dashboards (Data Modernization)', problem: 'Leadership was making decisions based on "month-old" PDF reports and siloed spreadsheets.', tools: 'Power BI Premium, Azure Synapse, DAX.', approach: 'Centralized 14 disparate data sources into a single Azure Lakehouse with automated KPI refreshes every 4 hours.', impact: '90% elimination of manual reporting hours and real-time visibility into global margin leakage.' },
        { title: 'Customer Analytics & Segmentation', problem: 'Generic marketing spend with low ROI due to an inability to identify high-value "at-risk" customers.', tools: 'Azure AI, Dynamics 365 Customer Insights, Python.', approach: 'ML-driven segmentation using RFM (Recency, Frequency, Monetary) modeling and predictive Lifetime Value (LTV) scoring.', impact: '15% increase in customer retention and highly targeted personalization at scale.' },
        { title: 'Supply Chain Optimization (The "Agentic" Angle)', problem: 'Procurement teams were reactive, only discovering vendor delays after they impacted production.', tools: 'Azure Databricks, AI Agents, Dynamics 365 SCM.', approach: 'An "Agentic" monitoring system that scans global risk signals and vendor history to predict bottlenecks before they occur.', impact: '18% reduction in inventory holding costs and a 22% improvement in on-time delivery.' },
        { title: 'Enterprise Knowledge Assistant (GenAI + RAG)', problem: 'Support and Sales teams were spending 2+ hours a day searching through thousands of internal PDFs, Sharepoint folders, and technical manuals to answer client queries.', tools: 'Azure OpenAI (GPT-4), Pinecone (Vector DB), LangChain.', approach: 'Built a Retrieval-Augmented Generation (RAG) "Knowledge Engine" that indexes all unstructured company data with enterprise-grade security and citation tracking.', impact: '80% reduction in document search time and a 30% improvement in first-call resolution for technical support teams.' },
        { title: 'Automated Financial Reconciliation', problem: 'Finance teams were manually matching bank statements to ERP invoices across 12 international entities, leading to month-end closing delays and human error.', tools: 'Python (AI-matching logic), Power Automate, Dynamics 365 Finance.', approach: 'An Intelligent Automation layer that uses fuzzy matching and ML to reconcile 95% of transactions automatically, flagging only high-risk anomalies for human review.', impact: 'Month-end close shortened by 4 days and 100% audit-readiness with automated transaction logging.' }
    ]),
    howWePartnerCTA: {
        title: 'Have a Similar Challenge?',
        description: 'These aren\'t just one-off projects; they are blueprints for your transformation. We can adapt any of these models to your specific ERP and data landscape in 6–8 weeks.',
        cta: { text: 'Discuss a Use Case', link: '/contact' }
    },
    howWePartnerBadgeText: 'Partner With Us',
    pocGuaranteeCTA: {
        title: 'The 6-8 Week Pilot Guarantee',
        description: 'Don\'t commit to a year-long roadmap. Pick one high-impact use case above, and we will build a working POC in your environment in 6 weeks to prove the ROI.',
        cta: { text: 'Start Your Pilot', link: '/contact' }
    }
  });

  console.log("Seeding complete!");
}

seed().catch(console.error);
