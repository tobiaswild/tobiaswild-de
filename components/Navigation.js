import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import { FaCode } from 'react-icons/fa'

const data = [{ id: 'projects' }, { id: 'technologies' }, { id: 'contact' }]

export default function Nav() {
    const { t } = useTranslation()

    function NavItem({ id, children }) {
        return (
            <Link href={`javascript:goTo("${id}");`} passHref>
                <a className={`${id} nav-link`}>{children}</a>
            </Link>
        )
    }

    return (
        <nav className="nav">
            <div className="nav-container">
                <a href="javascript:goTo('top');" className="logo">
                    Tobias Wild
                </a>
                <div className="flex flex-row">
                    {data.map((card, index) => (
                        <NavItem key={index} id={card.id}>
                            {t(`${card.id}:title`)}
                        </NavItem>
                    ))}
                </div>
            </div>
        </nav>
    )
}
