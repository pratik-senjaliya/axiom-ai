import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'hero',
    title: 'Hero Section',
    type: 'object',
    fields: [
        defineField({
            name: 'badge',
            title: 'Badge Text',
            type: 'string',
            description: 'Small text above the main title (e.g. "Insights")',
        }),
        defineField({
            name: 'title',
            title: 'Main Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'titleHighlight',
            title: 'Title Highlight',
            type: 'string',
            description: 'The part of the title that stands out (gradient/bold)',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'image',
            title: 'Hero Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
              {
                name: 'alt',
                type: 'string',
                title: 'Alternative Text',
              }
            ]
        }),
        defineField({
            name: 'primaryCta',
            title: 'Primary CTA',
            type: 'cta',
        }),
        defineField({
            name: 'secondaryCta',
            title: 'Secondary CTA',
            type: 'cta',
        }),
    ],
})
