import { defineType, defineField } from 'sanity'
import { INDUSTRY_ICON_OPTIONS } from '../../lib/industry-icons'

const titledDescription = [
  { name: 'title', type: 'string', title: 'Title' },
  { name: 'description', type: 'simpleBlockContent', title: 'Description' },
] as const

/** Button shown under a section; empty text/link fall back to "Contact us" → /contact */
const sectionCta = (name: string, title: string, group: string) =>
  defineField({
    name,
    title,
    type: 'object',
    group,
    options: { collapsible: true, collapsed: false },
    fields: [
      { name: 'text', type: 'string', title: 'Button Text', description: 'Defaults to "Contact us".' },
      { name: 'link', type: 'string', title: 'Button Link', description: 'e.g. /contact, #services or a full URL. Defaults to /contact.' },
      { name: 'hidden', type: 'boolean', title: 'Hide this button', initialValue: false },
    ],
  })

export const industryGroups = [
  { name: 'hero', title: 'Hero Section' },
  { name: 'challenges', title: 'Finance Industry Challenges' },
  { name: 'solutions', title: 'Finance Transformation Solutions' },
  { name: 'clients', title: 'Clients We Serve' },
  { name: 'outcomes', title: 'How We Drive Success / Outcomes' },
  { name: 'successStories', title: 'Success Stories' },
  { name: 'process', title: 'Process & Delivery' },
  { name: 'whyUs', title: 'Why Choose SyncOrigins' },
  { name: 'faqs', title: 'FAQs & CTA' },
  { name: 'seo', title: 'SEO' },
]

