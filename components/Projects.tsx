import useTranslation from 'next-translate/useTranslation'
import Project from './Project'

export default function Projects({ pinnedItems }) {
  const { t } = useTranslation('common')

  return (
    <section id="projects">
      <h2>{t('projects.title')}</h2>
      <div className="projects-container">
        {pinnedItems.map((item, key) => {
          return <Project key={key} item={item} />
        })}
      </div>
    </section>
  )
}
