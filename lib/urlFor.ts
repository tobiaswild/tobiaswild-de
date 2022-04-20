import imageUrlBuilder from '@sanity/image-url'
import { getClient } from 'Lib/sanity.server'

const builder = imageUrlBuilder(getClient(process.env.NODE_ENV))

export function urlFor(source: string) {
  return builder.image(source)
}
