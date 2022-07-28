/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import SigninPopupModal from './SigninPopupModal'

interface LayotProps {
    children: React.ReactNode // 👈️ type children
}

const Layout = ({ children }: LayotProps) => {
    const [showModal, setShowModal] = useState(false)
    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

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
                                        <span className="text-3xl text-success">Home</span>
                                    </span>
                                </div>
                            </Link>
                            <div className="flex items-center space-x-4">
                                <Link href="/addProducts">
                                    <div className="focus:ring-primaryfocus:ring-opacity-50 ml-4 rounded-md bg-info px-4 py-5 font-semibold text-primary transition hover:bg-primary hover:text-info  focus:outline-none focus:ring-4">
                                        Add product !
                                    </div>
                                </Link>

                                <button
                                    type="button"
                                    onClick={openModal}
                                    className="ml-4 rounded-md bg-info px-4 py-5 font-extrabold text-primary transition hover:bg-primary hover:text-info focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-50"
                                >
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                {/* <main className="container mx-auto flex-grow">
                    <div className="px-4 py-12">{openModal()}</div>
                </main> */}
                <main className="container mx-auto flex-grow">
                    <div className="px-4 py-12">{children}</div>
                </main>
                <SigninPopupModal show={showModal} onClose={closeModal} />
            </div>
        </>
    )
}

export default Layout
