import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'processStep',
    title: 'Process Step',
    type: 'object',
    fields: [
        defineField({
            name: 'step',
            title: 'Step Number',
            type: 'string',
            description: 'Example: 01, Step 1, Phase 1',
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'simpleBlockContent',
        }),
        defineField({
          name: 'icon',
          title: 'Icon Name',
          type: 'string',
          description: 'Lucide icon name (optional)',
        }),
    ],
})
