import { NextPage } from 'next'
import Products from '../../components/cart/Products'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import { getSession } from 'next-auth/client'
import axios from 'axios'
import Head from 'next/head'

const Prodotti: NextPage = () => {
    return (
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
    )
}

export default Prodotti

export async function getServerSideProps(ctx: any) {
    const session = await getSession(ctx)

    if (!session) {
        return {
            redirect: { destination: '/AccessDenied' },
        }
    }

    return {
        props: { products: null },
    }
}
