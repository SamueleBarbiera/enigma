import { ExclamationCircleIcon, MinusSmIcon, PlusSmIcon, RefreshIcon } from '@heroicons/react/solid'
import { fetchPostJSON } from '../../content/utils/api-helpers'
import { TrashIcon } from '@heroicons/react/outline'
import { useShoppingCart } from 'use-shopping-cart'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@prisma/client'
import { trpc } from '../../../src/content/utils/trpc'
import { CartEntry } from 'use-shopping-cart/core'

export interface ResFetch extends Response {
    id: string
}

function CartSummary() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const cart = useShoppingCart()
    const { removeItem, cartCount, addItem, clearCart, cartDetails, decrementItem, totalPrice, redirectToCheckout } =
        cart
    const [products, setProducts] = useState<Product[]>()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [cartEmpty, setCartEmpty] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')
    const [PayShopChecked, setPayShopChecked] = useState(true)
    const [RetirePkgShopChecked, setRetirePkgShopChecked] = useState(true)

    useEffect(() => setCartEmpty(!cartCount), [cartCount])

    function toFixedIfNecessary(value: string, dp: number | undefined) {
        return +parseFloat(value).toFixed(dp)
    }

    const handleCheckout: React.FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault()
        setLoading(true)
        setErrorMessage('')

        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const response: ResFetch = await fetchPostJSON('/api/checkout_sessions/cart', { cartDetails }, totalPrice)

        if (response.status > 399) {
            console.error(response.statusText)
            setErrorMessage(response.statusText)
            setLoading(false)
            return
        }
        await redirectToCheckout(response.id)
    }

    const { status, data } = trpc.useQuery(['createProduct.view'], {
        suspense: true,
        onError: (err) => {
            setLoading(false)
            let message
            if (err instanceof Error) message = err.message
            else message = String(err)
            console.log(err instanceof Error ? err.message : 'Unknown error')
            setError(message)
        },
        onSuccess() {
            if (status == 'success') {
                setLoading(false)
                console.log('🚀 - file: Products.tsx - line 76 - fetchData - jsonResponse', data)
                setProducts(data)
                return products
            } else if (status == 'loading') {
                setLoading(true)
            }
        },
    })

    const cartDet = Object.values(cartDetails ?? {})

    return (
        <>
            <div className="h-fit overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                {loading ? (
                    <div className="mx-auto h-min max-w-full rounded-lg bg-beige-200  py-4  px-4 shadow-xl">
                        <div className="flex flex-col items-center space-x-1 text-4xl font-semibold">
                            <RefreshIcon className="m-2 h-12 w-12 flex-shrink-0 animate-spin rounded-full bg-beige-100 py-2 text-gray-800 " />
                            <p className="mt-3 animate-pulse text-lg">Caricamento . . .</p>
                        </div>
                    </div>
                ) : error ? (
                    <div className="mx-auto h-min max-w-full rounded-lg bg-red-100 py-4 px-4 shadow-xl">
                        <div className="flex flex-col items-center space-x-1 text-4xl font-semibold">
                            <ExclamationCircleIcon className="mt-3 h-12 w-12 flex-shrink-0  text-red-600" />
                            <p className="mt-3 text-lg text-red-500">
                                Qualcosa è andato storto, non preccuparti il pagamento non è andato a buon fine . . .
                            </p>
                            <p>{error}</p>
                        </div>
                    </div>
                ) : (
                    <div className="relative flex bg-beige-50 ">
                        <div className="mx-min xl:w-max">
                            {/*eslint-disable-next-line @typescript-eslint/no-non-null-assertion */}
                            {cartCount! > 0 ? (
                                <>
                                    <div className="flex-1 overflow-auto py-6 px-4 sm:px-6">
                                        <div className="flex items-start justify-between">
                                            <p className="text-2xl font-semibold text-gray-900">Carrello</p>
                                        </div>
                                        <div className="mt-8 xl:grid ">
                                            <div className="xl:grid">
                                                <ul role="list" className="-my-6 xl:grid  xl:grid-cols-2 xl:gap-x-4 ">
                                                    {cartDet.map((product: CartEntry) => (
                                                        <li key={product.id} className="flex py-6">
                                                            <Link href={`/Prodotti/${product.id}`} key={product.id}>
                                                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-beige-200 shadow-lg">
                                                                    <Image
                                                                        width={64}
                                                                        height={64}
                                                                        layout="responsive"
                                                                        className="h-full w-full rounded-md object-cover object-center shadow-md"
                                                                        src={product.image ?? ''}
                                                                        alt={'not found'}
                                                                    />
                                                                </div>
                                                            </Link>
                                                            <div className="ml-4 flex flex-1 flex-col">
                                                                <div>
                                                                    <div className="flex  w-full min-w-full justify-between text-sm font-medium text-gray-900">
                                                                        <p className="font-semibold capitalize">
                                                                            {product.name}
                                                                        </p>
                                                                        <p className="ml-2 w-max">
                                                                            {toFixedIfNecessary(
                                                                                (
                                                                                    product.price * product.quantity
                                                                                ).toString(),
                                                                                2
                                                                            )}{' '}
                                                                            €
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="flex flex-1 items-end justify-between text-sm">
                                                                    <div className="flex items-center space-x-4">
                                                                        <button
                                                                            // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
                                                                            onClick={() => decrementItem(product.id)}
                                                                            disabled={product.quantity <= 1}
                                                                            className="rounded-md bg-rose-100 p-1 transition duration-150 ease-in-out hover:bg-rose-200 hover:text-rose-900 disabled:cursor-not-allowed disabled:text-black disabled:opacity-50  disabled:hover:bg-beige-100 disabled:hover:text-current"
                                                                        >
                                                                            <MinusSmIcon className="h-6 w-6 flex-shrink-0" />
                                                                        </button>
                                                                        <p className="text-lg font-light">
                                                                            {product.quantity}
                                                                        </p>
                                                                        <button
                                                                            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                                                                            onClick={() => addItem(product)}
                                                                            className="rounded-md bg-beige-200 p-1 transition duration-150 ease-in-out hover:bg-beige-400 hover:text-white"
                                                                        >
                                                                            <PlusSmIcon className="h-6 w-6 flex-shrink-0 " />
                                                                        </button>
                                                                    </div>

                                                                    <div className="mb-1 flex">
                                                                        {/*eslint-disable-next-line @typescript-eslint/no-unsafe-return*/}
                                                                        <button
                                                                            onClick={() => removeItem(product.id)}
                                                                            className="ml-4 hover:text-rose-500"
                                                                        >
                                                                            <TrashIcon className="h-6 w-6 flex-shrink-0  opacity-50 transition-opacity hover:opacity-100" />
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4  bg-beige-200 py-6 px-4 sm:px-6">
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                            <p>Costo Totale</p>
                                            <p>{totalPrice} €</p>
                                        </div>
                                        <form onSubmit={handleCheckout} className="flex justify-between gap-2">
                                            {errorMessage ? (
                                                <p style={{ color: 'red' }}>Error: {errorMessage}</p>
                                            ) : null}
                                            <div className="mt-6 w-full">
                                                <button
                                                    type="submit"
                                                    disabled={cartEmpty || loading}
                                                    className="w-full items-start justify-start rounded-md  bg-beige-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-beige-700"
                                                >
                                                    Checkout
                                                </button>
                                            </div>
                                            <div className="mt-6 w-full">
                                                <button
                                                    className="w-full items-end justify-end rounded-md  bg-beige-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-beige-700"
                                                    type="button"
                                                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                                                    onClick={clearCart}
                                                >
                                                    Svuota
                                                </button>
                                            </div>
                                        </form>
                                        <div className="mt-4">
                                            <label className="flex items-center">
                                                <input
                                                    onChange={() => setPayShopChecked(!PayShopChecked)}
                                                    type="checkbox"
                                                    className="transiction rounded border-2 border-beige-500 text-beige-400 duration-100 ease-in-out focus:ring-beige-600 "
                                                />
                                                <span className="ml-4">Pagerò al negozio fisico</span>
                                            </label>
                                            <label className="flex items-center">
                                                <input
                                                    onChange={() => setRetirePkgShopChecked(!RetirePkgShopChecked)}
                                                    type="checkbox"
                                                    className="transiction rounded border-2 border-beige-500 text-beige-400 duration-100 ease-in-out focus:ring-beige-600 "
                                                />
                                                <span className="ml-4">Ritirerò il pacco al negozio fisico</span>
                                            </label>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className="w-max rounded-lg bg-beige-100 p-4">
                                    <h2 className="text-2xl font-semibold">Il tuo carello è vuoto.</h2>
                                    <p className="mt-3 text-xl ">
                                        Visualizza i nostri vestiti{' '}
                                        <Link
                                            className="ml-1 rounded-lg bg-beige-200 py-1 px-2 text-gray-700"
                                            href="/Prodotti"
                                        >
                                            qui!
                                        </Link>
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default CartSummary
