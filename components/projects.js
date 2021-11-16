import Link from 'next/link'

const data = [
    {
        name: 'Storyblog',
        text: 'A blog project for my girlfriend, because she realy likes to write storys.',
        github: 'storyblog',
        components: 'nextjs',
    },
    {
        name: 'CleanerTwitch',
        text: 'extention to remove useless stuff from the twitch page',
        github: 'CleanerTwitchTV',
        components: 'html, css, js',
    },
    {
        name: 'Facebook Clone',
        text: 'clone of facebook i build in the web dev online course',
        github: 'facebook-klon',
        components: '',
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
                        <p className="px-4 my-2">{card.components}</p>
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
