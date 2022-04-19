import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaGlobe } from 'react-icons/fa'

export default function Project({ item }) {
  const { t } = useTranslation('common')

  function SuperLink({ url }) {
    if (url === '') return null
    return (
      <Link href={url} passHref>
        <a target="_blank" className="project-link">
          <span>
            <FaGlobe />
          </span>
          {t('projects.web')}
        </a>
      </Link>
    )
  }

  return (
    <div key={item.id} className="project">
      <div className="relative h-52">
        <Image
          layout="fill"
          className="absolute rounded object-cover"
          src={item.openGraphImageUrl}
          alt={item.name}
        />
      </div>
      <h3 className="project-name">{item.name}</h3>

      <p className="project-desc">{item.description}</p>
      <SuperLink url={item.homepageUrl} />
      <Link href={item.url} passHref>
        <a target="_blank" className="project-link">
          <span>
            <FaGithub />
          </span>
          {t('projects.github')}
        </a>
      </Link>
    </div>
  )
}
