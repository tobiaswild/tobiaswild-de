import Image from 'next/image'

export default function MyImage({ src, alt, clsName, priority }) {
  return (
    <Image
      layout="fill"
      src={src}
      alt={alt}
      className={`absolute ${clsName}`}
      priority={priority}
      loading={priority ? 'eager' : 'lazy'}
      objectFit={'cover'}
    />
  )
}
