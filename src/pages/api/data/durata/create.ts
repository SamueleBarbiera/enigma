import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../../../content/lib/prisma'
import { withValidation } from 'next-validations'
import { z } from 'zod'

const schema = z.object({
    tempoGet: z.number().nonnegative('Field is required not negative').min(0.1),
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
        tempoGet: number
    }
}

const handle = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
    const { tempoGet, piano, posto } = req.body
    let calcolo = 0
    const DataNow: any = new Date()
    let data_entrata: any = Date.now() - 24 * 60 * 60 * 1000
    data_entrata = new Date(data_entrata).toISOString()
    let yesterday = DataNow.setDate(DataNow.getDate() - 7)
    yesterday = new Date(yesterday).toISOString()
    function randomIntFromInterval(min: number, max: number) {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    try {
        if (req.method === 'POST') {
            const parking = await prisma.parcheggi.findFirst({
                where: { parcheggio_stato: true, piano: piano, posto: posto },
                select: { parcheggi_id: true, createdAt: true, updatedAt: true },
            })

            //numero ore * (calcolo medio sett ptima*(affluenza stimata di oggi)/affluenza di sett prima)
            // const pgp = require('pg-promise')()
            // const db = pgp(process.env.NEXT_DATABASE_URL)
            // let uscita, entrata
            // uscita = new Date(parking?.updatedAt as any).toISOString()
            // entrata = new Date(parking?.createdAt as any).toISOString()
            // uscita = uscita.replace(/\D/g, '').substring(0, uscita.length - 5)
            // entrata = entrata.replace(/\D/g, '').substring(0, entrata.length - 5)
            // data_entrata = data_entrata.replace(/\D/g, '').substring(0, data_entrata.length - 5)
            // yesterday = yesterday.replace(/\D/g, '').substring(0, yesterday.length - 5)

            // console.log('🚀 - file: create.ts - line 51 - handle - uscita', uscita, entrata)

            // const old_data:any =
            //     await prisma.$queryRaw`SELECT COUNT(*), AVG(costo_finale/((TO_DAYS(${uscita})+1721060) - TO_DAYS(${entrata})+1721060)*24) FROM Durata WHERE entrata BETWEEN ${yesterday} AND ${data_entrata}`

            // console.log('🚀 - file: create.ts - line 61 - handle - users', old_data)

            const n_hours = tempoGet
            if (n_hours < 1) {
                calcolo = 0.5
            } else {
                //numero ore * (calcolo medio sett ptima*(affluenza stimata di oggi)/affluenza di sett prima)
                // calcolo = n_hours * ((old_data * (old_data - randomIntFromInterval(100, 500))) / old_data[0][0])
                // calcolo = calcolo - (calcolo * 10) / 100
                calcolo = randomIntFromInterval(1, 3)
            }
            console.log('🚀 - file: create.ts - line 68 - handle - n_hours', calcolo)

            const Data = await prisma.durata.create({
                data: {
                    costo_finale: calcolo,
                    pagamento_effettuato: false,
                    tempo: tempoGet,
                    parcheggi_id_fk: parking?.parcheggi_id.toString()!,
                },
            })
            res.status(200).json({ 'Durata creata:': Data })
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
