import Link from 'next/link'
import Script from 'next/script'
import { FaProjectDiagram } from 'react-icons/fa'
import { GrTechnology } from 'react-icons/gr'

const data = [
    { link: '#projects', icon: <FaProjectDiagram />, text: 'Projects' },
    { link: '#technologies', icon: <GrTechnology />, text: 'Technologies' },
]

export default function Nav() {
    function NavItem({ children, link, icon }) {
        return (
            <Link href={link} passHref>
                <a
                    className="tablet:bg-skin-see rounded h-10 max-w-sm w-auto flex items-center tablet:p-2 m-2"
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
            <Script src="/js/scroll-up.js" />
            <nav className="fixed top-0 w-full h-14 z-10 overflow-hidden backdrop-blur">
                <div className="flex justify-between tablet:w-[768px] max-w-[96%] mx-auto">
                    <a
                        id="top"
                        href="#"
                        className="bg-skin-see rounded font-Space-Grotesk desktop:text-2xl tablet:text-xl text-lg items-center p-2 tablet:m-1 m-2">
                        Tobias Wild
                    </a>
                    <div className="flex flex-row">
                        {data.map((card, index) => (
                            <NavItem
                                key={index}
                                link={card.link}
                                icon={card.icon}>
                                {card.text}
                            </NavItem>
                        ))}
                    </div>
                </div>
            </nav>
        </>
    )
}
