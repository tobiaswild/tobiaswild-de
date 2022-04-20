import createImageUrlBuilder from '@sanity/image-url'
import {
  createCurrentUserHook,
  createPreviewSubscriptionHook,
} from 'next-sanity'
import { config } from './config'

export const urlFor = (source) => createImageUrlBuilder(config).image(source)

export const usePreviewSubscription = createPreviewSubscriptionHook(config)

export const useCurrentUser = createCurrentUserHook(config)
