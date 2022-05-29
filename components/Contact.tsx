import { useForm } from '@formspree/react'
import toast from 'react-hot-toast'

export default function Contact() {
  const [state, handleSubmit] = useForm('xqknbnwz')

  state

  const notify = () => toast.success('Danke für deine Nachricht!')

  return (
    <section id="contact" className="box my-0 py-12">
      <h2>Kontakt</h2>
      <form
        className="mx-auto w-[90%] tablet:w-4/5"
        name="Contact"
        method="POST"
        onSubmit={handleSubmit}>
        <div className="form-item">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="Name" required />
        </div>
        <div className="form-item">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="Email" required />
        </div>
        <div className="form-item">
          <label htmlFor="message">Nachricht</label>
          <textarea id="message" name="Message" rows={5} required />
        </div>
        <div>
          <button
            type="submit"
            onClick={notify}
            className="mt-4 w-full rounded-xl border-none bg-accent p-1 font-bold">
            Senden!
          </button>
        </div>
      </form>
    </section>
  )
}
