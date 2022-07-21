/* eslint-disable @typescript-eslint/restrict-template-expressions */
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../content/lib/prisma'

const handle = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        try {
            const product = await prisma.product.findMany()
            res.status(200).json(product)
        } catch (e) {
            res.status(500).json({ message: 'Something went wrong' })
        }
    } else {
        res.setHeader('Allow', ['GET'])
        res.status(405).json({ message: `HTTP method ${req.method} is not supported.` })
    }
}

export default handle
