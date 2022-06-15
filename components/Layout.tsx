import Footer from './footer'
import NormalNav from './navigation/NormalNav'
import PageTransition from './PageTransition'
import ScrollNav from './navigation/ScrollNav'

export default function Layout({ children, scroll }) {
  return (
    <>
      {scroll ? <ScrollNav /> : <NormalNav />}
      <div className="mx-auto max-w-[90%] tablet:w-2xl desktop:w-3xl" onContextMenu={(e)=> e.preventDefault()}>
        <main id="top" className="pt-16">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </div>
    </>
  )
}
