/**
 * Seeds Finance page singleton + one demo Case Study into Sanity.
 * Run: node --env-file=.env.local scripts/seed-finance-case-study.mjs
 */
import { createClient } from "@sanity/client";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

// Load TS demo modules via ts-node-less path: duplicate minimal seed inline by dynamic import of compiled? 
// Prefer re-defining seed docs here in plain JS for zero transpile deps.

function pt(...paragraphs) {
  return paragraphs.map((text, i) => ({
    _type: "block",
    _key: `p${i}_${Math.random().toString(36).slice(2, 8)}`,
    style: "normal",
    markDefs: [],
    children: [{ _type: "span", _key: `s${i}`, text, marks: [] }],
  }));
}

function titledItem(title, description) {
  return { _key: Math.random().toString(36).slice(2, 10), title, description: pt(description) };
}

const SLUG = "finance-close-automation";

const financePage = {
  _id: "financePageSingleton",
  _type: "financePage",
  hero: {
    badge: "Finance Transformation",
    title: "Transform Finance Through AI, Data &",
    titleHighlight: "Intelligent Enterprise Systems",
    description: pt(
      "SyncOrigins helps CFOs and finance leaders modernize operations with AI, unified data platforms, and intelligent enterprise systems — delivering faster closes, clearer insights, and scalable, compliant finance operations."
    ),
    primaryCta: { text: "Talk to Our Finance Experts", link: "/contact", variant: "primary" },
    secondaryCta: { text: "Explore Finance Solutions", link: "#solutions", variant: "secondary" },
  },
  challengesHeadline: "Finance Industry Challenges",
  challengesDescription: pt(
    "Finance teams are under pressure to move faster with greater accuracy — while legacy systems, fragmented data, and manual work slow every close cycle."
  ),
  challenges: [
    titledItem("Legacy finance systems", "Aging ERPs and spreadsheets create brittle close processes that cannot support real-time decisions or AI-ready workflows."),
    titledItem("Fragmented financial data", "Data trapped across GL, subledgers, and operational systems makes a single source of truth nearly impossible."),
    titledItem("Manual and inefficient processes", "Month-end close, reconciliations, and reporting still rely on heavy manual effort and tribal knowledge."),
    titledItem("Delayed financial insights", "Leaders wait days or weeks for accurate numbers, limiting agility in pricing, planning, and cash decisions."),
    titledItem("Increasing compliance requirements", "Regulatory, audit, and internal control demands keep rising without matching process or system maturity."),
    titledItem("Difficulty scaling AI initiatives", "AI experiments stall without clean data foundations, governed models, and production-ready delivery."),
  ],
  solutionsHeadline: "Our Finance Transformation Solutions",
  solutionsDescription: pt(
    "End-to-end capabilities that redesign finance processes, modernize platforms, and operationalize AI where it creates measurable value."
  ),
  solutions: [
    titledItem("Finance Process Transformation", "Redesign close, FP&A, AP/AR, and controlling processes for speed, controls, and scalability."),
    titledItem("AI-Powered Finance Operations", "Deploy AI agents and automation for reconciliations, anomaly detection, forecasting, and narrative reporting."),
    titledItem("Financial Data & Analytics", "Build trusted finance data models, dashboards, and self-serve analytics for CFO and business partners."),
    titledItem("ERP Modernisation & Integration", "Modernize Dynamics 365 and connected finance systems with clean integrations and optimized processes."),
    titledItem("Intelligent Automation", "Automate high-volume finance workflows with RPA, orchestration, and human-in-the-loop controls."),
    titledItem("Risk, Compliance & Reporting", "Strengthen audit readiness, controls, and regulatory reporting with transparent, repeatable processes."),
  ],
  clientsHeadline: "Clients We Serve",
  clientsDescription: pt("We partner with finance organizations that need production-grade transformation — not slideware."),
  clients: [
    titledItem("Enterprise CFOs & Controllers", "Global and mid-market finance leadership teams modernizing close, reporting, and decision support."),
    titledItem("Banks & Financial Services", "Institutions improving operational finance, risk reporting, and customer-facing finance platforms."),
    titledItem("Fintech & Digital Finance", "Product and ops teams scaling secure, compliant, data-driven finance capabilities."),
    titledItem("Shared Service Centers", "Captive and outsourced finance hubs seeking automation, standardization, and quality at scale."),
  ],
  outcomesHeadline: "Business Outcomes",
  outcomesDescription: pt("Transformation measured in cycle time, visibility, accuracy, and a finance operating model ready for AI."),
  outcomes: [
    titledItem("Faster financial decision-making", "Leaders get timely, trusted numbers to act with confidence."),
    titledItem("Improved data visibility", "One coherent view across entities, systems, and operational drivers."),
    titledItem("Reduced manual effort", "Teams spend less time on repetitive close and reporting work."),
    titledItem("More accurate forecasting", "Planning grounded in cleaner data and smarter predictive models."),
    titledItem("Greater operational efficiency", "Leaner finance processes with stronger controls and fewer bottlenecks."),
    titledItem("Scalable, AI-ready finance operations", "A foundation that supports automation and intelligent systems as you grow."),
  ],
  successStoriesHeadline: "Finance Transformation Success Stories",
  successStories: [
    {
      _key: "story1",
      title: "Accelerating Month-End Close with AI & Automation",
      clientChallenge: pt("A multi-entity enterprise finance team struggled with a 12+ day close, spreadsheet-heavy reconciliations, and delayed management reporting."),
      solutionDelivered: pt("SyncOrigins redesigned the close calendar, automated reconciliations, and built a governed finance data layer with exception-based AI workflows."),
      keyTransformation: pt("Finance shifted from manual compilation to continuous close readiness with clear ownership, controls, and real-time visibility."),
      businessOutcomes: pt("Close cycle reduced by ~40%, reconciliation effort cut significantly, and leadership reporting available days earlier each month."),
      ctaText: "Read Case Study",
      ctaLink: `/case-studies/${SLUG}`,
    },
  ],
  processHeadline: "Finance Transformation Process & Delivery",
  processDescription: pt("A practical delivery model from discovery to scale — focused on outcomes, not activity."),
  process: [
    { _key: "s1", step: "01", title: "Discover & Assess", description: pt("Map current processes, systems, data quality, and pain points across finance operations.") },
    { _key: "s2", step: "02", title: "Define Transformation Priorities", description: pt("Align on value cases, sequencing, and success metrics with finance and IT stakeholders.") },
    { _key: "s3", step: "03", title: "Design the Solution", description: pt("Architect target processes, data models, integrations, and AI/automation opportunities.") },
    { _key: "s4", step: "04", title: "Implement & Integrate", description: pt("Build and integrate platforms, workflows, and analytics with production-grade quality.") },
    { _key: "s5", step: "05", title: "Validate & Optimise", description: pt("Test controls, measure outcomes, and refine processes with finance users in the loop.") },
    { _key: "s6", step: "06", title: "Scale & Continuously Improve", description: pt("Roll out across entities and expand AI use cases with sustained governance and support.") },
  ],
  whyUsHeadline: "Why Choose SyncOrigins for Finance",
  whyUsDescription: pt("We combine AI, data, and ERP expertise with a finance-first mindset and production delivery discipline."),
  whyUs: [
    titledItem("AI, Data & ERP expertise", "One team that connects intelligent systems, trusted data, and enterprise platforms."),
    titledItem("Finance-focused transformation", "We speak CFO language — close, controls, forecast quality, and operating leverage."),
    titledItem("Business-first approach", "Technology follows value cases and process redesign, not the other way around."),
    titledItem("Production-focused execution", "We ship durable solutions that finance teams can run day-to-day."),
    titledItem("Scalable enterprise solutions", "Architected for multi-entity growth, compliance, and ongoing AI adoption."),
  ],
  faqs: [
    { _key: "f1", question: "What does SyncOrigins mean by finance transformation?", answer: pt("We redesign finance processes, data foundations, and enterprise systems so close, reporting, planning, and compliance become faster, more accurate, and AI-ready.") },
    { _key: "f2", question: "Do you work with existing ERP platforms?", answer: pt("Yes. We modernize and integrate platforms such as Dynamics 365 and adjacent finance systems, improving processes and data quality without unnecessary rip-and-replace.") },
    { _key: "f3", question: "Where does AI create the most value in finance?", answer: pt("High-impact areas include reconciliations, anomaly detection, forecasting support, narrative reporting, and exception handling — once data and controls are ready.") },
    { _key: "f4", question: "How do you keep transformation audit-ready?", answer: pt("Controls, evidence trails, and clear ownership are designed into processes and systems from day one, so speed does not come at the cost of compliance.") },
    { _key: "f5", question: "How long does a typical engagement take?", answer: pt("Discovery and prioritization can start quickly. Delivery timelines depend on scope — from focused automation waves to multi-workstream ERP and data programs.") },
    { _key: "f6", question: "Can you support shared service and multi-entity models?", answer: pt("Yes. We design for standardization across entities and shared service centers while allowing local variations where they are required.") },
  ],
  finalCta: {
    badgeText: "Finance Transformation",
    title: "Ready to Transform Your Finance Operations?",
    description: pt("Talk with our finance experts about accelerating close, unlocking insights, and building AI-ready finance operations."),
    buttonText: "Talk to Our Finance Experts",
    buttonLink: "/contact",
  },
  seo: {
    metaTitle: "Finance Transformation Services | SyncOrigins",
    metaDescription: "Transform finance through AI, data & intelligent enterprise systems. Process transformation, ERP modernisation, automation, analytics, and compliance.",
  },
};

