import useTranslation from 'next-translate/useTranslation'
import { FaEnvelope, FaProjectDiagram, FaSitemap } from 'react-icons/fa'
import { Link } from 'react-scroll'

const nav = [
    { id: 'projects', icon: <FaProjectDiagram /> },
    { id: 'technologies', icon: <FaSitemap /> },
    { id: 'contact', icon: <FaEnvelope /> },
]

export default function Navigation() {
    const { t } = useTranslation('common')

    return (
        <nav>
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
                            offset={-60}
                            className={`${card.id} nav-link`}>
                            <span className="nav-link-icon">{card.icon}</span>
                            <span className="nav-link-text">
                                {t(`${card.id}.title`)}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}
