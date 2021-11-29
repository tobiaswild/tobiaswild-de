import Link from 'next/link'
import { FaGithub, FaGlobe } from 'react-icons/fa'

const data = [
    {
        name: 'Storyblog',
        text: 'A blog project for my girlfriend, because she really likes to write stories and texts.',
        components: 'NextJS, TailwindCSS',
        link: 'https://storyblog.netlify.app/',
        github: 'storyblog',
    },
    {
        name: 'JS Code Examples',
        text: 'A collection of different JavaScript Examples,  I think could be useful for other projects in the future.',
        components: 'HTML, CSS, JS',
        link: 'https://tobiaswild.github.io/js-code-examples/',
        github: 'js-code-examples',
    },
    {
        name: 'Facebook Clone',
        text: 'Clone of Facebook I build in the web development online course. It is not fully finished. But it was the end project of the course.',
        components: 'ReactJS, NodeJS',
        link: '',
        github: 'facebook-klon',
    },
    {
        name: 'Timer Plugin',
        text: 'A small Timer Plugin for Minecraft. Useful for speed runs or other Games when you have to track the time.',
        components: 'Java',
        link: '',
        github: 'Timer',
    },
]

export default function Projects() {
    return (
        <article id="projects">
            <h2>Projects</h2>
            <ul className="desktop:grid-cols-2 grid-cols-1">
                {data.map((card, index) => (
                    <li key={index}>
                        <h3>{card.name}</h3>
                        <p>{card.text}</p>
                        <p className="pl-5 my-1">{card.components}</p>
                        <WebLink link={card.link} />
                        <GitHubLink github={card.github} />
                    </li>
                ))}
            </ul>
        </article>
    )
}

function WebLink({ link }) {
    if (link == '') {
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
    if (github == '') {
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
