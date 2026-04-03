import { createClient } from 'next-sanity';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env.local') });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

function p(text: string) {
  return {
    _type: 'block',
    style: 'normal',
    children: [{ _type: 'span', text: text, marks: [] }],
    markDefs: []
  };
}

function h2(text: string) {
  return {
    _type: 'block',
    style: 'h2',
    children: [{ _type: 'span', text: text, marks: [] }],
    markDefs: []
  };
}

function h3(text: string) {
  return {
    _type: 'block',
    style: 'h3',
    children: [{ _type: 'span', text: text, marks: [] }],
    markDefs: []
  };
}

function li(text: string) {
  return {
    _type: 'block',
    style: 'normal',
    listItem: 'bullet',
    children: [{ _type: 'span', text: text, marks: [] }],
    markDefs: []
  };
}

const blogs = [
  {
    slug: "why-most-gen-ai-projects-fail",
    title: "Why Most GenAI Projects Fail: Escaping the AI Pilot Trap",
    category: "GenAI",
    publishedAt: "2024-03-15",
    excerpt: "Most GenAI initiatives fail to move past the pilot phase. Discover how to escape the pilot trap and successfully scale AI across your organization.",
    image: "/images/blog/ai-failure.jpg",
    content: [
      p("Many companies begin their AI journey by experimenting with tools rather than solving real business challenges. Successful AI initiatives start with clear objectives such as reducing operational costs, improving customer experience, or accelerating decision-making."),
      h2("1. Starting With Technology Instead of Business Problems"),
      p("Many companies begin their AI journey by experimenting with tools rather than solving real business challenges. Successful AI initiatives start with clear objectives such as reducing operational costs, improving customer experience, or accelerating decision-making."),
      h2("2. The Pilot-to-Production Gap"),
      p("Proof-of-concept projects often demonstrate value in controlled environments but fail to scale across the organization. Without planning for infrastructure, integration, and operational deployment, many pilots remain isolated experiments."),
      h2("3. Weak Data Foundations"),
      p("AI systems rely heavily on high-quality data. Unfortunately, many organizations struggle with:"),
      li("Data silos"),
      li("Inconsistent datasets"),
      li("Lack of governance"),
      li("Poor data quality"),
      p("Without reliable data infrastructure, AI models cannot deliver consistent results."),
      h2("4. Lack of Strategic Alignment"),
      p("AI initiatives sometimes operate within innovation teams or IT departments without strong leadership alignment. Successful AI adoption requires executive sponsorship and collaboration across business units."),
      h2("5. Missing Governance and Risk Management"),
      p("Generative AI introduces risks related to privacy, security, and compliance. Organizations that fail to establish governance frameworks early often face barriers when trying to scale AI solutions."),
      h2("Escaping the AI Pilot Trap"),
      p("One of the biggest challenges enterprises face is the “AI pilot trap.” Companies launch multiple experiments but never scale them into production systems. Over time, these disconnected initiatives create confusion and wasted investment."),
      p("Breaking this cycle requires a shift from experimentation to structured AI deployment."),
      h2("How the Successful 15% Deploy GenAI"),
      p("Organizations that successfully scale AI share several key practices."),
      h3("Focus on Business Outcomes"),
      p("AI initiatives should be aligned with measurable goals such as cost savings, productivity improvements, or revenue growth."),
      h3("Invest in Data Infrastructure"),
      p("Reliable AI systems require centralized data platforms, strong governance, and high-quality datasets."),
      h3("Design for Production"),
      p("AI solutions must be built with scalability, integration, and long-term maintenance in mind."),
      h3("Embed AI Into Workflows"),
      p("The most successful implementations integrate AI directly into existing tools and processes."),
      h3("Build Cross-Functional Teams"),
      p("AI initiatives work best when data scientists, engineers, and business leaders collaborate closely."),
      h2("The Executive Playbook for Enterprise AI"),
      p("Leaders looking to scale generative AI should follow a structured approach:"),
      li("Identify strategic AI opportunities"),
      li("Prioritize high-impact use cases"),
      li("Establish governance and policies"),
      li("Build strong data foundations"),
      li("Launch controlled pilot programs"),
      li("Scale successful solutions across the organization"),
      p("This framework helps organizations move from experimentation to enterprise transformation."),
      h2("Conclusion"),
      p("Generative AI has enormous potential to reshape how organizations operate. However, success requires more than powerful technology."),
      p("Enterprises that succeed with AI focus on strategy, governance, and data readiness. They treat AI not as an experiment but as a core capability integrated into their business operations. Companies that adopt this approach will be far more likely to move beyond pilots—and become part of the small group of organizations successfully scaling generative AI.")
    ]
  },
  {
    slug: "7-powerful-use-cases-ai-finance",
    title: "7 Powerful Use Cases for AI Agents in the Finance Industry",
    category: "GenAI",
    publishedAt: "2024-03-20",
    excerpt: "AI agents are transforming finance—from fraud detection to automated advisory. Explore 7 high-impact use cases for intelligent financial automation.",
    image: "/images/blog/finance-ai.jpg",
    content: [
      p("Financial institutions are under constant pressure to improve operational efficiency, strengthen risk management, and deliver personalized customer experiences. Traditional systems often struggle to process the massive volume of financial data generated daily."),
      p("This is where AI agents are transforming the finance industry. Unlike traditional automation tools, AI agents can analyze large datasets, make decisions, interact with systems, and continuously improve through learning."),
      p("Below are seven high-impact use cases where AI agents are already delivering measurable value in financial services."),
      h2("1. Fraud Detection and Prevention"),
      p("Fraud is one of the biggest challenges in the financial industry. AI agents can analyze millions of transactions in real time to detect suspicious activity."),
      p("By identifying unusual patterns and behavioral anomalies, AI agents can flag potentially fraudulent transactions instantly, reduce false positives in fraud alerts, and improve transaction security."),
      h2("2. Intelligent Customer Support Agents"),
      p("Customer support teams in banks often handle large volumes of routine inquiries. AI agents can act as intelligent virtual assistants capable of answering account-related questions, assisting with loan applications, and guiding customers through financial services."),
      h2("3. Automated Financial Advisory"),
      p("AI agents are increasingly being used to provide personalized financial advice by analyzing a customer's financial history, spending behavior, and investment goals. They can recommend investment strategies and provide savings insights."),
      h2("4. Risk Management and Credit Scoring"),
      p("Traditional credit evaluation processes rely on limited financial data. AI agents can analyze broader datasets including spending patterns and alternative financial sources to produce more accurate risk assessments."),
      h2("5. Intelligent Document Processing"),
      p("Financial institutions handle enormous volumes of documents. AI agents can automatically extract key information from loan applications, validate financial records, and accelerate loan approval workflows."),
      h2("6. Compliance Monitoring and Regulatory Reporting"),
      p("AI agents can help by monitoring transactions for regulatory violations, automating compliance reporting, and maintaining audit-ready documentation."),
      h2("7. Real-Time Market Intelligence"),
      p("AI agents can continuously monitor market signals, analyze trends, and generate actionable insights for traders and analysts."),
      h2("Conclusion"),
      p("AI agents are rapidly becoming an essential part of modern financial infrastructure. The finance industry is moving toward a future where AI agents work alongside human experts to drive smarter, more efficient financial systems.")
    ]
  },
  {
    slug: "7-ai-agents-manufacturing-predictive-maintenance",
    title: "7 AI Agents to Transform Manufacturing Operations",
    category: "GenAI",
    publishedAt: "2024-03-25",
    excerpt: "Transform your factory with AI agents. From predictive maintenance to supply chain intelligence, explore 7 ways AI is optimizing manufacturing.",
    image: "/images/blog/manufacturing-ai.jpg",
    content: [
      p("Manufacturing companies generate massive amounts of operational data every day—from machine sensors to supply chains. Much of this data remains underutilized because it is scattered across multiple systems and difficult to analyze in real time."),
      p("This is where AI agents powered by strong data engineering platforms can make a major difference. Below are seven powerful AI agents that can be built for the manufacturing industry to improve efficiency and reduce costs."),
      h2("1. Predictive Maintenance AI Agent"),
      p("A Predictive Maintenance AI Agent can continuously monitor machine data to identify early warning signs of equipment failure, detecting abnormal behavior and predicting potential breakdowns before they occur."),
      h2("2. Production Optimization AI Agent"),
      p("This agent analyzes operational data to identify inefficiencies and bottlenecks, helping manufacturers optimize machine utilization and improve production scheduling."),
      h2("3. Supply Chain Intelligence Agent"),
      p("A Supply Chain Intelligence AI Agent can analyze real-time data to forecast raw material demand, identify potential disruptions, and optimize inventory levels."),
      h2("4. Smart Factory Data Integration Agent"),
      p("This agent unifies disconnected systems such as ERP platforms and IoT sensors by continuously collecting and organizing operational data into unified dashboards."),
      h2("5. Energy Optimization AI Agent"),
      p("An Energy Optimization AI Agent can analyze patterns and detect inefficiencies, recommending optimized operating schedules to reduce operational costs."),
      h2("6. Demand Forecasting and Production Planning Agent"),
      p("This agent analyzes historical sales data and market trends to generate more accurate demand predictions, preventing inventory shortages or overproduction."),
      h2("7. Manufacturing Performance Analytics Agent"),
      p("A Performance Analytics Agent continuously analyzes operational data and generates real-time insights and dashboards for decision-makers across plants."),
      h2("Conclusion"),
      p("By deploying specialized AI agents, manufacturers can significantly improve efficiency, reduce operational risks, and gain deeper visibility into their operations. The future belongs to factories that turn their systems into intelligence.")
    ]
  },
  {
    slug: "agentic-ai-in-manufacturing-self-optimizing-operations",
    title: "Agentic AI in Manufacturing – Self-Optimizing Operations",
    category: "GenAI",
    publishedAt: "2024-04-01",
    excerpt: "Agentic AI is moving manufacturing from reactive to autonomous. Learn how self-optimizing systems are redefining production efficiency.",
    image: "/images/blog/agentic-manufacturing.jpg",
    content: [
      p("Manufacturing operations are becoming more complex, but traditional systems are struggling to keep up. Manual monitoring and reactive processes lead to inefficiencies, downtime, and increased costs."),
      p("Agentic AI introduces self-optimizing manufacturing systems that continuously learn and improve. This is transforming smart manufacturing, predictive maintenance, and real-time production systems."),
      h2("How Agentic AI Transforms Manufacturing"),
      li("Predictive Production Systems: AI predicts failures before they happen and adjusts operations proactively."),
      li("Self-Optimizing Workflows: Production lines adapt automatically based on performance data."),
      li("Real-Time Equipment Monitoring: Machines are continuously analyzed for efficiency and anomalies."),
      li("Supply Chain Optimization: AI systems coordinate inventory and logistics dynamically."),
      li("Quality Control Automation: Defects are detected instantly, reducing waste."),
      h2("Business Impact"),
      p("The results of adopting Agentic AI include reduced downtime, improved production efficiency, lower operational costs, and higher product quality. Manufacturers can also respond faster to demand changes."),
      h2("The Implementation Approach"),
      li("Connect machines and IoT devices"),
      li("Build real-time data infrastructure"),
      li("Deploy AI agents for monitoring and optimization"),
      li("Integrate systems across production lines"),
      li("Continuously refine models with live data"),
      h2("Why This Is a Competitive Advantage"),
      p("Manufacturers adopting AI-driven operations and autonomous production systems are outperforming those relying on traditional methods. They operate faster, waste less, and scale more efficiently."),
      p("If your manufacturing operations are still reactive, you’re leaving efficiency on the table. Start with one production line, implement Agentic AI, and expand across your operations.")
    ]
  },
  {
    slug: "agentic-ai-retail-autonomous-pricing",
    title: "Agentic AI in Retail – Autonomous Customer Journeys & Pricing",
    category: "GenAI",
    publishedAt: "2024-04-05",
    excerpt: "Explore the shift to autonomous retail. Learn how Agentic AI optimizes customer journeys, pricing strategies, and inventory in real time.",
    image: "/images/blog/retail-ai.jpg",
    content: [
      p("Retail and e-commerce are evolving faster than ever. Customer expectations are higher, and competition is intense. Traditional systems cannot keep up with the need for personalization, dynamic pricing, and real-time inventory management."),
      p("Agentic AI enables fully autonomous retail systems that optimize every part of the customer journey, from personalized experiences to inventory optimization."),
      h2("What Autonomous Retail Looks Like"),
      li("Personalized Customer Journeys: AI adapts experiences in real time based on behavior."),
      li("Dynamic Pricing Optimization: Prices adjust automatically based on demand and competition."),
      li("Real-Time Inventory Management: Stock levels are continuously optimized to prevent shortages."),
      li("Autonomous Marketing Campaigns: AI agents launch and optimize campaigns without manual input."),
      li("Customer Behavior Prediction: Systems anticipate needs before customers act."),
      h2("Key Benefits"),
      p("Retailers using Agentic AI see higher conversion rates, improved customer experience, reduced inventory costs, and faster decision-making."),
      h2("The Execution Model"),
      li("Capture real-time customer data"),
      li("Build AI-driven personalization engines"),
      li("Implement dynamic pricing systems"),
      li("Integrate inventory optimization tools"),
      li("Continuously refine based on customer behavior"),
      h2("Why Retailers Are Moving Fast"),
      p("The shift toward AI-powered retail and autonomous commerce is accelerating. Businesses that adopt early are dominating market share through speed and personalization."),
      p("If your retail strategy is still reactive, you’re already behind. Start building autonomous customer journeys and let AI optimize your revenue in real time.")
    ]
  },
  {
    slug: "modern-data-stack-in-2026",
    title: "Modern Data Stack in 2026 – What Every Company Must Build First",
    category: "Data Strategy",
    publishedAt: "2024-04-10",
    excerpt: "Fragmented data systems are the biggest hurdle for growth. Learn why the modern data stack is the foundational layer for any intelligent enterprise.",
    image: "/images/blog/data-stack.jpg",
    content: [
      p("One of the biggest challenges growing companies face is fragmented data systems. Different teams rely on disconnected tools, leading to inconsistent insights and slow decision-making."),
      p("This is where the modern data stack becomes critical. It provides a unified, scalable foundation that enables real-time access to reliable data across the organization."),
      h2("Why Traditional Systems Fail"),
      p("Traditional systems were built for batch processing and cannot support the speed required in today’s environment. Modern data stacks are designed for real-time data flow, cloud scalability, and seamless integration."),
      h2("What High-Growth Companies Do Differently"),
      li("Focus on Real-Time Data: Prioritize instant processing instead of delayed batch updates."),
      li("Build Cloud-Native Architectures: Adopt scalable infrastructure that grows with demand."),
      li("Unify Data Sources: Centralize all customer, operational, and financial data."),
      li("Enable Self-Service Analytics: Allow teams to access insights without technical bottlenecks."),
      li("Invest in Data Governance: Ensure trust in insights through strong quality frameworks."),
      h2("The Execution Framework"),
      li("Define core business metrics"),
      li("Centralize data into a unified platform"),
      li("Implement real-time data pipelines"),
      li("Enable analytics and reporting layers"),
      li("Continuously optimize performance"),
      h2("Conclusion"),
      p("Companies that build a strong modern data stack early gain a lasting competitive advantage, moving from reactive reporting to proactive decision-making.")
    ]
  },
  {
    slug: "how-to-build-real-time-pipelines-business-decisions",
    title: "How to Build Real-Time Data Pipelines for Faster Decisions",
    category: "Data Strategy",
    publishedAt: "2024-04-15",
    excerpt: "Delayed insights mean missed opportunities. Discover the architecture and approach to building real-time pipelines that power instant business intelligence.",
    image: "/images/blog/real-time-pipelines.jpg",
    content: [
      p("Many organizations struggle with delayed insights. By the time reports are generated, the opportunity to act has already passed. Real-time data pipelines solve this problem by delivering insights instantly."),
      p("This shift allows businesses to respond immediately to changes in operations, customer behavior, or market conditions."),
      h2("What Effective Real-Time Systems Look Like"),
      li("Continuous Data Ingestion: Data flows from apps and sensors without interruption."),
      li("Instant Processing: Data is transformed and analyzed the moment it arrives."),
      li("Low-Latency Delivery: Insights are available in dashboards in seconds."),
      li("Scalable Architecture: Systems handle increasing volumes without performance loss."),
      li("Reliable Monitoring: Pipelines are tracked to prevent failures or delays."),
      h2("The Build Approach"),
      li("Identify high-impact use cases"),
      li("Select streaming-first architecture"),
      li("Integrate data ingestion tools"),
      li("Implement real-time processing layers"),
      li("Deploy monitoring and governance systems"),
      h2("Conclusion"),
      p("Organizations that adopt real-time pipelines move faster, make better decisions, and stay ahead of competitors by leveraging live intelligence.")
    ]
  },
  {
    slug: "data-engineering-manufacturing-downtime-efficiency",
    title: "Data Engineering for Manufacturing – Reducing Downtime",
    category: "Data Strategy",
    publishedAt: "2024-04-20",
    excerpt: "Downtime is the silent killer of profitability. Learn how real-time data engineering identifies and prevents failures before they happen.",
    image: "/images/blog/manufacturing-data.jpg",
    content: [
      p("Manufacturing companies often face costly downtime and inefficient processes, typically caused by delayed visibility into operations. Real-time data engineering changes this by providing continuous insights into machine performance."),
      p("Instead of reacting to failures, companies can predict and prevent them, achieving continuous operational intelligence."),
      h2("How Leading Manufacturers Use Real-Time Data"),
      li("Enable Predictive Maintenance: Monitor machines to detect failing components early."),
      li("Reduce Unplanned Downtime: Resolve issues before they disrupt production."),
      li("Optimize Production Efficiency: Improve output and reduce waste via live insights."),
      li("Improve Supply Chain Visibility: Ensure smoother coordination across the network."),
      li("Enhance Quality Control: Detect defects instantly to reduce production losses."),
      h2("The Implementation Strategy"),
      li("Connect machines and sensors to data systems"),
      li("Build real-time data pipelines"),
      li("Implement anomaly detection models"),
      li("Integrate insights into operational workflows"),
      li("Continuously refine models based on live data"),
      h2("Conclusion"),
      p("Manufacturers that leverage real-time data gain efficiency, reduce costs, and improve reliability in an increasingly competitive industrial landscape.")
    ]
  },
  {
    slug: "building-scalable-data-finance-systems",
    title: "Building Scalable Data Finance Systems for Modern Teams",
    category: "Data Strategy",
    publishedAt: "2024-04-25",
    excerpt: "Finance teams are moving from static spreadsheets to real-time intelligence. Discover the framework for building scalable financial data systems.",
    image: "/images/blog/finance-data.jpg",
    content: [
      p("Finance teams often rely on manual reporting and static data. This limits their ability to respond quickly to changing financial conditions. Modern data systems enable a shift from manual processes to real-time financial intelligence."),
      p("This transformation improves accuracy, speed, and strategic decision-making across the entire finance function."),
      h2("What High-Performing Finance Teams Do"),
      li("Automate Data Collection: Financial data flows directly from ERP and CRM systems."),
      li("Enable Real-Time Reporting: Dashboards update instantly with latest metrics."),
      li("Improve Risk Management: Detect anomalies, fraud, and risks as they occur."),
      li("Ensure Data Accuracy: Automated systems reduce manual error and silos."),
      li("Scale Infrastructure: Systems handle growing datasets without performance decay."),
      h2("The Transformation Framework"),
      li("Replace manual spreadsheet reporting processes"),
      li("Centralize financial data from fragmented systems"),
      li("Implement real-time pipelines for live P&L visibility"),
      li("Introduce automated analytics for forecasting"),
      li("Strengthen data governance and compliance"),
      h2("Conclusion"),
      p("Finance teams that adopt scalable data systems become more agile, accurate, and strategic partners to the business.")
    ]
  },
  {
    slug: "agentic-ai-overview-evolution-of-automation",
    title: "Agentic AI – How Autonomous Systems Are Replacing Traditional Automation",
    category: "GenAI",
    publishedAt: "2024-03-10",
    excerpt: "The evolution from rule-based scripts to autonomous agents. Learn how Agentic AI is redefining enterprise automation and independence.",
    image: "/images/blog/agentic-overview.jpg",
    content: [
      p("Most businesses are still stuck in rule-based automation. But automation that only follows predefined instructions is no longer enough. The real shift is toward Agentic AI—systems that don't just execute, but decide and adapt."),
      p("This is the next evolution of intelligent systems. Companies that fail to adopt autonomous AI risk falling behind competitors that operate with significantly less human dependency."),
      h2("What Makes Agentic AI Different"),
      li("Moves Beyond Rule-Based: Traditional automation follows scripts; Agentic AI makes context-aware decisions."),
      li("Operates Autonomously: AI agents can plan and execute workflows without constant oversight."),
      li("Learns and Adapts: Systems improve performance based on real-time feedback loops."),
      li("Handles Complex Workflows: Manages multi-step processes across various business functions."),
      li("Drives Real-Time Decisions: Enables a shift from reactive to proactive operations."),
      h2("Where Businesses Are Seeing Impact"),
      p("Key areas include customer support automation, revenue optimization, autonomous operations management, and workflow orchestration across global departments."),
      h2("The Adoption Framework"),
      li("Identify high-impact automation gaps"),
      li("Replace static workflows with adaptive AI agents"),
      li("Integrate real-time data pipelines for context"),
      li("Enable continuous learning and improvement systems"),
      li("Scale autonomous capabilities across business functions"),
      h2("Conclusion"),
      p("Agentic AI is not a future trend—it is already reshaping how modern businesses operate. Organizations adopting these systems are seeing faster execution and reduced operational costs.")
    ]
  }
];

async function restore() {
  console.log("🧹 Deleting all existing 'post' documents...");
  // Safely delete existing posts to ensure routing matches new IDs
  const existingPosts = await client.fetch('*[_type == "post"]');
  console.log(`Found ${existingPosts.length} posts to delete.`);
  
  for (const post of existingPosts) {
    await client.delete(post._id);
  }
  console.log("✅ All old posts deleted.");

  console.log("🚀 Seeding 10 full-content blog posts...");
  for (const blog of blogs) {
    const doc = {
      _id: `blog-${blog.slug}`, // Fixed ID based on slug to prevent routing issues
      _type: 'post',
      title: blog.title,
      slug: { _type: 'slug', current: blog.slug },
      publishedAt: blog.publishedAt,
      excerpt: blog.excerpt,
      category: blog.category,
      content: blog.content
    };

    console.log(`Creating: ${blog.title}...`);
    try {
      await client.createIfNotExists(doc);
      console.log(`✅ Success: ${blog.slug}`);
    } catch (err) {
      console.error(`❌ Failed to create ${blog.slug}:`, err);
    }
  }
  console.log("🎉 Restoration complete!");
}

restore().catch(console.error);
