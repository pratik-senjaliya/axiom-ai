import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero' },
    { name: 'about', title: 'About the Client' },
    { name: 'challenge', title: 'The Challenges' },
    { name: 'approach', title: 'Solutions / Approach' },
    { name: 'tech', title: 'Technologies' },
    { name: 'outcomes', title: 'Outcomes / Result' },
    { name: 'testimonials', title: 'Client Feedback' },
    { name: 'cta', title: 'Bottom CTA' },
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
          { title: 'AI Implementation', value: 'ai' },
          { title: 'ERP Transformation', value: 'erp' },
          { title: 'Data & Analytics', value: 'data' },
          { title: 'Managed Delivery', value: 'managed' },
          { title: 'Sustainability', value: 'sustainability' },
        ],
      },
    }),
    defineField({
      name: 'relatedIndustry',
      title: 'Related Industry',
      type: 'string',
      group: 'hero',
      options: {
        list: [
          { title: 'Finance', value: 'finance' },
          { title: 'Retail', value: 'retail' },
          { title: 'Manufacturing', value: 'manufacturing' },
          { title: 'Housing', value: 'housing' },
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
      name: 'heroStats',
      title: 'Hero Stats (right card)',
      type: 'array',
      group: 'hero',
      of: [{
        type: 'object',
        fields: [
          { name: 'value', type: 'string', title: 'Value' },
          { name: 'label', type: 'string', title: 'Label' },
        ],
      }],
    }),
    defineField({
      name: 'heroCta',
      title: 'Hero CTA',
      type: 'object',
      group: 'hero',
      description: 'Button shown under the hero summary. Defaults to Contact if left empty.',
      fields: [
        {
          name: 'buttonText',
          type: 'string',
          title: 'Button Text',
          initialValue: 'Talk to Our Experts',
        },
        {
          name: 'buttonHref',
          type: 'string',
          title: 'Button Link',
          description: 'e.g. /contact',
          initialValue: '/contact',
        },
      ],
    }),

    defineField({
      name: 'aboutClientHeadline',
      title: 'About the Client Headline',
      type: 'string',
      group: 'about',
      initialValue: 'About the Client',
      description: 'Shown on the right, beside the About Client image.',
    }),
    defineField({
      name: 'aboutClientImage',
      title: 'About Client Image',
      type: 'image',
      group: 'about',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
      description: 'Shown beside the About the Client copy. Falls back to Main Image if empty.',
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
      initialValue: 'The Challenges',
    }),
    defineField({
      name: 'challengeDescription',
      title: 'Section Subline',
      type: 'text',
      rows: 3,
      group: 'challenge',
      description: 'Optional text shown under the section headline.',
    }),
    defineField({
      name: 'challengeItems',
      title: 'Challenge Cards (2x2 grid)',
      type: 'array',
      group: 'challenge',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'challenge',
      title: 'The Challenge (legacy long-form)',
      type: 'simpleBlockContent',
      group: 'challenge',
      hidden: true,
    }),

    defineField({
      name: 'approachHeadline',
      title: 'Approach Headline',
      type: 'string',
      group: 'approach',
      initialValue: 'Our Solutions / Approach',
    }),
    defineField({
      name: 'approachDescription',
      title: 'Section Subline',
      type: 'text',
      rows: 3,
      group: 'approach',
      description: 'Optional text shown under the section headline.',
    }),
    defineField({
      name: 'approachItems',
      title: 'Solution Cards (dark numbered grid)',
      type: 'array',
      group: 'approach',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'approach',
      title: 'Approach (legacy long-form)',
      type: 'simpleBlockContent',
      group: 'approach',
      hidden: true,
    }),

    defineField({
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      group: 'tech',
      of: [{ type: 'string' }],
    }),

    defineField({
      name: 'outcomesHeadline',
      title: 'Outcomes Headline',
      type: 'string',
      group: 'outcomes',
      initialValue: 'Outcomes / Result',
    }),
    defineField({
      name: 'outcomesDescription',
      title: 'Section Subline',
      type: 'text',
      rows: 3,
      group: 'outcomes',
      description: 'Optional text shown under the section headline.',
    }),
    defineField({
      name: 'outcomeItems',
      title: 'Outcome Cards',
      type: 'array',
      group: 'outcomes',
      description: 'Each card shows a bold headline (e.g. "Under 1.5 hours") with a subline under it.',
      of: [{
        type: 'object',
        fields: [
          { name: 'headline', type: 'string', title: 'Headline', description: 'e.g. Under 1.5 hours' },
          { name: 'subline', type: 'text', rows: 2, title: 'Subline', description: 'e.g. Target daily reporting effort per plant, down from 4 hours' },
        ],
        preview: { select: { title: 'headline', subtitle: 'subline' } },
      }],
    }),
    defineField({
      name: 'outcomeCards',
      title: 'Outcome Cards (legacy, single line)',
      type: 'array',
      group: 'outcomes',
      description: 'Only used when "Outcome Cards" above is empty. Text before the first ":" becomes the headline.',
      of: [{ type: 'string' }],
      hidden: ({ document }) => !(document?.outcomeCards as unknown[] | undefined)?.length,
    }),
    defineField({
      name: 'outcomes',
      title: 'Outcomes (legacy long-form)',
      type: 'simpleBlockContent',
      group: 'outcomes',
      hidden: true,
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
      hidden: true,
    }),

    defineField({
      name: 'testimonialsHeadline',
      title: 'Feedback Headline',
      type: 'string',
      group: 'testimonials',
      initialValue: 'Client Feedback',
    }),
    defineField({
      name: 'testimonials',
      title: 'Client Feedback',
      type: 'array',
      of: [{ type: 'testimonial' }],
      group: 'testimonials',
    }),

    defineField({
      name: 'finalCta',
      title: 'Bottom CTA',
      type: 'object',
      group: 'cta',
      description: 'Call-to-action band at the bottom of the page. Empty fields use the default text.',
      fields: [
        { name: 'badgeText', type: 'string', title: 'Badge Text', description: 'Defaults to "Case Study".', initialValue: 'Case Study' },
        { name: 'title', type: 'string', title: 'Title', description: 'Defaults to "Ready to Write Your Transformation Story?".', initialValue: 'Ready to Write Your Transformation Story?' },
        { name: 'description', type: 'simpleBlockContent', title: 'Description', description: 'Defaults to "Partner with SyncOrigins to turn operational challenges into measurable business outcomes."' },
        { name: 'buttonText', type: 'string', title: 'Button Text', description: 'Defaults to "Talk to Our Experts".', initialValue: 'Talk to Our Experts' },
        { name: 'buttonLink', type: 'string', title: 'Button Link', description: 'Defaults to /contact.', initialValue: '/contact' },
      ],
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
