import { urlFor } from 'Lib/urlFor'
import Image from 'next/image'

export default function Skills({ skills }) {
  return (
    <section id="technologies" className="toolbox-cards-wrapper">
      <h2>Skills</h2>
      <div className="toolbox-card">
        <h3 className="toolbox-card-header">Frontend</h3>
        <div className="tools-container">
          <ul>
            {skills.map((card, index) => (
              <li key={index} className="tool">
                <span className="tool-icon">
                  <Image
                    layout="fill"
                    className={`absolute object-cover`}
                    src={urlFor(card.image).url()}
                    alt={card.title}
                  />
                </span>
                {card.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
