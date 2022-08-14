/* eslint-disable @typescript-eslint/no-unsafe-call */
import Layout from '../components/Layout'
import { InferGetServerSidePropsType } from 'next'
import axios, { AxiosResponse } from 'axios'
import Card from '../components/Card'
import { GetProductsResponse, IProduct } from 'types/IProduct'

export const getServerSideProps = async () => {
    const data: AxiosResponse = await axios.get<GetProductsResponse>(`${process.env.NEXT_PUBLIC_API_URL ?? ''}/api/data`)
    console.log('🚀 ~ file: products.tsx ~ line 17 ~ GetServerSideProps= ~ products', data)

    return {
        props: {
            products: data,
        },
    }
}

const Products = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    console.log('🚀 ~ file: products.tsx ~ line 44 ~ products', props)
    return (
        <Layout>
            <div className="mt-8 p-5">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {/*eslint-disable-next-line @typescript-eslint/no-unsafe-member-access*/}
                    {props.products.data.map((product: IProduct) => (
                        <Card key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default Products
