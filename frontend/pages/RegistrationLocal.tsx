import Footer from '../components/Footer'
import Header from '../components/Header'
import RegistrationForm from '../components/RegistrationForm'
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
export const getServerSideProps = async ({ ctx }: any) => {
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
