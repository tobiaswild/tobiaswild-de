import Link from 'next/link'
import Script from 'next/script'
import { FaCode, FaInfo, FaProjectDiagram } from 'react-icons/fa'
import { GrTechnology } from 'react-icons/gr'
import { GiAchievement } from 'react-icons/gi'

const data = [
    { link: '#projects', icon: <FaProjectDiagram />, text: 'Projects' },
    { link: '#technologies', icon: <GrTechnology />, text: 'Technologies' },
]

const alt = [
    { link: '#about-me', icon: <FaInfo />, text: 'About Me' },
    {
        link: '#achievements',
        icon: <GiAchievement />,
        text: 'Personal Achievements',
    },
]

export default function Nav() {
    function NavItem({ children, link, icon }) {
        return (
            <Link href={link} passHref>
                <a
                    className="rounded h-10 max-w-sm w-auto flex items-center tablet:p-2 m-2"
                    title={children}>
                    <span className="rounded p-1 text-white tablet:text-xl bg-skin-see">
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
                <div className="flex justify-between max-w-4xl mx-auto">
                    <Link href="#">
                        <a
                            id="top"
                            className="flex rounded font-Space-Grotesk tablet:text-2xl text-lg items-center p-2 m-2">
                            Tobias Wild
                        </a>
                    </Link>
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
