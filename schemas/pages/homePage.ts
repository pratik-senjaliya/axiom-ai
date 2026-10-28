import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    groups: [
        { name: 'hero', title: 'Hero Section' },
        { name: 'pitfalls', title: 'Why Transformations Fail' },
        { name: 'solutions', title: 'What We Do' },
        { name: 'hire', title: 'Hire Engineers' },
        { name: 'roadmap', title: 'Phases to Production' },
        { name: 'personas', title: 'Target Audience' },
        { name: 'why', title: 'Why SyncOrigins' },
        { name: 'stories', title: 'Success Stories' },
        { name: 'insights', title: 'Insights' },
        { name: 'faqs', title: 'FAQs' },
        { name: 'seo', title: 'SEO' },
    ],
    fields: [
        // Section 1: Hero Header
        defineField({
            name: 'hero',
            title: 'Hero Header',
            type: 'hero',
            group: 'hero',
        }),

        // Section 2: Why Digital Transformations Fail
        defineField({
            name: 'pitfallsHeadline',
            title: 'Pitfalls Section Headline',
            type: 'string',
            initialValue: 'Escape the "Pilot Purgatory"',
            group: 'pitfalls',
        }),
        defineField({
            name: 'pitfallsBody',
            title: 'Pitfalls Section Body',
            type: 'simpleBlockContent',
            group: 'pitfalls',
        }),
        defineField({
            name: 'pitfalls',
            title: 'Pitfalls (Failures)',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'stat', type: 'string', title: 'Stat (e.g. 85%)' },
                    { name: 'title', type: 'string', title: 'Title' },
                    { name: 'description', type: 'simpleBlockContent', title: 'Description' }
                ]
            }],
            group: 'pitfalls',
        }),

        // Section 3: Enterprise-grade AI Solutions
        defineField({
            name: 'solutionsHeadline',
            title: 'Solutions Headline',
            type: 'string',
            initialValue: 'What We Build & Deliver',
            group: 'solutions',
        }),
        defineField({
            name: 'solutionsSubtitle',
            title: 'Solutions Subtitle',
            type: 'string',
            group: 'solutions',
        }),
        defineField({
            name: 'solutionsBody',
            title: 'Solutions Section Body',
            type: 'simpleBlockContent',
            group: 'solutions',
        }),
        defineField({
          name: 'solutions',
          title: 'Solutions (What We Do)',
          type: 'array',
          of: [{
              type: 'object',
              fields: [
                  { name: 'title', type: 'string', title: 'Solution Title' },
                  { name: 'description', type: 'simpleBlockContent', title: 'Description' },
                  { name: 'outcome', type: 'string', title: 'Key Outcome' }
              ]
          }],
          group: 'solutions',
        }),
        defineField({
            name: 'solutionsCta',
            title: 'Solutions Section CTA',
            type: 'cta',
            group: 'solutions',
            initialValue: { text: 'Talk to Our AI Expert', link: '/contact', variant: 'primary' },
        }),

        // Section: Hire Vetted Engineers
        defineField({
            name: 'hireBadge',
            title: 'Hire Section Badge',
            type: 'string',
            initialValue: 'Hire Vetted AI, Data & ERP Engineers',
            group: 'hire',
        }),
        defineField({
            name: 'hireHeadline',
            title: 'Hire Section Headline',
            type: 'string',
            initialValue: 'Extend Your Engineering Capabilities with Specialist Talent',
            group: 'hire',
        }),
        defineField({
            name: 'hireBody',
            title: 'Hire Section Body',
            type: 'simpleBlockContent',
            group: 'hire',
        }),
        defineField({
            name: 'hireCards',
            title: 'Hire Cards',
            type: 'array',
            description: 'Leave empty to hide this section.',
            of: [{
                type: 'object',
                fields: [
                    { name: 'title', type: 'string', title: 'Title' },
                    { name: 'description', type: 'simpleBlockContent', title: 'Description' },
                    { name: 'cta', type: 'cta', title: 'Button', description: 'e.g. "Hire AI Engineers" → /hire-ai-engineers' },
                ],
                preview: { select: { title: 'title', subtitle: 'cta.link' } },
            }],
            group: 'hire',
        }),

        // Section 4: Three Phases to Transformation
        defineField({
            name: 'roadmapHeadline',
            title: 'Roadmap Headline',
            type: 'string',
            initialValue: 'The 3 Phases Path to Production',
            group: 'roadmap',
        }),
        defineField({
            name: 'roadmap',
            title: 'Roadmap Steps',
            type: 'array',
            of: [{ type: 'processStep' }],
            group: 'roadmap',
        }),

        // Section 5: Built for Enterprise Leaders
        defineField({
            name: 'personasHeadline',
            title: 'Personas Headline',
            type: 'string',
            initialValue: 'Built for Enterprise Leaders',
            group: 'personas',
        }),
        defineField({
            name: 'personas',
            title: 'Personas',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'role', type: 'string', title: 'Role (e.g. For CXOs)' },
                    { name: 'description', type: 'simpleBlockContent', title: 'Description' }
                ]
            }],
            group: 'personas',
        }),
        defineField({
            name: 'personasCta',
            title: 'Personas Section CTA',
            type: 'cta',
            group: 'personas',
            initialValue: { text: 'Build Your AI-Ready Roadmap', link: '/contact', variant: 'primary' },
        }),

        // Section: Why SyncOrigins
        defineField({
            name: 'whyBadge',
            title: 'Why Section Badge',
            type: 'string',
            initialValue: 'Why SyncOrigins?',
            group: 'why',
        }),
        defineField({
            name: 'whyHeadline',
            title: 'Why Section Headline',
            type: 'string',
            initialValue: 'Engineering Intelligence Into Every Layer',
            group: 'why',
        }),
        defineField({
            name: 'whyBody',
            title: 'Why Section Body',
            type: 'simpleBlockContent',
            group: 'why',
        }),
        defineField({
            name: 'whyCards',
            title: 'Why Cards',
            type: 'array',
            description: 'Leave empty to hide this section.',
            of: [{
                type: 'object',
                fields: [
                    { name: 'title', type: 'string', title: 'Title' },
                    { name: 'description', type: 'simpleBlockContent', title: 'Description' },
                ],
                preview: { select: { title: 'title' } },
            }],
            group: 'why',
        }),

        // Section: Success Stories & Testimonials
        defineField({
            name: 'showCaseStudies',
            title: 'Show Case Studies on Home Page',
            type: 'boolean',
            initialValue: false,
            description: 'Turn on to show the case study slider here. Only case studies with "Feature on Home Page" ticked are shown.',
            group: 'stories',
        }),
        defineField({
            name: 'storiesBadge',
            title: 'Success Stories Badge',
            type: 'string',
            initialValue: 'Success Stories',
            group: 'stories',
        }),
        defineField({
            name: 'storiesHeadline',
            title: 'Success Stories Headline',
            type: 'string',
            initialValue: 'Enterprise Challenges. Practical Engineering Outcomes.',
            group: 'stories',
        }),
        defineField({
            name: 'storiesBody',
            title: 'Success Stories Body',
            type: 'simpleBlockContent',
            group: 'stories',
        }),
        defineField({
            name: 'testimonialsHeadline',
            title: 'Testimonials Headline',
            type: 'string',
            description: 'Used when case studies are also shown. Defaults to "What Our Clients Say".',
            group: 'stories',
        }),
        defineField({
            name: 'testimonials',
            title: 'Client Testimonials',
            type: 'array',
            of: [{ type: 'testimonial' }],
            description: 'Optional. Shown as a carousel below the case studies.',
            group: 'stories',
        }),

        // Section: Latest Insights (blog posts)
        defineField({
            name: 'showInsights',
            title: 'Show Latest Insights',
            type: 'boolean',
            initialValue: true,
            description: 'Shows the most recent Insights (blog) posts automatically.',
            group: 'insights',
        }),
        defineField({
            name: 'insightsBadge',
            title: 'Insights Badge',
            type: 'string',
            initialValue: 'Insights & Resources',
            group: 'insights',
        }),
        defineField({
            name: 'insightsHeadline',
            title: 'Insights Headline',
            type: 'string',
            initialValue: 'Ideas & Insights for Enterprise Innovation',
            group: 'insights',
        }),
        defineField({
            name: 'insightsBody',
            title: 'Insights Body',
            type: 'simpleBlockContent',
            description: 'Defaults to the approved intro text when empty.',
            group: 'insights',
        }),
        defineField({
            name: 'insightsCount',
            title: 'Number of Posts',
            type: 'number',
            initialValue: 3,
            options: { list: [3, 6, 9] },
            group: 'insights',
        }),
        defineField({
            name: 'insightsLinkText',
            title: '"View All" Link Text',
            type: 'string',
            initialValue: 'View all insights',
            group: 'insights',
        }),

        // Section 6: Final CTA
        defineField({
            name: 'finalCta',
            title: 'Final CTA',
            type: 'object',
            group: 'personas',
            fields: [
                { name: 'title', type: 'string', title: 'Title' },
                { name: 'description', type: 'simpleBlockContent', title: 'Description' },
                { name: 'primaryCta', type: 'cta', title: 'Primary CTA' }
            ]
        }),

        // Corporate Affiliation: no longer shown on the page, kept hidden for existing data
        defineField({
            name: 'affiliationHeadline',
            hidden: true,
            title: 'Affiliation Headline',
            type: 'string',
            initialValue: 'Backed By',
        }),
        defineField({
            name: 'affiliationTitle',
            hidden: true,
            title: 'Affiliation Name',
            type: 'string',
            initialValue: 'Lashan Digital',
        }),
        defineField({
            name: 'affiliationBody',
            hidden: true,
            title: 'Affiliation Description',
            type: 'simpleBlockContent',
        }),

        // FAQ Section
        defineField({
            name: 'faqsHeadline',
            title: 'FAQs Headline',
            type: 'string',
            initialValue: 'Frequently Asked Questions',
            group: 'faqs',
        }),
        defineField({
            name: 'faqs',
            title: 'Frequently Asked Questions',
            type: 'array',
            of: [{ type: 'faq' }],
            group: 'faqs',
        }),

        defineField({ name: 'seo', title: 'SEO', type: 'seo', group: 'seo' }),
    ],
    preview: {
        select: {
          title: 'hero.title',
        },
        prepare({ title }) {
          return {
            title: title || 'Home Page',
            subtitle: 'Singleton'
          }
        }
    },
    orderings: [
        {
            title: 'Title',
            name: 'titleAsc',
            by: [
                { field: 'hero.title', direction: 'asc' }
            ]
        }
    ]
})
