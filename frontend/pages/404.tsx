import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function FourOhFour() {
    return (
        <>
            <Head>
                <title>404 | Not found</title>
                <link rel="icon" href="/domanda.ico" />
            </Head>
            <Header />
            <h1>404 - Pagina non trovata</h1>
            <a href="/">
                <a>Ritorna alla home</a>
            </a>
            <Footer />
        </>
    )
}
