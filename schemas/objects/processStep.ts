import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'processStep',
    title: 'Process Step',
    type: 'object',
    fields: [
        defineField({
            name: 'step',
            title: 'Step Number',
            type: 'string',
        }),
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
