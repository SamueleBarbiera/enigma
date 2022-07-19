import { NextPage } from 'next'
import Products from '../../components/cart/Products'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import { getSession } from 'next-auth/react'
import Head from 'next/head'

const Prodotti: NextPage = ({ products }: any) => {
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

export async function getServerSideProps(ctx: any) {
    const session = await getSession(ctx)
    console.log('🚀 - file: index.tsx - line 28 - getServerSideProps - session', session!.user!.email)
    
        const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/variantetaglias?populate=*&pagination[page]=1&pagination[pageSize]=4`)
        return {
            props: { products: await products.data },
            redirect: false,
        }
    
}
