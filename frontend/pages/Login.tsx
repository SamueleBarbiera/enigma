import Footer from '../components/Footer'
import Header from '../components/Header'
import LoginForm from '../components/LoginForm'
import Head from 'next/head'
import { getProviders, getSession } from 'next-auth/client'
import { setCookie } from 'nookies'
import Router from 'next/router'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Login({ providers }: any, { handlesubmit }: any) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [data, setData] = useState({})
    const loginInfo = {
        identifier: email,
        password: password,
    }
    const clickHandler = (e: any) => {
        e.preventDefault()
        setData((prevCart) => {
            const newCart = [prevCart]
            newCart.push(e.target.value)
            return newCart
        })
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                    'User-Agent': '*',
                },
                body: JSON.stringify(loginInfo),
            })
            const loginResponse = await res.json()
            console.log(loginResponse)
            setData(loginResponse)
            if (res.ok) {
                setCookie(null, 'jwt', loginResponse.jwt, {
                    maxAge: 30 * 24 * 60 * 60,
                    path: '/',
                })
                Router.push('/')
                return { props: { handlesubmit: loginInfo } }
            } else {
                const ErrorMessage = 'I dati inseriti non son validi'

                return {
                    props: {
                        error: ErrorMessage,
                    },
                }
            }
        }
        fetchData()
    }, [])

    return (
        <>
            <Head>
                <title>Login</title>
                <link rel="icon" href="/question-solid.svg" />
            </Head>
            <Header handlesubmit={handlesubmit} />
            <div className="flex h-fit flex-col justify-center bg-beige-400 px-4 py-6">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="rounded-lg bg-beige-100 py-8 px-[1.9rem] shadow-lg  sm:py-10">
                        <form className="" method="POST">
                            <div className="">
                                <label htmlFor="email" className="text-medium block font-medium text-beige-900">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        className="sm:text-medium block w-full appearance-none rounded-lg border-0 px-2  py-2 shadow-lg outline-0  outline-transparent"
                                    />
                                </div>
                            </div>
                            <div className="pb-4 pt-2">
                                <label htmlFor="password" className="text-medium block font-medium text-beige-900">
                                    Password
                                </label>
                                <div className="mt-1 outline-0 outline-transparent">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                        className="sm:text-medium block w-full appearance-none rounded-lg  border-0 px-2  py-2 shadow-lg outline-0  outline-transparent"
                                    />
                                </div>
                            </div>
                            <div className="space-y-6">
                                <button
                                    type="button"
                                    onClick={clickHandler}
                                    className="text-medium transiction easy-in-out inline-flex  w-full justify-center rounded-lg bg-beige-500 py-2 px-4 font-medium text-beige-50 shadow-lg duration-200 hover:bg-beige-600"
                                >
                                    Accedi
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <LoginForm providers={providers} />
            <Footer />
        </>
    )
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
