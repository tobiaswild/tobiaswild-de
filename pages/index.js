import Image from 'next/image'
import Head from 'next/head'
import Contact from 'Components/Contact'
import Layout from 'Components/Layout'
import Projects from 'Components/Projects'
import Technologies from 'Components/Technologies'
import { GitHubUserInfo, GitHubPinnedRepos } from 'Lib/GitHub'
import useTranslation from 'next-translate/useTranslation'
import { v2 as cloudinary } from 'cloudinary'
import big from 'Public/images/big.webp'
import BasicMeta from 'Components/meta/BasicMeta'
import OpenGraphMeta from 'Components/meta/OpenGraphMeta'
import TwitterCardMeta from 'Components/meta/TwitterCardMeta'

export default function Home({ pinnedItems, profilePic, ogImageUrl }) {
    const { t } = useTranslation()

    return (
        <Layout home>
            <BasicMeta url="/" t={t} />
            <OpenGraphMeta url="/" t={t} ogImageUrl={ogImageUrl} />
            <TwitterCardMeta url="/" t={t} />
            {/* <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content={t('common:info-short', { age: 16 })}
                />
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link rel="manifest" href="/manifest.json" />
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                <link
                    rel="apple-touch-icon"
                    sizes="57x57"
                    type="image/png"
                    href="/icons/apple-icon-57x57.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="60x60"
                    type="image/png"
                    href="/icons/apple-icon-60x60.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="72x72"
                    type="image/png"
                    href="/icons/apple-icon-72x72.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="76x76"
                    type="image/png"
                    href="/icons/apple-icon-76x76.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="114x114"
                    type="image/png"
                    href="/icons/apple-icon-114x114.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="120x120"
                    type="image/png"
                    href="/icons/apple-icon-120x120.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="144x144"
                    type="image/png"
                    href="/icons/apple-icon-144x144.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="152x152"
                    type="image/png"
                    href="/icons/apple-icon-152x152.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    type="image/png"
                    href="/icons/apple-icon-180x180.png"
                />
                <link
                    rel="icon"
                    sizes="192x192"
                    type="image/png"
                    href="/icons/android-icon-192x192.png"
                />
                <link
                    rel="icon"
                    sizes="32x32"
                    type="image/png"
                    href="/icons/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    sizes="96x96"
                    type="image/png"
                    href="/icons/favicon-96x96.png"
                />
                <link
                    rel="icon"
                    sizes="16x16"
                    type="image/png"
                    href="/icons/favicon-16x16.png"
                />
                <meta
                    name="msapplication-TileImage"
                    content="/icons/ms-icon-144x144.png"
                />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="theme-color" content="#ffffff" />
              
                <meta property="og:title" content={title} />
                <meta
                    property="og:description"
                    content={t('common:info-short', { age: 16 })}
                />
                <meta property="og:image" content={ogImageUrl} />
                <meta property="og:url" content="https://tobiaswild.de/" />
                <meta property="og:type" content="website" />
               
                <meta name="twitter:title" content={title} />
                <meta
                    name="twitter:description"
                    content={t('common:info-short', { age: 16 })}
                />
                <meta name="twitter:image" content={ogImageUrl} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="tobiaswild.de" />
                <meta property="twitter:url" content="https://tobiaswild.de/" />
            </Head> */}
            <header className="header">
                <Image
                    src={big}
                    alt="header-image"
                    width={1012}
                    height={506}
                    className="rounded-xl"
                />
            </header>
            <div className="bar">{t('common:desc')}</div>
            <section id="info">
                <div className="info-img">
                    <Image
                        src={profilePic}
                        alt=""
                        height={150}
                        width={150}
                        className="rounded-full"
                        priority
                    />
                </div>
                <h1>Tobias Wild</h1>
                <p>{t('common:info', { age: 16 })}</p>
            </section>
            <Projects pinnedItems={pinnedItems} />
            <Technologies />
            <Contact />
        </Layout>
    )
}

export const getServerSideProps = async () => {
    const pinnedItems = await GitHubPinnedRepos()
    const user = await GitHubUserInfo()

    cloudinary.config({
        cloud_name: 'dgawcrdie',
    })
    const cloudinaryUrl = cloudinary.url('cloudinary-background_vvmbwk', {
        width: 1012,
        height: 506,
        transformation: [
            { fetch_format: 'auto', quality: 'auto' },
            {
                overlay: {
                    url: user.avatarUrl,
                },
            },
            {
                flags: 'layer_apply',
                width: 250,
                height: 250,
                gravity: 'north_west',
                x: 100,
                y: 80,
                radius: 250,
            },
            {
                color: '#7289da',
                width: 432,
                crop: 'fit',
                overlay: {
                    font_family: 'Source Sans Pro',
                    font_weight: 'bold',
                    font_size: 60,
                    text: user.name,
                },
            },
            {
                color: '#A1A1AA',
                width: 432,
                crop: 'fit',
                overlay: {
                    font_family: 'Source Sans Pro',
                    font_weight: 'semibold',
                    font_size: 36,
                    text: `@${user.login}`,
                },
            },
            {
                flags: 'layer_apply',
                gravity: 'north_west',
                y: 'h + 15',
            },
            {
                color: '#52525B',
                width: 432,
                crop: 'fit',
                overlay: {
                    font_family: 'Source Sans Pro',
                    font_weight: 'regular',
                    font_size: 36,
                    text: user.bio,
                },
            },
            {
                flags: 'layer_apply',
                gravity: 'north_west',
                y: 'h + 20',
            },
            {
                color: '#52525B',
                width: 432,
                crop: 'fit',
                overlay: {
                    font_family: 'Source Sans Pro',
                    font_weight: 'semibold',
                    font_size: 28,
                    text: `Followers: ${user.followers.totalCount}   Public Repos:null`,
                },
            },
            {
                flags: 'layer_apply',
                gravity: 'north_west',
                y: 'h + 20',
            },
            {
                flags: 'layer_apply',
                gravity: 'north_west',
                x: 400,
                y: 80,
            },
        ],
    })

    return {
        props: {
            pinnedItems,
            ogImageUrl: cloudinaryUrl,
            profilePic: user.avatarUrl,
        },
    }
}
