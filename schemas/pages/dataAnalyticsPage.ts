import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'dataAnalyticsPage',
    title: 'Data & Analytics Page',
    type: 'document',
    groups: [
        { name: 'hero', title: 'Hero Section' },
        { name: 'layers', title: 'Data Stack' },
        { name: 'roadmap', title: 'The Roadmap' },
        { name: 'faqs', title: 'FAQs' },
        { name: 'testimonials', title: 'Testimonials' },
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
        defineField({ 
            name: "tags", 
            title: "Hub Tags", 
            type: "array", 
            of: [{ type: "string" }], 
            group: "hero" 
        }),

        // Section 2: Data Services
        defineField({
            name: 'layersHeadline',
            title: 'Layers Section Headline',
            type: 'string',
            initialValue: 'From Data Silos to Predictive Intelligence',
            group: 'layers',
        }),
        defineField({
            name: 'layers',
            title: 'Service Layers',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'title', type: 'string', title: 'Layer Title' },
                    { name: 'description', type: 'simpleBlockContent', title: 'Description' },
                    { name: 'tasks', type: 'array', of: [{ type: 'string' }], title: 'Tasks / Business Impact' }
                ]
            }],
            group: 'layers',
        }),

        // Section 3: Roadmap Methodology
        defineField({
            name: 'roadmapHeadline',
            title: 'Roadmap Headline',
            type: 'string',
            initialValue: 'The "AxiomAI Advantage" Methodology',
            group: 'roadmap',
        }),
        defineField({
            name: 'roadmap',
            title: 'Roadmap Steps',
            type: 'array',
            of: [{ type: 'processStep' }],
            group: 'roadmap',
        }),

        // FAQ Section
        defineField({
            name: 'faqs',
            title: 'Frequently Asked Questions',
            type: 'array',
            of: [{ type: 'faq' }],
            group: 'faqs',
        }),

        // Final CTA
        defineField({
            name: 'finalCta',
            title: 'Final CTA',
            type: 'object',
            group: 'faqs',
            fields: [
              { name: 'badgeText', type: 'string', title: 'Badge Text' },
              { name: 'title', type: 'string', title: 'Title' },
              { name: 'description', type: 'simpleBlockContent', title: 'Description' },
              { name: 'buttonText', type: 'string', title: 'Button Text' },
              { name: 'buttonLink', type: 'string', title: 'Button Link' },
            ]
        }),

        // Testimonials Section
        defineField({
            name: 'testimonials',
            title: 'Testimonials',
            type: 'array',
            of: [{ type: 'testimonial' }],
            group: 'testimonials',
        }),

        defineField({ name: 'seo', title: 'SEO', type: 'seo', group: 'seo' }),
    ],
})
