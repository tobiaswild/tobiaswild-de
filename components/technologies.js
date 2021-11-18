import { GrDeploy } from 'react-icons/gr'
import { FaHtml5, FaCode, FaServer, FaDatabase } from 'react-icons/fa'

const data = [
    {
        icon: <FaHtml5 />,
        name: 'Frontend',
        text: 'HTML, CSS, JS, NextJS, ReactJS',
    },
    {
        icon: <FaServer />,
        name: 'Backend',
        text: 'NodeJS',
    },
    {
        icon: <FaDatabase />,
        name: 'Databases',
        text: 'MongoDB',
    },
    {
        icon: <GrDeploy />,
        name: 'Deployment',
        text: 'Netlify, Heroku',
    },
    {
        icon: <FaCode />,
        name: 'Other',
        text: 'Java and Python',
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
                        <p>Experience with</p>
                        <p>{card.text}</p>
                    </li>
                ))}
            </ul>
        </article>
    )
}
