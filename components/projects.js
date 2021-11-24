import Link from 'next/link'

const data = [
    {
        name: 'Storyblog',
        text: 'A blog project for my girlfriend, because she realy likes to write storys.',
        components: 'NextJS, TailwindCSS',
        link: 'https://storyblog.netlify.app/',
        github: 'storyblog',
    },
    {
        name: 'JS Code Examples',
        text: 'A collection of different js script i think could be useful for other projects',
        components: 'HTML, CSS, JS',
        link: 'https://tobiaswild.github.io/js-code-examples/',
        github: 'js-code-examples',
    },
    {
        name: 'Facebook Clone',
        text: 'clone of facebook i build in the web dev online course',
        components: 'ReactJS, NodeJS',
        link: '',
        github: 'facebook-klon',
    },
    {
        name: 'Timer Plugin',
        text: 'A small Timer Plugin for Minecraft',
        components: 'Java',
        link: '',
        github: 'Timer',
    },
]

export default function Projects() {
    return (
        <article id="projects">
            <h2>Projects</h2>
            <ul className="grid desktop:grid-cols-2 grid-cols-1 gap-10 mt-4 mb-8">
                {data.map((card, index) => (
                    <li key={index}>
                        <h3>{card.name}</h3>
                        <p>{card.text}</p>
                        <p
                            className="px-4 my-2"
                            title="what i used to create this project">
                            {card.components}
                        </p>
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
                <a target="_blank">View on the Web</a>
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
                <a target="_blank">View on GitHub</a>
            </Link>
        </p>
    )
}
