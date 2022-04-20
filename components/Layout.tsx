import Footer from './Footer'
import Navigation from './Navigation'

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <div className="mx-auto max-w-[90%] tablet:w-2xl desktop:w-3xl">
        <main id="top" className="pt-16">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
