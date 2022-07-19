import PropTypes from 'prop-types'
import Card from '../components/Card'
import { ExclamationIcon } from '@heroicons/react/outline'

const Grid = ({ products = [] }) => {
  const isEmpty = products.length === 0

  const toggleFavorite = async (id: any) => {
    // TODO: Add/remove product from the authenticated user's favorites
  }

  return isEmpty ? (
    <p className="inline-flex max-w-max items-center space-x-1 rounded-md bg-amber-100 px-4 py-2 text-purple-700">
      <ExclamationIcon className="mt-px h-5 w-5 shrink-0" />
      <span>Unfortunately, there is nothing to display yet.</span>
    </p>
  ) : (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product: any) => (
        <Card key={product.id} {...product} onClickFavorite={toggleFavorite} />
      ))}
    </div>
  )
}

Grid.propTypes = {
  products: PropTypes.array,
}

export default Grid
