import Footer from '../components/Footer'
import Header from '../components/Header'
import RegistrationForm from '../components/RegistrationForm'
import nookies from 'nookies'
import Head from 'next/head'
import { getProviders, getSession } from 'next-auth/client'

export default function RegistrationLocal({ providers }: any) {
    return (
        <>
            <Head>
                <title>Registration</title>
                <link rel="icon" href="/question-solid.svg" />
            </Head>
            <Header />
            <RegistrationForm providers={providers} />
            <Footer />
        </>
    )
}
export const getServerSideProps = async (ctx: any) => {
    const session = await getSession()
    if (session) {
        return {
            redirect: { destination: '/' },
        }
    }
    /*
    nookies.set(ctx, 'fromGetInitialProps', '', {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
    })
    */
    return {
        props: {
            providers: await getProviders(),
            //loginInfo: logininfo,
        },
    }
}
