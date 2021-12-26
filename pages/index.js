import Head from 'next/head'
import Image from 'next/image'
import Layout from 'Components/Layout'
import Technologies from 'Components/Technologies'
import Projects from 'Components/Projects'
import Contact from 'Components/Contact'
import useTranslation from 'next-translate/useTranslation'

export default function Home() {
    const { t } = useTranslation('common')

    const title = 'Tobias Wild | Portfolio'

    return (
        <>
            <Head>
                {/* HTML Meta Tags */}
                <title>{title}</title>
                <meta name="description" content={t('info-short')} />
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                {/* Facebook Meta Tags */}
                <meta property="og:url" content="https://tobiaswild.de/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={t('info-short')} />
                <meta
                    property="og:image"
                    content="https://tobiaswild.de/images/preview.png"
                />
                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="tobiaswild.de" />
                <meta property="twitter:url" content="https://tobiaswild.de/" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={t('info-short')} />
                <meta
                    name="twitter:image"
                    content="https://tobiaswild.de/images/preview.png"
                />
            </Head>
            <Layout home>
                <header id="top" className="header">
                    <picture>
                        <source
                            srcSet="/images/big-light.png"
                            media="(prefers-color-scheme: light)"
                            className="rounded-xl"
                        />
                        <img
                            src="/images/big-dark.png"
                            className="rounded-xl"
                        />
                    </picture>
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
