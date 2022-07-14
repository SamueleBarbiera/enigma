import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../../../content/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === 'GET') {
            const piano1_TOT = await prisma.parcheggi.count({ where: { parcheggio_stato: false, piano: 1 } })
            const piano2_TOT = await prisma.parcheggi.count({ where: { parcheggio_stato: false, piano: 2 } })

            res.status(200).json({ piano1_TOT, piano2_TOT })
        } else {
            res.status(400).json({
                ERRORE: 'si accettano solo GET REQ',
            })
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}


