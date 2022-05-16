import Footer from './Footer'
import NormalNav from './NormalNav'
import PageTransition from './PageTransition'
import ScrollNav from './ScrollNav'

export default function Layout({ children, scroll }) {
  return (
    <>
      {scroll ? <ScrollNav /> : <NormalNav />}
      <div className="mx-auto max-w-[90%] tablet:w-2xl desktop:w-3xl">
        <main id="top" className="pt-16">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </div>
    </>
  )
}
