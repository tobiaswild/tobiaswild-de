import Footer from './Footer'
import Navigation from './Navigation'

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
