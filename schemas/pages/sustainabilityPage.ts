import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'sustainabilityPage',
    title: 'Sustainability Page',
    type: 'document',
    groups: [
        { name: 'hero', title: 'Hero Section' },
        { name: 'pitfalls', title: 'Why Efforts Struggle' },
        { name: 'layers', title: 'Sustainable AI Layers' },
        { name: 'roadmap', title: 'Methodology' },
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
        defineField({ 
            name: "tags", 
            title: "Hub Tags", 
            type: "array", 
            of: [{ type: "string" }], 
            group: "hero" 
        }),

        // Section 2: Why Sustainability Efforts Struggle
        defineField({
            name: 'pitfallsHeadline',
            title: 'Pitfalls Section Headline',
            type: 'string',
            initialValue: 'Why Sustainability Efforts Struggle',
            group: 'pitfalls',
        }),
        defineField({
            name: 'pitfalls',
            title: 'Struggles / Pitfalls',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'title', type: 'string', title: 'Title' },
                    { name: 'description', type: 'text', rows: 3, title: 'Description' }
                ]
            }],
            group: 'pitfalls',
        }),

        // Section 3: Sustainable AI Modules
        defineField({
            name: 'layersHeadline',
            title: 'Layers Section Headline',
            type: 'string',
            initialValue: 'Sustainable AI Modules & Capabilities',
            group: 'layers',
        }),
        defineField({
            name: 'layers',
            title: 'AI Layers',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'title', type: 'string', title: 'Layer Title' },
                    { name: 'description', type: 'text', rows: 3, title: 'Description' },
                    { name: 'tasks', type: 'array', of: [{ type: 'string' }], title: 'Tasks / Business Impact' }
                ]
            }],
            group: 'layers',
        }),

        // Section 4: Roadmap Methodology
        defineField({
            name: 'roadmapHeadline',
            title: 'Roadmap Headline',
            type: 'string',
            initialValue: 'Our Sustainability Transformation Roadmap',
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
            type: 'hero',
            group: 'faqs',
        }),

        defineField({ name: 'seo', title: 'SEO', type: 'seo', group: 'seo' }),
    ],
})
