import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SignIn from '../components/SignIn'

export default function Home() {
    return (
        <>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/domanda.ico" />
            </Head>
            <Header />
            <SignIn />
            <Footer />
        </>
    )
}
