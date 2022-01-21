import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaGlobe, FaStar, FaUser, FaEye } from 'react-icons/fa'
import useTranslation from 'next-translate/useTranslation'

export default function Projects({ pinnedItems }) {
    const { t } = useTranslation('common')

    return (
        <section id="projects">
            <h2>{t('projects.title')}</h2>
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
                            <div className="flex justify-between">
                                <p className="project-link w-1/3 justify-center">
                                    <span>
                                        <FaStar />
                                    </span>
                                    {item.stargazers.totalCount}
                                </p>
                                <p className="project-link w-1/3 justify-center">
                                    <span>
                                        <FaEye />
                                    </span>
                                    {item.watchers.totalCount}
                                </p>
                                <p className="project-link w-1/3 justify-center">
                                    <span>
                                        <FaUser />
                                    </span>
                                    {item.collaborators.totalCount}
                                </p>
                            </div>
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
                })}
            </div>
        </section>
    )
}

function SuperLink({ url }) {
    const { t } = useTranslation('common')
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
