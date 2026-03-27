import { createClient } from "next-sanity";

require("dotenv").config({ path: ".env.local" });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.NEXT_PUBLIC_SANITY_TOKEN || process.env.SANITY_API_TOKEN;

if (!projectId || !dataset || !token) {
  console.error(
    "Missing Sanity env. Required: NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, and SANITY_API_TOKEN (or NEXT_PUBLIC_SANITY_TOKEN)."
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01",
  useCdn: false,
  token,
});

function textBlock(text: string, style: "normal" | "h2" = "normal") {
  return {
    _key: Math.random().toString(36).slice(2),
    _type: "block",
    style,
    children: [
      {
        _key: Math.random().toString(36).slice(2),
        _type: "span",
        marks: [],
        text,
      },
    ],
  };
}

const realPosts = [
  {
    title:
      "Agentic AI: How Autonomous Systems Are Replacing Traditional Automation in Modern Businesses",
    slug: "agentic-ai-autonomous-systems-vs-traditional-automation",
    excerpt:
      "Agentic AI moves beyond rule-based automation by enabling systems to make context-aware decisions, adapt continuously, and execute complex workflows with minimal human dependency.",
    category: "Agentic AI",
    author: "Axiom AI Team",
    authorRole: "AI Strategy",
    readTime: "6 min read",
    publishedAt: "2026-03-26",
    content: [
      textBlock(
        "Most businesses are still stuck in rule-based automation. But automation that only follows predefined instructions is no longer enough."
      ),
      textBlock(
        "The real shift is toward Agentic AI: systems that do not just execute tasks, but make decisions, adapt, and act independently."
      ),
      textBlock(
        "This is the next evolution of AI automation, intelligent systems, and enterprise AI transformation."
      ),
      textBlock(
        "Companies that fail to adopt autonomous AI systems risk falling behind competitors that operate faster, smarter, and with less human dependency."
      ),
      textBlock("What Makes Agentic AI Different", "h2"),
      textBlock(
        "Moves Beyond Rule-Based Automation: traditional automation follows scripts. Agentic AI makes context-aware decisions."
      ),
      textBlock(
        "Operates Autonomously: AI agents can plan, execute, and optimize workflows without constant human input."
      ),
      textBlock(
        "Learns and Adapts Continuously: systems improve performance based on real-time data and feedback loops."
      ),
      textBlock(
        "Handles Complex Workflows: from operations to customer interactions, AI agents manage multi-step processes."
      ),
      textBlock(
        "Drives Real-Time Decision Making: businesses shift from reactive to proactive operations."
      ),
      textBlock("Where Businesses Are Seeing Impact", "h2"),
      textBlock("Customer support automation"),
      textBlock("Revenue optimization systems"),
      textBlock("Autonomous operations management"),
      textBlock("AI-driven decision intelligence"),
      textBlock("Workflow orchestration across departments"),
      textBlock("The Adoption Framework", "h2"),
      textBlock("Identify high-impact automation gaps"),
      textBlock("Replace static workflows with AI agents"),
      textBlock("Integrate real-time data pipelines"),
      textBlock("Enable continuous learning systems"),
      textBlock("Scale across business functions"),
      textBlock("Why This Matters Now", "h2"),
      textBlock(
        "Agentic AI is not a future trend. It is already reshaping how modern businesses operate."
      ),
      textBlock(
        "Companies adopting autonomous AI systems, AI agents, and intelligent automation platforms are seeing faster execution, reduced costs, and improved decision accuracy."
      ),
      textBlock("Call to Action", "h2"),
      textBlock(
        "If your business is still relying on traditional automation, now is the time to evolve."
      ),
      textBlock(
        "Start by identifying one workflow that can be transformed into an autonomous system and scale from there."
      ),
    ],
  },
  {
    title:
      "Agentic AI in Finance: Building Autonomous Systems for Reporting, Compliance and Decision-Making",
    slug: "agentic-ai-in-finance-autonomous-reporting-compliance",
    excerpt:
      "Finance teams can use Agentic AI to automate reporting, monitor compliance in real time, detect anomalies quickly, and improve forecasting accuracy.",
    category: "AI in Finance",
    author: "Axiom AI Team",
    authorRole: "Finance Transformation",
    readTime: "6 min read",
    publishedAt: "2026-03-26",
    content: [
      textBlock(
        "Finance teams are overwhelmed with manual processes, delayed reporting, and compliance complexity."
      ),
      textBlock(
        "Traditional automation helps, but it still requires constant oversight."
      ),
      textBlock(
        "Agentic AI introduces a new model: autonomous finance systems that operate with minimal human intervention."
      ),
      textBlock(
        "This is redefining financial automation, real-time reporting, AI in finance, and intelligent decision-making systems."
      ),
      textBlock("What Autonomous Finance Looks Like", "h2"),
      textBlock(
        "Real-Time Financial Reporting: reports are generated continuously, not at the end of the cycle."
      ),
      textBlock(
        "Automated Compliance Monitoring: AI systems track regulations and flag risks instantly."
      ),
      textBlock(
        "Intelligent Decision Support: AI agents provide insights for forecasting and strategic planning."
      ),
      textBlock(
        "Fraud Detection in Real Time: anomalies are identified and addressed immediately."
      ),
      textBlock(
        "Self-Optimizing Financial Workflows: processes improve automatically based on historical data."
      ),
      textBlock("Key Benefits for Finance Teams", "h2"),
      textBlock("Reduced manual workload"),
      textBlock("Faster financial close cycles"),
      textBlock("Improved data accuracy"),
      textBlock("Stronger compliance and risk management"),
      textBlock("Better forecasting and planning"),
      textBlock("The Implementation Strategy", "h2"),
      textBlock("Automate data ingestion from financial systems"),
      textBlock("Deploy AI agents for reporting and compliance"),
      textBlock("Integrate real-time analytics dashboards"),
      textBlock("Implement governance and audit frameworks"),
      textBlock("Scale across financial operations"),
      textBlock("Why Finance Leaders Are Adopting Agentic AI", "h2"),
      textBlock(
        "The demand for real-time financial insights, automated compliance, and AI-driven finance transformation is growing rapidly."
      ),
      textBlock(
        "Organizations that adopt early gain a strategic advantage through speed, accuracy, and efficiency."
      ),
      textBlock("Call to Action", "h2"),
      textBlock(
        "If your finance team is still relying on spreadsheets and delayed reporting, it is time to upgrade."
      ),
      textBlock(
        "Start building autonomous financial systems that deliver insights instantly and scale with your business."
      ),
    ],
  },
] as const;

