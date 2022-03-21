import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function FourOhFour() {
    return (
        <>
            <Head>
                <title>⛔️ 404 ⛔️</title>
                <link rel="icon" href="/question-solid.svg" />
                <meta charSet="utf-8" className="next-head" />
            </Head>
            <Header />
            <main className="h-screen w-screen">
                <div className="relative flex min-h-full flex-col">
                    <div className="z-10 flex flex-grow flex-col">
                        <main className="m-12 flex flex-grow flex-col justify-between rounded-2xl bg-beige-100 p-4 shadow-2xl xmd:p-16">
                            <div className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-between px-4 sm:px-6 lg:px-8">
                                <div className="my-8 flex-shrink-0 flex-col justify-center">
                                    <p className="text-5xl font-semibold uppercase tracking-wide text-beige-600">404 error</p>
                                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 xmd:text-5xl">Questa pagina non esiste</h1>
                                    <p className="mt-2 text-xl text-gray-500 xmd:text-2xl">La pagina che hai provsto a cercare non esiste...</p>
                                    <div className="mt-6">
                                        <a href="#" className="text-base font-medium text-beige-600 hover:text-beige-500">
                                            Torna alla home<span aria-hidden="true"> &rarr;</span>
                                        </a>
                                    </div>
                                </div>

                                <div className="flex-shrink flex-col pt-4">
                                    <a href="/" className="inline-flex">
                                        <img className="h-40 w-auto" src="./question-solid.svg" alt="" />
                                        <div>&nbsp;&nbsp;&nbsp;</div>
                                    </a>
                                </div>
                            </div>
                        </main>
                    </div>
                    <div className="z-0 min-h-full bg-cover bg-top">
                        <img
                            className="absolute inset-0 h-full w-full"
                            src="https://images.unsplash.com/photo-1470847355775-e0e3c35a9a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80"
                            alt=""
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
