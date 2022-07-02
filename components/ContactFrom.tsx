import { useForm, ValidationError } from '@formspree/react'
import toast from 'react-hot-toast'

export default function ContactForm() {
  const [state, handleSubmit] = useForm('xqknbnwz')
  if (state.succeeded) {
    toast.success('Danke für die Nachricht!')
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name" className="label">
        <span className="label-text">Name</span>
      </label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Type here"
        className="input w-full max-w-xs"
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <label htmlFor="email" className="label">
        <span className="label-text">Email Address</span>
      </label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Type here"
        className="input w-full max-w-xs"
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message" className="label">
        <span className="label-text">Nachricht</span>
      </label>
      <textarea
        id="message"
        name="message"
        placeholder="Type here"
        className="textarea w-full"
        required
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        disabled={state.submitting}
        data-splitbee-event="Submit Contact Form"
        className="btn btn-primary mx-auto my-4">
        Senden!
      </button>
    </form>
  )
}
