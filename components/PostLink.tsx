import Link from 'next/link'
import { FaNewspaper } from 'react-icons/fa'

export default function PostLink({ slug }) {
  return (
    <Link href={`blog/${slug}`} passHref>
      <a className="flex items-center">
        <span className="mr-1">
          <FaNewspaper />
        </span>
        Post
      </a>
    </Link>
  )
}
