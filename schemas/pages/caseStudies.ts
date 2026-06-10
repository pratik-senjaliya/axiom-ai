import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'caseStudies',
  title: 'Case Studies',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionSubtitle',
      title: 'Section Subtitle',
      type: 'string',
      initialValue: 'Case Studies',
    }),
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Proven Impact in Production',
    }),
    defineField({
      name: 'items',
      title: 'Case Studies',
      type: 'array',
      of: [{ type: 'caseStudySpotlight' }],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Case Studies' }
    },
  },
})
