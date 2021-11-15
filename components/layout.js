import Nav from './nav'
import Header from './header'
import Footer from './footer'

export default function Layout({ children }) {
    return (
        <div
            id="main"
            className="w-screen min-h-screen h-full bg-skin-background font-normal text-skin-base select-text">
            <Nav />
            <main className="max-w-xl sm:max-w-[95%] mx-auto pt-16">
                <Header />
                <section>{children}</section>
                <Footer />
            </main>
        </div>
    )
}
