import Head from 'next/head'
const {
  title,
  base_url,
  twitter_account,
  info_short,
} = require('../../lib/config.json')

export default function SocialMeta({ url }) {
  return (
    <Head>
      <meta property="og:site_name" content={title} />
      <meta property="og:url" content={base_url + url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={info_short} />
      <meta property="og:type" content="article" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content={twitter_account} />
      <meta property="twitter:url" content={base_url + url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={info_short} />
    </Head>
  )
}
