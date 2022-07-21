import { validateCartItems } from 'use-shopping-cart/utilities/serverless'
import { NextApiRequest, NextApiResponse } from 'next'
import { useEffect, useState } from 'react'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2020-08-27',
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const amount = Number((req.body.amount.totalPrice * 100).toString().slice(0, 6))
    const cartdet = Object.entries(req.body.data.cartDetails).map((e) => e[1])
    const reqHeadersOrigin: string = req.headers.origin
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
                line_items: [
                    {
                        name: 'Costo totale',
                        price: cartdet.id,
                        currency: 'EUR',
                        amount: amount,
                        quantity: 1,
                    },
                ],
                mode: 'payment',
                success_url: `${reqHeadersOrigin}/RisultatoPagamento?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${reqHeadersOrigin}/CancelPagamento`,
            }
            //console.log('🚀 - file: cart.ts - line 48 - handler - params', params)
            const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.create(params)
            res.status(200).json(checkoutSession)
        } catch (err: unknown) {
            console.log('❌ Payment failed: ', err)
            res.status(500).json({ statusCode: 500, message: err })
        }
    } else {
        res.setHeader('Allow', 'POST')
        res.status(405).end('Method Not Allowed')
    }
}
