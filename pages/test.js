import Head from 'next/head'
import Layout from 'Components/Layout'
import Certificates from 'Components/Certificates'
import AboutMe from 'Components/AboutMe'
import Achievements from 'Components/Achievements'
import Experience from 'Components/Experience'
import FAQ from 'Components/FAQ'

export default function More() {
    return (
        <>
            <Head>
                <title>Test page ...</title>
            </Head>
            <Layout test>
                <FAQ />
                <AboutMe />
                <Achievements />
                <Certificates />
                <Experience />
            </Layout>
        </>
    )
}
