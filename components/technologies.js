import Image from 'next/image'
import {
    FaHtml5,
    FaCode,
    FaCss3,
    FaJs,
    FaReact,
    FaGithub,
    FaGitAlt,
    FaNodeJs,
} from 'react-icons/fa'
import {
    SiHeroku,
    SiMongodb,
    SiNetlify,
    SiSqlite,
    SiTailwindcss,
    SiVisualstudiocode,
} from 'react-icons/si'
import useTranslation from 'next-translate/useTranslation'

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
        icon: (
            <Image
                alt="nextjs"
                src="/icons/nextjs.svg"
                height={36}
                width={36}
            />
        ),
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
    {
        icon: <SiSqlite />,
        name: 'SQL-DBs',
    },
    {
        icon: <FaCode />,
        name: 'Other',
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
]

export default function Technologies() {
    const { t } = useTranslation('technologies')

    return (
        <section id="technologies" className="toolbox-cards-wrapper">
            <h2>{t('title')}</h2>
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
                <h3 className="toolbox-card-header">{t('general')}</h3>
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
