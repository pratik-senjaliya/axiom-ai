import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'settings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        defineField({
            name: 'companyName',
            title: 'Company Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'footerDescription',
            title: 'Footer Description',
            type: 'text',
            rows: 3,
            description: 'Short description appearing in the footer',
        }),
        defineField({
            name: 'socialLinks',
            title: 'Social Media Links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'platform',
                            title: 'Platform',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'LinkedIn', value: 'linkedin' },
                                    { title: 'Twitter / X', value: 'twitter' },
                                    { title: 'Facebook', value: 'facebook' },
                                    { title: 'Instagram', value: 'instagram' },
                                    { title: 'YouTube', value: 'youtube' },
                                ],
                            },
                        }),
                        defineField({
                            name: 'url',
                            title: 'URL',
                            type: 'url',
                            validation: (Rule) => Rule.required().uri({ scheme: ['http', 'https'] }),
                        }),
                    ],
                    preview: {
                        select: {
                            title: 'platform',
                            subtitle: 'url',
                        },
                    },
                },
            ],
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'Site Settings',
            }
        },
    },
})
