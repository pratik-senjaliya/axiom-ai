import { pt } from "./portableText";
import { DEMO_CASE_STUDY_SLUG } from "./financePage";

export const DEMO_CASE_STUDY = {
  _id: `caseStudy.${DEMO_CASE_STUDY_SLUG}`,
  _type: "caseStudy",
  title: "Accelerating Month-End Close with AI & Automation",
  slug: { _type: "slug", current: DEMO_CASE_STUDY_SLUG },
  excerpt:
    "How SyncOrigins helped a multi-entity finance organization cut close cycle time and replace spreadsheet-heavy reconciliations with governed automation.",
  publishedAt: "2025-11-12T10:00:00.000Z",
  relatedService: "ai",
  relatedIndustry: "finance",
  heroBadge: "Case Study · Finance",
  heroStats: [
    { value: "~40%", label: "Faster close cycle" },
    { value: "Days earlier", label: "Management reporting" },
    { value: "Fewer", label: "Manual reconciliations" },
  ],
  heroCta: {
    buttonText: "Talk to Our Experts",
    buttonHref: "/contact",
  },
  aboutClientHeadline: "About the Client",
  aboutClientImage:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
  aboutClientImageAlt: "Enterprise finance headquarters",
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

export const DEMO_CASE_STUDY_VIEW = {
  id: DEMO_CASE_STUDY._id,
  title: DEMO_CASE_STUDY.title,
  slug: DEMO_CASE_STUDY_SLUG,
  excerpt: DEMO_CASE_STUDY.excerpt,
  image: undefined as string | undefined,
  imageAlt: DEMO_CASE_STUDY.title,
  publishedAt: DEMO_CASE_STUDY.publishedAt,
  relatedService: DEMO_CASE_STUDY.relatedService,
  heroBadge: DEMO_CASE_STUDY.heroBadge,
  heroStats: DEMO_CASE_STUDY.heroStats,
  heroCta: DEMO_CASE_STUDY.heroCta,
  aboutClientHeadline: DEMO_CASE_STUDY.aboutClientHeadline,
  aboutClient: DEMO_CASE_STUDY.aboutClient,
  aboutClientImage: DEMO_CASE_STUDY.aboutClientImage,
  aboutClientImageAlt: DEMO_CASE_STUDY.aboutClientImageAlt,
  challengeHeadline: DEMO_CASE_STUDY.challengeHeadline,
  challengeItems: DEMO_CASE_STUDY.challengeItems,
  approachHeadline: DEMO_CASE_STUDY.approachHeadline,
  approachItems: DEMO_CASE_STUDY.approachItems,
  technologies: DEMO_CASE_STUDY.technologies,
  outcomesHeadline: DEMO_CASE_STUDY.outcomesHeadline,
  outcomeCards: DEMO_CASE_STUDY.outcomeCards,
  testimonialsHeadline: DEMO_CASE_STUDY.testimonialsHeadline,
  testimonials: DEMO_CASE_STUDY.testimonials,
  seo: DEMO_CASE_STUDY.seo,
};
