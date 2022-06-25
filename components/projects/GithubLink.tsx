import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

export default function Githublink({ url, name }) {
  return (
    <Link href={url} passHref>
      <a
        target="_blank"
        className="btn btn-primary flex items-center"
        data-splitbee-event="Project GitHub Button"
        data-splitbee-event-project={name}>
        <span className="mr-1">
          <FaGithub />
        </span>
        GitHub
      </a>
    </Link>
  )
}
