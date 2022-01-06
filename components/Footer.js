import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="footer">
            &copy; {new Date().getFullYear()}{' '}
            <Link href="https://github.com/tobiaswild">Tobias Wild</Link>. No
            rights reserved.
            <br />
            This Website was created with{' '}
            <Link href="https://nextjs.org/">
                <a target="_blank">Next.js</a>
            </Link>{' '}
            and is hosted on{' '}
            <Link href="https://www.netlify.com/">
                <a target="_blank">Netlify</a>
            </Link>
            .
        </footer>
    )
}
