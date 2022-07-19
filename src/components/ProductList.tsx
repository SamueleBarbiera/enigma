import { useState } from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import * as Yup from 'yup'
import { toast } from 'react-hot-toast'
import { Formik, Form } from 'formik'
import Input from '../components/Input'
import AddProductImage from '../components/AddProductImage'
import axios from 'axios'

const ProductSchema = Yup.object().shape({
  name: Yup.string().trim().required(),
  description: Yup.string().trim().required(),
  price: Yup.number().positive().integer().min(1).required(),
})

const ProductList = ({ initialValues = null, redirectPath = '', buttonText = 'Submit', onSubmit = () => null }) => {
  const router = useRouter()

  const [disabled, setDisabled] = useState(false)
  const [imageUrl, setImageUrl] = useState(initialValues?.image ?? '')

  const upload = async (image: any) => {
    if (!image) return

    let toastId
    try {
      setDisabled(true)
      toastId = toast.loading('Uploading...')
      const { data } = await axios.post('/api/productsImage', { image })
      setImageUrl(data?.url)
      toast.success('Successfully uploaded', { id: toastId })
    } catch (e) {
      toast.error('Unable to upload', { id: toastId })
      setImageUrl('')
    } finally {
      setDisabled(false)
    }
  }

  const handleOnSubmit = async (values = null) => {
    let toastId
    try {
      setDisabled(true)
      toastId = toast.loading('Submitting...')
      if (typeof onSubmit === 'function') {
        await onSubmit({ ...values, image: imageUrl })
      }
      toast.success('Successfully submitted', { id: toastId })
      if (redirectPath) {
        router.push(redirectPath)
      }
    } catch (e) {
      toast.error('Unable to submit', { id: toastId })
      setDisabled(false)
    }
  }

  const { image, ...initialFormValues } = initialValues ?? {
    image: '',
    name: '',
    description: '',
    price: 0,
  }

  return (
    <div>
      <Formik
        initialValues={initialFormValues}
        validationSchema={ProductSchema}
        validateOnBlur={false}
        onSubmit={handleOnSubmit}
      >
        {({ isSubmitting, isValid }) => (
          <Form className="space-y-6">
            <div className="space-y-6">
              <Input
                name="name"
                type="text"
                label="Title"
                placeholder="Entire your product name..."
                disabled={disabled}
              />

              <Input
                name="description"
                type="textarea"
                label="Description"
                placeholder="Enter your product description...."
                disabled={disabled}
                rows={3}
              />

              <Input
                name="price"
                type="number"
                min="0"
                label="Price of the product..."
                placeholder="100"
                disabled={disabled}
              />


            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={disabled || !isValid}
                className="rounded-md bg-success py-2 px-6 text-white transition hover:bg-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-600 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-teal-600"
              >
                {isSubmitting ? 'Submitting...' : buttonText}
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <div className="mb-6 max-w-full">
        <AddProductImage initialImage={{ src: image, alt: initialFormValues.name }} onChangePicture={upload} />
      </div>
    </div>
  )
}

ProductList.propTypes = {
  initialValues: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
  }),
  redirectPath: PropTypes.string,
  buttonText: PropTypes.string,
  onSubmit: PropTypes.func,
}

export default ProductList
