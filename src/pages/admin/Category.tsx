import Layout from '@/components/admin/Layout'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { CheckCircleIcon, ChevronRightIcon, MailIcon, SearchIcon } from '@heroicons/react/solid'
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon, BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Link from 'next/link'
import { GetServerSidePropsContext } from 'next'
import { authOptions } from '../api/auth/[...nextauth]'
import { unstable_getServerSession } from 'next-auth'

const user: {
    name: string
    email: string
    imageUrl: string
} = {
    name: 'Whitney Francis',
    email: 'whitneyfrancis@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const navigation: {
    name: string
    href: string
    current: boolean
}[] = [
    { name: 'Dashboard', href: '/', current: true },
    { name: 'Jobs', href: '/', current: false },
    { name: 'Applicants', href: '/', current: false },
    { name: 'Company', href: '/', current: false },
]

const userNavigation: {
    name: string
    href: string
}[] = [
    { name: 'Your Profile', href: '/' },
    { name: 'Settings', href: '/' },
    { name: 'Sign out', href: '/' },
]

const candidates: {
    name: string
    email: string
    imageUrl: string
    applied: string
    appliedDatetime: string
    status: string
}[] = [
    {
        name: 'Emily Selman',
        email: 'emilyselman@example.com',
        imageUrl:
            'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        applied: 'January 7, 2020',
        appliedDatetime: '2020-07-01T15:34:56',
        status: 'Completed phone screening',
    },
    // More candidates...
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Contact() {
    return (
        <Layout>
            <div className="min-h-full">
                {/* Navbar */}
                <Disclosure as="nav" className="bg-gray-50">
                    {({ open }) => (
                        <>
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="relative flex h-16 items-center justify-between border-b border-gray-200">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <Image
                                                height={32}
                                                width={32}
                                                className="h-8 w-auto"
                                                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=violet&shade=500"
                                                alt="Workflow"
                                            />
                                        </div>

                                        {/* Links section */}
                                        <div className="hidden lg:ml-10 lg:block">
                                            <div className="flex space-x-4">
                                                {navigation.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        href={item.href}
                                                        className={classNames(
                                                            item.current ? 'bg-gray-100' : 'hover:text-gray-700',
                                                            'rounded-md px-3 py-2 text-sm font-medium text-gray-900'
                                                        )}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
                                        {/* Search section */}
                                        <div className="w-full max-w-lg lg:max-w-xs">
                                            <label htmlFor="search" className="sr-only">
                                                Search
                                            </label>
                                            <div className="relative text-gray-400 focus-within:text-gray-500">
                                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                    <SearchIcon className="h-5 w-5" aria-hidden="true" />
                                                </div>
                                                <input
                                                    id="search"
                                                    className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-gray-500 focus:border-beige-500 focus:placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-beige-500 sm:text-sm"
                                                    placeholder="Search"
                                                    type="search"
                                                    name="search"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex lg:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-beige-500 focus:ring-offset-2 focus:ring-offset-gray-50">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>

                                    {/* Actions section */}
                                    <div className="hidden lg:ml-4 lg:block">
                                        <div className="flex items-center">
                                            <button
                                                type="button"
                                                className="flex-shrink-0 rounded-full bg-gray-50 p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-beige-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                                            >
                                                <span className="sr-only">View notifications</span>
                                                <BellIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>

                                            {/* Profile dropdown */}
                                            <Menu as="div" className="relative ml-3 flex-shrink-0">
                                                <div>
                                                    <Menu.Button className="flex rounded-full bg-gray-50 text-sm text-white focus:outline-none focus:ring-2 focus:ring-beige-500 focus:ring-offset-2 focus:ring-offset-gray-50">
                                                        <span className="sr-only">Open user menu</span>
                                                        <Image
                                                            height={32}
                                                            width={32}
                                                            className="h-8 w-8 rounded-full"
                                                            src={user.imageUrl}
                                                            alt=""
                                                        />
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
                                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        {userNavigation.map((item) => (
                                                            <Menu.Item key={item.name}>
                                                                {/*eslint-disable-next-line @typescript-eslint/no-explicit-any*/}
                                                                {({ active }: any) => (
                                                                    <Link
                                                                        href={item.href}
                                                                        className={classNames(
                                                                            active ? 'bg-gray-100' : '',
                                                                            'block py-2 px-4 text-sm text-gray-700'
                                                                        )}
                                                                    >
                                                                        {item.name}
                                                                    </Link>
                                                                )}
                                                            </Menu.Item>
                                                        ))}
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="border-b border-gray-200 bg-gray-50 lg:hidden">
                                <div className="space-y-1 px-2 pt-2 pb-3">
                                    {navigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-gray-100' : 'hover:bg-gray-100',
                                                'block rounded-md px-3 py-2 font-medium text-gray-900'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                </div>
                                <div className="border-t border-gray-200 pt-4 pb-3">
                                    <div className="flex items-center px-5">
                                        <div className="flex-shrink-0">
                                            <Image
                                                height={32}
                                                width={32}
                                                className="h-10 w-10 rounded-full"
                                                src={user.imageUrl}
                                                alt=""
                                            />
                                        </div>
                                        <div className="ml-3">
                                            <div className="text-base font-medium text-gray-800">{user.name}</div>
                                            <div className="text-sm font-medium text-gray-500">{user.email}</div>
                                        </div>
                                        <button
                                            type="button"
                                            className="ml-auto flex-shrink-0 rounded-full bg-gray-50 p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-beige-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                                        >
                                            <span className="sr-only">View notifications</span>
                                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                    <div className="mt-3 space-y-1 px-2">
                                        {userNavigation.map((item) => (
                                            <Disclosure.Button
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                                            >
                                                {item.name}
                                            </Disclosure.Button>
                                        ))}
                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

                {/* Page heading */}
                <header className="bg-gray-50 py-8">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between">
                        <div className="min-w-0 flex-1">
                            <h1 className="mt-2 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl">
                                Lista utenti
                            </h1>
                        </div>
                    </div>
                </header>

                <main className="pt-8 pb-16">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        {/* Stacked list */}
                        <ul
                            role="list"
                            className="mt-5 divide-y divide-gray-200 border-t border-gray-200 sm:mt-0 sm:border-t-0"
                        >
                            {candidates.map((candidate) => (
                                <li key={candidate.email}>
                                    <Link href="#" className="group block">
                                        <div className="flex items-center py-5 px-4 sm:py-6 sm:px-0">
                                            <div className="flex min-w-0 flex-1 items-center">
                                                <div className="flex-shrink-0">
                                                    <Image
                                                        height={32}
                                                        width={32}
                                                        className="h-12 w-12 rounded-full group-hover:opacity-75"
                                                        src={candidate.imageUrl}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                                                    <div>
                                                        <p className="truncate text-sm font-medium text-beige-600">
                                                            {candidate.name}
                                                        </p>
                                                        <p className="mt-2 flex items-center text-sm text-gray-500">
                                                            <MailIcon
                                                                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                                                                aria-hidden="true"
                                                            />
                                                            <span className="truncate">{candidate.email}</span>
                                                        </p>
                                                    </div>
                                                    <div className="hidden md:block">
                                                        <div>
                                                            <p className="text-sm text-gray-900">
                                                                Applied on{' '}
                                                                <time dateTime={candidate.appliedDatetime}>
                                                                    {candidate.applied}
                                                                </time>
                                                            </p>
                                                            <p className="mt-2 flex items-center text-sm text-gray-500">
                                                                <CheckCircleIcon
                                                                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                                                                    aria-hidden="true"
                                                                />
                                                                {candidate.status}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <ChevronRightIcon
                                                    className="h-5 w-5 text-gray-400 group-hover:text-gray-700"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Pagination */}
                        <nav
                            className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0"
                            aria-label="Pagination"
                        >
                            <div className="-mt-px flex w-0 flex-1">
                                <Link
                                    href="#"
                                    className="inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-500 hover:border-gray-200 hover:text-gray-700"
                                >
                                    <div>
                                        <ArrowNarrowLeftIcon
                                            className="mr-3 h-5 w-5 text-gray-400"
                                            aria-hidden="true"
                                        />{' '}
                                        Previous
                                    </div>
                                </Link>
                            </div>
                            <div className="hidden md:-mt-px md:flex">
                                <Link
                                    href="#"
                                    className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-200 hover:text-gray-700"
                                >
                                    1
                                </Link>
                                {/* Current: "border-beige-500 text-beige-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200" */}
                                <Link
                                    href="#"
                                    className="inline-flex items-center border-t-2 border-beige-500 px-4 pt-4 text-sm font-medium text-beige-600"
                                    aria-current="page"
                                >
                                    2
                                </Link>
                                <Link
                                    href="#"
                                    className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-200 hover:text-gray-700"
                                >
                                    3
                                </Link>
                                <Link
                                    href="#"
                                    className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-200 hover:text-gray-700"
                                >
                                    4
                                </Link>
                                <Link
                                    href="#"
                                    className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-200 hover:text-gray-700"
                                >
                                    5
                                </Link>
                                <Link
                                    href="#"
                                    className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-200 hover:text-gray-700"
                                >
                                    6
                                </Link>
                            </div>
                            <div className="-mt-px flex w-0 flex-1 justify-end">
                                <Link
                                    href="#"
                                    className="inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium text-gray-500 hover:border-gray-200 hover:text-gray-700"
                                >
                                    <div>
                                        Next
                                        <ArrowNarrowRightIcon
                                            className="ml-3 h-5 w-5 text-gray-400"
                                            aria-hidden="true"
                                        />
                                    </div>
                                </Link>
                            </div>
                        </nav>
                    </div>
                </main>
            </div>
        </Layout>
    )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const session = await unstable_getServerSession(ctx.req, ctx.res, authOptions)
    console.log('🚀 ~ file: prodotti.tsx ~ line 259 ~ getServerSideProps ~ session', session)

    if (!session || session.user.role != 'ADMIN') {
        return { redirect: { permanent: false, destination: '/' } }
    }

    return {
        props: { session: session },
    }
}
