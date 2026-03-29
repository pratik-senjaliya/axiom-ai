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

export const structure = (S: StructureBuilder) =>
    S.list()
        .title('Website Content')
        .items([
            // Settings
            singletonListItem(S, 'settings', 'Site Settings', 'settings'),
            S.divider(),

            // Page Singletons
            singletonListItem(S, 'homePage', 'Home Page'),
            singletonListItem(S, 'aboutPage', 'About Page'),
            singletonListItem(S, 'useCasesPage', 'Use Cases Page'),
            singletonListItem(S, 'servicesPage', 'Services Hub Page'),
            singletonListItem(S, 'blogPage', 'Blog Listing Page'),
            singletonListItem(S, 'contactPage', 'Contact Page', 'contactPage'), // Likely doesn't use Singleton suffix in this project if not in seed
            
            S.divider(),
            
            // Specialized Service Pages
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

            // Collections
            S.documentTypeListItem('service').title('Individual Services'),
            S.documentTypeListItem('post').title('Blog Posts'),
            S.documentTypeListItem('teamMember').title('Team Members'),
            
            S.divider(),

            // Policy Pages
            singletonListItem(S, 'privacyPolicy', 'Privacy Policy'),
            singletonListItem(S, 'termsOfUsage', 'Terms of Usage'),

            S.divider(),
            
            // Submissions
            S.documentTypeListItem('contactSubmission').title('Contact Form Leads'),
        ])
