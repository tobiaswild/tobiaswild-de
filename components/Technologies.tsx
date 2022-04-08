import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import {
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPython,
  FaRaspberryPi,
  FaReact,
} from 'react-icons/fa'
import {
  SiHeroku,
  SiMongodb,
  SiNetlify,
  SiTailwindcss,
  SiVisualstudiocode,
} from 'react-icons/si'

const frontend = [
  {
    icon: <FaHtml5 />,
    name: 'HTML5',
  },
  {
    icon: <FaCss3 />,
    name: 'CSS3',
  },
  {
    icon: <FaJs />,
    name: 'JavaScript',
  },
  {
    icon: <FaReact />,
    name: 'ReactJS',
  },
  {
    icon: <Image alt="nextjs" src="/icons/nextjs.svg" height={36} width={36} />,
    name: 'NextJS',
  },
  {
    icon: <SiTailwindcss />,
    name: 'TailwindCSS',
  },
]

const backend = [
  {
    icon: <FaNodeJs />,
    name: 'NodeJS',
  },

  {
    icon: <SiMongodb />,
    name: 'MongoDB',
  },
]

const other = [
  {
    icon: <FaJava />,
    name: 'Java',
  },

  {
    icon: <FaPython />,
    name: 'Python',
  },
]

const general = [
  {
    icon: <FaGitAlt />,
    name: 'Git',
  },
  {
    icon: <FaGithub />,
    name: 'GitHub',
  },
  {
    icon: <SiNetlify />,
    name: 'Netlify',
  },
  {
    icon: <SiHeroku />,
    name: 'Heroku',
  },
  {
    icon: <SiVisualstudiocode />,
    name: 'VS Code',
  },
  {
    icon: <FaRaspberryPi />,
    name: 'RPi',
  },
]

export default function Technologies() {
  const { t } = useTranslation('common')

  return (
    <section id="technologies" className="toolbox-cards-wrapper">
      <h2>{t('technologies.title')}</h2>
      <div className="toolbox-card">
        <h3 className="toolbox-card-header">Frontend</h3>
        <div className="tools-container">
          <ul>
            {frontend.map((card, index) => (
              <li key={index} className="tool">
                <span className="tool-icon">{card.icon}</span>
                {card.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="toolbox-card">
        <h3 className="toolbox-card-header">Backend</h3>
        <div className="tools-container">
          <ul>
            {backend.map((card, index) => (
              <li key={index} className="tool">
                <span className="tool-icon">{card.icon}</span>
                {card.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="toolbox-card">
        <h3 className="toolbox-card-header">{t('technologies.other')}</h3>
        <div className="tools-container">
          <ul>
            {other.map((card, index) => (
              <li key={index} className="tool">
                <span className="tool-icon">{card.icon}</span>
                {card.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="toolbox-card">
        <h3 className="toolbox-card-header">{t('technologies.general')}</h3>
        <div className="tools-container">
          <ul>
            {general.map((card, index) => (
              <li key={index} className="tool">
                <span className="tool-icon">{card.icon}</span>
                {card.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
