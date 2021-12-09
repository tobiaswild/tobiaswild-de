const bio = [
    { year: 2021, text: 'Web Development Online course ' },
    { year: 2018, text: 'School differentiation course on HTML & CSS' },
    { year: 2005, text: 'Born in Germany' },
]

export default function AboutMe() {
    return (
        <section id="about-me">
            <h2 className="section-header">About Me</h2>
            <h3>Bio</h3>
            <ul className="grid-cols-1 gap-0 mt-0">
                {bio.map((card, index) => (
                    <li key={index} className="">
                        <span className="font-semibold mr-4">{card.year}</span>
                        {card.text}
                    </li>
                ))}
            </ul>
        </section>
    )
}
