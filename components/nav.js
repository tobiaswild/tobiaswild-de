import Link from 'next/link'
import Script from 'next/script'
import { FaProjectDiagram } from 'react-icons/fa'
import { GrTechnology } from 'react-icons/gr'

const data = [
    {
        link: 'javascript:document.getElementById("projects").scrollIntoView();',
        icon: <FaProjectDiagram />,
        text: 'Projects',
        cls: 'projects',
    },
    {
        link: 'javascript:document.getElementById("technologies").scrollIntoView();',
        icon: <GrTechnology />,
        text: 'Technologies',
        cls: 'technologies',
    },
]

export default function Nav() {
    function NavItem({ children, link, icon, cls }) {
        return (
            <Link href={link} passHref>
                <a
                    className={`${cls} tablet:bg-skin-see rounded h-10 max-w-sm w-auto flex items-center tablet:p-2 m-2`}
                    title={children}>
                    <span className="rounded p-1 text-white text-xl bg-skin-see">
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
            <nav className="fixed top-0 w-full h-14 z-10 overflow-hidden backdrop-blur">
                <div className="flex justify-between tablet:w-[768px] max-w-[96%] mx-auto">
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
                                {card.text}
                            </NavItem>
                        ))}
                    </div>
                </div>
            </nav>
            <Script src="/js/scroll-up.js" />
            <Script src="/js/scroll-indicator.js" />
        </>
    )
}
