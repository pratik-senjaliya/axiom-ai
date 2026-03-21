import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'testimonial',
    title: 'Testimonial',
    type: 'object',
    fields: [
        defineField({
            name: 'quote',
            title: 'Quote',
            type: 'text',
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'string',
        }),
        defineField({
            name: 'role',
            title: 'Role',
            type: 'string',
        }),
        defineField({
            name: 'company',
            title: 'Company',
            type: 'string',
        }),
    ],
})
