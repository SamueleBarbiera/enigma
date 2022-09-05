/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import '../styles/globals.css'
import * as config from '../content/config'
import { CartProvider } from 'use-shopping-cart'
import NextNProgress from 'nextjs-progressbar'
import { SessionProvider } from 'next-auth/react'
import { Toaster } from 'react-hot-toast'
import superjson from 'superjson'
import { withTRPC } from '@trpc/next'
import { AppRouter } from 'src/server/router'
import { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <SessionProvider session={pageProps.session}>
            <CartProvider
                cartMode="checkout-session"
                stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ''}
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

const getBaseUrl = () => {
    if (typeof window !== undefined) return '' // browser should use relative url
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}` // SSR should use vercel url
    return `http://localhost:${process.env.PORT ?? 3000}` // dev SSR should use localhost
}

export default withTRPC<AppRouter>({
    config() {
        const url = `${getBaseUrl()}/api/trpc`

        return {
            url,
            transformer: superjson,
        }
    },
    ssr: true,
})(MyApp)
