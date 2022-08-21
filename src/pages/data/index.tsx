import Products from '../../components/cart/Products'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import Head from 'next/head'
import { prisma } from '../../server/db/client'
import { Product } from '@prisma/client'
import { IProduct } from 'src/types/IProduct'

const Prodotti = (products: IProduct[]) => {
    return (
        <>
            <Head>
                <title>Prodotti</title>
                <link rel="icon" href="/question-solid.svg" />
                <meta charSet="utf-8" className="next-head" />
            </Head>
            <Header />
            <Products products={products} />
            <Footer />
        </>
    )
}

export default Prodotti

export const getServerSideProps = async () => {
    const products: Product[] = await prisma.product.findMany()
    return {
        props: { products: products },
        redirect: false,
    }
}
