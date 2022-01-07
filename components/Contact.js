import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'

export default function Contact() {
    const { t } = useTranslation('contact')
    let router = useRouter()

    return (
        <section id="contact">
            <h2>{t('title')}</h2>
            <form
                className="form"
                name="contact"
                action={`${router.locale}/thanks`}
                method="POST"
                data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <p className="form-item">
                    <label htmlFor="name">{t('name')}</label>
                    <br />
                    <input type="text" id="name" name="name" required />
                </p>
                <p className="form-item">
                    <label htmlFor="email">{t('email')}</label>
                    <br />
                    <input type="text" id="email" name="email" required />
                </p>
                {/* <p className="form-item">
                    <label htmlFor="topic">{t('topic')}</label>
                    <br />
                    <select name="topic" id="topic" required>
                        <option value={t('topics.general').toLocaleLowerCase()}>
                            {t('topics.general')}
                        </option>
                        <option value={t('topics.other').toLocaleLowerCase()}>
                            {t('topics.other')}
                        </option>
                    </select>
                </p> */}
                <p className="form-item">
                    <label htmlFor="message">{t('message')}</label>
                    <br />
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
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
