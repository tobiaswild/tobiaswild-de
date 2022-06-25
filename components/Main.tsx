import PageTransition from './PageTransition'

export default function Main({ children }) {
  return (
    <main
      id="top"
      className="prose mx-auto min-h-[71.5vh] w-[90%] max-w-screen-xl p-4 pt-16 sm:w-[80%] md:w-[70%]">
      <PageTransition>{children}</PageTransition>
    </main>
  )
}
