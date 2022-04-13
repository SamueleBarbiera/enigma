import {createContext} from 'react'
import Stripe from 'stripe'

export type CartContextProps = {
    items?: any[]
    remove?: (priceID: string) => void
    add?: (product: any) => void
}

const cartContextProps: CartContextProps = {}

const CartContext = createContext(cartContextProps)

export default CartContext
