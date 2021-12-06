import Link from 'next/link'
import Script from 'next/script'
import { FaProjectDiagram } from 'react-icons/fa'
import { GrTechnology } from 'react-icons/gr'
import useTranslation from 'next-translate/useTranslation'

const data = [
    {
        id: 'projects',
        link: 'javascript:goTo("projects");',
        icon: <FaProjectDiagram />,
        cls: 'projects',
    },
    {
        id: 'technologies',
        link: 'javascript:goTo("technologies");',
        icon: <GrTechnology />,
        cls: 'technologies',
    },
]

export default function Nav() {
    const { t } = useTranslation('common')

    function NavItem({ children, link, icon, cls }) {
        return (
            <Link href={link} passHref>
                <a
                    className={`${cls} bg-skin-see rounded h-10 max-w-sm w-auto flex items-center p-2 m-2`}>
                    <span className="rounded p-1 text-white text-xl">
                        {icon}
                    </span>
                    <span className="tablet:ml-1 hidden tablet:block">
                        {children}
                    </span>
                </a>
            </Link>
        )
    }

    return (
        <>
            <nav className="fixed top-0 w-full h-14 z-10 overflow-hidden bg-skin-see dark:bg-transparent backdrop-blur">
                <div className="flex justify-between tablet:w-3xl max-w-[95%] mx-auto">
                    <a
                        href="javascript:scroll(0, 0);"
                        className="bg-skin-see rounded font-Space-Grotesk desktop:text-2xl tablet:text-xl text-lg items-center p-2 tablet:m-1 m-2">
                        Tobias Wild
                    </a>
                    <div className="flex flex-row">
                        {data.map((card, index) => (
                            <NavItem
                                key={index}
                                link={card.link}
                                icon={card.icon}
                                cls={card.cls}>
                                {t(card.id)}
                            </NavItem>
                        ))}
                    </div>
                </div>
            </nav>
            <Script src="/js/scroll.js" />
        </>
    )
}
