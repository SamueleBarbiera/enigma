import { Fragment, ReactNode, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import SigninPopupModal from './SigninPopupModal'
import { Menu, Transition } from '@headlessui/react'
import { HeartIcon, HomeIcon, LogoutIcon, PlusIcon, UserIcon } from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

const menuItems = [
  {
    label: 'List a new home',
    icon: PlusIcon,
    href: '/addProducts',
  },
  {
    label: 'My homes',
    icon: HomeIcon,
    href: '/products',
  },
  {
    label: 'Favorites',
    icon: HeartIcon,
    href: '/favorites',
  },
  {
    label: 'Logout',
    icon: LogoutIcon,
    onClick: () => null,
  },
]

interface Props {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const user = null
  const isLoadingUser = false
  const openModal = () => setShowModal(true)
  const closeModal: unknown = () => setShowModal(false)

  return (
    <>
      <Head>
        <title>SupaaShop | A new way to shop!</title>
        <meta name="title" content="SupaaShopp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-[linear-gradient(90deg, #161122 21px, transparent 1%) center, linear-gradient(#161122 21px, transparent 1%) center, #a799cc] flex min-h-screen flex-col font-['Poppins']">
        <header className="h-28 w-full shadow-lg">
          <div className="container mx-auto h-full">
            <div className="flex h-full items-center justify-between space-x-5 px-5">
              <Link href="/">
                <div className="flex items-center space-x-1">
                  <span className="text-2xl font-semibold tracking-wide text-white">
                    <span className="text-3xl text-success">S</span>upabase
                    <span className="text-3xl text-success">E</span>commerce
                  </span>
                </div>
              </Link>
              <div className="flex items-center space-x-4">
                <Link href="/addProducts">
                  <div className="focus:ring-primaryfocus:ring-opacity-50 ml-4 rounded-md bg-info px-4 py-5 font-semibold text-primary transition hover:bg-primary hover:text-info  focus:outline-none focus:ring-4">
                    Add product !
                  </div>
                </Link>
                {isLoadingUser ? (
                  <div className="h-8 w-[75px] animate-pulse rounded-md bg-gray-200" />
                ) : user ? (
                  <Menu as="div" className="relative z-50">
                    <Menu.Button className="group flex items-center space-x-px">
                      <div className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-200">
                        {user.image ? (
                          <Image
                            src={user.image}
                            alt={user.name}
                            layout="fill"
                          />
                        ) : (
                          <UserIcon className="h-6 w-6 text-gray-400" />
                        )}
                      </div>
                      <ChevronDownIcon className="h-5 w-5 shrink-0 text-gray-500 group-hover:text-current" />
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 mt-1 w-72 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="mb-2 flex items-center space-x-2 py-4 px-4">
                          <div className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-200">
                            {user.image ? (
                              <Image
                                src={user.image}
                                alt={user.name}
                                layout="fill"
                              />
                            ) : (
                              <UserIcon className="h-6 w-6 text-gray-400" />
                            )}
                          </div>
                          <div className="flex flex-col truncate">
                            <span>{user.name}</span>
                            <span className="text-sm text-gray-500">{user.email}</span>
                          </div>
                        </div>
                        <div className="py-2">
                          {menuItems.map(({ label, href, onClick, icon: Icon }) => (
                            <div
                              key={label}
                              className="px-2 last:mt-2 last:border-t last:pt-2"
                            >
                              <Menu.Item>
                                {href ? (
                                  <Link href={href}>
                                    <div className="flex items-center space-x-2 rounded-md py-2 px-4 hover:bg-gray-100">
                                      <Icon className="h-5 w-5 shrink-0 text-gray-500" />
                                      <span>{label}</span>
                                    </div>
                                  </Link>
                                ) : (
                                  <button
                                    className="flex w-full items-center space-x-2 rounded-md py-2 px-4 hover:bg-gray-100"
                                    onClick={onClick}
                                  >
                                    <Icon className="h-5 w-5 shrink-0 text-gray-500" />
                                    <span>{label}</span>
                                  </button>
                                )}
                              </Menu.Item>
                            </div>
                          ))}
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ) : (
                  <button
                    type="button"
                    onClick={openModal}
                    className="ml-4 rounded-md bg-info px-4 py-5 font-extrabold text-primary transition hover:bg-primary hover:text-info focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-50"
                  >
                    Login
                  </button>
                )}
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto flex-grow">
          <div className="px-4 py-12">{typeof children === 'function' ? children(openModal) : children}</div>
        </main>
        <SigninPopupModal show={showModal} onClose={closeModal} />
      </div>
    </>
  )
}

export default Layout
