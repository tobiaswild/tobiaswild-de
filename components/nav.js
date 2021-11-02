import Link from 'next/link'
import { FaBars, FaBeer, FaCode, FaGasPump, FaGithub } from 'react-icons/fa'

export default function Nav() {
    return (
        <>
            <nav className="blur flex flex-row w-full h-16 overflow-hidden bg-color1">
                <NavLogo link="https://tobiaswild.de" icon={<FaCode />}>
                    Tobias Wild
                </NavLogo>
                <NavItem link="#" icon={<FaBeer />}>
                    Link 1
                </NavItem>
                <NavItem link="#" icon={<FaGasPump />}>
                    Link 2
                </NavItem>
                <NavItem link="#" icon={<FaGithub />}>
                    Source Code
                </NavItem>
                <ColorSwitch link="#open-menu" icon={<FaBars />} />
            </nav>
        </>
    )
}

function NavLogo({ children, link, icon }) {
    return (
        <Link href={link} passHref={true}>
            <a className="rounded text-lg flex items-center p-2 m-2">
                <span className="m-1">{icon}</span>
                {children}
            </a>
        </Link>
    )
}

function NavItem({ children, link, icon }) {
    return (
        <Link href={link} passHref={true}>
            <a className="rounded bg-color6 h-12 flex items-center p-2 m-2">
                <span className="m-1">{icon}</span>
                {children}
            </a>
        </Link>
    )
}

function ColorSwitch({ link, icon }) {
    return (
        <Link href={link} passHref={true}>
            <a className="float-right right-0 rounded bg-color6 h-12 flex items-center p-2 m-2">
                <span className="m-1">{icon}</span>
            </a>
        </Link>
    )
}
