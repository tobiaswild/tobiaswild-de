import Image from 'next/image'

export default function Header() {
    return (
        <header>
            <Image
                src="/images/me.png"
                alt="headerImage"
                layout="responsive"
                height={350}
                width={800}
                title="Just a stock photo I found online."
            />
        </header>
    )
}
