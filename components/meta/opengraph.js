export default function OpengraphMeta({ t, title }) {
    return (
        <>
            <meta property="og:url" content="https://tobiaswild.de/" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta
                property="og:description"
                content={t('info-short', { age: 16 })}
            />
            <meta
                property="og:image"
                content="https://repository-images.githubusercontent.com/418679920/7665ab87-716c-4cb7-98e1-9b6654ee7cc4"
            />
        </>
    )
}
