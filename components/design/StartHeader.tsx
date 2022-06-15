import { SanityImage } from "./Images"

interface Props {
  sImage: string
  alt?: string
  big: string
  small: string
}

export function StartHeader(props: Props) {
  return (
    <header className="relative h-screen" id="top">
      <div className="absolute z-10 h-full w-full bg-blue-900 bg-opacity-40"></div>
      <SanityImage imageUrl={props.sImage} alt={props.alt} />
      <div className="absolute z-20 mx-0 flex h-full w-full flex-col items-center justify-center text-white">
        <h1 className="mb-2 text-5xl font-bold">{props.big}</h1>
        <p>{props.small}</p>
      </div>
    </header>
  )
}
