import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'blogPage',
    title: 'Blog Listing Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Page Title',
            type: 'string',
            initialValue: 'Insights & Perspectives'
        }),
        defineField({
            name: 'description',
            title: 'Page Description',
            type: 'text',
            rows: 3,
            initialValue: 'Explore our latest perspectives on enterprise technology and digital transformation.'
        }),
        defineField({
            name: 'newsletterTitle',
            title: 'Newsletter Title',
            type: 'string',
            initialValue: 'Stay Ahead of the Curve',
            description: 'Main heading for the bottom newsletter section'
        }),
        defineField({
            name: 'newsletterDescription',
            title: 'Newsletter Description',
            type: 'text',
            rows: 3,
            initialValue: "Subscribe to get our weekly perspectives on GenAI, Data, and it's impact on business growth."
        }),
        defineField({
            name: 'newsletterButtonText',
            title: 'Newsletter Button Text',
            type: 'string',
            initialValue: 'Subscribe Now'
        }),
        defineField({
            name: 'newsletterButtonLink',
            title: 'Newsletter Button Link',
            type: 'string',
            initialValue: '#newsletter'
        }),
        defineField({
            name: 'seo',
            title: 'SEO',
            type: 'seo',
        }),
    ],
})
