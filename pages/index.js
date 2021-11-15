import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import Layout from 'Components/layout'
import { DiMongodb } from 'react-icons/di'
import { FaHtml5, FaInfinity, FaJava, FaPython, FaServer } from 'react-icons/fa'

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
                <div className="rounded-lg bg-skin-bg-accent py-3 my-6 text-center w-full">
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
                    <div className="flex-shrink-0 ml-6 sm:ml-2 rounded-full border-2 border-red-600 max-h-28 w-28 bg-red-600">
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
                            <Link
                                href="https://github.com/tobiaswild/storyblog"
                                passHref>
                                <a target="_blank">View Project on GitHub</a>
                            </Link>
                        </li>
                        <li>
                            <h3>CleanerTwitch</h3>
                            <Link
                                href="https://github.com/tobiaswild/CleanerTwitchTV"
                                passHref>
                                <a target="_blank">View Project on GitHub</a>
                            </Link>
                        </li>
                        <li>
                            <h3>Facebook Klon</h3>
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
                <div>
                    Consequat aute consequat magna esse dolore do voluptate
                    nulla duis fugiat sunt laborum laborum. Laborum Lorem esse
                    sit eu cillum. Dolor nisi consequat deserunt velit ad
                    adipisicing voluptate adipisicing culpa. Voluptate et
                    commodo est culpa. Pariatur eiusmod proident duis
                    exercitation aliqua consequat eu laborum pariatur. Sunt est
                    amet cillum ullamco. Proident magna dolor ut voluptate. Ut
                    nisi incididunt quis fugiat ut laboris occaecat Lorem sunt
                    aliquip laboris adipisicing. Incididunt magna incididunt
                    nostrud labore eiusmod sunt elit sit id elit. Sint Lorem
                    nisi est adipisicing excepteur ad voluptate id dolor est
                    consequat ex. Enim do sunt non ut ipsum excepteur ullamco ut
                    qui ad laborum id do est. Magna eiusmod nisi labore
                    consequat voluptate. Ipsum deserunt consectetur sint
                    deserunt amet fugiat aliqua commodo cillum cillum
                    adipisicing laboris. Ad labore proident culpa amet sunt est.
                    Consectetur deserunt enim nisi mollit ut esse anim ad anim
                    non. Est reprehenderit eiusmod anim in elit mollit sit
                    commodo voluptate in. Eu aute reprehenderit elit mollit
                    proident. Fugiat irure exercitation consectetur Lorem
                    consectetur duis id veniam. Nulla anim duis pariatur aliquip
                    elit aliqua consectetur elit consequat eu amet ex nulla.
                    Aute nulla exercitation magna in commodo do veniam fugiat
                    pariatur. Sint cillum enim sunt sunt aute ut. Nisi dolore
                    laboris ipsum reprehenderit fugiat mollit officia. Mollit
                    irure ad cupidatat in aliquip voluptate laborum dolor
                    deserunt velit velit quis. Sint ipsum magna ut anim irure
                    velit sit sint aliqua elit. Culpa ullamco sint quis aliqua
                    excepteur reprehenderit enim ex velit deserunt. Labore nulla
                    enim et aliquip ea anim dolore ea pariatur labore ullamco
                    sunt minim eiusmod. Voluptate laboris aute nostrud laboris
                    officia deserunt non sint culpa sunt. Sunt occaecat ea velit
                    ut. Eu sunt reprehenderit qui cillum ullamco cupidatat aute
                    mollit velit duis deserunt in quis enim. Et elit consequat
                    eu deserunt do tempor cillum eu et sunt sint nisi eu.
                    Consectetur quis do nulla nostrud velit dolore eu non
                    voluptate cillum. Velit cillum deserunt Lorem ut Lorem
                    deserunt sunt tempor irure eu laborum laboris cupidatat
                    laboris. Quis fugiat occaecat aute aliqua exercitation ea ex
                    occaecat sint laborum id laborum proident sunt. Exercitation
                    in consectetur ad aliquip aliquip dolor qui proident commodo
                    qui esse voluptate. Cupidatat non adipisicing incididunt
                    proident cillum ut velit Lorem ad incididunt cillum nisi.
                    Quis fugiat ea commodo deserunt veniam. Aliqua nulla sint
                    mollit ipsum aliquip commodo labore dolore eu reprehenderit
                    laboris tempor non fugiat. Sunt dolor adipisicing labore
                    culpa commodo. Aliquip esse velit est aliqua in voluptate.
                    Mollit pariatur non in proident officia deserunt
                    reprehenderit ad anim ex deserunt Lorem ex proident. Duis in
                    fugiat dolor adipisicing voluptate est labore eiusmod. Irure
                    do eu exercitation est elit laboris adipisicing ipsum ex ad
                    id mollit sint labore. Voluptate pariatur cupidatat aute
                    anim. Quis id quis occaecat qui est commodo deserunt anim.
                    Do cupidatat excepteur amet veniam minim in commodo aliquip
                    est consectetur. Amet amet eu officia aute irure culpa
                    aliqua duis id adipisicing cupidatat ex ipsum nisi. Aliqua
                    ad non pariatur quis in nostrud elit culpa. Commodo fugiat
                    aliquip irure veniam. Commodo proident irure do do dolor
                    tempor. Mollit enim commodo est reprehenderit ipsum.
                </div>
            </Layout>
        </>
    )
}
