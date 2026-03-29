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
  console.log("Looking for stale drafts...");
  const docs = await client.fetch(`*[_id match "drafts.*Singleton"]`);

  console.log(`Found ${docs.length} stale drafts!`);

  for (const doc of docs) {
    console.log(`Deleting stale draft: ${doc._id}`);
    await client.delete(doc._id).catch(console.error);
  }
  console.log("All stale drafts deleted!");
}
run();
