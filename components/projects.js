import Link from 'next/link'
import Image from 'next/image'
import { FaGithub, FaGlobe } from 'react-icons/fa'
import useTranslation from 'next-translate/useTranslation'

const data = [
    {
        id: 'storyblog',
        title: 'Storyblog',
        components: 'NextJS, TailwindCSS',
        web: 'https://storyblog.netlify.app/',
        github: 'tobiaswild/storyblog',
    },
    {
        id: 'js-code-examples',
        title: 'JS Code Examples',
        components: 'HTML, CSS, JS',
        web: 'https://tobiaswild.github.io/js-code-examples/',
        github: 'tobiaswild/js-code-examples',
    },
    {
        id: 'facebook-clone',
        title: 'Facebook Clone',
        components: 'ReactJS, NodeJS',
        link: '',
        github: 'tobiaswild/facebook-klon',
    },
    {
        id: 'timer-plugin',
        title: 'Timer Plugin',
        components: 'Java',
        link: '',
        github: 'tobiaswild/Timer',
    },
]

export default function Projects() {
    const { t } = useTranslation('projects')

    return (
        <section id="projects">
            <h2 className="section-header">{t('title')}</h2>
            <div className="projects-container">
                {data.map((card, index) => (
                    <div key={index} className="project">
                        <div className="project-image">
                            <Image
                                src={`/images/${card.id}.png`}
                                alt={`Project Picture of ${card.title}`}
                                height={720}
                                width={1280}
                                priority
                            />
                        </div>
                        <div className="project-info">
                            <h3 className="project-title">{card.title}</h3>
                            <p className="project-text">
                                {t(`${card.id}.text`)}
                            </p>
                            <p className="project-components">
                                {card.components}
                            </p>
                            <WebLink link={card.web} />
                            <GitHubLink github={card.github} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

function WebLink({ link }) {
    if (link == undefined) {
        return null
    }
    return (
        <p>
            <Link href={`${link}`} passHref>
                <a target="_blank" className="project-link">
                    <span>
                        <FaGlobe />
                    </span>
                    View on the Web
                </a>
            </Link>
        </p>
    )
}

function GitHubLink({ github }) {
    if (github == undefined) {
        return null
    }
    return (
        <p>
            <Link href={`https://github.com/${github}`} passHref>
                <a target="_blank" className="project-link">
                    <span>
                        <FaGithub />
                    </span>
                    View on GitHub
                </a>
            </Link>
        </p>
    )
}
