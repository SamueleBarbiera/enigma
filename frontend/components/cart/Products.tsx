import CartSummary from './CartSummary'
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart/react'
import { Product, CartActions, CartEntry as ICartEntry } from 'use-shopping-cart/core'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    // https://github.com/stripe/stripe-node#configuration
    apiVersion: '2020-08-27',
})
function Products() {
    const { addItem, removeItem } = useShoppingCart()
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
                    return
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
                <p>loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <main className="min-h-screen">
                    <CartSummary />
                    {products.map((product: any) => (
                        <div key={product.id}>
                            <img src={product.image.url} alt={product.name} />
                            <h2>{product.name}</h2>
                            <p>
                                {formatCurrencyString({
                                    value: product.price,
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
