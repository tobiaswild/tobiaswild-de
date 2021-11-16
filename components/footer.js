import Link from 'next/link'
import Script from 'next/script'

export default function Footer() {
    return (
        <>
            <footer className="py-6 text-center text-gray-500 text-sm">
                &copy; 2021{' '}
                <Link href="mailto:mail@tobiaswild.de">
                    <a className="hover:text-blue-900" target="_blank">
                        Tobias Wild
                    </a>
                </Link>
            </footer>
        </>
    )
}
