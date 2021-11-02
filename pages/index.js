import { Container, Box, Heading } from '@chakra-ui/layout'
import Layout from 'Components/layout'
import Head from 'next/head'

export default function Home() {
    return (
        <>
            <Layout home>
                <div className="rounded-lg bg-red-500 p-3 mb-6 text-center">
                    Hey, I&apos;m a full-stack developer based in Germany!
                </div>

                <div className="flex">
                    <div>
                        <h2 className="text-3xl text">Tobias Wild</h2>
                        <p>Student, Full-Stack Web Developer</p>
                    </div>
                </div>
            </Layout>
        </>
    )
}
