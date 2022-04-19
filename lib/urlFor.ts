import imageUrlBuilder from '@sanity/image-url'
import { getClient } from 'Lib/sanity.server'

const builder = imageUrlBuilder(getClient())

export function urlFor(source: string) {
  return builder.image(source)
}
