import { v2 as cloudinary } from 'cloudinary'

export const Cloudinary = async (user) => {
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

    return cloudinaryUrl
}
