import Card from 'Components/Card'
import Footer from 'Components/Footer'
import Grid from 'Components/Grid'
import Main from 'Components/Main'
import Nav from 'Components/Nav'
import { urlFor } from 'Lib/sanity'
import { getClient } from 'Lib/sanity.server'
import { groq } from 'next-sanity'
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
            <Card
              key={post}
              image={urlFor(post.mainImage).url()}
              title={post.title}
              description={post.title}>
              <Link href={`/posts/${post.slug.current}`} passHref>
                <a
                  className="flex items-center"
                  data-splitbee-event="Posts Link"
                  data-splitbee-event-post={post.slug.current}>
                  <span className="mr-1">
                    <FaNewspaper />
                  </span>
                  Post
                </a>
              </Link>
            </Card>
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
