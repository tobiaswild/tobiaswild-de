import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

export default function Contact() {
    const { t } = useTranslation('contact')

    return (
        <section id="contact">
            <h2>{t('title')}</h2>
            <form
                className="form"
                name="contact"
                method="POST"
                action="/thanks"
                data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <p className="form-item">
                    <label htmlFor="name">{t('your-name')}</label>
                    <br />
                    <input type="text" id="name" name="name" required />
                </p>
                <p className="form-item">
                    <label htmlFor="email">{t('your-email')}</label>
                    <br />
                    <input type="text" id="email" name="email" required />
                </p>
                <p className="form-item">
                    <label htmlFor="message">{t('your-message')}</label>
                    <br />
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required></textarea>
                </p>
                <p>
                    <button type="submit" className="submit-btn">
                        {t('send')}
                    </button>
                </p>
            </form>
            <p className="or-email">
                {t('or-email')}{' '}
                <Link href="mailto:hello@tobiaswild.de">
                    <a target="_blank">hello@tobiaswild.de</a>
                </Link>
            </p>
        </section>
    )
}
