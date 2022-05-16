import Link from 'next/link'
import { FaFileAlt } from 'react-icons/fa'
import NormalNavLink from './NormalNavLink'

const nav = [{ id: 'blog', name: 'Blog', icon: <FaFileAlt /> }]

export default function NormalNav() {
  return (
    <nav className="fixed top-0 z-10 w-full overflow-hidden bg-background">
      <div className="mx-auto flex max-w-[95%] flex-row justify-between tablet:w-4xl">
        <Link href={'/'} passHref>
          <a className="m-2 items-center p-2 font-Space-Grotesk text-2xl hover:no-underline">
            Tobias Wild
          </a>
        </Link>
        <div className="flex flex-row">
          {nav.map((card, index) => (
            <NormalNavLink key={index} card={card} />
          ))}
        </div>
      </div>
    </nav>
  )
}
