import Nav from './nav'
import Header from './header'
import Footer from './footer'

export default function Layout({ children }) {
    return (
        <>
            <div className="max-w-3xl mx-auto my-0 font-normal text-base select-text">
                <Nav />
                <div className="max-w-xl mx-auto my-0">
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </div>
            </div>
        </>
    )
}
