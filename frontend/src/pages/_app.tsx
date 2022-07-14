import '../styles/globals.css'
import * as config from '../content/config'
import { CartProvider } from 'use-shopping-cart/react'
import NextNProgress from 'nextjs-progressbar'
import { SessionProvider } from 'next-auth/react'
import { AppType } from 'next/dist/shared/lib/utils'


export const myLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 50}`
}

const MyApp: AppType = ({ Component, pageProps: { session, ...pageProps } }) => {
    return (
        <Provider session={pageProps.session}>
            <CartProvider cartMode="checkout-session" stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string} currency={config.CURRENCY}>
                <NextNProgress nonce="my-nonce" color="#a98971" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
                <Component {...pageProps} />
            </CartProvider>
        </Provider>
    )
}

export default MyApp