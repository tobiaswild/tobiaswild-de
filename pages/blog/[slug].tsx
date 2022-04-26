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

const query = groq`
  *[_type == "post" && slug.current == $slug][0]{
    ...,
    "authorName": author->name,
    "authorSlug": author->slug.current,
    "authorImage": author->image,
  }`

export async function getStaticPaths() {
  const paths = await getClient(process.env.NODE_ENV == 'production').fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const { slug = '' } = context.params
  const post = await getClient(process.env.NODE_ENV == 'production').fetch(
    query,
    { slug }
  )
  return {
    props: {
      post,
    },
    // revalidate: 60 * 60, // one hour
  }
}
