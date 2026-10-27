import { NextResponse } from 'next/server';
import { getNavigationServices, getNavigationIndustries, getNavigationHirePages, getSettings } from '@/lib/sanity/queries';
import { getAllIndustries } from '@/lib/industries';
import { getAllHireStaffPositions as getAllHireStaff } from '@/lib/hire-staff';

export const revalidate = 0; // Disable caching to always get fresh data

export async function GET() {
    try {
        const [services, industryPages, hirePages, industries, hireStaff, settings] = await Promise.all([
            getNavigationServices(),
            getNavigationIndustries(),
            getNavigationHirePages(),
            getAllIndustries(),
            getAllHireStaff(),
            getSettings(),
        ]);

        return NextResponse.json({
            headerContactLink: settings?.headerContactLink || null,
            headerCta: settings?.headerCta || null,
            services: services.map((s: any) => ({
                title: s.title,
                slug: s.slug,
                href: `/${s.slug}`,
                navTags: s.navTags?.length ? s.navTags : s.tags,
            })),
            industryPages: industryPages.map((i: any) => ({
                title: i.title,
                slug: i.slug,
                href: `/${i.slug}`,
                navTags: i.navTags,
            })),
            hirePages: hirePages.map((h: any) => ({
                title: h.title,
                slug: h.slug,
                href: `/${h.slug}`,
                navTags: h.navTags,
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
