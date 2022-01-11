import Head from 'next/head'
import FaviconMeta from './FaviconMeta'
const {
    site_title,
    site_keywords,
    author,
    base_url,
} = require('../../lib/config.json')

export default function BasicMeta({ url, t }) {
    return (
        <Head>
            <title>{site_title}</title>
            <meta
                name="description"
                content={t('common:info-short', { age: 16 })}
            />
            <meta name="keywords" content={site_keywords} />
            <meta name="author" content={author} />
            <link rel="canonical" href={base_url + url} />
            <link rel="manifest" href="/manifest.json" />
            <FaviconMeta />
        </Head>
    )
}
