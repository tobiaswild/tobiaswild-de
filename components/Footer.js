import Link from 'next/link'

export default function Footer() {
    return (
        <footer>
            &copy; {new Date().getFullYear()}{' '}
            <Link href="https://github.com/tobiaswild">
                <a target="_blank">Tobias Wild</a>
            </Link>
            . No rights reserved.
        </footer>
    )
}
