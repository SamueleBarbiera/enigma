import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function FourOhFour () {
    return (
        <>
            <Header />
            <h1>404 - Pagina non trovata</h1>
            <Link href="/">
                <a>Ritorna alla home</a>
            </Link>
            <Footer />
        </>
    )
}
