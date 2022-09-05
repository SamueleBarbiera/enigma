import axios from 'axios'
import { ChangeEvent } from 'react'
import { Controller, useController, useFormContext } from 'react-hook-form'
import { ImageUrl } from 'src/types/IProduct'
import useStore, { Store } from '../../hooks/index'

interface FileUpLoaderProps {
    name: string
}

export interface UploadableFile {
    id: number
    file: File[]
    url?: string
}

export default function FileUpLoader({ name }: FileUpLoaderProps) {
    const {
        control,
        formState: { errors },
    } = useFormContext()
    const { field } = useController({ name, control })
    const store: Store = useStore()

    const onFileDrop = async (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        const formData = new FormData()
        if (!files) return

        try {
            // eslint-disable-next-line @typescript-eslint/prefer-for-of
            for (const image of files) {
                formData.append('files', image)
                if (image.size <= 6 * 1024 * 1024) {
                    store.setUploadingImage(true)
                    const data: ImageUrl = await axios.post(
                        `${process.env.NEXT_PUBLIC_API_URL ?? ''}/api/data/productsImage`,
                        {
                            image: image,
                        }
                    )
                    console.log('🚀 ~ file: FileUpload.tsx ~ line 42 ~ data', data)
                    console.log('🚀 ~ file: FileUpload.tsx ~ line 27 ~ onFileDrop ~ image', formData)
                    field.onChange(data.data.url)
                    return data
                } else {
                    throw Error('File size is exceeding 6MB.')
                }
            }
        } catch (err) {
            console.log('🚀 ~ file: FileUpload.tsx ~ line 56 ~ err', err)
            store.setUploadingImage(false)
            throw Error('Unable to update image')
        } finally {
            store.setUploadingImage(false)
            console.log('FINITOOOOOOOOOOO')
        }
    }

    return (
        <Controller
            name={name}
            defaultValue=""
            control={control}
            render={({ field: { name, onBlur, ref } }) => (
                <>
                    <div className="mb-2 flex items-center justify-between">
                        <div>
                            <span className="mb-2 block">Choose profile photo</span>
                            <input
                                className="mb-2 block text-sm text-slate-500 file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-100"
                                type="file"
                                name={name}
                                onBlur={onBlur}
                                ref={ref}
                                onChange={onFileDrop}
                                multiple
                                accept="image/jpg, image/png, image/jpeg"
                            />
                        </div>
                    </div>
                    <p className={`mb-2 text-xs italic text-red-500 ${errors[name] ? 'visible' : 'invisible'}`}>
                        {errors[name] && (errors[name]?.message as string)}
                    </p>
                </>
            )}
        />
    )
}
