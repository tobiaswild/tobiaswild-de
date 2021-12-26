import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import { FaProjectDiagram, FaSitemap, FaMailBulk } from 'react-icons/fa'

const nav = [
    { id: 'projects', icon: <FaProjectDiagram /> },
    { id: 'technologies', icon: <FaSitemap /> },
    { id: 'contact', icon: <FaMailBulk /> },
]

export function Navigation() {
    const { t } = useTranslation()

    return (
        <nav className="nav">
            <div className="nav-container">
                <a href="javascript:goTo('top');" className="logo">
                    Tobias Wild
                </a>
                <div className="nav-links">
                    {nav.map((card, index) => (
                        <Link
                            key={index}
                            href={`javascript:goTo("${card.id}");`}
                            passHref>
                            <a className={`${card.id} nav-link`}>
                                <span className="nav-link-icon">
                                    {card.icon}
                                </span>
                                <span className="nav-link-text">
                                    {t(`${card.id}:title`)}
                                </span>
                            </a>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export function NavigationOther() {
    return (
        <nav className="nav">
            <div className="nav-container">
                <Link href="/">
                    <a className="logo">Tobias Wild</a>
                </Link>
            </div>
        </nav>
    )
}
