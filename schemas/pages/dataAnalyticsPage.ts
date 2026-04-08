import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'dataAnalyticsPage',
    title: 'Data & Analytics Page',
    type: 'document',
    groups: [
        { name: 'hero', title: 'Hero Section' },
        { name: 'problem', title: 'The Problem We Solve' },
        { name: 'approach', title: 'Our Approach' },
        { name: 'differentiators', title: 'What Makes Us Different' },
        { name: 'useCases', title: 'Use Cases' },
        { name: 'techEcosystem', title: 'Technology Ecosystem' },
        { name: 'engagement', title: 'Engagement Model' },
        { name: 'testimonials', title: 'Testimonials' },
        { name: 'cta', title: 'Call to Action' },
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

        // Section 2: The Problem We Solve
        defineField({
            name: 'problemHeadline',
            title: 'Problem Headline',
            type: 'string',
            group: 'problem',
        }),
        defineField({
            name: 'problemIntro',
            title: 'Problem Intro (Body Copy)',
            type: 'simpleBlockContent',
            group: 'problem',
        }),
        defineField({
            name: 'problems',
            title: 'Problem Points',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'title', type: 'string', title: 'Title' },
                    { name: 'description', type: 'simpleBlockContent', title: 'Description' }
                ]
            }],
            group: 'problem',
        }),
        defineField({
            name: 'problemConclusion',
            title: 'Problem Conclusion (The result?)',
            type: 'simpleBlockContent',
            group: 'problem',
        }),

        // Section 3: Our Approach
        defineField({
            name: 'approachHeadline',
            title: 'Approach Headline',
            type: 'string',
            group: 'approach',
        }),
        defineField({
            name: 'approachBody',
            title: 'Approach Body Copy',
            type: 'simpleBlockContent',
            group: 'approach',
        }),
        defineField({
            name: 'approachCapabilities',
            title: 'Core Capabilities',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'title', type: 'string', title: 'Title' },
                    { name: 'description', type: 'simpleBlockContent', title: 'Description' },
                    { name: 'outcome', type: 'string', title: 'Key Outcome' }
                ]
            }],
            group: 'approach',
        }),

        // Section 4: What Makes Us Different
        defineField({
            name: 'differentiatorsHeadline',
            title: 'Differentiators Headline',
            type: 'string',
            group: 'differentiators',
        }),
        defineField({
            name: 'differentiators',
            title: 'Differentiators',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'title', type: 'string', title: 'Title' },
                    { name: 'description', type: 'simpleBlockContent', title: 'Description' }
                ]
            }],
            group: 'differentiators',
        }),

        // Section 5: Key Use Cases
        defineField({
            name: 'useCasesHeadline',
            title: 'Use Cases Headline',
            type: 'string',
            group: 'useCases',
        }),
        defineField({
            name: 'useCases',
            title: 'Use Cases',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'title', type: 'string', title: 'Title' },
                    { name: 'description', type: 'simpleBlockContent', title: 'Description' }
                ]
            }],
            group: 'useCases',
        }),

        // Section 6: Technology Ecosystem
        defineField({
            name: 'techHeadline',
            title: 'Technology Headline',
            type: 'string',
            group: 'techEcosystem',
        }),
        defineField({
            name: 'techBody',
            title: 'Technology Body Copy',
            type: 'simpleBlockContent',
            group: 'techEcosystem',
        }),
        defineField({
            name: 'technologies',
            title: 'Technologies',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'title', type: 'string', title: 'Category' },
                    { name: 'technologiesList', type: 'string', title: 'Technologies (Comma separated)' }
                ]
            }],
            group: 'techEcosystem',
        }),

        // Section 7: Engagement Model
        defineField({
            name: 'engagementHeadline',
            title: 'Engagement Headline',
            type: 'string',
            group: 'engagement',
        }),
        defineField({
            name: 'engagementSteps',
            title: 'Engagement Steps',
            type: 'array',
            of: [{ type: 'processStep' }],
            group: 'engagement',
        }),

        // Section 8: Call to Action (Multi-button support)
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
        
        defineField({
            name: 'testimonials',
            title: 'Testimonials',
            type: 'array',
            of: [{ type: 'testimonial' }],
            group: 'testimonials',
        }),

        defineField({ name: 'seo', title: 'SEO', type: 'seo', group: 'seo' }),
    ],
})
