import { motion, AnimatePresence } from 'framer-motion'
import 'Styles/globals.css'

function MyApp({ Component, pageProps, router }) {
    return (
        <AnimatePresence>
            <motion.div
                onContextMenu={(e) => e.preventDefault()}
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
                transition={{ duration: 0.3 }}>
                <Component {...pageProps} />
            </motion.div>
        </AnimatePresence>
    )
}

export default MyApp
