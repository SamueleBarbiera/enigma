import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../../../content/lib/prisma'
import { withValidation } from 'next-validations'
import { z } from 'zod'

const schema = z.object({
    piano: z.number().nonnegative('Field is required not negative').lte(2),
    posto: z.number().nonnegative('Field is required not negative').lte(50),
})

const validate = withValidation({
    schema,
    type: 'Zod',
    mode: 'body',
})

interface ExtendedNextApiRequest extends NextApiRequest {
    body: {
        piano: number
        posto: number
    }
}

// una volta confermata l'associazione con rfid
// ti invio una post con campo rfid settato e la durata in minuti di occupazione
// del posto parcheggio generata Random

const handle = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
    const { piano, posto } = req.body
    try {
        if (req.method === 'POST') {
            const trovaUltimoRecord = await prisma.parcheggi.findFirst({
                where: {
                    piano: piano,
                    posto: posto,
                    parcheggio_stato: true,
                },
            })
            const Occupazioneparcheggi = await prisma.parcheggi.update({
                where: { parcheggi_id: trovaUltimoRecord?.parcheggi_id },
                data: { parcheggio_stato: false },
            })

            res.status(200).json({ Occupazioneparcheggi })
        } else {
            res.status(400).json({
                ERRORE: 'si accettano solo POST REQ',
            })
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export default validate(handle)
