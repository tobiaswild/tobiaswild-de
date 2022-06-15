import { AnimatePresence, motion } from "framer-motion"
import 'Styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return <AnimatePresence>
      <motion.div
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
          pageExit: {
            opacity: 0,
          },
        }}
        transition={{ duration: 0.4 }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  
}
