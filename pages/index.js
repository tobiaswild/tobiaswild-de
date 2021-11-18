import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import Layout from 'Components/layout'
import Achievements from 'Components/achievements'
import AboutMe from 'Components/about-me'
import Technologies from 'Components/technologies'
import Projects from 'Components/projects'

export default function Home() {
    return (
        <>
            <Head>
                <title>Tobias Wild | Portfolio</title>
                <meta
                    name="description"
                    content="I am a 16 years old student from Germany.
                        I love coding. I started learning HTML and CSS in mid
                        2018 when my school offered a differentiation course on
                        it. And from there on I taught my self JS. In mid-2021,
                        I took an online course on web development with ReactJS.
                        Then I started learning and using NextJS."
                />
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <Script src="/js/age.js" />
            <Layout home>
                <div className="rounded-lg bg-skin-accent py-3 my-6 text-center w-full">
                    Hey, I&apos;m a full-stack developer based in Germany!
                </div>
                <article className="pt-0">
                    <div className="float-right tablet:ml-6 rounded-full max-h-32 w-32 p-1 bg-gradient-to-br from-blue-700 to-pink-500">
                        <Image
                            src="/images/pexels-soumil-kumar-735911.jpg"
                            alt="headerImage"
                            height={120}
                            width={120}
                            className="rounded-full"
                        />
                    </div>
                    <h1 className="mt-4">Tobias Wild</h1>
                    <p>
                        I am a <span id="age">16</span> years old student from
                        Germany. I love coding. I started learning HTML and CSS
                        in mid 2018 when my school offered a differentiation
                        course on it. And from there on I taught my self JS. In
                        mid-2021, I took an online course on web development
                        with ReactJS. Then I started learning and using NextJS.
                    </p>
                </article>
                <Projects />
                <Technologies />
            </Layout>
        </>
    )
}
