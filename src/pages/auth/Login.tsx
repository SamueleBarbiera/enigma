/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import Footer from '../../components/layout/Footer'
import Header from '../../components/layout/Header'
import LoginForm from '../../components/auth/LoginForm'
import Head from 'next/head'
import { InferGetServerSidePropsType } from 'next'
import axios from 'axios'
import { Providers } from 'src/types/Provider'

export default function Login(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <>
            <Head>
                <title>Login</title>
                <link rel="icon" href="/question-solid.svg" />
            </Head>
            <Header />
            <LoginForm providers={props.data} />
            <Footer />
        </>
    )
}

export const getServerSideProps = async () => {
    const res = await axios(`${process.env.NEXTAUTH_URL!}/api/auth/providers`)
    const data: Providers = await res.data
    console.log('🚀 ~ file: Login.tsx ~ line 26 ~ getServerSideProps ~ session', data)

    // if (!data) {
    //     return {
    //         redirect: { destination: '/auth/Login' },
    //         permanent: false,
    //     }
    // }

    return {
        props: {
            data,
        },
    }
}
