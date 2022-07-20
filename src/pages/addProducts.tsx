import Layout from '../components/Layout'
import ProductList from '../components/ProductList'

export default function addProducts(props) {
  const createProduct = (data) => fetch('/api/data/createProduct', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

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
            onSubmit={createProduct}
          />
        </div>
      </div>
    </Layout>
  )
}

