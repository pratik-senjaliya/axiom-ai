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
        defineField({
            name: 'structuredData',
            title: 'Structured Data (Schema.org)',
            type: 'object',
            description: 'JSON-LD settings for search engines (Google rich results).',
            fields: [
                defineField({
                    name: 'schemaType',
                    title: 'Schema Type',
                    type: 'string',
                    options: {
                        list: [
                            { title: 'Auto (recommended)', value: 'auto' },
                            { title: 'Service', value: 'Service' },
                            { title: 'Professional Service', value: 'ProfessionalService' },
                            { title: 'Blog Posting', value: 'BlogPosting' },
                            { title: 'Article', value: 'Article' },
                            { title: 'Web Page', value: 'WebPage' },
                        ],
                        layout: 'dropdown',
                    },
                    initialValue: 'auto',
                }),
                defineField({
                    name: 'schemaDescription',
                    title: 'Schema Description',
                    type: 'text',
                    rows: 3,
                    description: 'Optional. Used in JSON-LD only. Falls back to meta description.',
                }),
                defineField({
                    name: 'includeFaqSchema',
                    title: 'Include FAQ Schema',
                    type: 'boolean',
                    description: 'Output FAQPage structured data when FAQs exist on the page.',
                    initialValue: true,
                }),
            ],
        }),
    ],
})
