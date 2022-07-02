import Link from 'next/link'
import ContactForm from './ContactFrom'

export default function Contact() {
  return (
    <section id="contact" className="box my-0 py-12">
      <h2>Kontakt</h2>
      <div className="flex w-full flex-col md:flex-row">
        <div className="card rounded-box flex-1 place-items-center justify-center bg-base-300 p-2">
          Sende mir eine Email an:{' '}
          <Link
            href="mailto:hello@tobiaswild.de"
            data-splitbee-event="Contact Email Link">
            hello@tobiaswild.de
          </Link>
        </div>
        <div className="divider divider-vertical md:divider-horizontal"></div>
        <div className="card rounded-box grid flex-1 place-items-center bg-base-300 p-2">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
