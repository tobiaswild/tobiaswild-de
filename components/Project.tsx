import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import Weblink from './Weblink'

export default function Project({ item }) {
  return (
    <div key={item.id} className="box p-3">
      <div className="relative aspect-video">
        <Image
          layout="fill"
          className="absolute rounded object-cover"
          src={item.openGraphImageUrl}
          alt={item.name}
        />
      </div>
      <h3 className="py-0.5">{item.name}</h3>
      <p className="project-desc">{item.description}</p>
      <Weblink url={item.homepageUrl} />
      <Link href={item.url} passHref>
        <a target="_blank" className="flex items-center">
          <span className="mr-1">
            <FaGithub />
          </span>
          GitHub
        </a>
      </Link>
    </div>
  )
}
