import FaviconMeta from 'Components/meta/FaviconMeta'
import Head from 'next/head'
import 'Styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script async src="https://cdn.splitbee.io/sb.js" />
        <FaviconMeta />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
