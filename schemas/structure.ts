import { StructureBuilder } from 'sanity/structure'

const singletonListItem = (S: StructureBuilder, type: string, title: string, id?: string) => {
    const docId = id || `${type}Singleton`;
    return S.listItem()
        .title(title)
        .id(`${docId}Node`)
        .child(
            S.document()
                .schemaType(type)
                .documentId(docId)
        );
}

const serviceTemplateItems = (S: StructureBuilder) => [
    S.initialValueTemplateItem('service-blank', {
        title: 'Blank Service Page',
        subtitle: 'Core page layout (empty)',
    }),
    S.initialValueTemplateItem('service-from-ai', {
        title: 'Based on AI Implementation',
        subtitle: 'Same structure as AI Implementation page',
    }),
    S.initialValueTemplateItem('service-from-managed', {
        title: 'Based on Managed Delivery',
        subtitle: 'Same structure as Managed Delivery page',
    }),
    S.initialValueTemplateItem('service-from-erp', {
        title: 'Based on ERP Transformation',
        subtitle: 'Same structure as ERP page',
    }),
    S.initialValueTemplateItem('service-from-data', {
        title: 'Based on Data & Analytics',
        subtitle: 'Same structure as Data & Analytics page',
    }),
    S.initialValueTemplateItem('service-from-sustainability', {
        title: 'Based on Sustainability',
        subtitle: 'Same structure as Sustainability page',
    }),
]

export const structure = (S: StructureBuilder) =>
    S.list()
        .title('Website Content')
        .items([
            singletonListItem(S, 'settings', 'Site Settings', 'settings'),
            S.divider(),

            singletonListItem(S, 'homePage', 'Home Page'),
            singletonListItem(S, 'aboutPage', 'About Page'),
            singletonListItem(S, 'useCasesPage', 'Use Cases Page'),
            singletonListItem(S, 'blogPage', 'Blog Listing Page'),
            singletonListItem(S, 'contactPage', 'Contact Page', 'contactPage'),

            S.divider(),

            S.listItem()
                .title('Service Pages')
                .child(
                    S.list()
                        .title('Specialized Service Pages')
                        .items([
                            singletonListItem(S, 'aiImplementationPage', 'AI Implementation'),
                            singletonListItem(S, 'erpTransformationPage', 'ERP Transformation'),
                            singletonListItem(S, 'dataAnalyticsPage', 'Data & Analytics'),
                            singletonListItem(S, 'managedDeliveryPage', 'Managed Delivery'),
                            singletonListItem(S, 'sustainabilityPage', 'Sustainability'),
                        ])
                ),

            S.divider(),

            // Individual Services — pick a template when clicking "+"
            S.listItem()
                .title('Individual Services')
                .child(
                    S.documentTypeList('service')
                        .title('Individual Services')
                        .filter('_type == "service"')
                        .initialValueTemplates(serviceTemplateItems(S))
                ),

            S.documentTypeListItem('post').title('Blog Posts'),
            S.documentTypeListItem('teamMember').title('Team Members'),

            S.divider(),

            singletonListItem(S, 'privacyPolicy', 'Privacy Policy'),
            singletonListItem(S, 'termsOfUsage', 'Terms of Usage'),

            S.divider(),

            S.documentTypeListItem('contactSubmission').title('Contact Form Leads'),
        ])
