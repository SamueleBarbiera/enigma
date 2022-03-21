import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <meta charSet="utf-8" className="next-head" />
            </Head>
            <body className="h-screen w-screen">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
