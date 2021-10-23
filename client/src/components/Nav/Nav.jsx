import React from 'react'
import { FaCode } from "react-icons/fa";
import './nav.css'

function Nav() {
    return (
        <nav>
            <Logo text="Tobias Wild" />
            <NavLinks>
                <NavItem link="#" text="Link 1" />
                <NavItem link="#" text="Link 2" />
                <NavItem link="#" text="Link 3" />
            </NavLinks>
        </nav>
    )
}

function Logo(props) {
    return (
        <div class="navlogo">
            <FaCode className="logo" />
            <p className="logoText">{props.text}</p>
        </div>
    )
}

function NavLinks(props) {
    return (
        <div className="navlinks">
            {props.children}
        </div>
    )
}

function NavItem(props) {
    return (
        <a className="link" href={props.link}>{props.text}</a>
    )
}



export default Nav
