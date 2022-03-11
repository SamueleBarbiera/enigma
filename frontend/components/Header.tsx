import Image from 'next/image'
import { Fragment, useState } from 'react'
import { Dialog, Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { FaRegUser } from 'react-icons/fa'
import { MdOutlineShoppingBag } from 'react-icons/md'
import { myLoader } from '../pages/_app'
import { ChartBarIcon, CursorClickIcon, PhoneIcon, PlayIcon, RefreshIcon, ShieldCheckIcon, ViewGridIcon } from '@heroicons/react/outline'
import { signIn, signOut, useSession } from 'next-auth/client'
import { useEffect } from 'react'

const solutions = [
    {
        name: 'Analytics',
        description: 'Get a better understanding of where your traffic is coming from.',
        href: '#',
        icon: ChartBarIcon,
    },
    {
        name: 'Engagement',
        description: 'Speak directly to your customers in a more meaningful way.',
        href: '#',
        icon: CursorClickIcon,
    },
    { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
    {
        name: 'Integrations',
        description: "Connect with third-party tools that you're already using.",
        href: '#',
        icon: ViewGridIcon,
    },
    {
        name: 'Automations',
        description: 'Build strategic funnels that will drive your customers to convert',
        href: '#',
        icon: RefreshIcon,
    },
]
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
    const [session, loading] = useSession()
    const [content, setContent] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/secret')
            const json = await res.json()

            if (json.content) {
                setContent(json.content)
            }
        }
        fetchData()
    }, [session])
    {
        /*
    if (loading) {
        const button = (
            loading
        ? <div className="h-screen">Loading</div>
        : null
        )
    }
*/
    }

    return (
        <>
            {/* Mobile menu */}
            <Transition.Root show={mobileMenuOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 z-40 flex lg:hidden" onClose={setMobileMenuOpen}>
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
                        <div className="relative flex w-2/3 flex-col overflow-y-auto bg-beige-50 pb-12 shadow-xl md:hidden">
                            <div className="flex px-4 pt-5 pb-2">
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
                                            <div className="flex items-center lg:ml-8">
                                                {/* Help */}
                                                <a href="#" className="p-2 text-beige-900 ">
                                                    {session ? (
                                                        <div className="ml-4 mt-[0.4rem] flow-root">
                                                            <Popover className="relative">
                                                                {({ open }) => (
                                                                    <>
                                                                        <Popover.Button
                                                                            className={classNames(
                                                                                open ? 'text-beige-900' : 'text-beige-500',
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
                                                                            <Popover.Panel className="z-100 absolute mt-8 w-min max-w-xs -translate-x-72 transform px-2 sm:px-0">
                                                                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                                                    <div className="relative flex-auto gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                                                    <p>Username: {session!.user!.name}</p>
                                                                                        <p>Email: {session!.user!.email}</p>
                                                                                        <Image
                                                                                            layout="fixed"
                                                                                            loader={myLoader}
                                                                                            alt="logo"
                                                                                            width={50}
                                                                                            height={50}
                                                                                            className="rounded-full shadow-2xl"
                                                                                            src={JSON.stringify(session!.user!.image)}
                                                                                        />
                                                                                        <button onClick={() => signOut({ redirect: false })}>Sign Out</button>
                                                                                    </div>
                                                                                </div>
                                                                            </Popover.Panel>
                                                                        </Transition>
                                                                    </>
                                                                )}
                                                            </Popover>
                                                        </div>
                                                    ) : (
                                                        <button onClick={() => signIn()}>Sign In</button>
                                                    )}
                                                </a>

                                                {/* Cart */}
                                                <div className="ml-4 mt-[0.4rem] flow-root">
                                                    <Popover className="relative">
                                                        {({ open }) => (
                                                            <>
                                                                <Popover.Button
                                                                    className={classNames(
                                                                        open ? 'text-beige-900' : 'text-beige-500',
                                                                        'group inline-flex items-center rounded-md text-base font-medium hover:text-beige-900 '
                                                                    )}
                                                                >
                                                                    <a href="#" className="group -m-2 flex items-center p-2">
                                                                        <MdOutlineShoppingBag className="h-6 w-6 flex-shrink-0 text-beige-900" aria-hidden="true" />
                                                                        <span className="ml-2 text-sm font-medium text-beige-900">0</span>
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
                                                                    <Popover.Panel className="z-100 absolute mt-8 w-min max-w-xs -translate-x-72 transform px-2 sm:px-0">
                                                                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                                            <div className="relative flex-auto gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                                                {solutions.map((item) => (
                                                                                    <a
                                                                                        key={item.name}
                                                                                        href={item.href}
                                                                                        className="-m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-beige-50"
                                                                                    >
                                                                                        <item.icon className="h-6 w-6 flex-shrink-0 text-beige-600" aria-hidden="true" />
                                                                                        <div className="ml-4">
                                                                                            <p className="text-base font-medium text-beige-900">{item.name}</p>
                                                                                            <p className="mt-1 text-sm text-beige-500">{item.description}</p>
                                                                                        </div>
                                                                                    </a>
                                                                                ))}
                                                                            </div>
                                                                            <div className="flex space-y-0 bg-beige-100 px-20 py-5">
                                                                                {callsToAction.map((item) => (
                                                                                    <div key={item.name} className="flex w-max flex-auto">
                                                                                        <a className="flex w-full text-base font-medium text-beige-900 ">
                                                                                            <div className="flex w-full flex-row justify-between">
                                                                                                <span className="flex flex-col items-start">Costo Totale</span>
                                                                                                <span className="flex flex-col-reverse items-end">{item.costo_totale} €</span>
                                                                                            </div>
                                                                                        </a>
                                                                                        <span className="flec-auto flex w-max rounded-md p-3 transition duration-200 ease-in-out hover:bg-beige-200">
                                                                                            {item.name}
                                                                                        </span>
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                        </div>
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
