import Link from 'next/link'
import { FaGlobe } from 'react-icons/fa'

export default function Weblink({ url, name }) {
  if (url === '') return null
  return (
    <Link href={url} passHref>
      <a
        target="_blank"
        className="btn btn-primary flex items-center"
        data-splitbee-event="Project Web Button"
        data-splitbee-event-project={name}>
        <span className="mr-1">
          <FaGlobe />
        </span>
        Webseite
      </a>
    </Link>
  )
}
