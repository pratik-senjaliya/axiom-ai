import { defineType, defineField } from 'sanity'
import { CORE_SERVICE_SLUGS } from '../../lib/core-services'

export default defineType({
    name: 'service',
    title: 'Service',
    type: 'document',
    groups: [
        { name: 'settings', title: 'Settings' },
        { name: 'hero', title: 'Hero Section' },
        { name: 'pitfalls', title: 'Challenge Section' },
        { name: 'layers', title: 'Capabilities / Layers' },
        { name: 'useCases', title: 'Use Cases' },
        { name: 'models', title: 'Engagement Models' },
        { name: 'roadmap', title: 'Roadmap' },
        { name: 'faqs', title: 'FAQs & CTA' },
        { name: 'seo', title: 'SEO' },
    ],
    fields: [
        defineField({
            name: 'showInNavigation',
            title: 'Show in Navigation',
            type: 'boolean',
            group: 'settings',
            initialValue: true,
            description: 'When enabled, this service appears in the header and footer menus.',
        }),
        defineField({
            name: 'navTags',
            title: 'Navigation Tags',
            type: 'array',
            of: [{ type: 'string' }],
            group: 'settings',
            description: 'Short tags shown in the services dropdown (e.g. "GenAI", "ERP Migration").',
        }),

        defineField({
            name: 'title',
            title: 'Page Title',
            type: 'string',
            group: 'hero',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'URL Slug',
            type: 'slug',
            options: { source: 'title' },
            group: 'hero',
            validation: (Rule) =>
                Rule.required().custom((slug) => {
                    const current = slug?.current
                    if (current && CORE_SERVICE_SLUGS.includes(current as typeof CORE_SERVICE_SLUGS[number])) {
                        return `Slug "${current}" is reserved for a core service page. Choose a different slug.`
                    }
                    return true
                }),
        }),

        defineField({
            name: 'hero',
            title: 'Hero Header',
            type: 'hero',
            group: 'hero',
        }),
        defineField({
            name: 'tags',
            title: 'Hub Tags',
            type: 'array',
            of: [{ type: 'string' }],
            group: 'hero',
        }),

        defineField({
            name: 'pitfallsHeadline',
            title: 'Challenge Section Headline',
            type: 'string',
            initialValue: 'Why Initiatives Stall',
            group: 'pitfalls',
        }),
        defineField({
            name: 'pitfalls',
            title: 'Challenge Points',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'title', type: 'string', title: 'Title' },
                    { name: 'description', type: 'simpleBlockContent', title: 'Description' },
                ],
            }],
            group: 'pitfalls',
        }),

        defineField({
            name: 'layersHeadline',
            title: 'Layers Section Headline',
            type: 'string',
            initialValue: 'Our Capability Layers',
            group: 'layers',
        }),
        defineField({
            name: 'layers',
            title: 'Capability Layers',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'layer', type: 'string', title: 'Layer Label (optional)' },
                    { name: 'title', type: 'string', title: 'Title' },
                    { name: 'outcome', type: 'string', title: 'Outcome Label (AI-style cards)' },
                    { name: 'description', type: 'simpleBlockContent', title: 'Description' },
                    { name: 'tasks', type: 'array', of: [{ type: 'string' }], title: 'Key Points (Managed Delivery-style)' },
                ],
            }],
            group: 'layers',
        }),

        defineField({
            name: 'useCasesHeadline',
            title: 'Use Cases Headline',
            type: 'string',
            initialValue: 'Industry Use Cases',
            group: 'useCases',
        }),
        defineField({
            name: 'useCases',
            title: 'Use Cases',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'industry', type: 'string', title: 'Industry' },
                    { name: 'title', type: 'string', title: 'Title' },
                    { name: 'description', type: 'simpleBlockContent', title: 'Description' },
                ],
            }],
            group: 'useCases',
        }),

        defineField({
            name: 'roadmapHeadline',
            title: 'Roadmap Section Headline',
            type: 'string',
            initialValue: 'From Pilot to Platform',
            group: 'roadmap',
        }),
        defineField({
            name: 'roadmap',
            title: 'Roadmap Steps',
            type: 'array',
            of: [{ type: 'processStep' }],
            group: 'roadmap',
        }),

        defineField({
            name: 'modelsHeadline',
            title: 'Models Section Headline',
            type: 'string',
            initialValue: 'Engagement Models',
            group: 'models',
        }),
        defineField({
            name: 'models',
            title: 'Engagement Models',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'model', type: 'string', title: 'Model Label (optional)' },
                    { name: 'title', type: 'string', title: 'Title' },
                    { name: 'description', type: 'simpleBlockContent', title: 'Description' },
                    { name: 'tasks', type: 'array', of: [{ type: 'string' }], title: 'Outcomes' },
                ],
            }],
            group: 'models',
        }),

        defineField({
            name: 'faqs',
            title: 'Frequently Asked Questions',
            type: 'array',
            of: [{ type: 'faq' }],
            group: 'faqs',
        }),
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
            ],
        }),

        defineField({
            name: 'seo',
            title: 'SEO',
            type: 'seo',
            group: 'seo',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            slug: 'slug.current',
        },
        prepare({ title, slug }) {
            return {
                title: title || 'Untitled Service',
                subtitle: `/${slug || 'no-slug'}`,
            }
        },
    },
})
