/* eslint-disable @typescript-eslint/no-unsafe-argument */
import Footer from '../../components/layout/Footer'
import Header from '../../components/layout/Header'
import LoginForm from '../../components/auth/LoginForm'
import Head from 'next/head'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { unstable_getServerSession } from 'next-auth/next'
import authOptions from '../api/auth/[...nextauth]'

export default function Login(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <>
            <Head>
                <title>Login</title>
                <link rel="icon" href="/question-solid.svg" />
            </Head>
            <Header />
            <LoginForm providers={props} />
            <Footer />
        </>
    )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const session = await unstable_getServerSession(ctx.req, ctx.res, authOptions)

    if (session) {
        return {
            redirect: { destination: '/' },
        }
    }

    return {
        props: {
            providers: session,
        },
    }
}
