import { Disclosure } from '@headlessui/react'
import { FaArrowDown } from 'react-icons/fa'

const faq = [
    {
        title: 'test',
        message: 'just a test.',
    },
    {
        title: 'test',
        message: 'just a test.',
    },
    {
        title: 'test',
        message: 'just a test.',
    },
    {
        title: 'test',
        message: 'just a test.',
    },
    {
        title: 'test',
        message: 'just a test.',
    },
]

export default function AboutMe() {
    return (
        <section id="faq">
            <h2>FAQ</h2>
            {faq.map((card, index) => (
                <Disclosure key={index} as="div" className="mt-2">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="faq-button">
                                <span>
                                    <span>{card.title}</span>
                                </span>
                                <FaArrowDown
                                    className={`${
                                        open
                                            ? 'transform rotate-180 transition-transform'
                                            : ''
                                    } faq-icon`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="faq-panel">
                                {card.message}
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            ))}
        </section>
    )
}
