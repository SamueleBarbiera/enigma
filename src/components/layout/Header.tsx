
/* eslint-disable no-unused-vars */
import { RefreshIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { Dialog, Popover, Transition } from '@headlessui/react'
import { FaRegUser } from 'react-icons/fa'
import { MdOutlineShoppingBag } from 'react-icons/md'
import { useSession, signIn, signOut } from 'next-auth/react'
import { Fragment, useState } from 'react'
import { BiHomeAlt, BiBarcodeReader } from 'react-icons/bi'
import Image from 'next/image'
import { useShoppingCart } from 'use-shopping-cart'
import CartSummary from '../cart/CartSummary'
import Link from 'next/link'
import { Url } from 'url'

const navigation = {
    pages: [
        { name: 'Home', href: '/', icon: <BiHomeAlt className="h-6 w-6 flex-shrink-0 text-beige-900" aria-hidden="true" /> },
        { name: 'Prodotti', href: '/Prodotti', icon: <BiBarcodeReader className="h-6 w-6 flex-shrink-0 text-beige-900" aria-hidden="true" /> },
    ],
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { data: session, status } = useSession()
    const { cartCount } = useShoppingCart()
    const navigationUrl: Url = navigation.pages[1]?.href
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
                            <div className="flex p-2 ">
                                <button type="button" className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-beige-400" onClick={() => setMobileMenuOpen(false)}>
                                    <XIcon className="h-6 w-6 text-beige-900" aria-hidden="true" />
                                </button>
                            </div>

                            <div className="space-y-6 py-6 px-6">
                                {navigation.pages.map((page) => (
                                    <div key={page.name} className="flow-root">
                                        <Link href={page.href} className="-m-2 mb-1 block justify-between rounded-lg bg-beige-200 p-2 font-medium text-beige-900">
                                            <div className="flex flex-1 flex-col">
                                                <div>
                                                    <div className="flex  w-full min-w-full justify-between text-sm font-medium text-gray-900">
                                                        <p className=" items-end">{page.name}</p>
                                                        <p className=" items-start">{page.icon}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
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
                                            <Link href="/" className="flex-shrink-0">
                                                <Image width={16} height={32} loader={myLoader} src={'/domanda.png'} alt="" />
                                            </Link>
                                        </div>

                                        <div className="hidden h-full md:flex">
                                            {/* Flyout menus */}
                                            <Popover.Group className="inset-x-0 bottom-0 px-4">
                                                <div className="flex h-full items-center justify-between space-x-8">
                                                    <Link href={navigationUrl} key={navigation.pages[1]?.name}className="flex items-center gap-x-2 text-sm  font-medium text-beige-900">
                                                        <p className="items-start">{navigation.pages[1]?.name} </p>
                                                        <p className="items-end">{navigation.pages[1]?.icon}</p>
                                                    </Link>
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
                                        <Link href="#" className="hidden">
                                            <Image width={2} height={36} loader={myLoader} src={'/domanda.png'} alt="" />
                                        </Link>

                                        <div className="flex flex-1 items-center justify-end">
                                            <div className="-mr-12 flex items-center">
                                                {/* Help */}
                                                {session ? (
                                                    <div className="mr-4 mt-[0.4rem] flow-root">
                                                        <Popover className="relative">
                                                            {({ open }) => (
                                                                <>
                                                                    <Popover.Button
                                                                        className={classNames(
                                                                            open ? 'text-beige-900' : 'text-beige-800',
                                                                            'group inline-flex items-center rounded-md text-base font-medium hover:text-beige-900 '
                                                                        )}
                                                                    >
                                                                        <Link href="#" className="group -m-2 flex items-center p-2">
                                                                            <FaRegUser className="h-5 w-5" aria-hidden="true" />
                                                                        </Link>
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
                                                                                <div className="absolute items-center justify-center rounded-lg border bg-beige-50 px-6 py-6 shadow-xl">
                                                                                    <div className="relative my-4 items-center">
                                                                                        <Image src={session.user!.image!} alt="User Img" className="mx-auto h-24 w-24 rounded-full shadow-md" />
                                                                                    </div>
                                                                                    <p className="font-semibold text-beige-900 contrast-150">{session.user!.name}</p>
                                                                                    <p>{session.user!.email}</p>
                                                                                    <button
                                                                                        className="text-medium mt-2 inline-flex w-full justify-center  rounded-lg bg-beige-500 py-2 px-4 font-medium text-beige-50 shadow-lg transition duration-200 ease-in-out hover:bg-beige-600"
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
                                                ) : status === 'loading' ? (
                                                    <RefreshIcon className="mr-4 h-6 w-6 flex-shrink-0 animate-spin text-beige-800 " />
                                                ) : (
                                                    <button
                                                        className="mr-4 rounded-lg bg-beige-500 py-1 px-2 text-beige-50 transition duration-200 ease-in-out hover:bg-beige-600"
                                                        onClick={() => signIn()}
                                                    >
                                                        Accedi
                                                    </button>
                                                )}
                                                {/* Cart */}
                                                <div className="ml-2 mr-12 mt-[0.4rem] flow-root">
                                                    <Popover className="relative">
                                                        {({ open }) => (
                                                            <>
                                                                <Popover.Button
                                                                    className={classNames(
                                                                        open ? 'text-beige-900' : 'text-beige-500',
                                                                        'group inline-flex items-center rounded-md text-base font-medium hover:text-beige-900 '
                                                                    )}
                                                                >
                                                                    <Link href="#" className="group -m-2 flex items-center p-2">
                                                                        <MdOutlineShoppingBag className="h-6 w-6 flex-shrink-0 text-beige-900" aria-hidden="true" />
                                                                        <span className="ml-2 text-sm font-medium text-beige-900">{cartCount}</span>
                                                                    </Link>
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
                                                                    <Popover.Panel className="z-100 absolute -right-1/4 mt-8 w-min transform lg:max-w-3xl">
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
