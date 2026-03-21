import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@sanity/client'
import { apiVersion, dataset, projectId } from '@/lib/sanity/env'

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const { name, email, phone, company, service, message } = body

        // Basic server-side validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, Email, and Message are required fields.' },
                { status: 400 }
            )
        }

        const token = process.env.SANITY_API_TOKEN

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
