import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'feature',
    title: 'Feature',
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
        }),
    ],
})
