import { NextResponse } from 'next/server';
import { createClient } from '@sanity/client';
import { apiVersion, dataset, projectId } from '@/lib/sanity/env';

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        // Validate email
        if (!email || typeof email !== 'string') {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            );
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        const token = process.env.SANITY_API_TOKEN;

        if (!token) {
            console.error('Missing SANITY_API_TOKEN');
            return NextResponse.json(
                { error: 'Internal Server Error: Missing API configuration' },
                { status: 500 }
            );
        }

        const client = createClient({
            projectId,
            dataset,
            apiVersion,
            token, // Write token is required
            useCdn: false,
        });

        // Check if email already exists
        const existingSubscription = await client.fetch(
            `*[_type == "newsletterSubscription" && email == $email][0]`,
            { email }
        );

        if (existingSubscription) {
            // If exists and active, return message
            if (existingSubscription.status === 'active') {
                return NextResponse.json(
                    { message: 'You are already subscribed to our newsletter' },
                    { status: 200 }
                );
            }
            // If unsubscribed, reactivate
            await client
                .patch(existingSubscription._id)
                .set({ status: 'active', subscribedAt: new Date().toISOString() })
                .commit();

            return NextResponse.json(
                { message: 'Successfully resubscribed to newsletter!' },
                { status: 200 }
            );
        }

        // Create new subscription
        const doc = {
            _type: 'newsletterSubscription',
            email,
            subscribedAt: new Date().toISOString(),
            status: 'active',
        };

        await client.create(doc);

        return NextResponse.json(
            { success: true, message: 'Successfully subscribed to newsletter!' },
            { status: 201 }
        );
    } catch (error) {
        console.error('Newsletter subscription error:', error);
        return NextResponse.json(
            { error: 'Failed to process subscription' },
            { status: 500 }
        );
    }
}
