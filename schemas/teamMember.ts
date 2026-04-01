import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'teamMember',
    title: 'Team Member',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Full Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'role',
            title: 'Role / Job Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'bio',
            title: 'Biography',
            type: 'simpleBlockContent',
            validation: (Rule) => Rule.required(),
            description: 'Professional biography and background',
        }),
        defineField({
            name: 'image',
            title: 'Profile Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                    description: 'Important for SEO and accessibility',
                    validation: (Rule) => Rule.required(),
                }
            ],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'experience',
            title: 'Years of Experience',
            type: 'string',
            description: 'e.g., "10+ years", "5 years"',
        }),
        defineField({
            name: 'expertise',
            title: 'Areas of Expertise',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Key areas of specialization',
        }),
        defineField({
            name: 'certifications',
            title: 'Certifications',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Professional certifications and qualifications',
        }),
        defineField({
            name: 'socialLinks',
            title: 'Social Links',
            type: 'object',
            fields: [
                {
                    name: 'email',
                    title: 'Email',
                    type: 'string',
                },
                {
                    name: 'linkedin',
                    title: 'LinkedIn URL',
                    type: 'url',
                },
                {
                    name: 'twitter',
                    title: 'Twitter URL',
                    type: 'url',
                },
            ],
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Lower numbers appear first on the team page',
            validation: (Rule) => Rule.required().min(0),
            initialValue: 0,
        }),
        defineField({
            name: 'featured',
            title: 'Featured Team Member',
            type: 'boolean',
            description: 'Highlight this team member on the team page',
            initialValue: false,
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'role',
            media: 'image',
        },
    },
    orderings: [
        {
            title: 'Display Order',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }],
        },
        {
            title: 'Name',
            name: 'nameAsc',
            by: [{ field: 'name', direction: 'asc' }],
        },
    ],
})
