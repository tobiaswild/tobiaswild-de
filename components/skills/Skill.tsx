import { urlFor } from 'Lib/sanity'
import MyImage from './MyImage'

export default function Skill({ skill }) {
  return (
    <li className="box m-2 flex h-28 w-28 flex-col items-center justify-end p-2">
      <span className="relative h-16 w-16 text-4xl">
        <MyImage
          src={urlFor(skill.image).url()}
          alt={skill.title}
          clsName={'rounded'}
          priority={false}
        />
      </span>
      {skill.title}
    </li>
  )
}
