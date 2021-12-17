import useTranslation from 'next-translate/useTranslation'

export default function Certificates() {
    const { t } = useTranslation('certificates')

    const data = [{ id: 'zdi-webdev' }]

    return (
        <section id="certificates">
            <h2>{t('title')}</h2>
            <ul>
                {data.map((card, index) => (
                    <li key={index}>
                        <h3>{t(`${card.id}.date`)}</h3>
                        <p>{t(`${card.id}.text`)}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}
