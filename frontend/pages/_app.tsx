//import { GetServerSideProps } from 'next'
import { Provider } from 'next-auth/client'
import type { AppProps } from 'next/app'
import { parseCookies } from 'nookies'
import { DefaultSeo } from 'next-seo'
import '../styles/globals.css'
import * as config from '../content/config'
import { CartProvider } from 'use-shopping-cart/react'
//import SEO from '../next-seo.config'
const stripe = process.env.STRIPE_SECRET_KEY!

export const myLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 50}`
}

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider session={pageProps.session}>
            <CartProvider cartMode="checkout-session" stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string} currency={config.CURRENCY}>
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
