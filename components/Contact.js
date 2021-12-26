import { useState, useEffect } from 'react'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

export default function Contact() {
    const { t } = useTranslation('contact')

    const [success, setSuccess] = useState(false)

    useEffect(() => {
        if (window.location.search.includes('success=true')) {
            setSuccess(true)
        }
    }, [])

    return (
        <section id="contact">
            <h2>{t('title')}</h2>
            {success && <p className="success">Successfully submitted form!</p>}
            <form
                className="form"
                name="contact"
                method="POST"
                action="#contact?success=true"
                data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <p className="form-item">
                    <label htmlFor="name">{t('your-name')}</label>
                    <br />
                    <input type="text" id="name" name="name" />
                </p>
                <p className="form-item">
                    <label htmlFor="email">{t('your-email')}</label>
                    <br />
                    <input type="text" id="email" name="email" />
                </p>
                <p className="form-item">
                    <label htmlFor="message">{t('your-message')}</label>
                    <br />
                    <textarea id="message" name="message"></textarea>
                </p>
                <p>
                    <button type="submit" className="submit-btn">
                        Send
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
