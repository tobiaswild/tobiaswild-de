import Link from 'next/link'
import { FaCode, FaInfo, FaProjectDiagram } from 'react-icons/fa'
import { GrTechnology } from 'react-icons/gr'
import { GiAchievement } from 'react-icons/gi'

export default function Nav() {
    function Logo() {
        return (
            <Link href="/" passHref>
                <a className="flex rounded font-Space-Grotesk tablet:text-2xl items-center p-2 m-2">
                    <span>
                        <FaCode />
                    </span>
                    Tobias Wild
                </a>
            </Link>
        )
    }

    function Links() {
        return (
            <div className="flex flex-row">
                <NavItem link="#projects" icon={<FaProjectDiagram />}>
                    Projects
                </NavItem>
                <NavItem link="#technologies" icon={<GrTechnology />}>
                    Technologies
                </NavItem>
                <NavItem link="#about-me" icon={<FaInfo />}>
                    About Me
                </NavItem>
                <NavItem link="#achievements" icon={<GiAchievement />}>
                    Personal Achievements
                </NavItem>
            </div>
        )
    }

    function NavItem({ children, link, icon }) {
        return (
            <Link href={link} passHref>
                <a
                    className="rounded h-10 max-w-sm w-auto flex items-center tablet:p-2 m-2"
                    title={children}>
                    <span className="rounded p-1 text-white tablet:text-xl bg-skin-accent">
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
                <div className="flex justify-between max-w-4xl mx-auto">
                    <Logo />
                    <Links />
                </div>
            </nav>
        </>
    )
}
