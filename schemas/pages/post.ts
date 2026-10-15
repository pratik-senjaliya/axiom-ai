import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'post',
    title: 'Blog Post',
    type: 'document',
    fields: [
        defineField({
            name: 'seo',
            title: 'SEO',
            type: 'seo',
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            rows: 4,
        }),
        defineField({
            name: 'mainImage',
            title: 'Cover Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            description:
                'Used on Insights cards and the article page. ' +
                'Recommended size: 1600 × 1000 px (16:10 landscape). Minimum: 1200 × 750 px. ' +
                'Format: JPG or WebP (PNG only if you need transparency). ' +
                'Keep the subject centered; after upload, set the hotspot so faces/key content stay in frame when cards crop to 16:10. ' +
                'Avoid tall/portrait images — they leave empty bars or crop poorly on blog cards.',
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                    description: 'Describe the image for SEO and accessibility (required).',
                    validation: (Rule) => Rule.required(),
                }
            ],
            validation: (Rule) => Rule.required().error('Add a cover image (1600×1000, 16:10 landscape recommended).'),
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'blogBlockContent',
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            hidden: true, // Hidden but keep for data migration
        }),
        defineField({
            name: 'relatedService',
            title: 'Related Service Area',
            type: 'string',
            options: {
                list: [
                    { title: 'AI Implementation', value: 'ai' },
                    { title: 'ERP Transformation', value: 'erp' },
                    { title: 'Data & Analytics', value: 'data' },
                    { title: 'Managed Delivery', value: 'managed' },
                    { title: 'Sustainability', value: 'sustainability' },
                ],
            },
            description: 'Used for Insights filters and Related Insights on service pages.',
        }),
        defineField({
            name: 'relatedIndustry',
            title: 'Related Industry',
            type: 'string',
            options: {
                list: [
                    { title: 'Finance', value: 'finance' },
                    { title: 'Retail', value: 'retail' },
                    { title: 'Manufacturing', value: 'manufacturing' },
                    { title: 'Housing', value: 'housing' },
                ],
            },
            description: 'Used for Insights industry filters and Related Insights on industry pages.',
        }),
        defineField({
            name: 'cta',
            title: 'Article CTA',
            type: 'object',
            description: 'Sidebar and bottom CTA. Defaults to Contact if left empty.',
            fields: [
                { name: 'title', type: 'string', title: 'Title', initialValue: 'Ready to Scale with Enterprise AI?' },
                {
                    name: 'description',
                    type: 'text',
                    title: 'Description',
                    rows: 3,
                    initialValue: 'Supercharge your operations with custom AI agents and automation. Book a strategy call today.',
                },
                { name: 'buttonText', type: 'string', title: 'Button Text', initialValue: 'Launch Your AI Strategy' },
                { name: 'buttonHref', type: 'string', title: 'Button Link', initialValue: '/contact' },
            ],
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published At',
            type: 'date', // using date string YYYY-MM-DD
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'string',
        }),
        defineField({
            name: 'authorRole',
            title: 'Author Role',
            type: 'string',
            hidden: true, // Not needed - kept for data migration
        }),
        defineField({
            name: 'readTime',
            title: 'Read Time',
            type: 'string',
            description: 'e.g. "5 min read"',
        }),
        defineField({
            name: 'faqs',
            title: 'FAQs',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    {
                        name: 'question',
                        title: 'Question',
                        type: 'string',
                        validation: (Rule) => Rule.required(),
                    },
                    {
                        name: 'answer',
                        title: 'Answer',
                        type: 'simpleBlockContent',
                        validation: (Rule) => Rule.required(),
                    }
                ],
                preview: {
                    select: {
                        title: 'question',
                        subtitle: 'answer'
                    }
                }
            }],
        }),
    ],
})
