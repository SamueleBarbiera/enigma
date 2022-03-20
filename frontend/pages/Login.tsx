import Footer from '../components/Footer'
import Header from '../components/Header'
import LoginForm from '../components/LoginForm'
import Head from 'next/head'
import { getProviders, getSession } from 'next-auth/client'
import { useContext } from 'react'
import UserContext from '../context/UserContext'
import { parseCookies } from 'nookies'
import { GetServerSideProps } from 'next'

export default function Login({ providers }: any, { loginInfo }: any) {
    const loginInfoData = useContext(UserContext)
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

export const getServerSideProps = async ({ ctx }: any) => {
    const session = await getSession()
    if (session) {
        return {
            redirect: { destination: '/' },
        }
    }
    const logininfo = parseCookies(ctx).loginInfo
    return {
        props: {
            providers: await getProviders(),
            loginInfo: logininfo,
        },
    }
}
