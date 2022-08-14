import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { Disclosure } from '@headlessui/react'
import { LockClosedIcon } from '@heroicons/react/solid'
import Head from 'next/head'
import { useState } from 'react'
import { GetServerSidePropsContext } from 'next'
import Image from 'next/image'
import { authOptions } from '../api/auth/[...nextauth]'
import { unstable_getServerSession } from 'next-auth'

const subtotal = '210.00'
const discount = { code: 'ENIGMA', amount: '24.00' }
const shipping = '22.00'
const total = '341.68'
const products = [
    {
        id: 1,
        name: 'Micro Backpack',
        href: '/',
        price: '70.00',
        color: 'Moss',
        size: 'M',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-04-product-01.jpg',
        imageAlt: 'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
    },
    {
        id: 2,
        name: 'Micro Backpack',
        href: '/',
        price: '70.00',
        color: 'Moss',
        size: 'M',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-04-product-02.jpg',
        imageAlt: 'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
    },
    {
        id: 3,
        name: 'Micro Backpack',
        href: '/',
        price: '70.00',
        color: 'Moss',
        size: 'M',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-04-product-03.jpg',
        imageAlt: 'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
    },
    {
        id: 4,
        name: 'Micro Backpack',
        href: '/',
        price: '70.00',
        color: 'Moss',
        size: 'M',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-05-product-03.jpg',
        imageAlt: 'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
    },
]

