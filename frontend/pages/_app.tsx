//import { GetServerSideProps } from 'next'
import { Provider } from 'next-auth/client'
import type { AppProps } from 'next/app'
import getConfig from 'next/config'
import Router from 'next/router'
import { parseCookies } from 'nookies'
import { useState } from 'react'
import { DefaultSeo } from 'next-seo'
import _ from 'lodash'
import '../styles/globals.css'
import { CartProvider } from 'use-shopping-cart/react'
//import SEO from '../next-seo.config'
const stripe = process.env.STRIPE_SECRET_KEY!

export const myLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 50}`
}

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider session={pageProps.session}>
            <CartProvider cartMode="checkout-session" stripe="" currency="USD" loading={<p aria-live="polite">Loading redux-persist...</p>}>
                <Component {...pageProps} />
            </CartProvider>
        </Provider>
    )
}

/*
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
*/