async function seedBlogPageSingleton() {
  await client.createOrReplace({
    _id: "blogPageSingleton",
    _type: "blogPage",
    title: "Articles & Perspectives",
    description:
      "Strategic thought leadership on the future of enterprise intelligence, AI implementation, and business transformation.",
    newsletterTitle: "Stay Ahead of the Curve",
    newsletterDescription:
      "Join 5,000+ executives receiving monthly insights on autonomous systems and ERP strategies.",
    newsletterButtonText: "Subscribe to Insights",
    newsletterButtonLink: "/contact",
  });
}

async function deleteExistingPosts() {
  const posts = await client.fetch<{ _id: string }[]>(`*[_type == "post"]{_id}`);
  if (!posts.length) return;
  const tx = client.transaction();
  posts.forEach((p) => tx.delete(p._id));
  await tx.commit();
}

async function seedPosts() {
  for (const post of realPosts) {
    await client.createOrReplace({
      _id: `post-${post.slug}`,
      _type: "post",
      title: post.title,
      slug: { _type: "slug", current: post.slug },
      excerpt: post.excerpt,
      category: post.category,
      publishedAt: post.publishedAt,
      author: post.author,
      authorRole: post.authorRole,
      readTime: post.readTime,
      content: post.content,
    });
  }
}

async function run() {
  console.log("Replacing existing posts with your real insights content...");
  await seedBlogPageSingleton();
  await deleteExistingPosts();
  await seedPosts();
  console.log(`Done. Seeded ${realPosts.length} real posts.`);
}

run().catch((error) => {
  console.error("Blog seeding failed:", error);
  process.exit(1);
});
