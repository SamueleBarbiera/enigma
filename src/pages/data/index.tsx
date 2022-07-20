import { InferGetServerSidePropsType, GetServerSideProps, GetServerSidePropsContext } from 'next'
import Products from '../../components/cart/Products'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import { getSession } from 'next-auth/react'
import Head from 'next/head'
import prisma from 'src/content/lib/prisma'
import { Product } from '@prisma/client'


const Prodotti = ({ products }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const session = await getSession(ctx)
    console.log('🚀 - file: index.tsx - line 28 - getServerSideProps - session', session!.user!.email)

    const products: Product[] = await prisma.product.findMany()
    return {
        props: { products: products },
        redirect: false,
    }

}
