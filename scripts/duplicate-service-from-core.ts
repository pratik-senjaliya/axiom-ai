/**
 * Duplicate a core specialized service page into a new Individual Service document.
 *
 * Usage:
 *   npx tsx scripts/duplicate-service-from-core.ts --source managed-delivery --slug my-new-service --title "My New Service"
 *   npx tsx scripts/duplicate-service-from-core.ts --source ai-implementation --slug cloud-services --title "Cloud Services"
 *
 * Sources: ai-implementation | erp-transformation | data-analytics | managed-delivery | sustainability
 */

import { createClient } from '@sanity/client'
import { config } from 'dotenv'

config()

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const token = process.env.SANITY_API_TOKEN || process.env.NEXT_PUBLIC_SANITY_TOKEN

if (!projectId || !dataset || !token) {
  console.error('Missing Sanity env vars. Set SANITY_API_TOKEN in .env')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  token,
  useCdn: false,
})

const SOURCE_MAP: Record<string, { type: string; id: string; title: string }> = {
  'ai-implementation': { type: 'aiImplementationPage', id: 'aiImplementationPageSingleton', title: 'AI Implementation' },
  'erp-transformation': { type: 'erpTransformationPage', id: 'erpTransformationPageSingleton', title: 'ERP Transformation' },
  'data-analytics': { type: 'dataAnalyticsPage', id: 'dataAnalyticsPageSingleton', title: 'Data & Analytics' },
  'managed-delivery': { type: 'managedDeliveryPage', id: 'managedDeliveryPageSingleton', title: 'Managed Delivery' },
  'sustainability': { type: 'sustainabilityPage', id: 'sustainabilityPageSingleton', title: 'Sustainability' },
}

function parseArgs() {
  const args = process.argv.slice(2)
  const get = (flag: string) => {
    const idx = args.indexOf(flag)
    return idx >= 0 ? args[idx + 1] : undefined
  }
  return {
    source: get('--source'),
    slug: get('--slug'),
    title: get('--title'),
  }
}

async function main() {
  const { source, slug, title } = parseArgs()

  if (!source || !slug || !title) {
    console.error('Usage: npx tsx scripts/duplicate-service-from-core.ts --source managed-delivery --slug my-service --title "My Service"')
    process.exit(1)
  }

  const sourceMeta = SOURCE_MAP[source]
  if (!sourceMeta) {
    console.error(`Unknown source "${source}". Valid: ${Object.keys(SOURCE_MAP).join(', ')}`)
    process.exit(1)
  }

  const existing = await client.fetch(
    `*[_type == "service" && slug.current == $slug][0]._id`,
    { slug }
  )
  if (existing) {
    console.error(`Service with slug "${slug}" already exists (${existing})`)
    process.exit(1)
  }

  const sourceDoc = await client.fetch(
    `*[_type == $type && _id == $id][0]`,
    { type: sourceMeta.type, id: sourceMeta.id }
  )

  if (!sourceDoc) {
    console.error(`Source document not found: ${sourceMeta.type} / ${sourceMeta.id}`)
    process.exit(1)
  }

  const doc = {
    _type: 'service',
    title,
    slug: { _type: 'slug', current: slug },
    showInNavigation: true,
    navTags: sourceDoc.tags || [],
    seo: sourceDoc.seo,
    hero: sourceDoc.hero,
    tags: sourceDoc.tags,
    pitfallsHeadline: sourceDoc.pitfallsHeadline,
    pitfalls: sourceDoc.pitfalls,
    layersHeadline: sourceDoc.layersHeadline,
    layers: sourceDoc.layers,
    useCasesHeadline: sourceDoc.useCasesHeadline,
    useCases: sourceDoc.useCases,
    modelsHeadline: sourceDoc.modelsHeadline,
    models: sourceDoc.models,
    roadmapHeadline: sourceDoc.roadmapHeadline,
    roadmap: sourceDoc.roadmap,
    faqs: sourceDoc.faqs,
    testimonials: sourceDoc.testimonials,
    finalCta: sourceDoc.finalCta,
  }

  const created = await client.create(doc)
  console.log(`Created service "${title}" at /${slug}`)
  console.log(`  Document ID: ${created._id}`)
  console.log(`  Duplicated from: ${sourceMeta.title}`)
  console.log(`  Edit in Sanity Studio → Individual Services`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