export const industryFields = [
  defineField({
    name: 'hero',
    title: 'Hero Header',
    type: 'hero',
    group: 'hero',
    initialValue: {
      badge: 'Finance Transformation',
      title: 'Transform Finance Through AI, Data &',
      titleHighlight: 'Intelligent Enterprise Systems',
      primaryCta: { text: 'Talk to Our Finance Experts', link: '/contact', variant: 'primary' },
      secondaryCta: { text: 'Explore Finance Solutions', link: '#solutions', variant: 'secondary' },
    },
  }),
  defineField({
    name: 'heroMetrics',
    title: 'Hero Metrics Bar',
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
    name: 'challengesHeadline',
    title: 'Challenges Headline',
    type: 'string',
    group: 'challenges',
    initialValue: 'Finance Industry Challenges',
  }),
  defineField({
    name: 'challengesDescription',
    title: 'Section Subline',
    type: 'simpleBlockContent',
    group: 'challenges',
    description: 'Shown under the section headline.',
  }),
  defineField({
    name: 'whyUsImage',
    title: 'Feature Card Image',
    type: 'image',
    group: 'whyUs',
    description: 'Background image for the left-hand card. Leave empty to use the default gradient.',
    options: { hotspot: true },
    fields: [{ name: 'alt', type: 'string', title: 'Alternative Text' }],
  }),
  defineField({
    name: 'whyUsImageLabel',
    title: 'Feature Card Label',
    type: 'string',
    group: 'whyUs',
    description: 'Small uppercase label on the card (e.g. "Finance expertise").',
  }),
  defineField({
    name: 'whyUsImageTitle',
    title: 'Feature Card Title',
    type: 'string',
    group: 'whyUs',
  }),
  defineField({
    name: 'whyUsListTitle',
    title: 'Benefits List Heading',
    type: 'string',
    group: 'whyUs',
    description: 'Heading above the benefits list (e.g. "Benefits of partnering with SyncOrigins for Finance").',
  }),
  defineField({
    name: 'challenges',
    title: 'Challenge Points',
    type: 'array',
    group: 'challenges',
    of: [{ type: 'object', fields: [...titledDescription] }],
    initialValue: [
      { title: 'Legacy finance systems' },
      { title: 'Fragmented financial data' },
      { title: 'Manual and inefficient processes' },
      { title: 'Delayed financial insights' },
      { title: 'Increasing compliance requirements' },
      { title: 'Difficulty scaling AI initiatives' },
    ],
  }),

  defineField({
    name: 'solutionsHeadline',
    title: 'Solutions Headline',
    type: 'string',
    group: 'solutions',
    initialValue: 'Our Finance Transformation Solutions',
  }),
  defineField({
    name: 'solutionsDescription',
    title: 'Section Subline',
    type: 'simpleBlockContent',
    group: 'solutions',
    description: 'Shown under the section headline.',
  }),
  defineField({
    name: 'solutions',
    title: 'Solutions',
    type: 'array',
    group: 'solutions',
    of: [{ type: 'object', fields: [...titledDescription] }],
    initialValue: [
      { title: 'Finance Process Transformation' },
      { title: 'AI-Powered Finance Operations' },
      { title: 'Financial Data & Analytics' },
      { title: 'ERP Modernisation & Integration' },
      { title: 'Intelligent Automation' },
      { title: 'Risk, Compliance & Reporting' },
    ],
  }),
  sectionCta('solutionsCta', 'Button Under Solutions', 'solutions'),

  defineField({
    name: 'clientsHeadline',
    title: 'Clients Headline',
    type: 'string',
    group: 'clients',
    initialValue: 'Clients We Serve',
  }),
  defineField({
    name: 'clientsDescription',
    title: 'Section Subline',
    type: 'simpleBlockContent',
    group: 'clients',
    description: 'Shown under the section headline.',
  }),
  defineField({
    name: 'clients',
    title: 'Client Segments',
    type: 'array',
    group: 'clients',
    of: [{
      type: 'object',
      fields: [
        ...titledDescription,
        {
          name: 'icon',
          type: 'string',
          title: 'Icon',
          description: 'Pick an icon. Leave empty to choose one automatically from the title.',
          options: { list: [...INDUSTRY_ICON_OPTIONS] },
        },
        {
          name: 'iconImage',
          type: 'image',
          title: 'Custom Icon (optional)',
          description: 'Upload your own icon (SVG or PNG, square). Overrides the icon picked above.',
          options: { accept: 'image/svg+xml,image/png,image/webp' },
        },
      ],
      preview: { select: { title: 'title', subtitle: 'icon', media: 'iconImage' } },
    }],
    initialValue: [
      { title: 'Enterprise CFOs & Controllers' },
      { title: 'Banks & Financial Services' },
      { title: 'Fintech & Digital Finance' },
      { title: 'Shared Service Centers' },
    ],
  }),

  defineField({
    name: 'outcomesHeadline',
    title: 'Outcomes Headline',
    type: 'string',
    group: 'outcomes',
    initialValue: 'How We Drive the Success of Your Finance Transformation',
  }),
  defineField({
    name: 'outcomesDescription',
    title: 'Section Subline',
    type: 'simpleBlockContent',
    group: 'outcomes',
    description: 'Shown under the section headline.',
  }),
  defineField({
    name: 'outcomes',
    title: 'Outcomes',
    type: 'array',
    group: 'outcomes',
    of: [{ type: 'object', fields: [...titledDescription] }],
    initialValue: [
      { title: 'Faster financial decision-making' },
      { title: 'Improved data visibility' },
      { title: 'Reduced manual effort' },
      { title: 'More accurate forecasting' },
      { title: 'Greater operational efficiency' },
      { title: 'Scalable, AI-ready finance operations' },
    ],
  }),
  sectionCta('outcomesCta', 'Button Under Outcomes', 'outcomes'),

  defineField({
    name: 'successStoriesHeadline',
    title: 'Success Stories Headline',
    type: 'string',
    group: 'successStories',
    initialValue: 'Finance Transformation Success Stories',
  }),
  defineField({
    name: 'successStories',
    title: 'Success Stories',
    type: 'array',
    group: 'successStories',
    of: [{
      type: 'object',
      fields: [
        { name: 'title', type: 'string', title: 'Story Title' },
        { name: 'clientChallenge', type: 'simpleBlockContent', title: 'Client Challenge' },
        { name: 'solutionDelivered', type: 'simpleBlockContent', title: 'Solution Delivered' },
        { name: 'keyTransformation', type: 'simpleBlockContent', title: 'Key Transformation' },
        { name: 'businessOutcomes', type: 'simpleBlockContent', title: 'Business Outcomes' },
        { name: 'ctaText', type: 'string', title: 'CTA Text', initialValue: 'Read Case Study' },
        { name: 'ctaLink', type: 'string', title: 'CTA Link', description: 'e.g. /case-studies/your-slug' },
      ],
      preview: {
        select: { title: 'title' },
        prepare({ title }) {
          return { title: title || 'Success Story' }
        },
      },
    }],
  }),

  defineField({
    name: 'processHeadline',
    title: 'Process Headline',
    type: 'string',
    group: 'process',
    initialValue: 'Finance Transformation Process & Delivery',
  }),
  defineField({
    name: 'processDescription',
    title: 'Section Subline',
    type: 'simpleBlockContent',
    group: 'process',
    description: 'Shown under the section headline.',
  }),
  defineField({
    name: 'process',
    title: 'Process Steps',
    type: 'array',
    group: 'process',
    of: [{ type: 'processStep' }],
    initialValue: [
      { step: '01', title: 'Discover & Assess' },
      { step: '02', title: 'Define Transformation Priorities' },
      { step: '03', title: 'Design the Solution' },
      { step: '04', title: 'Implement & Integrate' },
      { step: '05', title: 'Validate & Optimise' },
      { step: '06', title: 'Scale & Continuously Improve' },
    ],
  }),

  defineField({
    name: 'whyUsHeadline',
    title: 'Why Us Headline',
    type: 'string',
    group: 'whyUs',
    initialValue: 'Why Choose SyncOrigins for Finance',
  }),
  defineField({
    name: 'whyUsDescription',
    title: 'Section Subline',
    type: 'simpleBlockContent',
    group: 'whyUs',
    description: 'Shown under the section headline.',
  }),
  defineField({
    name: 'whyUs',
    title: 'Why Choose Points',
    type: 'array',
    group: 'whyUs',
    of: [{ type: 'object', fields: [...titledDescription] }],
    initialValue: [
      { title: 'AI, Data & ERP expertise' },
      { title: 'Finance-focused transformation' },
      { title: 'Business-first approach' },
      { title: 'Production-focused execution' },
      { title: 'Scalable enterprise solutions' },
    ],
  }),

  defineField({
    name: 'faqs',
    title: 'Frequently Asked Questions',
    type: 'array',
    of: [{ type: 'faq' }],
    group: 'faqs',
  }),
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
    ],
    initialValue: {
      title: 'Ready to Transform Your Finance Operations?',
      buttonText: 'Talk to Our Finance Experts',
      buttonLink: '/contact',
    },
  }),

  defineField({ name: 'seo', title: 'SEO', type: 'seo', group: 'seo' }),
]

export default defineType({
  name: 'financePage',
  title: 'Finance (Industry)',
  type: 'document',
  groups: industryGroups,
  fields: industryFields,
})
