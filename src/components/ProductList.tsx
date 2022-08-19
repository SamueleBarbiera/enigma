/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { useState } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast'
import { Formik, Form } from 'formik'
import Input from '../components/Input'
import AddProductImage from '../components/AddProductImage'
import axios from 'axios'
import { z } from 'zod'
import { ImageUrl, ProdList } from 'types/IProduct'

const ProductSchema = z.object({
    name: z.string().max(20).nonempty(),
    description: z.string().min(10).nonempty(),
    price: z.number().nonnegative('Field is required not negative').gte(1),
})

const ProductList = ({ initialValues, redirectPath, buttonText, onSubmit = () => null }: ProdList) => {
    const router = useRouter()
    const [disabled, setDisabled] = useState({})
    const [imageUrl, setImageUrl] = useState<string>(initialValues.image)

    const upload = async (image: string) => {
        let toastId
        try {
            setDisabled(true)
            toastId = toast.loading('Uploading...')
            const data: ImageUrl = await axios.post(`${process.env.NEXT_PUBLIC_API_URL ?? ''}/api/data/productsImage`, { image: image })
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

    const handleOnSubmit = async (values: unknown) => {
        let toastId
        try {
            setDisabled(true)
            toastId = toast.loading('Submitting...')
            if (typeof onSubmit === 'function') {
                await onSubmit({ values, image: imageUrl })
            }
            toast.success('Successfully submitted', { id: toastId })
            if (redirectPath) {
                await router.push(redirectPath)
            }
        } catch (err) {
            let message
            if (err instanceof Error) message = err.message
            else message = String(err)
            toast.error(`Unable to submit ${message}`, { id: toastId })
            setDisabled(false)
        }
    }

    const { image = imageUrl, ...initialFormValues } = initialValues
    console.log('🚀 ~ file: ProductList.tsx ~ line 33 ~ upload ~ setImageUrl', { imageUrl }, { image })

    return (
        <div>
            <Formik initialValues={initialFormValues} validationSchema={ProductSchema} validateOnBlur={false} onSubmit={handleOnSubmit}>
                {({ isSubmitting, isValid }) => (
                    <Form className="space-y-6">
                        <div className="space-y-6">
                            <Input type="text" label="Title" placeholder="Entire your product name..." disabled={disabled} className={''} rows={0} min={''} name="Title" />

                            <Input type="textarea" label="Description" placeholder="Enter your product description...." disabled={disabled} rows={3} className={''} name="Description" min={''} />

                            <Input type="number" min="0" label="Price of the product..." placeholder="100" disabled={disabled} className={''} name="Price" rows={0} />
                        </div>

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                disabled={!isValid}
                                className="rounded-md bg-success py-2 px-6 text-white transition hover:bg-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-600 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-teal-600"
                            >
                                {isSubmitting ? 'Submitting...' : buttonText}
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
            <div className="mb-6 max-w-full">
                <AddProductImage src={imageUrl} alt={initialFormValues.name} onChangePicture={upload} accept={'.png, .jpg, .jpeg, .gif .jiff'} sizeLimit={3 * 1024 * 1024} />
            </div>
        </div>
    )
}

export default ProductList
