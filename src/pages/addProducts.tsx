import axios, { AxiosRequestConfig } from 'axios'
import Layout from '../components/Layout'
import ProductList from '../components/ProductList'

export default function addProducts() {
  const createProduct = (data: AxiosRequestConfig<unknown> | undefined) => axios.get('/api/data/createProduct', data),

  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto flex-col">
        <h1 className="text-3xl font-medium text-gray-200 justify-center">
          Add your Products
        </h1>
        <div className="mt-8">
          <ProductList
            buttonText="Add Product"
            redirectPath="/products"
            onSubmit={createProduct} text={''} active={false} initialValues={{
              image: '',
              name: '',
              description: '',
              price: 0
            }}          />
        </div>
      </div>
    </Layout>
  )
}

