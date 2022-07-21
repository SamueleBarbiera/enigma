/* eslint-disable @typescript-eslint/no-unsafe-argument */
import Footer from '../../components/layout/Footer'
import Header from '../../components/layout/Header'
import LoginForm from '../../components/auth/LoginForm'
import Head from 'next/head'
import { InferGetServerSidePropsType, GetServerSideProps, GetServerSidePropsContext } from 'next'
import { unstable_getServerSession } from 'next-auth/next'
import authOptions from '../api/auth/[...nextauth]'

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

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const session = await unstable_getServerSession(ctx.req, ctx.res, authOptions)

    if (session) {
        return {
            redirect: { destination: '/' },
            permanent: false,
        }
    }

    return {
        props: {
            providers: session,
        },
    }
}
