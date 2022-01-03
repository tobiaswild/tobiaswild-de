import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

export default function Contact() {
    const { t } = useTranslation('contact')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        if (window.location.search.includes('success=true')) {
            setSuccess(true)
        }
    }, [])

    let [isOpen, setIsOpen] = useState(true)

    function closeModal() {
        setIsOpen(false)
    }

    return (
        <section id="contact">
            {success && (
                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog
                        as="div"
                        className="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-50"
                        onClose={closeModal}>
                        <div className="min-h-screen px-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0">
                                <Dialog.Overlay className="fixed inset-0" />
                            </Transition.Child>
                            <span
                                className="inline-block h-screen align-middle"
                                aria-hidden="true">
                                &#8203;
                            </span>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95">
                                <div className="box inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all">
                                    <Dialog.Title as="h3" className="leading-6">
                                        {t('thanks')}
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm ">
                                            {t('thanks-text')}
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="box inline-flex justify-center px-4 py-2 text-sm font-medium bg-accent border-none hover:bg-opacity-50"
                                            onClick={closeModal}>
                                            Okay.
                                        </button>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition>
            )}
            <h2>{t('title')}</h2>
            <form
                className="form"
                name="contact"
                method="POST"
                action="/?success=true"
                data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <p className="form-item">
                    <label htmlFor="name">{t('your-name')}</label>
                    <br />
                    <input type="text" id="name" name="name" required />
                </p>
                <p className="form-item">
                    <label htmlFor="email">{t('your-email')}</label>
                    <br />
                    <input type="text" id="email" name="email" required />
                </p>
                <p className="form-item">
                    <label htmlFor="message">{t('your-message')}</label>
                    <br />
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
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
