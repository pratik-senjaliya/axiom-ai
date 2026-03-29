import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'aboutPage',
    title: 'About Page',
    type: 'document',
    groups: [
        { name: 'hero', title: 'Hero Section' },
        { name: 'why', title: 'Why We Exist' },
        { name: 'values', title: 'Core Values' },
        { name: 'team', title: 'Team' },
        { name: 'seo', title: 'SEO' },
    ],
    fields: [
        // Hero
        defineField({
            name: 'hero',
            title: 'Hero Section',
            type: 'hero',
            group: 'hero',
        }),

        // Why We Exist
        defineField({
            name: 'whyTitle',
            title: 'Why We Exist Title',
            type: 'string',
            group: 'why',
        }),
        defineField({
            name: 'whyBody',
            title: 'Why We Exist Body',
            type: 'text',
            rows: 5,
            group: 'why',
        }),
        defineField({
            name: 'whyImage',
            title: 'Why We Exist Image',
            type: 'image',
            options: { hotspot: true },
            fields: [{ name: 'alt', type: 'string', title: 'Alt Text' }],
            group: 'why',
        }),

        // Core Values
        defineField({
            name: 'valuesTitle',
            title: 'Values Section Title',
            type: 'string',
            group: 'values',
        }),
        defineField({
            name: 'values',
            title: 'Core Values',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'title', type: 'string', title: 'Title' },
                    { name: 'description', type: 'text', rows: 3, title: 'Description' },
                    { name: 'icon', type: 'string', title: 'Icon Name' }
                ]
            }],
            group: 'values',
        }),

        // Team
        defineField({
            name: 'teamTitle',
            title: 'Team Section Title',
            type: 'string',
            group: 'team',
        }),
        defineField({
            name: 'teamBody',
            title: 'Team Section Body',
            type: 'text',
            rows: 4,
            group: 'team',
        }),

        // Final CTA
        defineField({
            name: 'finalCta',
            title: 'Final CTA',
            type: 'hero',
            group: 'team',
        }),

        defineField({ name: 'seo', title: 'SEO', type: 'seo', group: 'seo' }),
    ],
})
