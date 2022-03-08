import '../styles/globals.css'
import { Provider } from 'next-auth/client'
import Head from 'next/head'

export const myLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 1}`
}

function MyApp({ Component, pageProps }) {
    return (
        <Provider session={pageProps.session}>
            <Head>
                <link href="../asset/Poppins-Light.ttf" />
            </Head>
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp
