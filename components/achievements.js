const data = [
    { number: 1, text: 'Code contributions' },
    { number: 0, text: 'GitHub View' },
    { number: 2, text: 'GitHub Projects' },
    { number: 1, text: 'Github Followers' },
    { number: 0, text: 'Github Stars' },
]

export default function Achievements() {
    return (
        <article id="achievements">
            <h2>Personal Achievements</h2>
            <ul>
                {data.map((card, index) => (
                    <li key={index}>
                        <h3>{`${card.number}+`}</h3>
                        <p>{card.text}</p>
                    </li>
                ))}
            </ul>
        </article>
    )
}
