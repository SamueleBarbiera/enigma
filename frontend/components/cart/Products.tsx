import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart/react'
import { ExclamationCircleIcon, PlusSmIcon, RefreshIcon } from '@heroicons/react/solid'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
toast.configure()

const Products = () => {
    const [products, setProducts] = useState<any>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<boolean>()
    const { addItem } = useShoppingCart()

    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/variantetaglias?populate=*`)
                if (res.status == 200) {
                    console.log('🚀 - file: Products.tsx - line 76 - fetchData - jsonResponse', res.data.data)
                    setProducts(res.data.data)
                    setError(false)
                    return products
                }
            } catch (err) {
                setError(err)
                console.log('🚀 ERROR FETCHING', err)
            }
        }
        fetchData()
        setLoading(false)
    }, [setProducts])

    const notify = (product:any) => {
        toast.success(<div className="text-green-900">{product} aggiunto al carrello!</div>, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1000,
        })
    }

    return (
        <main className="my-12 flex items-center justify-center xl:h-screen">
            {loading ? (
                <div className="mx-auto w-fit rounded-lg bg-beige-200  py-4  px-4 shadow-xl">
                    <div className="flex flex-col items-center space-x-1 text-4xl font-semibold">
                        <RefreshIcon className="m-2 h-12 w-12 flex-shrink-0 animate-spin rounded-full bg-beige-100 py-2 text-beige-800 " />
                        <p className="mt-3 animate-pulse text-lg">Caricamento . . .</p>
                    </div>
                </div>
            ) : error ? (
                <div className="mx-auto h-min max-w-full rounded-lg bg-red-100 py-4 px-4 shadow-xl">
                    <div className="flex flex-col items-center space-x-1 text-4xl font-semibold">
                        <ExclamationCircleIcon className="mt-3 h-12 w-12 flex-shrink-0 animate-bounce text-red-600" />
                        <p className="mt-3 text-lg text-red-500">Qualcosa è andato storto, non preccuparti il pagamento non è andato a buon fine . . .</p>
                        <p>{error}</p>
                    </div>
                </div>
            ) : (
                <div className="mx-8 grid grid-cols-1 gap-y-8 gap-x-12 md:mx-12 md:grid-cols-2 xl:grid-cols-4">
                    {products.map((product: any) => (
                        <a className="group rounded-xl border  p-6 shadow-xl">
                            <a href={`/products/${product.id}`}>
                                {/* Product's image */}
                                <div className="h-auto  w-auto items-center justify-center p-2 group-hover:scale-105 group-hover:transform group-hover:duration-200 group-hover:ease-in-out">
                                    <img className="grid h-auto w-full rounded-xl border shadow-md" src={process.env.NEXT_PUBLIC_API_URL + '' + product.image.data[0].url} alt={'not found'} />
                                    {/* {product.image.data.map((image: any) => (
                                    <img className="flex  h-auto w-24 flex-row justify-between" src={process.env.NEXT_PUBLIC_API_URL + '' + image.url} alt={'not found'} />
                                ))} */}
                                </div>

                                {/* Name */}
                                <div className="mt-4 sm:mt-8">
                                    <p className="text-lg font-semibold capitalize">{product.name}</p>
                                </div>
                            </a>
                            {/* Price + CTA */}
                            <div className="mt-4 flex items-center justify-between space-x-2">
                                <div>
                                    <p className="text-beige-500">Prezzo</p>
                                    <p className="text-lg font-semibold">
                                        {formatCurrencyString({
                                            value: product.price * 100,
                                            currency: 'EUR',
                                        })}
                                    </p>
                                </div>
                                <button onClick={()=>{notify(product.name), addItem(product)}} className="transiction easy-in-out rounded-md bg-beige-200 p-2 shadow-xl duration-200 hover:bg-beige-400">
                                    <PlusSmIcon className="h-6 w-6 flex-shrink-0 " />
                                </button>
                            </div>
                        </a>
                    ))}
                </div>
            )}
        </main>
    )
}

export default Products
