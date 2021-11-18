import Link from 'next/link'

const data = [
    {
        name: 'Storyblog',
        text: 'A blog project for my girlfriend, because she realy likes to write storys.',
        github: 'storyblog',
        components: 'NextJS, TailwindCSS',
    },
    {
        name: 'JS Code Examples',
        text: 'A collection of different js script i think could be useful for other projects',
        github: 'js-code-examples',
        components: 'HTML, CSS, JS',
    },
    {
        name: 'Facebook Clone',
        text: 'clone of facebook i build in the web dev online course',
        github: 'facebook-klon',
        components: 'ReactJS, NodeJS',
    },
    {
        name: 'Timer Plugin',
        text: 'A small Timer Plugin for Minecraft',
        github: 'Timer',
        components: 'Java',
    },
]

export default function Projects() {
    return (
        <article id="projects">
            <h2>Projects</h2>
            <ul className="grid desktop:grid-cols-2 grid-cols-1 gap-10 mt-4 mb-8">
                {data.map((card, index) => (
                    <li key={index} className="shadow-2xl p-4">
                        <h3>{card.name}</h3>
                        <p>{card.text}</p>
                        <p className="px-4 my-2" title="what i used to create this project">{card.components}</p>
                        <Link
                            href={`https://github.com/tobiaswild/${card.github}`}
                            passHref>
                            <a target="_blank">View on GitHub</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </article>
    )
}
