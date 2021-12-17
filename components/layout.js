import Script from 'next/script'
import Navigation from './Navigation'
import Footer from './Footer'

export default function Layout({ children, home, test }) {
    return (
        <>
            <div id="all">
                {home && <Navigation />}
                <div className="wrapper">
                    <main>{children}</main>
                    {!test && <Footer />}
                </div>
            </div>

            <Script src="/js/scroll.js" />
            <Script src="/js/context.js" />
        </>
    )
}
