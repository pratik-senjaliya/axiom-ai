import type { Metadata } from 'next'
import { Studio } from './Studio'

export const metadata: Metadata = {
    title: 'Sanity Studio',
    description: 'Content Management System',
}

export default function StudioPage() {
    return <Studio />
}
