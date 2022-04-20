import Head from 'next/head'
const {
  title,
  site_keywords,
  author,
  base_url,
  info_short,
} = require('../../lib/config.json')

export default function BasicMeta({ url }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={info_short} />
      <meta name="keywords" content={site_keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={base_url + url} />
      <link rel="manifest" href="/manifest.json" />
    </Head>
  )
}
