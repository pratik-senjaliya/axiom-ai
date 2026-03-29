import { createClient } from "next-sanity";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(__dirname, "../.env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-03-25",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN || process.env.SANITY_API_TOKEN,
});

const DUMMY_TESTIMONIALS = [
  {
    quote: "AxiomAI didn't just give us a roadmap; they gave us a production-ready engine. Our AI pilot went live in 8 weeks, not 8 months.",
    author: "Sarah Chen",
    role: "VP of Engineering",
    company: "Global Tech Corp",
    _type: "testimonial"
  },
  {
    quote: "The ERP transformation was seamless. They bridged the gap between our legacy architecture and the modern cloud stack with zero downtime.",
    author: "Marcus Thorne",
    role: "Chief Technology Officer",
    company: "NexGen Logistics",
    _type: "testimonial"
  },
  {
    quote: "Their data strategy turned our silos into a competitive advantage. We finally have a single source of truth for our AI ambitions.",
    author: "Elena Rodriguez",
    role: "Head of Data",
    company: "FinStream Systems",
    _type: "testimonial"
  }
];

async function seedEnhancedFeatures() {
  console.log("🌱 Seeding Enhanced Features...");

  const singletonIds = [
    'homePageSingleton',
    'aboutPageSingleton',
    'useCasesPageSingleton',
    'aiImplementationPageSingleton',
    'erpTransformationPageSingleton',
    'dataAnalyticsPageSingleton',
    'managedDeliveryPageSingleton',
    'sustainabilityPageSingleton'
  ];

  // 1. Seed Testimonials to all pages
  for (const id of singletonIds) {
    console.log(`Adding testimonials to ${id}...`);
    await client.patch(id)
      .set({ 
        testimonials: DUMMY_TESTIMONIALS.map(t => ({ ...t, _key: Math.random().toString(36).substring(7) }))
      })
      .commit()
      .catch(err => console.error(`Error patching ${id}:`, err));
  }

  // 2. Simplify/Migrate Final CTA for Service Pages
  const serviceIds = [
    'aiImplementationPageSingleton',
    'erpTransformationPageSingleton',
    'dataAnalyticsPageSingleton',
    'managedDeliveryPageSingleton',
    'sustainabilityPageSingleton'
  ];

  for (const id of serviceIds) {
    const doc = await client.getDocument(id) as any;
    if (doc?.finalCta && doc.finalCta._type === 'hero') {
      console.log(`Simplifying finalCta for ${id}...`);
      const simpleCta = {
        _type: 'object',
        badgeText: doc.finalCta.badge || 'Next Steps',
        title: doc.finalCta.title || 'Ready to Scale?',
        description: doc.finalCta.description || 'Schedule a strategy audit to identify your high-impact AI use cases.',
        buttonText: doc.finalCta.primaryCta?.text || 'Book Audit',
        buttonLink: doc.finalCta.primaryCta?.link || '/contact'
      };
      await client.patch(id).set({ finalCta: simpleCta }).commit();
    }
  }

  // 3. Tag Blogs with Services
  console.log("🏷️ Tagging Blog Posts with Service Areas...");
  const posts = await client.fetch(`*[_type == "post"]`);
  for (const post of posts) {
    let service = 'ai'; // Default
    const lowerTitle = post.title.toLowerCase();
    
    if (lowerTitle.includes('erp') || lowerTitle.includes('oracle') || lowerTitle.includes('sap')) service = 'erp';
    else if (lowerTitle.includes('data') || lowerTitle.includes('pipeline') || lowerTitle.includes('analytics')) service = 'data';
    else if (lowerTitle.includes('delivery') || lowerTitle.includes('project') || lowerTitle.includes('managed')) service = 'managed';
    else if (lowerTitle.includes('sustainable') || lowerTitle.includes('green') || lowerTitle.includes('carbon')) service = 'sustainability';
    
    console.log(`Tagging "${post.title}" as ${service}...`);
    await client.patch(post._id).set({ relatedService: service }).commit();
  }

  console.log("✅ Enhanced seeding complete!");
}

seedEnhancedFeatures().catch(console.error);
