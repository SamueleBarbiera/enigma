import Footer from '../components/Footer'
import Header from '../components/Header'
import LoginForm from '../components/LoginForm'
import Head from 'next/head'
import { getCsrfToken, getProviders, getSession } from 'next-auth/client'

export default function Login({ providers }: any,{csrfToken}:any) {
    return (
        <>
            <Head>
                <title>Login</title>
                <link rel="icon" href="/question-solid.svg" />
            </Head>
            <Header />
            <LoginForm providers={providers} csrfToken={csrfToken} />
            <Footer />
        </>
    )
}

export async function getServerSideProps() {
    const session = await getSession()

    if (session) {
        return {
            redirect: { destination: '/' },
        }
    }

    return {
        props: {
            providers: await getProviders(),
            csrfToken: await getCsrfToken(),
        },
    }
}
