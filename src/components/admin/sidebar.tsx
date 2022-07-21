import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment, ReactNode, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
    PhotographIcon,
    UserGroupIcon,
    XIcon,
} from '@heroicons/react/outline'
import Image from 'next/image'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

interface Props {
    children?: ReactNode
}

export default function Sidebar({ children }: Props) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const router = useRouter()

    const navigation = [
        { name: 'Prodotti', href: 'prodotti', path: '/admin/prodotti', icon: PhotographIcon },
        { name: 'Utenti', href: 'utenti', path: '/admin/utenti', icon: UserGroupIcon },
        { name: 'Categorie', href: 'categorie', path: '/admin/categorie', icon: UserGroupIcon },
    ]

    return (
        <div className="flex min-h-screen flex-col">
            <div className="flex flex-1 flex-col md:flex-row">
                {/* Narrow sidebar */}
                <div className="hidden w-28 overflow-y-auto bg-beige-700 md:block">
                    <div className="flex w-full flex-col items-center py-6">
                        <div className="flex flex-shrink-0 items-center">
                            <Image className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white" alt="Workflow" />
                        </div>
                        <div className="mt-6 w-full flex-1 space-y-1 px-2">
                            {navigation.map((item) => (
                                <Link href={item.href} key={item.name}>
                                    <div
                                        key={item.name}
                                        className={classNames(
                                            router.asPath === item.path ? 'bg-beige-600 text-white' : 'text-beige-100 hover:bg-beige-800 hover:text-white',
                                            'group flex w-full flex-col items-center rounded-md p-3 text-xs font-medium'
                                        )}
                                    >
                                        <item.icon className={'h-6 w-6 text-white group-hover:text-white'} aria-hidden="true" />
                                        <span className="mt-2">{item.name}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <Transition.Root show={mobileMenuOpen} as={Fragment}>
                    <Dialog as="div" className="fixed inset-0 z-40 flex md:hidden" onClose={setMobileMenuOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
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
                            <div className="relative flex w-full max-w-xs flex-1 flex-col bg-beige-700 pt-5 pb-4">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute top-1 right-0 -mr-14 p-1">
                                        <button
                                            type="button"
                                            className="flex h-12 w-12 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-white"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                            <span className="sr-only">Close sidebar</span>
                                        </button>
                                    </div>
                                </Transition.Child>
                                <div className="flex flex-shrink-0 items-center px-4">
                                    <Image className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white" alt="Workflow" />
                                </div>
                                <div className="mt-5 h-0 flex-1 overflow-y-auto px-2">
                                    <nav className="flex h-full flex-col">
                                        <div className="space-y-1">
                                            {navigation.map((item) => (
                                                <div
                                                    key={item.name}
                                                    className={classNames(
                                                        router.asPath === item.path ? 'bg-beige-600 text-white' : 'text-beige-100 hover:bg-beige-800 hover:text-white',
                                                        'group flex w-full flex-col items-center rounded-md p-3 text-xs font-medium'
                                                    )}
                                                >
                                                    <item.icon className={'h-6 w-6 text-white group-hover:text-white'} aria-hidden="true" />
                                                    <span className="mt-2">{item.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </Transition.Child>
                        <div className="w-14 flex-shrink-0" aria-hidden="true">
                            {/* Dummy element to force sidebar to shrink to fit close icon */}
                        </div>
                    </Dialog>
                </Transition.Root>
                <main className="flex-1">{children}</main>
            </div>
        </div>
    )
}
