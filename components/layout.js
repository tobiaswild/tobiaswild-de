import Script from 'next/script'
import { Navigation, NavigationOther } from './Navigation'
import Footer from './Footer'

export default function Layout({ children, home }) {
    return (
        <>
            {home && <Navigation />}
            {!home && <NavigationOther />}
            <div className="wrapper">
                <main>{children}</main>
                <Footer />
            </div>
            <Script src="/js/script.js" />
        </>
    )
}
