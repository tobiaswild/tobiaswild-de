import Script from 'next/script'
import Navigation from './Navigation'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <>
            <div id="all">
                <Navigation />
                <div className="wrapper">
                    <main>{children}</main>
                    <Footer />
                </div>
            </div>
            <Script src="/js/scroll.js" />
            <Script src="/js/context.js" />
        </>
    )
}
