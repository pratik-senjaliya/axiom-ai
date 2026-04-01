import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'stat',
    title: 'Stat',
    type: 'object',
    fields: [
        defineField({
            name: 'value',
            title: 'Value',
            type: 'string',
            description: 'The number or percentage (e.g. "25%" or "80+")',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'label',
            title: 'Label',
            type: 'string',
            description: 'What the value represents (e.g. "Reduction in costs")',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'simpleBlockContent',
            description: 'Optional additional context',
        }),
    ],
})
