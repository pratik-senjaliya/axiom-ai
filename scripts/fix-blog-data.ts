const { createClient } = require('@sanity/client');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN || process.env.SANITY_API_TOKEN,
});

function h2(text) { return { _key: Math.random().toString(36).substr(2, 9), _type: 'block', style: 'h2', children: [{ _type: 'span', text, marks: [] }], markDefs: [] }; }
function h3(text) { return { _key: Math.random().toString(36).substr(2, 9), _type: 'block', style: 'h3', children: [{ _type: 'span', text, marks: [] }], markDefs: [] }; }
function p(text) { return { _key: Math.random().toString(36).substr(2, 9), _type: 'block', style: 'normal', children: [{ _type: 'span', text, marks: [] }], markDefs: [] }; }
function li(text) { return { _key: Math.random().toString(36).substr(2, 9), _type: 'block', style: 'normal', listItem: 'bullet', level: 1, children: [{ _type: 'span', text, marks: [] }], markDefs: [] }; }

async function run() {
  console.log("🚀 Starting Full 10-Blog Content Restoration...");

  // 1. Cleanup: ONLY delete 'post' type
  const posts = await client.fetch(`*[_type == "post"]{ _id }`);
  console.log(`Cleaning up ${posts.length} existing posts...`);
  for (const post of posts) { await client.delete(post._id); }

  const fullBlogs = [
    // 1. WHY MOST GENAI PROJECTS FAIL
    {
      title: "Why Most GenAI Projects Fail: Escaping the AI Pilot Trap",
      slug: "why-most-gen-ai-projects-fail",
      category: "AI Strategy",
      relatedService: "ai",
      excerpt: "Many companies begin their AI journey by experimenting with tools rather than solving real business challenges. Learn why 85% of GenAI projects fail and how to be in the successful 15%.",
      content: [
        h2("Why Most GenAI Projects Fail"),
        p("One of the biggest challenges enterprises face today is the “AI pilot trap.” While many companies launch multiple experiments, they often struggle to scale them into production systems."),
        h3("1. Starting With Technology Instead of Business Problems"),
        p("Successful AI initiatives start with clear objectives such as reducing operational costs or accelerating decision-making, rather than just experimenting with tools."),
        h3("2. The Pilot-to-Production Gap"),
        p("Proof-of-concept projects often demonstrate value in controlled environments but fail to scale across the organization without infrastructure planning."),
        h3("3. Weak Data Foundations"),
        p("AI systems rely on high-quality data. Organizations often struggle with silos, inconsistent datasets, and lack of governance."),
        li("Data silos"), li("Inconsistent datasets"), li("Lack of governance"), li("Poor data quality"),
        h2("How the Successful 15% Deploy GenAI"),
        p("Organizations that successfully scale AI focus on business outcomes, invest in data infrastructure, and design for production from day one.")
      ]
    },
    // 2. 7 POWERFUL USE CASES FOR AI AGENTS IN FINANCE
    {
      title: "7 Powerful Use Cases for AI Agents in the Finance Industry",
      slug: "7-powerful-use-cases-ai-finance",
      category: "Finance AI",
      relatedService: "ai",
      excerpt: "Financial institutions are under constant pressure to improve efficiency. Discover 7 high-impact use cases where AI agents are delivering measurable value.",
      content: [
        h2("7 Powerful Use Cases for AI Agents in the Finance Industry"),
        p("Financial institutions are under constant pressure to improve operational efficiency and strengthen risk management. AI agents are transforming how banks and fintechs operate."),
        h3("1. Fraud Detection and Prevention"),
        p("AI agents can analyze millions of transactions in real time to detect suspicious activity and reduce false positives."),
        h3("2. Intelligent Customer Support Agents"),
        p("Virtual assistants handle routine inquiries, assisting with loan applications and account questions instantly."),
        h3("3. Automated Financial Advisory"),
        p("Analyzing customer spending behavior to recommend personalized investment strategies and portfolio adjustments."),
        h3("4. Risk Management and Credit Scoring"),
        p("Broader data analysis leads to more accurate risk assessments and better lending decisions."),
        h3("5. Intelligent Document Processing"),
        p("Extracting key info from loan applications and contracts to accelerate approval workflows."),
        h3("6. Compliance Monitoring"),
        p("Automating compliance reporting and monitoring transactions for regulatory violations."),
        h3("7. Real-Time Market Intelligence"),
        p("Continuously monitoring market signals and generating actionable insights for traders and analysts.")
      ]
    },
    // 3. 7 AI AGENTS FOR MANUFACTURING
    {
      title: "7 AI Agents for Smarter Manufacturing: Predictive Maintenance to Efficiency",
      slug: "7-ai-agents-manufacturing-predictive-maintenance",
      category: "Manufacturing AI",
      relatedService: "ai",
      excerpt: "From predictive maintenance to supply chain intelligence, learn how AI agents powered by strong data engineering are transforming factories.",
      content: [
        h2("7 AI Agents We Can Build for the Manufacturing Industry"),
        p("Manufacturing companies generate massive amounts of sensor and production data. AI agents can transform this data into smarter operations."),
        h3("1. Predictive Maintenance AI Agent"),
        p("Identify early warning signs of equipment failure to prevent unplanned downtime and reduce costs."),
        h3("2. Production Optimization AI Agent"),
        p("Analyze operational data to identify inefficiencies and bottlenecks in the production line."),
        h3("3. Supply Chain Intelligence Agent"),
        p("Forecast raw material demand and identify potential disruptions before they occur."),
        h3("4. Smart Factory Data Integration"),
        p("Unify disconnected ERP, IoT, and production systems into a centralized analytics layer."),
        h3("5. Energy Optimization Agent"),
        p("Monitor energy usage and recommend optimized operating schedules to reduce environmental impact."),
        h3("6. Demand Forecasting"),
        p("Align production with market demand more effectively using historical sales and market trends."),
        h3("7. Performance Analytics Agent"),
        p("Provide real-time visibility across plants for faster, data-driven leadership decisions.")
      ]
    },
    // 4. DATA ANALYTICS: FROM RAW DATA TO INTELLIGENT DECISION SYSTEMS
    {
      title: "Data Analytics: From Raw Data to Intelligent Decision Systems",
      slug: "data-analytics-intelligent-decision-systems",
      category: "Data Strategy",
      relatedService: "data",
      excerpt: "Most organizations today are data-rich but insight-poor. Explore how to build end-to-end data intelligence systems that drive real business outcomes.",
      content: [
        h2("Data Analytics: From Raw Data to Intelligent Decision Systems"),
        p("We design and deploy modern data ecosystems that convert fragmented data into real-time intelligence. From dashboards to predictive models, we enable organizations to move from reporting to decision automation."),
        h3("The Problem We Solve"),
        p("Disconnected systems create fragmented visibility. Business teams often rely on intuition instead of intelligence, and data teams spend more time preparing data than using it."),
        li("Disconnected systems create fragmented visibility"),
        li("Reports are delayed, static, and reactive"),
        li("Business teams rely on intuition instead of intelligence"),
        li("Data teams spend more time preparing data than using it"),
        h3("Our Approach"),
        p("At Sync Origins, we go beyond dashboards. We build scalable, AI-ready data architectures that power real business outcomes including Data Engineering, Warehousing, and Advanced Analytics.")
      ]
    },
    // 5. MODERN DATA STACK IN 2026
    {
      title: "Modern Data Stack in 2026 – What Every Company Must Build First",
      slug: "modern-data-stack-in-2026",
      category: "Data Strategy",
      relatedService: "data",
      excerpt: "One of the biggest challenges growing companies face is fragmented data systems. The modern data stack becomes critical for unified, scalable foundations.",
      content: [
        p("One of the biggest challenges growing companies face is fragmented data systems. Different teams rely on disconnected tools, leading to inconsistent insights and slow decision-making."),
        p("This is where the modern data stack becomes critical. It provides a unified, scalable foundation that enables real-time access to reliable data across the organization."),
        p("Traditional systems were built for batch processing. They cannot support the speed and flexibility required in today’s environment."),
        p("Modern data stacks are designed for real-time data flow, cloud scalability, and seamless integration. They allow businesses to move from reactive reporting to proactive decision-making."),
        h2("What High-Growth Companies Do Differently"),
        li("Focus on Real-Time Data: Organizations prioritize instant data processing instead of delayed batch updates."),
        li("Build Cloud-Native Architectures: They adopt scalable infrastructure that grows with data demand."),
        li("Unify Data Sources: All data—customer, operational, financial—is centralized for consistency."),
        li("Enable Self-Service Analytics: Teams can access insights without relying heavily on technical departments."),
        li("Invest in Data Governance: Strong data quality and security frameworks ensure trust in insights."),
        h2("The Execution Framework"),
        li("1. Define core business metrics"),
        li("2. Centralize data into a unified platform"),
        li("3. Implement real-time data pipelines"),
        li("4. Enable analytics and reporting layers"),
        li("5. Continuously optimize performance and scalability"),
        h3("Companies that build a strong modern data stack early gain a lasting competitive advantage.")
      ]
    },
    // 6. HOW TO BUILD REAL-TIME DATA PIPELINES
    {
      title: "How to Build Real-Time Data Pipelines for Faster Business Decisions",
      slug: "how-to-build-real-time-pipelines-business-decisions",
      category: "Data Engineering",
      relatedService: "data",
      excerpt: "Real-time data pipelines deliver insights instantly, allowing businesses to respond immediately to changes in operations, customer behavior, or market conditions.",
      content: [
        p("Many organizations struggle with delayed insights. By the time reports are generated, the opportunity to act has already passed."),
        p("Real-time data pipelines solve this problem by delivering insights instantly. They continuously process and move data as it is generated."),
        p("This shift allows businesses to respond immediately to changes in operations, customer behavior, or market conditions."),
        h2("What Effective Real-Time Systems Look Like"),
        li("Continuous Data Ingestion: Data flows from applications, systems, and devices without interruption."),
        li("Instant Processing: Data is transformed and analyzed the moment it arrives."),
        li("Low-Latency Delivery: Insights are available in dashboards or systems in seconds."),
        li("Scalable Architecture: Systems handle increasing data volumes without performance issues."),
        li("Reliable Monitoring: Pipelines are continuously tracked to prevent failures or delays."),
        h2("The Build Approach"),
        li("1. Identify high-impact use cases"),
        li("2. Select streaming-first architecture"),
        li("3. Integrate data ingestion tools"),
        li("4. Implement real-time processing layers"),
        li("5. Deploy monitoring and governance systems"),
        h3("Organizations that adopt real-time pipelines move faster, make better decisions, and stay ahead of competitors.")
      ]
    },
    // 7. AGENTIC AI IN MANUFACTURING
    {
      title: "Agentic AI in Manufacturing – Self-Optimizing Operations & Predictive Production",
      slug: "agentic-ai-in-manufacturing-self-optimizing-operations",
      category: "Manufacturing AI",
      relatedService: "ai",
      excerpt: "Agentic AI introduces self-optimizing manufacturing systems that continuously learn and improve, transforming smart manufacturing and predictive maintenance.",
      content: [
        p("Manufacturing operations are becoming more complex, but traditional systems are struggling to keep up."),
        p("Manual monitoring and reactive processes lead to inefficiencies, downtime, and increased costs."),
        p("Agentic AI introduces self-optimizing manufacturing systems that continuously learn and improve."),
        p("This is transforming smart manufacturing, predictive maintenance, industrial AI, and real-time production systems."),
        h2("How Agentic AI Transforms Manufacturing"),
        li("Predictive Production Systems: AI predicts failures before they happen and adjusts operations proactively."),
        li("Self-Optimizing Workflows: Production lines adapt automatically based on performance data."),
        li("Real-Time Equipment Monitoring: Machines are continuously analyzed for efficiency and anomalies."),
        li("Supply Chain Optimization: AI systems coordinate inventory and logistics dynamically."),
        li("Quality Control Automation: Defects are detected instantly, reducing waste."),
        h2("Business Impact"),
        li("Reduced downtime"), li("Improved production efficiency"), li("Lower operational costs"), li("Higher product quality"), li("Faster response to demand changes"),
        h2("The Implementation Approach"),
        li("1. Connect machines and IoT devices"),
        li("2. Build real-time data infrastructure"),
        li("3. Deploy AI agents for monitoring and optimization"),
        li("4. Integrate systems across production lines"),
        li("5. Continuously refine models with live data"),
        h3("Manufacturers adopting AI-driven operations are outperforming those relying on traditional methods.")
      ]
    },
    // 8. AGENTIC AI IN RETAIL
    {
      title: "Agentic AI in Retail – Autonomous Customer Journeys & Pricing Optimization",
      slug: "agentic-ai-retail-autonomous-pricing",
      category: "Retail AI",
      relatedService: "ai",
      excerpt: "Agentic AI enables fully autonomous retail systems that optimize every part of the customer journey, from personalization to dynamic pricing.",
      content: [
        p("Retail and e-commerce are evolving faster than ever. Customer expectations are higher, and competition is intense."),
        p("Traditional systems cannot keep up with the need for personalization, dynamic pricing, and real-time inventory management."),
        p("Agentic AI enables fully autonomous retail systems that optimize every part of the customer journey."),
        p("This is driving AI in retail, e-commerce personalization, dynamic pricing strategies, and inventory optimization."),
        h2("What Autonomous Retail Looks Like"),
        li("Personalized Customer Journeys: AI adapts experiences in real time based on behavior."),
        li("Dynamic Pricing Optimization: Prices adjust automatically based on demand and competition."),
        li("Real-Time Inventory Management: Stock levels are continuously optimized to prevent shortages."),
        li("Autonomous Marketing Campaigns: AI agents launch and optimize campaigns without manual input."),
        li("Customer Behavior Prediction: Systems anticipate needs before customers act."),
        h2("Key Benefits"),
        li("Higher conversion rates"), li("Improved customer experience"), li("Reduced inventory costs"), li("Increased revenue per customer"), li("Faster decision-making"),
        h2("The Execution Model"),
        li("1. Capture real-time customer data"),
        li("2. Build AI-driven personalization engines"),
        li("3. Implement dynamic pricing systems"),
        li("4. Integrate inventory optimization tools"),
        li("5. Continuously refine based on customer behavior")
      ]
    },
    // 9. BUILDING SCALABLE DATA SYSTEMS FOR FINANCE
    {
        title: "Building Scalable Data Systems for High-Performance Finance Teams",
        slug: "building-scalable-data-finance-systems",
        category: "Finance AI",
        relatedService: "data",
        excerpt: "Shift from silos to financial intelligence with data architectures designed for reporting accuracy and strategic agility.",
        content: [
            h2("Building Scalable Data Systems for Finance"),
            p("Finance teams often rely on manual reporting and static data. This limits their ability to respond quickly to changing financial conditions."),
            p("Modern data systems enable a shift from manual processes to real-time financial intelligence. This transformation improves accuracy, speed, and strategic decision-making."),
            h2("What High-Performing Finance Teams Do"),
            h3("Automate Data Collection"),
            p("Financial data flows directly from systems without manual intervention."),
            h3("Enable Real-Time Reporting"),
            p("Dashboards update instantly with the latest financial metrics."),
            h3("Improve Risk Management"),
            p("Anomalies and risks are detected as they occur."),
            h3("Ensure Data Accuracy"),
            p("Automated systems reduce human error."),
            h3("Scale Infrastructure"),
            p("Systems handle growing financial data without performance issues."),
            h2("The Transformation Framework"),
            li("Replace manual reporting processes"),
            li("Centralize financial data systems"),
            li("Implement real-time pipelines"),
            li("Introduce automated analytics"),
            li("Strengthen governance and compliance"),
            p("Finance teams that adopt scalable data systems become more agile, accurate, and strategic.")
        ]
    },
    // 10. AGENTIC AI OVERVIEW: EVOLUTION OF AUTOMATION
    {
        title: "Agentic AI Overview: The Evolution of Intelligent Automation",
        slug: "agentic-ai-overview-evolution-of-automation",
        category: "AI Strategy",
        relatedService: "ai",
        excerpt: "Understand the shift from simple automation to autonomous agents that can plan, execute, and adapt to complex enterprise workflows.",
        content: [
            h2("The Evolution of Intelligent Automation"),
            p("The transition from RPA (Robotic Process Automation) to Agentic AI marks a fundamental shift in business operations."),
            p("RPA was built to handle fixed, repetitive tasks. Agentic AI is designed to reason, plan, and execute open-ended goals."),
            h3("Autonomous Reasoning and Planning"),
            p("AI agents don't just follow steps; they break down objectives and determine the best path forward autonomously."),
            h3("Multi-Step Workflow Execution"),
            p("Unlike traditional bots, agents can interact with legacy systems, modern APIs, and internal documents across multiple stages."),
            h3("Continuous Optimization"),
            p("These systems learn from performance data, refining their approach to maximize efficiency and accuracy over time."),
            h2("Enterprise Capabilities of AI Agents"),
            li("Cross-Functional Data Retrieval: Access and synthesize info from across the business."),
            li("Real-Time Policy Adherence: Ensuring all automated actions comply with current business rules."),
            li("Decision Support for Leadership: Providing the context needed for complex human decisions."),
            li("End-to-End Task Ownership: Managing entire processes from start to finish without human handoffs."),
            h2("Impact on Operations"),
            p("Companies adopting Agentic AI are reducing operational friction, accelerating response times, and enabling a new level of strategic focus for their teams.")
        ]
    }
  ];

  for (const blog of fullBlogs) {
    console.log(`🚀 Restore: ${blog.slug}`);
    await client.createOrReplace({
      _type: 'post',
      _id: `blog-${blog.slug}`,
      ...blog,
      slug: { _type: 'slug', current: blog.slug },
      publishedAt: new Date().toISOString().split('T')[0],
      author: "AxiomAI Team",
      readTime: "5 min read",
      seo: {
        _type: 'seo',
        metaTitle: `${blog.title} | AxiomAI Insights`,
        metaDescription: blog.excerpt,
      }
    });
  }

  console.log("\n✨ 10-Blog FULL CONTENT restoration complete!");
}

run().catch(console.error);
