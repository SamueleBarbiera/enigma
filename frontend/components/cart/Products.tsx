import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart/react'
import { CheckCircleIcon, ExclamationCircleIcon, PlusSmIcon, RefreshIcon, ChevronDownIcon } from '@heroicons/react/solid'
import { MenuIcon, SearchIcon, ShoppingCartIcon, UserIcon, XIcon } from '@heroicons/react/outline'
import { Dialog, Disclosure, Menu, Popover, Tab, Transition } from '@headlessui/react'
import { useState, useEffect, Fragment } from 'react'
import { Zoom, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
import Link from 'next/link'
import useSWR from 'swr'
import { fetcher } from 'content/lib/fetcher'

toast.configure()

const OrdinaOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
]
const Filtri = [
    {
        id: 'category',
        name: 'Category',
        options: [
            { value: 'new-arrivals', label: 'All New Arrivals', checked: false },
            { value: 'tees', label: 'Tees', checked: false },
            { value: 'objects', label: 'Objects', checked: true },
            { value: 'sweatshirts', label: 'Sweatshirts', checked: false },
            { value: 'pants-shorts', label: 'Pants & Shorts', checked: false },
        ],
    },
    {
        id: 'color',
        name: 'Color',
        options: [
            { value: 'white', label: 'White', checked: false },
            { value: 'beige', label: 'Beige', checked: false },
            { value: 'beige', label: 'beige', checked: false },
            { value: 'brown', label: 'Brown', checked: false },
            { value: 'green', label: 'Green', checked: false },
            { value: 'purple', label: 'Purple', checked: false },
        ],
    },
    {
        id: 'sizes',
        name: 'Sizes',
        options: [
            { value: 'xs', label: 'XS', checked: false },
            { value: 's', label: 'S', checked: false },
            { value: 'm', label: 'M', checked: false },
            { value: 'l', label: 'L', checked: false },
            { value: 'xl', label: 'XL', checked: false },
            { value: '2xl', label: '2XL', checked: false },
        ],
    },
]

const attivoFiltri = [{ value: 'objects', label: 'Objects' }]

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

