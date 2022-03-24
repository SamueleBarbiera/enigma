import Footer from '../components/Footer'
import Header from '../components/Header'
import LoginForm from '../components/LoginForm'
import Head from 'next/head'
import { getProviders, getSession } from 'next-auth/client'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

export default function Login({ providers }: any) {
    const loginInfoData = useContext(UserContext)
    console.log('🚀 - file: Login.tsx - line 11 - Login - loginInfoData', loginInfoData)
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
