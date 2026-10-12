/**
 * Seeds Finance page singleton + one demo Case Study into Sanity.
 * Run: npm run seed:finance
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
  heroMetrics: [
    { _key: "m1", value: "Faster close", label: "Reduced cycle time with automation" },
    { _key: "m2", value: "70+", label: "Finance & enterprise programs supported" },
    { _key: "m3", value: "Audit-ready", label: "Controls built into every delivery" },
  ],
  challengesHeadline: "Finance Challenges We Solve",
  challenges: [
    titledItem("Legacy finance systems", "Aging ERPs and spreadsheets create brittle close processes that cannot support real-time decisions or AI-ready workflows."),
    titledItem("Fragmented financial data", "Data trapped across GL, subledgers, and operational systems makes a single source of truth nearly impossible."),
    titledItem("Manual and inefficient processes", "Month-end close, reconciliations, and reporting still rely on heavy manual effort and tribal knowledge."),
    titledItem("Delayed financial insights", "Leaders wait days or weeks for accurate numbers, limiting agility in pricing, planning, and cash decisions."),
    titledItem("Increasing compliance requirements", "Regulatory, audit, and internal control demands keep rising without matching process or system maturity."),
    titledItem("Difficulty scaling AI initiatives", "AI experiments stall without clean data foundations, governed models, and production-ready delivery."),
  ],
  servicesHeadline: "Our Custom Finance Software Development Services",
  services: [
    titledItem("Finance Consulting & Product Strategy", "Define transformation roadmap, prioritize value cases, and align finance, IT, and business stakeholders."),
    titledItem("Custom Finance Software Development", "Build secure, scalable finance applications and workflows tailored to your operating model."),
    titledItem("Finance Modernization & Re-Architecture", "Upgrade legacy finance systems, simplify integrations, and prepare platforms for AI and automation."),
  ],
  solutionsHeadline: "Our Finance Transformation Solutions",
  solutions: [
    titledItem("Finance Process Transformation", "Redesign close, FP&A, AP/AR, and controlling processes for speed, controls, and scalability."),
    titledItem("AI-Powered Finance Operations", "Deploy AI agents and automation for reconciliations, anomaly detection, forecasting, and narrative reporting."),
    titledItem("Financial Data & Analytics", "Build trusted finance data models, dashboards, and self-serve analytics for CFO and business partners."),
    titledItem("ERP Modernisation & Integration", "Modernize Dynamics 365 and connected finance systems with clean integrations and optimized processes."),
    titledItem("Intelligent Automation", "Automate high-volume finance workflows with RPA, orchestration, and human-in-the-loop controls."),
    titledItem("Risk, Compliance & Reporting", "Strengthen audit readiness, controls, and regulatory reporting with transparent, repeatable processes."),
  ],
  clientsHeadline: "Finance Clients We Serve",
  clients: ["Banking", "Payments", "Lending", "Mortgage", "Insurance", "Investment & Wealth", "Corporate Finance", "Shared Services", "Fintech Platforms"].map(
    (t) => ({ _key: Math.random().toString(36).slice(2, 8), title: t })
  ),
  pillarsHeadline: "How We Drive the Success of Your Finance Transformation",
  pillarsDescription: pt(
    "A practical delivery model that reduces risk, protects timelines, and keeps finance stakeholders aligned from discovery to scale."
  ),
  pillars: [
    titledItem("Risk Identification and Management", "We surface process, data, and control risks early — then build mitigation into the transformation plan."),
    titledItem("Accurate Time and Budget Estimation", "Clear scoping and phased delivery keep finance programs predictable and outcome-focused."),
    titledItem("Teamwork and Knowledge Management", "Shared ownership, documentation, and enablement so finance teams can run what we build."),
  ],
  outcomesHeadline: "Business Outcomes",
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
      clientChallenge: pt(
        "A multi-entity enterprise finance team struggled with a 12+ day close, spreadsheet-heavy reconciliations, and delayed management reporting."
      ),
      solutionDelivered: pt(
        "SyncOrigins redesigned the close calendar, automated reconciliations, and built a governed finance data layer with exception-based AI workflows."
      ),
      keyTransformation: pt(
        "Finance shifted from manual compilation to continuous close readiness with clear ownership, controls, and real-time visibility."
      ),
      businessOutcomes: pt(
        "Close cycle reduced by ~40%, reconciliation effort cut significantly, and leadership reporting available days earlier each month."
      ),
      ctaText: "View the Case Study",
      ctaLink: `/case-studies/${SLUG}`,
    },
  ],
  lifecycleHeadline: "Our Finance Lifecycle and Delivery Model",
  lifecycle: [
    titledItem("Discovery & Planning", "Define goals, analyze needs, and create a comprehensive transformation plan."),
    titledItem("Design & Prototyping", "Create process designs, data models, wireframes, and prototypes."),
    titledItem("Development & Integration", "Build features and connect ERP, data, and partner systems."),
    titledItem("Testing & Compliance", "Quality audits, user validation, and regulatory control checks."),
    titledItem("Launch & Optimization", "Deployment, enablement, and continuous performance monitoring."),
  ],
  processHeadline: "Finance Transformation Process & Delivery",
  process: [
    { _key: "s1", title: "Discover & Assess", description: pt("Map processes, systems, data quality, and pain points.") },
    { _key: "s2", title: "Define Priorities", description: pt("Align value cases, sequencing, and success metrics.") },
    { _key: "s3", title: "Design the Solution", description: pt("Architect processes, data models, and AI opportunities.") },
    { _key: "s4", title: "Implement & Integrate", description: pt("Build platforms, workflows, and analytics for production.") },
    { _key: "s5", title: "Validate & Optimise", description: pt("Test controls and refine with finance users.") },
    { _key: "s6", title: "Scale & Improve", description: pt("Roll out across entities and expand AI use cases.") },
  ],
  whyUsHeadline: "Why Choose SyncOrigins for Finance",
  whyUsDescription: pt(
    "We combine AI, data, and ERP expertise with a finance-first mindset and production delivery discipline."
  ),
  whyUs: [
    titledItem("AI, Data & ERP expertise", "One team connecting intelligent systems, trusted data, and enterprise platforms."),
    titledItem("Finance-focused transformation", "We speak CFO language — close, controls, forecast quality, and operating leverage."),
    titledItem("Business-first approach", "Technology follows value cases and process redesign."),
    titledItem("Production-focused execution", "Durable solutions finance teams can run day-to-day."),
    titledItem("Scalable enterprise solutions", "Built for multi-entity growth, compliance, and ongoing AI adoption."),
  ],
  faqs: [
    { _key: "f1", question: "What does SyncOrigins mean by finance transformation?", answer: pt("We redesign finance processes, data foundations, and enterprise systems so close, reporting, planning, and compliance become faster, more accurate, and AI-ready.") },
    { _key: "f2", question: "Do you work with existing ERP platforms?", answer: pt("Yes. We modernize and integrate platforms such as Dynamics 365 and adjacent finance systems without unnecessary rip-and-replace.") },
    { _key: "f3", question: "Where does AI create the most value in finance?", answer: pt("Reconciliations, anomaly detection, forecasting support, narrative reporting, and exception handling — once data and controls are ready.") },
    { _key: "f4", question: "How do you keep transformation audit-ready?", answer: pt("Controls, evidence trails, and clear ownership are designed into processes and systems from day one.") },
    { _key: "f5", question: "How long does a typical engagement take?", answer: pt("Discovery can start quickly. Delivery timelines depend on scope — from focused automation waves to multi-workstream programs.") },
    { _key: "f6", question: "Can you support shared service and multi-entity models?", answer: pt("Yes. We design for standardization across entities and shared service centers with local variation where required.") },
  ],
  finalCta: {
    badgeText: "Finance Transformation",
    title: "Ready to Transform Your Finance Operations?",
    description: pt(
      "Talk with our finance experts about accelerating close, unlocking insights, and building AI-ready finance operations."
    ),
    buttonText: "Talk to Our Finance Experts",
    buttonLink: "/contact",
  },
  seo: {
    metaTitle: "Finance Transformation Services | SyncOrigins",
    metaDescription:
      "Transform finance through AI, data & intelligent enterprise systems. Process transformation, ERP modernisation, automation, analytics, and compliance.",
  },
};

const caseStudy = {
  _id: `caseStudy.${SLUG}`,
  _type: "caseStudy",
  title: "Accelerating Month-End Close with AI & Automation",
  slug: { _type: "slug", current: SLUG },
  excerpt:
    "How SyncOrigins helped a multi-entity finance organization cut close cycle time and replace spreadsheet-heavy reconciliations with governed automation.",
  publishedAt: "2025-11-12T10:00:00.000Z",
  relatedService: "finance",
  heroBadge: "Case Study · Finance",
  heroStats: [
    { _key: "hs1", value: "~40%", label: "Faster close cycle" },
    { _key: "hs2", value: "Days earlier", label: "Management reporting" },
    { _key: "hs3", value: "Fewer", label: "Manual reconciliations" },
  ],
  aboutClientHeadline: "About the Client",
  aboutClient: pt(
    "A multi-entity enterprise with regional finance teams and a shared service center supporting close, consolidations, and management reporting. Leadership needed a faster, more controlled close without disrupting ERP investments already in place."
  ),
  challengeHeadline: "The Challenges",
  challengeItems: [
    "Month-end close routinely stretched beyond 12 days with unclear ownership across entities.",
    "Reconciliations lived in spreadsheets, making exceptions hard to detect early.",
    "Fragmented finance data delayed management packs and forecasting quality.",
    "AI pilots could not move to production without governed data and control frameworks.",
  ],
  approachHeadline: "Our Solutions / Approach",
  approachItems: [
    "Redesigned the close calendar with clear owners, SLAs, and control checkpoints.",
    "Built a governed finance data layer connecting GL, subledgers, and operational sources.",
    "Automated high-volume reconciliations with AI-assisted exception detection.",
    "Enabled finance users with dashboards and training so the operating model stuck after go-live.",
  ],
  technologies: ["Dynamics 365", "Power BI", "Azure", "Python", "Automation"],
  outcomesHeadline: "Outcomes / Result",
  outcomeCards: [
    "~40% faster close cycle",
    "Management reporting available days earlier",
    "Significant reduction in manual reconciliations",
    "Clearer ownership and audit trail across entities",
    "Continuous close readiness instead of fire drills",
    "Foundation ready for additional finance AI use cases",
  ],
  testimonialsHeadline: "Client Feedback",
  testimonials: [
    {
      _key: "t1",
      quote: pt(
        "SyncOrigins helped us turn close from a fire drill into a managed process. We finally have visibility early enough to act."
      ),
      author: "VP Finance",
      role: "Corporate Finance",
      company: "Enterprise Client",
    },
  ],
  seo: {
    metaTitle: "Month-End Close Automation Case Study | SyncOrigins",
    metaDescription:
      "Case study: SyncOrigins accelerated month-end close with AI, automation, and a governed finance data foundation.",
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
  await client.transaction().createOrReplace(financePage).createOrReplace(caseStudy).commit();
  console.log("✓ financePageSingleton published");
  console.log(`✓ case study /case-studies/${SLUG} published`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
