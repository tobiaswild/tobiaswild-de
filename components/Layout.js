import Head from 'next/head'
import Navigation from './Navigation'
import Footer from './Footer'
import useTranslation from 'next-translate/useTranslation'
import OpengraphMeta from './meta/opengraph'
import TwitterMeta from './meta/twitter'
import FaviconMeta from './meta/favicon'

export default function Layout({ children }) {
    const { t } = useTranslation('common')
    const title = 'Tobias Wild | Portfolio'

    return (
        <>
            <Head>
                {/* HTML Meta Tags */}
                <title>{title}</title>
                <meta
                    name="description"
                    content={t('info-short', { age: 16 })}
                />
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link rel="manifest" href="/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="theme-color" content="#ffffff" />
                <FaviconMeta />
                <OpengraphMeta t={t} title={title} />
                <TwitterMeta t={t} title={title} />
            </Head>
            <Navigation />
            <div className="wrapper">
                <main id="top">{children}</main>
                <Footer />
            </div>
        </>
    )
}
