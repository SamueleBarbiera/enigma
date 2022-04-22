import { NextPage } from 'next'
import Products from '../components/cart/Products'
import Layout from '../components/cart/Layout'
import Header from '../components/page/Header'
import Footer from '../components/page/Footer'

const DonatePage: NextPage = () => {
    return (
        <>
            <Header />
            <Layout>
                        <Products />
            </Layout>
            <Footer />
        </>
    )
}

export default DonatePage
