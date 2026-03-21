import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'cta',
    title: 'Call to Action',
    type: 'object',
    fields: [
        defineField({
            name: 'text',
            title: 'Button Text',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'link',
            title: 'Link URL',
            type: 'string',
            description: 'e.g., /contact or /services',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'variant',
            title: 'Button Style',
            type: 'string',
            options: {
                list: [
                    { title: 'Primary', value: 'primary' },
                    { title: 'Secondary', value: 'secondary' },
                    { title: 'Outline', value: 'outline' },
                ],
            },
            initialValue: 'secondary',
        }),
    ],
    preview: {
        select: {
            text: 'text',
            link: 'link',
        },
        prepare({ text, link }) {
            return {
                title: text || 'Untitled CTA',
                subtitle: link || 'No link',
            }
        },
    },
})
