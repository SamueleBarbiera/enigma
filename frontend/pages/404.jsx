import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/Footer'

export const FourOhFour = () => {
    return<>
            <Footer />
            <h1>404 - Pagina non trovata</h1>
            <Link href="/">
                <a>Ritorna alla home</a>
            </Link>

            <Header />
        </>
    
}
