import { FaGithub, FaInstagram, FaLinkedin, FaXing } from "react-icons/fa"
import { BigFooterLink, FooterLink } from "./Button"

export default function Footer() {
  return (
    <footer className="bg-dark dark:bg-darker flex flex-col justify-center py-8 text-center text-sm text-neutral-400">
      <div className="flex flex-row justify-center">
        <FooterLink link={"/#about"}>About</FooterLink>
        <FooterLink link={"/#contact"}>Contact</FooterLink>
      </div>
      <div className="flex flex-row justify-center">
        <BigFooterLink
          link={"https://github.com/tobiaswild/"}
          target={"_blank"}
        >
          <FaGithub />
        </BigFooterLink>
        <BigFooterLink
          link={"https://github.com/tobiaswild/"}
          target={"_blank"}
        >
          <FaInstagram />
        </BigFooterLink>
        <BigFooterLink
          link={"https://github.com/tobiaswild/"}
          target={"_blank"}
        >
          <FaLinkedin />
        </BigFooterLink>
        <BigFooterLink
          link={"https://github.com/tobiaswild/"}
          target={"_blank"}
        >
          <FaXing />
        </BigFooterLink>
      </div>
      <div className="pt-2">
        &copy; {new Date().getFullYear()} Tobias Wild. No rights reserved.
      </div>
    </footer>
  )
}
