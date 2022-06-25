import { useForm } from '@formspree/react'
import Link from 'next/link'
import toast from 'react-hot-toast'

export default function Contact() {
  const [state, handleSubmit] = useForm('xqknbnwz')

  const notify = () => {
    toast.success('Danke für deine Nachricht!')
    state
  }

  return (
    <section id="contact" className="box my-0 py-12">
      <h2>Kontakt</h2>
      <div className="flex w-full flex-col md:flex-row">
        <div className="card rounded-box flex-1 place-items-center justify-center bg-base-300 p-2">
          Sende mir eine Email an:{' '}
          <Link href="mailto:hello@tobiaswild.de">hello@tobiaswild.de</Link>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="divider divider-vertical"></div>
        <div className="card rounded-box grid flex-1 place-items-center bg-base-300 p-2">
          <form
            name="Contact"
            method="POST"
            onSubmit={handleSubmit}
            className="w-full">
            <div className="form-control mx-auto w-full max-w-[80%]">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered mx-auto w-full"
              />
            </div>
            <div className="form-control mx-auto w-full max-w-[80%]">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered mx-auto w-full"
              />
            </div>
            <div className="form-control mx-auto w-full max-w-[80%]">
              <label className="label">
                <span className="label-text">Nachricht</span>
              </label>
              <textarea
                rows={5}
                className="input input-bordered mx-auto h-fit w-full"
              />
            </div>
            <div className="form-control mx-auto w-full max-w-[80%]">
              <button
                type="submit"
                onClick={notify}
                data-splitbee-event="Submit Contact Form"
                className="btn btn-primary mx-auto my-4">
                Senden!
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
