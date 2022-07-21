import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import { CheckIcon } from '@heroicons/react/solid'
import { getSession } from 'next-auth/react'
import Head from 'next/head'
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'

function CancelPagamento(products: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <>
            <Head>
                <title>Pagamento Annullato</title>
                <link rel="icon" href="/question-solid.svg" />
                <meta charSet="utf-8" className="next-head" />
            </Head>
            <Header />
            <main className="h-screen">
                <div className="mx-auto w-fit rounded-lg bg-green-200 py-4 px-4 shadow-xl">
                    <h2 className="flex flex-col items-center space-x-1 text-4xl font-semibold">
                        <CheckIcon className="m-2 h-12 w-12 flex-shrink-0 rounded-full bg-green-100 py-2 text-green-600 " />
                        <span>Ordine annulato!</span>
                    </h2>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default CancelPagamento

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const session = await getSession(ctx)

    if (!session!.user && session!.user.email === '') {
        return {
            redirect: { destination: '/AccessDenied' },
        }
    }

    return {
        props: { products: session },
    }
}
