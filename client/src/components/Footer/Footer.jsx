import React from 'react'
import { SiReact, SiNetlify } from 'react-icons/si'
import './footer.css'

function Footer() {
    return (
        <footer>
            Made with <FooterItem link="https://reactjs.com" color="#00d8ff"><SiReact /></FooterItem> and 
            hosted on <FooterItem link="https://netlify.com" color="#00AD9F"><SiNetlify /></FooterItem>
        </footer>
    )
}

function FooterItem(props) {
    const styles = { color: props.color };
    return (
        <a className="footerlink" href={props.link} target="_blank" rel="noreferrer" style={styles} >{props.children}</a>
    )
}

export default Footer
