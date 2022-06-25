import AboutMe from 'Components/AboutMe'
import Contact from 'Components/Contact'
import Footer from 'Components/Footer'
import Main from 'Components/Main'
import BasicMeta from 'Components/meta/BasicMeta'
import SocialMeta from 'Components/meta/SocialMeta'
import Nav from 'Components/Nav'
import Projects from 'Components/projects'
import Skills from 'Components/Skills'
import { getClient } from 'Lib/sanity.server'
import { groq } from 'next-sanity'
import { Toaster } from 'react-hot-toast'

export default function Home({ skills }) {
  return (
    <>
      <Nav />
      <BasicMeta url="/" />
      <SocialMeta url="/" />
      <Main>
        <AboutMe />
        <Projects />
        <Skills skills={skills} />
        <Contact />
      </Main>
      <Footer />
      <Toaster position="bottom-center" />
    </>
  )
}

export const getStaticProps = async () => {
  const query = groq`
    {
      "skills": *[_type == "skill"],
    }`
  const data = await getClient(process.env.NODE_ENV === 'production').fetch(
    query
  )

  return {
    props: {
      skills: data.skills,
    },
    revalidate: 60 * 60 * 24, // 24h
  }
}
