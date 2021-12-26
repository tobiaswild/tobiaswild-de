import { useState, useEffect } from 'react'
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
            {success && (
                <p style={{ color: 'green' }}>Successfully submitted form!</p>
            )}

            <form
                name="contact"
                method="POST"
                action="/?success=true"
                data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <p>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" />
                </p>
                <p>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" />
                </p>
                <p>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message"></textarea>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
        </section>
    )
}
