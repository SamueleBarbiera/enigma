import Footer from '../components/Footer'
import Header from '../components/Header'
import RegistrationForm from '../components/LoginForm'
import Head from 'next/head'
import { getProviders } from 'next-auth/client'

export default function Registration({ providers }: any) {
    return (
        <>
            <Head>
                <title>Login</title>
                <link rel="icon" href="/question-solid.svg" />
            </Head>
            <Header />
            <RegistrationForm providers={providers} />
            <Footer />
        </>
    )
}

export async function getServerSidePropss() {
    return {
        props: {
            providers: await getProviders(),
        },
    }
}
