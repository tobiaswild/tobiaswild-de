import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="scroll-smooth">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body onContextMenu={(e) => e.preventDefault()}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
