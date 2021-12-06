import Script from 'next/script'
import Nav from './nav'
import Footer from './footer'

export default function Layout({ children }) {
    return (
        <>
            <div className="w-screen min-h-screen h-full" id="all">
                <Nav />
                <div className="desktop:w-2xl tablet:w-xl max-w-[90%] mx-auto pt-16">
                    <main>{children}</main>
                    <Footer />
                </div>
            </div>
            <div
                className="z-50 fixed top-0 left-0 w-full h-full bg-skin-seebit dark:bg-skin-seemore flex invisible"
                id="popup">
                <p className="m-auto text-gray-600 dark:text-gray-400">
                    &copy; {new Date().getFullYear()} Tobias Wild
                </p>
            </div>
            <Script src="/js/context.js" />
        </>
    )
}
