import Footer from '../../components/layout/Footer'
import Header from '../../components/layout/Header'
import RegistrationFormProviders from '../../components/auth/RegistrationFormProviders'
import Head from 'next/head'
import { getProviders, getSession } from 'next-auth/client'

export default function RegistrationProviders() {
    return (
        <>
            <Head>
                <title>Registrazione</title>
                <link rel="icon" href="/question-solid.svg" />
            </Head>
            <Header />
            <RegistrationFormProviders />
            <Footer />
        </>
    )
}
export const getServerSideProps = async () => {
    const session = await getSession()
    if (session) {
        return {
            redirect: { destination: '/' },
        }
    }
    //const logininfo = parseCookies(ctx).loginInfo
    return {
        props: {
            providers: await getProviders(),
            //loginInfo: logininfo,
        },
    }
}
