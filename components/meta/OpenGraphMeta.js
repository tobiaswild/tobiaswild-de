import Head from 'next/head'
const { title, base_url } = require('../../lib/config.json')

export default function OpenGraphMeta({ t, url }) {
    return (
        <Head>
            <meta property="og:site_name" content={title} />
            <meta property="og:url" content={base_url + url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={t('info-short')} />
            <meta property="og:type" content="article" />
        </Head>
    )
}
