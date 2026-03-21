import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'seo',
    title: 'SEO',
    type: 'object',
    fields: [
        defineField({
            name: 'metaTitle',
            title: 'Meta Title',
            type: 'string',
            description: 'Title used for search engines and browser tabs.',
            validation: (context) => context.max(60).warning('Longer titles may be truncated by search engines'),
        }),
        defineField({
            name: 'metaDescription',
            title: 'Meta Description',
            type: 'text',
            rows: 3,
            description: 'Description for search engines.',
            validation: (context) => context.max(160).warning('Longer descriptions may be truncated by search engines'),
        }),
        defineField({
            name: 'metaKeywords',
            title: 'Meta Keywords',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Keywords for SEO (optional).',
        }),
        defineField({
            name: 'openGraphImage',
            title: 'Open Graph Image',
            type: 'image',
            description: 'Image for social media sharing.',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                    description: 'Important for SEO and accessibility',
                }
            ],
        }),
    ],
})
