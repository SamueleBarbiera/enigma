import { ExclamationCircleIcon, MinusSmIcon, PlusSmIcon, RefreshIcon } from '@heroicons/react/solid'
import { XCircleIcon, XIcon } from '@heroicons/react/solid'
import { useShoppingCart } from 'use-shopping-cart/react'
import { fetchPostJSON } from '../../content/utils/api-helpers'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { ChartBarIcon, CursorClickIcon, DocumentReportIcon, ShieldCheckIcon, ViewGridIcon } from '@heroicons/react/outline'

const solutions = [
    {
        name: 'Analytics',
        description: 'Get a better understanding of where your traffic is coming from.',
        href: '#',
        icon: ChartBarIcon,
    },
    {
        name: 'Engagement',
        description: 'Speak directly to your customers in a more meaningful way.',
        href: '#',
        icon: CursorClickIcon,
    },
    { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
    {
        name: 'Integrations',
        description: "Connect with third-party tools that you're already using.",
        href: '#',
        icon: ViewGridIcon,
    },
    {
        name: 'Automations',
        description: 'Build strategic funnels that will drive your customers to convert',
        href: '#',
        icon: RefreshIcon,
    },
    {
        name: 'Reports',
        description: 'Get detailed reports that will help you make more informed decisions',
        href: '#',
        icon: DocumentReportIcon,
    },
]

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

function CartSummary() {
    const { addItem, removeItem, cartCount, clearCart, cartDetails, decrementItem, totalPrice, redirectToCheckout } = useShoppingCart()
    const [products, setProducts] = useState<any>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<boolean>()
    const [cartEmpty, setCartEmpty] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => setCartEmpty(!cartCount), [cartCount])
    function toFixedIfNecessary(value: string, dp: number | undefined) {
        return +parseFloat(value).toFixed(dp)
    }
    const handleCheckout: React.FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault()
        setLoading(true)
        setErrorMessage('')

        const response = await fetchPostJSON(`/api/checkout_sessions/cart`, { cartDetails }, { totalPrice })
        console.log(response)

        if (response.statusCode > 399) {
            console.error(response.message)
            setErrorMessage(response.message.code)
            setLoading(false)
            return
        }

        redirectToCheckout({ sessionId: response.id })
    }
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
    const cartDet = Object.entries(cartDetails).map((e) => e[1])

    return (
        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
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
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-1">
                    <div className="container mx-auto py-12 px-6 xl:max-w-screen-xl">
                        {cartCount > 0 ? (
                            <>
                                <h2 className="text-4xl font-medium">Carrello ( {cartCount} prodotti )</h2>
                            </>
                        ) : (
                            <>
                                <h2 className="text-4xl font-semibold">Il tuo carello è vuoto.</h2>
                                <p className="mt-1 text-xl">
                                    Visualizza i nostri vestiti{' '}
                                    <a className="text-red-500 underline" href="/">
                                        qui!
                                    </a>
                                </p>
                            </>
                        )}

                        {cartCount > 0 ? (
                            <div className="mt-12">
                                {cartDet.map((product: any) => (
                                    <div key={product.id} className="-m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50">
                                        {/* Image + Name */}
                                        <a className="group flex items-center space-x-4" href={`/products/${product.id}`}>
                                            <div className="relative h-20 w-20 transition-transform group-hover:scale-110">
                                                <img
                                                    className="flex h-auto w-24 flex-row justify-between rounded-md shadow-md"
                                                    src={process.env.NEXT_PUBLIC_API_URL + '' + product.image.data[0].url}
                                                    alt={'not found'}
                                                />
                                            </div>
                                            <p className="text-md font-semibold group-hover:underline">{product.name}</p>
                                        </a>

                                        {/* Price + Actions */}
                                        <div className="flex items-center">
                                            {/* Quantity */}
                                            <div className="flex items-center space-x-3">
                                                <button
                                                    onClick={() => decrementItem(product.id)}
                                                    disabled={product?.quantity <= 1}
                                                    className="rounded-md p-1 hover:bg-rose-100 hover:text-rose-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-current"
                                                >
                                                    <MinusSmIcon className="h-6 w-6 flex-shrink-0" />
                                                </button>
                                                <p className="text-xl font-semibold">{product.quantity}</p>
                                                <button onClick={() => addItem(product)} className="rounded-md p-1 hover:bg-green-100 hover:text-green-500">
                                                    <PlusSmIcon className="h-6 w-6 flex-shrink-0 " />
                                                </button>
                                            </div>

                                            <XIcon className="ml-8 -mr-4 inline-block h-4 w-4 text-gray-500" />
                                            {/* Price */}
                                            <p className="ml-16 text-xl font-semibold">{product.price} €</p>

                                            {/* Remove item */}
                                            <button onClick={() => removeItem(product.id, product.quantity)} className="ml-4 hover:text-rose-500">
                                                <XCircleIcon className="h-6 w-6 flex-shrink-0 opacity-50 transition-opacity hover:opacity-100" />
                                            </button>
                                        </div>
                                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-beige-500 text-white sm:h-12 sm:w-12"></div>
                                        <div className="ml-4">
                                            <p className="text-base font-medium text-gray-900">{product.name}</p>
                                            <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : null}
                    </div>
                </div>
            )}
            <div className="bg-gray-50 p-5 sm:p-8">
                <a href="#" className="-m-3 flow-root rounded-md p-3 transition duration-150 ease-in-out">
                    <form onSubmit={handleCheckout} className="justify-start">
                        {errorMessage ? <p style={{ color: 'red' }}>Error: {errorMessage}</p> : null}
                        {/* This is where we'll render our cart */}

                        {/* Redirects the user to Stripe */}
                        <button className="m-4 rounded-lg bg-beige-900 p-2 text-white" type="submit" disabled={cartEmpty || loading}>
                            Checkout
                        </button>
                        <button className="m-4 rounded-lg bg-beige-900 p-2 text-white" type="button" onClick={clearCart}>
                            Clear Cart
                        </button>
                    </form>
                    <p className="justify-end text-xl">
                        Total: <span className="font-semibold">{toFixedIfNecessary(totalPrice, 2)} €</span>
                    </p>
                    <span className="flex items-center">
                        <span className="text-base font-medium text-gray-900">Enterprise</span>
                        <span className="ml-3 inline-flex items-center rounded-full bg-beige-100 px-3 py-0.5 text-xs font-medium leading-5 text-beige-800">New</span>
                    </span>
                    <span className="mt-1 block text-sm text-gray-500">Empower your entire team with even more advanced tools.</span>
                </a>
            </div>
        </div>
    )
}

export default CartSummary
