import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@sanity/client'
import { apiVersion, dataset, projectId } from '@/lib/sanity/env'

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const { name, email, phone, company, service, message, turnstileToken } = body

        // 1. Verify Cloudflare Turnstile Token
        if (!turnstileToken) {
            return NextResponse.json(
                { error: 'Security verification token is missing.' },
                { status: 400 }
            )
        }

        const verifyResponse = await fetch(
            'https://challenges.cloudflare.com/turnstile/v0/siteverify',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `secret=0x4AAAAAAC2Ad1U-f_mhS8x26kkW22XfTVE&response=${turnstileToken}`,
            }
        )

        const verification = await verifyResponse.json()

        if (!verification.success) {
            return NextResponse.json(
                { error: 'Security verification failed. Please try again.' },
                { status: 403 }
            )
        }

        // Basic server-side validation
        if (!name || !email || !message || !service) {
            return NextResponse.json(
                { error: 'Name, Email, Service, and Message are required fields.' },
                { status: 400 }
            )
        }

        const token = process.env.NEXT_PUBLIC_SANITY_TOKEN

        if (!token) {
            console.error('Missing SANITY_API_TOKEN')
            return NextResponse.json(
                { error: 'Internal Server Error: Missing API configuration' },
                { status: 500 }
            )
        }

        const client = createClient({
            projectId,
            dataset,
            apiVersion,
            token, // Write token is required
            useCdn: false,
        })

        const doc = {
            _type: 'contactSubmission',
            name,
            email,
            phone,
            company,
            service,
            message,
            status: 'new',
            submittedAt: new Date().toISOString(),
        }

        await client.create(doc)

        return NextResponse.json({ success: true, message: 'Message sent successfully!' })

    } catch (error) {
        console.error('Error submitting contact form:', error)
        return NextResponse.json(
            { error: 'Failed to submit message. Please try again later.' },
            { status: 500 }
        )
    }
}
