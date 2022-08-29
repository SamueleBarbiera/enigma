/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'
import { CartDet } from 'src/types/Cart'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
    apiVersion: '2022-08-01',
})

interface ExtendedNextApiRequest extends NextApiRequest {
    body: {
        data: {
            id: string
            cartDetails: CartDet
            amount: { totalPrice: number }
            image: string
            name: string
            description: string
            price: number
        }
    }
}

export default async function handler(req: ExtendedNextApiRequest, res: NextApiResponse) {
    const amount = Number((req.body.data.amount.totalPrice * 100).toString().slice(0, 6))
    const cartdet: CartDet = req.body.data.cartDetails
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
                        name: 'Costo totale',
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                        price: cartdet.id,
                        currency: 'EUR',
                        amount: amount,
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
