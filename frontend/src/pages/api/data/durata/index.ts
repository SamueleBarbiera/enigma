import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../../../content/lib/prisma'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === 'GET') {
            const durataGet = await prisma.durata.findMany({ include: { parcheggi: true } })
            res.status(200).json({ durataGet })
        } else {
            res.status(400).json({
                ERRORE: 'si accettano solo GET REQ',
            })
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}
