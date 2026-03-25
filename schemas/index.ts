import { type SchemaTypeDefinition } from 'sanity'

// Objects
import faq from './objects/faq'
import feature from './objects/feature'
import testimonial from './objects/testimonial'
import processStep from './objects/processStep'
import stat from './objects/stat'
import seo from './objects/seo'
import cta from './objects/cta'
import finalCtaSection from './objects/finalCtaSection'

// Documents
import post from './post'
import service from './service'
import homePage from './homePage'
import aboutPage from './aboutPage'
import contactSubmission from './contactSubmission'
import contactPage from './contactPage'
import privacyPolicy from './privacyPolicy'
import teamMember from './teamMember'

import blogPage from './blogPage'
import settings from './settings'
import newsletterSubscription from './newsletterSubscription'

// New Singleton Pages
import aiImplementationPage from './aiImplementationPage'
import erpTransformationPage from './erpTransformationPage'
import dataAnalyticsPage from './dataAnalyticsPage'
import managedDeliveryPage from './managedDeliveryPage'
import sustainabilityPage from './sustainabilityPage'
import termsOfUsage from './termsOfUsage'
import useCasesPage from './useCasesPage'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        // Objects
        faq,
        feature,
        testimonial,
        processStep,
        stat,
        seo,
        cta,
        finalCtaSection,

        // Documents
        settings,
        homePage,
        aboutPage,
        service,
        blogPage,
        post,
        contactPage,
        privacyPolicy,
        teamMember,

        contactSubmission,
        newsletterSubscription,

        // Specific Service Singletons
        aiImplementationPage,
        erpTransformationPage,
        dataAnalyticsPage,
        managedDeliveryPage,
        sustainabilityPage,
        
        // Other Pages
        termsOfUsage,
        useCasesPage,
    ],
}
