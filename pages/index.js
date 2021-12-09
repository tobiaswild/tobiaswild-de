import Head from 'next/head'
import Image from 'next/image'
import Layout from 'Components/Layout'
import Technologies from 'Components/Technologies'
import Projects from 'Components/Projects'
import Contact from 'Components/Contact'
import useTranslation from 'next-translate/useTranslation'

export default function Home() {
    const { t } = useTranslation('common')

    return (
        <>
            <Head>
                <title>Tobias Wild | Portfolio</title>
                <meta
                    name="description"
                    content="I am a 16 years old student from Germany and I love coding."
                />
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <Layout home>
                <header id="top" className="header">
                    <Image
                        src="/images/me.png"
                        alt="The Header Image"
                        layout="responsive"
                        height={350}
                        width={800}
                        priority
                    />
                </header>
                <div className="bar">{t('desc')}</div>
                <section id="info">
                    <div>
                        <Image
                            src="/images/me.png"
                            alt="Profile picture"
                            height={120}
                            width={120}
                            className="rounded-full"
                            priority
                        />
                    </div>
                    <h1>Tobias Wild</h1>
                    <p>{t('info', { age: 16 })}</p>
                </section>
                <Projects />
                <Technologies />
                <Contact />
            </Layout>
        </>
    )
}
