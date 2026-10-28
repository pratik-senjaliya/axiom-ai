/**
 * Fills the Home Page "Hire Engineers", "Why SyncOrigins" and "Success Stories" sections
 * with the approved copy. Only empty fields are written (setIfMissing).
 * Run: npm run seed:home-sections
 */
import { createClient } from "@sanity/client";

const key = () => Math.random().toString(36).slice(2, 10);

function pt(...paragraphs) {
  return paragraphs.map((text, i) => ({
    _type: "block",
    _key: key(),
    style: "normal",
    markDefs: [],
    children: [{ _type: "span", _key: `s${i}`, text, marks: [] }],
  }));
}

const card = (title, description, extra = {}) => ({ _key: key(), title, description: pt(description), ...extra });
const cta = (text, link) => ({ text, link, variant: "primary" });

const sections = {
  hireBadge: "Hire Vetted AI, Data & ERP Engineers",
  hireHeadline: "Extend Your Engineering Capabilities with Specialist Talent",
  hireBody: pt(
    "Strengthen your team with vetted AI, Data and ERP specialists who can contribute to enterprise initiatives. Access specialist talent within 48–72 hours, alongside dedicated engineering teams and managed delivery options."
  ),
  hireCards: [
    card("Hire AI Engineers", "Build enterprise AI applications, GenAI solutions, LLM-powered systems, RAG applications and AI agents.", {
      cta: cta("Hire AI Engineers", "/hire-ai-engineers"),
    }),
    card("Hire Data Engineers", "Develop data pipelines, unified data platforms and AI-ready data infrastructure to support enterprise analytics and AI applications.", {
      cta: cta("Hire Data Engineers", "/contact"),
    }),
    card("Hire ERP Specialists", "Extend your capabilities across ERP systems, enterprise integration and modernisation, including relevant SAP and Microsoft Dynamics expertise.", {
      cta: cta("Hire ERP Specialists", "/contact"),
    }),
    card("Dedicated Engineering Teams", "Scale your delivery capacity with dedicated specialists, team augmentation and managed engineering support.", {
      cta: cta("Hire Managed Delivery", "/managed-delivery"),
    }),
  ],

  whyBadge: "Why SyncOrigins?",
  whyHeadline: "Engineering Intelligence Into Every Layer",
  whyBody: pt(
    "SyncOrigins is a technology engineering partner focused on building future-ready digital ecosystems. We operate at the intersection of AI, Data, and ERP, combining technical expertise with a practical focus on business transformation."
  ),
  whyCards: [
    card("Connected AI, Data & ERP Expertise", "Bring enterprise systems, data platforms and AI applications together through an integrated engineering approach."),
    card("Enterprise-Focused Execution", "Build solutions designed around real business processes, existing systems and operational requirements."),
    card("Flexible Engineering Capabilities", "Access specialist engineers, dedicated teams or managed delivery based on your project needs."),
    card("From Strategy to Production", "Move beyond isolated experiments with an approach focused on implementation, integration and scalable deployment."),
  ],

  storiesBadge: "Success Stories",
  storiesHeadline: "Enterprise Challenges. Practical Engineering Outcomes.",
  storiesBody: pt(
    "Explore how engineering expertise across AI, Data and ERP can help address complex business and technology challenges."
  ),
  faqsHeadline: "Frequently Asked Questions",
};

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

await client.patch("homePageSingleton").setIfMissing(sections).commit();
console.log("Home page sections filled (existing values kept).");
