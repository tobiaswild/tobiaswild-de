import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

export default function Contact() {
    const { t } = useTranslation('contact')

    return (
        <section id="contact">
            <h2>{t('title')}</h2>
            <form
                name="contact"
                action="/thanks"
                method="POST"
                data-netlify="true">
                <fieldset>
                    <div className="form-item">
                        <input type="text" name="name" required />
                        <label htmlFor="name" className="label">
                            <span className="content">{t('your-name')}</span>
                        </label>
                    </div>
                    <div className="form-item">
                        <input type="email" name="email" required />
                        <label htmlFor="email" className="label">
                            <span className="content">{t('your-email')}</span>
                        </label>
                    </div>
                    <div className="form-item">
                        <input type="text" name="message" required />
                        <label htmlFor="message" className="label">
                            <span className="content">{t('your-message')}</span>
                        </label>
                    </div>
                    <input
                        type="submit"
                        value={t('send')}
                        className="submit-btn"
                    />
                    <p className="or-email">
                        {t('or-email')}{' '}
                        <Link href="mailto:hello@tobiaswild.de">
                            <a target="_blank">hello@tobiaswild.de</a>
                        </Link>
                    </p>
                </fieldset>
            </form>
        </section>
    )
}
