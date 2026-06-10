import { defineField, defineType } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'

export default defineType({
  name: 'caseStudySpotlight',
  title: 'Case Study Spotlight',
  type: 'object',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subline',
      title: 'Subline',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
      initialValue: 'Read case study',
    }),
    defineField({
      name: 'ctaLink',
      title: 'CTA Link',
      type: 'string',
      description: 'Usually a blog post URL, e.g. /insights/your-article-slug',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      description:
        'Recommended: 1200 × 900 px (4:3 landscape). Minimum 800 × 600 px. The image fills the right side of the card on desktop and a full-width banner on mobile — use hotspot to keep the subject centered when cropped.',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          description: 'Describe the image for accessibility and SEO.',
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'headline',
      subtitle: 'subline',
      media: 'image',
    },
  },
})
