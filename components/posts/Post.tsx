import { urlFor } from 'Lib/sanity'
import MyImage from '../MyImage'
import PostLink from './PostLink'

export default function Post({ post }) {
  return (
    <div className="box p-3">
      <div className="relative aspect-video">
        <MyImage
          src={urlFor(post.mainImage).url()}
          alt={post.title}
          clsName={'rounded'}
          priority={false}
        />
      </div>
      <h3 className="py-0.5">{post.title}</h3>
      <p>{post.title}</p>
      <PostLink slug={post.slug.current} />
    </div>
  )
}
