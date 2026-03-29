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

async function restoreIntegrity() {
  console.log("🛠️  Starting Sanity Studio Integrity Fix...");

  // 1. CLEAR STALE DRAFTS
  console.log("🧹 Clearing stale drafts...");
  const drafts = await client.fetch(`*[_id match "drafts.**"]`);
  console.log(`Found ${drafts.length} total drafts.`);
  
  for (const draft of drafts) {
    if (draft._id.includes("Singleton") || draft._id === "drafts.settings" || draft._id === "drafts.contactPage") {
       console.log(`🚮 Deleting stale draft: ${draft._id}`);
       await client.delete(draft._id).catch(err => console.error(`Error deleting ${draft._id}`, err));
    }
  }

  // 2. PATCH METADATA FOR VISIBILITY
  console.log("🩹 Patching Published Singletons...");
  const singletons = await client.fetch(`*[
    _id in [
      "homePageSingleton", "aboutPageSingleton", "useCasesPageSingleton", 
      "servicesPageSingleton", "blogPageSingleton", "contactPage",
      "aiImplementationPageSingleton", "erpTransformationPageSingleton", 
      "dataAnalyticsPageSingleton", "managedDeliveryPageSingleton", 
      "sustainabilityPageSingleton", "privacyPolicySingleton", 
      "termsOfUsageSingleton", "settings"
    ]
  ]`);

  for (const doc of singletons) {
    console.log(`Checking ${doc._id}...`);
    let patch = client.patch(doc._id);
    let changed = false;

    // Patch HERO sections
    if (doc.hero && !doc.hero._type) {
      const updatedHero = { ...doc.hero, _type: "hero" };
      if (updatedHero.primaryCta && !updatedHero.primaryCta._type) updatedHero.primaryCta._type = "cta";
      if (updatedHero.secondaryCta && !updatedHero.secondaryCta._type) updatedHero.secondaryCta._type = "cta";
      patch = patch.set({ hero: updatedHero });
      changed = true;
    }

    // Patch custom field arrays
    const listFields = ["pitfalls", "solutions", "roadmap", "personas", "layers", "models", "useCases", "faqs", "teamMembers", "socialLinks"];
    for (const field of listFields) {
      if (Array.isArray(doc[field])) {
        const updatedList = doc[field].map((item: any) => {
          let type = "object";
          if (field === "roadmap") type = "processStep";
          if (field === "faqs") type = "faq";
          if (field === "socialLinks") type = "object";
          return { ...item, _type: item._type || type };
        });
        patch = patch.set({ [field]: updatedList });
        changed = true;
      }
    }

    // Patch FINAL CTA (Handle different schema types per page)
    if (doc.finalCta && !doc.finalCta._type) {
      let finalCtaType = "hero"; // Majority
      if (doc._id === "homePageSingleton" || doc._id === "servicesPageSingleton") finalCtaType = "object";
      
      const updatedFinalCta = { ...doc.finalCta, _type: finalCtaType };
      if (updatedFinalCta.primaryCta && !updatedFinalCta.primaryCta._type) updatedFinalCta.primaryCta._type = "cta";
      patch = patch.set({ finalCta: updatedFinalCta });
      changed = true;
    }

    // Patch SEO
    if (doc.seo && !doc.seo._type) {
      patch = patch.set({ seo: { ...doc.seo, _type: "seo" } });
      changed = true;
    }

    if (changed) {
      await patch.commit();
      console.log(`✅ Fixed metadata for: ${doc._id}`);
    }
  }

  console.log("✨ All pages restored! Please refresh Sanity Studio.");
}

restoreIntegrity().catch(console.error);
