import Post from './Post'

export default function Posts({ posts }) {
  return (
    <section id="posts">
      <h2>Posts</h2>
      <div className="mx-auto grid grid-flow-row gap-4 tablet:grid-cols-2">
        {posts.map((post, key) => {
          return <Post key={key} post={post} />
        })}
      </div>
    </section>
  )
}
