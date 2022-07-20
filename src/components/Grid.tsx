import Card from '../components/Card'
import { ExclamationIcon } from '@heroicons/react/outline'

interface Props {
  id: string,
  image: string | null,
  description: string | null,
  price: number | null,
  quantity: number | null,
  design: string | null,
  material: string | null,
  name: string | null,
  created_at: Date,
  updated_at: Date | null
}

const Grid = ({ products }: Props[]) => {
  const isEmpty = products.length === 0

  return isEmpty ? (
    <p className="inline-flex max-w-max items-center space-x-1 rounded-md bg-amber-100 px-4 py-2 text-purple-700">
      <ExclamationIcon className="mt-px h-5 w-5 shrink-0" />
      <span>Unfortunately, there is nothing to display yet.</span>
    </p>
  ) : (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product: Props) => (
        <Card key={product.id} {...product} />
      ))}
    </div>
  )
}

export default Grid
