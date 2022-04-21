import { validateCartItems } from 'use-shopping-cart/utilities/serverless'
import { NextApiRequest, NextApiResponse } from 'next'
import { useEffect, useState } from 'react'
import Stripe from 'stripe'
import products from '../../../components/cart/Products'
import { formatAmountForStripe } from '../../../content/utils/stripe-helpers'
import axios from 'axios'
import { useShoppingCart } from 'use-shopping-cart/react'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2020-08-27',
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const result = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/variantetaglias?populate=*`)
        const products = await result.data.data
        let line_items
        {
            products.map(
                (product: any) =>
                    (line_items = [
                        {
                            name: product.name,
                            currency: 'EUR',
                            amount: product.value,
                        },
                    ])
            )
        }
        if (req.method === 'POST') {
            try {
                // Create Checkout Sessions from body params.
                const params: Stripe.Checkout.SessionCreateParams = {
                    submit_type: 'pay',
                    payment_method_types: ['card'],
                    billing_address_collection: 'auto',
                    shipping_address_collection: {
                        allowed_countries: ['IT'],
                    },
                    line_items,
                    mode: 'payment',
                    success_url: `${req.headers.origin}/RisultatoPagamento?session_id={CHECKOUT_SESSION_ID}`,
                    cancel_url: `${req.headers.origin}/Carello`,
                }
                console.log('🚀 - file: cart.ts - line 48 - handler - params', params)

                const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.create(params)

                res.status(200).json(checkoutSession)
            } catch (err) {
                console.log('❌ Payment failed: ', err)
                res.status(500).json({ statusCode: 500, message: err })
            }
        } else {
            res.setHeader('Allow', 'POST')
            res.status(405).end('Method Not Allowed')
        }
    } catch (err) {
        console.log('🚀 ERROR FETCHING ON CHECKOUT', err)
    }
}
