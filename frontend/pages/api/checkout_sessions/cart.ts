import { validateCartItems } from 'use-shopping-cart/utilities/serverless'
import { NextApiRequest, NextApiResponse } from 'next'
import { useEffect, useState } from 'react'
import Stripe from 'stripe'
import products from '../../../components/cart/Products'
import { formatAmountForDisplay } from '../../../content/utils/stripe-helpers'
import axios from 'axios'
import { useShoppingCart } from 'use-shopping-cart/react'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2020-08-27',
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const amount: number = Number((req.body.amount.totalPrice * 100).toString().slice(0, 4))
    // const cartdet: any = Object.entries(req.body.data.cartDetails).map((e) => e[1])
    // let img
    // {
    //     cartdet.map((image: any) => (img = image.image.data.map((image: any) => `https://347e-79-8-186-197.ngrok.io${image.url}`)))
    // }
    // console.log('🚀 - file: cart.ts - line 57 - handler - img', img)

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
                        // quantity: 1,
                        // price_data: {
                        //     currency: 'EUR',
                        //     unit_amount: amount,
                        //     product_data: {
                        //         name: 'Costo totale',
                        //         images: img,
                        //     },
                        // },
                        name: 'Costo totale',
                        currency: 'EUR',
                        amount: amount,
                        quantity: 1,
                    },
                ],
                mode: 'payment',
                success_url: `${req.headers.origin}/RisultatoPagamento?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${req.headers.origin}/CancelPagamento`,
            }
            //console.log('🚀 - file: cart.ts - line 48 - handler - params', params)
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
}
