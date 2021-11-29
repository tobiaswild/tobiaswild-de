import Nav from './nav'
import Header from './header'
import Footer from './footer'

export default function Layout({ children }) {
    return (
        <div className="w-screen min-h-screen h-full bg-skin-background text-skin-base">
            <Nav />
            <main className="desktop:w-[672px] tablet:w-[576px] max-w-[90%] mx-auto pt-16">
                <Header />
                <section>{children}</section>
                <Footer />
            </main>
        </div>
    )
}
