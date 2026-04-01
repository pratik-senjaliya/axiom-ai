import { createClient } from 'next-sanity';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env.local') });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN || process.env.SANITY_API_TOKEN,
});

function simpleBlock(text: string) {
  if (!text) return [];
  return [{ _type: 'block', children: [{ _type: 'span', text: text, marks: [] }], markDefs: [], style: 'normal' }];
}

function bulletList(texts: string[]) {
    return texts.map((text, i) => ({
        _key: `bullet_${i}`,
        _type: 'block',
        children: [{ _type: 'span', text: text, marks: [] }],
        markDefs: [],
        style: 'normal',
        listItem: 'bullet'
    }));
}

async function run() {
  console.log("Starting full-faith data seeding based on Word Documents...");
  
  // 1. DATA ANALYTICS PAGE
  console.log("Fetching dataAnalyticsPage...");
  const dataAnalytics = await client.fetch('*[_type == "dataAnalyticsPage"][0]');
  const dataId = dataAnalytics?._id || 'dataAnalyticsPage';

  console.log(`Ensuring Data Analytics page exists (ID: ${dataId})...`);
  await client.createIfNotExists({ _id: dataId, _type: 'dataAnalyticsPage' });

  console.log(`Patching Data Analytics page (ID: ${dataId})...`);
  await client.patch(dataId).set({
    _type: 'dataAnalyticsPage',
    hero: {
      title: "Data Analytics: From Raw Data to",
      titleHighlight: "Intelligent Decision Systems",
      description: simpleBlock("We design and deploy modern data ecosystems that convert fragmented data into real-time intelligence. From dashboards to predictive models, we enable organizations to move from reporting to decision automation.")
    },
    problemHeadline: "Your Data Exists. Your Decisions Don’t Reflect It.",
    problemIntro: simpleBlock("Most organizations today are data-rich but insight-poor."),
    problems: [
      { _key: 'p1', title: "Disconnected systems", description: simpleBlock("create fragmented visibility") },
      { _key: 'p2', title: "Reports are delayed", description: simpleBlock("static, and reactive") },
      { _key: 'p3', title: "Intuition instead of intelligence", description: simpleBlock("Business teams rely on intuition instead of intelligence") },
      { _key: 'p4', title: "Time sinks", description: simpleBlock("Data teams spend more time preparing data than using it") }
    ],
    problemConclusion: simpleBlock("The result? Slower decisions, missed opportunities, and inefficient operations."),
    
    approachHeadline: "We Build End-to-End Data Intelligence Systems",
    approachBody: simpleBlock("At Sync Origins, we go beyond dashboards. We build scalable, AI-ready data architectures that power real business outcomes."),
    approachCapabilities: [
      { _key: 'l1', title: "Data Engineering", description: simpleBlock("Build robust pipelines to unify data from ERP, CRM, IoT, and external sources") },
      { _key: 'l2', title: "Data Warehousing & Lakehouse", description: simpleBlock("Design centralized, scalable storage systems for structured and unstructured data") },
      { _key: 'l3', title: "Business Intelligence & Visualization", description: simpleBlock("Create intuitive dashboards for leadership and operational teams") },
      { _key: 'l4', title: "Advanced Analytics & AI", description: simpleBlock("Predict trends, optimize operations, and enable intelligent automation") },
      { _key: 'l5', title: "Data Governance & Quality", description: simpleBlock("Ensure accuracy, consistency, and compliance across your data ecosystem") }
    ],
    
    differentiatorsHeadline: "Not Just Analytics. Decision Infrastructure.",
    differentiators: [
      { _key: 'd1', title: "Business-First Design", description: simpleBlock("We align analytics with real decision-making workflows, not just reports") },
      { _key: 'd2', title: "AI-Ready Architecture", description: simpleBlock("Every system we build is future-proofed for machine learning and automation") },
      { _key: 'd3', title: "Cross-System Integration", description: simpleBlock("Expertise in seamless integration across ERP, sustainability, finance, and operations") },
      { _key: 'd4', title: "Execution-Led Approach", description: simpleBlock("We don’t stop at strategy — we design, build, and deploy") }
    ],
    
    useCasesHeadline: "Where Data Creates Immediate Impact",
    useCases: [
      { _key: 'u1', title: "Revenue Intelligence", description: simpleBlock("Track performance, identify growth levers, and forecast revenue") },
      { _key: 'u2', title: "Operational Efficiency", description: simpleBlock("Monitor processes, reduce bottlenecks, and optimize resource allocation") },
      { _key: 'u3', title: "Financial Analytics", description: simpleBlock("Real-time P&L visibility, cost optimization, and scenario planning") },
      { _key: 'u4', title: "Customer Intelligence", description: simpleBlock("Segment customers, predict behavior, and improve retention") },
      { _key: 'u5', title: "Sustainability & ESG", description: simpleBlock("Measure emissions, track ESG KPIs, and automate reporting") }
    ],
    
    techHeadline: "Built on Modern Data Stack",
    techBody: simpleBlock("We work across leading platforms and tools to build flexible, scalable data systems:"),
    technologies: [
      { _key: 't1', title: "Cloud Platforms", technologiesList: "AWS, Azure, Google Cloud" },
      { _key: 't2', title: "Data Warehousing", technologiesList: "Snowflake, BigQuery, Azure Synapse" },
      { _key: 't3', title: "BI Tools", technologiesList: "Power BI, Tableau, Looker" },
      { _key: 't4', title: "Data Pipelines", technologiesList: "Airflow, dbt, Fivetran" },
      { _key: 't5', title: "AI/ML", technologiesList: "Python, TensorFlow, Azure ML" }
    ],
    
    engagementHeadline: "From Strategy to Scaled Execution",
    engagementSteps: [
      { _key: 'r1', step: '01', title: "Assess", description: "Understand your current data landscape and gaps" },
      { _key: 'r2', step: '02', title: "Design", description: "Architect scalable data and analytics systems" },
      { _key: 'r3', step: '03', title: "Build", description: "Implement pipelines, dashboards, and models" },
      { _key: 'r4', step: '04', title: "Scale", description: "Optimize performance and enable advanced analytics" }
    ],
    
    ctaHeadline: "Turn Your Data Into a Competitive Advantage",
    ctaOptions: [
      { _key: 'b1', text: "Build Your Data Strategy", link: "/contact" },
      { _key: 'b2', text: "Request a Data Assessment", link: "/contact" },
      { _key: 'b3', text: "Talk to Our Analytics Experts", link: "/contact" }
    ],
    ctaClosing: "Stop reporting the past. Start engineering the future with data."
  }).commit({ autoGenerateArrayKeys: true });
  console.log("Data Analytics fully structured and updated!");

  // 2. ABOUT US PAGE
  console.log("Fetching aboutPage...");
  const about = await client.fetch('*[_type == "aboutPage"][0]');
  const aboutId = about?._id || 'aboutPage';

  console.log(`Ensuring About Us page exists (ID: ${aboutId})...`);
  await client.createIfNotExists({ _id: aboutId, _type: 'aboutPage' });

  console.log(`Patching About Us page (ID: ${aboutId})...`);
  await client.patch(aboutId).set({
    _type: 'aboutPage',
    hero: {
      title: "Where Enterprise Systems Become",
      titleHighlight: "Intelligent",
      description: simpleBlock("Sync Origins is the transformation and data intelligence arm of Lashan Digital, focused on building AI-ready enterprises through integrated systems, scalable data architecture, and execution-driven consulting.")
    },
    
    whoWeAreHeadline: "Built for the Next Era of Enterprise",
    whoWeAreBody: [
        ...simpleBlock("Sync Origins was founded on a simple belief — the future of business will be driven by connected, intelligent ecosystems, not fragmented systems."),
        ...simpleBlock("Sync Origins is a part of Lashan Digital, which was founded to bridge advanced technology with sustainable business transformation."),
        ...simpleBlock("We operate at the intersection of:"),
        ...bulletList([
            "Enterprise technology",
            "Data and analytics",
            "Artificial intelligence",
            "Sustainability and ESG"
        ]),
        ...simpleBlock("We help organizations move beyond legacy processes and disconnected tools to build unified, decision-driven operating environments.")
    ],
    
    philosophyHeadline: "From Systems to Intelligence",
    philosophyBody: [
        ...simpleBlock("Most transformation initiatives fail because they focus on tools rather than outcomes."),
        ...simpleBlock("At Sync Origins, we take a different approach:"),
        ...bulletList([
            "We design business-aligned systems, not just implement software",
            "We build decision infrastructure, not just dashboards",
            "We deploy production-ready AI, not experimental solutions"
        ])
    ],
    philosophyPrinciple: "Every system we build must enable better, faster, and measurable decisions.",
    
    whatWeDoHeadline: "End-to-End Transformation Capabilities",
    whatWeDoIntro: simpleBlock("We deliver integrated capabilities across four core areas:"),
    capabilities: [
      { _key: 'c1', title: "Enterprise Systems (ERP & Platforms)", description: simpleBlock("Design and deployment of scalable systems across finance, operations, and supply chain") },
      { _key: 'c2', title: "Data & Analytics", description: simpleBlock("Modern data architectures and real-time intelligence layers") },
      { _key: 'c3', title: "AI Implementation", description: simpleBlock("Use-case-driven AI systems embedded into business workflows") },
      { _key: 'c4', title: "Sustainability & ESG", description: simpleBlock("Technology-enabled carbon accounting, reporting, and compliance") }
    ],
    
    whyUsHeadline: "Execution-Led. Future-Ready. Outcome-Focused.",
    whyUsPoints: [
      { _key: 'v1', title: "Integrated Approach", description: simpleBlock("We unify ERP, data, AI, and sustainability into a single, scalable ecosystem") },
      { _key: 'v2', title: "AI-First Thinking", description: simpleBlock("Every solution is designed to evolve into intelligent, automated systems") },
      { _key: 'v3', title: "Business-Centric Design", description: simpleBlock("We start with outcomes and decisions, not tools or technologies") },
      { _key: 'v4', title: "End-to-End Execution", description: simpleBlock("From strategy to deployment and scale, we remain accountable") }
    ],
    visionStatement: [
        ...simpleBlock("We believe the next generation of enterprises will operate on real-time data, AI-driven decision systems, and fully integrated platforms."),
        ...simpleBlock("Sync Origins exists to help organizations build this foundation — systematically, practically, and at scale.")
    ],
    
    ctaHeadline: "Let’s Build What’s Next",
    ctaOptions: [
      { _key: 'c1', text: "Work With Us", link: "/contact" },
      { _key: 'c2', text: "Talk to Our Experts", link: "/contact" },
      { _key: 'c3', text: "Start Your Transformation", link: "/contact" }
    ],
    ctaClosing: "The future belongs to organizations that turn systems into intelligence. Sync Origins helps you get there."
  }).commit({ autoGenerateArrayKeys: true });
  console.log("About Us fully structured and updated!");
  
  console.log("Seeding complete!");
}

run().catch(console.error);
