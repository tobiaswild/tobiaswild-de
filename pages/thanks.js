import Layout from 'Components/Layout'
import useTranslation from 'next-translate/useTranslation'

export default function Thanks() {
    const { t } = useTranslation('contact')
    return (
        <Layout>
            <h2>{t('thanks')}</h2>
            <p>{t('thanks-text')}</p>
        </Layout>
    )
}
