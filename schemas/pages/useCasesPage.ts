import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'useCasesPage',
    title: 'Use Cases Page',
    type: 'document',
    groups: [
        { name: 'hero', title: 'Hero Section' },
        { name: 'content', title: 'Content / Cards' },
        { name: 'poc', title: 'POC Offer' },
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

        // Section 2: Filters/Tabs
        defineField({
            name: 'tabs',
            title: 'Filters / Tabs',
            type: 'array',
            of: [{ type: 'string' }],
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
                    { name: 'title', type: 'string', title: 'Case Title' },
                    { name: 'problem', type: 'text', rows: 3, title: 'The Problem' },
                    { name: 'tools', type: 'array', of: [{ type: 'string' }], title: 'Tools & Tech' },
                    { name: 'approach', type: 'text', rows: 3, title: 'The Approach' },
                    { name: 'impact', type: 'text', rows: 3, title: 'Business Impact' }
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
              { name: 'description', type: 'text', rows: 3, title: 'Description' }
            ],
            group: 'poc',
        }),

        defineField({ name: 'seo', title: 'SEO', type: 'seo', group: 'seo' }),
    ],
})
