import { Link } from 'react-scroll'
import NextLink from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import { FaProjectDiagram, FaSitemap, FaMailBulk } from 'react-icons/fa'

const nav = [
    { id: 'projects', icon: <FaProjectDiagram /> },
    { id: 'technologies', icon: <FaSitemap /> },
    { id: 'contact', icon: <FaMailBulk /> },
]

export default function Navigation() {
    const { t } = useTranslation()

    return (
        <nav className="nav">
            <div className="nav-container">
                <Link to="top" className="logo">
                    Tobias Wild
                </Link>
                <div className="nav-links">
                    {nav.map((card, index) => (
                        <Link
                            activeClass="active"
                            spy={true}
                            key={index}
                            to={card.id}
                            offset={-65}
                            className={`${card.id} nav-link`}>
                            <span className="nav-link-icon">{card.icon}</span>
                            <span className="nav-link-text">
                                {t(`${card.id}:title`)}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export function NavigationSmall() {
    return (
        <nav className="nav">
            <div className="nav-container">
                <NextLink href="/">
                    <a className="logo">Tobias Wild</a>
                </NextLink>
            </div>
        </nav>
    )
}
