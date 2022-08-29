import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import { CheckIcon } from '@heroicons/react/solid'
import Head from 'next/head'
import { GetServerSidePropsContext } from 'next'
import { unstable_getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]'

function CancelPagamento() {
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

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const session = await unstable_getServerSession(ctx.req, ctx.res, authOptions)

    if (!session) {
        return {
            redirect: { destination: '/AccessDenied' },
        }
    }

    return {
        props: { products: session },
    }
}
