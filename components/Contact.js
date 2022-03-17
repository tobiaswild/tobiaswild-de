import { useForm } from '@formspree/react'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'

export default function Contact() {
  const { t } = useTranslation('common')

  const [state, handleSubmit] = useForm('xqknbnwz')

  return (
    <section id="contact">
      <h2>{t('contact.title')}</h2>
      {state.succeeded === true ? (
        <p className="text-center text-green-500">Thanks for you Message!</p>
      ) : (
        <p></p>
      )}
      <form
        className="form"
        name="Contact"
        method="POST"
        onSubmit={handleSubmit}>
        <div className="form-item">
          <label htmlFor="name">{t('contact.name')}</label>
          <input type="text" id="name" name="Name" required />
        </div>
        <div className="form-item">
          <label htmlFor="email">{t('contact.email')}</label>
          <input type="text" id="email" name="Email" required />
        </div>
        <div className="form-item">
          <label htmlFor="message">{t('contact.message')}</label>
          <textarea id="message" name="Message" rows={5} required />
        </div>
        <div>
          <button type="submit" className="submit-btn">
            {t('contact.send')}
          </button>
        </div>
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
