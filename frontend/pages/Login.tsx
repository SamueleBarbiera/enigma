import Footer from '../components/page/Footer'
import Header from '../components/page/Header'
import LoginForm from '../components/auth/LoginForm'
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

export const getServerSideProps = async () => {
    const session = await getSession()
    if (session) {
        return {
            redirect: { destination: '/' },
            permanent: false,
        }
    }

    return {
        props: {
            providers: await getProviders(),
        },
    }
}
