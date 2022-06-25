import Image from 'next/image'
import Githublink from './GithubLink'
import Weblink from './WebLink'

export default function Project({ item }) {
  return (
    <div className="card shadow-xl">
      <div className="relative aspect-video">
        <Image
          layout="fill"
          src={item.openGraphImageUrl}
          alt={item.name}
          className="absolute"
          objectFit="cover"
        />
      </div>
      <div className="card-body">
        <h3 className="card-title">{item.name}</h3>
        <p>{item.description}</p>
        <div className="card-actions">
          <Githublink url={item.url} name={item.name} />
          <Weblink url={item.homepageUrl} name={item.name} />
        </div>
      </div>
    </div>
  )
}
