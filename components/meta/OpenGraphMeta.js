import Head from 'next/head'
const { site_title, title, base_url } = require('../../lib/config.json')

export default function OpenGraphMeta({ url, t, ogImageUrl }) {
    return (
        <Head>
            <meta property="og:site_name" content={site_title} />
            <meta property="og:url" content={base_url + url} />
            <meta property="og:title" content={title} />
            <meta
                property="og:description"
                content={t('common:info-short', { age: 16 })}
            />
            <meta property="og:image" content={ogImageUrl} />
            <meta property="og:type" content="article" />
        </Head>
    )
}
