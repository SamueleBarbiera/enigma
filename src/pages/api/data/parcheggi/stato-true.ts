import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../../../content/lib/prisma'

const handle = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'GET') {
            const parcheggio_stato = await prisma.parcheggi.findFirst({
                where: { piano: 1, posto: 10, parcheggio_stato: true },
            })

            res.status(200).json({ parcheggio_stato })
        } else {
            res.status(400).json({
                ERRORE: 'si accettano solo GET REQ',
            })
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export default handle
