import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import MyImage from '../MyImage'
import Weblink from '../Weblink'

export default function Project({ item }) {
  return (
    <div key={item.id} className="box p-3">
      <div className="relative aspect-video">
        <MyImage
          src={item.openGraphImageUrl}
          alt={item.name}
          clsName={'rounded'}
          priority={false}
        />
      </div>
      <h3 className="py-0.5">{item.name}</h3>
      <p className="project-desc">{item.description}</p>
      <Weblink url={item.homepageUrl} />
      <Link href={item.url} passHref>
        <a target="_blank" className="flex items-center" data-splitbee-event={`project "${item.url}" github button clicked`}>
          <span className="mr-1">
            <FaGithub />
          </span>
          GitHub
        </a>
      </Link>
    </div>
  )
}
