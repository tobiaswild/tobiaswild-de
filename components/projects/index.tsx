import Grid from 'Components/Grid'
import Project from './Project'

export default function Projects({ pinnedItems }) {
  return (
    <section id="projects">
      <h2>Projekte</h2>
      <Grid>
        {pinnedItems.map((item) => (
          <Project key={item} item={item} />
        ))}
      </Grid>
    </section>
  )
}
