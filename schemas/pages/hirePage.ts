import { defineType, defineField } from 'sanity'
import { RESERVED_PAGE_SLUGS } from '../../lib/core-services'
import { INDUSTRY_ICON_OPTIONS } from '../../lib/industry-icons'
import { isSlugFreeAcrossPages } from './industryPage'

const titledDescription = [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'description', type: 'simpleBlockContent', title: 'Description' },
]

const titledList = (name: string, title: string, group: string, extraFields: any[] = []) =>
    defineField({
        name,
        title,
        type: 'array',
        group,
        of: [{
            type: 'object',
            fields: [...titledDescription, ...extraFields],
            preview: { select: { title: 'title' } },
        }],
    })

const headline = (name: string, title: string, group: string) =>
    defineField({ name, title, type: 'string', group })

const subline = (name: string, group: string) =>
    defineField({
        name,
        title: 'Section Subline',
        type: 'simpleBlockContent',
        group,
        description: 'Optional text shown under the section headline.',
    })

/** "Hire <role>" landing pages, served at /<slug> */
export default defineType({
    name: 'hirePage',
    title: 'Hire Developer Page',
    type: 'document',
    groups: [
        { name: 'settings', title: 'Settings' },
        { name: 'hero', title: 'Hero' },
        { name: 'expertise', title: 'Expertise' },
        { name: 'build', title: 'What You Can Build' },
        { name: 'models', title: 'Hiring Models' },
        { name: 'tech', title: 'Tech Stack' },
        { name: 'why', title: 'Why Hire' },
        { name: 'process', title: 'Hiring Process' },
        { name: 'industries', title: 'Industries' },
        { name: 'testimonials', title: 'Testimonials' },
        { name: 'more', title: 'Explore More' },
        { name: 'faqs', title: 'FAQs & CTA' },
        { name: 'seo', title: 'SEO' },
    ],
    fields: [
        defineField({
            name: 'title',
            title: 'Role Name',
            type: 'string',
            group: 'settings',
            description: 'Used in breadcrumbs and default headings (e.g. "AI Engineers").',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'URL Slug',
            type: 'slug',
            group: 'settings',
            description: 'The page will be available at syncorigins.com/<slug> (e.g. hire-ai-engineers).',
            options: { source: 'title', isUnique: isSlugFreeAcrossPages },
            validation: (Rule) =>
                Rule.required().custom((slug) => {
                    const current = slug?.current
                    if (current && RESERVED_PAGE_SLUGS.includes(current)) {
                        return `Slug "${current}" is already used by another page. Choose a different slug.`
                    }
                    return true
                }),
        }),

        // 1. Hero
        defineField({ name: 'hero', title: 'Hero Header', type: 'hero', group: 'hero' }),

        // 2. Expertise
        headline('expertiseHeadline', 'Expertise Headline', 'expertise'),
        subline('expertiseDescription', 'expertise'),
        titledList('expertise', 'Roles / Expertise', 'expertise'),

        // 3. What you can build
        headline('buildHeadline', 'Build Headline', 'build'),
        subline('buildDescription', 'build'),
        titledList('buildItems', 'Solutions You Can Build', 'build'),

        // 4. Hiring models
        headline('modelsHeadline', 'Hiring Models Headline', 'models'),
        subline('modelsDescription', 'models'),
        titledList('models', 'Hiring Models', 'models', [
            { name: 'bestFor', type: 'string', title: 'Best For', description: 'Short line, e.g. "Long-term AI product development".' },
            { name: 'features', type: 'array', of: [{ type: 'string' }], title: 'Key Points' },
        ]),
        defineField({
            name: 'modelsCta',
            title: 'Hiring Models Button',
            type: 'cta',
            group: 'models',
            description: 'Defaults to "Hire AI Engineers" → /contact.',
        }),

        // 5. Tech stack
        headline('techHeadline', 'Tech Stack Headline', 'tech'),
        subline('techDescription', 'tech'),
        defineField({
            name: 'techStack',
            title: 'Tech Stack Categories',
            type: 'array',
            group: 'tech',
            of: [{
                type: 'object',
                fields: [
                    { name: 'category', type: 'string', title: 'Category' },
                    { name: 'tools', type: 'array', of: [{ type: 'string' }], title: 'Tools / Technologies' },
                ],
                preview: { select: { title: 'category' } },
            }],
        }),

        // 6. Why hire
        headline('whyHeadline', 'Why Hire Headline', 'why'),
        subline('whyDescription', 'why'),
        titledList('whyItems', 'Reasons', 'why'),
        defineField({
            name: 'whyImage',
            title: 'Visual Image (optional)',
            type: 'image',
            group: 'why',
            options: { hotspot: true },
            fields: [{ name: 'alt', type: 'string', title: 'Alternative Text' }],
        }),
        headline('whyImageLabel', 'Visual Label', 'why'),
        headline('whyImageTitle', 'Visual Title', 'why'),
        headline('whyListTitle', 'List Title', 'why'),

        // 7. Process
        headline('processHeadline', 'Process Headline', 'process'),
        subline('processDescription', 'process'),
        titledList('process', 'Process Steps', 'process'),

        // 8. Industries
        headline('industriesHeadline', 'Industries Headline', 'industries'),
        subline('industriesDescription', 'industries'),
        titledList('industries', 'Industries', 'industries', [
            {
                name: 'icon',
                type: 'string',
                title: 'Icon',
                description: 'Leave empty to choose one automatically from the title.',
                options: { list: [...INDUSTRY_ICON_OPTIONS] },
            },
        ]),

        // 9. Testimonials
        headline('testimonialsHeadline', 'Testimonials Headline', 'testimonials'),
        defineField({
            name: 'testimonials',
            title: 'Testimonials',
            type: 'array',
            group: 'testimonials',
            of: [{ type: 'testimonial' }],
            description: 'The section is hidden until at least one testimonial is added.',
        }),

        // 10. Explore more
        headline('moreHeadline', 'Explore More Headline', 'more'),
        defineField({
            name: 'moreLinks',
            title: 'Other Developers to Hire',
            type: 'array',
            group: 'more',
            of: [{
                type: 'object',
                fields: [
                    { name: 'title', type: 'string', title: 'Title' },
                    { name: 'description', type: 'string', title: 'Short Description' },
                    { name: 'link', type: 'string', title: 'Link', description: 'e.g. /hire-data-engineers. Defaults to /contact.' },
                ],
                preview: { select: { title: 'title', subtitle: 'link' } },
            }],
        }),

        // 11–12. FAQs & final CTA
        defineField({ name: 'faqs', title: 'FAQs', type: 'array', group: 'faqs', of: [{ type: 'faq' }] }),
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

        defineField({ name: 'seo', title: 'SEO', type: 'seo', group: 'seo' }),
    ],
    preview: {
        select: { title: 'title', slug: 'slug.current' },
        prepare: ({ title, slug }) => ({ title: `Hire ${title || ''}`.trim(), subtitle: slug ? `/${slug}` : 'No slug yet' }),
    },
})
