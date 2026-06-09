import { ThListIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'htmlTable',
  title: 'Table',
  type: 'object',
  icon: ThListIcon,
  fields: [
    defineField({
      name: 'html',
      title: 'Table HTML',
      type: 'text',
      rows: 12,
      description: 'Populated automatically when you paste a table into blog content.',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Table',
        subtitle: 'Pasted into blog content',
      }
    },
  },
})
