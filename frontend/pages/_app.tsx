import { GetServerSideProps } from 'next'
import { Provider } from 'next-auth/client'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { parseCookies } from 'nookies'
import { useState } from 'react'
import UserContext, { UserContextState, UserContextType } from '../context/UserContext'
import '../styles/globals.css'

export const myLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 50}`
}

function MyApp({ Component, pageProps }: AppProps) {
    const [ctxValue, setCtxValue] = useState<UserContextState>({
        loginInfo: {},
    })

    return (
        <Provider session={pageProps.session}>
            <Head>
                <meta charSet="utf-8" className="next-head" />
            </Head>
            <UserContext.Provider value={{ value: ctxValue, setValue: setCtxValue }}>
                <Component {...pageProps} />
            </UserContext.Provider>
        </Provider>
    )
}

export default MyApp


