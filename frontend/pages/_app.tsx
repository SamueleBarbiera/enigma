import { Provider } from 'next-auth/client'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Head from 'next/head'

export const myLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 50}`
}

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider session={pageProps.session}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp
