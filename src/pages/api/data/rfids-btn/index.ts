import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../../../content/lib/prisma'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === 'GET') {
            const result = await prisma.rfids.findMany({
                include: { user: true },
            })
            res.status(200).json({result})
        } else {
            res.status(400).json({
                ERRORE: 'si accettano solo GET REQ',
            })
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}
