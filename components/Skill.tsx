import { urlFor } from 'Lib/urlFor'
import Image from 'next/image'

export default function Skill({ skill }) {
  return (
    <li className="box m-2 flex h-28 w-28 flex-col items-center justify-end p-2">
      <span className="relative h-16 w-16 text-4xl">
        <Image
          layout="fill"
          className={`absolute object-cover`}
          src={urlFor(skill.image).url()}
          alt={skill.title}
        />
      </span>
      {skill.title}
    </li>
  )
}
