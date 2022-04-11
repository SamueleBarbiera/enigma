//import { GetServerSideProps } from 'next'
import { Provider } from 'next-auth/client'
import type { AppProps } from 'next/app'
import getConfig from 'next/config'
import Router from 'next/router'
import { parseCookies } from 'nookies'
//import Head from 'next/head'
//import { parseCookies } from 'nookies'
//import { useEffect } from 'react'
import { useState } from 'react'
import UserContext, { UserContextState /*UserContextType*/ } from '../context/UserContext'
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
            <UserContext.Provider value={{ value: ctxValue, setValue: setCtxValue }}>
                <Component {...pageProps} />
            </UserContext.Provider>
        </Provider>
    )
}

function redirectUser({ ctx }: any, { location }: any) {
    if (ctx.req) {
        ctx.res.writeHead(302, { Location: location })
        ctx.res.end()
    } else {
        Router.push(location)
    }
}

const { publicRuntimeConfig } = getConfig()
MyApp.getServerSideProps = async ({ ctx }: any) => {
    let pageProps = {}
    const jwt = parseCookies(ctx).jwt

    const res = await fetch(`${publicRuntimeConfig.API_URL}/navigations`)
    const navigation = await res.json()

    if (!jwt) {
        if (ctx.pathname === '/Home') {
            redirectUser(ctx, '/Login')
        }
    }

    return {
        pageProps,
        navigation,
    }
}
export default MyApp
