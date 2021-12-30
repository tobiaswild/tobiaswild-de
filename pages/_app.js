import { motion, AnimatePresence } from 'framer-motion'
import 'Styles/globals.css'

function MyApp({ Component, pageProps, router }) {
    return (
        <AnimatePresence>
            <motion.div
                key={router.route}
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
                transition={{ duration: 0.4 }}>
                <Component {...pageProps} />
            </motion.div>
        </AnimatePresence>
    )
}

export default MyApp
