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

async function run() {
  console.log("Fetching all singletons...");
  const docs = await client.fetch(`*[_id match "*Singleton"]`);

  for (const doc of docs) {
    console.log(`Patching ${doc._id}...`);
    let patch = client.patch(doc._id);
    let hasChanges = false;

    // Patch Hero
    if (doc.hero && !doc.hero._type) {
      const updatedHero = { ...doc.hero, _type: "hero" };
      if (updatedHero.primaryCta && !updatedHero.primaryCta._type) updatedHero.primaryCta._type = "cta";
      if (updatedHero.secondaryCta && !updatedHero.secondaryCta._type) updatedHero.secondaryCta._type = "cta";
      patch = patch.set({ hero: updatedHero });
      hasChanges = true;
    }

    // Patch Final CTA
    if (doc.finalCta && !doc.finalCta._type) {
      const updatedFinalCta = { ...doc.finalCta, _type: "cta" }; // Wait, finalCta in schema is an inline object in most pages! Let's check schema.
      // Actually, if it's an inline object, it might be fine, or we set _type: 'object'. But let's look at primaryCta inside it.
      if (updatedFinalCta.primaryCta && !updatedFinalCta.primaryCta._type) updatedFinalCta.primaryCta._type = "cta";
      patch = patch.set({ finalCta: updatedFinalCta });
      hasChanges = true;
    }

    // Patch Arrays
    const arrayFields = ["pitfalls", "solutions", "roadmap", "personas", "models", "layers", "useCases", "faqs", "teamMembers"];
    for (const field of arrayFields) {
      if (Array.isArray(doc[field])) {
        const updatedArray = doc[field].map((item: any) => {
          let expectedType = "object";
          if (field === "roadmap") expectedType = "processStep";
          if (field === "faqs") expectedType = "faq";
          
          return {
            ...item,
            _type: expectedType
          };
        });
        patch = patch.set({ [field]: updatedArray });
        hasChanges = true;
      }
    }

    if (hasChanges) {
      await patch.commit().catch(console.error);
      console.log(`✅ Patched ${doc._id}`);
    } else {
      console.log(`No changes needed for ${doc._id}`);
    }
  }
}

run();
