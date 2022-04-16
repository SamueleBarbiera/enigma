import products from '../../content/data/products'
import CartContext from 'context/CartContext'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import CartSummary from './CartSummary'
import { useShoppingCart, DebugCart, formatCurrencyString } from 'use-shopping-cart/react'
import { Product, CartActions, CartEntry as ICartEntry } from 'use-shopping-cart/core'

function CartEntry({ entry, removeItem }: { entry: ICartEntry; removeItem: CartActions['removeItem'] }) {
    return (
        <div>
            <h3>{entry.name}</h3>
            {entry.image ? <img width={100} src={entry.image} alt={entry.description} /> : null}
            <p>
                {entry.quantity} x {formatCurrencyString({ value: entry.price, currency: 'USD' })} = {entry.formattedValue}
            </p>
            <button onClick={() => removeItem(entry.id)}>Remove</button>
        </div>
    )
}

function Cart() {
    const cart = useShoppingCart()
    const { removeItem, cartDetails, clearCart, formattedTotalPrice } = cart

    const cartEntries = Object.values(cartDetails ?? {}).map((entry) => <CartEntry key={entry.id} entry={entry} removeItem={removeItem} />)

    return (
        <div>
            <h2>Cart</h2>
            <p>Total: {formattedTotalPrice}</p>
            {cartEntries.length === 0 ? <p>Cart is empty.</p> : null}
            {cartEntries.length > 0 ? (
                <>
                    <button onClick={() => clearCart()}>Clear cart</button>
                    {cartEntries}
                </>
            ) : null}
        </div>
    )
}
function ProductListing({ product, addItem }: { product: Product; addItem: CartActions['addItem'] }) {
    return (
        <div key={product.id}>
            <h3>{product.name}</h3>
            {product.image ? <img width={300} src={product.image} alt={product.description} /> : null}
            <p>{formatCurrencyString({ value: product.price, currency: 'USD' })}</p>
            <button onClick={() => addItem(product)} aria-label={`Add one ${product.name} to your cart.`}>
                Add 1 to Cart
            </button>
        </div>
    )
}

function ProductList() {
    const cart = useShoppingCart()
    const { addItem } = cart

    return (
        <div>
            <h2>Products</h2>
            {products.map((product) => (
                <ProductListing key={product.id} product={product} addItem={addItem} />
            ))}
        </div>
    )
}
const Products = () => {
    const { addItem, removeItem } = useShoppingCart()

    return (
        <section className="products ">
            <CartSummary />
            <ProductList />
            <Cart />
            {products.map((product) => (
                <div key={product.id} className="product">
                    <img src={product.image} alt={product.name} />
                    <h2>{product.name}</h2>
                    <p className="price">
                        {formatCurrencyString({
                            value: product.price,
                            currency: product.currency,
                        })}
                    </p>
                    <button className="cart-style-background" onClick={() => addItem(product)}>
                        Add to cart
                    </button>
                    <button className="cart-style-background" onClick={() => removeItem(product.id)}>
                        Remove
                    </button>
                </div>
            ))}
        </section>
    )
}

export default Products
