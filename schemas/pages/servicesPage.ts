import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'servicesPage',
    title: 'Services Hub Page',
    type: 'document',
    fields: [
        defineField({
            name: 'badgeText',
            title: 'Badge Text',
            type: 'string',
            initialValue: 'Our Expertise'
        }),
        defineField({
            name: 'title',
            title: 'Main Title',
            type: 'string',
            initialValue: 'Enterprise Solutions'
        }),
        defineField({
            name: 'titleHighlight',
            title: 'Title Highlight',
            type: 'string',
            initialValue: '& Strategic Services'
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'simpleBlockContent',
        }),
        defineField({
            name: 'finalCTA',
            title: 'Final CTA Section',
            type: 'object',
            fields: [
                defineField({ name: 'title', type: 'string', title: 'CTA Title' }),
                defineField({ name: 'description', type: 'simpleBlockContent', title: 'CTA Description' }),
                defineField({ name: 'cta', type: 'cta', title: 'CTA Button' })
            ]
        }),
        defineField({
            name: 'seo',
            title: 'SEO',
            type: 'seo',
        }),
    ],
})
