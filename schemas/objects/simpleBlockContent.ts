import { defineType, defineArrayMember } from 'sanity'
import { Link, ExternalLink } from 'lucide-react'

export default defineType({
  name: 'simpleBlockContent',
  title: 'Simple Block Content',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Underline', value: 'underline' },
        ],
        annotations: [
          {
            title: 'External Link',
            name: 'link',
            type: 'object',
            icon: ExternalLink,
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: (Rule) => Rule.uri({
                  scheme: ['http', 'https', 'mailto', 'tel']
                })
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                type: 'boolean',
                initialValue: true
              }
            ]
          },
          {
            title: 'Internal Link',
            name: 'internalLink',
            type: 'object',
            icon: Link,
            fields: [
              {
                title: 'Reference',
                name: 'reference',
                type: 'reference',
                to: [
                  { type: 'service' },
                  { type: 'post' },
                  { type: 'homePage' },
                  { type: 'aboutPage' },
                  { type: 'useCasesPage' },
                  { type: 'aiImplementationPage' },
                  { type: 'erpTransformationPage' },
                  { type: 'dataAnalyticsPage' },
                  { type: 'managedDeliveryPage' },
                  { type: 'sustainabilityPage' }
                ],
                validation: (Rule) => Rule.required()
              }
            ]
          }
        ]
      }
    })
  ]
})
