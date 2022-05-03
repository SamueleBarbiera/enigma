import { Provider } from 'next-auth/client'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import * as config from '../content/config'
import { CartProvider } from 'use-shopping-cart/react'

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