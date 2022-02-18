import Head from 'next/head'
const { title, base_url, twitter_account } = require('../../lib/config.json')

export default function TwitterCardMeta({ t, url }) {
    return (
        <Head>
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:site" content={twitter_account} />
            <meta property="twitter:url" content={base_url + url} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={t('info-short')} />
        </Head>
    )
}
