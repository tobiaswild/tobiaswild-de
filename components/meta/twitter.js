export default function TwitterMeta({ t, title }) {
    return (
        <>
            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content="tobiaswild.de" />
            <meta property="twitter:url" content="https://tobiaswild.de/" />
            <meta name="twitter:title" content={title} />
            <meta
                name="twitter:description"
                content={t('info-short', { age: 16 })}
            />
            <meta
                name="twitter:image"
                content="https://repository-images.githubusercontent.com/418679920/7665ab87-716c-4cb7-98e1-9b6654ee7cc4"
            />
        </>
    )
}
