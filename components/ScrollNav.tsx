import { FaEnvelope, FaProjectDiagram, FaSitemap } from 'react-icons/fa'
import { Link } from 'react-scroll'
import ScrollNavLink from './ScrollNavLink'

const nav = [
  { id: 'projects', name: 'Projekte', icon: <FaProjectDiagram /> },
  { id: 'skills', name: 'Skills', icon: <FaSitemap /> },
  { id: 'contact', name: 'Kontakt', icon: <FaEnvelope /> },
]

export default function ScrollNav() {
  return (
    <nav className="fixed top-0 z-10 w-full overflow-hidden bg-background">
      <div className="mx-auto flex max-w-[95%] flex-row justify-between tablet:w-4xl">
        <Link
          to="top"
          className="m-2 items-center p-2 font-Space-Grotesk text-2xl hover:no-underline">
          Tobias Wild
        </Link>
        <div className="flex flex-row">
          {nav.map((card, index) => (
            <ScrollNavLink key={index} card={card} />
          ))}
        </div>
      </div>
    </nav>
  )
}
