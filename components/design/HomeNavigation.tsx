import { useViewportScroll } from "framer-motion"
import React, { useEffect, useState } from "react"
import { FaEnvelope, FaProjectDiagram, FaSitemap, FaUser } from "react-icons/fa"
import { Link as ScrollLink } from "react-scroll"

const nav = [
  { id: "about", name: "About", icon: <FaUser /> },
  { id: "skills", name: "Skills", icon: <FaSitemap /> },
  { id: "projects", name: "Projects", icon: <FaProjectDiagram /> },
  { id: "contact", name: "Contact", icon: <FaEnvelope /> },
]

export default function HomeNavigation() {
  const [colorChange, setColorchange] = useState(false)
  const { scrollYProgress } = useViewportScroll()

  useEffect(() => {
    scrollYProgress.onChange(() => {
      if (scrollY >= window.screen.availHeight * 0.8) {
        setColorchange(true)
      } else {
        setColorchange(false)
      }
    })
  })

  return (
    <nav
      className={`fixed top-0 z-50 w-screen overflow-hidden transition-colors ${
        colorChange ? "dark:bg-dark bg-white" : "bg-transparent"
      }`}
    >
      <div className="w-4xl mx-auto flex max-w-[95%] flex-row justify-between">
        <ScrollLink
          to="top"
          className={`m-2 ml-0 items-center p-2 pl-0 text-2xl ${
            colorChange ? "text-black dark:text-white" : "text-white"
          }`}
        >
          Tobias Wild
        </ScrollLink>
        <div className="flex flex-row">
          {nav.map((card, index) => (
            <ScrollLink
              activeClass="active"
              spy={true}
              key={index}
              to={card.id}
              offset={-100}
              className={`m-2 flex h-10 w-auto max-w-sm items-center rounded p-2 ${
                colorChange ? "text-black dark:text-white" : "text-white "
              } ${card.id}`}
            >
              <span className="text-lg sm:hidden">{card.icon}</span>
              <span className="hidden sm:block">{card.name}</span>
            </ScrollLink>
          ))}
        </div>
      </div>
    </nav>
  )
}