const Products = () => {
    const [mobileFiltriOpen, setMobileFiltriOpen] = useState<boolean>(false)
    const [products, setProducts] = useState<any>([])
    const [pageIndex, setPageIndex] = useState<number>(1)
    const [order, setOrder] = useState('DESC')
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const { addItem } = useShoppingCart()

    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/variantetaglias?populate=*&sort=price:${order}&pagination[page]=${pageIndex}&pagination[pageSize]=4`)
                if (res.status == 200) {
                    console.log('🚀 - file: Products.tsx - line 76 - fetchData - jsonResponse', res.data)
                    setProducts(res.data)
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

    const notify = (product: any) => {
        toast.success(
            <>
                <div className="ml-3 font-semibold text-green-900">{product} </div>
                <p className="font-base ml-3 text-green-900">aggiunto al carrello!</p>
            </>,
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

    return (
        <main className="my-12 flex h-full items-center justify-center xl:h-screen ">
            {loading ? (
                <div className="m-32 flex h-screen w-screen items-center justify-center rounded-lg bg-beige-200 py-4 px-4 shadow-xl">
                    <div className="mx-auto flex flex-col items-center justify-center space-x-1 text-4xl font-semibold">
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
                <div className="h-full rounded-xl bg-beige-200 p-4 pt-8 shadow-xl">
                    {/* Mobile Filtro dialog */}
                    <Transition.Root show={mobileFiltriOpen} as={Fragment}>
                        <Dialog as="div" className="fixed inset-0 z-40 flex sm:hidden" onClose={setMobileFiltriOpen}>
                            <Transition.Child
                                as={Fragment}
                                enter="transition-opacity ease-linear duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition-opacity ease-linear duration-300"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
                            </Transition.Child>

                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                                    <div className="flex items-center justify-between px-4">
                                        <h2 className="text-lg font-medium text-gray-900">Filtri</h2>
                                        <button
                                            type="button"
                                            className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                            onClick={() => setMobileFiltriOpen(false)}
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <XIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>

                                    {/* Filtri */}
                                    <form className="mt-4">
                                        {Filtri.map((section) => (
                                            <Disclosure as="div" key={section.name} className="border-t border-gray-200 px-4 py-6">
                                                {({ open }) => (
                                                    <>
                                                        <h3 className="-mx-2 -my-3 flow-root">
                                                            <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-sm text-gray-400">
                                                                <span className="font-medium text-gray-900">{section.name}</span>
                                                                <span className="ml-6 flex items-center">
                                                                    <ChevronDownIcon className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-5 w-5 transform')} aria-hidden="true" />
                                                                </span>
                                                            </Disclosure.Button>
                                                        </h3>
                                                        <Disclosure.Panel className="pt-6">
                                                            <div className="space-y-6">
                                                                {section.options.map((option, optionIdx) => (
                                                                    <div key={option.value} className="flex items-center">
                                                                        <input
                                                                            id={`Filtro-mobile-${section.id}-${optionIdx}`}
                                                                            name={`${section.id}[]`}
                                                                            defaultValue={option.value}
                                                                            type="checkbox"
                                                                            defaultChecked={option.checked}
                                                                            className="h-4 w-4 rounded border-gray-300 text-beige-600 focus:ring-beige-500"
                                                                        />
                                                                        <label htmlFor={`Filtro-mobile-${section.id}-${optionIdx}`} className="ml-3 text-sm text-gray-500">
                                                                            {option.label}
                                                                        </label>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </Disclosure.Panel>
                                                    </>
                                                )}
                                            </Disclosure>
                                        ))}
                                    </form>
                                </div>
                            </Transition.Child>
                        </Dialog>
                    </Transition.Root>

                    <main>
                        {/* Filtri */}
                        <section aria-labelledby="Filtro-heading">
                            <h2 id="Filtro-heading" className="sr-only">
                                Filtri
                            </h2>

                            <div className="relative  border-b border-beige-200 bg-beige-200 pb-4">
                                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                                    <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                            <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                                Ordina
                                                <ChevronDownIcon className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                                            </Menu.Button>
                                        </div>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="absolute left-0 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <div className="py-1">
                                                    {OrdinaOptions.map((option) => (
                                                        <Menu.Item key={option.name}>
                                                            {({ active }) => (
                                                                <a
                                                                    href={option.href}
                                                                    className={classNames(
                                                                        option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                                                        active ? 'bg-beige-100' : '',
                                                                        'block px-4 py-2 text-sm'
                                                                    )}
                                                                >
                                                                    {option.name}
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                    ))}
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>

                                    <button type="button" className="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 smd:hidden" onClick={() => setMobileFiltriOpen(true)}>
                                        Filtri
                                    </button>

                                    <div className="hidden smd:block">
                                        <div className="flow-root">
                                            <Popover.Group className="-mx-4 flex items-center divide-x divide-gray-200">
                                                {Filtri.map((section, sectionIdx) => (
                                                    <Popover key={section.name} className="relative inline-block px-4 text-left">
                                                        <Popover.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                                            <span>{section.name}</span>
                                                            {sectionIdx === 0 ? (
                                                                <span className="ml-1.5 rounded bg-beige-400 py-0.5 px-1.5 pt-1 text-xs font-semibold tabular-nums text-gray-700">1</span>
                                                            ) : null}
                                                            <ChevronDownIcon className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                                                        </Popover.Button>

                                                        <Transition
                                                            as={Fragment}
                                                            enter="transition ease-out duration-100"
                                                            enterFrom="transform opacity-0 scale-95"
                                                            enterTo="transform opacity-100 scale-100"
                                                            leave="transition ease-in duration-75"
                                                            leaveFrom="transform opacity-100 scale-100"
                                                            leaveTo="transform opacity-0 scale-95"
                                                        >
                                                            <Popover.Panel className="absolute right-0 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                                <form className="space-y-4">
                                                                    {section.options.map((option, optionIdx) => (
                                                                        <div key={option.value} className="flex items-center">
                                                                            <input
                                                                                id={`Filtro-${section.id}-${optionIdx}`}
                                                                                name={`${section.id}[]`}
                                                                                defaultValue={option.value}
                                                                                type="checkbox"
                                                                                defaultChecked={option.checked}
                                                                                className="h-4 w-4 rounded border-gray-300 text-beige-600 focus:ring-beige-500"
                                                                            />
                                                                            <label
                                                                                htmlFor={`Filtro-${section.id}-${optionIdx}`}
                                                                                className="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900"
                                                                            >
                                                                                {option.label}
                                                                            </label>
                                                                        </div>
                                                                    ))}
                                                                </form>
                                                            </Popover.Panel>
                                                        </Transition>
                                                    </Popover>
                                                ))}
                                            </Popover.Group>
                                        </div>
                                    </div>
                                </div>

                                {/* attivo Filtri */}
                                <div className="mx-auto max-w-7xl py-3 px-4 sm:flex sm:items-center sm:px-6 lg:px-8">
                                    <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">Filtri</h3>

                                    <div aria-hidden="true" className="hidden h-5 w-px bg-beige-300 sm:ml-4 smd:block" />

                                    <div className="mt-2 sm:mt-0 sm:ml-4">
                                        <div className="-m-1 flex flex-wrap items-center">
                                            {attivoFiltri.map((attivoFiltro) => (
                                                <span
                                                    key={attivoFiltro.value}
                                                    className="m-1 inline-flex items-center rounded-full border border-gray-200 bg-white py-1.5 pl-3 pr-2 text-sm font-medium text-gray-900"
                                                >
                                                    <span>{attivoFiltro.label}</span>
                                                    <button type="button" className="ml-1 inline-flex h-4 w-4 flex-shrink-0 rounded-full p-1 text-gray-400 hover:bg-beige-200 hover:text-gray-500">
                                                        <span className="sr-only">Rimuovi il filtro per {attivoFiltro.label}</span>
                                                        <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                                                            <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
                                                        </svg>
                                                    </button>
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Product grid */}
                        <section aria-labelledby="products-heading" className="mx-auto max-w-2xl px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-24 lg:max-w-7xl lg:px-8">
                            <h2 id="products-heading" className="sr-only">
                                Prodotti
                            </h2>

                            <div className="mx-8 grid grid-cols-1 gap-y-8 gap-x-12  md:mx-12 md:grid-cols-2 xl:grid-cols-4">
                                {products.data.map((product: any) => (
                                    <a className="group rounded-xl border  p-6 shadow-xl">
                                        <div className="h-auto  w-auto items-center justify-center p-2 group-hover:scale-105 group-hover:transform group-hover:duration-200 group-hover:ease-in-out">
                                            {loading ? (
                                                <div className="mx-auto h-auto w-full rounded-lg bg-beige-200  py-4  px-4 shadow-xl">
                                                    <div className="flex flex-col items-center space-x-1 text-4xl font-semibold">
                                                        <RefreshIcon className="m-2 h-12 w-12 flex-shrink-0 animate-spin rounded-full bg-beige-100 py-2 text-beige-800 " />
                                                        <p className="mt-3 animate-pulse text-lg">Caricamento . . .</p>
                                                    </div>
                                                </div>
                                            ) : error ? (
                                                <div className="mx-auto w-fit rounded-lg bg-red-200 py-4 px-4 shadow-xl">
                                                    <div className="flex flex-col items-center space-x-1 text-4xl font-semibold">
                                                        <ExclamationCircleIcon className="m-2 h-12 w-12 flex-shrink-0 rounded-full bg-red-100 py-2 text-red-600 " />
                                                        <p className="m-2 text-lg text-red-500">Qualcosa è andato storto, non preccuparti il pagamento non è andato a buon fine!</p>
                                                    </div>
                                                </div>
                                            ) : (
                                                <Link href={`/Prodotti/${product.id}`} key={product.id}>
                                                    <img
                                                        className="grid h-auto w-full rounded-xl border shadow-md"
                                                        src={process.env.NEXT_PUBLIC_API_URL + '' + product.image.data[0].url}
                                                        alt={'not found'}
                                                    />
                                                </Link>
                                            )}
                                            {/* {product.image.data.map((image: any) => (
                                                    <img className="flex  h-auto w-24 flex-row justify-between" src={process.env.NEXT_PUBLIC_API_URL + '' + image.url} alt={'not found'} />
                                                ))} */}
                                        </div>

                                        <div className="mt-4 sm:mt-8">
                                            <p className="text-lg font-semibold capitalize">{product.name}</p>
                                        </div>

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
                                            <button
                                                onClick={() => {
                                                    notify(product.name), addItem(product)
                                                }}
                                                className="transiction rounded-md bg-beige-200 p-2 shadow-xl duration-200 ease-in-out hover:bg-beige-400"
                                            >
                                                <PlusSmIcon className="h-6 w-6 flex-shrink-0 " />
                                            </button>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </section>
                        {/* <div className="space-x-2 space-y-2">
                            <button
                                className={`rounded p-2 py-2 text-black  md:p-2 ${pageIndex === 1 ? 'bg-beige-300' : 'bg-beige-400'}`}
                                disabled={pageIndex === 1}
                                onClick={() => setPageIndex(pageIndex - 1)}
                            >
                                {' '}
                                Previous
                            </button>
                            <button
                                className={`rounded p-2 py-2 text-black  md:p-2 ${pageIndex === (products && products.meta.pagination.pageCount) ? 'bg-beige-300' : 'bg-beige-400'}`}
                                disabled={pageIndex === (products && products.meta.pagination.pageCount)}
                                onClick={() => setPageIndex(pageIndex + 1)}
                            >
                                Next
                            </button>
                            <span>{`${pageIndex} of ${products && products.meta.pagination.pageCount}`}</span>
                            <button className={`rounded p-2 py-2 text-black md:p-2`} onClick={() => setOrder('DESC')}>
                                {' '}
                                DESC
                            </button>
                            <button className={`rounded p-2 py-2 text-black  md:p-2`} onClick={() => setOrder('ASC')}>
                                ASC
                            </button>
                            <span>{`${pageIndex} of ${products && products.meta.pagination.pageCount}`}</span>
                        </div>  */}
                    </main>
                </div>
            )}
        </main>
    )
}

export default Products
