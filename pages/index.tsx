import About from 'Components/content/About'
import Contact from 'Components/content/Contact'
import NewSkills from 'Components/content/NewSkills'
import Projects from 'Components/content/Projects'
import Skills from 'Components/content/Skills'
import Footer from 'Components/design/Footer'
import HomeNavigation from 'Components/design/HomeNavigation'
import { StartHeader } from 'Components/design/StartHeader'
import groq from 'groq'
import { GitHub } from 'lib/GitHub'
import SanityClient from 'lib/SanityClient'
import { NextSeo } from 'next-seo'
import { Hompage } from 'Types/homepage'
import { Project } from 'Types/project'
import { Skill } from 'Types/skill'

interface Props {
  homepage: Hompage
  profilePic: URL
  skills: Skill[]
  projects: Project[]
}

export default function Home({
  homepage,
  projects,
  skills,
  profilePic,
}: Props) {
  const bestSkills = []
  skills.forEach((element) => {
    if (element.current) {
      bestSkills.push(element)
    }
  })

  return (
    <>
      <NextSeo
        title={homepage.name}
        titleTemplate={'%s'}
        // openGraph={{
        //   images: [getOpenGraphImage('Timo Lins')],
        // }}
        twitter={{
          handle: '@timolins',
          cardType: 'summary_large_image',
        }}
        description="Hey I'm Timo! I design and build digital products. Illustrating and film making are also my passion."
      />
      <HomeNavigation />
      <StartHeader
        sImage={homepage.image}
        big={homepage.name}
        small={homepage.info}
      />
      <main>
        <About homepage={homepage} profilePic={profilePic} />
        <Skills />
        <NewSkills skills={skills} />
        <NewSkills skills={bestSkills} />
        <Projects projects={projects} />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const query = groq`
    {
      "homepage": *[_type == "homepage"],
      "skills": *[_type == "skill"] | order(index),
    }`

  const data = await SanityClient.fetch(query)
  const user = await GitHub()
  const pinnedItems = user.pinnedItems.edges.map((edge) => edge.node)

  return {
    props: {
      homepage: data.homepage[0],
      skills: data.skills,
      projects: pinnedItems,
      profilePic: user.avatarUrl,
    },
    revalidate: 24 * 60 * 60,
  }
}
