import Image from 'next/image'

export default function Header() {
    return (
        <header>
            <Image
                src="/images/me.png"
                alt="The Header Image"
                layout="responsive"
                height={350}
                width={800}
                priority
            />
        </header>
    )
}
