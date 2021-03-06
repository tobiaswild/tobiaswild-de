import Contact from 'Components/Contact'
import Layout from 'Components/Layout'
import BasicMeta from 'Components/meta/BasicMeta'
import SocialMeta from 'Components/meta/SocialMeta'
import MyImage from 'Components/MyImage'
import Projects from 'Components/Projects'
import Skills from 'Components/Skills'
import { GitHub } from 'Lib/GitHub'
import { getClient } from 'Lib/sanity.server'
import { groq } from 'next-sanity'
import { Toaster } from 'react-hot-toast'

export default function Home({ pinnedItems, skills, profilePic }) {
  return (
    <Layout scroll>
      <BasicMeta url="/" />
      <SocialMeta url="/" />
      <div className="my-4 w-full rounded-xl bg-accent py-3 text-center">
        Hey, ich bin ein Schüler und Programmierer aus Deutschland.
      </div>
      <section id="pt-0">
        <div className="relative float-right ml-1 mb-1 h-40 w-40 rounded-full bg-black p-1">
          <MyImage
            src={profilePic}
            alt={''}
            clsName={'rounded-full'}
            priority
          />
        </div>
        <h1 className="font-Space-Grotesk text-3xl font-black tablet:text-4xl">
          Tobias Wild
        </h1>
        <p>
          Ich bin ein 17 Jahre alter Schüler aus Deutschland und ich liebe das
          Programmieren. Ich habe Mitte 2018 angefangen, HTML und CSS zu lernen.
          Und von da an habe ich mir selbst für JavaScript beigebracht. Mitte
          2021 habe ich an einem Online-Kurs über Webentwicklung mit ReactJS
          teilgenommen. Danach habe ich angefangen, NextJS zu lernen und zu
          benutzen. Damit habe ich dann auch diese Webseite programmiert.
        </p>
      </section>
      <Projects pinnedItems={pinnedItems} />
      <Skills skills={skills} />
      <Contact />
      <Toaster position="bottom-center" />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const user = await GitHub()
  const pinnedItems = user.pinnedItems.edges.map((edge) => edge.node)

  const query = groq`
    {
      "skills": *[_type == "skill"],
    }`
  const data = await getClient(process.env.NODE_ENV === 'production').fetch(
    query
  )

  return {
    props: {
      pinnedItems: pinnedItems,
      profilePic: user.avatarUrl,
      skills: data.skills,
    },
    revalidate: 60 * 60, // one hour
  }
}
