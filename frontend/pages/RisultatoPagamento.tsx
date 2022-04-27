import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import useSWR from 'swr'
import { useShoppingCart } from 'use-shopping-cart/react'
import { shootFireworks } from '../content/lib/Utils'
import PrintObject from '../components/cart/PrintObject'
import ClearCart from '../components/cart/ClearCart'
import { fetchGetJSON } from '../content/utils/api-helpers'
import { CheckIcon, RefreshIcon, ExclamationCircleIcon } from '@heroicons/react/solid'
import Header from '@/components/page/Header'
import Footer from '@/components/page/Footer'

const RisultatoPagamento: NextPage = () => {
    const router = useRouter()
    const { clearCart } = useShoppingCart()
    const { data, error } = useSWR(() => (router.query.session_id ? `/api/checkout_sessions/${router.query.session_id}` : null), fetchGetJSON)

    if (error) {
        return <div>failed to load</div>
    }
    useEffect(() => {
        if (data) {
            //shootFireworks()
            clearCart()
        }
    }, [data])

    return (
        <>
            <Header />
            <div className="container h-screen py-12 px-6 text-center xl:max-w-screen-xl">
                {error ? (
                    <div className="mx-auto w-fit rounded-lg bg-red-200 py-4 px-4 shadow-xl">
                        <div className="flex flex-col items-center space-x-1 text-4xl font-semibold">
                            <ExclamationCircleIcon className="m-2 h-12 w-12 flex-shrink-0 rounded-full bg-red-100 py-2 text-red-600 " />
                            <p className="m-2 text-lg text-red-500">Qualcosa è andato storto, non preccuparti il pagamento non è andato a buon fine!</p>
                        </div>
                    </div>
                ) : !data ? (
                    <div className="mx-auto w-fit rounded-lg bg-gray-200  py-4  px-4 shadow-xl">
                        <div className="flex flex-col items-center space-x-1 text-4xl font-semibold">
                            <RefreshIcon className="m-2 h-12 w-12 flex-shrink-0 animate-spin rounded-full bg-gray-100 py-2 text-gray-800 " />
                            <p className="mt-3 animate-pulse text-lg">Caricamento . . .</p>
                        </div>
                    </div>
                ) : (
                    <div className="mx-auto w-fit rounded-lg bg-green-200 py-4 px-4 shadow-xl">
                        <h2 className="flex flex-col items-center space-x-1 text-4xl font-semibold">
                            <CheckIcon className="m-2 h-12 w-12 flex-shrink-0 rounded-full bg-green-100 py-2 text-green-600 " />
                            <span>Grazie per il tuo ordine!</span>
                            <p className="mt-3 text-base">Controlla la tua email per vedere la ricevuta!</p>
                        </h2>
                    </div>
                )}
                {/* <h1>Checkout Payment Result</h1>
            <h2>Status: {data?.payment_intent?.status ?? 'loading...'}</h2>
            <h3>CheckoutSession response:</h3>
            <PrintObject content={data ?? 'loading...'} /> */}
            </div>
            <Footer />
        </>
    )
}
export default RisultatoPagamento
