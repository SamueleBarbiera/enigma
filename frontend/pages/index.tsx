import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/question-solid.svg" />
            </Head>
            <Header />
            <div className='h-screen'>main</div>
            <Footer />
        </>
    )
}
