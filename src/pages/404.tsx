
import Head from 'next/head'

export default function FourOhFour() {
    return (
        <>
            <Head>
                <title>⛔️ 404 ⛔️</title>
                <link rel="icon" href="/question-solid.svg" />
                <meta charSet="utf-8" className="next-head" />
            </Head>
            <main className="bg-beige-100 h-screen w-screen ">
                <div className="z-100 relative flex h-full w-full flex-col ">
                    <div className="z-20 flex  flex-grow flex-col">
                        <div className="flex justify-center items-center flex-grow flex-col  p-4">
                            <div className="mx-auto flex  max-w-7xl flex-grow flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
                                <div className="my-8 flex-shrink-0 flex-col justify-center">
                                    <p className="text-7xl font-semibold uppercase tracking-wide text-beige-600">404 error</p>
                                    <h1 className="mt-2 text-5xl font-bold tracking-tight text-gray-900 xmd:text-5xl">Questa pagina non esiste</h1>
                                    <div className="mt-8">
                                        <a href="#" className="rounded-lg bg-beige-200 p-2 text-2xl font-medium text-beige-600 shadow-xl hover:text-beige-500">
                                            Torna alla home<span aria-hidden="true"> &rarr;</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
