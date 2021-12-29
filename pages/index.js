import Image from 'next/image'
import Layout from 'Components/Layout'
import Technologies from 'Components/Technologies'
import Projects from 'Components/Projects'
import Contact from 'Components/Contact'
import useTranslation from 'next-translate/useTranslation'

export default function Home() {
    const { t } = useTranslation('common')

    return (
        <Layout home>
            <header id="top" className="header">
                <picture>
                    <source
                        srcSet="/images/big-light.png"
                        media="(prefers-color-scheme: light)"
                        className="rounded-xl"
                    />
                    <img src="/images/big-dark.png" className="rounded-xl" />
                </picture>
            </header>
            <div className="bar">{t('desc')}</div>
            <section id="info">
                <div className="info-img">
                    <Image
                        src="/images/me.png"
                        alt=""
                        height={150}
                        width={150}
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
    )
}
