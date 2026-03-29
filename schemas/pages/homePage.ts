import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    groups: [
        { name: 'hero', title: 'Hero Section' },
        { name: 'pitfalls', title: 'Why Transformations Fail' },
        { name: 'solutions', title: 'What We Do' },
        { name: 'roadmap', title: 'Phases to Production' },
        { name: 'personas', title: 'Target Audience' },
        { name: 'seo', title: 'SEO' },
    ],
    fields: [
        // Section 1: Hero Header
        defineField({
            name: 'hero',
            title: 'Hero Header',
            type: 'hero',
            group: 'hero',
        }),

        // Section 2: Why Digital Transformations Fail
        defineField({
            name: 'pitfallsHeadline',
            title: 'Pitfalls Section Headline',
            type: 'string',
            initialValue: 'Escape the "Pilot Purgatory"',
            group: 'pitfalls',
        }),
        defineField({
            name: 'pitfalls',
            title: 'Pitfalls (Failures)',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'stat', type: 'string', title: 'Stat (e.g. 85%)' },
                    { name: 'title', type: 'string', title: 'Title' },
                    { name: 'description', type: 'text', rows: 3, title: 'Description' }
                ]
            }],
            group: 'pitfalls',
        }),

        // Section 3: Enterprise-grade AI Solutions
        defineField({
            name: 'solutionsHeadline',
            title: 'Solutions Headline',
            type: 'string',
            initialValue: 'Enterprise-grade AI Solutions',
            group: 'solutions',
        }),
        defineField({
          name: 'solutions',
          title: 'Solutions (What We Do)',
          type: 'array',
          of: [{
              type: 'object',
              fields: [
                  { name: 'title', type: 'string', title: 'Solution Title' },
                  { name: 'description', type: 'text', rows: 3, title: 'Description' }
              ]
          }],
          group: 'solutions',
        }),

        // Section 4: Three Phases to Transformation
        defineField({
            name: 'roadmapHeadline',
            title: 'Roadmap Headline',
            type: 'string',
            initialValue: 'The 3 Phases Path to Production',
            group: 'roadmap',
        }),
        defineField({
            name: 'roadmap',
            title: 'Roadmap Steps',
            type: 'array',
            of: [{ type: 'processStep' }],
            group: 'roadmap',
        }),

        // Section 5: Built for Enterprise Leaders
        defineField({
            name: 'personasHeadline',
            title: 'Personas Headline',
            type: 'string',
            initialValue: 'Built for Enterprise Leaders',
            group: 'personas',
        }),
        defineField({
            name: 'personas',
            title: 'Personas',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'role', type: 'string', title: 'Role (e.g. For CXOs)' },
                    { name: 'description', type: 'text', rows: 3, title: 'Description' }
                ]
            }],
            group: 'personas',
        }),

        // Section 6: Final CTA
        defineField({
            name: 'finalCta',
            title: 'Final CTA',
            type: 'object',
            group: 'personas',
            fields: [
                { name: 'title', type: 'string', title: 'Title' },
                { name: 'description', type: 'text', rows: 3, title: 'Description' },
                { name: 'primaryCta', type: 'cta', title: 'Primary CTA' }
            ]
        }),

        defineField({ name: 'seo', title: 'SEO', type: 'seo', group: 'seo' }),
    ],
    preview: {
        select: {
          title: 'hero.title',
        },
        prepare({ title }) {
          return {
            title: title || 'Home Page',
            subtitle: 'Singleton'
          }
        }
    },
    orderings: [
        {
            title: 'Title',
            name: 'titleAsc',
            by: [
                { field: 'hero.title', direction: 'asc' }
            ]
        }
    ]
})
