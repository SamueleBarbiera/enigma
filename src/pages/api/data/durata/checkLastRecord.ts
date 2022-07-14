import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../../../content/lib/prisma'

const handle = async (req: NextApiRequest, res: NextApiResponse) => {
    let Now: any = Date.now()
    Now = new Date(Now).toISOString()
    let TenSecAgo: any = Date.now() - 15000
    TenSecAgo = new Date(TenSecAgo).toISOString()
    console.log('ltDate - gtDate', Now, TenSecAgo)

    try {
        if (req.method === 'GET') {
            const avviaPagamento = await prisma.durata.findMany({
                where: {
                    pagamento_effettuato: true,
                    updatedAt: {
                        gte: TenSecAgo,
                    },
                },
                select: { costo_finale: true },
            })
            if (avviaPagamento.length === 0) {
                res.status(200).json(null)
            } else {
                res.status(200).json({ avviaPagamento })
            }
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
