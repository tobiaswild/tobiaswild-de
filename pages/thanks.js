import Head from 'next/head'
import Layout from 'Components/Layout'
import useTranslation from 'next-translate/useTranslation'

export default function More() {
    const { t } = useTranslation('contact')
    const title = `Tobias Wild | ${t('thanks')}`

    return (
        <Layout thanks>
            <Head>
                <title>{title}</title>
            </Head>
            <section id="thanks">
                <h2>{t('thanks')}</h2>
                <p>{t('thanks-text')}</p>
            </section>
        </Layout>
    )
}
