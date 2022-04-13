/* eslint-disable no-unused-vars */
import axios from 'axios'
//import { signIn } from 'next-auth/client'
import { useRef, useState, useEffect } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { FcCheckmark } from 'react-icons/fc'
//import { XCircleIcon } from '@heroicons/react/solid'
import Link from 'next/link'
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/
export default function RegistrationFormProviders() {
    const userRef = useRef(null)
    const errRef = useRef(null)
    const [user, setUser] = useState('')
    const [validName, setValidName] = useState(false)
    const [userFocus, setUserFocus] = useState(false)
    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        ;(userRef.current as any).focus()
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user))
    }, [user])

    useEffect(() => {
        setErrMsg('')
    }, [user])

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        const v1 = USER_REGEX.test(user)
        if (!v1) {
            setErrMsg('Dato Invalido')
            return
        }
        try {
            const response = await axios.post('http://localhost:1337/auth/local/register', JSON.stringify({ Nome: user }), {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true,
            })
            console.log(response?.data)
            console.log(response?.data.jwt)
            console.log(JSON.stringify(response))
            setSuccess(true)
            setUser('')
        } catch (err) {
            if ((!err as any)?.response) {
                setErrMsg('Server non raggiungibile')
            } else if ((err as any).response?.status === 400) {
                setErrMsg('Email già esistente')
            } else {
                setErrMsg('Registrazione fallita')
            }
            ;(errRef.current as any).focus()
        }
    }

    return (
        <>
            <div className="flex min-h-screen flex-col justify-center bg-beige-400 px-6 py-6">
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="rounded-2xl bg-beige-100 py-8 px-[1.9rem] shadow-lg  sm:py-10">
                        {success ? (
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
                                <p className="mb-3 text-center text-2xl font-normal text-beige-900">Maca poco . . .</p>
                                <form onSubmit={handleSubmit} className="flex flex-col">
                                    <label htmlFor="Nome" className="mb-2 flex flex-auto justify-between">
                                        Nome
                                        <FcCheckmark className={validName ? 'valid' : 'hidden'} />
                                        <IoCloseOutline className={validName || !user ? 'hidden' : 'invalid'} />
                                    </label>
                                    <input
                                        type="text"
                                        id="Nome"
                                        ref={userRef}
                                        autoComplete="off"
                                        placeholder="Da 4 a 24, [a-z, A-Z, 0-9] 📝"
                                        onChange={(e) => setUser(e.target.value)}
                                        value={user}
                                        required
                                        aria-invalid={validName ? 'false' : 'true'}
                                        aria-describedby="uidnote"
                                        onFocus={() => setUserFocus(true)}
                                        onBlur={() => setUserFocus(false)}
                                    />

                                    <button
                                        className=" text-medium easy-in-out mt-12 inline-flex w-full  justify-center rounded-lg bg-beige-500 py-2 px-4 font-medium text-beige-50 shadow-lg transition duration-200 hover:bg-beige-600"
                                        disabled={!validName ? true : false}
                                    >
                                        Registrati
                                    </button>
                                </form>
                                <p className="mx-1 mt-4 flex flex-row justify-between">
                                    Ti sei già registrato?
                                    <br />
                                    <span className="line ">
                                        {/*put router link here*/}
                                        <Link href="/Login">Accedi</Link>
                                    </span>
                                </p>
                            </section>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
