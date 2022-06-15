import { CardGrid, ProjectCard } from 'Components/design/Cards'

export default function posts({ projects }) {
  return (
    <section id="projects" className="section max-w-7xl">
      <h2 className="section-header">My Projects</h2>
      <CardGrid>
        {projects &&
          projects.map((project, index) => (
            <ProjectCard
              key={index}
              imageUrl={project.openGraphImageUrl}
              title={project.name}
              preview={project.description}
              projectUrl={project.url}
              websiteUrl={project.homepageUrl}
            />
          ))}
      </CardGrid>
    </section>
  )
}
