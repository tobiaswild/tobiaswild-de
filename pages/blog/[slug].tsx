import { PortableText } from '@portabletext/react'
import Layout from 'Components/Layout'
import BasicMeta from 'Components/meta/BasicMeta'
import SocialMeta from 'Components/meta/SocialMeta'
import MyImage from 'Components/MyImage'
import { urlFor } from 'Lib/sanity'
import { getClient } from 'Lib/sanity.server'
import { groq } from 'next-sanity'

export default function PostPage({ post }) {
  return (
    <Layout scroll={false}>
      <BasicMeta url={`/post/${post.slug.current}`} />
      <SocialMeta url={`/post/${post.slug.current}`} />
      <div className="relative aspect-video">
        <MyImage
          src={urlFor(post.mainImage).url()}
          alt={post.title}
          clsName={'rounded'}
          priority={true}
        />
      </div>
      <PortableText value={post.body} />
    </Layout>
  )
}

const postsQuery = groq`*[_type == "post"]`
const singlePostQuery = groq`*[_type == "post" && slug.current == $slug] {
    ...,
    "authorName": author->name,
    "authorSlug": author->slug.current,
  }[0]`

export const getStaticPaths = async () => {
  const posts = await getClient(process.env.NODE_ENV === 'production').fetch(
    postsQuery
  )
  const paths = posts.map((post) => ({
    params: { slug: post.slug.current },
  }))
  return { paths: paths, fallback: true }
}

export const getStaticProps = async ({ params }) => {
  const post = await getClient(process.env.NODE_ENV === 'production').fetch(
    singlePostQuery,
    {
      slug: params.slug,
    }
  )
  return { props: { post } }
}
