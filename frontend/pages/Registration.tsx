import Footer from '../components/Footer'
import Header from '../components/Header'
import RegistrationForm from '../components/RegistrationForm'
import Head from 'next/head'

export default function registration() {
    return (
        <>
            <Head>
                <title>Registration</title>
                <link rel="icon" href="/domanda.ico" />
            </Head>
            <Header />
            <RegistrationForm />
            <Footer />
        </>
    )
}
