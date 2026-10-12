import { pt } from "./portableText";
import { DEMO_CASE_STUDY_SLUG } from "./financePage";

/**
 * One demo case study aligned to the Google Doc case-study template:
 * Hero → About the Client → Challenge → Solutions/Approach → Outcomes → Testimonials → More Case Studies
 */
export const DEMO_CASE_STUDY = {
  _id: `caseStudy.${DEMO_CASE_STUDY_SLUG}`,
  _type: "caseStudy",
  title: "Accelerating Month-End Close with AI & Automation",
  slug: { _type: "slug", current: DEMO_CASE_STUDY_SLUG },
  excerpt:
    "How SyncOrigins helped a multi-entity finance organization cut close cycle time and replace spreadsheet-heavy reconciliations with governed automation.",
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

/** Shape returned by getCaseStudyBySlug for local/demo fallback rendering */
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
  aboutClientHeadline: DEMO_CASE_STUDY.aboutClientHeadline,
  aboutClient: DEMO_CASE_STUDY.aboutClient,
  challengeHeadline: DEMO_CASE_STUDY.challengeHeadline,
  challenge: DEMO_CASE_STUDY.challenge,
  approachHeadline: DEMO_CASE_STUDY.approachHeadline,
  approach: DEMO_CASE_STUDY.approach,
  outcomesHeadline: DEMO_CASE_STUDY.outcomesHeadline,
  outcomes: DEMO_CASE_STUDY.outcomes,
  outcomeMetrics: DEMO_CASE_STUDY.outcomeMetrics,
  testimonialsHeadline: DEMO_CASE_STUDY.testimonialsHeadline,
  testimonials: DEMO_CASE_STUDY.testimonials,
  seo: DEMO_CASE_STUDY.seo,
};
