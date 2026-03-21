import { defineType, defineField } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'

export default defineType({
    name: 'privacyPolicy',
    title: 'Privacy Policy',
    type: 'document',
    icon: DocumentTextIcon,
    fields: [
        defineField({
            name: 'title',
            title: 'Page Title',
            type: 'string',
            initialValue: 'Privacy Policy',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'lastUpdated',
            title: 'Last Updated',
            type: 'date',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'H2', value: 'h2' },
                        { title: 'H3', value: 'h3' },
                        { title: 'H4', value: 'h4' },
                    ],
                    lists: [
                        { title: 'Bullet', value: 'bullet' },
                        { title: 'Numbered', value: 'number' }
                    ],
                }
            ]
        }),
        defineField({
            name: 'seo',
            title: 'SEO',
            type: 'seo'
        }),
    ],
    preview: {
        select: {
            title: 'title',
            lastUpdated: 'lastUpdated'
        },
        prepare({ title, lastUpdated }) {
            return {
                title: title || 'Privacy Policy',
                subtitle: lastUpdated ? `Last updated: ${lastUpdated}` : 'No date set'
            }
        }
    }
})
