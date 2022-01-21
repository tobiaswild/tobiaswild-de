import Head from 'next/head'
const { title, base_url } = require('../../lib/config.json')

export default function OpenGraphMeta({ url, t, ogImageUrl }) {
    return (
        <Head>
            <meta property="og:site_name" content={title} />
            <meta property="og:url" content={base_url + url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={t('common:info-short')} />
            <meta property="og:image" content={ogImageUrl} />
            <meta
                property="og:image:alt"
                content={base_url + '/og_image.png'}
            />
            <meta property="og:type" content="article" />
        </Head>
    )
}
