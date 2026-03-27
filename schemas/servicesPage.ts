import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'servicesPage',
    title: 'Services Hub Page',
    type: 'document',
    fields: [
        defineField({ name: 'seo', title: 'SEO', type: 'seo' }),
        defineField({ name: 'badgeText', title: 'Hero Badge Text', type: 'string' }),
        defineField({ name: 'title', title: 'Hero Title', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'titleHighlight', title: 'Hero Title Highlight', type: 'string' }),
        defineField({ name: 'description', title: 'Hero Description', type: 'text', rows: 3 }),
        defineField({
            name: 'finalCTA',
            title: 'Bottom CTA',
            type: 'finalCtaSection',
        }),
    ],
})
