import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'advantage',
    title: 'Advantage',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'icon',
            title: 'Icon Name',
            type: 'string',
            description: 'Lucide icon name (e.g. Brain, BarChart, Settings)',
        }),
    ],
})
