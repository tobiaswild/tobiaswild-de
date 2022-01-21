import Image from 'next/image'
import Contact from 'Components/Contact'
import Layout from 'Components/Layout'
import Projects from 'Components/Projects'
import Technologies from 'Components/Technologies'
import BasicMeta from 'Components/meta/BasicMeta'
import OpenGraphMeta from 'Components/meta/OpenGraphMeta'
import TwitterCardMeta from 'Components/meta/TwitterCardMeta'
import { GitHub } from 'Lib/GitHub'
import useTranslation from 'next-translate/useTranslation'
import { v2 as cloudinary } from 'cloudinary'
import big from 'Public/images/big.webp'

export default function Home({ pinnedItems, profilePic, ogImageUrl }) {
    const { t } = useTranslation()

    return (
        <Layout home>
            <BasicMeta url='/' t={t} />
            <OpenGraphMeta url='/' t={t} ogImageUrl={ogImageUrl} />
            <TwitterCardMeta url='/' t={t} />
            <header className='header'>
                <Image
                    src={big}
                    alt='header-image'
                    width={1012}
                    height={506}
                    className='rounded-xl'
                />
            </header>
            <div className='bar'>{t('common:desc')}</div>
            <section id='info'>
                <div className='info-img'>
                    <Image
                        src={profilePic}
                        alt=''
                        height={150}
                        width={150}
                        className='rounded-full'
                        priority
                    />
                </div>
                <h1>Tobias Wild</h1>
                <p>{t('common:info')}</p>
            </section>
            <Projects pinnedItems={pinnedItems} />
            <Technologies />
            <Contact />
        </Layout>
    )
}

export const getServerSideProps = async () => {
    const user = await GitHub()
    const pinnedItems = user.pinnedItems.edges.map((edge) => edge.node)

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
                width: 300,
                height: 300,
                gravity: 'north_west',
                x: 50,
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
                    text: `Followers: ${user.followers.totalCount}`,
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
                y: 120,
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
