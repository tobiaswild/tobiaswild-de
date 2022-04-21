import Layout from 'Components/Layout'
import BasicMeta from 'Components/meta/BasicMeta'
import SocialMeta from 'Components/meta/SocialMeta'
import Posts from 'Components/Posts'
import { getClient } from 'Lib/sanity.server'
import { groq } from 'next-sanity'

export default function Blog({ posts }) {
  return (
    <Layout scroll={false}>
      <BasicMeta url="/blog" />
      <SocialMeta url="/blog" />
      <Posts posts={posts} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const query = groq`
    {
      "posts": *[_type == "post"]
    }`
  const data = await getClient(process.env.NODE_ENV).fetch(query)

  return {
    props: {
      posts: data.posts,
    },
    revalidate: 60 * 60, // one hour
  }
}
