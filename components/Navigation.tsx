import { FaEnvelope, FaProjectDiagram, FaSitemap } from 'react-icons/fa'
import { Link } from 'react-scroll'

const nav = [
  { id: 'projects', name: 'Projekte', icon: <FaProjectDiagram /> },
  { id: 'skills', name: 'Skills', icon: <FaSitemap /> },
  { id: 'contact', name: 'Kontakt', icon: <FaEnvelope /> },
]

export default function Navigation() {
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
            <Link
              activeClass="active"
              spy={true}
              key={index}
              to={card.id}
              offset={-60}
              className={`${card.id} m-2 flex h-10 w-auto max-w-sm items-center p-2 text-neutral-400 hover:text-neutral-500 hover:no-underline`}>
              <span className="text-xl tablet:hidden">{card.icon}</span>
              <span className="hidden tablet:block">{card.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
