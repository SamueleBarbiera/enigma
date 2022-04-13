import Head from 'next/head'
import Header from '../components/page/Header'
import Footer from '../components/page/Footer'
import { useEffect } from 'react'
import { getSession, useSession } from 'next-auth/client'

export default function Home() {
    const [session, loading] = useSession()

    if (typeof window !== 'undefined' && loading) return null

    if (session) {
        return (
            <>
                <Head>
                    <title>Home</title>
                    <a rel="icon" href="/question-solid.svg" />
                    <meta charSet="utf-8" className="next-head" />
                </Head>
                <Header />
                <main className="flex h-screen items-center justify-center">
                    <a href="/use-shopping-cart">
                        <a className="card cart-style-background">
                            <h2 className="bottom">Use Shopping Cart</h2>
                            <img src="/use-shopping-cart.png" />
                        </a>
                    </a>
                </main>
                <Footer />
            </>
        )
    }
    return (
        <>
            <Head>
                <title>Error</title>
                <a rel="icon" href="/question-solid.svg" />
                <meta charSet="utf-8" className="next-head" />
            </Head>
            <Header />
            <div className="h-screen">Access denied</div>
            <Footer />
        </>
    )
}

export async function getServerSideProps(context: any) {
    const session = await getSession(context)
    return {
        props: { session },
    }
}
