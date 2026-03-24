import { NextResponse } from 'next/server';
import { getAllServices } from '@/lib/sanity/queries';
import { getAllIndustries } from '@/lib/industries';
import { getAllHireStaffPositions as getAllHireStaff } from '@/lib/hire-staff';

export const revalidate = 0; // Disable caching to always get fresh data

export async function GET() {
    try {
        const [services, industries, hireStaff] = await Promise.all([
            getAllServices(),
            getAllIndustries(),
            getAllHireStaff(),
        ]);

        return NextResponse.json({
            services: services.map((s: any) => ({
                title: s.title,
                slug: s.slug,
                description: s.description,
                icon: s.icon,
            })),
            industries: industries.map((i: any) => ({
                title: i.title,
                slug: i.slug,
                description: i.description,
                icon: i.icon,
            })),
            hireStaff: hireStaff.map((h: any) => ({
                title: h.title,
                slug: h.slug,
                description: h.description,
                icon: h.icon,
            })),
        });
    } catch (error) {
        console.error('Error fetching navigation data:', error);
        return NextResponse.json({ error: 'Failed to fetch navigation data' }, { status: 500 });
    }
}
