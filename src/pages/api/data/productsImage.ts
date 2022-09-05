/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { nanoid } from 'nanoid'
import { createClient, SupabaseClient } from '@supabase/supabase-js'
import type { NextApiRequest, NextApiResponse } from 'next'
import { withValidation } from 'next-validations'
import { z } from 'zod'
import { env } from 'src/env/client.mjs'
import { env as envB } from 'src/env/server.mjs'

export const supabase: SupabaseClient = createClient(env.NEXT_PUBLIC_SUPABASE_API_URL, envB.SUPABASE_API_KEY)

const schema = z.object({})

const validate = withValidation({
    schema,
    type: 'Zod',
    mode: 'body',
})
interface ExtendedNextApiRequest extends NextApiRequest {
    body: {
        image: string
    }
}

const handle = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { image } = req.body

        try {
            const fileName = nanoid()
            const path = `${fileName}`
            const { data, error: uploadError } = await supabase.storage
                .from(process.env.SUPABASE_STORAGE_BUCKET ?? '')
                .upload(path, image, {
                    upsert: true,
                })
            console.log('🚀 ~ file: productsImage.ts ~ line 47 ~ data', data)

            if (uploadError) {
                let message
                if (uploadError instanceof Error) message = uploadError.message
                else message = String(uploadError)
                console.log(uploadError)
                throw new Error(message)
            }
            const prefixUrl = `${process.env.NEXT_PUBLIC_SUPABASE_API_URL ?? ''}`
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const rootUrl = `${process.env.SUPABASE_URL ?? ''.replace('.co', '.in')}/storage/v1/object/public/${
                data!.Key
            }`
            const url = `${prefixUrl + rootUrl}`
            console.log('🚀 ~ file: productsImage.ts ~ line 59 ~ handle ~ url', url)

            return res.status(200).json({ url })
        } catch (err) {
            let message
            if (err instanceof Error) message = err.message
            else message = String(err)
            console.log('🚀 ~ file: productsImage.ts ~ line 57 ~ handle ~ err', message)
            res.status(500).json({ message: `Something went horribly wrong ${message}` })
        }
    } else {
        res.setHeader('Allow', ['POST'])
        res.status(405).json({ message: `HTTP method :${req.method ?? ''}: is not supported.` })
    }
}

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '3mb',
        },
    },
}

export default validate(handle)
