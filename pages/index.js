import Image from 'next/image'
import Layout from 'Components/Layout'
import Projects from 'Components/Projects'
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
    const { t } = useTranslation('common')

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
            <div className="bar">{t('desc')}</div>
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
                <p>{t('info', { age: 16 })}</p>
            </section>
            <Projects pinnedItems={pinnedItems} />
            <Technologies />
            <Contact />
        </Layout>
    )
}

export async function getStaticProps() {
    const httpLink = createHttpLink({
        uri: 'https://api.github.com/graphql',
    })

    const authLink = setContext((_, { headers }) => {
        return {
            headers: {
                ...headers,
                authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
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
