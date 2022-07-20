import Link from 'next/link'
import Image from 'next/image'

interface Props {
  id: string,
  image: string,
  name: string,
  description: string,
  price: number,
  onClickFavorite: Function,
}

const Card = ({
  id = '',
  image = '',
  name = '',
  price = 0,
  onClickFavorite = () => null,
}: Props) => (
  <Link href={`/products/${id}`}>
    <a className="block w-full p-5">
      <div className="card card-compact w-full bg-neutral shadow-xl">
        <div className="aspect-video relative overflow-hidden rounded-lg bg-success shadow">
          {image ? (
            <Image
              src={image}
              alt={name}
              layout="fill"
              objectFit="cover"
              className="transition hover:opacity-80"
            />
          ) : null}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              if (typeof onClickFavorite === 'function') {
                onClickFavorite()
              }
            }}
            className="absolute top-2 right-2"
          >
          </button>
        </div>
        <div className="card-body">
          <h2 className="card-name">
            {' '}
            <div className="mt-2 inline-flex w-full justify-between space-x-4">
              <span className="truncate font-semibold text-success">{name ?? ''}</span>
              <span className="shrink-0 text-info">
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                }).format(price ?? 0)}{' '}
                <span className="text-white-500"> /pcs </span>
              </span>
            </div>
          </h2>
        </div>
        <div className="card-actions justify-center p-6">
          <button className="btn btn-info">Buy Now</button>
        </div>
      </div>
    </a>
  </Link>
)

export default Card
