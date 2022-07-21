import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { DotsVerticalIcon } from '@heroicons/react/outline'
import { CheckCircleIcon } from '@heroicons/react/solid'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { getSession } from 'next-auth/react'
import Head from 'next/head'
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const orders = [
    {
        number: 'WU88191111',
        href: '#',
        invoiceHref: '#',
        createdDate: 'Jul 6, 2021',
        createdDatetime: '2021-07-06',
        deliveredDate: 'July 12, 2021',
        deliveredDatetime: '2021-07-12',
        total: '$160.00',
        products: [
            {
                id: 1,
                name: 'Micro Backpack',

                description: 'Are you a minimalist yday carry items. Wear it like a backpack or carry it like a satchel for all-day use.',
                href: '#',
                price: '$70.00',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg',
                imageAlt: 'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
            },
            // More products...
        ],
    },
    {
        number: 'WU88191111',
        href: '#',
        invoiceHref: '#',
        createdDate: 'Jul 6, 2021',
        createdDatetime: '2021-07-06',
        deliveredDate: 'July 12, 2021',
        deliveredDatetime: '2021-07-12',
        total: '$160.00',
        products: [
            {
                id: 1,
                name: 'Micro Backpack',
                description: 'Are you a minimalist yday carry items. Wear it like a backpack or carry it like a satchel for all-day use.',
                href: '#',
                price: '$70.00',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg',
                imageAlt: 'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
            },
            {
                id: 2,
                name: 'Micro Backpack',

                description: 'Are you a minimalist yday carry items. Wear it like a backpack or carry it like a satchel for all-day use.',
                href: '#',
                price: '$70.00',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg',
                imageAlt: 'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
            },
            // More products...
        ],
    },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

function AcquistiEffettuati(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <>
            <Head>
                <title>Acquisti Effettuati</title>
                <link rel="icon" href="/question-solid.svg" />
                <meta charSet="utf-8" className="next-head" />
            </Head>
            <Header />
            <div className="bg-beige-50">
                <main className="py-24">
                    <div className="mx-auto max-w-7xl sm:px-2 lg:px-8">
                        <div className="mx-auto max-w-2xl px-4 lg:max-w-4xl lg:px-0">
                            <h1 className="text-2xl font-extrabold tracking-tight text-beige-900 sm:text-3xl">Storico degli ordini</h1>
                            <p className="mt-2 text-sm text-beige-500">Controlla lo stato degli ordini effettuati e acquistali di nuovo</p>
                        </div>
                    </div>

                    <section aria-labelledby="recent-heading" className="mt-16">
                        <h2 id="recent-heading" className="sr-only">
                            Recent orders
                        </h2>
                        <div className="mx-auto max-w-7xl sm:px-2 lg:px-8">
                            <div className="mx-auto max-w-2xl space-y-8 px-4 lg:max-w-4xl lg:px-0 ">
                                {orders.map((order) => (
                                    <div key={order.number} className="rounded-xl bg-gray-50 shadow-xl ">
                                        <h3 className="sr-only">
                                            Order placed on <time dateTime={order.createdDatetime}>{order.createdDate}</time>
                                        </h3>

                                        <div className="mx-2 -mb-4 flex items-center p-6 sm:grid sm:grid-cols-3 sm:gap-x-6">
                                            <dl className="grid flex-1 grid-cols-2 flex-col-reverse gap-x-16 text-sm sm:col-span-3 sm:grid-cols-3 lg:col-span-2">
                                                <div>
                                                    <dt className="font-medium text-beige-900">N. dell'ordine</dt>
                                                    <dd className="mt-1 text-beige-500">{order.number}</dd>
                                                </div>
                                                <div className="hidden sm:block">
                                                    <dt className="font-medium text-beige-900">Data acquisto</dt>
                                                    <dd className="mt-1 flex w-max flex-shrink-0 text-beige-500">
                                                        <time dateTime={order.createdDatetime}>{order.createdDate}</time>
                                                    </dd>
                                                </div>
                                                <div className="ml-10 items-end justify-end sm:ml-0">
                                                    <dt className="font-medium text-beige-900">Costo totale</dt>
                                                    <dd className="mt-1 font-medium text-beige-600">{order.total}</dd>
                                                </div>
                                            </dl>

                                            <Menu as="div" className="relative flex justify-end lg:hidden">
                                                <div className="flex items-center">
                                                    <Menu.Button className="-m-2 flex items-center p-2 text-beige-400 hover:text-beige-500">
                                                        <span className="sr-only">Opzioni dell'ordine {order.number}</span>
                                                        <DotsVerticalIcon className="h-6 w-6" aria-hidden="true" />
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
                                                    <Menu.Items className="absolute right-0 mt-2 w-40 origin-bottom-right rounded-xl bg-gray-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        <div className="py-1">
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <Link
                                                                        href={order.href}
                                                                        className={classNames(active ? 'bg-beige-100 text-beige-900' : 'text-beige-700', 'block px-4 py-2 text-sm')}
                                                                    >
                                                                        View
                                                                    </Link>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <Link
                                                                        href={order.invoiceHref}
                                                                        className={classNames(active ? 'bg-beige-100 text-beige-900' : 'text-beige-700', 'block px-4 py-2 text-sm')}
                                                                    >
                                                                        Invoice
                                                                    </Link>
                                                                )}
                                                            </Menu.Item>
                                                        </div>
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        </div>

                                        {/* Products */}
                                        <h4 className="sr-only">Items</h4>
                                        <ul role="list" className="divide-y divide-beige-200 p-4">
                                            {order.products.map((product) => (
                                                <li key={product.id} className="p-6">
                                                    <div className="flex items-center">
                                                        <div className="mr-4 -ml-3 h-32 w-32 flex-shrink-0 overflow-hidden rounded-xl bg-beige-100 sm:ml-2">
                                                            <Image src={product.imageSrc} alt={product.imageAlt} className="h-full w-full object-cover object-center" />
                                                        </div>
                                                        <div className="ml-4 flex-1 text-sm">
                                                            <div className="font-medium text-beige-900 smd:flex smd:justify-between">
                                                                <h5 className="">{product.name}</h5>
                                                                <p className="mt-1 smd:ml-2 smd:mt-0">{product.price}</p>
                                                            </div>
                                                            <p className="hidden text-beige-500 smd:mt-2 smd:block">{product.description}</p>

                                                            <div className="mt-4 flex w-full text-sm font-medium smd:hidden">
                                                                <div className=" flex w-full flex-auto flex-shrink-0 break-before-all text-xs ">
                                                                    <Link
                                                                        href={product.href}
                                                                        className="transiction whitespace-nowrap rounded-lg border-2 border-solid border-beige-200 bg-beige-200 p-2 text-beige-900 shadow-lg duration-200 ease-in-out hover:bg-beige-100"
                                                                    >
                                                                        Visualizza
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="mt-6 flex items-center justify-center smd:justify-between">
                                                        <div className="flex  items-center">
                                                            <CheckCircleIcon className="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
                                                            <p className=" text-sm font-medium text-beige-500 smd:ml-2">
                                                                Spedito il <time dateTime={order.deliveredDatetime}>{order.deliveredDate}</time>
                                                            </p>
                                                        </div>
                                                        <div className=" mt-0 hidden pt-0 sm:ml-4 sm:border-none  smd:flex smd:items-center smd:space-x-4 smd:text-sm smd:font-medium">
                                                            <div className="flex flex-1 flex-shrink justify-center">
                                                                <Link
                                                                    href={product.href}
                                                                    className="transiction whitespace-nowrap rounded-lg border-2 border-solid border-beige-200 bg-beige-200 p-2 text-beige-900 shadow-lg duration-200 ease-in-out hover:bg-beige-100"
                                                                >
                                                                    Visualizza il prodotto
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            <Footer />
        </>
    )
}

export default AcquistiEffettuati

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const session = await getSession(ctx)

    if (!session!.user && session!.user.email === '') {
        return {
            redirect: { destination: '/AccessDenied' },
        }
    }

    return {
        props: { products: null },
    }
}
