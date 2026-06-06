/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { structure } from './schemas/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './lib/sanity/env'
import { schema } from './schemas'
import { serviceTemplates } from './schemas/serviceTemplates'

export default defineConfig({
    basePath: '/studio',
    projectId: projectId || 'placeholder-id',
    dataset: dataset || 'production',
    schema: {
        types: schema.types,
        templates: (prev) => [
            ...prev.filter((t) => t.schemaType !== 'service'),
            ...serviceTemplates,
        ],
    },
    document: {
        newDocumentOptions: (prev, { creationContext }) => {
            if (creationContext.type === 'structure' && creationContext.schemaType === 'service') {
                return serviceTemplates.map((t) => ({
                    templateId: t.id,
                }))
            }
            return prev
        },
    },
    plugins: [
        structureTool({
            structure,
        }),
        // Vision is a tool that lets you query your content with GROQ in the studio
        // https://www.sanity.io/docs/the-vision-plugin
        visionTool({ defaultApiVersion: apiVersion }),
    ],
})
