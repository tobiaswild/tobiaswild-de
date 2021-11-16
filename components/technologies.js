import { DiMongodb } from 'react-icons/di'
import { FaHtml5, FaInfinity, FaJava, FaPython, FaServer } from 'react-icons/fa'

const data = [
    {
        icon: <FaHtml5 />,
        name: 'Frontend',
        text: 'HTML5, CSS3, JS, NextJS',
    },
    {
        icon: <FaServer />,
        name: 'Backend',
        text: 'NodeJS',
    },
    {
        icon: <DiMongodb />,
        name: 'Databases',
        text: 'MongoDB',
    },
    {
        icon: <FaInfinity />,
        name: 'Devops',
        text: 'Netlify, Heroku',
    },
    {
        icon: <FaJava />,
        name: 'Java',
        text: '',
    },
    {
        icon: <FaPython />,
        name: 'Python',
        text: '',
    },
]

export default function Technologies() {
    return (
        <article id="technologies">
            <h2>Technologies</h2>
            <ul>
                {data.map((card, index) => (
                    <li key={index}>
                        <span className="text-2xl">{card.icon}</span>
                        <h3>{card.name}</h3>
                        <p>{card.text}</p>
                    </li>
                ))}
            </ul>
        </article>
    )
}
