import {
  ApolloClient,
  createHttpLink,
  gql,
  InMemoryCache,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

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

export const getUserInfo = async () => {
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

  return data.user
}

export const getPinnedRepos = async () => {
  const { data } = await client.query({
    query: gql`
      {
        user(login: "tobiaswild") {
          pinnedItems(first: 6, types: [REPOSITORY]) {
            edges {
              node {
                ... on Repository {
                  name
                  description
                  id
                  url
                  homepageUrl
                  openGraphImageUrl
                  repositoryTopics(first: 20) {
                    nodes {
                      topic {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  })

  return data.user.pinnedItems.edges.map((edge) => edge.node)
}
