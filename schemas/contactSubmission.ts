import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'contactSubmission',
    title: 'Contact Submissions',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Full Name',
            type: 'string',
        }),
        defineField({
            name: 'email',
            title: 'Email Address',
            type: 'string',
        }),
        defineField({
            name: 'phone',
            title: 'Phone Number',
            type: 'string',
        }),
        defineField({
            name: 'company',
            title: 'Company Name',
            type: 'string',
        }),
        defineField({
            name: 'message',
            title: 'Message',
            type: 'text',
        }),
        defineField({
            name: 'service',
            title: 'Service of Interest',
            type: 'string',
            options: {
                list: [
                    { title: 'GenAI Implementation', value: 'genai-implementation' },
                    { title: 'ERP Transformation', value: 'erp-transformation' },
                    { title: 'Data Analytics', value: 'data-analytics' },
                    { title: 'Managed Delivery', value: 'managed-delivery' },
                    { title: 'Sustainability Solutions', value: 'sustainability' },
                    { title: 'Other', value: 'other' },
                ],
            },
        }),
        defineField({
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {
                list: [
                    { title: 'New', value: 'new' },
                    { title: 'Read', value: 'read' },
                    { title: 'Contacted', value: 'contacted' },
                    { title: 'Archived', value: 'archived' },
                ],
                layout: 'radio',
            },
            initialValue: 'new',
        }),
        defineField({
            name: 'submittedAt',
            title: 'Submitted At',
            type: 'datetime',
            initialValue: (() => new Date().toISOString()),
            readOnly: true,
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'email',
            status: 'status',
        },
        prepare({ title, subtitle, status }) {
            return {
                title: title || 'Anonymous',
                subtitle: `${subtitle || 'No email'} (${status?.toUpperCase() || 'NEW'})`,
            }
        },
    },
})
