import CartSummary from './CartSummary'
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart/react'
import { CartActions, CartEntry as ICartEntry } from 'use-shopping-cart/core'
import { useState, useEffect } from 'react'
import axios from 'axios'

function CartEntry({ entry, removeItem }: { entry: ICartEntry; removeItem: CartActions['removeItem'] }) {
    console.log(entry)
    return (
        <div>
            <h3>{entry.name}</h3>
            {entry.image ? <img width={100} src={process.env.NEXT_PUBLIC_API_URL + '' + entry.image.data[0].url} alt={entry.description} /> : null}
            <p>
                {entry.quantity} x {formatCurrencyString({ value: entry.price, currency: 'USD' })} = {entry.formattedValue}
            </p>
            <button onClick={() => removeItem(entry.id)}>Remove</button>
        </div>
    )
}

function Cart() {
    const cart = useShoppingCart()
    const { removeItem, cartDetails, cartCount } = cart

    const cartEntries = Object.values(cartDetails ?? {}).map((entry) => <CartEntry key={entry.id} entry={entry} removeItem={removeItem} />)

    return (
        <div>
            {cartEntries.length === 0 ? <p className="text-red-500">Il carrello è vuoto</p> : null}
            {cartEntries.length > 0 ? (
                <>
                    <strong>Prodotti nel carrello:</strong> {cartCount}
                    {cartEntries}
                </>
            ) : null}
        </div>
    )
}

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
                <p>loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <main className="min-h-screen">
                    <CartSummary />
                    <Cart />
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
