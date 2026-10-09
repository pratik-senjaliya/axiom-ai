import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero' },
    { name: 'about', title: 'About the Client' },
    { name: 'challenge', title: 'The Challenge' },
    { name: 'approach', title: 'Solutions / Approach' },
    { name: 'outcomes', title: 'Outcomes / Result' },
    { name: 'testimonials', title: 'Testimonials' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'hero',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'hero',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Short Summary',
      type: 'text',
      rows: 3,
      group: 'hero',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      group: 'hero',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      group: 'hero',
    }),
    defineField({
      name: 'relatedService',
      title: 'Related Service Area',
      type: 'string',
      group: 'hero',
      options: {
        list: [
          { title: 'Finance', value: 'finance' },
          { title: 'AI Implementation', value: 'ai' },
          { title: 'ERP Transformation', value: 'erp' },
          { title: 'Data & Analytics', value: 'data' },
          { title: 'Managed Delivery', value: 'managed' },
          { title: 'Sustainability', value: 'sustainability' },
        ],
      },
    }),
    defineField({
      name: 'heroBadge',
      title: 'Hero Badge',
      type: 'string',
      group: 'hero',
      initialValue: 'Case Study',
    }),

    defineField({
      name: 'aboutClientHeadline',
      title: 'About the Client Headline',
      type: 'string',
      group: 'about',
      initialValue: 'About the Client',
    }),
    defineField({
      name: 'aboutClient',
      title: 'About the Client',
      type: 'simpleBlockContent',
      group: 'about',
    }),

    defineField({
      name: 'challengeHeadline',
      title: 'Challenge Headline',
      type: 'string',
      group: 'challenge',
      initialValue: 'The Challenge',
    }),
    defineField({
      name: 'challenge',
      title: 'The Challenge',
      type: 'simpleBlockContent',
      group: 'challenge',
    }),

    defineField({
      name: 'approachHeadline',
      title: 'Approach Headline',
      type: 'string',
      group: 'approach',
      initialValue: 'Our Solutions / Approach',
    }),
    defineField({
      name: 'approach',
      title: 'Our Solutions / Approach',
      type: 'simpleBlockContent',
      group: 'approach',
    }),

    defineField({
      name: 'outcomesHeadline',
      title: 'Outcomes Headline',
      type: 'string',
      group: 'outcomes',
      initialValue: 'Outcomes / Result',
    }),
    defineField({
      name: 'outcomes',
      title: 'Outcomes / Result',
      type: 'simpleBlockContent',
      group: 'outcomes',
    }),
    defineField({
      name: 'outcomeMetrics',
      title: 'Outcome Metrics (optional)',
      type: 'array',
      group: 'outcomes',
      of: [{
        type: 'object',
        fields: [
          { name: 'value', type: 'string', title: 'Value' },
          { name: 'label', type: 'string', title: 'Label' },
        ],
      }],
    }),

    defineField({
      name: 'testimonialsHeadline',
      title: 'Testimonials Headline',
      type: 'string',
      group: 'testimonials',
      initialValue: 'Testimonials',
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{ type: 'testimonial' }],
      group: 'testimonials',
    }),

    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      subtitle: 'slug.current',
    },
    prepare({ title, media, subtitle }) {
      return {
        title: title || 'Untitled Case Study',
        subtitle: subtitle ? `/case-studies/${subtitle}` : 'No slug',
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Published Date, New',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
})
