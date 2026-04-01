import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'finalCtaSection',
    title: 'Final CTA Section',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Section Title',
            type: 'string',
            description: 'Main heading for the CTA section',
        }),
        defineField({
            name: 'description',
            title: 'Section Description',
            type: 'simpleBlockContent',
            description: 'Body text below the heading',
        }),
        defineField({
            name: 'cta',
            title: 'Call to Action Button',
            type: 'cta',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            ctaText: 'cta.text',
        },
        prepare({ title, ctaText }) {
            return {
                title: title || 'Untitled CTA Section',
                subtitle: ctaText ? `Button: ${ctaText}` : 'No button configured',
            }
        },
    },
})
