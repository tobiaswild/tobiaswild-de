import Link from "next/link"
import { PropsWithChildren } from "react"

interface Props {
  link: URL | string
  blank?: boolean
}

export function LinkButton(props: PropsWithChildren<Props>) {
  return (
    <Link href={props.link} passHref>
      <a
        target={props.blank === true ? "_blank" : ""}
        className="block w-fit rounded-full bg-blue-200 py-3 px-6 text-center transition hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-300"
      >
        <span className="block text-sm font-semibold text-blue-900">
          {props.children}
        </span>
      </a>
    </Link>
  )
}

export function FooterLink(props: PropsWithChildren<Props>) {
  return (
    <Link href={props.link} passHref>
      <a
        target={props.blank === true ? "_blank" : ""}
        className="text-primery m-1 p-1 font-medium"
      >
        {props.children}
      </a>
    </Link>
  )
}

export function BigFooterLink(props: PropsWithChildren<Props>) {
  return (
    <Link href={props.link} passHref>
      <a
        target={props.blank === true ? "_blank" : ""}
        className="text-primery m-1 p-1 text-2xl font-medium"
      >
        {props.children}
      </a>
    </Link>
  )
}
