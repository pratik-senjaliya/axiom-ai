import { defineType, defineField } from 'sanity'

const titledDescription = [
  { name: 'title', type: 'string', title: 'Title' },
  { name: 'description', type: 'simpleBlockContent', title: 'Description' },
] as const

export default defineType({
  name: 'financePage',
  title: 'Finance Page',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero Section' },
    { name: 'challenges', title: 'Finance Industry Challenges' },
    { name: 'solutions', title: 'Finance Transformation Solutions' },
    { name: 'outcomes', title: 'Business Outcomes' },
    { name: 'successStories', title: 'Success Stories' },
    { name: 'process', title: 'Process & Delivery' },
    { name: 'whyUs', title: 'Why Choose SyncOrigins' },
    { name: 'faqs', title: 'FAQs & CTA' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
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
      name: 'challengesHeadline',
      title: 'Challenges Headline',
      type: 'string',
      group: 'challenges',
      initialValue: 'Finance Industry Challenges',
    }),
    defineField({
      name: 'challengesDescription',
      title: 'Description',
      type: 'simpleBlockContent',
      group: 'challenges',
      description: 'Optional text shown under the section headline.',
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
      title: 'Description',
      type: 'simpleBlockContent',
      group: 'solutions',
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

    defineField({
      name: 'outcomesHeadline',
      title: 'Outcomes Headline',
      type: 'string',
      group: 'outcomes',
      initialValue: 'Business Outcomes',
    }),
    defineField({
      name: 'outcomesDescription',
      title: 'Description',
      type: 'simpleBlockContent',
      group: 'outcomes',
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
      title: 'Description',
      type: 'simpleBlockContent',
      group: 'process',
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
      title: 'Description',
      type: 'simpleBlockContent',
      group: 'whyUs',
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
  ],
})
