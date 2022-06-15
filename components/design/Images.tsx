import { urlFor } from 'Lib/urlFor'
import Image from 'next/image'

interface NormalProps {
  imageUrl: URL
  alt: string
  clsName?: string
}

export function NormalImage(props: NormalProps) {
  return (
    <Image
      layout="fill"
      className={`absolute object-cover ${props.clsName}`}
      src={props.imageUrl.toString()}
      alt={props.alt}
    />
  )
}

interface SanityProps {
  imageUrl: string
  alt: string
  clsName?: string
}

export function SanityImage(props: SanityProps) {
  return (
    <Image
      layout="fill"
      className={`absolute object-cover ${props.clsName}`}
      src={urlFor(props.imageUrl).url()}
      alt={props.alt}
    />
  )
}
