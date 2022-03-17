import Footer from '../components/Footer'
import Header from '../components/Header'
import LoginForm from '../components/LoginForm'
import Head from 'next/head'
import { getProviders, getSession } from 'next-auth/client'
import { setCookie } from 'nookies'
import Router from 'next/router'

export default function Login({ providers }: any, { handlesubmit }: any) {
    return (
        <>
            <Head>
                <title>Login</title>
                <link rel="icon" href="/question-solid.svg" />
            </Head>
            <Header handlesubmit={handlesubmit} />
            <LoginForm providers={providers} />
            <Footer />
        </>
    )
}

export const HandleSubmitData = async (email: string, password: string) => {
    const loginInfo = {
        identifier: email,
        password: password,
    }

    const login = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`, {
        method: 'POST',
        headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'User-Agent': '*',
        },
        body: JSON.stringify(loginInfo),
    })

    const loginResponse = await login.json()
    console.log(loginResponse)

    if (loginResponse) {
        setCookie(null, 'jwt', loginResponse.jwt, {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
        })
        Router.push('/')
        return {
            props: {
                handlesubmit: await loginInfo,
            },
        }
    }
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
        },
    }
}
