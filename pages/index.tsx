import Contact from 'Components/Contact'
import Layout from 'Components/Layout'
import BasicMeta from 'Components/meta/BasicMeta'
import OpenGraphMeta from 'Components/meta/OpenGraphMeta'
import TwitterCardMeta from 'Components/meta/TwitterCardMeta'
import Projects from 'Components/Projects'
import Skills from 'Components/Skills'
import { GitHub } from 'Lib/GitHub'
import { getClient } from 'Lib/sanity.server'
import { groq } from 'next-sanity'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'

export default function Home({ pinnedItems, skills, profilePic }) {
  const { t } = useTranslation('common')

  return (
    <Layout>
      <BasicMeta url="/" t={t} />
      <OpenGraphMeta url="/" t={t} />
      <TwitterCardMeta url="/" t={t} />
      <div className="bar">{t('desc')}</div>
      <section id="info">
        <div className="info-img">
          <Image
            src={profilePic}
            alt=""
            height={150}
            width={150}
            className="rounded-full"
            priority
          />
        </div>
        <h1>Tobias Wild</h1>
        <p>{t('info')}</p>
      </section>
      <Projects pinnedItems={pinnedItems} />
      <Skills skills={skills} />
      <Contact />
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
  const data = await getClient().fetch(query)

  return {
    props: {
      pinnedItems: pinnedItems,
      profilePic: user.avatarUrl,
      skills: data.skills,
    },
    revalidate: 60 * 60, // one hour
  }
}
