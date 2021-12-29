import Head from 'next/head'
import Layout from 'Components/Layout'

export default function More() {
    const title = 'Tobias Wild | Blog'

    return (
        <Layout blog>
            <Head>
                <title>{title}</title>
            </Head>
            <section id="faq">
                <h2>Blog</h2>
                <p>
                    Here you will be able to see my blog. But it will take some
                    time to programme it. So please be patient.
                </p>
            </section>
        </Layout>
    )
}
