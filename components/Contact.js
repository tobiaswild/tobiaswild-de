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
                autoComplete="off"
                method="POST"
                data-netlify="true">
                <fieldset>
                    <div className="form-item">
                        <input
                            type="text"
                            name="name"
                            autoComplete="off"
                            required
                        />
                        <label htmlFor="name" className="label">
                            <span className="content">{t('your-name')}</span>
                        </label>
                    </div>
                    <div className="form-item">
                        <input
                            type="email"
                            name="email"
                            autoComplete="off"
                            required
                        />
                        <label htmlFor="email" className="label">
                            <span className="content">{t('your-email')}</span>
                        </label>
                    </div>
                    <div className="form-item">
                        {/* USE TEXTAREA INSTEAD OF INPUT HERE */}
                        <input
                            type="text"
                            name="message"
                            autoComplete="off"
                            required
                        />
                        <label htmlFor="message" className="label">
                            <span className="content">{t('your-message')}</span>
                        </label>
                    </div>
                    <input
                        type="submit"
                        value="Senden!"
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
