import Image from 'next/image'

export default function Project({ image, title, description, children }) {
  return (
    <div className="card shadow-xl">
      <div className="relative aspect-video bg-base-200">
        <Image layout="fill" src={image} alt={title} objectFit="cover" />
      </div>
      <div className="card-body p-4 pt-2">
        <h3 className="card-title">{title}</h3>
        <p>{description}</p>
        <div className="card-actions">{children}</div>
      </div>
    </div>
  )
}
