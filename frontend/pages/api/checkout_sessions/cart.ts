import { validateCartItems } from 'use-shopping-cart/utilities/serverless'
import { NextApiRequest, NextApiResponse } from 'next'
import { useEffect, useState } from 'react'
import Stripe from 'stripe'
import axios from 'axios'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2020-08-27',
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const [products, setProducts] = useState<any>([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/variantetaglias?populate=*`)
                if (res.status == 200) {
                    console.log('🚀 - file: Products.tsx - line 76 - fetchData - jsonResponse', res.data.data)
                    setProducts(res.data.data)
                    return
                }
            } catch (err) {
                console.log('🚀 ERROR FETCHING', err)
            }
        }
        fetchData()
    }, [setProducts])

    if (req.method === 'POST') {
        try {
            // Validate the cart details that were sent from the client.
            const line_items = validateCartItems(products as any, req.body)
            //console.log('🚀 - file: cart.ts - line 33 - handler - line_items', line_items)

            // Create Checkout Sessions from body params.
            const params: Stripe.Checkout.SessionCreateParams = {
                submit_type: 'pay',
                payment_method_types: ['card'],
                billing_address_collection: 'auto',
                shipping_address_collection: {
                    allowed_countries: ['IT'],
                },
                mode: 'payment',
                line_items,
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
}