function Checkout() {
    const [hidden, setHidden] = useState(true)

    return (
        <>
            <Head>
                <title>Checkout</title>
                <link rel="icon" href="/question-solid.svg" />
                <meta charSet="utf-8" className="next-head" />
            </Head>
            <Header />
            <main className="lg:flex lg:min-h-full lg:flex-row-reverse lg:overflow-hidden">
                {/* Mobile order summary */}
                <section aria-labelledby="order-heading" className="flex items-center justify-between bg-beige-50 px-4 py-6 sm:px-6 lg:hidden">
                    <Disclosure as="div" className="mx-auto max-w-lg">
                        {({ open }) => (
                            <>
                                <div className="flex items-center justify-between">
                                    <h2 id="order-heading" className="text-lg font-medium text-beige-900">
                                        Il tuo ordine
                                    </h2>
                                    <Disclosure.Button className="px-4 font-medium text-beige-600 hover:text-beige-500">
                                        {open ? <span>Nascondi questo ordine</span> : <span>Visualizza</span>}
                                    </Disclosure.Button>
                                </div>

                                <Disclosure.Panel>
                                    <ul role="list" className="block overflow-y-auto px-6">
                                        {products.map((product) => (
                                            <li key={product.id} className="flex space-x-6 py-6">
                                                <Image src={product.imageSrc} alt={product.imageAlt} className="h-40 w-40 flex-none rounded-md bg-beige-200 object-cover object-center" />
                                                <div className="flex flex-col justify-between space-y-4">
                                                    <div className="space-y-1 text-sm font-medium">
                                                        <h3 className="text-beige-900">{product.name}</h3>
                                                        <p className="text-beige-900">{product.price} €</p>
                                                        <p className="text-beige-500">{product.color}</p>
                                                        <p className="text-beige-500">{product.size}</p>
                                                    </div>
                                                    <div className="flex ">
                                                        <button
                                                            type="button"
                                                            className="transiction rounded-md bg-red-200 p-2 px-4 text-sm font-medium text-red-600 shadow-sm duration-200 ease-in-out hover:bg-red-500 hover:text-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-red-50"
                                                        >
                                                            Rimuovi
                                                        </button>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>

                                    <form className="mt-10">
                                        <label htmlFor="discount-code-mobile" className="block text-sm font-medium text-beige-700">
                                            Codice sconto
                                        </label>
                                        <div className="mt-1 flex space-x-4">
                                            <input
                                                type="text"
                                                id="discount-code-mobile"
                                                name="discount-code-mobile"
                                                className="block w-full rounded-md border-2 border-beige-400 shadow-xl focus:border-beige-500 focus:ring-beige-500 sm:text-sm"
                                            />
                                            <button
                                                type="submit"
                                                className="transiction rounded-md bg-beige-500  px-4 text-sm font-medium text-beige-100 shadow-xl duration-200 ease-in-out hover:bg-beige-700 focus:outline-none focus:ring-2 focus:ring-beige-500 focus:ring-offset-2 focus:ring-offset-beige-50"
                                            >
                                                Usa
                                            </button>
                                        </div>
                                    </form>

                                    <dl className="mt-10 space-y-6 text-sm font-medium text-beige-500">
                                        <div className="flex justify-between">
                                            <dt>Subtotale</dt>
                                            <dd className="text-beige-900">{subtotal} €</dd>
                                        </div>
                                        <div className="flex justify-between">
                                            <dt className="flex">
                                                Sconto
                                                <span className="ml-2 rounded-full bg-beige-200 py-0.5 px-2 text-xs tracking-wide text-beige-600">{discount.code}</span>
                                            </dt>
                                            <dd className="text-beige-900">-{discount.amount} €</dd>
                                        </div>
                                        <div className="flex justify-between">
                                            <dt>Spedizione</dt>
                                            <dd className="text-beige-900">{shipping} €</dd>
                                        </div>
                                    </dl>
                                </Disclosure.Panel>

                                <p className="mt-6 flex items-center justify-between border-t  pt-6 text-sm font-medium text-beige-900">
                                    <span className="text-base">Totale</span>
                                    <span className="text-base">{total} €</span>
                                </p>
                            </>
                        )}
                    </Disclosure>
                </section>

                {/* Order summary */}
                <section aria-labelledby="summary-heading" className="hidden w-full max-w-min flex-col bg-beige-50 lg:flex">
                    <ul role="list" className="flex-auto  overflow-y-auto px-6">
                        {products.map((product) => (
                            <li key={product.id} className="flex space-x-6 py-6">
                                <Image src={product.imageSrc} alt={product.imageAlt} className="h-40 w-40 flex-none rounded-md bg-beige-200 object-cover object-center" />
                                <div className="flex flex-col justify-between space-y-4">
                                    <div className="space-y-1 text-sm font-medium">
                                        <h3 className="text-beige-900">{product.name}</h3>
                                        <p className="text-beige-900">{product.price} €</p>
                                        <p className="text-beige-500">{product.color}</p>
                                        <p className="text-beige-500">{product.size}</p>
                                    </div>
                                    <div className="flex space-x-32">
                                        <button
                                            type="button"
                                            className="transiction rounded-md bg-red-200 p-2 px-4 text-sm font-medium text-red-600 shadow-sm duration-200 ease-in-out hover:bg-red-500 hover:text-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-red-50"
                                        >
                                            Rimuovi
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="sticky bottom-0 flex-none border-t  bg-beige-50 p-6">
                        <form>
                            <label htmlFor="discount-code" className="block text-sm font-medium text-beige-700">
                                Codice sconto
                            </label>
                            <div className="mt-1 flex space-x-4">
                                <input
                                    type="text"
                                    id="discount-code"
                                    name="discount-code"
                                    className="block w-min rounded-md border-2 border-beige-400 shadow-xl focus:border-beige-500 focus:ring-beige-500 sm:text-sm"
                                />
                                <button
                                    type="submit"
                                    className="transiction rounded-md bg-beige-500 px-4 text-sm font-medium text-beige-100 shadow-xl duration-200 ease-in-out hover:bg-beige-700 focus:outline-none focus:ring-2 focus:ring-beige-500 focus:ring-offset-2 focus:ring-offset-beige-50"
                                >
                                    Usa
                                </button>
                            </div>
                        </form>

                        <dl className="mt-10 space-y-6 text-sm font-medium text-beige-500">
                            <div className="flex justify-between">
                                <dt>Subtotale</dt>
                                <dd className="text-beige-900">{subtotal} €</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="flex">
                                    Sconto
                                    <span className="rounded-sm1 ml-2 bg-beige-200 py-0.5 px-2 text-xs tracking-wide text-beige-600">{discount.code}</span>
                                </dt>
                                <dd className="text-beige-900">-{discount.amount} €</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt>Spedizione</dt>
                                <dd className="text-beige-900">{shipping} €</dd>
                            </div>
                            <div className="flex items-center justify-between border-t  pt-6 text-beige-900">
                                <dt className="text-base">Totale</dt>
                                <dd className="text-base">{total} €</dd>
                            </div>
                        </dl>
                    </div>
                </section>

                {/* Checkout form */}
                <section aria-labelledby="payment-heading" className="flex-auto overflow-y-auto px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:px-8 lg:pt-0 lg:pb-24">
                    <div className="mx-auto mt-8 max-w-lg">
                        <button
                            type="button"
                            className="mt-4 flex w-full items-center justify-center rounded-md border border-transparent bg-gray-900 py-2 text-white shadow-xl hover:bg-beige-800 focus:outline-none focus:ring-2 focus:ring-beige-900 focus:ring-offset-2"
                        >
                            <span className="sr-only">Pay with Apple Pay</span>
                            <svg className="h-5 w-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 20">
                                <path d="M9.536 2.579c-.571.675-1.485 1.208-2.4 1.132-.113-.914.334-1.884.858-2.484C8.565.533 9.564.038 10.374 0c.095.951-.276 1.884-.838 2.579zm.829 1.313c-1.324-.077-2.457.751-3.085.751-.638 0-1.6-.713-2.647-.694-1.362.019-2.628.79-3.323 2.017-1.429 2.455-.372 6.09 1.009 8.087.676.99 1.485 2.075 2.552 2.036 1.009-.038 1.409-.656 2.628-.656 1.228 0 1.58.656 2.647.637 1.104-.019 1.8-.99 2.475-1.979.771-1.122 1.086-2.217 1.105-2.274-.02-.019-2.133-.828-2.152-3.263-.02-2.036 1.666-3.007 1.742-3.064-.952-1.408-2.437-1.56-2.951-1.598zm7.645-2.76v14.834h2.305v-5.072h3.19c2.913 0 4.96-1.998 4.96-4.89 0-2.893-2.01-4.872-4.885-4.872h-5.57zm2.305 1.941h2.656c2 0 3.142 1.066 3.142 2.94 0 1.875-1.142 2.95-3.151 2.95h-2.647v-5.89zM32.673 16.08c1.448 0 2.79-.733 3.4-1.893h.047v1.779h2.133V8.582c0-2.14-1.714-3.52-4.351-3.52-2.447 0-4.256 1.399-4.323 3.32h2.076c.171-.913 1.018-1.512 2.18-1.512 1.41 0 2.2.656 2.2 1.865v.818l-2.876.171c-2.675.162-4.123 1.256-4.123 3.159 0 1.922 1.495 3.197 3.637 3.197zm.62-1.76c-1.229 0-2.01-.59-2.01-1.494 0-.933.752-1.475 2.19-1.56l2.562-.162v.837c0 1.39-1.181 2.379-2.743 2.379zM41.1 20c2.247 0 3.304-.856 4.227-3.454l4.047-11.341h-2.342l-2.714 8.763h-.047l-2.714-8.763h-2.409l3.904 10.799-.21.656c-.352 1.114-.923 1.542-1.942 1.542-.18 0-.533-.02-.676-.038v1.779c.133.038.705.057.876.057z" />
                            </svg>
                        </button>
                        <button
                            type="button"
                            className="transiction mt-4 flex w-full items-center  justify-center rounded-md border border-transparent bg-red-100 py-2 text-white shadow-xl duration-200 ease-in-out hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-900 focus:ring-offset-2"
                        >
                            <span className="sr-only">Pay with Satispay</span>

                            <div className="h-5 w-auto">
                                <Image alt="" src={'./Logo_Satispay.png'} className="h-5 w-auto" />
                            </div>
                        </button>

                        <button
                            type="button"
                            className="transiction mt-4 flex w-full items-center justify-center rounded-md border border-transparent bg-gray-200 py-2 text-white shadow-xl duration-200 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                        >
                            <span className="sr-only">Pay with Google Pay</span>
                            <svg className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 437 174">
                                <g fill="none" fillRule="nonzero">
                                    <path
                                        fill="#5F6368"
                                        d="M207.2 84.6v50.8h-16.1V10h42.7c10.3-.2 20.2 3.7 27.7 10.9 7.5 6.7 11.7 16.4 11.5 26.4.2 10.1-4 19.8-11.5 26.6-7.5 7.1-16.7 10.7-27.6 10.7h-26.7zm0-59.2v43.8h27c6 .2 11.8-2.2 15.9-6.5 8.5-8.2 8.6-21.7.4-30.2l-.4-.4c-4.1-4.4-9.9-6.8-15.9-6.6l-27-.1zM310.1 46.8c11.9 0 21.3 3.2 28.2 9.5 6.9 6.4 10.3 15.1 10.3 26.2v52.8h-15.4v-11.9h-.7c-6.7 9.8-15.5 14.7-26.6 14.7-9.4 0-17.4-2.8-23.7-8.4-6.2-5.2-9.7-12.9-9.5-21 0-8.9 3.4-15.9 10.1-21.2 6.7-5.3 15.7-7.9 26.9-7.9 9.6 0 17.4 1.8 23.6 5.2v-3.7c0-5.5-2.4-10.7-6.6-14.2-4.3-3.8-9.8-5.9-15.5-5.9-9 0-16.1 3.8-21.4 11.4l-14.2-8.9c7.7-11.1 19.2-16.7 34.5-16.7zm-20.8 62.3c0 4.2 2 8.1 5.3 10.5 3.6 2.8 8 4.3 12.5 4.2 6.8 0 13.3-2.7 18.1-7.5 5.3-5 8-10.9 8-17.7-5-4-12-6-21-6-6.5 0-12 1.6-16.4 4.7-4.3 3.2-6.5 7.1-6.5 11.8zM437 49.6l-53.8 123.6h-16.6l20-43.2-35.4-80.3h17.5l25.5 61.6h.4l24.9-61.6z"
                                    />
                                    <path fill="#4285F4" d="M142.1 73.6c0-4.9-.4-9.8-1.2-14.6H73v27.7h38.9c-1.6 8.9-6.8 16.9-14.4 21.9v18h23.2c13.6-12.5 21.4-31 21.4-53z" />
                                    <path fill="#34A853" d="M73 144c19.4 0 35.8-6.4 47.7-17.4l-23.2-18c-6.5 4.4-14.8 6.9-24.5 6.9-18.8 0-34.7-12.7-40.4-29.7H8.7v18.6C20.9 128.6 45.8 144 73 144z" />
                                    <path fill="#FBBC04" d="M32.6 85.8c-3-8.9-3-18.6 0-27.6V39.7H8.7a71.39 71.39 0 0 0 0 64.6l23.9-18.5z" />
                                    <path fill="#EA4335" d="M73 28.5c10.3-.2 20.2 3.7 27.6 10.8l20.5-20.5C108.1 6.5 90.9-.2 73 0 45.8 0 20.9 15.4 8.7 39.7l23.9 18.6C38.3 41.2 54.2 28.5 73 28.5z" />
                                </g>
                            </svg>
                        </button>
                        <div className="relative mt-8">
                            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                <div className="w-full border-t " />
                            </div>
                            <div className="relative flex justify-center">
                                <span className="bg-gray-50 px-4 text-sm font-medium text-beige-900">Oppure</span>
                            </div>
                        </div>

                        <form className="mt-6">
                            <div className="grid grid-cols-12 gap-y-6 gap-x-4">
                                <div className="col-span-full">
                                    <label htmlFor="email-address" className="block text-sm font-medium text-beige-900">
                                        Indirizzo email
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="email"
                                            id="email-address"
                                            name="email-address"
                                            autoComplete="email"
                                            className="block w-full rounded-md border-2 border-transparent border-beige-400 shadow-lg outline-hidden focus:border-beige-400  focus:ring-0  sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="name-on-card" className="block text-sm font-medium text-beige-900">
                                        Nome del propretario della carta
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            id="name-on-card"
                                            name="name-on-card"
                                            autoComplete="cc-name"
                                            className="block w-full rounded-md border-2 border-transparent border-beige-400  shadow-xl outline-hidden focus:border-beige-400  focus:ring-0 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="card-number" className="block text-sm font-medium text-beige-900">
                                        Numero della carta
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            id="card-number"
                                            name="card-number"
                                            autoComplete="cc-number"
                                            className="block w-full rounded-md border-2 border-transparent border-beige-400  shadow-xl outline-hidden  focus:border-beige-400 focus:ring-0  sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-8 sm:col-span-9">
                                    <label htmlFor="expiration-date" className="block text-sm font-medium text-beige-900">
                                        Data di scadenza M / A
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="expiration-date"
                                            id="expiration-date"
                                            autoComplete="cc-exp"
                                            className="block w-full rounded-md border-2 border-transparent border-beige-400  shadow-xl outline-hidden  focus:border-beige-400 focus:ring-0  sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-4 sm:col-span-3">
                                    <label htmlFor="cvc" className="block text-sm font-medium text-beige-900">
                                        CVC
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="cvc"
                                            id="cvc"
                                            autoComplete="csc"
                                            className="block w-full rounded-md border-2 border-transparent border-beige-400 shadow-xl  outline-hidden focus:border-beige-400 focus:ring-0  sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full" hidden={hidden}>
                                    <label htmlFor="address" className="block text-sm font-medium text-beige-900">
                                        Indirizzo
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            id="address"
                                            name="address"
                                            autoComplete="street-address"
                                            className="block w-full rounded-md border-2 border-transparent border-beige-400  shadow-xl outline-hidden focus:border-beige-400  focus:ring-0  sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full sm:col-span-4" hidden={hidden}>
                                    <label htmlFor="city" className="block text-sm font-medium text-beige-900">
                                        Citta
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            id="city"
                                            name="city"
                                            autoComplete="address-level2"
                                            className="block w-full rounded-md border-2 border-transparent border-beige-400  shadow-xl outline-hidden focus:border-beige-400  focus:ring-0  sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full sm:col-span-4" hidden={hidden}>
                                    <label htmlFor="region" className="block text-sm font-medium text-beige-900">
                                        Provincia
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            id="region"
                                            name="region"
                                            autoComplete="address-level1"
                                            className="block w-full rounded-md border-2 border-transparent border-beige-400  shadow-xl outline-hidden focus:border-beige-400 focus:ring-0  sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full sm:col-span-4" hidden={hidden}>
                                    <label htmlFor="postal-code" className="block text-sm font-medium text-beige-900">
                                        N. Postale
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            id="postal-code"
                                            name="postal-code"
                                            autoComplete="postal-code"
                                            className="block w-full rounded-md border-2 border-transparent  border-beige-400 shadow-xl outline-hidden focus:border-beige-400 focus:ring-0  sm:text-sm"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 flex space-x-2">
                                <div className="flex h-5 items-center shadow-xl">
                                    <input
                                        onClick={() => setHidden(!hidden)}
                                        id="same-as-shipping"
                                        name="same-as-shipping"
                                        type="checkbox"
                                        defaultChecked
                                        className="h-4 w-4 rounded border-2 border-beige-600 bg-beige-200 text-beige-900 shadow-xl focus:ring-0  focus:ring-offset-0"
                                    />
                                </div>
                                <label htmlFor="same-as-shipping" className="text-sm font-medium text-beige-900">
                                    Vengo a ritirarlo in negozio per non pagare la spedizione
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="transiction mt-6 w-full rounded-md border border-transparent bg-beige-600 py-2 px-4 text-sm font-medium text-white shadow-xl duration-200 ease-in-out hover:bg-beige-700 focus:outline-none focus:ring-2 focus:ring-beige-500 focus:ring-offset-2"
                            >
                                Paga {total} €
                            </button>

                            <p className="mt-6 flex justify-center text-sm font-medium text-beige-900">
                                <LockClosedIcon className="mr-1.5 h-5 w-5 text-beige-900" aria-hidden="true" />I dettagli delle carte non vengono salvati
                            </p>
                        </form>
                    </div>
                </section>
            </main>
            <section>
                <div className="product">
                    <Image src="https://i.imgur.com/EHyR2nP.png" alt="The cover of Stubborn Attachments" />
                    <div className="description">
                        <h3>Stubborn Attachments</h3>
                        <h5>$20.00</h5>
                    </div>
                </div>
                <form action="/create-checkout-session" method="POST">
                    <button type="submit" id="checkout-button">
                        Checkout
                    </button>
                </form>
            </section>
            <Footer />
        </>
    )
}

export default Checkout

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const session = await unstable_getServerSession(ctx.req, ctx.res, authOptions)

    if (!session) {
        return {
            redirect: { destination: '/AccessDenied' },
        }
    }

    return {
        props: { session: session },
    }
}
