import { GetStaticProps, GetStaticPaths } from 'next'
import AccessDenied from '@/components/layout/AccessDenied'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { useShoppingCart } from 'use-shopping-cart/react'
import { useState } from 'react'
import axios from 'axios'
import { formatCurrencyString } from 'use-shopping-cart'
import { MinusSmIcon, PlusSmIcon, HeartIcon, RefreshIcon } from '@heroicons/react/solid'
import { Disclosure, RadioGroup, Tab } from '@headlessui/react'
import Head from 'next/head'

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

export default function ProductPage(props: any) {
    console.log('🚀 - file: [id].tsx - line 15 - ProductPage - props', props)
    const [session] = useSession()
    const router = useRouter()
    const { addItem } = useShoppingCart()
    const [qty, setQty] = useState(1)
    const [selectedColor, setSelectedColor] = useState(props.colors[0])

    if (session) {
        return router.isFallback ? (
            <>
                <Head>
                    <title>Caricamento</title>
                </Head>
                <div className="mx-auto flex h-screen w-screen items-center justify-center rounded-lg bg-beige-200 py-4 px-4 shadow-xl">
                    <div className="mx-auto flex flex-col items-center justify-center space-x-1 text-4xl font-semibold">
                        <RefreshIcon className="m-2 h-12 w-12 flex-shrink-0 animate-spin rounded-full bg-beige-100 py-2 text-gray-800 " />
                        <p className="mt-3 animate-pulse text-lg">Caricamento . . .</p>
                    </div>
                </div>
            </>
        ) : (
            <>
                <Head>
                    <title>Galleria prodotto</title>
                    <link rel="icon" href="/question-solid.svg" />
                    <meta charSet="utf-8" className="next-head" />
                </Head>
                <main className="mx-auto max-w-7xl bg-white sm:px-6 sm:pt-16 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:max-w-none">
                        {/* Product */}
                        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                            {/* Image gallery */}
                            <Tab.Group as="div" className="flex flex-col-reverse">
                                {/* Image selector */}
                                <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                                    <Tab.List className="grid grid-cols-4 gap-6">
                                        {props.images.map((image: any) => (
                                            <Tab
                                                key={image.id}
                                                className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                                            >
                                                {({ selected }) => (
                                                    <>
                                                        <span className="sr-only">{image.name}</span>
                                                        <span className="absolute inset-0 overflow-hidden rounded-md">
                                                            <img src={image.src} alt="" className="h-full w-full object-cover object-center" />
                                                        </span>
                                                        <span
                                                            className={classNames(
                                                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                                                'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2'
                                                            )}
                                                            aria-hidden="true"
                                                        />
                                                    </>
                                                )}
                                            </Tab>
                                        ))}
                                    </Tab.List>
                                </div>

                                <Tab.Panels className="aspect-w-1 aspect-h-1 w-full">
                                    {props.images.map((image: any) => (
                                        <Tab.Panel key={image.id}>
                                            <img src={image.src} alt={image.alt} className="h-full w-full object-cover object-center sm:rounded-lg" />
                                        </Tab.Panel>
                                    ))}
                                </Tab.Panels>
                            </Tab.Group>

                            {/* Product info */}
                            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{props.name}</h1>

                                <div className="mt-3">
                                    <h2 className="sr-only">Product information</h2>
                                    <p className="text-3xl text-gray-900">{props.price}</p>
                                </div>

                                <div className="mt-6">
                                    <h3 className="sr-only">Description</h3>

                                    <div className="space-y-6 text-base text-gray-700" dangerouslySetInnerHTML={{ __html: props.description }} />
                                </div>

                                <form className="mt-6">
                                    {/* Colors */}
                                    <div>
                                        <h3 className="text-sm text-gray-600">Color</h3>

                                        <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-2">
                                            <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                                            <div className="flex items-center space-x-3">
                                                {props.colors.map((color: any) => (
                                                    <RadioGroup.Option
                                                        key={color.name}
                                                        value={color}
                                                        className={({ active, checked }) =>
                                                            classNames(
                                                                color.selectedColor,
                                                                active && checked ? 'ring ring-offset-1' : '',
                                                                !active && checked ? 'ring-2' : '',
                                                                'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                                                            )
                                                        }
                                                    >
                                                        <RadioGroup.Label as="p" className="sr-only">
                                                            {color.name}
                                                        </RadioGroup.Label>
                                                        <span aria-hidden="true" className={classNames(color.bgColor, 'h-8 w-8 rounded-full border border-black border-opacity-10')} />
                                                    </RadioGroup.Option>
                                                ))}
                                            </div>
                                        </RadioGroup>
                                    </div>

                                    <div className="sm:flex-col1 mt-10 flex">
                                        <button
                                            type="submit"
                                            className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                                        >
                                            Add to bag
                                        </button>

                                        <button type="button" className="ml-4 flex items-center justify-center rounded-md py-3 px-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                                            <HeartIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                                            <span className="sr-only">Add to favorites</span>
                                        </button>
                                    </div>
                                </form>

                                <section aria-labelledby="details-heading" className="mt-12">
                                    <h2 id="details-heading" className="sr-only">
                                        Additional details
                                    </h2>

                                    <div className="divide-y divide-gray-200 border-t">
                                        {props.details.map((detail: any) => (
                                            <Disclosure as="div" key={detail.name}>
                                                {({ open }) => (
                                                    <>
                                                        <h3>
                                                            <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                                                                <span className={classNames(open ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-medium')}>{detail.name}</span>
                                                                <span className="ml-6 flex items-center">
                                                                    {open ? (
                                                                        <MinusSmIcon className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500" aria-hidden="true" />
                                                                    ) : (
                                                                        <PlusSmIcon className="block h-6 w-6 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                                                                    )}
                                                                </span>
                                                            </Disclosure.Button>
                                                        </h3>
                                                        <Disclosure.Panel as="div" className="prose prose-sm pb-6">
                                                            <ul role="list">
                                                                {detail.items.map((item: any) => (
                                                                    <li key={item}>{item}</li>
                                                                ))}
                                                            </ul>
                                                        </Disclosure.Panel>
                                                    </>
                                                )}
                                            </Disclosure>
                                        ))}
                                    </div>
                                </section>
                            </div>
                        </div>

                        <section aria-labelledby="related-heading" className="mt-10 border-t border-gray-200 py-16 px-4 sm:px-0">
                            <h2 id="related-heading" className="text-xl font-bold text-gray-900">
                                Customers also bought
                            </h2>

                            <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                                {props.map((product: any) => (
                                    <div key={product.id}>
                                        <div className="relative">
                                            <div className="relative h-72 w-full overflow-hidden rounded-lg">
                                                <img src={product.imageSrc} alt={product.imageAlt} className="h-full w-full object-cover object-center" />
                                            </div>
                                            <div className="relative mt-4">
                                                <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                                                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                            </div>
                                            <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                                                <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50" />
                                                <p className="relative text-lg font-semibold text-white">{product.price}</p>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <a
                                                href={product.href}
                                                className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200"
                                            >
                                                Add to bag<span className="sr-only">, {product.name}</span>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </main>
                <div className="container mx-auto py-12 px-6 lg:max-w-screen-lg">
                    <div className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-y-0 md:space-x-12">
                        {/* Product's image */}
                        <div className="relative h-72 w-72 sm:h-96 sm:w-96">
                            <img src={props.image} alt={props.name} />
                        </div>

                        {/* Product's details */}
                        <div className="max-w-md flex-1 rounded-md border border-opacity-50 p-6 shadow-lg">
                            <h2 className="text-3xl font-semibold">{props.name}</h2>
                            <p>
                                <span className="text-gray-500">Availability:</span> <span className="font-semibold">In stock</span>
                            </p>

                            {/* Price */}
                            <div className="mt-8 border-t pt-4">
                                <p className="text-gray-500">Price:</p>
                                <p className="text-xl font-semibold">
                                    {formatCurrencyString({
                                        value: props.price * 100,
                                        currency: 'EUR',
                                    })}
                                </p>
                            </div>

                            <div className="mt-4 border-t pt-4">
                                {/* Quantity */}
                                <p className="text-gray-500">Quantity:</p>
                                <div className="mt-1 flex items-center space-x-3">
                                    <button
                                        onClick={() => setQty((prev) => prev - 1)}
                                        disabled={qty <= 1}
                                        className="rounded-md p-1 hover:bg-rose-100 hover:text-rose-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-current"
                                    >
                                        <MinusSmIcon className="h-6 w-6 flex-shrink-0" />
                                    </button>
                                    <p className="text-xl font-semibold">{qty}</p>
                                    <button onClick={() => setQty((prev) => prev + 1)} className="rounded-md p-1 hover:bg-green-100 hover:text-green-500">
                                        <PlusSmIcon className="h-6 w-6 flex-shrink-0 " />
                                    </button>
                                </div>

                                {/* Add to cart button */}
                                <button
                                    onClick={() => {
                                        addItem(props)
                                    }}
                                    className="mt-8 rounded border border-rose-500 bg-rose-500 py-2 px-6 text-white transition-colors hover:border-rose-600 hover:bg-rose-600 focus:ring-4 focus:ring-rose-500 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    <PlusSmIcon className="h-6 w-6 flex-shrink-0 " />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return <AccessDenied />
    }
}

type Params = {
    id: string
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const res: any = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/variantetaglias?populate=*`)
    const products: any = await res.data.data
    console.log(
        '🚀 - file: [id].tsx - line 106 - constgetStaticPaths:GetStaticPaths<Params>= - products',
        products.map((prod: any) => prod.id)
    )

    return {
        paths: products.map((prod: any) => {
            return {
                params: { id: prod.id.toString() },
            }
        }), // Existing posts are rendered to HTML at build time
        fallback: true, // Enable statically generating additional pages
    }
}

export const getStaticProps: GetStaticProps = async (context: any) => {
    console.log('🚀 - file: [id].tsx - line 114 - constgetStaticProps:GetStaticProps= - context', context)
    try {
        const res: any = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}api/variantetaglias/${context.params.id}?populate=*`)
        const products: any = await res.data.data

        return {
            props: products, // Next.js will attempt to re-generate the page, When a request comes in,At most once every second
            revalidate: 1, // In seconds
        }
    } catch (error) {
        return { notFound: true }
    }
}
