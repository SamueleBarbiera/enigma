import axios from 'axios'
import React, { ChangeEvent } from 'react'
import { Controller, useController, useFormContext } from 'react-hook-form'
import { ImageUrl } from 'src/types/IProduct'
import useStore, { Store } from '../../hooks/index'
import Spinner from './Spinner'

interface FileUpLoaderProps {
    name: string
}

const FileUpLoader = ({ name }: FileUpLoaderProps) => {
    const {
        control,
        formState: { errors },
    } = useFormContext()
    const { field } = useController({ name, control })
    const store: Store = useStore()

    const onFileDrop = (e: ChangeEvent<HTMLInputElement>) => {
        let file: File | undefined
        const reader: FileReader = new FileReader()
        const target = e.target as HTMLInputElement
        if (!target.files) return
        if (e.target.files) {
            console.log(
                '🚀 ~ file: AddProductImage.tsx ~ line 20 ~ handleOnChangePicture ~ e.target.files',
                e.target.files
            )
            file = e.target.files[0]
        }

        const formData = new FormData()
        formData.append('file', file as string | Blob)
        console.log('🚀 ~ file: FileUpload.tsx ~ line 27 ~ onFileDrop ~ file', file)

        reader.addEventListener('load', async function () {
            try {
                store.setUploadingImage(true)
                const data: ImageUrl = await axios.post(
                    `${process.env.NEXT_PUBLIC_API_URL ?? ''}/api/data/productsImage`,
                    {
                        image: reader.result,
                    }
                )
                console.log('🚀 ~ file: FileUpload.tsx ~ line 42 ~ data', data)
                if (data.data.url) {
                    field.onChange(data.data.url)
                }
                return data
            } catch (err) {
                store.setUploadingImage(false)
                throw Error('Unable to update image')
            } finally {
                store.setUploadingImage(false)
                console.log('FINITOOOOOOOOOOO')
            }
        })

        if (file) {
            if (file.size <= 3 * 1024 * 1024) {
                reader.readAsDataURL(file)
            } else {
                throw Error('File size is exceeding 3MB.')
            }
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
                                multiple={false}
                                accept="image/jpg, image/png, image/jpeg"
                            />
                        </div>
                        <div>
                            {store.uploadingImage && (
                                <Spinner color={'text-yellow-400'} bgColor={'bg-blue-900'} height={8} width={8} />
                            )}
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

export default FileUpLoader
