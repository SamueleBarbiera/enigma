import { NextPage } from 'next'
import Products from '../components/cart/Products'
import Layout from '../components/cart/Layout'
import Cart from '../components/cart/Cart'
import Header from '../components/page/Header'
import Footer from '../components/page/Footer'

const DonatePage: NextPage = () => {
    return (
        <>
            <Header />
            <Layout>
                <div className="page-container">
                    <h1>Shopping Cart</h1>
                    <Cart>
                        <Products />
                    </Cart>
                </div>
            </Layout>
            <Footer />
        </>
    )
}

export default DonatePage
