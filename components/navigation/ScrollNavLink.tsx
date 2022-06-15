import { Link } from 'react-scroll'

export default function ScrollNavLink({ card }) {
  return (
    <Link
      activeClass="active"
      spy={true}
      to={card.id}
      offset={-60}
      data-splitbee-event={`nav scroll button "${card.name}" clicked`}
      className={`${card.id} m-2 flex h-10 w-auto max-w-sm items-center p-2 text-neutral-400 hover:text-neutral-500 hover:no-underline`}>
      <span className="text-xl tablet:hidden">{card.icon}</span>
      <span className="hidden tablet:block">{card.name}</span>
    </Link>
  )
}
