import Link from 'next/link'
import { FaGithub, FaGlobe } from 'react-icons/fa'
import useTranslation from 'next-translate/useTranslation'

const data = [
    {
        id: 'storyblog',
        title: 'Storyblog',
        components: 'NextJS, TailwindCSS',
        web: 'https://storyblog.netlify.app/',
        github: 'storyblog',
    },
    {
        id: 'js-code-examples',
        title: 'JS Code Examples',
        components: 'HTML, CSS, JS',
        web: 'https://tobiaswild.github.io/js-code-examples/',
        github: 'js-code-examples',
    },
    {
        id: 'facebook-clone',
        title: 'Facebook Clone',
        components: 'ReactJS, NodeJS',
        link: '',
        github: 'facebook-klon',
    },
    {
        id: 'timer-plugin',
        title: 'Timer Plugin',
        components: 'Java',
        link: '',
        github: 'Timer',
    },
]

export default function Projects() {
    const { t } = useTranslation('projects')

    return (
        <section id="projects">
            <h2>{t('name')}</h2>
            <ul className="desktop:grid-cols-2 grid-cols-1">
                {data.map((card, index) => (
                    <li key={index}>
                        <h3>{card.title}</h3>
                        <p>{t(`${card.id}.text`)}</p>
                        <p className="pl-5 my-1">{card.components}</p>
                        <WebLink link={card.web} />
                        <GitHubLink github={card.github} />
                    </li>
                ))}
            </ul>
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
                <a target="_blank" className="flex items-center">
                    <span className="mr-1">
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
            <Link href={`https://github.com/tobiaswild/${github}`} passHref>
                <a target="_blank" className="flex items-center">
                    <span className="mr-1">
                        <FaGithub />
                    </span>
                    View on GitHub
                </a>
            </Link>
        </p>
    )
}
