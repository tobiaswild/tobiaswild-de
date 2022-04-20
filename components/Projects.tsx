import Project from './Project'

export default function Projects({ pinnedItems }) {
  return (
    <section id="projects">
      <h2>Projekte</h2>
      <div className="mx-auto grid grid-flow-row gap-4 tablet:grid-cols-2">
        {pinnedItems.map((item, key) => {
          return <Project key={key} item={item} />
        })}
      </div>
    </section>
  )
}
