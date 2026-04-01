import { createClient } from 'next-sanity';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

dotenv.config({ path: path.join(process.cwd(), '.env.local') });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN || process.env.SANITY_API_TOKEN,
});

function simpleBlock(text: string, style = 'normal') {
  if (!text) return [];
  return [{ _type: 'block', children: [{ _type: 'span', text: text, marks: [] }], markDefs: [], style: style }];
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

async function uploadImage(filePath: string) {
    console.log(`Uploading image: ${filePath}`);
    const imageData = fs.readFileSync(filePath);
    const asset = await client.assets.upload('image', imageData, {
        filename: path.basename(filePath)
    });
    return {
        _type: 'image',
        asset: {
            _type: 'reference',
            _ref: asset._id
        },
        alt: 'AI themed hero image'
    };
}

async function run() {
  console.log("Starting blog content seeding...");

  const images = {
    fails: '/home/silent-infotech/.gemini/antigravity/brain/e455d11c-fc34-4042-8d9f-a4ca014a9df0/why_genai_fails_blog_hero_1775067199671.png',
    finance: '/home/silent-infotech/.gemini/antigravity/brain/e455d11c-fc34-4042-8d9f-a4ca014a9df0/ai_finance_blog_hero_1775067218128.png',
    manufacturing: '/home/silent-infotech/.gemini/antigravity/brain/e455d11c-fc34-4042-8d9f-a4ca014a9df0/ai_manufacturing_blog_hero_1775067234442.png',
    data: '/home/silent-infotech/.gemini/antigravity/brain/e455d11c-fc34-4042-8d9f-a4ca014a9df0/data_analytics_blog_hero_1775067251275.png'
  };

  const blogPosts = [
    {
      title: "Why Most GenAI Projects Fail",
      slug: "why-most-genai-projects-fail",
      relatedService: "ai",
      excerpt: "Many companies begin their AI journey by experimenting with tools rather than solving real business challenges. Learn why 85% of GenAI projects fail and how to be in the successful 15%.",
      imagePath: images.fails,
      content: [
        ...simpleBlock("Gen AI Blog 1 - Why Most GenAI Projects Fail", "h2"),
        ...simpleBlock("One of the biggest challenges enterprises face today is the “AI pilot trap.” While many companies launch multiple experiments, they often struggle to scale them into production systems."),
        ...simpleBlock("1. Starting With Technology Instead of Business Problems", "h3"),
        ...simpleBlock("Successful AI initiatives start with clear objectives such as reducing operational costs or accelerating decision-making, rather than just experimenting with tools."),
        ...simpleBlock("2. The Pilot-to-Production Gap", "h3"),
        ...simpleBlock("Proof-of-concept projects often demonstrate value in controlled environments but fail to scale across the organization without infrastructure planning."),
        ...simpleBlock("3. Weak Data Foundations", "h3"),
        ...simpleBlock("AI systems rely on high-quality data. Organizations often struggle with silos, inconsistent datasets, and lack of governance."),
        ...bulletList(["Data silos", "Inconsistent datasets", "Lack of governance", "Poor data quality"]),
        ...simpleBlock("How the Successful 15% Deploy GenAI", "h2"),
        ...simpleBlock("Organizations that successfully scale AI focus on business outcomes, invest in data infrastructure, and design for production from day one."),
      ]
    },
    {
      title: "7 Powerful Use Cases for AI Agents in the Finance Industry",
      slug: "7-ai-agent-use-cases-finance",
      relatedService: "ai",
      excerpt: "Financial institutions are under constant pressure to improve efficiency. Discover 7 high-impact use cases where AI agents are delivering measurable value.",
      imagePath: images.finance,
      content: [
        ...simpleBlock("7 Powerful Use Cases for AI Agents in the Finance Industry", "h2"),
        ...simpleBlock("Financial institutions are under constant pressure to improve operational efficiency and strengthen risk management. AI agents are transforming how banks and fintechs operate."),
        ...simpleBlock("1. Fraud Detection and Prevention", "h3"),
        ...simpleBlock("AI agents can analyze millions of transactions in real time to detect suspicious activity and reduce false positives."),
        ...simpleBlock("2. Intelligent Customer Support Agents", "h3"),
        ...simpleBlock("Virtual assistants handle routine inquiries, assisting with loan applications and account questions instantly."),
        ...simpleBlock("3. Automated Financial Advisory", "h3"),
        ...simpleBlock("Analyzing customer spending behavior to recommend personalized investment strategies and portfolio adjustments."),
        ...simpleBlock("4. Risk Management and Credit Scoring", "h3"),
        ...simpleBlock("Broader data analysis leads to more accurate risk assessments and better lending decisions."),
        ...simpleBlock("5. Intelligent Document Processing", "h3"),
        ...simpleBlock("Extracting key info from loan applications and contracts to accelerate approval workflows."),
        ...simpleBlock("6. Compliance Monitoring", "h3"),
        ...simpleBlock("Automating compliance reporting and monitoring transactions for regulatory violations."),
        ...simpleBlock("7. Real-Time Market Intelligence", "h3"),
        ...simpleBlock("Continuously monitoring market signals and generating actionable insights for traders and analysts."),
      ]
    },
    {
      title: "7 AI Agents We Can Build for the Manufacturing Industry",
      slug: "7-ai-agents-for-manufacturing",
      relatedService: "ai",
      excerpt: "From predictive maintenance to supply chain intelligence, learn how AI agents powered by strong data engineering are transforming factories.",
      imagePath: images.manufacturing,
      content: [
        ...simpleBlock("7 AI Agents We Can Build for the Manufacturing Industry", "h2"),
        ...simpleBlock("Manufacturing companies generate massive amounts of sensor and production data. AI agents can transform this data into smarter operations."),
        ...simpleBlock("1. Predictive Maintenance AI Agent", "h3"),
        ...simpleBlock("Identify early warning signs of equipment failure to prevent unplanned downtime and reduce costs."),
        ...simpleBlock("2. Production Optimization AI Agent", "h3"),
        ...simpleBlock("Analyze operational data to identify inefficiencies and bottlenecks in the production line."),
        ...simpleBlock("3. Supply Chain Intelligence Agent", "h3"),
        ...simpleBlock("Forecast raw material demand and identify potential disruptions before they occur."),
        ...simpleBlock("4. Smart Factory Data Integration", "h3"),
        ...simpleBlock("Unify disconnected ERP, IoT, and production systems into a centralized analytics layer."),
        ...simpleBlock("5. Energy Optimization Agent", "h3"),
        ...simpleBlock("Monitor energy usage and recommend optimized operating schedules to reduce environmental impact."),
        ...simpleBlock("6. Demand Forecasting", "h3"),
        ...simpleBlock("Align production with market demand more effectively using historical sales and market trends."),
        ...simpleBlock("7. Performance Analytics Agent", "h3"),
        ...simpleBlock("Provide real-time visibility across plants for faster, data-driven leadership decisions."),
      ]
    },
    {
      title: "Data Analytics: From Raw Data to Intelligent Decision Systems",
      slug: "data-analytics-intelligent-decision-systems",
      relatedService: "data",
      excerpt: "Most organizations today are data-rich but insight-poor. Explore how to build end-to-end data intelligence systems that drive real business outcomes.",
      imagePath: images.data,
      content: [
        ...simpleBlock("Data Analytics: From Raw Data to Intelligent Decision Systems", "h2"),
        ...simpleBlock("We design and deploy modern data ecosystems that convert fragmented data into real-time intelligence. From dashboards to predictive models, we enable organizations to move from reporting to decision automation."),
        ...simpleBlock("The Problem We Solve", "h3"),
        ...simpleBlock("Disconnected systems create fragmented visibility. Business teams often rely on intuition instead of intelligence, and data teams spend more time preparing data than using it."),
        ...bulletList([
          "Disconnected systems create fragmented visibility",
          "Reports are delayed, static, and reactive",
          "Business teams rely on intuition instead of intelligence",
          "Data teams spend more time preparing data than using it"
        ]),
        ...simpleBlock("Our Approach", "h3"),
        ...simpleBlock("At Sync Origins, we go beyond dashboards. We build scalable, AI-ready data architectures that power real business outcomes including Data Engineering, Warehousing, and Advanced Analytics."),
      ]
    }
  ];

  for (const post of blogPosts) {
    console.log(`Processing blog: ${post.title}`);
    
    // Upload image
    const mainImage = post.imagePath ? await uploadImage(post.imagePath) : undefined;
    
    const doc = {
      _type: 'post',
      _id: `blog-${post.slug}`,
      title: post.title,
      slug: { _type: 'slug', current: post.slug },
      excerpt: post.excerpt,
      relatedService: post.relatedService,
      publishedAt: new Date().toISOString().split('T')[0],
      author: "AxiomAI Team",
      readTime: "5 min read",
      mainImage: mainImage,
      content: post.content,
      seo: {
        _type: 'seo',
        metaTitle: `${post.title} | AxiomAI Insights`,
        metaDescription: post.excerpt,
      }
    };

    await client.createOrReplace(doc);
    console.log(`Created/Updated blog post: ${post.title}`);
  }

  console.log("Seeding complete!");
}

run().catch(console.error);
