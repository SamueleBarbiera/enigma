import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, SearchIcon, ShoppingCartIcon, UserIcon, XIcon } from '@heroicons/react/outline'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { getSession, useSession } from 'next-auth/client'
import AccessDenied from '@/pages/AccessDenied'
import Head from 'next/head'

const products = [
    {
        id: 1,
        name: 'Nome prodotto ...',
        description: 'Descrizione prodotto ...',
        href: '#',
        price: '35.00',
        status: 'La spedizione partirà il ',
        step: 1,
        date: 'Marzo 24, 2022',
        datetime: '2022-03-24',
        address: ['Floyd Miles', '7363 Cynthia Pass', 'Toronto, ON N3Y 4H8'],
        email: 'f•••@example.com',
        phone: '1•••••••••40',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/confirmation-page-03-product-01.jpg',
        imageAlt: 'Insulated bottle with white base and black snap lid.',
    },
    {
        id: 2,
        name: 'Nome prodotto ...',
        description: 'Descrizione prodotto ...',
        href: '#',
        price: '149.00',
        status: 'Spedito',
        step: 2,
        date: 'Marzo 23, 2022',
        datetime: '2022-03-23',
        address: ['Floyd Miles', '7363 Cynthia Pass', 'Toronto, ON N3Y 4H8'],
        email: 'f•••@example.com',
        phone: '1•••••••••40',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/confirmation-page-03-product-02.jpg',
        imageAlt: 'Arm modeling wristwatch with black leather band, white watch face, thin watch hands, and fine time markings.',
    },
    // More products...
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function RecapOrdini() {
    return (
        <>
            <Head>
                <title>Recap Ordini</title>
                <link rel="icon" href="/question-solid.svg" />
                <meta charSet="utf-8" className="next-head" />
            </Head>
            <Header />
            <div className="bg-beige-50">
                <main className="mx-auto max-w-2xl px-6 pt-8 pb-24 smd:pt-16 xmd:max-w-7xl xmd:px-8">
                    <div className="space-y-2 px-4 smd:flex smd:items-baseline smd:justify-between smd:space-y-0 smd:px-0">
                        <div className="flex smd:items-baseline smd:space-x-4">
                            <h1 className="text-2xl font-extrabold tracking-tight text-beige-900 smd:text-3xl">Ordine #54879</h1>
                        </div>
                        <p className="text-sm text-beige-600">
                            Ordine effettuato{' '}
                            <time dateTime="2021-03-22" className="font-medium text-beige-900">
                                Marzo 22, 2022
                            </time>
                        </p>
                    </div>

                    {/* Products */}
                    <section aria-labelledby="products-heading" className="mt-6">
                        <div className="space-y-8">
                            {products.map((product) => (
                                <div key={product.id} className="border border-t border-b border-beige-200 bg-gray-50 shadow-xl smd:rounded-lg smd:border">
                                    <div className="gap-y-12 py-6 px-4 smd:px-6 md:gap-x-8 xmd:grid xmd:grid-cols-12 xmd:p-8">
                                        <div className="smd:flex xmd:col-span-7">
                                            <div className="aspect-w-1 aspect-h-1 w-full flex-shrink-0 overflow-hidden rounded-lg smd:aspect-none smd:h-40 smd:w-40">
                                                <img src={product.imageSrc} alt={product.imageAlt} className="h-full w-full object-cover object-center smd:h-full smd:w-full" />
                                            </div>

                                            <div className="mt-6 smd:mt-0 smd:ml-6">
                                                <h3 className="text-base font-medium text-beige-900">
                                                    <a href={product.href}>{product.name}</a>
                                                </h3>
                                                <p className="mt-2 text-sm font-medium text-beige-900">{product.price} €</p>
                                                <p className="mt-3 text-sm text-beige-500">{product.description}</p>
                                            </div>
                                        </div>

                                        <div className="mt-12 xmd:col-span-5 xmd:mt-0">
                                            <dl className="grid grid-cols-2 gap-x-6 text-sm">
                                                <div>
                                                    <dt className="font-medium text-beige-900">Indirizzo di spedizione</dt>
                                                    <dd className="mt-3 text-beige-500">
                                                        <span className="block">{product.address[0]}</span>
                                                        <span className="block">{product.address[1]}</span>
                                                        <span className="block">{product.address[2]}</span>
                                                    </dd>
                                                </div>
                                                <div>
                                                    <dt className="font-medium text-beige-900">Dati per la spedizione</dt>
                                                    <dd className="mt-3 flex-shrink space-y-3 break-all text-justify text-beige-500">
                                                        <p>{product.email}</p>
                                                        <p>{product.phone}</p>
                                                    </dd>
                                                </div>
                                            </dl>
                                        </div>
                                    </div>

                                    <div className="border-t border-beige-200 py-6 px-4 smd:px-6 xmd:p-8">
                                        <h4 className="sr-only">Stato</h4>
                                        <p className="text-sm font-medium text-beige-900">
                                            {product.status} il <time dateTime={product.datetime}>{product.date}</time>
                                        </p>
                                        <div className="mt-6" aria-hidden="true">
                                            <div className="overflow-hidden rounded-full bg-beige-200">
                                                <div className="h-2 rounded-full bg-beige-600" style={{ width: `calc((€{product.step} * 2 + 1) / 8 * 100%)` }} />
                                            </div>
                                            <div className="mt-6 hidden grid-cols-4 text-sm font-medium text-beige-600 smd:grid">
                                                <div className="text-beige-600">Avviato</div>
                                                <div className={classNames(product.step > 0 ? 'text-beige-600' : '', 'text-center')}>In Processo</div>
                                                <div className={classNames(product.step > 1 ? 'text-beige-600' : '', 'text-center')}>Spedito</div>
                                                <div className={classNames(product.step > 2 ? 'text-beige-600' : '', 'text-right')}>Consegnato</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Billing */}
                    <section aria-labelledby="summary-heading" className="mt-16">
                        <h2 id="summary-heading" className="sr-only">
                            Info di pagamento
                        </h2>

                        <div className="border bg-gray-50 py-6 px-4 shadow-xl smd:rounded-lg smd:px-6 xmd:grid xmd:grid-cols-12 xmd:gap-x-8 xmd:px-8 xmd:py-8">
                            <dl className="grid grid-cols-2 gap-6 text-sm smd:grid-cols-2 md:gap-x-8 xmd:col-span-7">
                                <div>
                                    <dt className="font-medium text-beige-900">Indirizzo di spedizione</dt>
                                    <dd className="mt-3 text-beige-500">
                                        <span className="block">Via ...</span>
                                        <span className="block">CAP , paese</span>
                                        <span className="block">Citta, Regione</span>
                                    </dd>
                                </div>
                                <div>
                                    <dt className="font-medium text-beige-900">Info di pagamento</dt>
                                    <div className="mt-3">
                                        <dd className="-ml-4 -mt-4 flex flex-wrap">
                                            <div className="ml-4 mt-4 flex-shrink-0">
                                                <svg aria-hidden="true" width={36} height={24} viewBox="0 0 36 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
                                                    <rect width={36} height={24} rx={4} fill="#224DBA" />
                                                    <path
                                                        d="M10.925 15.673H8.874l-1.538-6c-.073-.276-.228-.52-.456-.635A6.575 6.575 0 005 8.403v-.231h3.304c.456 0 .798.347.855.75l.798 4.328 2.05-5.078h1.994l-3.076 7.5zm4.216 0h-1.937L14.8 8.172h1.937l-1.595 7.5zm4.101-5.422c.057-.404.399-.635.798-.635a3.54 3.54 0 011.88.346l.342-1.615A4.808 4.808 0 0020.496 8c-1.88 0-3.248 1.039-3.248 2.481 0 1.097.969 1.673 1.653 2.02.74.346 1.025.577.968.923 0 .519-.57.75-1.139.75a4.795 4.795 0 01-1.994-.462l-.342 1.616a5.48 5.48 0 002.108.404c2.108.057 3.418-.981 3.418-2.539 0-1.962-2.678-2.077-2.678-2.942zm9.457 5.422L27.16 8.172h-1.652a.858.858 0 00-.798.577l-2.848 6.924h1.994l.398-1.096h2.45l.228 1.096h1.766zm-2.905-5.482l.57 2.827h-1.596l1.026-2.827z"
                                                        fill="#fff"
                                                    />
                                                </svg>
                                                <p className="sr-only">Visa</p>
                                            </div>
                                            <div className="ml-4 mt-4">
                                                <p className="text-beige-900">Finisce per 4242</p>
                                                <p className="text-beige-600">Scade il 02 / 24</p>
                                            </div>
                                        </dd>
                                    </div>
                                </div>
                            </dl>

                            <dl className="mt-8 divide-y divide-beige-200 text-sm xmd:col-span-5 xmd:mt-0">
                                <div className="flex items-center justify-between pb-4">
                                    <dt className="text-beige-900">Subtotale</dt>
                                    <dd className="font-medium text-beige-900">72 €</dd>
                                </div>
                                <div className="flex items-center justify-between py-4">
                                    <dt className="text-beige-900">Spedizione</dt>
                                    <dd className="font-medium text-beige-900">5 €</dd>
                                </div>
                                <div className="flex items-center justify-between pt-4">
                                    <dt className="font-medium text-beige-900">Totale</dt>
                                    <dd className="font-bold  text-beige-900">83.16 €</dd>
                                </div>
                            </dl>
                        </div>
                    </section>
                </main>
            </div>
            <Footer />
        </>
    )
}

export async function getServerSideProps(ctx: any) {
    const session = await getSession(ctx)

    if (!session!.user && session!.user == {} && (session as any).user.email === '') {
        return {
            redirect: { destination: '/AccessDenied' },
        }
    }

    return {
        props: { products: null },
    }
}
