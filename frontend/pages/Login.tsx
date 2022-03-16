import Footer from '../components/Footer'
import Header from '../components/Header'
import LoginForm from '../components/LoginForm'
import Head from 'next/head'
import { getProviders, getSession } from 'next-auth/client'

export default function Login({ providers }: any) {

    return (
        <>
            <Head>
                <title>Login</title>
                <link rel="icon" href="/question-solid.svg" />
            </Head>
            <Header />
            <LoginForm providers={providers} />
            <Footer />
        </>
    )
}
export async function getServerSidePropss() {
    const session = await getSession()

    if (session) {
        return {
            redirect: { destination: '/' },
        }
    }

    return {
        props: {
            providers: await getProviders(),
        },
    }
}
