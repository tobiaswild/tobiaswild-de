import { GrDeploy } from 'react-icons/gr'
import { FaHtml5, FaCode, FaServer, FaDatabase } from 'react-icons/fa'

const data = [
    {
        icon: <FaHtml5 />,
        name: 'Frontend',
        text: 'HTML, CSS, JS, ReactJS, NextJS',
    },
    {
        icon: <FaServer />,
        name: 'Backend',
        text: 'NodeJS',
    },
    {
        icon: <FaDatabase />,
        name: 'Databases',
        text: 'MongoDB, SQL',
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
        <section id="technologies">
            <h2>Technologies</h2>
            <ul>
                {data.map((card, index) => (
                    <li key={index}>
                        <h3 className="flex items-center">
                            <span className="text-2xl">{card.icon} </span>
                            <span className="ml-2">{card.name}</span>
                        </h3>
                        <p>Experience with</p>
                        <p>{card.text}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}
