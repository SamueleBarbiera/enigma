import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../../../content/lib/prisma'
import { withValidation } from 'next-validations'
import { z } from 'zod'

const schema = z.object({
    rfid_codice: z.string().length(13).nonempty(),
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
        rfid_codice: string
        piano: number
        posto: number
    }
}

const handle = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
    const { rfid_codice, piano, posto } = req.body

    try {
        if (req.method === 'POST') {
            if (rfid_codice !== '') {
                const findParcheggio = await prisma.parcheggi.findFirst({
                    where: {
                        piano: piano,
                        posto: posto,
                        parcheggio_stato: true,
                    },
                    select: { parcheggi_id: true },
                })
                const trovaPagamento = await prisma.durata.findFirst({
                    take: -1,
                    where: {
                        parcheggi_id_fk: findParcheggio?.parcheggi_id,
                    },
                    select: { durata_id: true },
                })
                const avviPagamento = await prisma.durata.update({
                    where: {
                        durata_id: trovaPagamento?.durata_id,
                    },
                    data: { pagamento_effettuato: true },
                })
                res.status(200).json({ avviPagamento })
            } else {
                const findParcheggio = await prisma.parcheggi.findFirst({
                    where: {
                        piano: piano,
                        posto: posto,
                        parcheggio_stato: true,
                    },
                })
                const trovaPagamento = await prisma.durata.findFirst({
                    where: {
                        parcheggi_id_fk: findParcheggio?.parcheggi_id,
                    },
                })
                const avviPagamento = await prisma.durata.update({
                    where: {
                        durata_id: trovaPagamento?.durata_id,
                    },
                    data: { pagamento_effettuato: true },
                })
                res.status(200).json({ 'Pagamento effettuato con il btn al checkout': avviPagamento })
            }
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
