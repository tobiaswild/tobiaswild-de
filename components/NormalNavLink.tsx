import Link from 'next/link'

export default function NormalNavLink({ card }) {
  return (
    <Link href={`/${card.id}`}>
      <a className="m-2 flex h-10 w-auto max-w-sm items-center p-2 text-neutral-400 hover:text-neutral-500 hover:no-underline" data-splitbee-event={`nav normal button "${card.name}" clicked`}>
        <span className="text-xl tablet:hidden">{card.icon}</span>
        <span className="hidden tablet:block">{card.name}</span>
      </a>
    </Link>
  )
}
