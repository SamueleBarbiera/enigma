import Footer from '../components/Footer'
import Header from '../components/Header'
import LoginForm from '../components/LoginForm'
import Head from 'next/head'
import { useSession, signOut } from 'next-auth/client'

export default function Login() {
    
    return (
        <>
            <Head>
                <title>Login</title>
                <link rel="icon" href="/question-solid.svg" />
            </Head>
            <Header />
            <LoginForm />
            <Footer />
        </>
    )
}
