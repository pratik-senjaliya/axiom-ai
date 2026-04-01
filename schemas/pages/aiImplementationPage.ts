import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'aiImplementationPage',
    title: 'AI Implementation Page',
    type: 'document',
    groups: [
        { name: 'hero', title: 'Hero Section' },
        { name: 'pitfalls', title: 'Why AI Initiatives Stall' },
        { name: 'layers', title: 'Enterprise AI Stack' },
        { name: 'useCases', title: 'Industry Use Cases' },
        { name: 'roadmap', title: 'Roadmap' },
        { name: 'models', title: 'Engagement Models' },
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

        // Section 2: Why AI Initiatives Stall
        defineField({
            name: 'pitfallsHeadline',
            title: 'Pitfalls Section Headline',
            type: 'string',
            initialValue: 'Why AI Initiatives Stall',
            group: 'pitfalls',
        }),
        defineField({
            name: 'pitfalls',
            title: 'Pitfall Bullets',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'title', type: 'string', title: 'Label (Bold)' },
                    { name: 'description', type: 'simpleBlockContent', title: 'Description' }
                ]
            }],
            group: 'pitfalls',
        }),

        // Section 3: Our Enterprise AI Stack (The 4 Layers)
        defineField({
            name: 'layersHeadline',
            title: 'Layers Section Headline',
            type: 'string',
            initialValue: 'Our Enterprise AI Stack (The 4 Layers)',
            group: 'layers',
        }),
        defineField({
            name: 'layers',
            title: 'Stack Layers',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'layer', type: 'string', title: 'Layer Name (e.g. Layer 1)' },
                    { name: 'title', type: 'string', title: 'Title' },
                    { name: 'outcome', type: 'string', title: 'Outcome' },
                    { name: 'description', type: 'simpleBlockContent', title: 'Description' }
                ]
            }],
            group: 'layers',
        }),

        // Section 4: Industry Use Cases with POC Model
        defineField({
            name: 'useCasesHeadline',
            title: 'Use Cases Headline',
            type: 'string',
            initialValue: 'Industry Use Cases with POC Model',
            group: 'useCases',
        }),
        defineField({
            name: 'useCases',
            title: 'Use Cases',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'industry', type: 'string', title: 'Industry (e.g. Manufacturing)' },
                    { name: 'title', type: 'string', title: 'Title' },
                    { name: 'description', type: 'simpleBlockContent', title: 'Description' }
                ]
            }],
            group: 'useCases',
        }),

        // Section 5: From Pilot to Platform (The 5-Step Path)
        defineField({
            name: 'roadmapHeadline',
            title: 'Roadmap Headline',
            type: 'string',
            initialValue: 'From Pilot to Platform (The 5-Step Path)',
            group: 'roadmap',
        }),
        defineField({
            name: 'roadmap',
            title: 'Roadmap Steps',
            type: 'array',
            of: [{ type: 'processStep' }],
            group: 'roadmap',
        }),

        // Section 6: Deployment Models
        defineField({
            name: 'modelsHeadline',
            title: 'Deployment Headline',
            type: 'string',
            initialValue: 'Deployment Models',
            group: 'models',
        }),
        defineField({
            name: 'models',
            title: 'Deployment Models',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'model', type: 'string', title: 'Model Name (e.g. Model 1)' },
                    { name: 'title', type: 'string', title: 'Title' },
                    { name: 'description', type: 'simpleBlockContent', title: 'Description' }
                ]
            }],
            group: 'models',
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
