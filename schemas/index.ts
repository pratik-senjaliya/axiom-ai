import { type SchemaTypeDefinition } from 'sanity'

// Modular Objects
import faq from './objects/faq'
import feature from './objects/feature'
import featureCard from './objects/featureCard'
import testimonial from './objects/testimonial'
import processStep from './objects/processStep'
import advantage from './objects/advantage'
import stat from './objects/stat'
import seo from './objects/seo'
import cta from './objects/cta'
import finalCtaSection from './objects/finalCtaSection'
import hero from './objects/hero'
import simpleBlockContent from './objects/simpleBlockContent'

// Document Types (Collections)
import post from './pages/post'
import service from './pages/service'
import teamMember from './teamMember'
import contactSubmission from './contactSubmission'
import newsletterSubscription from './newsletterSubscription'

// Page Singletons (Specialized)
import homePage from './pages/homePage'
import aboutPage from './pages/aboutPage'
import blogPage from './pages/blogPage'
import contactPage from './pages/contactPage'
import useCasesPage from './pages/useCasesPage'
import aiImplementationPage from './pages/aiImplementationPage'
import erpTransformationPage from './pages/erpTransformationPage'
import dataAnalyticsPage from './pages/dataAnalyticsPage'
import managedDeliveryPage from './pages/managedDeliveryPage'
import sustainabilityPage from './pages/sustainabilityPage'
import privacyPolicy from './pages/privacyPolicy'
import termsOfUsage from './pages/termsOfUsage'
import settings from './settings'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        // Objects
        faq,
        feature,
        featureCard,
        testimonial,
        processStep,
        advantage,
        stat,
        seo,
        cta,
        finalCtaSection,
        hero,
        simpleBlockContent,

        // Settings & Meta
        settings,

        // Core Pages (Singletons)
        homePage,
        aboutPage,
        useCasesPage,
        blogPage,
        contactPage,
        aiImplementationPage,
        erpTransformationPage,
        dataAnalyticsPage,
        managedDeliveryPage,
        sustainabilityPage,
        privacyPolicy,
        termsOfUsage,

        // Collections
        service,
        post,
        teamMember,

        // Forms & Subscriptions
        contactSubmission,
        newsletterSubscription,
    ],
}
