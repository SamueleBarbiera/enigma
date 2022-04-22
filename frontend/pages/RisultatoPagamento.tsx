import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import useSWR from 'swr'
import { useShoppingCart } from 'use-shopping-cart/react'
import { fetcher, shootFireworks } from '../content/lib/Utils'
import PrintObject from '../components/cart/PrintObject'
import ClearCart from '../components/cart/ClearCart'
import { fetchGetJSON } from '../content/utils/api-helpers'
import { CheckIcon } from '@heroicons/react/solid'

const RisultatoPagamento: NextPage = () => {
    const router = useRouter()
    const { clearCart } = useShoppingCart()
    const { data, error } = useSWR(() => (router.query.session_id ? `/api/checkout_sessions/${router.query.session_id}` : null), fetchGetJSON)

    if (error) {
        return <div>failed to load</div>
    }
    useEffect(() => {
        if (data) {
            shootFireworks()
            clearCart()
        }
    }, [data])

    return (
        <div className="container mx-auto py-12 px-6 text-center xl:max-w-screen-xl">
            {error ? (
                <div className="mx-auto max-w-md rounded-md bg-rose-100 p-2 text-rose-500">
                    <p className="text-lg">Sorry, something went wrong!</p>
                </div>
            ) : !data ? (
                <div className="mx-auto max-w-md rounded-md bg-gray-100 p-2 text-gray-500">
                    <p className="animate-pulse text-lg">Loading...</p>
                </div>
            ) : (
                <div className="mx-auto max-w-lg rounded-md bg-gray-100 py-4 px-8">
                    <h2 className="flex flex-col items-center space-x-1 text-4xl font-semibold">
                        <CheckIcon className="h-12 w-12 flex-shrink-0 text-green-600" />
                        <span>Thanks for your order!</span>
                    </h2>
                    <p className="mt-3 text-lg">Check your inbox for the receipt.</p>
                </div>
            )}
            <h1>Checkout Payment Result</h1>
            <h2>Status: {data?.payment_intent?.status ?? 'loading...'}</h2>
            <h3>CheckoutSession response:</h3>
            <PrintObject content={data ?? 'loading...'} />
        </div>
    )
}
export default RisultatoPagamento
