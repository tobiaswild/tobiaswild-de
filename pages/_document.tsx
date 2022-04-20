import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="m-0 select-none overflow-x-hidden scroll-smooth bg-background p-0 font-sans text-base">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
