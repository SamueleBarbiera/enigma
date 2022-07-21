import { useState } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast'
import { Formik, Form } from 'formik'
import Input from '../components/Input'
import AddProductImage from '../components/AddProductImage'
import axios from 'axios'
import { z } from 'zod'

const ProductSchema = z.object({
    name: z.string().max(20).nonempty(),
    description: z.string().min(10).nonempty(),
    price: z.number().nonnegative('Field is required not negative').gte(1),
})

interface Props {
    text: string
    active: boolean
    initialValues: {
        image: string
        name: string
        description: string
        price: number
    }
    redirectPath: string
    buttonText: string
    onSubmit: unknown
}

interface ImageUrl {
    url: string
}

const ProductList = ({ initialValues, redirectPath = '', buttonText = 'Submit', onSubmit = () => null }: Props) => {
    const router = useRouter()
    const [disabled, setDisabled] = useState({})
    const [imageUrl, setImageUrl] = useState(initialValues.image)

    const upload = async (image: string) => {
        let toastId
        try {
            setDisabled(true)
            toastId = toast.loading('Uploading...')
            const data: ImageUrl = await axios.post('/api/data/productsImage', { image })
            setImageUrl(data.url)
            toast.success('Successfully uploaded', { id: toastId })
        } catch (e) {
            toast.error('Unable to upload', { id: toastId })
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
        } catch (e) {
            toast.error('Unable to submit', { id: toastId })
            setDisabled(false)
        }
    }

    const { image, ...initialFormValues } = initialValues

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
                <AddProductImage src={image} alt={initialFormValues.name} onChangePicture={upload} label={''} accept={''} sizeLimit={0} />
            </div>
        </div>
    )
}

export default ProductList
