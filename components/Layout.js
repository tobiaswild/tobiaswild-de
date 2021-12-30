import Script from 'next/script'
import Head from 'next/head'
import { Navigation, NavigationOther } from './Navigation'
import Footer from './Footer'
import useTranslation from 'next-translate/useTranslation'
import { FaArrowUp } from 'react-icons/fa'

export default function Layout({ children, home }) {
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
                {/* Favicon Icons */}
                <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
                <link
                    rel="apple-touch-icon"
                    sizes="57x57"
                    href="/icons/apple-icon-57x57.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="60x60"
                    href="/icons/apple-icon-60x60.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="72x72"
                    href="/icons/apple-icon-72x72.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="76x76"
                    href="/icons/apple-icon-76x76.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="114x114"
                    href="/icons/apple-icon-114x114.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="120x120"
                    href="/icons/apple-icon-120x120.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="144x144"
                    href="/icons/apple-icon-144x144.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="152x152"
                    href="/icons/apple-icon-152x152.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/icons/apple-icon-180x180.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href="/icons/android-icon-192x192.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/icons/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="96x96"
                    href="/icons/favicon-96x96.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/icons/favicon-16x16.png"
                />
                <link rel="manifest" href="/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta
                    name="msapplication-TileImage"
                    content="/icons/ms-icon-144x144.png"
                />
                <meta name="theme-color" content="#ffffff" />
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
            {home && <Navigation />}
            {!home && <NavigationOther />}
            <div className="wrapper">
                <main>{children}</main>
                <Footer />
            </div>
            <a href="javascript:goTo('top');" id="topBtn" title="Go to top">
                <FaArrowUp />
            </a>
            <Script src="/js/script.js" />
        </>
    )
}
