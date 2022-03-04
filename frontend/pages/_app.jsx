import '../styles/globals.css'

import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'

// Use of the <SessionProvider> is mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function App({ Component, pageProps }) {
    return (
        <SessionProvider session={pageProps.session} refetchInterval={0}>
            <Component {...pageProps} />
        </SessionProvider>
    )
}
