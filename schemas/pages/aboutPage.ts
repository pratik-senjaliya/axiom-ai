import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'aboutPage',
    title: 'About Page',
    type: 'document',
    groups: [
        { name: 'hero', title: 'Hero Section' },
        { name: 'whoWeAre', title: 'Who We Are' },
        { name: 'philosophy', title: 'Our Philosophy' },
        { name: 'whatWeDo', title: 'What We Do' },
        { name: 'whyUs', title: 'Why Sync Origins' },
        { name: 'cta', title: 'Call to Action' },
        { name: 'seo', title: 'SEO' },
    ],
    fields: [
        // Section 1: Hero
        defineField({
            name: 'hero',
            title: 'Hero Section',
            type: 'hero',
            group: 'hero',
        }),

        // Section 2: Who We Are
        defineField({
            name: 'whoWeAreHeadline',
            title: 'Who We Are Headline',
            type: 'string',
            group: 'whoWeAre',
        }),
        defineField({
            name: 'whoWeAreBody',
            title: 'Who We Are Body',
            type: 'simpleBlockContent',
            group: 'whoWeAre',
        }),

        // Section 3: Our Philosophy
        defineField({
            name: 'philosophyHeadline',
            title: 'Philosophy Headline',
            type: 'string',
            group: 'philosophy',
        }),
        defineField({
            name: 'philosophyBody',
            title: 'Philosophy Body',
            type: 'simpleBlockContent',
            group: 'philosophy',
        }),
        defineField({
            name: 'philosophyPrinciple',
            title: 'Guiding Principle (Bold Statement)',
            type: 'string',
            group: 'philosophy',
        }),

        // Section 4: What We Do (Capabilities)
        defineField({
            name: 'whatWeDoHeadline',
            title: 'What We Do Headline',
            type: 'string',
            group: 'whatWeDo',
        }),
        defineField({
            name: 'whatWeDoIntro',
            title: 'Intro Body Copy',
            type: 'simpleBlockContent',
            group: 'whatWeDo',
        }),
        defineField({
            name: 'capabilities',
            title: 'Capabilities',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'title', type: 'string', title: 'Title' },
                    { name: 'description', type: 'simpleBlockContent', title: 'Description' }
                ]
            }],
            group: 'whatWeDo',
        }),

        // Section 5: Why Sync Origins
        defineField({
            name: 'whyUsHeadline',
            title: 'Why Us Headline',
            type: 'string',
            group: 'whyUs',
        }),
        defineField({
            name: 'whyUsPoints',
            title: 'Strategic Points',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'title', type: 'string', title: 'Title' },
                    { name: 'description', type: 'simpleBlockContent', title: 'Description' }
                ]
            }],
            group: 'whyUs',
        }),
        defineField({
            name: 'visionStatement',
            title: 'Our Vision',
            type: 'simpleBlockContent',
            group: 'whyUs',
        }),

        // Section 6: Call to Action (Multi-button support)
        defineField({
            name: 'ctaHeadline',
            title: 'CTA Headline',
            type: 'string',
            group: 'cta',
        }),
        defineField({
            name: 'ctaOptions',
            title: 'CTA Options',
            type: 'array',
            of: [{ type: 'cta' }],
            group: 'cta',
        }),
        defineField({
            name: 'ctaClosing',
            title: 'CTA Closing Line',
            type: 'string',
            group: 'cta',
        }),

        defineField({ name: 'seo', title: 'SEO', type: 'seo', group: 'seo' }),
    ],
})
