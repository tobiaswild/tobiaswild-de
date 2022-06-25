import fetcher from 'Lib/fetcher'
import { UserInfo } from 'Lib/types'
import Image from 'next/image'
import useSWR from 'swr'

export default function AboutMe() {
  const { data } = useSWR<UserInfo>('/api/github-info', fetcher)

  return (
    <section id="pt-0">
      <div className="relative float-right ml-1 mb-1 h-40 w-40 rounded-full bg-black p-1">
        {data?.avatarUrl ? (
          <Image
            layout="fill"
            src={data?.avatarUrl.toString()}
            alt={data?.name}
            className="rounded-full"
          />
        ) : null}
      </div>
      <h1>{data?.name}</h1>
      <p>
        Ich bin ein 17 Jahre alter Schüler aus Deutschland und ich liebe das
        Programmieren. Ich habe Mitte 2018 angefangen, HTML und CSS zu lernen.
        Und von da an habe ich mir selbst für JavaScript beigebracht. Mitte 2021
        habe ich an einem Online-Kurs über Webentwicklung mit ReactJS
        teilgenommen. Danach habe ich angefangen, NextJS zu lernen und zu
        benutzen. Damit habe ich dann auch diese Webseite programmiert.
      </p>
    </section>
  )
}
