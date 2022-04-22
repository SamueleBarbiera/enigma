import React, { useState, useEffect } from 'react'
import { useShoppingCart } from 'use-shopping-cart/react'
import { fetchPostJSON } from '../../content/utils/api-helpers'

const CartSummary = () => {
    const [loading, setLoading] = useState(false)
    const [cartEmpty, setCartEmpty] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')
    const { formattedTotalPrice, cartCount, clearCart, cartDetails, redirectToCheckout, totalPrice } = useShoppingCart()

    useEffect(() => setCartEmpty(!cartCount), [cartCount])

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

    return (
        <form onSubmit={handleCheckout}>
            <h2>Cart summary</h2>
            {errorMessage ? <p style={{ color: 'red' }}>Error: {errorMessage}</p> : null}
            {/* This is where we'll render our cart */}
            <p suppressHydrationWarning>
                <strong>Number of Items:</strong> {cartCount}
            </p>
            <p suppressHydrationWarning>
                <strong>Total:</strong> {Number(totalPrice.toString().slice(0, 5))} €
            </p>

            {/* Redirects the user to Stripe */}
            <button className="m-4 rounded-lg bg-beige-900 p-2 text-white" type="submit" disabled={cartEmpty || loading}>
                Checkout
            </button>
            <button className="m-4 rounded-lg bg-beige-900 p-2 text-white" type="button" onClick={clearCart}>
                Clear Cart
            </button>
        </form>
    )
}

export default CartSummary
