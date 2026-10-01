import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'sustainabilityPage',
    title: 'Sustainability Page',
    type: 'document',
    groups: [
        { name: 'hero', title: 'Hero Section' },
        { name: 'pitfalls', title: 'Why Efforts Struggle' },
        { name: 'layers', title: 'Service Layers' },
        { name: 'roadmap', title: 'The Roadmap' },
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
            name: 'pitfallsDescription',
            title: 'Description',
            type: 'simpleBlockContent',
            group: 'pitfalls',
            description: 'Optional text shown under the section headline.',
        }),
        defineField({
            name: 'pitfalls',
            title: 'Struggles / Pitfalls',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'title', type: 'string', title: 'Title' },
                    { name: 'description', type: 'simpleBlockContent', title: 'Description' }
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
            name: 'layersDescription',
            title: 'Description',
            type: 'simpleBlockContent',
            group: 'layers',
            description: 'Optional text shown under the section headline.',
        }),
        defineField({
            name: 'layers',
            title: 'AI Layers',
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
        defineField({
            name: 'layersCta',
            title: 'Modules Section CTA',
            type: 'cta',
            group: 'layers',
            initialValue: { text: 'Talk to a Sustainability Expert', link: '/contact', variant: 'primary' },
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
            name: 'roadmapDescription',
            title: 'Description',
            type: 'simpleBlockContent',
            group: 'roadmap',
            description: 'Optional text shown under the section headline.',
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
        defineField({ name: 'seo', title: 'SEO', type: 'seo', group: 'seo' }),
    ],
})
