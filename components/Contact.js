import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'

export default function Contact() {
    const { t } = useTranslation('common')

    return (
        <section id="contact">
            <h2>{t('contact.title')}</h2>
            <h3 className="text-red-500">This form is currently not working</h3>
            <form
                className="form"
                name="contact"
                method="POST"
                data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <p className="form-item">
                    <label htmlFor="name">{t('contact.name')}</label>
                    <br />
                    <input type="text" id="name" name="name" required />
                </p>
                <p className="form-item">
                    <label htmlFor="email">{t('contact.email')}</label>
                    <br />
                    <input type="text" id="email" name="email" required />
                </p>
                {/* <p className="form-item">
                    <label htmlFor="topic">{t('contact.topic')}</label>
                    <br />
                    <select name="topic" id="topic" required>
                        <option value={t('contact.topics.general').toLocaleLowerCase()}>
                            {t('contact.topics.general')}
                        </option>
                        <option value={t('contact.topics.other').toLocaleLowerCase()}>
                            {t('contact.topics.other')}
                        </option>
                    </select>
                </p> */}
                <p className="form-item">
                    <label htmlFor="message">{t('contact.message')}</label>
                    <br />
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required></textarea>
                </p>
                <p>
                    <button type="submit" className="submit-btn">
                        {t('contact.send')}
                    </button>
                </p>
            </form>
            <p className="or-email">
                {t('contact.or-email')}{' '}
                <Link href="mailto:hello@tobiaswild.de">
                    <a target="_blank">hello@tobiaswild.de</a>
                </Link>
            </p>
        </section>
    )
}
