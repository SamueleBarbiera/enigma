import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Layout from '../components/cart/Layout'
import PrintObject from '../components/cart/PrintObject'
import Cart from '../components/cart/Cart'
import ClearCart from '../components/cart/ClearCart'
import { fetchGetJSON } from '../content/utils/api-helpers'
import useSWR from 'swr'

const RisultatoPagamento: NextPage = () => {
    const router = useRouter()
    const { data, error } = useSWR(router.query.session_id ? `${process.env.FRONTEND_URL}/api/checkout_sessions/${router.query.session_id}` : null, fetchGetJSON)
    if (error) return <div>failed to load</div>

    return (
        <Layout title="Checkout Payment Result | Next.js + TypeScript Example">
            <div className="page-container">
                <h1>Checkout Payment Result</h1>
                <h2>Status: {data?.payment_intent?.status ?? 'loading...'}</h2>
                <h3>CheckoutSession response:</h3>
                <PrintObject content={data ?? 'loading...'} />
                <Cart>
                    <ClearCart />
                </Cart>
            </div>
        </Layout>
    )
}
export default RisultatoPagamento
