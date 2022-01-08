import {
    ApolloClient,
    InMemoryCache,
    gql,
    createHttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

export const GitHubUserInfo = async () => {
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
                    avatarUrl
                    bio
                    login
                    name
                    websiteUrl
                    followers {
                        totalCount
                    }
                }
            }
        `,
    })

    const { user } = data
    return user
}

export const GitHubPinnedRepos = async () => {
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
    return user.pinnedItems.edges.map((edge) => edge.node)
}
