import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'stat',
    title: 'Statistic',
    type: 'object',
    fields: [
        defineField({
            name: 'label',
            title: 'Label',
            type: 'string',
        }),
        defineField({
            name: 'value',
            title: 'Value',
            type: 'string',
        }),
    ],
})
