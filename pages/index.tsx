import Contact from 'Components/Contact'
import Layout from 'Components/Layout'
import BasicMeta from 'Components/meta/BasicMeta'
import OpenGraphMeta from 'Components/meta/OpenGraphMeta'
import TwitterCardMeta from 'Components/meta/TwitterCardMeta'
import Projects from 'Components/Projects'
import Technologies from 'Components/Technologies'
import { GitHub } from 'Lib/GitHub'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import big from 'Public/images/big.webp'

export default function Home({ pinnedItems, profilePic }) {
  const { t } = useTranslation('common')

  return (
    <Layout>
      <BasicMeta url="/" t={t} />
      <OpenGraphMeta url="/" t={t} />
      <TwitterCardMeta url="/" t={t} />
      <header>
        <Image
          src={big}
          alt="header-image"
          width={1012}
          height={506}
          className="rounded-xl"
        />
      </header>
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
      <Technologies />
      <Contact />
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const user = await GitHub()
  const pinnedItems = user.pinnedItems.edges.map((edge) => edge.node)

  return {
    props: {
      pinnedItems: pinnedItems,
      profilePic: user.avatarUrl,
    },
  }
}