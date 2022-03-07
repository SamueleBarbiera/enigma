import '../styles/globals.css'
import { Provider } from 'next-auth/client'
import Head from 'next/head'


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
