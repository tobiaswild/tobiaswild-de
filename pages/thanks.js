import Head from 'next/head'
import Layout from 'Components/Layout'

export default function More() {
    const title = 'Tobias Wild | Thanks'

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Layout thanks>
                <section id="faq">
                    <h2>Thanks</h2>
                </section>
            </Layout>
        </>
    )
}
