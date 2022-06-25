import { urlFor } from 'Lib/sanity'
import Image from 'next/image'

export default function Skills({ skills }) {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="flex flex-col items-center">
        <ul className="flex flex-row flex-wrap justify-center">
          {skills.map((skill) => (
            <li
              className="box m-2 flex h-28 w-28 flex-col items-center justify-end p-2"
              key={skill}>
              <span className="relative h-16 w-16 text-4xl">
                <Image
                  layout="fill"
                  src={urlFor(skill.image).url()}
                  alt={skill.title}
                />
              </span>
              {skill.title}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
