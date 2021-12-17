import Head from 'next/head'
import Layout from 'Components/Layout'

export default function More() {
    return (
        <>
            <Head>
                <title>My Blog</title>
            </Head>
            <Layout blog>
                Here U will be able to see my blog. But it will take some time
                to create it.
            </Layout>
        </>
    )
}
