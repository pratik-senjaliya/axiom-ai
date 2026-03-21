import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'newsletterSubscription',
    title: 'Newsletter Subscription',
    type: 'document',
    fields: [
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (Rule) => Rule.required().email(),
        }),
        defineField({
            name: 'subscribedAt',
            title: 'Subscribed At',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),
        defineField({
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Active', value: 'active' },
                    { title: 'Unsubscribed', value: 'unsubscribed' },
                ],
            },
            initialValue: 'active',
        }),
    ],
    preview: {
        select: {
            email: 'email',
            subscribedAt: 'subscribedAt',
            status: 'status',
        },
        prepare({ email, subscribedAt, status }) {
            return {
                title: email || 'No email',
                subtitle: `${status || 'active'} - ${subscribedAt ? new Date(subscribedAt).toLocaleDateString() : 'unknown date'}`,
            }
        },
    },
})
