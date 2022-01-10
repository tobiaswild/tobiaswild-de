import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaGlobe, FaStar } from 'react-icons/fa'
import useTranslation from 'next-translate/useTranslation'

export default function Projects({ pinnedItems }) {
    const { t } = useTranslation('projects')

    return (
        <section id="projects">
            <h2>{t('title')}</h2>
            <div className="projects-container">
                {pinnedItems.map((item) => {
                    return (
                        <div key={item.id} className="project">
                            <div className="project-image">
                                <Image
                                    src={item.openGraphImageUrl}
                                    alt={item.name}
                                    height={640}
                                    width={1280}
                                    className="rounded"
                                />
                            </div>
                            <h3 className="project-name">{item.name}</h3>
                            <p className="project-desc">{item.description}</p>
                            <p className="project-link hover:no-underline">
                                <span>
                                    <FaStar />
                                </span>
                                {item.stargazers.totalCount}
                            </p>
                            <SuperLink url={item.homepageUrl} />
                            <Link href={item.url} passHref>
                                <a target="_blank" className="project-link">
                                    <span>
                                        <FaGithub />
                                    </span>
                                    {t('github')}
                                </a>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

function SuperLink({ url }) {
    const { t } = useTranslation('projects')
    if (url === '') return null
    return (
        <Link href={url} passHref>
            <a target="_blank" className="project-link">
                <span>
                    <FaGlobe />
                </span>
                {t('web')}
            </a>
        </Link>
    )
}
