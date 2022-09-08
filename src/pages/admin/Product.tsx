/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { GetServerSidePropsContext } from 'next'
import { useState } from 'react'
import { MenuAlt2Icon } from '@heroicons/react/outline'
import { SearchIcon } from '@heroicons/react/solid'
import Layout from '../../components/admin/Layout'
import Image from 'next/image'
import { trpc } from 'src/content/utils/trpc'
import { Product } from '@prisma/client'
import Modal from '@/components/admin/Modal'
import { unstable_getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]'

export default function Page() {
    // eslint-disable-next-line no-unused-vars
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const query = trpc.useQuery(['createProduct.view'], { suspense: true })
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const posts: Product[] = query.data!

    return (
        <>
            <Layout>
                <div className="flex h-full">
                    {/* Content area */}
                    <div className="flex flex-1 flex-col overflow-hidden">
                        <header className="w-full">
                            <div className="relative z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white shadow-sm">
                                <button
                                    type="button"
                                    className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-beige-500 md:hidden"
                                    onClick={() => setMobileMenuOpen(true)}
                                >
                                    <span className="sr-only">Open sidebar</span>
                                    <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
                                </button>
                                <div className="flex flex-1 justify-between px-4 sm:px-6">
                                    <div className="flex flex-1">
                                        <form className="flex w-full md:ml-0" action="#" method="GET">
                                            <label htmlFor="desktop-search-field" className="sr-only">
                                                Search all files
                                            </label>
                                            <label htmlFor="mobile-search-field" className="sr-only">
                                                Search all files
                                            </label>
                                            <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                                                    <SearchIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                                                </div>
                                                <input
                                                    name="mobile-search-field"
                                                    id="mobile-search-field"
                                                    className="h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:hidden"
                                                    placeholder="Search"
                                                    type="search"
                                                />
                                                <input
                                                    name="desktop-search-field"
                                                    id="desktop-search-field"
                                                    className="hidden h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:block"
                                                    placeholder="Search all files"
                                                    type="search"
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </header>

                        {/* Main content */}
                        <div className="flex flex-1 items-stretch overflow-hidden">
                            <main className="flex-1 overflow-y-auto">
                                <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
                                    {/* Gallery */}
                                    <section className="mt-8 pb-16" aria-labelledby="gallery-heading">
                                        <ul
                                            role="list"
                                            className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
                                        >
                                            {posts.map((file: Product) => (
                                                <li key={file.id} className="relative">
                                                    <div
                                                        className={
                                                            'group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-beige-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100'
                                                        }
                                                    >
                                                        {file.image.map((imgUrl, index) => {
                                                            return (
                                                                <Image
                                                                    className="grid h-auto w-auto rounded-lg border shadow-md"
                                                                    key={index}
                                                                    src={imgUrl}
                                                                    alt={'not found'}
                                                                    height={32}
                                                                    width={32}
                                                                    layout="responsive"
                                                                />
                                                            )
                                                        })}
                                                    </div>
                                                    <Modal
                                                        name={file.name}
                                                        description={file.description}
                                                        date={file.created_at.toLocaleDateString()}
                                                        design={file.design}
                                                        material={file.material}
                                                        price={file.price}
                                                        quantity={file.quantity}
                                                    />

                                                    <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                                                        {file.name}
                                                    </p>
                                                    <p className="pointer-events-none block text-sm font-medium text-gray-500">
                                                        {file.price}
                                                    </p>
                                                </li>
                                            ))}
                                        </ul>
                                    </section>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
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
