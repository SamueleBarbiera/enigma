import React, { useState, useEffect } from 'react'
import { useShoppingCart } from 'use-shopping-cart/react'
import { fetchPostJSON } from '../../utils/api-helpers'

const CartSummary = () => {
    const [loading, setLoading] = useState(false)
    const [cardData, setcardData] = useState()
    const [cartEmpty, setCartEmpty] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')
    const { formattedTotalPrice, cartCount, clearCart, cartDetails, redirectToCheckout } = useShoppingCart()

    useEffect(() => setCartEmpty(!cartCount), [cartCount])
    useEffect(() => setcardData(cartCount), [cartCount])
    
    const handleCheckout = async (e:any) => {
        e.preventDefault()
        setLoading(true)
        setErrorMessage('')
        const response = await fetchPostJSON('/api/checkout_sessions/cart', cartDetails)
        console.log("🚀 - file: CartSummary.tsx - line 20 - handleCheckout - response", response)

        if (response.statusCode > 399) {
            console.error(response.message)
            setErrorMessage(response.message)
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
                <strong>Total:</strong> {formattedTotalPrice}
            </p>

            {/* Redirects the user to Stripe */}
            <button className="cart-style-background" type="submit" disabled={cartEmpty || loading}>
                Checkout
            </button>
            <button className="cart-style-background" type="button" onClick={clearCart}>
                Clear Cart
            </button>
        </form>
    )
}

export default CartSummary
