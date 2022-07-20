import Footer from '../../components/layout/Footer'
import Header from '../../components/layout/Header'
import LoginForm from '../../components/auth/LoginForm'
import Head from 'next/head'
import { getProviders, getSession } from 'next-auth/react'
import { InferGetServerSidePropsType,GetServerSideProps } from 'next'

export default function Login({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) {
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

export const getServerSideProps: GetServerSideProps = async () => {
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
