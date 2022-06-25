import Footer from 'Components/Footer'
import Grid from 'Components/Grid'
import Main from 'Components/Main'
import Nav from 'Components/Nav'
import { urlFor } from 'Lib/sanity'
import { getClient } from 'Lib/sanity.server'
import { groq } from 'next-sanity'
import Image from 'next/image'
import Link from 'next/link'
import { FaNewspaper } from 'react-icons/fa'

export default function Posts({ posts }) {
  return (
    <>
      <Nav />
      <Main>
        <h1>Posts</h1>
        <Grid>
          {posts.map((post) => (
            <div className="box p-3" key={post}>
              <div className="relative aspect-video">
                <Image
                  layout="fill"
                  src={urlFor(post.mainImage).url()}
                  alt={post.title}
                  className="absolute"
                  objectFit="cover"
                />
              </div>
              <h3 className="py-0.5">{post.title}</h3>
              <p>{post.title}</p>
              <Link href={`/posts/${post.slug.current}`} passHref>
                <a className="flex items-center">
                  <span className="mr-1">
                    <FaNewspaper />
                  </span>
                  Post
                </a>
              </Link>
            </div>
          ))}
        </Grid>
      </Main>
      <Footer />
    </>
  )
}

export const getStaticProps = async () => {
  const query = groq`
    {
      "posts": *[_type == "post"]
    }`
  const data = await getClient(process.env.NODE_ENV === 'production').fetch(
    query
  )

  return {
    props: {
      posts: data.posts,
    },
    revalidate: 60 * 60, // one hour
  }
}
