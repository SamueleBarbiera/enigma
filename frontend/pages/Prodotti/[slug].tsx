import { useRouter } from 'next/router'
import { useShoppingCart } from 'use-shopping-cart/react'
import { useState } from 'react'
import axios from 'axios'
import { MinusSmIcon, PlusSmIcon, RefreshIcon, CheckCircleIcon } from '@heroicons/react/solid'
import { Disclosure, RadioGroup, Tab } from '@headlessui/react'
import Head from 'next/head'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { formatCurrencyString } from 'use-shopping-cart'
import { Fragment } from 'react'
import { Zoom, toast } from 'react-toastify'
import Link from 'next/link'

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

export default function ProductPage(props: any) {
    const products = props.productsData[0]
    console.log('🚀 - file: [slug].tsx - line 22 - ProductPage - products', products)
    const productsConsigliati = props.productsConsigliati[0]
    console.log('🚀 - file: [slug].tsx - line 24 - ProductPage - productsConsigliati', props.productsConsigliati[0])
    const { addItem } = useShoppingCart()
    delete products.dettagli[0].id
    delete products.dettagli[0].__component

    let colorsAvailable: any = Object.keys(products.dettagli[0]).filter((k) => products.dettagli[0][k] === true)
    colorsAvailable = colorsAvailable.map(function (currentValue: string) {
        if (currentValue === 'white' || currentValue === 'black') {
            return 'bg-' + currentValue
        } else {
            return 'bg-' + currentValue + '-200'
        }
    })
    let sizesAvailable: any = Object.keys(products.dettagli[1]).filter((k) => products.dettagli[1][k] === true)
    let sizesNOTAvailable: any = Object.keys(products.dettagli[1]).filter((k) => products.dettagli[1][k] === false)
    const router = useRouter()
    const [selectedColor, setSelectedColor] = useState<any>(colorsAvailable)
    console.log('🚀 - file: [slug].tsx - line 39 - ProductPage - selectedColor', selectedColor)
    const [selectedSize, setSelectedSize] = useState<any>(sizesAvailable)
    console.log('🚀 - file: [slug].tsx - line 41 - ProductPage - selectedSize', selectedSize)
    const notify = (products: any) => {
        toast.success(
            <div key={products.id}>
                <div className="ml-3 font-semibold text-green-900">{products} </div>
                <p className="font-base ml-3 text-green-900">aggiunto al carrello!</p>
            </div>,
            {
                icon: () => <CheckCircleIcon className="h-7 w-7 flex-shrink-0 text-green-500" aria-hidden="true" />,
                position: toast.POSITION.TOP_CENTER,
                pauseOnFocusLoss: false,
                autoClose: 1500,
                transition: Zoom,
                className: 'rounded-lg p-2 m-4 shadow-xl transiction ease-in-out duration-200 gap-y-12',
            }
        )
    }

    return router.isFallback ? (
        <>
            <Head>
                <title>Caricamento</title>
            </Head>
            <div className="mx-auto flex h-screen w-screen items-center justify-center rounded-lg bg-beige-200 py-4 px-4 shadow-xl">
                <div className="mx-auto flex flex-col items-center justify-center space-x-1 text-4xl font-semibold">
                    <RefreshIcon className="m-2 h-12 w-12 flex-shrink-0 animate-spin rounded-full bg-beige-100 py-2 text-beige-800 " />
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
            <Header />
            <div className="mx-auto h-full w-screen p-16">
                {/* Product */}
                <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                    {/* Image gallery */}
                    <Tab.Group as="div" className="flex flex-col-reverse">
                        {/* Image selector */}
                        <div className="mx-auto mt-6  w-full max-w-full sm:block lg:max-w-none">
                            <Tab.List className="grid grid-cols-4 gap-6">
                                {products.image.data.map((image: any) => (
                                    <Tab className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-beige-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4">
                                        {({ selected }) => (
                                            <>
                                                <span className="sr-only">{products.name}</span>
                                                <span className="absolute inset-0 overflow-hidden rounded-md">
                                                    <img
                                                        className="h-full w-full rounded-lg object-cover object-center shadow-xl"
                                                        src={process.env.NEXT_PUBLIC_API_URL + '' + image.url}
                                                        alt={'not found'}
                                                    />
                                                </span>
                                                <span
                                                    className={classNames(selected ? 'ring-beige-500' : 'ring-transparent', 'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2')}
                                                    aria-hidden="true"
                                                />
                                            </>
                                        )}
                                    </Tab>
                                ))}
                            </Tab.List>
                        </div>

                        <Tab.Panels className="aspect-w-1 aspect-h-1 w-full">
                            {products.image.data.map((image: any) => (
                                <Tab.Panel key={image.id}>
                                    <img
                                        className="h-min w-min rounded-lg border-4 border-beige-600 object-cover object-center shadow-xl "
                                        src={process.env.NEXT_PUBLIC_API_URL + '' + image.url}
                                        alt={'not found'}
                                    />
                                </Tab.Panel>
                            ))}
                        </Tab.Panels>
                    </Tab.Group>

                    {/* Product info */}
                    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{products.name}</h1>

                        <div className="mt-3">
                            <h2 className="sr-only">Product information</h2>
                            <p className="text-3xl text-gray-900">
                                {formatCurrencyString({
                                    value: products.price * 100,
                                    currency: 'EUR',
                                })}
                            </p>
                        </div>

                        <div className="mt-6">
                            <h3 className="sr-only">Description</h3>

                            <div className="space-y-6 text-base text-beige-700" dangerouslySetInnerHTML={{ __html: products.description }} />
                        </div>

                        <form className="mt-6">
                            {/* Colors */}
                            <div>
                                <h3 className="text-sm text-beige-900">Color</h3>
                                <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-2">
                                    <div className="space-3 grid grid-cols-3 items-center gap-0 smd:grid-cols-4  md:grid-cols-6 xl:grid-cols-12 ">
                                        {colorsAvailable.map((colorsAvailable: any) => (
                                            <RadioGroup.Option
                                                key={colorsAvailable}
                                                value={colorsAvailable}
                                                className={({ active, checked }) =>
                                                    classNames(
                                                        `w-min border shadow-lg ring-beige-900`,
                                                        active && checked ? 'ring-1 ring-offset-1' : '',
                                                        !active && checked ? 'ring-1' : '',
                                                        'relative m-2 flex  cursor-pointer items-center justify-center rounded-full  focus:outline-none'
                                                    )
                                                }
                                            >
                                                <span aria-hidden="true" className={`${colorsAvailable} h-8 w-8 rounded-full border border-black border-opacity-10`} />
                                            </RadioGroup.Option>
                                        ))}{' '}
                                    </div>
                                </RadioGroup>
                            </div>
                            {/* Sizes */}
                            <div className="mt-10">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm font-medium text-beige-900">Size</h3>
                                </div>

                                <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                                    <div className="m-2 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                                        {sizesAvailable.map((sizesAvailable: any) => (
                                            <RadioGroup.Option
                                                key={sizesAvailable}
                                                value={sizesAvailable}
                                                className={({ active }) =>
                                                    classNames(
                                                        'cursor-pointer bg-white  text-beige-900 shadow-sm',
                                                        active ? 'ring-2 ring-beige-500' : '',
                                                        'transiciton group relative flex items-center justify-center rounded-md border p-4 text-sm font-medium uppercase duration-200 ease-in-out hover:bg-beige-50 focus:outline-none sm:flex-1 sm:py-6'
                                                    )
                                                }
                                            >
                                                {({ active, checked }) => (
                                                    <>
                                                        <RadioGroup.Label as="p" className="font-medium">
                                                            {sizesAvailable}
                                                        </RadioGroup.Label>

                                                        <div
                                                            className={classNames(
                                                                active ? 'border' : 'border-2',
                                                                checked ? 'border-beige-600' : 'border-transparent',
                                                                'pointer-events-none absolute -inset-px rounded-md'
                                                            )}
                                                            aria-hidden="true"
                                                        />
                                                    </>
                                                )}
                                            </RadioGroup.Option>
                                        ))}
                                        {sizesNOTAvailable.map((sizesNOTAvailable: any) => (
                                            <RadioGroup.Option
                                                key={sizesNOTAvailable}
                                                value={sizesNOTAvailable}
                                                className="group relative flex cursor-not-allowed items-center justify-center rounded-md border bg-beige-50 py-3 px-4 text-sm font-medium uppercase text-beige-200 hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                                            >
                                                <>
                                                    <RadioGroup.Label as="p">{sizesNOTAvailable}</RadioGroup.Label>

                                                    <div aria-hidden="true" className="pointer-events-none absolute -inset-px rounded-md border-2 border-red-900 opacity-25">
                                                        <svg
                                                            className="stroke-4 absolute inset-0 h-full w-full text-red-900 opacity-50"
                                                            viewBox="0 0 100 100"
                                                            preserveAspectRatio="none"
                                                            stroke="currentColor"
                                                        >
                                                            <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                                        </svg>
                                                    </div>
                                                </>
                                                notify
                                            </RadioGroup.Option>
                                        ))}
                                    </div>
                                </RadioGroup>
                            </div>
                            <div className="sm:flex-col1 mt-10 flex">
                                <button
                                    onClick={() => {
                                        notify(products.name), addItem(products)
                                    }}
                                    className="flex max-w-full flex-auto items-center justify-center rounded-md border border-transparent bg-beige-600 py-3 px-8 text-base font-medium text-white transition duration-200 ease-in-out hover:bg-beige-700 focus:outline-none focus:ring-2 focus:ring-beige-200 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                                >
                                    Aggiungi al carello <PlusSmIcon className="h-6 w-6 flex-shrink-0 " />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <section aria-labelledby="details-heading" className="mt-12">
                    <h2 id="details-heading" className="sr-only">
                        Additional details
                    </h2>

                    <Disclosure as="div" key={products.name}>
                        {({ open }) => (
                            <>
                                <h3>
                                    <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                                        <span className={classNames(open ? 'text-beige-800' : 'text-beige-900', 'text-3xl font-extrabold tracking-tight ')}>Descrizione del prodotto</span>
                                        <span className="ml-6 flex items-center">
                                            {open ? (
                                                <MinusSmIcon className="block h-6 w-6 text-beige-400 group-hover:text-beige-500" aria-hidden="true" />
                                            ) : (
                                                <PlusSmIcon className="block h-6 w-6 text-beige-400 group-hover:text-beige-500" aria-hidden="true" />
                                            )}
                                        </span>
                                    </Disclosure.Button>
                                </h3>
                                <Disclosure.Panel as="div" className="prose prose-sm duraiton-200 pb-6 transition ease-in-out">
                                    <p className="text-md font-normal tracking-tight text-beige-700" key={products.descrizione}>
                                        {products.descrizione}
                                    </p>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </section>
                <div className="mx-auto mt-16 flex w-full max-w-2xl flex-col-reverse lg:col-span-4 lg:mt-0 lg:max-w-none">
                    <Tab.Group as="div">
                        <div className="border-b border-gray-200">
                            <Tab.List className="-mb-px flex space-x-8">
                                <Tab
                                    className={({ selected }) =>
                                        classNames(
                                            selected ? 'border-beige-600 text-beige-600' : 'border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800',
                                            'whitespace-nowrap border-b-2 py-6 text-sm font-medium'
                                        )
                                    }
                                >
                                    Materiale
                                </Tab>
                                <Tab
                                    className={({ selected }) =>
                                        classNames(
                                            selected ? 'border-beige-600 text-beige-600' : 'border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800',
                                            'whitespace-nowrap border-b-2 py-6 text-sm font-medium'
                                        )
                                    }
                                >
                                    Misure
                                </Tab>
                                <Tab
                                    className={({ selected }) =>
                                        classNames(
                                            selected ? 'border-beige-600 text-beige-600' : 'border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800',
                                            'whitespace-nowrap border-b-2 py-6 text-sm font-medium'
                                        )
                                    }
                                >
                                    Design
                                </Tab>
                            </Tab.List>
                        </div>
                        <Tab.Panels as={Fragment}>
                            <Tab.Panel className="pt-10">
                                <p>{products.materiale}</p>
                            </Tab.Panel>

                            <Tab.Panel className="pt-10">
                                <p>{products.misure}</p>
                            </Tab.Panel>

                            <Tab.Panel className="pt-10">
                                <p>{products.design}</p>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
                <section aria-labelledby="related-heading" className="mt-10  py-16 px-4 sm:px-0">
                    <h2 id="related-heading" className="text-xl font-bold text-beige-900">
                        Prodotti consigliati
                    </h2>

                    <a className="group rounded-xl border bg-beige-200 p-6 shadow-xl">
                        <div className="h-auto  w-auto items-center justify-between p-2 group-hover:scale-105 group-hover:transform group-hover:duration-200 group-hover:ease-in-out">
                            <Link href={`/Prodotti/${productsConsigliati.slug}`} key={productsConsigliati.slug}>
                                <img className="grid h-auto w-full rounded-xl border shadow-md" src={process.env.NEXT_PUBLIC_API_URL + '' + productsConsigliati.image.data[0].url} alt={'not found'} />
                            </Link>
                        </div>

                        <div className="mt-4 sm:mt-8">
                            <p className="text-lg font-semibold capitalize">{productsConsigliati.name}</p>
                        </div>

                        <div className="mt-4 flex items-center justify-between space-x-2">
                            <div>
                                <p className="text-beige-500">Prezzo</p>
                                <p className="text-lg font-semibold">
                                    {formatCurrencyString({
                                        value: productsConsigliati.price * 100,
                                        currency: 'EUR',
                                    })}
                                </p>
                            </div>
                        </div>
                    </a>
                </section>
            </div>

            <Footer />
        </>
    )
}

export const getServerSideProps = async (ctx: any) => {
    try {
        const resRelated: any = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/variantetaglias?populate=*&filters[slug][$eq]=${ctx.params.slug}`)
        const products: any = await resRelated.data.data
        const resProdCons: any = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/api/variantetaglias?populate=*&filters[categoria][name][$eq]=${products[0].categoria.data.name}&pagination[page]=1&pagination[pageSize]=4`
        )
        const productsConsigliati: any = await resProdCons.data.data
        console.log('🚀 - file: [slug].tsx - line 370 - getServerSideProps - resProdCons.data', resProdCons.data)

        return {
            props: { productsData: products, productsConsigliati: productsConsigliati, revalidate: 1 }, // Next.js will attempt to re-generate the page, When a request comes in,At most once every second
        }
    } catch (error) {
        console.log('🚀 - [slug].tsx - line 259 - ERROR ', error)
        return { notFound: true }
    }
}
