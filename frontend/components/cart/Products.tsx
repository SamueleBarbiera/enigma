import CartSummary from './CartSummary'
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart/react'
import { CartActions, CartEntry as ICartEntry } from 'use-shopping-cart/core'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { MinusSmIcon, PlusSmIcon, XCircleIcon, XIcon } from '@heroicons/react/solid'



function Products() {
    const { addItem, removeItem, cartCount, clearCart, cartDetails, totalPrice } = useShoppingCart()
    const [products, setProducts] = useState<any>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<boolean>()

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
        <>
            {loading ? (
                <p>loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <main className="min-h-screen">
                    <CartSummary />
                    <div className="container mx-auto py-12 px-6 xl:max-w-screen-xl">
                        {cartCount > 0 ? (
                            <>
                                <h2 className="text-4xl font-semibold">Your shopping cart</h2>
                                <p className="mt-1 text-xl">
                                    {cartCount} items{' '}
                                    <button onClick={clearCart} className="text-base capitalize opacity-50 hover:opacity-100">
                                        (Clear all)
                                    </button>
                                </p>
                            </>
                        ) : (
                            <>
                                <h2 className="text-4xl font-semibold">Your shopping cart is empty.</h2>
                                <p className="mt-1 text-xl">
                                    Check out our awesome plants{' '}
                                    <a className="text-red-500 underline" href="/">
                                        here!
                                    </a>
                                </p>
                            </>
                        )}

                        {cartCount > 0 ? (
                            <div className="mt-12">
                                {cartDet.map((product: any) => (
                                    <div key={product.id} className="flex justify-between space-x-4 rounded-md border border-opacity-0 p-4 hover:border-opacity-50 hover:shadow-lg">
                                        {/* Image + Name */}
                                        <a>
                                            <a className="group flex items-center space-x-4" href={`/products/${product.id}`}>
                                                <div className="relative h-20 w-20 transition-transform group-hover:scale-110">
                                                    <img src={product.image} alt={product.name} />
                                                </div>
                                                <p className="text-xl font-semibold group-hover:underline">{product.name}</p>
                                            </a>
                                        </a>

                                        {/* Price + Actions */}
                                        <div className="flex items-center">
                                            {/* Quantity */}
                                            <div className="flex items-center space-x-3">
                                                <button
                                                    onClick={() => removeItem(product)}
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

                                            {/* Price */}
                                            <p className="ml-16 text-xl font-semibold">
                                                <XIcon className="inline-block h-4 w-4 text-gray-500" />
                                                {product.price}
                                            </p>

                                            {/* Remove item */}
                                            <button onClick={() => removeItem(product, product.quantity)} className="ml-4 hover:text-rose-500">
                                                <XCircleIcon className="h-6 w-6 flex-shrink-0 opacity-50 transition-opacity hover:opacity-100" />
                                            </button>
                                        </div>
                                    </div>
                                ))}

                                <div className="mt-8 flex flex-col items-end border-t py-4">
                                    <p className="text-xl">
                                        Total: <span className="font-semibold">{totalPrice}</span>
                                    </p>
                                </div>
                            </div>
                        ) : null}
                    </div>
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
                            <button className="m-4 rounded-lg bg-beige-900 p-2 text-white" onClick={() => addItem(product)}>
                                Add to cart
                            </button>
                            <button className="m-4 rounded-lg bg-red-900 p-2 text-white" onClick={() => removeItem(product.id)}>
                                Remove
                            </button>
                        </div>
                    ))}
                </main>
            )}
        </>
    )
}

export default Products
