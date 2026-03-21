import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'contactPage',
    title: 'Contact Page',
    type: 'document',
    fields: [
        defineField({
            name: 'seo',
            title: 'SEO',
            type: 'seo',
        }),
        defineField({
            name: 'title',
            title: 'Page Title',
            type: 'string',
            initialValue: 'Get in Touch'
        }),
        defineField({
            name: 'description',
            title: 'Page Description',
            type: 'text',
            initialValue: "Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
        }),

        // Contact Info
        defineField({ name: 'phone', title: 'Phone Number', type: 'string' }),
        defineField({ name: 'email', title: 'Email Address', type: 'string' }),
        defineField({ name: 'address', title: 'Address', type: 'text' }),
        defineField({
            name: 'businessHours',
            title: 'Business Hours',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'days', title: 'Days', type: 'string' }),
                    defineField({ name: 'hours', title: 'Hours', type: 'string' })
                ]
            }]
        }),
    ],
})
