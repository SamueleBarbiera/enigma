import createClient from '@sanity/client'
import createImageUrlBuilder from '@sanity/image-url'
import { createCurrentUserHook, createPreviewSubscriptionHook } from 'next-sanity'

export const sanityClient = {
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    token: process.env.SANITY_API_TOKEN,
    useCdn: process.env.NODE_ENV === 'production',
    apiVersion: '2022-03-06',
}

export const config = createClient(sanityClient)
export const urlFor = (source) => createImageUrlBuilder(config).image(source)
export const useCurrentUser = createCurrentUserHook(sanityClient)
export const usePreviewSubscription = createPreviewSubscriptionHook(sanityClient)
