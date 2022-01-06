import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaGlobe, FaStar } from 'react-icons/fa'
import Layout from 'Components/Layout'
import Technologies from 'Components/Technologies'
import Contact from 'Components/Contact'
import useTranslation from 'next-translate/useTranslation'
import {
    ApolloClient,
    InMemoryCache,
    gql,
    createHttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

export default function Home({ pinnedItems }) {
    const { t } = useTranslation()

    return (
        <Layout home>
            <header id="top" className="header">
                <Image
                    src="/images/big.webp"
                    alt="header-image"
                    height={720}
                    width={1280}
                    className="rounded-xl"
                />
            </header>
            <div className="bar">{t('common:desc')}</div>
            <section id="info">
                <div className="info-img">
                    <Image
                        src="/images/me.webp"
                        alt=""
                        height={150}
                        width={150}
                        className="rounded-full"
                        priority
                    />
                </div>
                <h1>Tobias Wild</h1>
                <p>{t('common:info', { age: 16 })}</p>
            </section>
            <section id="projects">
                <h2>{t('projects:title')}</h2>
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
                                <p className="project-desc">
                                    {item.description}
                                </p>
                                <p className="project-link hover:no-underline">
                                    <span>
                                        <FaStar />
                                    </span>
                                    {item.stargazers.totalCount}
                                </p>
                                <SuperLink url={item.homepageUrl} type="web" />
                                <SuperLink url={item.url} type="github" />
                            </div>
                        )
                    })}
                </div>
            </section>
            <Technologies />
            <Contact />
        </Layout>
    )
}

export function SuperLink({ url, type }) {
    const { t } = useTranslation('projects')

    if (url === '') return null
    if (type === 'github') {
        return (
            <Link href={url} passHref>
                <a target="_blank" className="project-link">
                    <span>
                        <FaGithub />
                    </span>
                    {t('github')}
                </a>
            </Link>
        )
    }
    if (type === 'web') {
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
}

export async function getServerSideProps() {
    const httpLink = createHttpLink({
        uri: 'https://api.github.com/graphql',
    })

    const authLink = setContext((_, { headers }) => {
        return {
            headers: {
                ...headers,
                authorization: process.env.GITHUB_ACCESS_TOKEN
                    ? `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`
                    : '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',
            },
        }
    })

    const client = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache(),
    })

    const { data } = await client.query({
        query: gql`
            {
                user(login: "tobiaswild") {
                    pinnedItems(first: 6, types: [REPOSITORY]) {
                        totalCount
                        edges {
                            node {
                                ... on Repository {
                                    name
                                    description
                                    id
                                    url
                                    homepageUrl
                                    openGraphImageUrl
                                    stargazers {
                                        totalCount
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `,
    })

    const { user } = data
    const pinnedItems = user.pinnedItems.edges.map((edge) => edge.node)

    return {
        props: {
            pinnedItems,
        },
    }
}
