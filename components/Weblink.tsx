import Link from 'next/link'
import { FaGlobe } from 'react-icons/fa'

export default function Weblink({ url }) {
  if (url === '') return null
  return (
    <Link href={url} passHref>
      <a target="_blank" className="flex items-center" data-splitbee-event={`project "${url}" web button clicked`}>
        <span className="mr-1">
          <FaGlobe />
        </span>
        Webseite
      </a>
    </Link>
  )
}
