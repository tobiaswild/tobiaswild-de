const data = [
    { year: 2021, text: 'Web Dev Online Course' },
    { year: 2005, text: 'Born in Germany' },
]

export default function AboutMe() {
    return (
        <article id="about-me">
            <h2>About Me</h2>
            <h3>Bio</h3>
            <ul className="grid-cols-1 gap-0 mt-0">
                {data.map((card, index) => (
                    <li key={index} className="">
                        <span className="font-semibold mr-4">{card.year}</span>
                        {card.text}
                    </li>
                ))}
            </ul>
        </article>
    )
}
