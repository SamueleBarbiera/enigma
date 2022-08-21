/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Layout from '@/components/admin/Layout'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, UseFormProps } from 'react-hook-form'
import { trpc } from '../../content/utils/trpc'
import { z } from 'zod'
import { ChangeEvent, MutableRefObject, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import { ImageUrl } from 'src/types/IProduct'
import { CloudUploadIcon } from '@heroicons/react/solid'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

// validation schema is used by server
export const validationSchema = z.object({
    image: z.string().min(1).nonempty(),
    name: z.string().min(2).nonempty(),
    description: z.string().min(2).nonempty(),
    price: z.number().min(1),
    quantity: z.number().min(1),
    design: z.string().min(2).nonempty(),
    material: z.string().min(2).nonempty(),
})

function useZodForm<TSchema extends z.ZodType>(
    props: Omit<UseFormProps<TSchema['_input']>, 'resolver'> & {
        schema: TSchema
    }
) {
    const form = useForm<TSchema['_input']>({
        ...props,
        resolver: zodResolver(props.schema, undefined, {
            // This makes it so we can use `.transform()`s on the schema without same transform getting applied again when it reaches the server
            rawValues: true,
        }),
    })

    return form
}

export default function AggiungiProd() {
    const [imageUrl, setImageUrl] = useState<string>('')
    const [disabled, setDisabled] = useState(false)
    const pictureRef = useRef() as MutableRefObject<HTMLInputElement>
    const [image, setImage] = useState('')
    const [updatingPicture, setUpdatingPicture] = useState(false)
    const [pictureError, setPictureError] = useState('')

    const upload = async (image: string | ArrayBuffer | null) => {
        let toastId
        try {
            setDisabled(true)
            toastId = toast.loading('Uploading...')
            const data: ImageUrl = await axios.post(`${process.env.NEXT_PUBLIC_API_URL ?? ''}/api/data/productsImage`, {
                image: image,
            })
            console.log('🚀 ~ file: ProductList.tsx ~ line 30 ~ upload ~ data', data)
            setImageUrl(data.data.url)
            console.log('🚀 ~ file: ProductList.tsx ~ line 33 ~ upload ~ setImageUrl', { imageUrl })
            toast.success('Successfully uploaded', { id: toastId })
        } catch (err) {
            let message
            if (err instanceof Error) message = err.message
            else message = String(err)
            toast.error(`Unable to upload ${message}`, { id: toastId })
            setImageUrl('')
        } finally {
            setDisabled(false)
        }
    }

    const handleOnSubmit = async (values: {
        image: string
        name: string
        description: string
        price: number
        quantity: number
        design: string
        material: string
    }) => {
        let toastId
        try {
            setDisabled(true)
            toastId = toast.loading('Submitting...')
            await mutation.mutateAsync(values)
            methods.reset()
            toast.success('Successfully submitted', { id: toastId })
        } catch (err) {
            let message
            if (err instanceof Error) message = err.message
            else message = String(err)
            toast.error(`Unable to submit ${message}`, { id: toastId })
            setDisabled(false)
        }
    }

    const handleOnChangePicture = (e: ChangeEvent<HTMLInputElement>) => {
        let file
        if (e.target.files) {
            console.log(
                '🚀 ~ file: AddProductImage.tsx ~ line 20 ~ handleOnChangePicture ~ e.target.files',
                e.target.files
            )
            file = e.target.files[0]
        }
        const reader: FileReader = new FileReader()
        const timestamp = new Date().toISOString().replace(/[-:.]/g, '')
        const randomString = Math.random().toString().substring(2, 8)
        const fileName = 'New file' + timestamp + randomString
        console.log('🚀 ~ file: AddProductImage.js ~ line 18 ~ handleOnChangePicture ~ fileName', fileName)

        reader.addEventListener(
            'load',
            async function () {
                try {
                    setImage(reader.result as string)
                    await upload(reader.result)
                    console.log('🚀 ~ file: AddProductImage.tsx ~ line 41 ~ IMAGE', { image })
                } catch (err) {
                    toast.error('Unable to update image')
                } finally {
                    setUpdatingPicture(false)
                }
            },
            false
        )

        if (file) {
            if (file.size <= 3 * 1024 * 1024) {
                setUpdatingPicture(true)
                setPictureError('')
                reader.readAsDataURL(file)
            } else {
                setPictureError('File size is exceeding 3MB.')
            }
        }
    }

    const handleOnClickPicture = () => {
        if (pictureRef.current) {
            pictureRef.current.click()
        }
    }

    const utils = trpc.useContext()
    const mutation = trpc.useMutation('createProduct.add', {
        async onSuccess() {
            await utils.invalidateQueries(['createProduct.view'])
        },
    })

    const methods = useZodForm({
        schema: validationSchema,
        defaultValues: {
            image: '',
            description: '',
            price: 1,
            quantity: 1,
            design: '',
            material: '',
            name: '',
        },
    })
    return (
        <Layout>
            <div className="flex h-full flex-col items-center justify-center">
                <h2 className="text-2xl font-bold">Add a product</h2>
                <form
                    onSubmit={methods.handleSubmit(
                        async (values: {
                            image: string
                            name: string
                            description: string
                            price: number
                            quantity: number
                            design: string
                            material: string
                        }) => {
                            await handleOnSubmit(values)
                        }
                    )}
                    className="p-2"
                >
                    <div>
                        <label>
                            Nome
                            <br />
                            <input
                                disabled={disabled}
                                placeholder="inserisci il nome"
                                className="block w-full rounded-md border-2 border-beige-400 shadow-xl focus:border-beige-500 focus:ring-beige-500 sm:text-sm"
                                {...methods.register('name')}
                            />
                        </label>

                        {methods.formState.errors.name?.message && (
                            <p className="text-red-700">{methods.formState.errors.name.message}</p>
                        )}
                    </div>

                    <div>
                        <label>
                            Descrizione
                            <br />
                            <textarea
                                disabled={disabled}
                                placeholder="inserisci la descrizione"
                                {...methods.register('description')}
                                className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </label>
                        {methods.formState.errors.description?.message && (
                            <p className="text-red-700">{methods.formState.errors.description.message}</p>
                        )}
                    </div>

                    <div>
                        <label>
                            Prezzo
                            <br />
                            <input
                                disabled={disabled}
                                placeholder="inserisci il prezzo"
                                type="number"
                                {...methods.register('price')}
                                className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </label>
                        {methods.formState.errors.price?.message && (
                            <p className="text-red-700">{methods.formState.errors.price.message}</p>
                        )}
                    </div>
                    <div>
                        <label>
                            Quantità
                            <br />
                            <input
                                disabled={disabled}
                                placeholder="inserisci la quantità"
                                type="number"
                                {...methods.register('quantity')}
                                className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </label>
                        {methods.formState.errors.quantity?.message && (
                            <p className="text-red-700">{methods.formState.errors.quantity.message}</p>
                        )}
                    </div>
                    <div>
                        <label>
                            Design
                            <br />
                            <textarea
                                disabled={disabled}
                                placeholder="descrivi il design"
                                {...methods.register('design')}
                                className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </label>
                        {methods.formState.errors.design?.message && (
                            <p className="text-red-700">{methods.formState.errors.design.message}</p>
                        )}
                    </div>
                    <div>
                        <label>
                            Materiale
                            <br />
                            <textarea
                                disabled={disabled}
                                placeholder="descrivi il materiale"
                                {...methods.register('material')}
                                className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </label>
                        {methods.formState.errors.material?.message && (
                            <p className="text-red-700">{methods.formState.errors.material.message}</p>
                        )}
                    </div>
                    <div>
                        <div className="mb-6 max-w-full">
                            <div className="flex flex-col space-y-2">
                                <button
                                    disabled={updatingPicture}
                                    onClick={handleOnClickPicture}
                                    className={classNames(
                                        'aspect-video group relative overflow-hidden rounded-md transition focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
                                        imageUrl
                                            ? 'hover:opacity-50 disabled:hover:opacity-100'
                                            : 'border-2 border-dotted hover:border-gray-400 focus:border-gray-400 disabled:hover:border-gray-200'
                                    )}
                                >
                                    <div className="flex items-center justify-center">
                                        {imageUrl === '' ? (
                                            <div className="flex flex-col items-center space-y-2">
                                                <div className="shrink-0 rounded-full bg-gray-200 p-2 transition group-hover:scale-110 group-focus:scale-110">
                                                    <CloudUploadIcon className="h-4 w-4 text-gray-500 transition" />
                                                </div>
                                                <p className="text-xs font-semibold text-gray-500 transition">
                                                    {updatingPicture ? 'Image Uploading...' : 'Upload product Image'}
                                                </p>
                                            </div>
                                        ) : (
                                            <img src={imageUrl} alt={'Uploaded img'} />
                                        )}
                                        <input
                                            disabled={updatingPicture}
                                            onClick={handleOnClickPicture}
                                            {...methods.register('image')}
                                            ref={pictureRef}
                                            type="file"
                                            accept={'.png, .jpg, .jpeg, .gif .jiff'}
                                            onChange={handleOnChangePicture}
                                            className="hidden"
                                        />
                                    </div>
                                </button>

                                {pictureError ? <span className="text-sm text-red-600">{pictureError}</span> : null}
                                {methods.formState.errors.image?.message && (
                                    <p className="text-red-700">{methods.formState.errors.image.message}</p>
                                )}
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        disabled={mutation.isLoading}
                        className="bg-primary-500 border p-2 font-bold text-white"
                    >
                        {mutation.isLoading ? 'Loading' : 'Submit'}
                    </button>
                </form>
            </div>
        </Layout>
    )
}
