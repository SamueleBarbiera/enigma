import { NextPage } from 'next'
import Products from '../../components/cart/Products'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import { useSession } from 'next-auth/client'
import AccessDenied from '@/components/layout/AccessDenied'
import Head from 'next/head'

const Prodotti: NextPage = () => {
    const [session, loading] = useSession()
    if(session){return (
        <>
        <Head>
            <title>Prodotti</title>
            <link rel="icon" href="/question-solid.svg" />
            <meta charSet="utf-8" className="next-head" />
        </Head>
            <Header />
            <Products />
            <Footer />
        </>
    )}else{return <AccessDenied />}
    
}

export default Prodotti
