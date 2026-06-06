import type { Template } from 'sanity'

const baseService = {
    showInNavigation: true,
    pitfallsHeadline: 'Why Initiatives Stall',
    layersHeadline: 'Our Capability Layers',
    useCasesHeadline: 'Industry Use Cases',
    roadmapHeadline: 'From Pilot to Platform',
    modelsHeadline: 'Engagement Models',
    finalCta: {
        badgeText: 'GET STARTED',
        title: 'Ready to move forward?',
        buttonText: 'Book a Call',
        buttonLink: '/contact',
    },
    testimonialsTitle: 'Powered by Innovation, Proven by Clients',
}

export const serviceTemplates: Template[] = [
    {
        id: 'service-blank',
        title: 'Blank Service Page',
        schemaType: 'service',
        value: baseService,
    },
    {
        id: 'service-from-ai',
        title: 'Based on AI Implementation',
        schemaType: 'service',
        value: {
            ...baseService,
            pitfallsHeadline: 'Why AI Initiatives Stall',
            layersHeadline: 'Our Enterprise AI Stack (The 4 Layers)',
            useCasesHeadline: 'Industry Use Cases with POC Model',
            roadmapHeadline: 'From Pilot to Platform (The 5-Step Path)',
            modelsHeadline: 'Deployment Models',
            navTags: ['AI Strategy', 'GenAI', 'Agentic Systems', 'AI Automation'],
        },
    },
    {
        id: 'service-from-managed',
        title: 'Based on Managed Delivery',
        schemaType: 'service',
        value: {
            ...baseService,
            pitfallsHeadline: 'Why Modern Software Projects Fail (and How to Avoid it)',
            layersHeadline: 'Integrated Delivery Layers',
            modelsHeadline: 'Managed Delivery Service Models',
            roadmapHeadline: 'The SyncOrigins Advantage',
            navTags: ['ERP Consultants', 'BI Developers', 'AI Engineers', 'Offshore Teams'],
        },
    },
    {
        id: 'service-from-erp',
        title: 'Based on ERP Transformation',
        schemaType: 'service',
        value: {
            ...baseService,
            pitfallsHeadline: 'Why ERP Transformations Fail',
            layersHeadline: 'ERP Transformation Capabilities',
            modelsHeadline: 'Engagement Models',
            navTags: ['Dynamics 365', 'ERP Migration', 'Process Advisory'],
        },
    },
    {
        id: 'service-from-data',
        title: 'Based on Data & Analytics',
        schemaType: 'service',
        value: {
            ...baseService,
            pitfallsHeadline: 'Why Data Initiatives Stall',
            layersHeadline: 'Data & Analytics Capabilities',
            modelsHeadline: 'Engagement Models',
            navTags: ['Power BI', 'Data Warehousing', 'Predictive Analytics'],
        },
    },
    {
        id: 'service-from-sustainability',
        title: 'Based on Sustainability',
        schemaType: 'service',
        value: {
            ...baseService,
            pitfallsHeadline: 'Why Sustainability Programs Stall',
            layersHeadline: 'Sustainability Solutions',
            modelsHeadline: 'Engagement Models',
            navTags: ['ESG Reporting', 'Carbon Dashboard', 'Green Supply Chain'],
        },
    },
]
