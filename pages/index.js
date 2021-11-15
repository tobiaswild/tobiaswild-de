import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import Layout from 'Components/layout'
import { DiMongodb } from 'react-icons/di'
import {
    FaGithub,
    FaHtml5,
    FaInfinity,
    FaJava,
    FaPython,
    FaServer,
} from 'react-icons/fa'

export default function Home() {
    return (
        <>
            <Head>
                <title>Tobias Wild</title>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <Script src="/js/age.js" />
            <Layout home>
                <div className="rounded-lg bg-skin-accent py-3 my-6 text-center w-full">
                    Hey, I&apos;m a full-stack developer based in Germany!
                </div>
                <article className="flex">
                    <div className="flex-grow">
                        <h1 className="mt-4">Tobias Wild</h1>
                        <p>
                            I am a <span id="age" /> years old student from
                            Germany. I love coding. I started learning HTML and
                            CSS in mid 2018 when my school offered a
                            differentiation course on it. And from there on I
                            taught my self JS. In mid-2021, I took an online
                            course on web development with ReactJS. Then I
                            started learning and using NextJS.
                        </p>
                    </div>
                    <div
                        className="flex-shrink-0 desktop:ml-6 tablet:ml-6 mobile:ml-2 rounded-full max-h-32 w-32 p-1 
                    bg-gradient-to-br from-[#7289da] to-pink-500">
                        <Image
                            src="/images/pexels-soumil-kumar-735911.jpg"
                            alt="headerImage"
                            height={120}
                            width={120}
                            className="rounded-full"
                        />
                    </div>
                </article>
                <article id="projects">
                    <h2>Projects</h2>
                    <ul>
                        <li>
                            <h3>Storyblog</h3>
                            <p>A blog project for my girlfriend</p>
                            <Link
                                href="https://github.com/tobiaswild/storyblog"
                                passHref>
                                <a target="_blank">View Project on GitHub</a>
                            </Link>
                        </li>
                        <li>
                            <h3>CleanerTwitch</h3>
                            <p>
                                extention to remove useless stuff from the
                                twitch page
                            </p>
                            <Link
                                href="https://github.com/tobiaswild/CleanerTwitchTV"
                                passHref>
                                <a target="_blank">View Project on GitHub</a>
                            </Link>
                        </li>
                        <li>
                            <h3>Facebook Clone</h3>
                            <p>
                                clone of facebook i build in the web dev online
                                course
                            </p>
                            <Link
                                href="https://github.com/tobiaswild/facebook-klon"
                                passHref>
                                <a target="_blank">View Project on GitHub</a>
                            </Link>
                        </li>
                    </ul>
                </article>
                <article id="technologies">
                    <h2>Technologies</h2>
                    <ul>
                        <li>
                            <span className="text-2xl">
                                <FaHtml5 />
                            </span>
                            <h3>Frontend</h3>
                            <p>HTML5, CSS3, JS, NextJS</p>
                        </li>
                        <li>
                            <span className="text-2xl">
                                <FaServer />
                            </span>
                            <h3>Backend</h3>
                            <p>NodeJS</p>
                        </li>
                        <li>
                            <span className="text-2xl">
                                <DiMongodb />
                            </span>
                            <h3>Databases</h3>
                            <p>MongoDB</p>
                        </li>
                        <li>
                            <span className="text-2xl">
                                <FaInfinity />
                            </span>
                            <h3>Devops</h3>
                            <p>Netlify, Heroku</p>
                        </li>
                        <li>
                            <span className="text-2xl">
                                <FaJava />
                            </span>
                            <h3>Java</h3>
                        </li>
                        <li>
                            <span className="text-2xl">
                                <FaPython />
                            </span>
                            <h3>Python</h3>
                        </li>
                    </ul>
                </article>
                <article id="about-me">
                    <h2>About Me</h2>
                </article>
                <article id="achievements">
                    <h2>Personal Achievements</h2>
                    <ul>
                        <li>
                            <h3>x+</h3>
                            <p>Code contributions</p>
                        </li>
                        <li>
                            <h3>x+</h3>
                            <p>GitHub Views</p>
                        </li>
                    </ul>
                </article>
            </Layout>
        </>
    )
}
