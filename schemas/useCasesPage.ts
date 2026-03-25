import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'useCasesPage',
    title: 'Use Cases Page',
    type: 'document',
    groups: [
        { name: 'hero', title: 'Hero Section' },
        { name: 'content', title: 'Content' },
        { name: 'ctas', title: 'CTAs' },
        { name: 'seo', title: 'SEO' },
    ],
    fields: [
        defineField({ name: 'seo', title: 'SEO', type: 'seo', group: 'seo' }),
        defineField({ name: 'title', title: 'Title', type: 'string', group: 'hero', validation: (Rule) => Rule.required() }),
        defineField({ name: 'description', title: 'Short Description', type: 'text', rows: 3, group: 'hero' }),
        defineField({ name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true }, group: 'hero' }),
        defineField({
            name: 'tabs', title: 'Filters / Tabs', type: 'array', group: 'content',
            of: [{ type: 'string' }]
        }),
        defineField({
            name: 'useCases', title: 'Use Cases Cards', type: 'array', group: 'content',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'title', title: 'Case Title', type: 'string' }),
                    defineField({ name: 'problem', title: 'The Problem', type: 'text', rows: 2 }),
                    defineField({ name: 'tools', title: 'Tools & Tech', type: 'string' }),
                    defineField({ name: 'approach', title: 'The Approach', type: 'text', rows: 2 }),
                    defineField({ name: 'impact', title: 'Business Impact', type: 'text', rows: 2 })
                ]
            }]
        }),
        defineField({
            name: 'howWePartnerCTA', title: 'How We Partner CTA', type: 'finalCtaSection', group: 'ctas' // Using finalCtaSection for headline, subtext, button
        }),
        defineField({
            name: 'pocGuaranteeCTA', title: 'POC Guarantee Section', type: 'finalCtaSection', group: 'ctas'
        })
    ],
})
