import Script from 'next/script'

export default function Footer() {
    return (
        <>
            <Script src="/js/age.js" />
            <footer className="mt-4 mb-12">
                <hr />
                <p>I&apos;am currently <span id="age"/> years old</p>
            </footer>
        </>
    )
}
