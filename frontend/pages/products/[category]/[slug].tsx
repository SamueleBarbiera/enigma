import getData from '../../../data/getData'
//import { SingleProductQuery } from '../../../data/SingleProductQueries'
import Head from 'next/head'
import AccessDenied from '@/components/layout/AccessDenied'
import { useSession } from 'next-auth/client'

const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL

export default function ProductPage({ product }: any) {
    console.log(product)
    const [session, loading] = useSession()
    if (session) {
        return (
            <>
                <main className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <Head>
                        <title>{product.product_name}</title>
                        <link rel="icon" href="/question-solid.svg" />
                        <meta charSet="utf-8" className="next-head" />
                    </Head>

                    <div className="md:flex">
                        <div className="">
                            <img className="w-full object-cover object-center group-hover:opacity-75" src={`${assetsUrl}/${product.product_image.id}?width=385&height=385`} />
                        </div>
                        <div className="mt-2 md:ml-4">
                            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 ">{product.product_name}</h2>
                        </div>
                    </div>
                </main>
            </>
        )
    } else {
        return <AccessDenied />
    }
}

// export const getServerSideProps = async (ctx: any) => {
//     const { slug } = ctx.query
//     const data = await getData(SingleProductQuery, 'products', { product_slug: slug })

//     return {
//         props: {
//             product: data[0],
//         },
//     }
// }
