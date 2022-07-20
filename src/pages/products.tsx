// pages/products.js
import Layout from '../components/Layout'
import Grid from '../components/Grid'
import prisma from '../content/lib/prisma'
import { Prisma } from '@prisma/client'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

export const getServerSideProps: GetServerSideProps = async () =>{
  const products: Prisma.ProductFindManyArgs = await prisma.product.findMany()
  return {
    props: {
      products: products,
    },
  }
}

export default function Products({ products }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Layout>
      <div className="mt-8 p-5">
        <Grid products={products} />
      </div>
    </Layout>
  )
}
