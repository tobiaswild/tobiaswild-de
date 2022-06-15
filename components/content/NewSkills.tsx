import { SanityImage } from 'Components/design/Images'
import StarRatings from 'react-star-ratings'

export default function NewSkills({ skills }) {
  return (
    <section id="skills" className="wrapper section">
      <h2 className="section-header">My new Skills</h2>
      <div className="flex flex-col items-center">
        <ul className="flex flex-row flex-wrap justify-center">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="flex h-32 w-32 flex-col items-center justify-end p-2">
              <div className="relative h-12 w-12">
                <SanityImage imageUrl={skill.image} alt={skill.title} />
              </div>
              {skill.title}
              <StarRatings
                rating={skill.level}
                starRatedColor="gold"
                starDimension="20px"
                starSpacing="1px"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
