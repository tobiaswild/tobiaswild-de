import Nav from './nav'
import Header from './header'
import Footer from './footer'

export default function Layout({ children }) {
    return (
        <div className="w-screen min-h-screen h-full bg-skin-background text-skin-base select-text">
            <Nav />
            <main className="desktop:max-w-2xl tablet:max-w-xl mobile:max-w-[95%] mx-auto pt-16">
                <Header />
                <section>{children}</section>
                <Footer />
            </main>
        </div>
    )
}
