import FaviconMeta from 'Components/meta/FaviconMeta'
import Head from 'next/head'
import 'Styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          data-respect-dnt
          data-no-cookie
          async
          data-api="/_hive"
          src="/bee.js"></script>
        <FaviconMeta />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
