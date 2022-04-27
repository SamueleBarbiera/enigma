import { NextPage } from 'next'
import Products from '../components/cart/Products'
import Header from '../components/page/Header'
import Footer from '../components/page/Footer'

const Prodotti: NextPage = () => {
    return (
        <>
            <Header />
            <Products />
            <Footer />
        </>
    )
}

export default Prodotti
