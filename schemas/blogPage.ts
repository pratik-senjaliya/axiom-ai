import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'blogPage',
    title: 'Blog Page',
    type: 'document',
    fields: [
        defineField({
            name: 'seo',
            title: 'SEO',
            type: 'seo',
        }),
        defineField({
            name: 'title',
            title: 'Hero Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Hero Description',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'newsletterTitle',
            title: 'Newsletter Section Title',
            type: 'string',
        }),
        defineField({
            name: 'newsletterDescription',
            title: 'Newsletter Section Description',
            type: 'text',
            rows: 3,
        }),
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare({ title }) {
            return {
                title: title || 'Blog Page',
            }
        },
    },
})
