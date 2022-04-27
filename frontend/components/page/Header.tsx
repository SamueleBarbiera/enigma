/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable no-unused-vars */

import { ChartBarIcon, CursorClickIcon, RefreshIcon, ShieldCheckIcon, ViewGridIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { Dialog, Popover, Transition } from '@headlessui/react'
import { FaRegUser } from 'react-icons/fa'
import { MdOutlineShoppingBag } from 'react-icons/md'
import { useSession, signIn, signOut } from 'next-auth/client'
import { Fragment, useState, useEffect } from 'react'
import { myLoader } from '../../pages/_app'
import Image from 'next/image'
import { useShoppingCart } from 'use-shopping-cart/react'
import CartSummary from '../cart/CartSummary'

const callsToAction = [{ name: 'Checkout', href: '/Checkout', costo_totale: 1 }]

const navigation = {
    pages: [
        { name: 'Prodotti', href: '/Prodotti', icon: 'd' },
        { name: 'Trends', href: '/Trends' },
        { name: 'Best sellers', href: '/Best sellers' },
    ],
}

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}
export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [session] = useSession()
    const [data, setData] = useState<any>()
    const { totalPrice, cartCount } = useShoppingCart()

    return (
        <>
            {/* Mobile menu */}
            <Transition.Root show={mobileMenuOpen} as={Fragment}>
                <Dialog as="div" className="fixed  inset-0 z-40 flex lg:hidden" onClose={setMobileMenuOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="bg-beige fixed inset-0 bg-opacity-25" />
                    </Transition.Child>

                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <div className="relative flex w-2/3 flex-col overflow-y-auto bg-beige-50 pb-8 shadow-xl md:hidden">
                            <div className="flex px-4 pt-5 ">
                                <button type="button" className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-beige-400" onClick={() => setMobileMenuOpen(false)}>
                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>

                            <div className="space-y-6 py-6 px-4">
                                {navigation.pages.map((page) => (
                                    <div key={page.name} className="flow-root">
                                        <a href={page.href} className="-m-2 mb-1 block rounded-lg bg-beige-300 p-2 font-medium text-beige-900">
                                            {page.name}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Transition.Child>
                </Dialog>
            </Transition.Root>
            {/* Hero section */}
            <div className="relative bg-beige-50">
                {/* Decorative image and overlay */}
                <div aria-hidden="true" className="absolute inset-0 bg-beige-300 opacity-50 " />
                {/* Navigation */}
                <header className="relative z-10">
                    <nav aria-label="Top">
                        {/* Secondary navigation */}
                        <div className="bg-beige-50 bg-opacity-10 backdrop-blur-md backdrop-filter">
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div>
                                    <div className="flex h-16 items-center justify-between">
                                        {/* Logo (lg+) */}
                                        <div className="hidden md:flex md:flex-1 lg:items-center">
                                            <a href="/" className="flex-shrink-0">
                                                <Image width={16} height={32} loader={myLoader} src={'/domanda.png'} alt="" />
                                            </a>
                                        </div>

                                        <div className="hidden h-full md:flex">
                                            {/* Flyout menus */}
                                            <Popover.Group className="inset-x-0 bottom-0 px-4">
                                                <div className="flex h-full justify-center space-x-8">
                                                    {navigation.pages.map((page) => (
                                                        <a key={page.name} href={page.href} className="flex items-center text-sm font-medium text-beige-900">
                                                            {page.name}
                                                        </a>
                                                    ))}
                                                </div>
                                            </Popover.Group>
                                        </div>

                                        {/* Mobile menu and search (lg-) */}
                                        <div className="flex flex-1 items-center md:hidden">
                                            <button type="button" className="-ml-2 p-2 text-beige-900" onClick={() => setMobileMenuOpen(true)}>
                                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>
                                        </div>

                                        {/* Logo (lg-) */}
                                        <a href="#" className="hidden">
                                            <Image width={2} height={36} loader={myLoader} src={'/domanda.png'} alt="" />
                                        </a>

                                        <div className="flex flex-1 items-center justify-end">
                                            <div className="-mr-12 flex items-center">
                                                {/* Help */}
                                                <a href="#" className="p-2 text-beige-900 ">
                                                    {(() => {
                                                        if (session) {
                                                            return (
                                                                <div className="ml-4 mt-[0.4rem] flow-root">
                                                                    <Popover className="relative">
                                                                        {({ open }: any) => (
                                                                            <>
                                                                                <Popover.Button
                                                                                    className={classNames(
                                                                                        open ? 'text-beige-900' : 'text-beige-800',
                                                                                        'group inline-flex items-center rounded-md text-base font-medium hover:text-beige-900 '
                                                                                    )}
                                                                                >
                                                                                    <a href="#" className="group -m-2 flex items-center p-2">
                                                                                        <FaRegUser className="h-5 w-5" aria-hidden="true" />
                                                                                    </a>
                                                                                </Popover.Button>

                                                                                <Transition
                                                                                    as={Fragment}
                                                                                    enter="transition ease-out duration-200"
                                                                                    enterFrom="opacity-0 translate-y-1"
                                                                                    enterTo="opacity-100 translate-y-0"
                                                                                    leave="transition ease-in duration-150"
                                                                                    leaveFrom="opacity-100 translate-y-0"
                                                                                    leaveTo="opacity-0 translate-y-1"
                                                                                >
                                                                                    <Popover.Panel className="z-100 absolute mt-8 w-min max-w-xs -translate-x-40 transform rounded-xl px-0 shadow-xl">
                                                                                        <div className="overflow-hidden rounded-lg shadow-lg">
                                                                                            <div className="absolute rounded-xl border bg-gray-50 px-6 py-6 shadow-xl">
                                                                                                <div className="relative mb-12 h-16 w-16 items-center justify-center">
                                                                                                    <Image
                                                                                                        src={session!.user!.image as any}
                                                                                                        alt="User Img"
                                                                                                        loader={myLoader}
                                                                                                        layout="fill"
                                                                                                        className="rounded-full shadow-md"
                                                                                                    />
                                                                                                </div>
                                                                                                <p>{session!.user!.name}</p>
                                                                                                <p>{session!.user!.email}</p>
                                                                                                <button
                                                                                                    className="text-medium easy-in-out mt-2 inline-flex w-full  justify-center rounded-lg bg-beige-500 py-2 px-4 font-medium text-beige-50 shadow-lg transition duration-200 hover:bg-beige-600"
                                                                                                    onClick={() => signOut({ redirect: true })}
                                                                                                >
                                                                                                    Sign Out
                                                                                                </button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </Popover.Panel>
                                                                                </Transition>
                                                                            </>
                                                                        )}
                                                                    </Popover>
                                                                </div>
                                                            )
                                                        } else {
                                                            return <button onClick={() => signIn()}>Accedi</button>
                                                        }
                                                    })()}
                                                </a>
                                                {/* Cart */}
                                                <div className="ml-4 mt-[0.4rem] flow-root">
                                                    <Popover className="relative">
                                                        {({ open }: any) => (
                                                            <>
                                                                <Popover.Button
                                                                    className={classNames(
                                                                        open ? 'text-beige-900' : 'text-beige-500',
                                                                        'group inline-flex items-center rounded-md text-base font-medium hover:text-beige-900 '
                                                                    )}
                                                                >
                                                                    <a href="#" className="group -m-2 flex items-center p-2">
                                                                        <MdOutlineShoppingBag className="h-6 w-6 flex-shrink-0 text-beige-900" aria-hidden="true" />
                                                                        <span className="ml-2 text-sm font-medium text-beige-900">{cartCount}</span>
                                                                    </a>
                                                                </Popover.Button>

                                                                <Transition
                                                                    as={Fragment}
                                                                    enter="transition ease-out duration-200"
                                                                    enterFrom="opacity-0 translate-y-1"
                                                                    enterTo="opacity-100 translate-y-0"
                                                                    leave="transition ease-in duration-150"
                                                                    leaveFrom="opacity-100 translate-y-0"
                                                                    leaveTo="opacity-0 translate-y-1"
                                                                >
                                                                    <Popover.Panel className="z-100 absolute right-2/4 mt-8 w-max transform px-2 sm:px-0 lg:max-w-3xl">
                                                                        <CartSummary />
                                                                    </Popover.Panel>
                                                                </Transition>
                                                            </>
                                                        )}
                                                    </Popover>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        </>
    )
}
