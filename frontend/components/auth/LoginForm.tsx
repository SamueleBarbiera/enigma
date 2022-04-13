/* eslint-disable no-control-regex */
/* eslint-disable no-unused-vars */
import { signIn, useSession } from 'next-auth/client'
//import { setCookie } from 'nookies'
import Router from 'next/router'
import { useState, useContext } from 'react'
//import { XCircleIcon } from '@heroicons/react/solid'
import { useCallback } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useRef } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { FcCheckmark } from 'react-icons/fc'
//import Link from 'next/link'
//const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
const EMAIL_REGEX =
    /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/

export default function LoginForm({ providers }: any) {
    const [session] = useSession()
    /*
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [credentials, setCredentials] = useState({ email: '', password: '' })
    const [loginError, setError] = useState('')

    function handleUpdate(update: any) {
        setCredentials({ ...credentials, ...update })
    }
    const userRef = useRef(null)
    const errRef = useRef(null)
    const [pwd, setPwd] = useState('')
    const [validPwd, setValidPwd] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)
    const [validEmail, setValidEmail] = useState(false)
    const [emailFocus, setEmailFocus] = useState(false)
    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email))
    }, [email])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd))
    }, [pwd])

    useEffect(() => {
        setErrMsg('')
    }, [pwd, email])
    
    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        const v2 = PWD_REGEX.test(pwd)
        const v3 = EMAIL_REGEX.test(email)
        if (!v2) {
            setErrMsg('Dato Invalido')
            return
        }
    }*/

    return (
        <>
            <div className="flex h-screen flex-col justify-center bg-beige-400 px-6 py-4">
                <div className=" sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="rounded-2xl bg-beige-100 py-8 px-[1.9rem] shadow-lg  sm:py-10">
                        {/*{success ? (
                            <section>
                                <h1>Registrazione effettuata con successo!</h1>
                                <p>
                                    <a href="#">Accedi</a>
                                </p>
                            </section>
                        ) : (
                            <section>
                                <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen easy-in-out transition duration-300'} aria-live="assertive">
                                    {errMsg}
                                </p>
                                <form onSubmit={handleSubmit} className="flex flex-col">
                                    <label htmlFor="email" className="mb-2 flex flex-auto justify-between">
                                        Email
                                        <FcCheckmark className={validEmail ? 'valid' : 'hidden'} />
                                        <IoCloseOutline className={validEmail || !email ? 'hidden' : 'invalid'} />
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        placeholder="Inserisci una email valida 🔎"
                                        required
                                        aria-invalid={validEmail ? 'false' : 'true'}
                                        aria-describedby="emailnote"
                                        onFocus={() => setEmailFocus(true)}
                                        onBlur={() => setEmailFocus(false)}
                                    />

                                    <label htmlFor="password" className="mb-2 flex flex-auto justify-between">
                                        Password
                                        <FcCheckmark className={validPwd ? 'valid' : 'hidden'} />
                                        <IoCloseOutline className={validPwd || !pwd ? 'hidden' : 'invalid'} />
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        onChange={(e) => setPwd(e.target.value)}
                                        value={pwd}
                                        placeholder="Da 8 a 24, [a-z, A-Z, 0-9, !@%$] 🔐"
                                        required
                                        aria-invalid={validPwd ? 'false' : 'true'}
                                        aria-describedby="pwdnote"
                                        onFocus={() => setPwdFocus(true)}
                                        onBlur={() => setPwdFocus(false)}
                        />
                                <label htmlFor="username">Email</label>
                                <input name="username" type="email" onChange={(e) => handleUpdate({ email: e.target.value })} />
                                <label htmlFor="password">Password</label>
                                <input name="password" type="password" onChange={(e) => handleUpdate({ password: e.target.value })} />

                                <button
                                    className=" text-medium easy-in-out mt-12 inline-flex w-full  justify-center rounded-lg bg-beige-500 py-2 px-4 font-medium text-beige-50 shadow-lg transition duration-200 hover:bg-beige-600"
                                    onClick={async () => {
                                        const response = await signIn('credentials', {
                                            redirect: false,
                                            ...credentials,
                                        })

                                        if ((!response as any).error) {
                                            setErrMsg((!response as any).error)
                                        } else if ((!response as any).ok) {
                                            Router.push('/')
                                        }
                                    }}
                                >
                                    Accedi
                                </button>
                                </form>*/}
                        <div className="mt-0">
                            <div className="mt-0 grid grid-cols-2 gap-2">
                                {providers &&
                                    Object.values(providers).map((providers) => (
                                        <div key={(providers as any).name}>
                                            {(() => {
                                                if ((providers as any).name == 'Google') {
                                                    return (
                                                        <button
                                                            className="text-medium easy-in-out inline-flex w-full  justify-center rounded-lg bg-beige-500 py-2 px-4 font-medium text-beige-50 shadow-lg transition duration-200 hover:bg-beige-600"
                                                            onClick={() => {
                                                                signIn((providers as any).id)
                                                            }}
                                                        >
                                                            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                                                                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                                                                </svg>
                                                            </svg>
                                                        </button>
                                                    )
                                                } else if ((providers as any).name == 'Facebook') {
                                                    return (
                                                        <button
                                                            className="text-medium easy-in-out inline-flex w-full  justify-center rounded-lg bg-beige-500 py-2 px-4 font-medium text-beige-50 shadow-lg transition duration-200 hover:bg-beige-600"
                                                            onClick={() => {
                                                                signIn((providers as any).id)
                                                            }}
                                                        >
                                                            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                                                                </svg>
                                                            </svg>
                                                        </button>
                                                    )
                                                }
                                            })()}
                                        </div>
                                    ))}
                            </div>
                        </div>
                        {/*</section>
                        )}*/}
                    </div>
                </div>
            </div>
        </>
    )
}
