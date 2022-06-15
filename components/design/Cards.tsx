import { PropsWithChildren } from "react"
import { LinkButton } from "Components/design/Button"
import { NormalImage, SanityImage } from "./Images"

interface PostProps {
  imageUrl: string
  title: string
  preview: string
  link: URL
}

export function PostCard(props: PostProps) {
  return (
    <div className="group space-x-6 rounded-xl bg-gray-200 bg-opacity-50 p-1 shadow-xl hover:rounded-2xl dark:bg-gray-800 sm:flex">
      <div className="relative h-56 w-full object-cover object-top transition duration-500 group-hover:rounded-xl sm:h-full sm:w-5/12">
        <SanityImage
          imageUrl={props.imageUrl}
          alt={props.title}
          clsName={"rounded-lg"}
        />
      </div>
      <div className="p-5 pl-0 sm:w-7/12">
        <div className="space-y-2">
          <div className="space-y-4">
            <h4 className="text-2xl font-semibold">{props.title}</h4>
            <p>{props.preview}</p>
          </div>
          <div className="space-y-4">
            <LinkButton link={`/post/${props.link}`}>Go to the Post</LinkButton>
          </div>
        </div>
      </div>
    </div>
  )
}

interface ProjectProps {
  imageUrl: URL
  title: string
  preview: string
  projectUrl: URL
  websiteUrl: URL
}

export function ProjectCard(props: ProjectProps) {
  return (
    <div className="group space-y-4 rounded-xl bg-gray-200 bg-opacity-50 p-1 shadow-xl hover:rounded-2xl dark:bg-gray-800">
      <div className="relative h-64 w-full transition duration-500 ">
        <NormalImage
          imageUrl={props.imageUrl}
          alt={props.title}
          clsName={"rounded-xl group-hover:rounded-2xl"}
        />
      </div>
      <div className="mx-auto w-11/12 space-y-2">
        <div className="space-y-4">
          <h4 className="text-2xl font-semibold text-gray-700 dark:text-white">
            {props.title}
          </h4>
          <p className="text-gray-600">{props.preview}</p>
        </div>
        <div className="flex flex-row">
          <LinkButton link={props.projectUrl} blank>
            Go to the Project
          </LinkButton>
          {props.websiteUrl.toString() === "" ? (
            ""
          ) : (
            <LinkButton link={props.websiteUrl} blank>
              Go to the Website
            </LinkButton>
          )}
        </div>
      </div>
    </div>
  )
}

interface GridProps {}

export function CardGrid(props: PropsWithChildren<GridProps>) {
  return (
    <div className="grid gap-4 p-4 sm:grid-cols-2 xl:grid-cols-3">
      {props.children}
    </div>
  )
}
