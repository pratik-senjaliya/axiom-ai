import { createImageUrlBuilder } from '@sanity/image-url'
import type { Image } from 'sanity'

import { dataset, projectId } from './env'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlForImage = (source: Image) => {
  return imageBuilder.image(source)
}

/** Sanity image object or plain URL string */
export type SanityImageSource =
  | string
  | {
      asset?: { _ref?: string; _id?: string; url?: string }
      hotspot?: { x: number; y: number; height: number; width: number }
      crop?: { top: number; bottom: number; left: number; right: number }
      alt?: string
    }
  | null
  | undefined

function hasSanityAsset(source: SanityImageSource): source is Exclude<SanityImageSource, string | null | undefined> {
  return Boolean(source && typeof source === 'object' && (source.asset?._ref || source.asset?._id || source.asset?.url))
}

/**
 * Listing / card covers — fixed 16:10, hotspot-aware crop from Sanity CDN.
 * Resulting image already matches the card frame → no letterboxing, no random crop.
 */
export function blogCardImageUrl(source: SanityImageSource, fallbackUrl?: string): string | undefined {
  if (hasSanityAsset(source)) {
    try {
      return urlForImage(source as Image)
        .width(960)
        .height(600)
        .fit('crop')
        .auto('format')
        .url()
    } catch {
      /* fall through */
    }
  }
  if (typeof source === 'string' && source) return source
  return fallbackUrl || undefined
}

/**
 * Detail hero — wide, no forced crop (full composition).
 */
export function blogDetailImageUrl(source: SanityImageSource, fallbackUrl?: string): string | undefined {
  if (hasSanityAsset(source)) {
    try {
      return urlForImage(source as Image).width(1600).fit('max').auto('format').url()
    } catch {
      /* fall through */
    }
  }
  if (typeof source === 'string' && source) return source
  return fallbackUrl || undefined
}
