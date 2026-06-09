import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'useCasesPage',
    title: 'Use Cases Page',
    type: 'document',
    groups: [
        { name: 'hero', title: 'Hero Section' },
        { name: 'content', title: 'Content / Cards' },
        { name: 'poc', title: 'POC Offer' },
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

        // Section 2: Category Filters
        defineField({
            name: 'tabs',
            title: 'Category Filters',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Category names shown as filter buttons (e.g. Cost Optimization, Growth & Revenue). Each use case must use one of these exact names.',
            group: 'content',
        }),

        // Section 3: Use Cases
        defineField({
            name: 'cases',
            title: 'Use Case Cards',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'caseNumber', type: 'string', title: 'Case Number (e.g. Case 01)' },
                    { name: 'category', type: 'string', title: 'Category', description: 'Must match one of the category filter names above exactly (e.g. Cost Optimization).' },
                    { name: 'title', type: 'string', title: 'Case Title' },
                    { name: 'problem', type: 'simpleBlockContent', title: 'The Problem' },
                    { name: 'tools', type: 'array', of: [{ type: 'string' }], title: 'Tools & Tech' },
                    { name: 'approach', type: 'simpleBlockContent', title: 'The Approach' },
                    { name: 'impact', type: 'simpleBlockContent', title: 'Business Impact' }
                ]
            }],
            group: 'content',
        }),

        // Section 4: Mid-page CTA
        defineField({
            name: 'midPageCta',
            title: 'Mid-page CTA',
            type: 'hero', // Reuse hero specifically for the structure
            group: 'content',
        }),

        // Section 5: The "Proof of Concept" (POC) Offer
        defineField({
            name: 'pocOffer',
            title: 'POC Offer Section',
            type: 'object',
            fields: [
              { name: 'title', type: 'string', title: 'POC Title' },
              { name: 'description', type: 'simpleBlockContent', title: 'Description' }
            ],
            group: 'poc',
        }),

        // Testimonials
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
