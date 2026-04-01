import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'managedDeliveryPage',
    title: 'Managed Delivery Page',
    type: 'document',
    groups: [
        { name: 'hero', title: 'Hero Section' },
        { name: 'pitfalls', title: 'Why Projects Fail' },
        { name: 'layers', title: 'Delivery Layers' },
        { name: 'models', title: 'Engagement Models' },
        { name: 'roadmap', title: 'Advantages / Steps' },
        { name: 'faqs', title: 'FAQs' },
        { name: 'testimonials', title: 'Testimonials' },
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
        defineField({ 
            name: "tags", 
            title: "Hub Tags", 
            type: "array", 
            of: [{ type: "string" }], 
            group: "hero" 
        }),

        // Section 2: Why Modern Software Projects Fail
        defineField({
            name: 'pitfallsHeadline',
            title: 'Pitfalls Section Headline',
            type: 'string',
            initialValue: 'Why Modern Software Projects Fail (and How to Avoid it)',
            group: 'pitfalls',
        }),
        defineField({
            name: 'pitfalls',
            title: 'Failure Points',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'title', type: 'string', title: 'Title' },
                    { name: 'description', type: 'simpleBlockContent', title: 'Description' }
                ]
            }],
            group: 'pitfalls',
        }),

        // Section 3: Integrated Delivery Layers
        defineField({
            name: 'layersHeadline',
            title: 'Layers Section Headline',
            type: 'string',
            initialValue: 'Integrated Delivery Layers',
            group: 'layers',
        }),
        defineField({
            name: 'layers',
            title: 'Delivery Layers',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'title', type: 'string', title: 'Layer Title' },
                    { name: 'description', type: 'simpleBlockContent', title: 'Description' },
                    { name: 'tasks', type: 'array', of: [{ type: 'string' }], title: 'Tasks / Key Advantages' }
                ]
            }],
            group: 'layers',
        }),

        // Section 4: Managed Delivery Models
        defineField({
            name: 'modelsHeadline',
            title: 'Models Section Headline',
            type: 'string',
            initialValue: 'Managed Delivery Service Models',
            group: 'models',
        }),
        defineField({
            name: 'models',
            title: 'Service Models',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'title', type: 'string', title: 'Model Title' },
                    { name: 'description', type: 'simpleBlockContent', title: 'Description' },
                    { name: 'tasks', type: 'array', of: [{ type: 'string' }], title: 'Tasks / Outcomes' }
                ]
            }],
            group: 'models',
        }),

        // Section 5: Roadmap / Advantages
        defineField({
            name: 'roadmapHeadline',
            title: 'Roadmap/Advantages Headline',
            type: 'string',
            initialValue: 'The Sync Origins Advantage',
            group: 'roadmap',
        }),
        defineField({
            name: 'roadmap',
            title: 'Advantages / Process Steps',
            type: 'array',
            of: [{ type: 'processStep' }],
            group: 'roadmap',
        }),

        // FAQ Section
        defineField({
            name: 'faqs',
            title: 'Frequently Asked Questions',
            type: 'array',
            of: [{ type: 'faq' }],
            group: 'faqs',
        }),

        // Final CTA
        defineField({
            name: 'finalCta',
            title: 'Final CTA',
            type: 'object',
            group: 'faqs',
            fields: [
              { name: 'badgeText', type: 'string', title: 'Badge Text' },
              { name: 'title', type: 'string', title: 'Title' },
              { name: 'description', type: 'simpleBlockContent', title: 'Description' },
              { name: 'buttonText', type: 'string', title: 'Button Text' },
              { name: 'buttonLink', type: 'string', title: 'Button Link' },
            ]
        }),

        // Testimonials Section
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
