import imageUrlBuilder from "@sanity/image-url"
import SanityClient from "./SanityClient"

const builder = imageUrlBuilder(SanityClient)

export function urlFor(source: string) {
  return builder.image(source)
}
