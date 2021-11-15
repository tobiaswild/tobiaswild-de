import Link from 'next/link'
import { FaCode, FaGithub, FaInstagram, FaProjectDiagram } from 'react-icons/fa'
import { GrTechnology } from 'react-icons/gr'

export default function Nav() {
    function Logo() {
        return (
            <Link href="https://tobiaswild.de" passHref={true}>
                <a className="flex rounded font-Space-Grotesk text-2xl items-center p-2 m-2 bg-skin-muted">
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
            <div className="float-right relative flex pr-1">
                <NavLink
                    link={'https://github.com/tobiaswild/'}
                    icon={<FaGithub />}
                />
                <NavLink link={'/'} icon={<FaInstagram />} />
            </div>
        )
    }

    function NavLink({ link, icon }) {
        return (
            <Link href={link} passHref={true}>
                <a
                    className="rounded h-10 w-10 flex items-center p-2 mx-1 my-2 text-2xl hover:bg-skin-bg-accent hover:rounded-full"
                    target="_blank">
                    <span className="ml-0">{icon}</span>
                </a>
            </Link>
        )
    }

    function NavItem({ children, link, icon }) {
        return (
            <Link href={link} passHref={true}>
                <a className="rounded h-10 max-w-sm w-auto flex items-center p-2 m-2 float-left">
                    <span className="m-1">{icon}</span>
                    {children}
                </a>
            </Link>
        )
    }

    return (
        <>
            <nav className="fixed top-0 w-full h-14 z-10 overflow-hidden backdrop-blur">
                <div className="float-left whitespace-nowrap flex flex-row">
                    <Logo />
                    <NavItem link="#projects" icon={<FaProjectDiagram />}>
                        Projects
                    </NavItem>
                    <NavItem link="#technologies" icon={<GrTechnology />}>
                        Projects
                    </NavItem>
                </div>
                <Links />
            </nav>
        </>
    )
}
