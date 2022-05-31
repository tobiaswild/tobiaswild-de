import Skill from './Skill'

export default function Skills({ skills }) {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="flex flex-col items-center">
        <ul className="flex flex-row flex-wrap justify-center">
          {skills.map((skill) => (
            <Skill skill={skill} key={skill} />
          ))}
        </ul>
      </div>
    </section>
  )
}
