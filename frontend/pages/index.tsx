import Head from 'next/head'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

export default function Home() {
    return (
        <>
            <Head>
                <title>Home</title>
                <a rel="icon" href="/question-solid.svg" />
                <meta charSet="utf-8" className="next-head" />
            </Head>
            <Header />
            <main className="flex h-screen items-center justify-center">Home</main>
            <Footer />
        </>
    )
}

