/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'
import { CartDet } from 'src/types/Cart'
import { env } from 'src/env/server.mjs'

const stripe = new Stripe(env.STRIPE_SECRET_KEY, {
    apiVersion: '2022-08-01',
})

interface ExtendedNextApiRequest extends NextApiRequest {
    body: {
        data: {
            cartDetails: CartDet
        }
    }
}

export default async function handler(req: ExtendedNextApiRequest, res: NextApiResponse) {
    console.log('🚀 ~ file: cart.ts ~ line 26 ~ handler ~ req', req.body.data)
    const amount = req.body.data.cartDetails.value
    const cartdet: CartDet = req.body.data.cartDetails
    console.log('🚀 ~ file: cart.ts ~ line 30 ~ handler ~ cartdet', amount, cartdet)
    const reqHeadersOrigin = req.headers.origin

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
                        price_data: {
                            currency: 'EUR',
                            unit_amount: cartdet.value,
                            product: cartdet.id,
                            //product_data: cartdet,
                        },
                        //currency: 'EUR',
                        // price: cartdet.id,
                        amount: cartdet.value,
                        quantity: 1,
                    },
                ],
                mode: 'payment',
                success_url: `${reqHeadersOrigin ?? ''}/RisultatoPagamento?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${reqHeadersOrigin ?? ''}/CancelPagamento`,
            }

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
