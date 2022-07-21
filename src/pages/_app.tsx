/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import '../styles/globals.css'
import * as config from '../content/config'
import { CartProvider } from 'use-shopping-cart'
import NextNProgress from 'nextjs-progressbar'
import { SessionProvider } from 'next-auth/react'
import { Toaster } from 'react-hot-toast'
import { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <SessionProvider session={pageProps.session}>
            <CartProvider
                cartMode="checkout-session"
                stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!}
                currency={config.CURRENCY}
            >
                <NextNProgress
                    nonce="my-nonce"
                    color="#a98971"
                    startPosition={0.3}
                    stopDelayMs={200}
                    height={3}
                    showOnShallow={true}
                />
                <Toaster />
                <Component {...pageProps} />
            </CartProvider>
        </SessionProvider>
    )
}

export default MyApp
