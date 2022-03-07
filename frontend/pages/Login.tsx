import Footer from '../components/Footer'
import Header from '../components/Header'
import LoginForm from '../components/LoginForm'
import Head from 'next/head'
import { useSession, signIn, signOut } from 'next-auth/client'

export default function Login() {
    const [session, loading] = useSession()
    if (loading) return <>Loading</>

    if (session) {
        return (
            <div>
                <p>Username: {session.user.name}</p>
                <p>Email: {session.user.email}</p>
                <button onClick={() => signOut({ redirect: false })}>Sign Out</button>
            </div>
        )
    }
    return (
        <>
            <Head>
                <title>Login</title>
                <link rel="icon" href="/domanda.ico" />
            </Head>
            <Header />
            <LoginForm />
            <Footer />
        </>
    )
}
