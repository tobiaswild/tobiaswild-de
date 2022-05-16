import { useForm } from '@formspree/react'
import Link from 'next/link'
/*import toast, { Toaster } from 'react-hot-toast';*/

export default function Contact() {
  const [state, handleSubmit] = useForm('xqknbnwz')

  /*const notify = () => toast('Here is your toast.');*/

  return (
    <section id="contact" className="box my-0 py-12">
      /*<Toaster />*/
      <h2>Kontakt</h2>
      /*{state.succeeded === true ? (
        {notify}
      ) : null}*/
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
            className="mt-4 w-full rounded-xl border-none bg-accent p-1 font-bold">
            Senden!
          </button>
        </div>
      </form>
      <p className="pt-2 text-center tablet:pt-5">
        Oder schreibe mir eine Email an:{' '}
        <Link href="mailto:hello@tobiaswild.de">
          <a target="_blank" className="decoration-accent">
            hello@tobiaswild.de
          </a>
        </Link>
      </p>
    </section>
  )
}
