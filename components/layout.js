import Script from 'next/script'
import Nav from './nav'
import Footer from './footer'

export default function Layout({ children }) {
    return (
        <>
            <div
                className="w-screen min-h-screen h-full bg-skin-background text-skin-base"
                id="all">
                <Nav />
                <div className="desktop:w-[672px] tablet:w-[576px] max-w-[90%] mx-auto pt-16">
                    <main>{children}</main>
                    <Footer />
                </div>
            </div>
            <div
                className="z-50 fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-80 flex text-skin-base invisible duration-1000 ease-out transition-all"
                id="popup">
                <p className="m-auto text-gray-300">
                    &copy; {new Date().getFullYear()} Tobias Wild
                </p>
            </div>
            <Script src="/js/context.js" />
        </>
    )
}
