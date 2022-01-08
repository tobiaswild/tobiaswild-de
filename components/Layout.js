import Navigation from './Navigation'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <>
            <Navigation />
            <div className="wrapper">
                <main id="top">{children}</main>
                <Footer />
            </div>
        </>
    )
}
