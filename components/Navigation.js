import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

const nav = [{ id: 'projects' }, { id: 'technologies' }, { id: 'contact' }]

const navblog = [{ name: 'Test' }]

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
                                {t(`${card.id}:title`)}
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
                <div className="nav-links">
                    {navblog.map((card, index) => (
                        <Link key={index} href="/" passHref>
                            <a className="nav-link">{card.name}</a>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}
