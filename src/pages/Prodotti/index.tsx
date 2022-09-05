import Products from '../../components/cart/Products'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import Head from 'next/head'

const Prodotti = () => {
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
