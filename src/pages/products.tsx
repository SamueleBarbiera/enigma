// pages/products.js
import Layout from '../components/Layout'
import { GetServerSideProps } from 'next'
import axios from 'axios'
import { Key } from 'react'
import { ExclamationIcon } from '@heroicons/react/outline'
import Card from '../components/Card'

interface Product {
  id: Key | null | undefined | string
  image: string | null,
  price: number | null,
  name: string | null,
  description: string | null,
  quantity: number | null,
  design: string | null,
  material: string | null,
  created_at: Date,
  updated_at: Date | null,
}
interface GetProductsResponse {
  data: Product[];
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await axios.get<GetProductsResponse>(`${process.env.NEXT_PUBLIC_API_URL!}/api/data`)

  console.log('🚀 ~ file: products.tsx ~ line 17 ~ GetServerSideProps= ~ products', data)

  return {
    props: {
      products: data,
    },
  }
}

const Products = ({ ...products }: GetProductsResponse) => {
  console.log('🚀 ~ file: products.tsx ~ line 44 ~ products', products)
  return (
    <>
      {!products ? (
        <Layout>
          <div className="mt-8 p-5">
            <p className="inline-flex max-w-max items-center space-x-1 rounded-md bg-amber-100 px-4 py-2 text-purple-700">
              <ExclamationIcon className="mt-px h-5 w-5 shrink-0" />
              <span>Unfortunately, there is nothing to display yet.</span>
            </p>
          </div>
        </Layout >
      ) : products ? (
        <Layout>
          <div className="mt-8 p-5"><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.products.map((product: Products) => (
              <Card key={product.id} {...product} />
            ))}
          </div>  </div>
        </Layout>
      ) : (
        <></>
      )}
    </>
  )
}

export default Products
