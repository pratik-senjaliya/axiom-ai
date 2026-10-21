import { defineType, defineField, type SlugValidationContext } from 'sanity'
import { RESERVED_PAGE_SLUGS } from '../../lib/core-services'
import { industryFields } from './financePage'

/** Same sections as the Finance page, without Finance-specific starter text */
const genericFields = industryFields.map(({ initialValue, ...field }: any) => field)

export async function isSlugFreeAcrossPages(slug: string, context: SlugValidationContext) {
    const client = context.getClient({ apiVersion: '2024-01-01' })
    const id = context.document?._id?.replace(/^drafts\./, '')
    const taken = await client.fetch<boolean>(
        `count(*[_type in ["industryPage", "service"] && slug.current == $slug && !(_id in [$id, $draftId])]) > 0`,
        { slug, id, draftId: `drafts.${id}` }
    )
    return !taken
}

export default defineType({
    name: 'industryPage',
    title: 'Industry Page',
    type: 'document',
    groups: [
        { name: 'settings', title: 'Settings' },
        { name: 'hero', title: 'Hero Section' },
        { name: 'challenges', title: 'Industry Challenges' },
        { name: 'solutions', title: 'Transformation Solutions' },
        { name: 'clients', title: 'Clients We Serve' },
        { name: 'outcomes', title: 'How We Drive Success / Outcomes' },
        { name: 'successStories', title: 'Success Stories' },
        { name: 'process', title: 'Process & Delivery' },
        { name: 'whyUs', title: 'Why Choose SyncOrigins' },
        { name: 'faqs', title: 'FAQs & CTA' },
        { name: 'seo', title: 'SEO' },
    ],
    fields: [
        defineField({
            name: 'title',
            title: 'Industry Name',
            type: 'string',
            group: 'settings',
            description: 'Used in the menu, breadcrumbs and default headings (e.g. "Healthcare").',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'URL Slug',
            type: 'slug',
            group: 'settings',
            description: 'The page will be available at syncorigins.com/<slug>.',
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
        defineField({
            name: 'showInNavigation',
            title: 'Show in Navigation',
            type: 'boolean',
            group: 'settings',
            initialValue: true,
            description: 'When enabled, this industry appears in the Industries menu and footer.',
        }),
        defineField({
            name: 'navTags',
            title: 'Navigation Tags',
            type: 'array',
            of: [{ type: 'string' }],
            group: 'settings',
            description: 'Short tags shown in the Industries dropdown.',
        }),
        ...genericFields,
    ],
    preview: {
        select: { title: 'title', slug: 'slug.current' },
        prepare: ({ title, slug }) => ({ title, subtitle: slug ? `/${slug}` : 'No slug yet' }),
    },
})
