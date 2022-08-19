import { nanoid } from 'nanoid'
import { decode } from 'base64-arraybuffer'
import { createClient } from '@supabase/supabase-js'
import type { NextApiRequest, NextApiResponse } from 'next'
import { withValidation } from 'next-validations'
import { z } from 'zod'

export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_API_URL ?? '', process.env.NEXT_PUBLIC_SUPABASE_API_KEY ?? '')

const schema = z.object({
    image: z.string().nonempty(),
})

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

        if (!image) {
            return res.status(500).json({ message: 'There is no image' })
        }

        try {
            const contentType = image.match(/data:(.*);base64/)?.[1]
            const base64FileData = image.split('base64,')[1]
            if (!contentType || !base64FileData) {
                return res.status(500).json({ message: 'Image data not valid' })
            }
            const fileName = nanoid()
            const ext = contentType.split('/')[1]
            const path = `${fileName}.${ext ?? ''}`
            const { data, error: uploadError } = await supabase.storage.from(process.env.SUPABASE_STORAGE_BUCKET ?? '').upload(path, decode(base64FileData), {
                contentType,
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
            const rootUrl = `${process.env.SUPABASE_URL ?? ''.replace('.co', '.in')}/storage/v1/object/public/${data!.Key}`
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
