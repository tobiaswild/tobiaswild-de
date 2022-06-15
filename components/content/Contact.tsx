import { useForm } from '@formspree/react'
import styles from 'Styles/Contact.module.css'

export default function Contact() {
  const [state, handleSubmit] = useForm('xqknbnwz')

  return (
    <section id="contact" className="wrapper section">
      <h2 className="section-header">Contact me</h2>
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
        <div className={styles.form_item}>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="Name" required />
        </div>
        <div className={styles.form_item}>
          <label htmlFor="email">Your Email</label>
          <input type="text" id="email" name="Email" required />
        </div>
        <div className={styles.form_item}>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="Message" rows={5} required />
        </div>
        <div>
          <button
            type="submit"
            className="bg-primery mt-4 w-full rounded-xl border-none p-1 font-bold text-white">
            Send!
          </button>
        </div>
      </form>
    </section>
  )
}
