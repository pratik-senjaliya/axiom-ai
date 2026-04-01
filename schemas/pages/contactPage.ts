import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'contactPage',
    title: 'Contact Page',
    type: 'document',
    groups: [
        { name: 'hero', title: 'Hero Section' },
        { name: 'contactInfo', title: 'Contact Information' },
        { name: 'seo', title: 'SEO' },
    ],
    fields: [
        defineField({
            name: 'badge',
            title: 'Badge Text',
            type: 'string',
            initialValue: 'Contact',
            group: 'hero',
        }),
        defineField({
            name: 'title',
            title: 'Page Title',
            type: 'string',
            initialValue: 'Let\'s Talk Transformation',
            group: 'hero',
        }),
        defineField({
            name: 'description',
            title: 'Page Description',
            type: 'simpleBlockContent',
            group: 'hero',
        }),

        // Contact Info
        defineField({ 
            name: 'infoItems', 
            title: 'Contact Info Items', 
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'icon', title: 'Icon (mail, phone, map-pin)', type: 'string' }),
                    defineField({ name: 'label', title: 'Label', type: 'string' }),
                    defineField({ name: 'value', title: 'Value', type: 'string' }),
                ]
            }],
            group: 'contactInfo',
        }),

        defineField({ name: 'phone', title: 'Phone Number (Fallback)', type: 'string', group: 'contactInfo' }),
        defineField({ name: 'email', title: 'Email Address (Fallback)', type: 'string', group: 'contactInfo' }),
        defineField({ name: 'address', title: 'Address (Fallback)', type: 'text', group: 'contactInfo' }),
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
            }],
            group: 'contactInfo',
        }),

        defineField({
            name: 'seo',
            title: 'SEO',
            type: 'seo',
            group: 'seo',
        }),
    ],
})
