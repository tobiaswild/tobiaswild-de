import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

const data = [{ id: 'projects' }, { id: 'technologies' }, { id: 'contact' }]

export default function Nav() {
    const { t } = useTranslation()

    return (
        <nav className="nav">
            <div className="nav-container">
                <a href="javascript:goTo('top');" className="logo">
                    Tobias Wild
                </a>
                <div className="nav-links">
                    {data.map((card, index) => (
                        <Link
                            key={index}
                            href={`javascript:goTo("${card.id}");`}
                            passHref>
                            <a className={`${card.id} nav-link`}>
                                {t(`${card.id}:title`)}
                            </a>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}
