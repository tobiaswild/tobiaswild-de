import Link from 'next/link'
import Image from 'next/image'
import { FaGithub, FaGlobe } from 'react-icons/fa'
import useTranslation from 'next-translate/useTranslation'

export default function Projects() {
    const { t } = useTranslation('projects')

    const projects = [
        {
            id: 'storyblog',
            title: 'Storyblog',
            text: t('storyblog.text'),
            components: 'NextJS, TailwindCSS',
            web: 'https://storyblog.netlify.app/',
            github: 'tobiaswild/storyblog',
        },
        {
            id: 'js-code-examples',
            title: 'JS Code Examples',
            text: t('js-code-examples.text'),
            components: 'HTML, CSS, JS',
            web: 'https://tobiaswild.github.io/js-code-examples/',
            github: 'tobiaswild/js-code-examples',
        },
        {
            id: 'facebook-clone',
            title: t('facebook-clone.name'),
            text: t('facebook-clone.text'),
            components: 'ReactJS, NodeJS',
            link: '',
            github: 'tobiaswild/facebook-klon',
        },
        {
            id: 'timer-plugin',
            title: 'Timer Plugin',
            text: t('timer-plugin.text'),
            components: 'Java',
            link: '',
            github: 'tobiaswild/Timer',
        },
    ]

    function WebLink({ url }) {
        if (url === undefined) return null
        return (
            <p>
                <Link href={`${url}`} passHref>
                    <a target="_blank" className="project-link">
                        <span>
                            <FaGlobe />
                        </span>
                        {t('view-web')}
                    </a>
                </Link>
            </p>
        )
    }

    function GitHubLink({ repo }) {
        if (repo === undefined) return null
        return (
            <p>
                <Link href={`https://github.com/${repo}`} passHref>
                    <a target="_blank" className="project-link">
                        <span>
                            <FaGithub />
                        </span>
                        {t('view-github')}
                    </a>
                </Link>
            </p>
        )
    }

    return (
        <section id="projects">
            <h2>{t('title')}</h2>
            <div className="projects-container">
                {projects.map((card, index) => (
                    <div key={index} className="project">
                        <div className="project-image">
                            <Image
                                src={`/images/${card.id}.png`}
                                alt={`Project Picture of ${card.title}`}
                                height={720}
                                width={1280}
                            />
                        </div>
                        <div className="project-info">
                            <h3 className="project-title">{card.title}</h3>
                            <p className="project-text">{card.text}</p>
                            <p className="project-components">
                                {card.components}
                            </p>
                            <WebLink url={card.web} />
                            <GitHubLink repo={card.github} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
