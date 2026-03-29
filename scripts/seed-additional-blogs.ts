import { createClient } from "next-sanity";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(__dirname, "../.env.local") });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.NEXT_PUBLIC_SANITY_TOKEN || process.env.SANITY_API_TOKEN;

if (!projectId || !dataset || !token) {
  console.error("Missing Sanity env logic");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-03-25",
  useCdn: false,
  token,
});

function textBlock(text: string, style: "normal" | "h2" | "h3" = "normal", isListItem = false) {
  const block: any = {
    _key: Math.random().toString(36).substring(7),
    _type: "block",
    style,
    children: [
      {
        _key: Math.random().toString(36).substring(7),
        _type: "span",
        marks: [],
        text: text.replace(/__|_|\\-/g, '').trim(),
      },
    ],
  };
  
  if (isListItem) {
    block.listItem = "bullet";
    block.level = 1;
  }
  
  return block;
}

const newPosts = [
  {
    title: "Modern Data Stack in 2026 – What Every Growing Company Must Build First",
    slug: "modern-data-stack-in-2026-what-every-growing-company-must-build-first",
    excerpt: "One of the biggest challenges growing companies face is fragmented data systems. The modern data stack becomes critical for unified, scalable foundations.",
    category: "Data & Analytics",
    author: "Axiom AI Team",
    authorRole: "Data Strategy",
    readTime: "4 min read",
    publishedAt: new Date().toISOString(),
    content: [
      textBlock("One of the biggest challenges growing companies face is fragmented data systems. Different teams rely on disconnected tools, leading to inconsistent insights and slow decision-making."),
      textBlock("This is where the modern data stack becomes critical. It provides a unified, scalable foundation that enables real-time access to reliable data across the organization."),
      textBlock("Traditional systems were built for batch processing. They cannot support the speed and flexibility required in today’s environment."),
      textBlock("Modern data stacks are designed for real-time data flow, cloud scalability, and seamless integration. They allow businesses to move from reactive reporting to proactive decision-making."),
      textBlock("What High-Growth Companies Do Differently", "h2"),
      textBlock("Focus on Real-Time Data: Organizations prioritize instant data processing instead of delayed batch updates.", "normal", true),
      textBlock("Build Cloud-Native Architectures: They adopt scalable infrastructure that grows with data demand.", "normal", true),
      textBlock("Unify Data Sources: All data—customer, operational, financial—is centralized for consistency.", "normal", true),
      textBlock("Enable Self-Service Analytics: Teams can access insights without relying heavily on technical departments.", "normal", true),
      textBlock("Invest in Data Governance: Strong data quality and security frameworks ensure trust in insights.", "normal", true),
      textBlock("The Execution Framework", "h2"),
      textBlock("1. Define core business metrics"),
      textBlock("2. Centralize data into a unified platform"),
      textBlock("3. Implement real-time data pipelines"),
      textBlock("4. Enable analytics and reporting layers"),
      textBlock("5. Continuously optimize performance and scalability"),
      textBlock("Companies that build a strong modern data stack early gain a lasting competitive advantage.", "h3")
    ]
  },
  {
    title: "How to Build Real-Time Data Pipelines for Faster Business Decisions",
    slug: "how-to-build-real-time-data-pipelines-for-faster-business-decisions",
    excerpt: "Real-time data pipelines deliver insights instantly, allowing businesses to respond immediately to changes in operations, customer behavior, or market conditions.",
    category: "Data Engineering",
    author: "Axiom AI Team",
    authorRole: "Data Engineering",
    readTime: "5 min read",
    publishedAt: new Date().toISOString(),
    content: [
      textBlock("Many organizations struggle with delayed insights. By the time reports are generated, the opportunity to act has already passed."),
      textBlock("Real-time data pipelines solve this problem by delivering insights instantly. They continuously process and move data as it is generated."),
      textBlock("This shift allows businesses to respond immediately to changes in operations, customer behavior, or market conditions."),
      textBlock("What Effective Real-Time Systems Look Like", "h2"),
      textBlock("Continuous Data Ingestion: Data flows from applications, systems, and devices without interruption.", "normal", true),
      textBlock("Instant Processing: Data is transformed and analyzed the moment it arrives.", "normal", true),
      textBlock("Low-Latency Delivery: Insights are available in dashboards or systems in seconds.", "normal", true),
      textBlock("Scalable Architecture: Systems handle increasing data volumes without performance issues.", "normal", true),
      textBlock("Reliable Monitoring: Pipelines are continuously tracked to prevent failures or delays.", "normal", true),
      textBlock("The Build Approach", "h2"),
      textBlock("1. Identify high-impact use cases"),
      textBlock("2. Select streaming-first architecture"),
      textBlock("3. Integrate data ingestion tools"),
      textBlock("4. Implement real-time processing layers"),
      textBlock("5. Deploy monitoring and governance systems"),
      textBlock("Organizations that adopt real-time pipelines move faster, make better decisions, and stay ahead of competitors.", "h3")
    ]
  },
  {
    title: "Agentic AI in Manufacturing – Self-Optimizing Operations & Predictive Production Systems",
    slug: "agentic-ai-in-manufacturing-self-optimizing-operations",
    excerpt: "Agentic AI introduces self-optimizing manufacturing systems that continuously learn and improve, transforming smart manufacturing and predictive maintenance.",
    category: "AI in Manufacturing",
    author: "Axiom AI Team",
    authorRole: "AI Strategy",
    readTime: "6 min read",
    publishedAt: new Date().toISOString(),
    content: [
      textBlock("Manufacturing operations are becoming more complex, but traditional systems are struggling to keep up."),
      textBlock("Manual monitoring and reactive processes lead to inefficiencies, downtime, and increased costs."),
      textBlock("Agentic AI introduces self-optimizing manufacturing systems that continuously learn and improve."),
      textBlock("This is transforming smart manufacturing, predictive maintenance, industrial AI, and real-time production systems."),
      textBlock("How Agentic AI Transforms Manufacturing", "h2"),
      textBlock("Predictive Production Systems: AI predicts failures before they happen and adjusts operations proactively.", "normal", true),
      textBlock("Self-Optimizing Workflows: Production lines adapt automatically based on performance data.", "normal", true),
      textBlock("Real-Time Equipment Monitoring: Machines are continuously analyzed for efficiency and anomalies.", "normal", true),
      textBlock("Supply Chain Optimization: AI systems coordinate inventory and logistics dynamically.", "normal", true),
      textBlock("Quality Control Automation: Defects are detected instantly, reducing waste.", "normal", true),
      textBlock("Business Impact", "h2"),
      textBlock("Reduced downtime", "normal", true),
      textBlock("Improved production efficiency", "normal", true),
      textBlock("Lower operational costs", "normal", true),
      textBlock("Higher product quality", "normal", true),
      textBlock("Faster response to demand changes", "normal", true),
      textBlock("The Implementation Approach", "h2"),
      textBlock("1. Connect machines and IoT devices"),
      textBlock("2. Build real-time data infrastructure"),
      textBlock("3. Deploy AI agents for monitoring and optimization"),
      textBlock("4. Integrate systems across production lines"),
      textBlock("5. Continuously refine models with live data"),
      textBlock("Why This Is a Competitive Advantage", "h2"),
      textBlock("Manufacturers adopting AI-driven operations, predictive analytics, and autonomous production systems are outperforming those relying on traditional methods."),
      textBlock("They operate faster, waste less, and scale more efficiently."),
      textBlock("If your manufacturing operations are still reactive, you’re leaving efficiency on the table. Start with one production line, implement Agentic AI, and expand across your operations.", "h3")
    ]
  },
  {
    title: "Agentic AI in Retail – Autonomous Customer Journeys, Pricing & Inventory Optimization",
    slug: "agentic-ai-in-retail-autonomous-customer-journeys",
    excerpt: "Agentic AI enables fully autonomous retail systems that optimize every part of the customer journey, from personalization to dynamic pricing.",
    category: "AI in Retail",
    author: "Axiom AI Team",
    authorRole: "AI Strategy",
    readTime: "6 min read",
    publishedAt: new Date().toISOString(),
    content: [
      textBlock("Retail and e-commerce are evolving faster than ever. Customer expectations are higher, and competition is intense."),
      textBlock("Traditional systems cannot keep up with the need for personalization, dynamic pricing, and real-time inventory management."),
      textBlock("Agentic AI enables fully autonomous retail systems that optimize every part of the customer journey."),
      textBlock("This is driving AI in retail, e-commerce personalization, dynamic pricing strategies, and inventory optimization."),
      textBlock("What Autonomous Retail Looks Like", "h2"),
      textBlock("Personalized Customer Journeys: AI adapts experiences in real time based on behavior.", "normal", true),
      textBlock("Dynamic Pricing Optimization: Prices adjust automatically based on demand and competition.", "normal", true),
      textBlock("Real-Time Inventory Management: Stock levels are continuously optimized to prevent shortages.", "normal", true),
      textBlock("Autonomous Marketing Campaigns: AI agents launch and optimize campaigns without manual input.", "normal", true),
      textBlock("Customer Behavior Prediction: Systems anticipate needs before customers act.", "normal", true),
      textBlock("Key Benefits", "h2"),
      textBlock("Higher conversion rates", "normal", true),
      textBlock("Improved customer experience", "normal", true),
      textBlock("Reduced inventory costs", "normal", true),
      textBlock("Increased revenue per customer", "normal", true),
      textBlock("Faster decision-making", "normal", true),
      textBlock("The Execution Model", "h2"),
      textBlock("1. Capture real-time customer data"),
      textBlock("2. Build AI-driven personalization engines"),
      textBlock("3. Implement dynamic pricing systems"),
      textBlock("4. Integrate inventory optimization tools"),
      textBlock("5. Continuously refine based on customer behavior"),
      textBlock("Why Retailers Are Moving Fast", "h2"),
      textBlock("The shift toward AI-powered retail, autonomous commerce, and intelligent customer experiences is accelerating."),
      textBlock("Businesses that adopt early are dominating market share through speed and personalization."),
      textBlock("If your retail strategy is still reactive, you’re already behind. Start building autonomous customer journeys and let AI optimize your revenue in real time.", "h3")
    ]
  }
];

async function seed() {
  console.log("Seeding additional blogs...");
  for (const post of newPosts) {
    const doc = {
      _type: "post",
      ...post,
      slug: { _type: "slug", current: post.slug }
    };
    await client.create(doc);
    console.log(`Created: ${post.title}`);
  }
  console.log("Blog seeding completed!");
}

seed().catch(err => {
  console.error("Seeding failed", err);
  process.exit(1);
});
