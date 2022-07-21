import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../content/lib/prisma'
import { withValidation } from 'next-validations'
import { z } from 'zod'
import { Product } from '@prisma/client'

const schema = z.object({
    image: z.string().nonempty(),
    name: z.string().max(20).nonempty(),
    description: z.string().min(10).nonempty(),
    price: z.number().nonnegative('Field is required not negative').gte(1),
})

const validate = withValidation({
    schema,
    type: 'Zod',
    mode: 'body',
})

interface ExtendedNextApiRequest extends NextApiRequest {
    body: {
        image: string
        name: string
        description: string
        price: number
    }
}

const handle = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        try {
            const { image, name, description, price } = req.body

            const product:Product[] = await prisma.product.create({
                data: {
                    image,
                    name,
                    description,
                    price,
                },
            })
            res.status(200).json(product)
        } catch (e) {
            res.status(500).json({ message: 'Something went wrong' })
        }
    } else {
        res.setHeader('Allow', ['POST'])
        res.status(405).json({ message: `HTTP method ${req.method} is not supported.` })
    }
}

export default validate(handle)
