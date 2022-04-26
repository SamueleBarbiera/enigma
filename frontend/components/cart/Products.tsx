import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart/react'
import { BsPlusLg } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { ExclamationCircleIcon, MinusSmIcon, PlusSmIcon, RefreshIcon, XCircleIcon, XIcon } from '@heroicons/react/solid'
import { fetchPostJSON } from 'content/utils/api-helpers'

function Products() {
    const { addItem,  cartCount, cartDetails, totalPrice, redirectToCheckout } = useShoppingCart()
    const [products, setProducts] = useState<any>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<boolean>()
    const [cartEmpty, setCartEmpty] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/variantetaglias?populate=*`)
                if (res.status == 200) {
                    console.log('🚀 - file: Products.tsx - line 76 - fetchData - jsonResponse', res.data.data)
                    setProducts(res.data.data)
                    setError(false)
                    return products
                }
            } catch (err) {
                setError(err)
                console.log('🚀 ERROR FETCHING', err)
            }
        }
        fetchData()
        setLoading(false)
    }, [setProducts])

    return (
        <>
            {loading ? (
                <div className="mx-auto h-min max-w-full rounded-lg bg-gray-200  py-4  px-4 shadow-xl">
                    <div className="flex flex-col items-center space-x-1 text-4xl font-semibold">
                        <RefreshIcon className="mt-3 h-12 w-12 flex-shrink-0 animate-spin text-gray-800" />
                        <p className="mt-3 animate-pulse text-lg">Caricamento . . .</p>
                    </div>
                </div>
            ) : error ? (
                <div className="mx-auto h-min max-w-full rounded-lg bg-red-100 py-4 px-4 shadow-xl">
                    <div className="flex flex-col items-center space-x-1 text-4xl font-semibold">
                        <ExclamationCircleIcon className="mt-3 h-12 w-12 flex-shrink-0 animate-bounce text-red-600" />
                        <p className="mt-3 text-lg text-red-500">Qualcosa è andato storto, non preccuparti il pagamento non è andato a buon fine . . .</p>
                        <p>{error}</p>
                    </div>
                </div>
            ) : (
                <main className="min-h-screen">
                    {products.map((product: any) => (
                        <div key={product.id}>
                            <div className="flex flex-1">
                                {product.image.data.map((image: any) => (
                                    <img className="flex  h-auto w-24 flex-row justify-between" src={process.env.NEXT_PUBLIC_API_URL + '' + image.url} alt={'not found'} />
                                ))}
                            </div>

                            <h2>{product.name}</h2>
                            <p>
                                {formatCurrencyString({
                                    value: product.price * 100,
                                    currency: 'EUR',
                                })}
                            </p>
                            <div className="flex items-center space-x-3">
                                <button onClick={() => addItem(product)} className="rounded-md p-1 hover:bg-green-100 hover:text-green-500">
                                    <PlusSmIcon className="h-6 w-6 flex-shrink-0 " />
                                </button>
                            </div>
                        </div>
                    ))}
                </main>
            )}
        </>
    )
}

export default Products
