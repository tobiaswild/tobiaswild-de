import useTranslation from 'next-translate/useTranslation'

export default function Contact() {
    const { t } = useTranslation('contact')

    return (
        <section id="contact">
            <h2 className="section-header">{t('title')}</h2>
            <form
                className="contactform"
                name="contact"
                method="POST"
                data-netlify="true">
                <fieldset>
                    <div className="form-control">
                        <label htmlFor="name">{t('your-name')}</label>
                        <input
                            type="name"
                            id="name"
                            placeholder={t('enter-your-name')}
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label htmlFor="email">{t('your-email')}</label>
                        <input
                            type="email"
                            id="email"
                            placeholder={t('enter-your-email')}
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label htmlFor="message">{t('your-message')}</label>
                        <textarea
                            id="message"
                            cols="30"
                            rows="10"
                            placeholder={t('enter-your-message')}
                            required></textarea>
                    </div>
                    <input
                        type="submit"
                        value="Senden!"
                        className="submit-btn"
                    />
                </fieldset>
            </form>
        </section>
    )
}
