import { defineType, defineField } from 'sanity'

export function createServiceSchema(name: string, title: string) {
    return defineType({
        name,
        title,
        type: 'document',
        groups: [
            { name: 'hero', title: 'Hero Section' },
            { name: 'intro', title: 'Intro Section' },
            { name: 'details', title: 'Details' },
            { name: 'content', title: 'Main Content' },
            { name: 'seo', title: 'SEO' },
        ],
        fields: [
            defineField({ name: 'seo', title: 'SEO', type: 'seo', group: 'seo' }),
            defineField({ name: 'title', title: 'Title', type: 'string', group: 'hero', validation: (Rule) => Rule.required() }),
            defineField({ name: 'description', title: 'Short Description', type: 'text', rows: 3, group: 'hero' }),
            defineField({ name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true }, group: 'hero' }),
            defineField({ name: 'introTitle', title: 'Intro Title', type: 'string', group: 'intro' }),
            defineField({ name: 'introContent', title: 'Intro Content', type: 'text', group: 'intro' }),
            defineField({
                name: 'serviceAreas', title: 'Service Areas / Layers / The Stack', type: 'array', group: 'content',
                of: [
                    {
                        type: 'object',
                        fields: [
                            defineField({ name: 'name', type: 'string', title: 'Name' }),
                            defineField({ name: 'focus', type: 'string', title: 'Focus / Outcome / Description' }),
                            defineField({
                                name: 'sections', title: 'Sections / Points', type: 'array',
                                of: [{ type: 'object', fields: [{ name: 'title', type: 'string', title: 'Section Title' }, { name: 'tasks', type: 'array', title: 'Tasks / Descriptions', of: [{ type: 'string' }] }] }]
                            })
                        ]
                    }
                ]
            }),
            defineField({ name: 'process', title: 'Process Steps / Phased Delivery', type: 'array', of: [{ type: 'processStep' }], group: 'content' }),
            defineField({ name: 'whyChooseUs', title: 'Why Initiatives Fail / Why Partner With Us', type: 'array', of: [{ type: 'feature' }], group: 'content' }),
            defineField({ name: 'deploymentModels', title: 'Deployment Models', type: 'array', of: [{ type: 'feature' }], group: 'content' }),
            defineField({ name: 'industryUseCases', title: 'Industry Use Cases', type: 'array', of: [{ type: 'feature' }], group: 'content' }),
            defineField({ name: 'faqs', title: 'FAQs', type: 'array', of: [{ type: 'faq' }], group: 'content' }),
            defineField({ name: 'heroCTA', title: 'Hero CTA', type: 'cta', group: 'hero' }),
            defineField({ name: 'secondaryCTA', title: 'Secondary CTA', type: 'cta', group: 'hero' }),
            defineField({ name: 'finalCTA', title: 'Final CTA Section', type: 'finalCtaSection', group: 'content' }),
        ]
    })
}
