import Link from 'next/link'
import { FaCode, FaProjectDiagram } from 'react-icons/fa'
import { GrAchievement, GrTechnology } from 'react-icons/gr'
import { FcAbout } from 'react-icons/fc'

export default function Nav() {
    function Logo() {
        return (
            <Link href="/" passHref>
                <a className="flex rounded font-Space-Grotesk text-2xl items-center p-2 m-2">
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
            <div className="flex flex-row mobile:hidden">
                <NavItem link="#projects" icon={<FaProjectDiagram />}>
                    Projects
                </NavItem>
                <NavItem link="#technologies" icon={<GrTechnology />}>
                    Technologies
                </NavItem>
                <NavItem link="#about-me" icon={<FcAbout />}>
                    About Me
                </NavItem>
                <NavItem link="#achievements" icon={<GrAchievement />}>
                    Personal Achievements
                </NavItem>
            </div>
        )
    }

    function NavItem({ children, link, icon }) {
        return (
            <Link href={link} passHref>
                <a
                    className="rounded h-10 max-w-sm w-auto flex items-center p-2 m-2"
                    title={children}>
                    <span className="m-1 text-white text-xl">{icon}</span>
                    <span className="tablet:hidden">{children}</span>
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