const caseStudy = {
  _id: `caseStudy.${SLUG}`,
  _type: "caseStudy",
  title: "Accelerating Month-End Close with AI & Automation",
  slug: { _type: "slug", current: SLUG },
  excerpt: "How SyncOrigins helped a multi-entity finance organization cut close cycle time and replace spreadsheet-heavy reconciliations with governed automation.",
  publishedAt: "2025-11-12T10:00:00.000Z",
  relatedService: "finance",
  heroBadge: "Case Study · Finance",
  aboutClientHeadline: "About the Client",
  aboutClient: pt(
    "A multi-entity enterprise with regional finance teams and a shared service center supporting close, consolidations, and management reporting.",
    "Leadership needed a faster, more controlled close without disrupting ERP investments already in place."
  ),
  challengeHeadline: "The Challenge",
  challenge: pt(
    "Month-end close routinely stretched beyond 12 days. Reconciliations lived in spreadsheets, ownership was unclear, and exceptions surfaced late.",
    "Fragmented finance data across entities delayed management packs and made it difficult to introduce AI safely into production processes."
  ),
  approachHeadline: "Our Solutions / Approach",
  approach: pt(
    "We assessed close activities end-to-end, then redesigned the close calendar with clear owners, SLAs, and control checkpoints.",
    "Next we built a governed finance data layer, automated high-volume reconciliations, and introduced AI-assisted exception detection with human-in-the-loop review.",
    "Finance users were trained on exception queues and dashboards so the new operating model could stick beyond go-live."
  ),
  outcomesHeadline: "Outcomes / Result",
  outcomes: pt(
    "The organization moved from reactive, spreadsheet-driven close work to continuous close readiness with earlier visibility for leadership.",
    "Finance capacity shifted from manual compilation toward analysis, controls, and decision support."
  ),
  outcomeMetrics: [
    { _key: "m1", value: "~40%", label: "Faster close cycle" },
    { _key: "m2", value: "Days earlier", label: "Management reporting" },
    { _key: "m3", value: "Fewer", label: "Manual reconciliations" },
  ],
  testimonialsHeadline: "Testimonials",
  testimonials: [
    {
      _key: "t1",
      quote: pt("SyncOrigins helped us turn close from a fire drill into a managed process. We finally have visibility early enough to act."),
      author: "VP Finance",
      role: "Corporate Finance",
      company: "Enterprise Client",
    },
  ],
  seo: {
    metaTitle: "Month-End Close Automation Case Study | SyncOrigins",
    metaDescription: "Case study: SyncOrigins accelerated month-end close with AI, automation, and a governed finance data foundation.",
  },
};

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_TOKEN;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

if (!projectId || !token) {
  console.error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_TOKEN");
  process.exit(1);
}

const client = createClient({ projectId, dataset, apiVersion, token, useCdn: false });

async function main() {
  console.log(`Seeding to ${projectId}/${dataset}...`);
  const tx = client.transaction().createOrReplace(financePage).createOrReplace(caseStudy);
  await tx.commit();
  console.log("✓ financePageSingleton published");
  console.log(`✓ case study /case-studies/${SLUG} published`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
